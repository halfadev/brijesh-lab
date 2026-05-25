import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Why This Site Exists - Brijesh Ramakrishnan",
  description: "A founding note for Brijesh Ramakrishnan's personal site.",
};

export default function WhyThisSiteExistsPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="article-main">
        <article className="article">
          <h1 className="article-title">
            I Have Been Writing for Years. I&apos;m Finally Putting It Somewhere.
          </h1>
          <p className="article-dek">
            A founding note on reality, attention, writing, and why this site exists.
          </p>
          <p>
            I&apos;d like to start by saying that I know nothing, but I have an opinion
            on almost everything.
          </p>
          <p>
            One of those opinions is about existence. Or reality. Or whatever word we
            use for the strange arrangement in which we wake up every day, brush our
            teeth, worry about money, miss people, eat dinner, look at screens, and
            somehow call all of this &quot;life.&quot;
          </p>
          <p>My opinion is this: reality is layered.</p>
          <p>
            The outermost layer is physical. It is the world of stimuli. We breathe,
            eat, sleep, sweat, hurt, heal, and eventually die. Most of us receive the
            same basic sensory data from the same source. The Taj Mahal is white to most
            people (unless they look closer). The bathroom on a fourteen-hour flight
            smells like death to everyone. The sun, on a regular day, appears in its
            majestic golden hue, unbothered by our personal dramas.
          </p>
          <p>
            This physical layer feels democratic. The same light hits different eyes.
            The same sound enters different ears. The same rain falls on everyone
            standing under the same sky.
          </p>
          <p>But then comes the second layer.</p>
          <p>
            That layer belongs to each of us alone. It is the layer of interpretation.
            One person loves loud rooms; another wants to run away from them. One person
            finds winter romantic; another finds it hostile. Someone hears a sentence
            and feels insulted. Someone else hears the same sentence and forgets it in
            three seconds.
          </p>
          <p>This is where reality begins to fracture.</p>
          <p>
            The physical world may be shared, but the experienced world is deeply
            private. No two people live inside the same reality, not exactly. We live
            inside our bodies, our memories, our fears, our childhoods, our ambitions,
            our wounds, our tastes, our languages, our browser histories, our family
            message groups, and whatever else has quietly shaped the operating system
            of the self.
          </p>
          <p>
            That makes me wonder whether the physical world is the only &quot;real&quot;
            world.
          </p>
          <p>
            Maybe reality is not just a place. Maybe reality is any environment where
            enough of our attention, senses, emotions, and identity are integrated. The
            physical world feels real because we can walk through it, smell it, touch
            it, and be injured by it. It is three-dimensional, high-resolution, and
            annoyingly persistent.
          </p>
          <p>
            Virtual worlds, for now, are partial realities. You can drive a car in Mario
            Kart, but you cannot smell the gasoline. You can look at people having a
            beautiful evening on Instagram, but you cannot walk into that photograph,
            interrupt the conversation, or feel the temperature of the room. But what
            happens when more of our senses plug in? What happens when memory, identity,
            work, love, status, and imagination move deeper into digital spaces?
          </p>
          <p>At what point does a world become real enough?</p>
          <p>I don&apos;t know. That is the point.</p>
          <p>
            This website is my attempt to explore questions like that. It is not meant
            to be a polished monument to certainty. It is a lab. A place to test ideas,
            chase strange thoughts, write about work and technology, memory and
            migration, sport and ambition, fiction and reality.
          </p>
          <p>
            If you are here, you are signing up for a front-row seat to what goes on in
            my mind.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
