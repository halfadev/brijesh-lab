import Image from "next/image";
import { LessonVideo } from "@/components/LessonVideo";
import { Eyebrow, HeroLayout, PrimaryButton } from "@/components/ui/LayoutPrimitives";
import { EntryList } from "@/components/EntryList";
import { getFeaturedEntries } from "@/lib/content";

const welcomeVideo = {
  youtubeId: "AlZYViIUws0",
  title: "Welcome to Brijesh Ramakrishnan's website",
};

export default function Home() {
  const featured = getFeaturedEntries();
  return (
    <main className="publication-home">
      <HeroLayout className="home-about home-intro-hero" labelledBy="about">
        <div className="home-about-copy home-intro-copy">
          <Eyebrow className="publication-eyebrow">About this project</Eyebrow>
          <h1 id="about">Curious about how complicated things actually work.</h1>
          <p>
            I explore the systems behind life sciences, technology, AI, business
            and the products we interact with.
          </p>
        </div>

        <div className="home-about-video home-intro-video">
          <LessonVideo
            className="about-welcome-video"
            youtubeId={welcomeVideo.youtubeId}
            title={welcomeVideo.title}
          />
          <p>A short introduction to what I am building and why.</p>
        </div>

        <div className="home-intro-cta">
          <span className="home-primary-cta-placeholder">
            [PRIMARY CTA — COPY/DESTINATION TBD]
          </span>
        </div>

        <div className="home-intro-supporting">
          <p>
            I map the actors, flows, constraints and decisions underneath them,
            then turn what I learn into essays, research and visual explanations.
          </p>
          <p>
            Life sciences is where I&apos;m starting. Over time, this site will expand
            into broader technology and product systems.
          </p>
        </div>
      </HeroLayout>

      <HeroLayout className="publication-hero" labelledBy="home-offer-title">
        <div className="publication-hero-copy">
          <h2 id="home-offer-title">
            Making sense of <span>complex systems.</span>
          </h2>
          <p>
            I break down complex systems across life sciences, technology and AI
            through essays, diagrams and visual learning.
          </p>
          <PrimaryButton className="publication-primary-link" href="/learn/global-life-sciences/01-industry-map">
            Explore the Pharma Guide →
          </PrimaryButton>

          <ul className="publication-principles" aria-label="What you will find here">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H11v16H5.5A2.5 2.5 0 0 0 3 21.5v-16ZM21 5.5A2.5 2.5 0 0 0 18.5 3H13v16h5.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" /></svg>
              Visual learning
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4" r="2.25"/><circle cx="5" cy="18.5" r="2.25"/><circle cx="19" cy="18.5" r="2.25"/><path d="M12 6.25v5.25M5 16.25v-2.5h14v2.5M12 11.5v3"/></svg>
              System maps
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 16.5h7M9.5 20h5M8.4 14.7A7 7 0 1 1 15.6 14.7c-.8.6-1.1 1.1-1.1 1.8h-5c0-.7-.3-1.2-1.1-1.8Z"/></svg>
              Clear explanations
            </li>
          </ul>
        </div>

        <figure className="lifecycle-hero-visual">
          <Image
            src="/images/library/pharmaceutical-lifecycle.svg"
            alt="The pharmaceutical lifecycle from discovery through real-world learning"
            width={1200}
            height={330}
          />
        </figure>
      </HeroLayout>
      <section className="home-featured" aria-labelledby="featured-title">
        <Eyebrow>Featured and latest</Eyebrow>
        <h2 id="featured-title">Start exploring</h2>
        <EntryList entries={featured} showTrack />
      </section>
    </main>
  );
}
