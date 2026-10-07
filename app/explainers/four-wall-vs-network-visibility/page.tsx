import type { Metadata } from "next";
import { ArticleBody, ArticleHeader, Callout, KeyConcept, Sources } from "@/components/ui/ArticlePrimitives";
import { PageContainer } from "@/components/ui/LayoutPrimitives";
import { FourWallsNetworkVisual, VisibilityMaturityVisual } from "@/components/FourWallVisibilityVisuals";
import { HardLink } from "@/components/HardLink";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Four-Wall Visibility vs Network Visibility",
  description:
    "Seeing your own ERP, factory, warehouse, and inventory clearly is not the same as seeing the outsourced network that actually executes the work.",
  path: "/explainers/four-wall-vs-network-visibility",
});

export default function FourWallVisibilityPage() {
  return (
    <main className="publication-entry medicine-explainer visibility-explainer">
      <PageContainer width="wide">
        <HardLink className="explainer-back" href="/explainers">
          ← All explainers
        </HardLink>

        <ArticleHeader
          eyebrow="Explainer · Supply networks"
          title="Four-wall visibility vs network visibility"
          dek="Seeing your own ERP, factory, warehouse, and inventory clearly is not the same as seeing the outsourced network that actually executes the work."
          meta="An operating model for external manufacturing and supply networks · 11 minute read"
        />

        <ArticleBody>
          <p className="article-lead">A company can have excellent visibility and still be surprised by its supply chain.</p>
          <p>That sounds contradictory only because visibility is one of those enterprise words that gets used without defining the boundary.</p>
          <p>Inside your own company, you may know the purchase order, inventory position, production plan, warehouse status, quality state, shipment record, and invoice. Your ERP is current. Your warehouse dashboard is green. Your planning system has a forecast. Your internal teams can see what they own.</p>
          <p>Then a contract manufacturer misses a milestone. A supplier allocation changes. A batch record is late. A 3PL has not received expected inventory. A shipment is delayed, but the status in your own system has not changed yet.</p>
          <p>Nothing inside your four walls was necessarily wrong. The important work was happening somewhere else.</p>

          <KeyConcept>
            <strong>Four-wall visibility</strong> tells you what is happening inside systems and operations you control. <strong>Network visibility</strong> tells you what is happening across the independent organizations required to deliver the outcome.
          </KeyConcept>

          <h2>The boundary matters more than the dashboard</h2>
          <p>Start with a simple question:</p>
          <p className="explainer-question">Visible to whom, across which boundary?</p>
          <p>Four-wall visibility usually describes the world your organization directly operates. Depending on the company, that can include:</p>
          <ul>
            <li>ERP orders and inventory;</li>
            <li>internal manufacturing execution;</li>
            <li>warehouse movements;</li>
            <li>internal quality events;</li>
            <li>planning and forecasting;</li>
            <li>transportation booked directly by your team;</li>
            <li>internal finance and settlement records.</li>
          </ul>
          <p>This can be sophisticated, near real time, and beautifully integrated. But the moment a critical process crosses into another company, the information model changes.</p>
          <p>The contract manufacturer has its own production system. The packaging partner has its own schedule. The 3PL has its own warehouse state. The raw-material supplier sees its own capacity constraints. The carrier sees transportation events. The distributor sees downstream inventory and orders.</p>
          <p>Your organization may depend on all of those facts without owning the systems that generate them. That is the network-visibility problem.</p>

          <FourWallsNetworkVisual />

          <h2>Outsourcing does not remove the work. It moves the work.</h2>
          <p>A virtual manufacturer can own the product, brand, regulatory responsibilities, demand plan, and commercial relationship while outsourcing substantial physical execution to contract manufacturers, contract packagers, testing labs, logistics providers, and other partners.</p>
          <p>That can reduce the need to own every plant, warehouse, or logistics capability directly. But the coordination requirement does not disappear. It moves across organizational boundaries.</p>
          <p>Someone still has to know:</p>
          <ul>
            <li>whether forecast demand has been understood by the CMO;</li>
            <li>whether capacity is actually available;</li>
            <li>whether materials will arrive before the production slot;</li>
            <li>whether a batch has started, completed, or slipped;</li>
            <li>whether required quality documents are ready;</li>
            <li>whether released product is positioned at the right warehouse;</li>
            <li>whether the 3PL received what the manufacturer believes it shipped;</li>
            <li>whether downstream demand is accelerating faster than replenishment.</li>
          </ul>
          <p>Inside one enterprise, some of those questions can be answered by connecting internal systems. Across a network, each answer may require another company to create, map, transmit, and permit access to the relevant evidence.</p>
          <p>This is why an asset-light model can also be coordination-heavy. The physical footprint shrinks. The information boundary expands.</p>

          <h2>A green ERP can coexist with a red supply chain</h2>
          <p>Imagine a virtual manufacturer that has issued a purchase order to a contract manufacturer. Its ERP shows the order as open. The planning system still carries the expected completion date. Demand has not changed enough to trigger an internal exception.</p>
          <p>From the brand owner&apos;s four-wall view, nothing is obviously wrong. But outside that boundary:</p>
          <ol className="answer-steps visibility-scenario-steps">
            <li>a supplier is late delivering a critical component to the CMO;</li>
            <li>the CMO moves the batch to a later manufacturing slot;</li>
            <li>the revised date exists in a partner spreadsheet or email, not in the brand owner&apos;s planning system;</li>
            <li>quality documentation will now complete later;</li>
            <li>the 3PL&apos;s expected inbound date is still based on the original plan.</li>
          </ol>
          <p>Every individual system can be behaving exactly as designed. The failure is in the shared operating context between them.</p>
          <p>By the time the internal ERP reflects the problem, the organization may no longer be detecting risk. It may simply be recording a delay that already happened.</p>

          <h2>Visibility is not one thing</h2>
          <p>Supply chains contain several overlapping flows. A useful model is to separate three of them.</p>
          <dl className="visibility-flow-grid">
            <div>
              <dt><span>01</span>The physical flow</dt>
              <dd>Where is the material or product? Has it been produced, packed, released, shipped, received, quarantined, consumed, or delivered?</dd>
            </div>
            <div>
              <dt><span>02</span>The information flow</dt>
              <dd>What do the systems and partners say happened? What was ordered, acknowledged, reported, captured, completed, or changed?</dd>
            </div>
            <div>
              <dt><span>03</span>The financial flow</dt>
              <dd>What has been invoiced, accrued, credited, paid, disputed, or reconciled?</dd>
            </div>
          </dl>
          <p>These flows move at different speeds. Product can move before the data describing it arrives. A shipment can be received while a quality or traceability record remains incomplete. An invoice can arrive before a discrepancy is resolved.</p>
          <p>A network-visibility strategy therefore needs a more precise question than “Can we see the supply chain?”</p>
          <p className="explainer-question">Which flow are we trying to see, how quickly, and for what decision?</p>
          <p>A visibility gap is not a diagnosis. It is the beginning of one.</p>

          <h2>Five levels of visibility</h2>
          <p>It helps to think of visibility as a maturity ladder rather than a binary capability.</p>
          <VisibilityMaturityVisual />

          <h3>Level 1: Inside the wall</h3>
          <p>You can see the state of your own systems and processes: orders, inventory, internal milestones, and transactions. This is essential. It is also the easiest layer because you control the instrumentation and access.</p>

          <h3>Level 2: Partner status</h3>
          <p>You receive selected status from an external partner. A CMO sends a milestone. A carrier sends a transportation event. A 3PL sends an inventory feed. A supplier acknowledges an order. This is useful, but still bilateral. Each connection answers only part of the process.</p>

          <h3>Level 3: Cross-partner process visibility</h3>
          <p>You can connect evidence from several partners around one business process. Forecast demand, CMO commitment, production milestones, quality release, shipment, and 3PL receipt can be viewed as one chain of evidence rather than six separate updates.</p>
          <p>This is where identity resolution becomes important. Systems need durable ways to understand that different records refer to the same product, batch, order, shipment, location, or business process.</p>

          <h3>Level 4: Network context</h3>
          <p>You can interpret events in relation to the broader operating picture. A CMO delay is not simply a red milestone. The organization can understand which products, markets, inventory positions, orders, or patients might eventually be affected.</p>

          <h3>Level 5: Coordinated action</h3>
          <p>The network can use that context to drive the next step. An exception is routed to the right owner. A partner is asked for missing evidence. A planning assumption is reviewed. A replenishment decision is proposed. A human approves a higher-risk action.</p>
          <p>At this point, visibility is no longer just a dashboard capability. It becomes part of an operating system for coordination.</p>

          <h2>Why network visibility is structurally harder</h2>
          <h3>You do not own every source</h3>
          <p>An internal system can usually be instrumented because your organization controls it. A network depends on independent organizations with their own priorities, technologies, commercial incentives, data policies, and implementation timelines.</p>

          <h3>Shared meaning matters</h3>
          <p>Two partners can both report a “completed” milestone and mean different things. Does production complete when the batch leaves the line, when testing finishes, when quality releases it, or when the shipment is available for pickup?</p>
          <p>Network visibility requires common business meaning, not just fields with similar names.</p>

          <h3>Identity has to survive the handoff</h3>
          <p>The purchase order number in one organization may not be the manufacturing-order identifier in another. A product can be represented differently across ERP, manufacturing, serialization, logistics, and distribution systems.</p>
          <p>Without reliable linking identifiers, the evidence remains fragmented even when every partner sends data.</p>

          <h3>Timing changes the value of information</h3>
          <p>A status update delivered three days late can be perfectly accurate and operationally useless. For many decisions, visibility is not only about whether evidence exists. It is about whether it arrives before the decision window closes.</p>

          <h3>Permission is part of the architecture</h3>
          <p>Not every participant should see every detail. A functioning network model needs rules for which organization, role, product, market, process, and event each participant can access.</p>
          <p>Visibility without governance is not a serious enterprise design.</p>

          <h2>Standards help, but they do not create the network</h2>
          <p>Standards can reduce ambiguity and make cross-company exchange more practical.</p>
          <p>GS1&apos;s EPCIS standard, for example, is designed to capture and share visibility-event data within an organization and across trading partners. It provides a common structure for describing what happened, when, where, why, and increasingly how.</p>
          <p>That is powerful infrastructure. But a standard cannot decide:</p>
          <ul>
            <li>which partners will participate;</li>
            <li>which events matter to your operating process;</li>
            <li>how quickly those events must arrive;</li>
            <li>how partner identities map to your internal records;</li>
            <li>who owns an exception;</li>
            <li>what happens when evidence conflicts;</li>
            <li>which decision should follow.</li>
          </ul>
          <p>Standards create a language. Network visibility still requires an operating model.</p>

          <h2>The executive test for a visibility claim</h2>
          <p>When a team or vendor says, “We have end-to-end visibility,” do not start with the dashboard. Start with the boundary.</p>
          <ol className="executive-test-list">
            <li><strong>Where does the visibility stop?</strong><span>Which external organizations and process steps are actually represented?</span></li>
            <li><strong>Is the status direct or inferred?</strong><span>Did the partner report the event, or did a model infer it from another signal?</span></li>
            <li><strong>How fresh is the evidence?</strong><span>Is this real time, daily, weekly, or manually updated?</span></li>
            <li><strong>What joins the records?</strong><span>Can a product, batch, order, shipment, and location be connected across systems?</span></li>
            <li><strong>What happens when partners disagree?</strong><span>Is there an evidence trail or simply two conflicting fields?</span></li>
            <li><strong>Can the user act from the insight?</strong><span>Who owns the exception and what workflow follows?</span></li>
            <li><strong>Which important partners are absent?</strong><span>A network map should make blind spots visible rather than hide them.</span></li>
          </ol>
          <p>A sophisticated internal dashboard can still fail all seven questions.</p>

          <h2>Where AI actually helps</h2>
          <p>An agent cannot manufacture network visibility from data that does not exist. If the CMO never sends the production milestone, the agent does not magically know the batch completed. If product identifiers cannot be reconciled across partner systems, a language model should not guess the relationship. If a user is not permitted to see a partner&apos;s information, AI should not bypass that control.</p>
          <p>But once a usable network evidence layer exists, AI can reduce the coordination burden dramatically. A governed agent could:</p>
          <ul>
            <li>monitor forecast demand against CMO commitments;</li>
            <li>identify missing or stale partner updates;</li>
            <li>connect a production delay to inventory and demand context;</li>
            <li>retrieve the evidence behind an exception;</li>
            <li>summarize the likely operational impact;</li>
            <li>ask a partner for missing information;</li>
            <li>propose an escalation or planning action;</li>
            <li>maintain an audit trail of the recommendation and human decision.</li>
          </ul>
          <p>That is a much stronger use of AI than placing a chatbot on top of an internal dashboard. The value comes from the data vantage point plus the decision loop.</p>
          <KeyConcept>
            <strong>AI can help interpret and coordinate a network.</strong> It cannot compensate for a network that does not produce trustworthy evidence.
          </KeyConcept>

          <h2>The virtual manufacturer is really an information architecture</h2>
          <p>The phrase <em>virtual manufacturer</em> sounds physical. It describes where manufacturing assets sit. Operationally, however, the model is also an information architecture.</p>
          <p>The company must coordinate work it does not physically perform, using evidence generated in systems it does not own, across organizations it cannot manage like internal departments.</p>
          <p>That does not make outsourcing the wrong strategy. It makes coordination capability part of the strategy.</p>
          <div className="question-pair" aria-label="Two questions for a virtual manufacturer">
            <blockquote>
              <span>Physical network</span>
              <p>Who should perform this activity?</p>
            </blockquote>
            <blockquote>
              <span>Digital network</span>
              <p>What information must cross the boundary so we can operate the process?</p>
            </blockquote>
          </div>
          <p>Ignoring the second question is how companies become asset-light and information-heavy at exactly the same time.</p>

          <section className="learning-pack visibility-learning-pack" aria-labelledby="visibility-learning-pack-title">
            <div>
              <p className="ui-eyebrow">Apply the model</p>
              <h2 id="visibility-learning-pack-title">Map where your visibility actually stops</h2>
              <p>Download the source-grounded learning pack to assess a real or hypothetical supply network. Use it on its own or add it to NotebookLM, ChatGPT, Claude, Gemini, or another grounded workspace.</p>
              <a className="ui-button ui-button-primary" href="/downloads/four-wall-vs-network-visibility-learning-pack.zip" download>
                Download the learning pack
              </a>
            </div>
            <div className="learning-pack-contents" aria-label="Learning pack contents">
              <span>01</span><p><strong>Core explainer</strong><br />The complete four-wall versus network model</p>
              <span>02</span><p><strong>Maturity model</strong><br />Five levels with a test for each</p>
              <span>03</span><p><strong>Scenario</strong><br />A virtual manufacturer learns about a delay</p>
              <span>04</span><p><strong>Diagnostic</strong><br />Boundary, evidence, identity, meaning, governance, and action</p>
              <span>05</span><p><strong>Question bank</strong><br />Fifteen prompts for deeper exploration</p>
              <span>06</span><p><strong>Sources</strong><br />FDA and GS1 references</p>
            </div>
          </section>

          <h2>Explore the model yourself</h2>
          <p>Draw your company&apos;s wall, then draw the network required to produce the outcome. The gap between those two pictures is the visibility problem you actually have.</p>
          <p>Try asking:</p>
          <ul>
            <li>What would four-wall visibility look like for a virtual pharmaceutical manufacturer?</li>
            <li>Which critical events would have to come from a CMO, 3PL, supplier, or carrier?</li>
            <li>Walk a batch delay through the physical, information, and financial flows.</li>
            <li>Which data should be direct evidence and which could reasonably be inferred?</li>
            <li>What identifiers are needed to connect forecast, PO, batch, shipment, and inventory records?</li>
            <li>Where could an AI agent help, and where would missing evidence make the agent unsafe?</li>
          </ul>

          <h2>Key takeaways</h2>
          <ul className="takeaway-list">
            <li>Four-wall visibility and network visibility are different capabilities.</li>
            <li>Outsourcing physical execution can reduce asset intensity while increasing coordination complexity.</li>
            <li>Physical, information, and financial flows move through different systems and at different speeds.</li>
            <li>Network visibility requires partner participation, shared meaning, identity resolution, timely evidence, permissions, and workflow.</li>
            <li>Standards such as EPCIS can enable cross-enterprise visibility, but they do not define the operating model by themselves.</li>
            <li>AI becomes useful after the network produces trustworthy evidence, not instead of it.</li>
          </ul>

          <Callout title="Continue the systems thread" tone="neutral">
            <p>This model explains why visibility breaks at organizational boundaries. The related explainer shows why the answer can also be fragmented across several correct systems of record.</p>
            <HardLink href="/explainers/one-medicine-five-systems">Read One medicine, five systems of record →</HardLink>
          </Callout>

          <Sources>
            <ul>
              <li><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/contract-manufacturing-arrangements-drugs-quality-agreements-guidance-industry">U.S. Food and Drug Administration, <em>Contract Manufacturing Arrangements for Drugs: Quality Agreements Guidance for Industry</em>, 2016.</a></li>
              <li><a href="https://www.gs1.org/standards/epcis">GS1, <em>EPCIS &amp; CBV</em>.</a></li>
              <li><a href="https://ref.gs1.org/guidelines/epcis-cbv/2.0.0/">GS1, <em>EPCIS and CBV Implementation Guideline</em>.</a></li>
              <li><a href="https://www.gs1.org/standards/gs1-global-traceability-standard/current-standard">GS1, <em>Global Traceability Standard</em>.</a></li>
            </ul>
            <p className="source-note">The maturity model and four-wall-versus-network framing are editorial teaching frameworks, not official FDA or GS1 terminology.</p>
          </Sources>
        </ArticleBody>
      </PageContainer>
    </main>
  );
}
