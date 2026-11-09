# Helm Amazon Operator Skills

Five free AI workflows for Amazon sellers, agencies, and operators. Use your Amazon reports and brand targets to diagnose a problem, see the evidence behind the recommendation, and decide what to do next.

[Download the pack as a ZIP](https://github.com/BWB03/helm-amazon-operator-skills/archive/refs/heads/main.zip) or open one of the skills below. These are Markdown workflows you can upload or paste into an AI chat or project. They work with the data you provide and require no Helm account or connector. A human reviews each recommendation and decides whether to make changes in Amazon.

## Choose a skill

| Skill | Use it when | Data to start with |
| --- | --- | --- |
| [Sales Drop Diagnostic](skills/sales-drop-diagnostic.md) | Sales fell and you need to find which part of the funnel changed. | Sales and orders for two comparable periods. Add traffic, ads, inventory, or offer data if available. |
| [Ad Waste Audit](skills/ad-waste-audit.md) | You need to decide which terms or targets to cut, watch, or keep for discovery. | A search term or targeting report with spend, clicks, orders, and sales, plus your efficiency targets. |
| [Catalog Foundation Scan](skills/catalog-foundation-scan.md) | You have a backlog of catalog issues and need to decide which fixes come first. | A Category Listing Report, catalog audit, or listing-quality export with affected SKUs or ASINs. |
| [Listing Conversion Diagnosis](skills/listing-conversion-diagnosis.md) | A listing gets traffic but too few shoppers buy. | Traffic and conversion for the ASIN, plus price, Buy Box, stock, ratings, and reviews. |
| [Competitive Keyword Gap Snapshot](skills/competitive-keyword-gap-snapshot.md) | A competitor is outranking or outselling you and you want to see where to focus. | Your ASIN and competitor ASINs. Add keyword ranks and comparable offer data if available. |

Each skill lists the inputs it uses, how it weighs the evidence, and what its output should contain.

## Run your first skill

1. Fill in the relevant parts of [Operator Guardrails](operator-guardrails.md), including your goal, targets, priority products, and approval rules. Mark unknown values as unknown.
2. Give your AI workspace the [Agent Operating Instructions](agent-operating-instructions.md), your filled-in guardrails, the skill you picked, and the [Recommendation Output Template](templates/recommendation-output.md). Paste the file contents if your workspace only accepts text.
3. Attach or paste the relevant data. Identify the marketplace, reporting dates, and SKUs or ASINs in scope. For comparisons, label both periods and use the same metric definitions.
4. Ask the agent to run the skill. Check the evidence, data gaps, confidence, and recommended action. Record your decision in the [Feedback Log](templates/feedback-log.md) if you plan to run the workflow again.

### Example prompt

> Run Sales Drop Diagnostic for the US marketplace. Compare the latest complete week with the prior complete week using the attached reports and my operator guardrails. Identify the strongest supported cause, flag any missing data, and give me one next action for review. Use the Recommendation Output Template.

## About Helm

This is the five-workflow pack originally shared on [Helm Crate](https://helmcrate.com/#free-pack). The [license](LICENSE) carries over from the original Helm source.
