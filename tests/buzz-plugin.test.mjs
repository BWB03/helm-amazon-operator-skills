import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
// Load the shipped .js as an ES module without requiring package.json type changes.
const source = read('plugins/buzz/plugin.js');
const plugin = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
function activate() {
  const tools = [], pages = [];
  plugin.apply({
    react: { createElement: (type, props, ...children) => ({ type, props, children }), useState: value => [value, () => {}] },
    agents: { addTool: value => tools.push(value) },
    pages: { register: value => pages.push(value) },
  });
  return { tools, pages };
}
test('shipped bundle matches canonical Markdown and runtime', () => {
  execFileSync(process.execPath, ['scripts/build-buzz-plugin.mjs', '--check'], { cwd: root });
});
test('registers one page and one instruction tool without host access', () => {
  const manifest = JSON.parse(read('plugins/buzz/manifest.json'));
  assert.equal(manifest.apiVersion, 1);
  assert.equal(manifest.host, undefined);
  assert.deepEqual(plugin.inject, ['react', 'pages', 'agents']);
  const { tools, pages } = activate();
  assert.equal(tools.length, 1);
  assert.equal(pages.length, 1);
  assert.equal(pages[0].primary, true);
  assert.equal(pages[0].component().type, 'section');
  assert.equal(tools[0].name, 'helm_operator_workflow');
});
test('every selectable workflow returns its complete rules and templates', async () => {
  const { tools } = activate();
  const tool = tools[0];
  const ids = tool.inputSchema.properties.workflow.enum;
  assert.equal(ids.length, 5);
  for (const workflow of ids) {
    const result = await tool.call(null, null, { workflow });
    for (const path of ['agent-operating-instructions.md', 'operator-guardrails.md', `skills/${workflow}.md`, 'templates/recommendation-output.md', 'templates/feedback-log.md', 'LICENSE']) {
      assert.ok(result.includes(read(path)), `${workflow} missing ${path}`);
    }
    for (const other of ids.filter(id => id !== workflow)) assert.ok(!result.includes(read(`skills/${other}.md`)));
    assert.match(result, /placeholders below are not approved targets/);
    assert.match(result, /Human approval records a recommendation decision only/);
  }
});
test('unknown, inherited-property and missing workflow inputs fail explicitly', async () => {
  const tool = activate().tools[0];
  for (const workflow of ['unknown', '__proto__', 'constructor', null, 123]) {
    await assert.rejects(tool.call(null, null, { workflow }), /Unknown workflow/);
  }
  await assert.rejects(tool.call(null, null, undefined), /Unknown workflow/);
});
