# Skill: Competitive Keyword Gap Snapshot

## Business Question

Why is a competitor beating my product, and which keyword or positioning gap should I close first?

## Use When

- A competitor is outranking or outselling the user's ASIN.
- You need to compare price, trust, offer, rank, and keyword coverage.
- You need a practical organic vs. paid action list.

## Required Data

- User ASIN
- One or more competitor ASINs
- Keyword, rank, or niche data when available
- Price, rating, review count, BSR, seller, stock, and offer context when available
- Sales or velocity proxy when available
- Relevant guardrails from `operator-guardrails.md`

## Agent Task

1. Compare the user's ASIN against competitors on product, price, BSR, reviews, rating, sales velocity, availability, and offer quality.
2. Compare keyword coverage when rank or niche data is available.
3. Identify whether the competitor is winning on trust, price, availability, rank, content, or keyword coverage.
4. Prioritize competitor-proven keywords by relevance, rank gap, and actionability.
5. Classify each opportunity as content, paid, organic, or both.

## Decision Rules

- Do not assume price is the problem if trust, rank, availability, or coverage is the stronger advantage.
- Do not recommend keywords only because volume is high; relevance must matter.
- Separate content opportunities from campaign opportunities.
- Prefer competitor-proven terms over speculative keyword ideas.
- If keyword data is unavailable, produce a competitive positioning read and name keyword depth as the next diagnostic.

## Output Format

Use `templates/recommendation-output.md`.

Must include:

- Competitive delta
- Strongest ranking lever
- Prioritized keyword or positioning gaps
- Organic vs. paid action
- Evidence and confidence limits

Avoid:

- Generic competitor advice
- Price-only diagnosis without evidence
- Keyword claims without source context
