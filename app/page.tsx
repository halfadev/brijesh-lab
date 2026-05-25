import { CurrentFocus } from "@/components/CurrentFocus";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PrivacyReceipt } from "@/components/PrivacyReceipt";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero" aria-labelledby="tagline-title">
          <h1 id="tagline-title">
            Part professional archive.
            <br />
            Part thinking lab.
          </h1>
          <p className="hero-subheading">
            A place where I write about ideas still finding their shape.
          </p>
        </section>

        <section className="intro-panel" aria-label="Introduction">
          <div className="intro-copy">
            <p className="identity-line">Systems. Stories. Sport. Curiosity.</p>
            <p>
              I work on enterprise software for life sciences supply chains, and write
              about the systems - technical, human, and personal - that I&apos;m trying
              to understand.
            </p>
            <p>
              <a className="standalone-link" href="/why-this-site-exists">
                Why this site exists -&gt;
              </a>
            </p>
          </div>
          <figure className="portrait">
            <img
              src="/self.jpg"
              alt="Brijesh Ramakrishnan smiling on a city street at night"
            />
          </figure>
        </section>

        <Section title="A small origin story">
          <p>
            I&apos;ve been lucky to follow curiosity through a few different versions of
            myself.
          </p>
          <p>
            I grew up curious about computers, starting with the family desktop my dad
            brought home when I was eight - an Intel Pentium 1 with 32 MB RAM, which
            felt like a rocketship. That curiosity evolved into writing code, then
            building software, and now selling and explaining it.
          </p>
          <p>
            Over time, I&apos;ve realized I&apos;m less interested in technology by itself
            and more interested in the hidden machinery behind things: how products are
            built, how companies make decisions, how industries move, how athletes
            improve, and how people become slightly better versions of themselves.
          </p>
          <p>
            Right now, that curiosity is pointed at supply chains and the global life
            sciences industry. I&apos;m trying to understand the nuts and bolts well
            enough to explain them clearly, design around them thoughtfully, and write
            about what I learn.
          </p>
        </Section>

        <Section title="What am I doing now?" id="now">
          <p className="section-subtitle">Last updated May 2026</p>
          <CurrentFocus />
        </Section>

        <Section title="A small privacy receipt">
          <PrivacyReceipt />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
