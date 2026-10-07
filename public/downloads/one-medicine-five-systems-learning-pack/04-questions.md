# Questions for grounded exploration

1. A hospital receives a serialized medicine but inventory does not update. Which systems should I investigate first, and what evidence should I expect from each?
2. Which system would I trust to determine whether a specific medicine was dispensed? What would that record not prove?
3. Give me an example where two systems appear to disagree but both records are technically correct.
4. Walk a pharmaceutical recall across all five systems. Identify the question each system answers.
5. What identifiers would I need to connect a purchase order to an individual serialized unit? Where might each identifier first appear?
6. Explain the difference between a system of record and a system of answer using a concrete discrepancy investigation.
7. Design an AI agent that investigates discrepancies without replacing any authoritative system. Include evidence retrieval, identity resolution, provenance, uncertainty, escalation, and permission boundaries.

## Follow-up prompts

- What fact is each system authoritative for?
- What evidence is missing?
- Are the records contradictory, or do they describe different times, scopes, or levels of identity?
- Which identifier connects the records, and where can that join fail?
- What conclusion is supported, and what conclusion would exceed the evidence?
