import type { Metadata } from "next";
import Image from "next/image";
import { ArticleBody, ArticleHeader, Callout, KeyConcept, Sources } from "@/components/ui/ArticlePrimitives";
import { PageContainer } from "@/components/ui/LayoutPrimitives";
import { HardLink } from "@/components/HardLink";
import { pageMetadata } from "@/lib/metadata";

const systems = [
  ["ERP / commercial", "Orders, terms, invoices, credits"],
  ["Warehouse / inventory", "Location, quantity, status, availability"],
  ["Serialization / traceability", "Identity and serialized event evidence"],
  ["Trading partner / distributor", "Its side of shipments, receipts, and invoices"],
  ["Pharmacy / clinical", "Dispensing, administration, and patient-care context"],
] as const;

const identifiers = [
  ["Product identifier", "What product is this?"],
  ["Lot or batch", "Which production group did it come from?"],
  ["Serial number", "Which individual saleable unit is this?"],
  ["Purchase order", "Which commercial request caused the movement?"],
  ["Shipment", "Which delivery contained it?"],
  ["Location", "Which organization or facility handled it?"],
] as const;

const agentSteps = [
  "Understand the question being asked",
  "Identify which systems contain the required evidence",
  "Retrieve the appropriate records",
  "Resolve identities across those records",
  "Identify disagreements or missing evidence",
  "Present a supported conclusion",
  "Recommend or execute an action within defined permissions",
] as const;

export const metadata: Metadata = pageMetadata({
  title: "One Medicine, Five Systems of Record",
  description:
    "Why a single serialized medicine can have several correct but incomplete digital records—and how to assemble them into a trustworthy answer.",
  path: "/explainers/one-medicine-five-systems",
});

export default function OneMedicineFiveSystemsPage() {
  return (
    <main className="publication-entry medicine-explainer">
      <PageContainer width="wide">
        <HardLink className="explainer-back" href="/explainers">
          ← All explainers
        </HardLink>

        <ArticleHeader
          eyebrow="Explainer · Enterprise systems"
          title="One medicine, five systems of record"
          dek="A single carton can be one physical object and several correct-but-incomplete digital records. The useful answer depends on how those records are assembled."
          meta="A systems model for pharmaceutical operations"
        />

        <ArticleBody>
          <p className="article-lead">
            Imagine a single carton of medicine moving from a manufacturer, through a distributor, and eventually into a hospital pharmacy.
          </p>
          <p>Physically, it is one object.</p>
          <p>Digitally, it may be five different things.</p>
          <p>
            The commercial system knows what was ordered and sold. The warehouse system knows where inventory is supposed to be. The serialization system knows the identity and event history of the serialized product. A trading partner has its own record of what it shipped, received, or invoiced. Once the medicine enters patient care, the pharmacy or clinical system knows something entirely different again.
          </p>
          <p>All five records can be correct. None of them necessarily tells the whole story.</p>

          <KeyConcept>
            <strong>A system can be authoritative without being complete.</strong>
          </KeyConcept>

          <h2>Start with one medicine</h2>
          <p>Suppose we want to answer a seemingly simple question:</p>
          <p className="explainer-question">What happened to this medicine?</p>
          <p>The answer depends on what we actually mean.</p>
          <ul>
            <li>Did somebody order it?</li>
            <li>Was the order accepted?</li>
            <li>Was it shipped?</li>
            <li>Which serialized unit was shipped?</li>
            <li>Did it physically arrive?</li>
            <li>Is it still in inventory?</li>
            <li>Was it dispensed?</li>
            <li>Was the expected price invoiced?</li>
            <li>Has it been returned, recalled, credited, or replaced?</li>
          </ul>
          <p>These are not different versions of the same question. They are different questions, answered by different systems.</p>

          <figure className="medicine-system-map">
            <div className="medicine-system-image">
              <Image
                src="/images/one-medicine-five-systems.png"
                alt="Hand-drawn systems map with one serialized medicine carton in the center and five surrounding operational systems connected to it"
                width={1672}
                height={941}
                priority
                sizes="(max-width: 760px) 100vw, 1180px"
              />
            </div>
            <figcaption>
              <strong>One medicine, five systems of record.</strong> The identifiers that connect the records are unevenly distributed—and no single system contains every fact.
            </figcaption>
            <div className="medicine-system-legend" aria-label="The five systems of record">
              {systems.map(([title, description], index) => (
                <div key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </div>
              ))}
            </div>
          </figure>

          <h2>1. The commercial system</h2>
          <p>An ERP or purchasing system is often authoritative for the commercial transaction.</p>
          <p>It may know:</p>
          <ul>
            <li>which product was ordered;</li>
            <li>which supplier or customer was involved;</li>
            <li>the purchase order;</li>
            <li>agreed quantities;</li>
            <li>commercial terms;</li>
            <li>invoices, payments, or credits.</li>
          </ul>
          <p>That is enormously useful. But an ERP record saying that ten units were ordered does not prove that ten physical units arrived. And an invoice saying that ten units were billed does not tell us which ten serialized units moved through the supply chain.</p>
          <p>The commercial record describes the transaction. It is not the physical world.</p>

          <h2>2. The warehouse and inventory system</h2>
          <p>A warehouse management or inventory system answers another set of questions.</p>
          <p>Where is the product? How much is on hand? Is it available, quarantined, allocated, damaged, or already consumed? Which storage location contains it?</p>
          <p>This is the operational view of inventory.</p>
          <p>But inventory systems usually work at the level required to operate the facility. Depending on the process, that may be product, lot, location, quantity, or individual unit.</p>
          <p>They do not automatically contain the complete commercial history, external trading-partner evidence, serialized event history, or patient context associated with that product.</p>

          <h2>3. The serialization and traceability system</h2>
          <p>Pharmaceutical serialization adds another identity layer. A product can be identified not only by product and lot, but by an individual serial number.</p>
          <p>Standards such as EPCIS are designed to capture and exchange events about products as they move through business processes. Those events can describe what was involved, when something happened, where it occurred, and the business context around the event.</p>
          <p>That makes serialization data exceptionally useful for traceability. But it is still evidence about a particular dimension of the process.</p>
          <p>A serialization repository may tell us that a serialized unit was commissioned, packed, shipped, received, or otherwise handled. It does not automatically tell us whether the invoice was correct, whether the buyer received its contracted price, whether inventory is currently available for use, or whether a patient eventually received that medicine.</p>

          <KeyConcept>
            <strong>Traceability tells us important things about what happened to a product.</strong> It does not make every other operational record redundant.
          </KeyConcept>

          <h2>4. The trading partner&apos;s system</h2>
          <p>Now add another organization.</p>
          <p>A manufacturer ships to a wholesaler. A wholesaler ships to a hospital. A hospital receives from several suppliers. Each organization maintains its own operational records.</p>
          <p>Electronic transactions can connect those records. In a typical commercial flow, one organization might send a purchase order, receive an acknowledgement, receive a shipment notice, and later receive an invoice.</p>
          <p>But exchanging information does not magically turn two companies into one database.</p>
          <p>The sender can believe a shipment was completed while the receiver is still resolving a receipt. A message can be technically delivered while the business transaction represented by that message remains unresolved.</p>
          <p>This is why interoperability is about more than transport.</p>

          <h2>5. The pharmacy and clinical system</h2>
          <p>Eventually the medicine crosses another boundary. It becomes part of patient care.</p>
          <p>A pharmacy system may record a medication being dispensed. A clinical system may record administration to a patient. These are extraordinarily important facts, but they belong to a different operational context from the original purchase order, warehouse movement, or serialized shipment.</p>
          <p>The same physical medicine has now accumulated another digital identity.</p>
          <div className="question-pair" aria-label="Supply-chain and clinical questions">
            <blockquote>
              <span>Supply-chain question</span>
              <p>Where did this unit go?</p>
            </blockquote>
            <blockquote>
              <span>Clinical question</span>
              <p>Was this medicine dispensed or administered to a patient?</p>
            </blockquote>
          </div>
          <p>The object is the same. The decision context is not.</p>

          <h2>So which system is the source of truth?</h2>
          <p>This is where the phrase <strong>source of truth</strong> can become misleading. There may be no useful universal answer.</p>
          <p className="explainer-question">Source of truth for what?</p>
          <p>The ERP may be authoritative for the purchase order. The warehouse system may be authoritative for current inventory location. The serialization repository may be authoritative for serialized event evidence. The supplier or distributor may be authoritative for its side of a shipment. The pharmacy system may be authoritative for dispensing. The clinical record may be authoritative for administration.</p>
          <p>Trying to force every one of these facts into a single giant master database is not necessarily the goal.</p>
          <p>The goal is to know which system owns which fact, how the records relate, and how to assemble the evidence needed for a particular decision.</p>

          <KeyConcept>
            <strong>The objective is not necessarily one system of record.</strong> It is reliable interoperability between systems with clearly understood boundaries.
          </KeyConcept>

          <h2>The real difficulty is often in the joins</h2>
          <p>Several identifiers might help connect the medicine&apos;s records:</p>
          <dl className="identifier-grid">
            {identifiers.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
          <p>The problem is that every system does not necessarily carry every identifier. Identifiers may also appear at different levels.</p>
          <p>A purchase order might reference product and quantity. A shipment notice might add packaging and shipment structure. An EPCIS event can carry serialized product identities and business context. A warehouse receipt may record what was physically received. A pharmacy system may later associate product use with a patient-facing workflow.</p>
          <p>Connecting the story requires matching these records across boundaries. That is one reason apparently simple requests for “visibility” often become difficult integration problems.</p>
          <p>The information exists. The work is assembling the evidence.</p>

          <h2>A recall makes the problem obvious</h2>
          <p>Imagine a manufacturer discovers a problem affecting a particular lot.</p>
          <p className="explainer-question">What is our actual exposure?</p>
          <p>Traceability data might help establish which serialized units moved through the network. Trading-partner records might help establish what was shipped or accepted. Inventory systems can help determine what remains on hand. Pharmacy or clinical systems may help determine whether affected product has already moved further into patient care.</p>
          <p>Commercial systems may be needed for the financial actions that follow: returns, credits, replacements, or reconciliation.</p>
          <p>There is no contradiction here. Each system is answering a different part of the recall question. The complete answer emerges only when those pieces are assembled.</p>

          <h2>From system of record to system of answer</h2>
          <p>A <strong>system of record</strong> owns an authoritative piece of operational state.</p>
          <p>A <strong>system of answer</strong> assembles evidence from multiple authoritative systems to answer a question.</p>
          <p>That distinction becomes particularly important as AI enters enterprise operations. An AI agent does not need to replace the ERP, warehouse system, serialization repository, distributor platform, or pharmacy system. In many cases, it should not.</p>
          <p>Instead, an agent might:</p>
          <ol className="answer-steps">
            {agentSteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p>The agent can create a better answer without becoming an accidental sixth source of truth.</p>

          <Callout title="A useful architecture test">
            <p>When a new analytics or AI platform claims to provide a complete view of an operation, ask two questions:</p>
            <p><strong>What information does this system actually own?</strong></p>
            <p><strong>What information is it assembling from systems that remain authoritative elsewhere?</strong></p>
            <p>The distinction matters.</p>
          </Callout>

          <section className="learning-pack" aria-labelledby="learning-pack-title">
            <div>
              <p className="ui-eyebrow">Keep exploring</p>
              <h2 id="learning-pack-title">Work with the model yourself</h2>
              <p>Download the accompanying learning pack and add its files to a grounded research tool such as NotebookLM. It includes the model, terminology, source notes, and prompts for exploring relationships between the five systems.</p>
              <a className="ui-button ui-button-primary" href="/downloads/one-medicine-five-systems-learning-pack.zip" download>
                Download the learning pack
              </a>
            </div>
            <div className="learning-pack-contents" aria-label="Learning pack contents">
              <span>01</span><p><strong>Model</strong><br />Five systems and their boundaries</p>
              <span>02</span><p><strong>Terminology</strong><br />Identifiers and operational language</p>
              <span>03</span><p><strong>Source notes</strong><br />Standards and reference material</p>
              <span>04</span><p><strong>Questions</strong><br />Seven grounded investigation prompts</p>
            </div>
          </section>

          <h2>Questions to try</h2>
          <ul>
            <li>A hospital receives a serialized medicine but inventory does not update. Which systems should I investigate first?</li>
            <li>Which system would I trust to determine whether a specific medicine was dispensed?</li>
            <li>Give me an example where two systems appear to disagree but both records are technically correct.</li>
            <li>Walk a pharmaceutical recall across all five systems.</li>
            <li>What identifiers would I need to connect a purchase order to an individual serialized unit?</li>
            <li>Explain the difference between a system of record and a system of answer.</li>
            <li>Design an AI agent that investigates discrepancies without replacing any authoritative system.</li>
          </ul>
          <p>The point is not to memorize five boxes. It is to learn how to reason across system boundaries.</p>

          <h2>Key takeaways</h2>
          <ul className="takeaway-list">
            <li>One physical medicine can exist as several different digital records.</li>
            <li>Each system is authoritative for a particular operational context, not necessarily the entire process.</li>
            <li>Standards and electronic transactions help systems communicate, but interoperability still requires matching, context, governance, and reconciliation.</li>
            <li>Many visibility problems are really evidence-assembly problems.</li>
            <li>AI becomes especially useful when it can assemble evidence across systems while respecting the authority of the underlying records.</li>
          </ul>

          <Sources>
            <ul>
              <li>GS1, EPCIS and Core Business Vocabulary standard and implementation guidance.</li>
              <li>ASC X12, Supply Chain Transaction Flow and transaction-set definitions.</li>
              <li>HL7 FHIR, MedicationDispense and MedicationAdministration resources.</li>
              <li>Global Life Sciences &amp; Pharmaceutical Industry Atlas, research synthesis used to develop this explainer.</li>
            </ul>
          </Sources>
        </ArticleBody>
      </PageContainer>
    </main>
  );
}
