# Operator Guardrails

Fill this out before running any workflow. The agent should use these guardrails to decide whether a recommendation is appropriate.

## Account Context

- Brand or client name: `[brand_or_client_name]`
- Primary business goal: `[primary_goal]`
- Current priority: `[current_priority]`
- Reporting period: `[reporting_period]`
- Decision owner: `[decision_owner]`
- Review cadence: `[review_cadence]`

## Goal Profile

Choose the current operating mode:

- Growth: `[growth_priority]`
- Profitability: `[profitability_priority]`
- Launch velocity: `[launch_priority]`
- Share of voice: `[share_of_voice_priority]`
- Inventory or cash recovery: `[inventory_or_cash_priority]`
- Mixed objective notes: `[mixed_objective_notes]`

Plain-English goal:

`[primary_goal]`

## Business Targets

- Target ACOS: `[target_acos]`
- Target TACoS: `[target_tacos]`
- Target ROAS: `[target_roas]`
- Margin threshold: `[margin_threshold]`
- Revenue target: `[revenue_target]`
- Conversion target: `[conversion_target]`
- Material change threshold: `[material_change_threshold]`

## Product And Category Context

- Hero ASINs or SKUs: `[hero_asins_or_skus]`
- Launch ASINs or SKUs: `[launch_asins_or_skus]`
- Priority categories: `[priority_categories]`
- Products that can tolerate aggressive spend: `[aggressive_spend_products]`
- Products that require conservative spend: `[conservative_spend_products]`
- Inventory, promo, or seasonal notes: `[inventory_promo_seasonal_notes]`

## Ads Strategy

- Branded strategy: `[branded_strategy]`
- Non-branded strategy: `[non_branded_strategy]`
- Wasted spend threshold: `[wasted_spend_threshold]`
- Minimum clicks before action: `[minimum_clicks_before_action]`
- Minimum spend before action: `[minimum_spend_before_action]`
- Terms or targets requiring human review: `[human_review_terms]`

## Catalog And Listing Rules

- Listing fields that are high risk to change: `[high_risk_listing_fields]`
- Catalog issues considered critical: `[critical_catalog_issues]`
- Catalog issues considered warnings: `[warning_catalog_issues]`
- Content standards or brand voice notes: `[content_standards]`
- Known variation, browse node, or attribute risks: `[catalog_risks]`

## Approval Rules

The agent may recommend these actions without extra context:

- `[preapproved_action_1]`
- `[preapproved_action_2]`
- `[preapproved_action_3]`

The agent must escalate these actions for human review:

- `[escalation_action_1]`
- `[escalation_action_2]`
- `[escalation_action_3]`

## No-Go Actions

The agent must not recommend or take these actions:

- `[no_go_action_1]`
- `[no_go_action_2]`
- `[no_go_action_3]`

## Output Preferences

- Preferred recommendation style: `[recommendation_style]`
- Required confidence level: `[required_confidence_level]`
- Include data table: `[include_data_table_yes_no]`
- Include client or brand-facing summary: `[include_summary_yes_no]`
