# Skill: Listing Conversion Diagnosis

## Business Question

Why is a listing getting traffic but failing to convert?

## Use When

- Traffic is stable or growing, but orders or conversion are weak.
- Ads are spending, but sales are not following.
- A team is tempted to increase ad spend before fixing the listing.

## Required Data

- ASIN or SKU
- Sessions, clicks, or traffic proxy
- Orders, unit session percentage, CVR, or conversion proxy
- Price
- Rating and review count
- Buy Box status
- Stock status
- BSR or category rank when available
- Listing content quality notes or catalog issues when available
- Competitor price, rating, review, rank, or offer context when available
- Relevant guardrails from `operator-guardrails.md`

## Agent Task

1. Confirm whether this is a traffic problem, conversion problem, or both.
2. Compare offer, price, rating, review count, Buy Box, stock, content, and catalog signals.
3. Identify whether the likely bottleneck is content, offer, trust, catalog quality, product-market fit, or competitor pressure.
4. Rank fixes by expected conversion impact.
5. Explain why more ad spend is or is not appropriate.

## Decision Rules

- Do not recommend increasing ad spend when conversion is the bottleneck.
- Compare price, reviews, rating, and content quality before blaming ads.
- If Buy Box or stock is unstable, prioritize offer availability before content tweaks.
- If catalog data is unavailable, continue with listing and market signals and mark the missing confidence source.

## Output Format

Use `templates/recommendation-output.md`.

Must include:

- Conversion bottleneck
- Supporting evidence
- Ranked fixes
- Expected impact
- Why not more ad spend
- Next diagnostic

Avoid:

- Generic listing tips
- More spend before conversion repair
- Unsupported content claims
