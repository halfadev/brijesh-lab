import Image from "next/image";
import { LessonVideo } from "@/components/LessonVideo";
import { HardLink } from "@/components/HardLink";
import { Eyebrow, HeroLayout, PrimaryButton } from "@/components/ui/LayoutPrimitives";
import { EntryList } from "@/components/EntryList";
import { getFeaturedEntries } from "@/lib/content";
import { calendlyUrl } from "@/lib/site-config";

const welcomeVideo = {
  youtubeId: "jrFZoEQb5MA",
  title: "Welcome to My Lab — Brijesh Ramakrishnan",
  posterSrc: "/images/welcome-to-my-lab-thumbnail.png",
};

export default function Home() {
  const featured = getFeaturedEntries();
  return (
    <main className="publication-home">
      <HeroLayout className="home-about home-intro-hero" labelledBy="home-intro-title">
        <div className="home-about-copy home-intro-copy">
          <h1 id="home-intro-title">Curiosity first.</h1>
          <h2>I try to figure out how complicated things work.</h2>

          <div className="home-intro-body">
            <p>
              Life sciences. AI. Technology. Business. Everyday products. Science.
              History.
            </p>
            <p>
              If something makes me wonder “how does that actually work?”, there’s
              a good chance I’ll pull it apart.
            </p>
            <p>
              This is my design space and learning lab, where I explore
              interesting questions and share what I find.
            </p>
            <p className="home-intro-welcome">
              I hope you learn something new today!
            </p>
          </div>

          <div className="home-intro-cta">
            <PrimaryButton
              className="publication-primary-link"
              href="/learn/global-life-sciences"
            >
              Start with Life Sciences →
            </PrimaryButton>
          </div>
        </div>

        <div className="home-about-video home-intro-video">
          <LessonVideo
            className="about-welcome-video"
            youtubeId={welcomeVideo.youtubeId}
            title={welcomeVideo.title}
            posterSrc={welcomeVideo.posterSrc}
          />
        </div>
      </HeroLayout>

      <HeroLayout className="home-learning" labelledBy="home-learning-title">
        <div className="home-learning-copy">
          <h2 id="home-learning-title">How I learn.</h2>
          <p>
            Curiosity usually starts with a question. I research what already
            exists, explore how the pieces fit together, build something to make
            the idea concrete, test what holds up, and carry what I learn into the
            next question.
          </p>
          <p>
            The output might be an essay, a diagram, an experiment, a video, or
            something I build. The goal is the same: understand it well enough to
            explain it simply.
          </p>
        </div>

        <figure className="design-loop-visual">
          <Image
            src="/images/design-loop.png"
            alt="A circular design loop moving from Question to Research, Explore, Build, Test, Learn, and back to Question"
            width={1536}
            height={1024}
            sizes="(max-width: 1120px) 100vw, 52vw"
          />
        </figure>

        <div className="home-learning-cta">
          <h3 className="home-learning-leadin">
            Have an interesting problem or idea?
          </h3>
          <p className="home-learning-invitation">Let&apos;s talk about it.</p>
          <HardLink
            className="ui-button ui-button-primary publication-primary-link"
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch →
          </HardLink>
        </div>
      </HeroLayout>
      <section className="home-featured" aria-labelledby="featured-title">
        <Eyebrow>Featured</Eyebrow>
        <h2 id="featured-title">Start exploring</h2>
        <EntryList entries={featured} showTrack />
      </section>
    </main>
  );
}
