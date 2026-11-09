# Recommendation Output Template

Use this structure for every workflow response.

## Executive Summary

- Workflow: `[workflow_name]`
- Brand or client goal used: `[primary_goal]`
- Date range: `[reporting_period]`
- Overall status: `[on_track_at_risk_needs_review]`
- Human review needed: `[yes_no]`

## Recommendation

State the strongest recommendation in plain English.

## Evidence Checked

| Source | What Was Checked | Result | Confidence Limit |
|---|---|---|---|
| `[source]` | `[evidence]` | `[finding]` | `[limit_or_none]` |

## Prioritized Actions

| Priority | Item | Action | Reason | Supporting Evidence | Guardrail Used | Confidence | Review Status |
|---|---|---|---|---|---|---|---|
| `[high_medium_low]` | `[asin_sku_campaign_term_issue]` | `[recommended_action]` | `[reason]` | `[data_points]` | `[guardrail_reference]` | `[high_medium_low]` | `[approve_edit_reject_escalate]` |

## Watchlist

| Item | Why It Is On The Watchlist | Data Needed Next | Review Date |
|---|---|---|---|
| `[item]` | `[reason]` | `[missing_or_future_data]` | `[date]` |

## Escalations

| Item | Escalation Reason | Decision Needed |
|---|---|---|
| `[item]` | `[reason]` | `[decision_needed]` |

## Brand Or Client-Facing Note

`[plain_language_summary_for_reporting_or_internal_update]`

## Data Gaps

- `[missing_data_or_context_1]`
- `[missing_data_or_context_2]`
- `[missing_data_or_context_3]`
