---
title: "Serialization data that fails wholesaler ingestion"
slug: serialization-data-that-fails-wholesaler-ingestion
type: lab
dek: "Most DSCSA compliance problems are not policy problems. They are file format problems."
date: 2026-06-10
status: published
tags: [dscsa, serialization, epcis]
featured: false
category: Working note
---

A manufacturer can be fully serialized and still get rejected at the dock.

The product has a unique identifier. The event history is correct. The lot and expiry are right. And the shipment still bounces, because the EPCIS file that carries all of that information does not match what the receiving wholesaler's system expects.

This happens more than the industry likes to admit. Every trading partner reads the same standard slightly differently. A field that one wholesaler treats as optional, another treats as required. A namespace that validates cleanly in one system throws an error in the next.

The fix is rarely a new capability. It is closer reading of what the receiving system actually accepts, not just what the specification technically allows.

I will keep notes here as I learn more about where these mismatches happen and why.
