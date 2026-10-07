# The five-system model

## Central claim

A system can be authoritative without being complete.

## The object

Follow one serialized carton of medicine from a manufacturer, through a distributor, and into a hospital pharmacy.

## The five systems

### 1. ERP or commercial system

Authoritative for commercial facts such as the purchase order, trading party, agreed quantity, price, invoice, payment, and credit.

### 2. Warehouse or inventory system

Authoritative for operational inventory facts such as location, on-hand quantity, allocation, quarantine, damage, and availability.

### 3. Serialization or traceability system

Authoritative for serialized identity and event evidence such as commissioning, packing, shipping, receiving, and other observed business steps.

### 4. Trading-partner or distributor system

Authoritative for that organization's side of orders, acknowledgements, shipments, receipts, invoices, and exceptions.

### 5. Pharmacy or clinical system

Authoritative for patient-care facts such as dispensing or administration, within the scope and workflow of that system.

## System of record and system of answer

A system of record owns an authoritative piece of operational state.

A system of answer assembles evidence from several authoritative systems to answer a specific question. It should preserve the provenance, scope, and limits of the records it uses rather than silently becoming another source of truth.

## Recall walkthrough

For a lot-level recall:

- serialization evidence helps identify affected serialized units and their event histories;
- trading-partner records help establish what was shipped, acknowledged, or received;
- inventory systems help determine what remains on hand and where;
- pharmacy or clinical records help determine whether product entered patient-care workflows;
- commercial systems support returns, credits, replacements, and financial reconciliation.

No one system answers the entire exposure question.
