# Skill: Catalog Foundation Scan

## Business Question

Where are the catalog and listing-quality holes that should be fixed first?

## Use When

- You have a Category Listing Report, catalog audit, or listing-quality export.
- Catalog issues are piling up and need prioritization.
- Ads or conversion are suffering and the listing foundation may be weak.

## Required Data

- SKU, ASIN, or listing identifier
- Catalog issue type
- Severity if available
- Attribute or field affected
- Suppression, browse node, variation, image, title, bullet, description, backend term, or A+ issue data when available
- Revenue, ads, or priority SKU context when available
- Relevant guardrails from `operator-guardrails.md`

## Agent Task

1. Review catalog and listing-quality issues.
2. Prioritize critical and warning issues before informational cleanup.
3. Rank fixes by severity, affected SKU count, priority product status, and likely business impact.
4. Tie fixes to revenue-producing or ad-supported SKUs when supporting context exists.
5. Return a short fix-first operator list, not a raw audit dump.

## Decision Rules

- Do not recommend running a fresh scan unless the user confirms that cost or quota is acceptable.
- Show critical and warning issues before low-impact cleanup.
- Do not bury suppressed listings, browse node problems, broken variation relationships, or major content gaps.
- If sales or ads context is unavailable, prioritize by catalog severity and ask for business context as the next sharpening step.

## Output Format

Use `templates/recommendation-output.md`.

Must include:

- Top issues
- Affected SKUs or ASINs
- Severity
- Why each issue matters
- Fix-first list
- Watchlist

Avoid:

- Raw issue dumps
- Low-impact cleanup before critical issues
- Alarmist language that says everything must be fixed at once
