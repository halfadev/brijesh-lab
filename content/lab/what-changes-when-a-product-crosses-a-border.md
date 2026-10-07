---
title: "What changes when a product crosses a border"
slug: what-changes-when-a-product-crosses-a-border
type: lab
dek: "Serialization rules do not travel with the product. Every market has its own version of the truth."
date: 2026-07-02
status: published
tags: [serialization, supply-chain, compliance]
featured: true
category: Research note
---

A single SKU can carry a different identifier format in the US, the EU, and Saudi Arabia, and all three can be correct.

That is the part people outside the industry find hardest to believe. There is no single global serialization standard that a manufacturer implements once. There is a shared idea, GS1 identifiers, aggregation, event tracking, and then a long list of local variations on top of it: which authority the data reports to, how aggregation is verified, what a wholesaler is allowed to do with a case once it arrives.

Software that handles this well does not try to flatten those differences into one model. It treats the differences as the actual requirement, and builds the flexibility in from the start.

I am still working out where that flexibility should live: in the data model, in the integration layer, or in the process around both.
