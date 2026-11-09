# Skill: Ad Waste Audit

## Business Question

Where is ad spend being wasted, and what should be cut, watched, or redirected?

## Use When

- ACOS is high.
- Search terms or targets need cleanup.
- Spend without sales needs review.
- You need to separate waste from intentional discovery.

## Required Data

- Campaign name
- Ad group or targeting group
- Search term, keyword, target, or placement
- Branded vs. non-branded classification when available
- Spend
- Clicks
- Impressions
- Sales or revenue
- Orders or conversions
- ACOS or ROAS
- Date range
- Relevant guardrails from `operator-guardrails.md`

## Agent Task

1. Identify high-spend, low-conversion targets and terms.
2. Identify inefficient terms outside target ACOS, TACoS, or ROAS guardrails.
3. Separate branded, non-branded, competitor, and unclear intent when possible.
4. Protect launch priorities and intentional discovery spend from aggressive cuts.
5. Recommend one action per item: negate, reduce bid, monitor, redirect budget, or escalate.

## Decision Rules

- Do not call discovery spend waste without evidence that it is unintended.
- Prioritize dollar impact over long lists of low-volume terms.
- Escalate strategic terms, launch products, unclear classifications, and anything listed in human review terms.
- Treat very low ACOS on branded terms as a possible growth ceiling, not automatically a win.
- Do not apply campaign changes automatically.

## Output Format

Use `templates/recommendation-output.md`.

Must include:

- Wasted spend estimate
- Negative keyword or target candidates
- Bid reduction candidates
- Monitor list
- Escalations
- Confidence limits

Avoid:

- Treating all high ACOS as waste
- Raw search term dumps
- Live change instructions without human review
