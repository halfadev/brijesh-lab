import { ArticleBody, ArticleHeader, InfographicBlock, KeyConcept, NextModule } from "@/components/ui/ArticlePrimitives";
import { HardLink } from "@/components/HardLink";

const assetRoot = "/images/library/pharma-complete-map";

export function PharmaCompleteMapArticle() {
  return (
    <main className="flagship-article">
      <ArticleHeader className="flagship-header" eyebrow="Learn · Life Sciences" title="How the Pharmaceutical Industry Works: The Complete Map" dek="If you are new to the pharmaceutical industry, it can feel like someone has handed you a dictionary before showing you the story." meta="Module 1 · The Complete Map · Beginner visual guide" />

      <ArticleBody className="flagship-body">
        <section>
          <p>You encounter pharmaceutical companies, biotech firms, CROs, CDMOs, regulators, wholesalers, pharmacies, hospitals, insurers, PBMs, distributors, APIs, formularies, clinical trials, serialization, reimbursement and dozens of other terms.</p>
          <p>You can learn what every one of those words means and still struggle to explain how the industry actually works.</p>
          <p>A better place to start is with the system.</p>
          <p>At the highest level, the pharmaceutical industry is trying to accomplish something remarkably simple:</p>
          <p><strong>Turn scientific knowledge into medicines that can improve human health.</strong></p>
          <p>Or even more simply:</p>
          <KeyConcept className="article-concept"><strong>Scientific idea → Medicine → Patient</strong></KeyConcept>
          <p>A useful first approximation is:</p>
          <KeyConcept className="article-concept"><strong>DISCOVER → DEVELOP → PROVE → APPROVE → MAKE → MOVE → ACCESS → USE → LEARN</strong></KeyConcept>
        </section>

        <section>
          <h2>The lifecycle of a medicine</h2>
          <p>Let&apos;s explore each phase.</p>

          <h3>Discover</h3>
          <p>Every medicine begins with some understanding of biology and disease.</p>
          <p>Researchers may identify a biological pathway involved in a disease, discover a molecule with potentially useful properties, find a new application for an existing treatment, or use a new technology to intervene in biology in a different way.</p>
          <p>The FDA describes drug discovery as beginning in the laboratory, where researchers investigate potential compounds and progressively identify candidates worth further development.</p>
          <p>Importantly, discovery does not happen only inside large pharmaceutical companies. Universities, research institutes, biotechnology companies and pharmaceutical companies can all contribute to the scientific work that eventually produces a medicine.</p>

          <h3>Develop</h3>
          <p>Finding something scientifically interesting is not the same as having a usable drug.</p>
          <p>Researchers need to understand questions such as:</p>
          <ul><li>How does it interact with the body?</li><li>What dose might be appropriate?</li><li>How should it be administered?</li><li>What side effects might occur?</li><li>Can it be manufactured into a stable and usable product?</li></ul>
          <p>Before human studies, preclinical research was used to investigate important questions about safety and biological activity.</p>
          <p>Drug development is therefore a process of progressively reducing uncertainty.</p>
          <p>At the beginning, the question may be: <strong>Could this work?</strong></p>
          <p>Much later, the questions become far more specific: <strong>For whom does it work? At what dose? Compared with what? With what risks? And can we manufacture it reliably?</strong></p>

          <h3>Prove</h3>
          <p>Eventually, a potential therapy has to be studied in humans.</p>
          <p>Clinical trials are structured studies designed to answer specific questions about a potential medicine. FDA describes clinical research as studies conducted in people, while the European Medicines Agency describes clinical trials as studies intended to discover or verify the effects of investigational medicines.</p>
          <p>As development progresses, trials can investigate safety, dosage, biological effects and whether the treatment produces meaningful benefits for patients.</p>
          <p>You will often hear about Phase I, Phase II and Phase III clinical trials. We will explore those separately later.</p>
          <p>A promising scientific idea has to become evidence.</p>
          <p>And generating that evidence requires another ecosystem of participants: pharmaceutical and biotechnology companies, contract research organizations, investigators, hospitals and clinical sites, laboratories, regulators and, most importantly, patients who participate in research.</p>

          <h3>Approve</h3>
          <p>Even strong clinical evidence does not automatically put a medicine on the market.</p>
          <p>A company seeking to market a new medicine must submit evidence for regulatory review.</p>
          <p>In the United States, FDA reviews information from preclinical and clinical development and decides whether the evidence supports approval for the proposed use. FDA describes approval as a determination that the drug&apos;s benefits outweigh its known and potential risks for the intended population.</p>
          <p>Other countries and regions have their own regulatory structures. In the European Union, for example, EMA&apos;s scientific committees evaluate medicines within the EU regulatory framework, while national authorities also perform important regulatory functions.</p>
          <p>This gives us an important distinction that will appear repeatedly throughout this course:</p>
          <p><strong>Scientific discovery and regulatory permission are not the same thing.</strong></p>
          <p>A therapy can be scientifically promising without being approved. And, as we will see shortly, an approved medicine is not necessarily an accessible medicine.</p>

          <h3>Make</h3>
          <p>At some point, years of research and data must become a physical drug - a tablet, vial, filled syringe, bottle, a biologic product etc. And it has to be able to be produced repeatedly and consistently.</p>
          <p>Pharmaceutical manufacturing therefore operates under extensive quality requirements. In the United States, FDA&apos;s Current Good Manufacturing Practice regulations establish requirements for the methods, facilities and controls used to manufacture, process and package drug products.</p>
          <p>Manufacturing also introduces one of the most important ideas for understanding the modern pharmaceutical industry:</p>
          <p><strong>The company associated with a medicine does not necessarily perform every activity itself.</strong></p>
          <p>Drug companies can work with outside manufacturing facilities, laboratories, packaging organizations and other partners. FDA guidance specifically addresses contract manufacturing arrangements between product owners and contract facilities and the responsibilities associated with those relationships.</p>
          <p>Later in the course we will unpack terms such as CMO, CDMO, API, drug substance, drug product and fill-finish.</p>
          <p>For now, it&apos;s important to remember: <strong>Ownership, manufacturing and physical custody can belong to different organizations.</strong></p>

          <h3>Move</h3>
          <p>Once a medicine has been manufactured and released for distribution, it has to reach healthcare.</p>
          <p>A simplified pharmaceutical product flow might look like this:</p>
          <KeyConcept className="article-concept"><strong>Manufacturer → Wholesaler / Distributor → Pharmacy or Hospital → Patient</strong></KeyConcept>
          <p>FDA uses essentially this structure in its own simplified example of the drug supply chain, while also noting that real flows can involve additional participants such as API suppliers, repackagers and multiple distributors.</p>
          <p>Different medicines may travel through different channels.</p>
          <p>A prescription tablet picked up at a neighborhood pharmacy does not necessarily follow the same commercial or logistical path as an oncology drug administered in an infusion center.</p>
          <p>A rare-disease therapy may operate through a highly specialized distribution network. A hospital may purchase and administer certain medicines directly. Some products require cold-chain logistics or specialized handling.</p>
          <p>The important point is that the pharmaceutical supply chain is one part of the pharmaceutical industry, not the entire industry.</p>
          <p>It solves a specific problem: <strong>How does an approved, manufactured product physically reach the healthcare system?</strong></p>

          <h3>Access</h3>
          <p>This is where the simple linear model begins to break down. Imagine that a medicine has successfully passed through discovery, development, clinical trials, regulatory review, manufacturing and distribution.</p>
          <p>Can a patient now receive it? Not necessarily.</p>
          <ul><li>Someone also has to pay for it.</li><li>Coverage rules may matter.</li><li>The medicine may need to appear on a formulary.</li><li>Hospitals or pharmacies need to stock or obtain it.</li><li>Physicians need to determine that it is clinically appropriate.</li><li>Patients may face eligibility requirements or out-of-pocket costs.</li></ul>
          <p>Governments and healthcare systems around the world use different approaches to pharmaceutical pricing, financing and reimbursement. WHO explicitly describes medicine affordability and effective financing as important components of access and publishes guidance for countries on pharmaceutical pricing policies.</p>
          <p>In the United States, prescription drug coverage itself involves separate systems and coverage policies. Medicare Part D, for example, uses prescription drug plans and formularies governed within the CMS framework.</p>
          <p>This gives us another foundational principle:</p>
          <KeyConcept className="article-concept"><strong>Approval ≠ availability ≠ coverage ≠ prescription ≠ patient access.</strong><span>Each is a different gate.</span></KeyConcept>

          <h3>Use</h3>
          <p>Eventually, a medicine reaches the point where it becomes part of actual patient care. But there is no single path from an available product to treatment. Some medicines are prescribed by a physician and dispensed through a retail or specialty pharmacy. Others are purchased by hospitals, clinics or infusion centers and administered directly to patients by healthcare professionals.</p>
          <p>In each case, the final step depends on the healthcare delivery system: physicians deciding when a medicine is appropriate, pharmacists dispensing it safely, nurses and clinicians administering treatment, and hospitals or clinics coordinating the care around it.</p>
          <p>Pharmaceutical companies may develop and make medicines available, supply chains move them, and financing systems influence whether they can be accessed, but healthcare organizations are where those medicines are ultimately turned into treatment.</p>

          <h3>Learn</h3>
          <p>It is tempting to think of the pharmaceutical system as a straight line that ends when a medicine reaches the patient. In reality, patient use creates another important source of information.</p>
          <p>Once a medicine is used across larger and more diverse populations, new patterns can emerge around safety, effectiveness and how the treatment is used in practice. Regulators and manufacturers therefore continue to monitor medicines after approval, using post-market surveillance and pharmacovigilance to identify new safety information and build a better understanding of a medicine over time.</p>
          <p>This means the lifecycle is better thought of as a loop rather than a one-way journey:</p>
          <KeyConcept className="article-concept"><strong>DISCOVER → DEVELOP → PROVE → APPROVE → MAKE → MOVE → ACCESS → USE → LEARN</strong></KeyConcept>
          <p>What is learned after a medicine enters real-world use can influence regulatory decisions, clinical practice, further research and even the development of future treatments. The patient is therefore not simply the end of the pharmaceutical system. Experience from patient use becomes part of the information that feeds back into it.</p>
        </section>

        <section>
          <h2>Who actually does all of this?</h2>
          <p>The pharmaceutical industry is a network of specialized organizations coordinating around medicines.</p>
          <InfographicBlock className="article-infographic" src={`${assetRoot}/pharma-ecosystem.png`} width={1536} height={1024} alt="Diagram of the pharmaceutical industry ecosystem, including science, regulation, manufacturing, distribution, healthcare, financing and access" caption={<>The pharmaceutical industry is better understood as a network of specialized organizations than as a single linear chain. <span>Open image to expand.</span></>} />
          <p>Ownership, manufacturing, distribution, regulation and access can involve different organizations. Now that you understand the map, here is how some common terms fit into it.</p>
          <InfographicBlock className="article-infographic" src={`${assetRoot}/pharma-terms-map.png`} width={1122} height={1402} alt="Glossary explaining twelve pharmaceutical industry roles and terms" caption={<>Common pharmaceutical industry roles and terms, explained in plain language. <span>Open image to expand.</span></>} />
        </section>

        <section>
          <h2>There isn&apos;t just one thing moving through the system</h2>
          <p>So far, we have mostly followed the medicine itself. But the physical product is only one of several things moving through the pharmaceutical system. A useful way to understand the industry is through three interconnected flows: the drug, the data and the dollar.</p>
          <h3>The Drug</h3>
          <p>The drug is the physical product moving through the system. Raw materials and active ingredients move into manufacturing, finished medicines move into distribution, and products ultimately make their way to hospitals, clinics, pharmacies and patients. This is the most visible flow, and it is what we usually mean when we talk about the pharmaceutical supply chain.</p>
          <h3>The Data</h3>
          <p>Information moves alongside the product, but its path is far more complex. Scientific results, clinical trial data, regulatory submissions, product information, purchase orders, inventory records, shipment details, product identifiers, traceability records, prescriptions, insurance claims, clinical records and safety reports all move between different participants in the network.</p>
          <p>Unlike the physical medicine, which generally moves toward the patient, information can move in many directions. A patient may receive a medicine downstream while safety information, usage data or reimbursement information moves back toward healthcare organizations, manufacturers, payers and regulators.</p>
          <h3>The Dollar</h3>
          <p>Money follows a third network. Organizations purchase medicines, payers reimburse pharmacies and healthcare providers, patients may contribute part of the cost, and commercial agreements can create discounts, rebates, fees and other financial transactions. Governments may also finance or procure medicines directly.</p>
          <p>These financial relationships often connect organizations that never physically handle the medicine, which means the movement of money can look very different from the movement of the product.</p>
          <p>Together, these three flows give us one of the central frameworks for understanding the pharmaceutical industry:</p>
          <KeyConcept className="article-concept"><strong>THE DRUG · THE DATA · THE DOLLAR</strong></KeyConcept>
          <p>They are interconnected, but they do not always move through the same organizations, follow the same path or travel in the same direction. Understanding where these flows align, and where they diverge, helps explain much of the complexity of pharmaceutical operations.</p>
        </section>

        <section>
          <h2>Regulation across the lifecycle</h2>
          <p>Another common beginner mental model places a regulator between clinical trials and commercialization:</p>
          <KeyConcept className="article-concept"><strong>Clinical trials → FDA → Market</strong></KeyConcept>
          <p>Regulatory approval is certainly important, but regulation does not appear only once. Rules and regulatory requirements touch clinical research, manufacturing quality, product labeling, distribution, promotion, safety monitoring and other parts of the medicine lifecycle.</p>
          <p>Think of regulation less as a toll booth on the road and more as part of the infrastructure surrounding the road.</p>
          <p>And the exact infrastructure varies by market.</p>
        </section>

        <section>
          <h2>There is no single global pharmaceutical system</h2>
          <p>The lifecycle we have built is useful across markets:</p>
          <KeyConcept className="article-concept"><strong>Discover → Develop → Prove → Approve → Make → Move → Access → Use → Learn</strong></KeyConcept>
          <p>But the institutions surrounding that lifecycle are not organized the same way everywhere. Countries differ in how medicines are regulated, priced, reimbursed, procured, distributed and delivered to patients.</p>
          <p>The United States, for example, finances and reimburses medicines differently from the United Kingdom, while the European Union, Japan, China and India each have their own regulatory and healthcare structures.</p>
          <p>So while there is a global pharmaceutical industry, there is no single pharmaceutical market that is replicated country by country.</p>
          <p>What is consistent are the underlying problems that every system has to solve: how to develop safe and effective medicines, manufacture them reliably, move them through the supply chain, finance and pay for them, make them available to patients, and continue learning from their use.</p>
          <p>The answers to those questions vary by country. Different governments, regulators, payers, healthcare systems and commercial structures have created different institutional models for solving the same basic set of problems.</p>
        </section>

        <InfographicBlock className="article-infographic" src={`${assetRoot}/map-to-keep-in-your-head.png`} width={1226} height={1283} alt="Summary framework showing the medicine lifecycle, four system questions, and the drug, data and dollar flows" caption={<>A simple mental model for understanding the pharmaceutical system. <span>Open image to expand.</span></>} />

        <NextModule title="Discovering and Developing a Medicine" status="Coming soon" />
      </ArticleBody>

      <nav className="flagship-back"><HardLink href="/">← Back to homepage</HardLink></nav>
    </main>
  );
}
