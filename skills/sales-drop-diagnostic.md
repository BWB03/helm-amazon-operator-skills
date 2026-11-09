# Skill: Sales Drop Diagnostic

## Business Question

Why did sales drop, and which funnel signal explains the change?

## Use When

- Sales, revenue, or orders fell.
- A client asks what caused the decline.
- You need to separate traffic, conversion, ads, inventory, offer, and competitor causes.

## Required Data

- Reporting period and comparison period
- Sales or revenue
- Orders or units
- Sessions or traffic proxy when available
- Conversion rate when available
- Ad spend, impressions, clicks, sales, ACOS, or ROAS when available
- Listing status, price, Buy Box, rating, reviews, BSR, stock status, or seller count when available
- Relevant guardrails from `operator-guardrails.md`

## Agent Task

1. Anchor the read with sales, revenue, and order movement.
2. Walk the funnel from impressions or sessions to clicks, conversion, and sales.
3. Check for stockouts, review drops, price movement, Buy Box changes, budget changes, competitor pressure, and BSR shifts.
4. Separate evidence-backed causes from plausible but unverified causes.
5. Return the strongest likely cause, confidence level, and next diagnostic.

## Decision Rules

- Do not claim a sales cause without a funnel signal or source-backed proxy.
- If traffic is stable and conversion fell, route the diagnosis toward listing, offer, trust, or catalog quality.
- If ad spend or impressions fell before sales fell, prioritize ads and budget causes.
- If BSR worsened with price, reviews, or Buy Box movement, include market or competitive causes.
- If inventory is unavailable or constrained, do not over-index on ads or listing fixes.

## Output Format

Use `templates/recommendation-output.md`.

Must include:

- Context
- Likely cause
- Supporting evidence
- Specific next action
- Impact
- Strongest next diagnostic

Avoid:

- Generic sales advice
- Unsupported causation
- Raw data dumps
