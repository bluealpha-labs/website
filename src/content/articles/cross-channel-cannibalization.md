---
title: 'Cross-Channel Cannibalization: The Hidden Revenue Killer in Your Marketing Stack'
description: 'How to detect, measure, and prevent channels from stealing credit and budget from each other'
image: '#assets/backgrounds/background-6.png'
author: 'matthias'
date: 2025-03-20
time: 5
tags: ['incrementality', 'mmm']
status: 'published'
---

> Executive summary

- 30-50% of attributed conversions involve channel cannibalization
- Retargeting cannibalizes organic conversions at 70% rate
- Proper interaction modeling improves budget efficiency by 25%
- Channel synergies can amplify impact by 40% when optimized correctly

## The $5M problem hiding in plain sight

You increase Meta spend by $1M. Revenue goes up $3M. Success? Not if Google revenue simultaneously dropped $2M. You just paid $1M to move revenue between channels.

This is cannibalization—and it's everywhere.

## Types of cannibalization destroying your efficiency

### 1. Search-to-search cannibalization

- Branded search steals from organic
- Shopping ads cannibalize text ads
- Paid listings override free listings

Real impact: 60-80% of branded paid search is cannibalized.

### 2. Social retargeting cannibalization

- Retargeting users already coming back
- Multiple platforms claiming same conversion
- Acceleration vs. generation confusion

Real impact: Only 30% of retargeting is truly incremental.

### 3. Cross-platform substitution

- Meta prospecting → Google search
- TikTok awareness → Meta conversion
- Email trigger → Direct return

Real impact: 40% of conversions involve 3+ touchpoints.

### 4. Temporal cannibalization

- This week's campaign steals from next week
- Flash sales pull forward planned purchases
- Promotions shift timing, not demand

Real impact: 25% of promo revenue is pulled forward.

## Detection methods that actually work

### 1. Channel interaction testing

Turn channels on/off in combination:

```
Test 1: Meta only
Test 2: Google only
Test 3: Both
Test 4: Neither

Synergy = (Test3 - Test4) - (Test1 - Test4) - (Test2 - Test4)
```

Positive synergy = channels complement
Negative synergy = cannibalization

### 2. Incremental overlap analysis

For users exposed to multiple channels:

1. Calculate single-channel conversion rate
2. Calculate multi-channel conversion rate
3. Compare to expected independent rate

If actual < expected: cannibalization
If actual > expected: synergy

### 3. Time-lagged regression

Model with interaction terms:

```
Sales = β₀ + β₁×Meta + β₂×Google + β₃×(Meta×Google) + ε
```

Negative β₃ indicates cannibalization.

### 4. Path removal testing

Remove channels from user journey:

- Block retargeting for cohort A
- Measure organic return rate
- Compare to retargeted cohort B
- Difference = true incremental impact

## The synergy opportunity most miss

Not all interaction is cannibalization. True synergies exist:

### TV + Digital: 1.4x multiplier

- TV drives search intent
- Digital captures demand
- Combined impact exceeds sum

### Video + Display: 1.3x multiplier

- Video creates awareness
- Display provides reminder
- Frequency across formats works

### Email + Paid: 1.2x multiplier

- Email activates dormant users
- Paid reinforces message
- Multi-channel pressure converts

## Building an interaction-aware MMM

### Standard MMM (wrong):

```
Sales = Σ(βᵢ × Channelᵢ)
```

### Interaction MMM (right):

```
Sales = Σ(βᵢ × Channelᵢ) + Σ(γᵢⱼ × Channelᵢ × Channelⱼ)
```

### Implementation steps:

1. **Define interaction matrix**

- Which channels logically interact?
- What's the expected direction?
- What's the time lag?

2. **Test interactions systematically**

- One pair at a time
- Control for confounds
- Validate with holdouts

3. **Incorporate into model**

- Start with main effects
- Add interactions gradually
- Validate improvement

## Channel portfolio optimization

### Complementary channels (invest in both):

- YouTube + Google Search
- TV + Social
- Podcast + Direct Mail

### Substitute channels (choose one):

- Facebook vs. Instagram (same inventory)
- Google Shopping vs. Amazon Ads
- Multiple retargeting platforms

### Independent channels (evaluate separately):

- Influencer marketing
- Affiliate programs
- Organic content

## The retargeting trap

Retargeting looks amazing because it targets high-intent users. Reality check:

### Test: 30-day retargeting holdout

- Control: No retargeting
- Test: Standard retargeting

Results across 20 brands:

- Attributed ROAS: 12x
- Incremental ROAS: 2.1x
- Cannibalization rate: 82%

### Optimal retargeting strategy:

- First 24 hours: Skip (coming back anyway)
- Days 2-7: Light touch (1-2 impressions)
- Days 8-30: Standard frequency
- Day 30+: Win-back campaigns only

## Platform arbitrage opportunities

Exploit platform measurement differences:

### Meta over-credits view-through

→ Reduce Meta, increase Google
→ Same conversions, lower cost

### Google over-credits last-click

→ Increase upper-funnel Meta
→ Harvest with Google Brand

### TikTok broad attribution

→ Use for awareness only
→ Capture with other channels

## Implementation roadmap

### Week 1-2: Audit current overlap

- Pull user-level path data
- Calculate channel overlap rates
- Identify suspicious patterns

### Week 3-4: Run first interaction test

- Choose highest-spend pair
- Design on/off test
- Measure incremental impact

### Week 5-6: Adjust budgets

- Reduce cannibalistic spend
- Reinvest in synergistic pairs
- Monitor total impact

### Week 7-8: Build systematic testing

- Create testing calendar
- Automate measurement
- Integrate into planning

## Red flags you're being cannibalized

1. Channel ROAS inversely correlated
2. Total ROAS flat despite spend changes
3. High assisted conversion rates
4. New channel launches hurt others
5. Dayparting effects are extreme

## The measurement stack for interaction

### Daily monitoring:

- Channel ROAS trends
- Overlap rates
- Path analysis
- Correlation matrices

### Weekly testing:

- Holdout tests
- Path removal
- Daypart experiments
- Geo-based validation

### Monthly optimization:

- Portfolio rebalancing
- Interaction model updates
- Synergy maximization
- Cannibalization reduction

## Your 30-day action plan

1. Calculate correlation between channel revenues
2. Identify top 3 potential cannibalization pairs
3. Run holdout test on most suspicious pair
4. Quantify incremental vs. cannibalized revenue
5. Adjust budgets based on true incrementality

Stop letting channels steal from each other. Start orchestrating them.

—

Source: Cross-Channel Cannibalization: The Hidden Revenue Killer in Your Marketing Stack — BlueAlpha, Mar 20, 2025
