# Feedback Log Template

Use this after every workflow run. The goal is to improve the next recommendation.

| Date | Workflow | Recommendation | Review Result | What Changed | Miss Type | Instruction Update Needed |
|---|---|---|---|---|---|---|
| `[date]` | `[workflow_name]` | `[recommendation_summary]` | `[accepted_edited_rejected_escalated]` | `[what_human_changed]` | `[miss_type]` | `[instruction_update]` |

## Review Result Definitions

- Accepted: the recommendation was used as written.
- Edited: the recommendation was useful but required changes.
- Rejected: the recommendation was not useful or conflicted with guardrails.
- Escalated: the recommendation requires human decision before action.

## Miss Types

- missing_brand_or_client_context
- wrong_threshold
- too_aggressive
- too_conservative
- insufficient_data
- ignored_launch_context
- ignored_catalog_or_listing_risk
- unclear_recommendation
- unsupported_causation
- no_miss

## Instruction Update Notes

When a recommendation is edited or rejected, write one sentence that would have prevented the miss.

Example format:

`When [condition] is true, the agent should [preferred_behavior] because [guardrail_or_reason].`
