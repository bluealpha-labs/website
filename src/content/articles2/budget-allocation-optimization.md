---
title: 'Data-Driven Budget Allocation: Moving Beyond Last-Click Politics'
description: 'How to optimize marketing spend allocation using portfolio theory and incrementality data'
image: '#assets/backgrounds/background-2.png'
author: 'matthias'
date: 2025-03-18
time: 6
tags: ['mmm', 'incrementality']
status: 'published'
---

> Executive summary

- Political budget allocation costs brands 25-40% in efficiency
- Portfolio optimization beats single-channel focus by 30%+
- Marginal ROAS, not average ROAS, should drive decisions
- Dynamic reallocation captures 15-20% additional value

## The $10M question nobody's answering right

You have $10M to spend next quarter. How do you split it across channels? Most teams use:

- Last quarter's split (momentum)
- Platform reps' recommendations (bias)
- Competitor benchmarks (irrelevant)
- Gut feeling (random)

There's a better way.

## Marginal vs. average: the critical distinction

Average ROAS tells you what happened. Marginal ROAS tells you what happens next.

**Example:**

- Google Ads shows 4x average ROAS at $1M/month
- But marginal ROAS at current spend is 1.5x
- Meta shows 3x average ROAS at $500K/month
- But marginal ROAS at current spend is 3.5x

Where do you invest the next dollar? Meta, despite lower average ROAS.

## The efficient frontier framework

Borrowed from portfolio theory, adapted for marketing:

### Step 1: Build response curves

For each channel, model:

```
Revenue = a × (Spend)^b × e^(-c×Spend)
```

Where:

- a = baseline efficiency
- b = scaling factor (<1 means diminishing returns)
- c = saturation rate

### Step 2: Calculate marginal returns

Derivative of response curve at current spend level:

```
Marginal ROAS = dRevenue/dSpend
```

### Step 3: Optimize allocation

Equalize marginal ROAS across channels (with constraints):

- Minimum spend thresholds
- Maximum capacity limits
- Business constraints

## Real-world constraints that matter

### Platform minimums

- Google: $10K/month for algorithm learning
- Meta: $350/day per campaign
- TikTok: $500/day minimum

### Saturation points

- Search: limited by keyword volume
- Social: audience exhaustion
- Display: frequency capping

### Interaction effects

- Search + Social = 1.3x combined impact
- Video + Display = 0.8x (cannibalization)
- Email + Paid = 1.1x lift

## The dynamic reallocation playbook

### Weekly micro-adjustments

Monitor marginal ROAS weekly:

- Shift 5-10% between channels
- Follow the marginal efficiency
- Maintain algorithm stability

### Monthly portfolio rebalancing

Full optimization cycle:

1. Recalculate response curves
2. Update saturation points
3. Rerun portfolio optimization
4. Implement 20-30% shifts

### Quarterly strategic shifts

Major reallocation based on:

- Seasonal patterns
- Competitive dynamics
- New channel tests
- Creative performance

## Building your optimization model

### Data requirements

- 12+ months historical spend/revenue by channel
- Weekly or daily granularity
- External factors (seasonality, promotions)
- Incrementality test results

### Model architecture

1. **Base model:** Log-log regression per channel
2. **Saturation:** Hill transformation or adstock
3. **Interactions:** Cross-channel multipliers
4. **Constraints:** Business rules engine

### Validation approach

- Holdback testing: implement 80% of recommended shift
- Compare actual vs. predicted improvement
- Adjust model parameters based on error

## Common pitfalls in budget optimization

### 1. Ignoring confidence intervals

Model says shift $2M? Check the confidence bounds first.

### 2. Moving too fast

50% reallocation in one month breaks algorithms and teams.

### 3. Over-optimizing for efficiency

Maximum efficiency ≠ maximum growth. Balance is key.

### 4. Ignoring long-term effects

Brand building takes time. Don't sacrifice it for quick wins.

### 5. Platform reporting delays

Account for 3-7 day attribution windows in optimization.

## The incrementality adjustment layer

Raw platform data misleads. Apply incrementality factors:

### Channel multipliers

- Branded search: 0.2x (captures existing demand)
- Non-branded search: 0.5x
- Social prospecting: 0.8x
- Social retargeting: 0.3x
- Display: 0.4x

### Temporal adjustments

- New creative: 1.2x multiplier first 2 weeks
- Fatigued creative: 0.6x after 4 weeks
- Seasonal peaks: 0.7x (more competition)

## Automation and tooling

### Build or buy decision tree

**Build if:**

- Unique business model
- Complex constraints
- Need full control
- Have technical resources

**Buy if:**

- Standard e-commerce/SaaS
- Limited technical resources
- Need quick implementation
- Want proven methodology

### Essential features

- Real-time data ingestion
- Scenario modeling
- Constraint handling
- Incremental impact tracking
- Automated recommendations

## Case study: From politics to performance

B2B SaaS company replaced political allocation with data-driven optimization:

**Before:**

- Google: 40% (CEO's favorite)
- LinkedIn: 30% (Sales team push)
- Facebook: 20% (Marketing preference)
- Other: 10%

**After optimization:**

- Google: 25% (saturated)
- LinkedIn: 20% (low marginal ROAS)
- Facebook: 35% (underinvested)
- TikTok: 15% (new, high marginal)
- Other: 5%

**Result:** 32% CAC reduction, 28% revenue increase

## Implementation roadmap

### Month 1: Baseline

- Gather historical data
- Calculate current marginal ROAS
- Identify quick wins

### Month 2: Test

- Shift 10-15% of budget
- Measure impact
- Validate model predictions

### Month 3: Scale

- Implement full optimization
- Monitor daily
- Adjust weekly

### Month 4+: Iterate

- Refine models
- Add new channels
- Increase automation

## Your action items

1. Calculate marginal ROAS for top 3 channels today
2. Identify your most over/under-invested channel
3. Test a 10% reallocation this week
4. Measure incremental impact
5. Scale what works

Stop allocating budget based on politics. Start optimizing based on data.

—

Source: Data-Driven Budget Allocation: Moving Beyond Last-Click Politics — BlueAlpha, Mar 18, 2025
