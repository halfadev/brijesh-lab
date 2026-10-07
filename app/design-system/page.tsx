import type { Metadata } from "next";
import Image from "next/image";
import { ArticleBody, ArticleHeader, Callout, ImageBlock, InfographicBlock, KeyConcept, NextModule, PreviousNext, SectionHeading, SourceReferences, VideoEmbed } from "@/components/ui/ArticlePrimitives";
import { Eyebrow, MediaCard, PrimaryButton, SecondaryButton, TwoColumn } from "@/components/ui/LayoutPrimitives";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

const colors = [
  ["--color-page-bg", "Page background"], ["--color-surface", "Surface"],
  ["--color-heading", "Navy heading"], ["--color-body", "Body text"],
  ["--color-muted", "Muted text"], ["--color-primary", "Primary blue"],
  ["--color-section-tint", "Light blue section"], ["--color-border", "Border"],
];

const spaces = ["--space-xs", "--space-sm", "--space-md", "--space-lg", "--space-xl", "--space-2xl", "--space-3xl"];

export default function DesignSystemPage() {
  return (
    <main className="design-system-page">
      <header className="ds-intro"><Eyebrow>Internal reference</Eyebrow><h1>Design system</h1><p>A visual inventory of the tokens and reusable patterns used across the site.</p></header>

      <section className="ds-section"><h2>Page templates</h2><div className="ds-card-grid"><a className="ds-card" href="/design-system/templates/article"><strong>Article template</strong><p>Long-form prose and wide media.</p></a><a className="ds-card" href="/design-system/templates/video"><strong>Video essay template</strong><p>Video, transcript, and references.</p></a><a className="ds-card" href="/design-system/templates/course"><strong>Course lesson template</strong><p>Sequential learning and concepts.</p></a><a className="ds-card" href="/design-system/templates/lab"><strong>Lab note template</strong><p>Compact working research.</p></a></div></section>

      <section className="ds-section"><h2>Colors</h2><div className="ds-swatches">{colors.map(([token, label]) => <div className="ds-swatch" key={token}><span style={{ background: `var(${token})` }} /><strong>{label}</strong><code>{token}</code></div>)}</div></section>

      <section className="ds-section"><h2>Typography</h2><div className="ds-type-stack"><p className="ds-display">Display / hero heading</p><h1>Heading one</h1><h2>Heading two</h2><h3>Heading three</h3><p className="ds-body-large">Body large supports introductory and lead copy.</p><p>Body text is optimized for comfortable editorial reading.</p><small>Small and caption text</small></div></section>

      <section className="ds-section"><h2>Buttons</h2><div className="ds-row"><PrimaryButton href="#buttons">Primary button</PrimaryButton><SecondaryButton href="#buttons">Secondary button</SecondaryButton></div></section>

      <section className="ds-section"><h2>Spacing</h2><div className="ds-spacing">{spaces.map((token) => <div key={token}><code>{token}</code><span style={{ width: `var(${token})` }} /></div>)}</div></section>

      <section className="ds-section"><h2>Widths</h2><div className="ds-widths"><div className="ds-width ds-width-page"><code>wide / page · 1180px</code></div><div className="ds-width ds-width-content"><code>standard / content · 960px</code></div><div className="ds-width ds-width-article"><code>narrow / article · 720px</code></div></div></section>

      <section className="ds-section"><h2>Cards and radii</h2><div className="ds-card-grid"><div className="ds-card ds-radius-sm"><code>--radius-sm</code></div><div className="ds-card ds-radius-md"><code>--radius-md / --card-radius</code></div><div className="ds-card ds-radius-lg"><code>--radius-lg</code></div></div></section>

      <section className="ds-section"><h2>Two-column section</h2><TwoColumn className="ds-two-column"><div><Eyebrow>Example section</Eyebrow><h2>Content and media stay balanced.</h2><p>Use this pattern for an editorial text column paired with a diagram, video, or other visual.</p></div><MediaCard><Image src="/images/library/pharmaceutical-lifecycle.svg" alt="Pharmaceutical lifecycle example" width={1200} height={330} /></MediaCard></TwoColumn></section>

      <section className="ds-section"><h2>Editorial components</h2><div className="ds-article-demo"><ArticleHeader eyebrow="Learn · Example" title="Article header" dek="A short introduction establishes the purpose of the chapter." meta="Module 1 · Visual guide" /><ArticleBody><SectionHeading>Article body</SectionHeading><p>Body copy stays within the narrow reading measure.</p><KeyConcept><strong>Key concepts receive restrained emphasis.</strong></KeyConcept><Callout title="Callout">Use a callout for an aside, caveat, or working hypothesis.</Callout><ImageBlock src="/images/complex-systems-framework.png" alt="Inline image treatment" caption="Inline image treatment and caption." width={1200} height={675} /><InfographicBlock src="/images/library/pharmaceutical-lifecycle.svg" alt="Infographic example" width={1200} height={330} caption="Wide infographic treatment." /><VideoEmbed youtubeId="AlZYViIUws0" title="Video treatment example" caption="Responsive, privacy-enhanced YouTube treatment." /><SourceReferences><p>Use a short, clearly formatted list of primary references.</p></SourceReferences></ArticleBody><PreviousNext previous={{ href: "#", title: "Previous example" }} next={{ href: "#", title: "Next example" }} /><NextModule title="The next chapter" status="Coming soon" /></div></section>
    </main>
  );
}
