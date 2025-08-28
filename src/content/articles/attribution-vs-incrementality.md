---
title: 'Attribution vs. Incrementality: Why Your Metrics Are Lying to You'
description: 'Understanding the critical difference between correlation and causation in marketing measurement'
image: '#assets/backgrounds/background-1.png'
author: 'matthias'
date: 2025-03-16
time: 5
tags: ['incrementality', 'mmm']
status: 'published'
---

> Executive summary

- Attribution tells you who touched the ball; incrementality tells you who scored
- Platform-reported ROAS overestimates true impact by 200-400% on average
- Multi-touch attribution still suffers from fundamental selection bias
- Combining incrementality testing with attribution provides complete picture

## The fundamental problem with attribution

Attribution models—whether last-click, first-click, or data-driven—share a fatal flaw: they assume correlation equals causation. That user who clicked your Google ad and converted? They might have purchased anyway.

## Real numbers that should terrify you

Recent incrementality studies across 50+ brands revealed:

- Facebook's reported ROAS: 4.2x
- True incremental ROAS: 1.1x
- Google's reported ROAS: 5.8x
- True incremental ROAS: 2.3x

The gap? That's money you're lighting on fire.

## Why attribution fails: the selection bias trap

### The searching user paradox

Users searching "buy Nike Air Max" have high purchase intent. Google takes credit when they click an ad and buy. But would they have purchased through organic results anyway? Attribution can't answer this.

### The retargeting illusion

Retargeting shows stellar attributed ROAS because it targets users who already visited your site. You're paying to accelerate purchases that were already likely, not creating new demand.

### Cross-device chaos

User sees Instagram ad on phone, buys on laptop through direct traffic. Instagram gets zero credit. User would never have known about your brand without that ad. Attribution fails in both directions.

## Incrementality: measuring what actually matters

Incrementality answers one question: what wouldn't have happened without this marketing activity?

### Methods that work

**1. Holdout tests**

- Exclude 10-20% of audience from campaigns
- Compare conversion rates: exposed vs. holdout
- True incrementality = difference in outcomes

**2. Geo experiments**

- Turn off marketing in select regions
- Measure relative performance change
- Scale findings to full market

**3. On/off tests**

- Pause channel for 2-4 weeks
- Measure baseline demand
- Calculate incremental lift when reactivated

**4. Regression analysis**

- Model sales as function of marketing + external factors
- Isolate marketing's incremental contribution
- Requires 12+ months of data

## The attribution-incrementality framework

Don't abandon attribution—combine it with incrementality:

### Attribution tells you:

- Customer journey patterns
- Touchpoint sequences
- Channel interactions
- Creative performance

### Incrementality tells you:

- True causal impact
- Baseline vs. incremental demand
- Actual ROAS
- Budget efficiency

### Together they reveal:

- Which journeys drive incremental value
- Where attribution misleads
- Optimal budget allocation
- True channel contribution

## Platform metrics: a translation guide

### Facebook/Meta

- Reported conversions: all conversions within attribution window
- Reality: 60-70% would happen anyway
- Adjustment factor: divide reported ROAS by 2.5-3.5

### Google Ads (Search)

- Reported conversions: last-click + modeled attribution
- Reality: captures existing demand
- Adjustment factor: divide branded ROAS by 4-5, non-branded by 2-3

### TikTok

- Reported conversions: view-through + click-through
- Reality: loose view-through attribution inflates impact
- Adjustment factor: divide by 2-3, focus on click-through only

## Building an incrementality testing roadmap

### Quarter 1: Baseline establishment

- Run 2-3 holdout tests on major channels
- Document platform ROAS vs. incremental ROAS
- Calculate adjustment factors

### Quarter 2: Expand testing

- Test creative variations for incrementality
- Measure audience segment differences
- Validate with geo experiments

### Quarter 3: Model integration

- Build incrementality-adjusted MMM
- Create automated monitoring
- Develop channel interaction measurements

### Quarter 4: Optimization

- Reallocate budget based on incremental ROAS
- Test threshold effects
- Measure portfolio incrementality

## Common objections, debunked

**"Holdout tests reduce reach"**
10% holdout = 2% revenue impact short-term, 20-30% efficiency gain long-term

**"Incrementality testing is expensive"**
Cost of not knowing true ROAS: 30-50% wasted budget

**"Platform algorithms need data"**
True, but optimizing for non-incremental conversions trains algorithms wrong

## The path forward

1. Accept that attribution metrics overstate impact
2. Run incrementality test on highest-spend channel
3. Calculate your adjustment factor
4. Apply to budget decisions
5. Test remaining channels quarterly
6. Build incrementality into planning process

## Your action items

Week 1: Design holdout test for largest channel
Week 2: Implement test, ensure proper tracking
Week 3-4: Run test, maintain discipline
Week 5: Analyze results, calculate true ROAS
Week 6: Adjust budgets based on incremental impact

Stop optimizing vanity metrics. Start measuring real business impact.

—

Source: Attribution vs. Incrementality: Why Your Metrics Are Lying to You — BlueAlpha, Mar 16, 2025
