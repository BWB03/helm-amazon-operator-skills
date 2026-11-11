# Buzz plugin

This wrapper packages all five workflows in one Buzz page and the `helm_operator_workflow` agent tool. It needs no connector, account key, network grant or file access. It supplies instructions; your agent does the analysis using reports you provide in a conversation.

## Install and try it

1. Use a Buzz desktop version with plugins and the `react`, `pages` and `agents` services.
2. In **Settings → Plugins → Manage plugins → Add**, choose **Browse** under Add from folder and select this `plugins/buzz` folder. Review and install the plugin. The installed files must include `manifest.json` and `plugin.js`.
3. Open **Helm Amazon Operator** in navigation. Select a workflow and copy the prompt into a conversation with your agent.
4. Provide completed guardrails (available under **Show instructions and templates**), client, marketplace, reporting dates, product scope and relevant reports in that conversation. Do not put credentials in reports or guardrails.
5. Ask the agent to run the prompt. It can call `helm_operator_workflow` with the selected workflow ID to retrieve the full instructions. If the tool is unavailable in that agent's runtime, paste the full bundle from the page instead.
6. Review the recommendation, evidence, missing data and confidence. Record approve/edit/reject/escalate and feedback in the thread. Approval does not execute anything.

The page does not start agents or retain client data or targets. Reports remain subject to the privacy/access of the conversation and agent you choose. Live source connections and recurring runs require separate setup; this plugin does not configure them.

## First-run verification in Buzz

- Verify the page appears and all five workflow choices render.
- Select Sales Drop and Ad Waste in turn; confirm both the prompt and expanded bundle match the selection.
- In a private test conversation, ask your agent to retrieve each workflow with the tool. If unavailable, use the documented paste fallback.
- Try synthetic periods: sales 1,000 → 800, sessions 100 → 80, orders 10 → 8; keep price and stock stable. The response should identify observed traffic movement, distinguish inference from evidence and retain human review.
- Try an ad report without a target ACOS or discovery strategy. The response should flag those gaps, not invent targets or apply negatives.
- Disable the plugin and verify its page and tool disappear.

Automated checks validate registration and bundle content, not model reasoning or a live Buzz installation.

## Maintain the wrapper

Requires Node.js 18+; no dependencies or build install step.

```sh
node scripts/build-buzz-plugin.mjs
node scripts/build-buzz-plugin.mjs --check
node --test
```

Run these from the repository root. Edit canonical Markdown for workflow changes; edit `runtime.txt` for UI/tool changes. Commit the regenerated `plugin.js` so installation needs no build. API v1 loads one self-contained module; the source Markdown is embedded in it, with no runtime imports. `runtime.txt` and this README are development/documentation files, not runtime assets.

After installing via Browse, local edits can be activated by Buzz's plugin reload tooling. Changes to host permissions require owner review. See the [Buzz plugin architecture](https://github.com/block/buzz-app/blob/main/docs/plugin-architecture.md).

The repository's [Business Source License](../../LICENSE) also applies to the wrapper and embedded content. It is displayed on the plugin page and included in every bundle.
