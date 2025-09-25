---
title: 'How to Measure Offline Channels (OOH) with MMM & Geo Hold-Outs'
description: 'Quantify incremental traffic and CPA from offline media using geo-testing and MMM'
image: '#/assets/backgrounds/background-2.png'
author: 'matthias'
date: 2025-08-28
time: 8
tags: ['mmm']
status: 'published'
category: 'Out-of-Home Advertising'
cta:
  heading: 'Want hands-on help?'
  body: '{link} to let us apply this playbook to your company’s goals.'
  linkLabel: 'Book a 1:1 call'
---

## Why this playbook exists

Offline media (subway posters, billboards, street furniture) can boost upper-funnel reach but is notoriously hard to measure.

This playbook shows how one of our customers used a four-week OOH test, a geo split, and Marketing Mix Modeling (MMM) to quantify incremental traffic and cost per acquisition.

You can replicate the same framework to decide whether to scale, refine or pause your offline spend.

### Key outcomes achieved

- +60k incremental website visitors (95% Confidence Interval) at $4 incremental CPA.
- CPA testing confirmed effectiveness but validated our concerns about cost viability → reallocated to proven efficient channels.

## When to use this

| **Use-case**                             | **Signals it fits**                                 |
| ---------------------------------------- | --------------------------------------------------- |
| First offline test (OOH, transit, print) | Over $20k media budget, clear geo targeting options |
| Board asks for _“Show me impact”_        | Need statistical confidence before scaling          |
| Need to compare offline to digital ROI   | MMM already running for digital channels            |

### Prerequisites

- Access to daily (or weekly) web sessions and conversions by market
- Ability to withhold media in at least one comparable geo region
- MMM tooling that supports geo dummies / synthetic control

## Step‑by‑step framework

1. **Define KPI hierarchy**

   _Primary_: new site users

   _Secondary_: sign‑ups, purchases

2. **Select test vs control markets**

   _Example_: Run creative in _City A_ subway; hold out _City B_ (similar pop. & baseline traffic).

   ![Geo split map](#/assets/playbooks/ooh-measurement/ooh-playbook-geo-spli-map.png)

3. **Allocate media**

   Even flight across 4 weeks; track impressions & spend daily.

4. **Collect data**

   Export sessions, sign-ups, purchases by market. Tag spend by channel.

5. **Model with MMM + synthetic control**

   Add a binary “City A × week” variable. Validate lift at 95% confidence.

6. **Calculate incremental CPA**

   Spend ÷ incremental outcome for each funnel stage.

7. **Decide**

   If traffic CPA < goal → keep for awareness.

   If conversion CPA > threshold → pause or refine creative/offer.

![OOH 4-step framework](#/assets/playbooks/ooh-measurement/ooh-playbook-4-step.png)

## Results template (anonymized)

| Metric    | Lift (Δ) | Incremental CPA | Confidence |
| --------- | -------- | --------------- | ---------- |
| New users | +60k     | **$4**          | 95%        |
| Sign-ups  | +95      | $2.3k           | 95%        |
| Purchases | +12      | $16k            | 95%        |

_Interpretation_: Offline media delivers cost‑efficient awareness, but conversion CPA remains above target at current spend level.

![MMM results visualization](#/assets/playbooks/ooh-measurement/ooh-playbook-mmm.png)

## **Decision tree**

![Decision tree](#/assets/playbooks/ooh-measurement/ooh-playbook-decision-tree.png)

## Common pitfalls to avoid

- **Insufficient control market**; pick geos with ≤10% baseline variance.
- **Too short a flight**; 2-week bursts rarely beat noise; aim for ≥4 weeks.
- **Attribution overlap**; switch off local digital promos or tag them separately.
- **Ignoring confidence intervals**; lift without significance is just noise.

## Replication checklist

| **✔︎** | **Task**                                                                        |
| ------- | ------------------------------------------------------------------------------- |
| ☐       | Define primary & secondary KPIs (e.g., new users, sign-ups).                    |
| ☐       | Select ≥ 2 comparable markets for “test” vs “control”.                          |
| ☐       | Reserve offline media exclusively in test market for ≥ 4 weeks.                 |
| ☐       | Ensure daily (or weekly) outcome data by market flows into your data warehouse. |
| ☐       | Add a “geo x week” dummy to your MMM specification.                             |
| ☐       | Run model, verify ≥ 90% power, 95% confidence.                                  |
| ☐       | Calculate incremental CPA for each funnel stage.                                |
| ☐       | Document spend-reallocation decision and next-step hypothesis.                  |
