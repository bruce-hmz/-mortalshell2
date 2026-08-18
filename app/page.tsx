import type { Metadata } from "next";
import Link from "next/link";
import { HollowHelm } from "@/components/shell-mark";
import { guidePages } from "@/content/pages";
import { SITE_URL } from "@/lib/site";
import { VideoFacade } from "@/components/video-facade";

export const metadata: Metadata = {
  title: "Mortal Shell II Guide & Walkthrough Hub",
  description:
    "Complete fan-made community guide hub for Mortal Shell II covering beginner routes, best builds, all 8 lost warrior shells, weapon upgrades, and dungeon walkthroughs.",
  keywords: [
    "mortal shell 2 guide",
    "mortal shell 2 wiki",
    "mortal shell 2 best build",
    "mortal shell 2 walkthrough",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mortal Shell II Guide & Walkthrough Hub",
    description:
      "Fan-made guides, builds, shells, weapons and walkthroughs for Mortal Shell II.",
    images: [{ url: "/img/site-2.jpg", width: 1600, height: 899 }],
    type: "website",
  },
};

const TRAILERS = {
  gameplay: {
    id: "cPSE1yrooT4",
    title: "Mortal Shell II — Official Gameplay Reveal",
  },
  releaseDate: {
    id: "qHLY7zFhRvg",
    title: "Mortal Shell II — Official Release Date Trailer",
  },
};

const GALLERY = [
  {
    src: "/img/site-2.jpg",
    alt: "Mortal Shell II key art: an armored warrior bearing a sword against a burning backdrop",
    caption: "Key art — Cold Symmetry / Playstack",
  },
  {
    src: "/img/shot-1.jpg",
    alt: "Mortal Shell II gameplay screenshot showing the Change Equipment menu with shell, weapon and sidearm tabs",
    caption: "Official gameplay screenshot — equipment menu",
  },
  {
    src: "/img/yt-qHLY7zFhRvg.jpg",
    alt: "Mortal Shell II release date trailer key art showing a hooded shell warrior",
    caption: "Official Release Date Trailer still",
  },
];

const HERO_STATS = [
  "Releasing worldwide on August 20, 2026 across PC, PS5, and Xbox Series X/S",
  "Features 8 distinct possessable warrior shells with dedicated ability trees",
  "Compact interconnected dark fantasy world with over 60 dungeons",
];

const JOURNEY = [
  {
    number: "1",
    title: "Beginner Survival",
    description:
      "Master the no-stamina combat pacing, resolve generation through melee hits, and posture-breaking strikes.",
    href: "/beginner-guide/",
  },
  {
    number: "2",
    title: "Shell Progression",
    description:
      "Discover all 8 lost warrior shells scattered across the world and unlock their unique memories.",
    href: "/shells/",
  },
  {
    number: "3",
    title: "Weapon Mastery",
    description:
      "Upgrade melee blades and ranged sidearms to shatter enemy posture and trigger critical strikes.",
    href: "/weapons/",
  },
  {
    number: "4",
    title: "Dungeon Walkthroughs",
    description:
      "Navigate interconnected non-linear dungeon paths, find key curiosities, and defeat false gods.",
    href: "/walkthrough/",
  },
];

const GUIDE_TAGS: Record<string, string> = {
  "beginner-guide": "Getting Started",
  "best-build": "Builds",
  walkthrough: "Progression",
  shells: "Classes",
  weapons: "Arsenal",
  tips: "Mechanics",
};

const FACTS = [
  { label: "Developer", value: "Cold Symmetry" },
  { label: "Publisher", value: "Playstack" },
  { label: "Release Date", value: "August 20, 2026" },
  { label: "Platforms", value: "PC (Steam), PlayStation 5, Xbox Series X/S" },
  { label: "Genre", value: "Action RPG, Souls-like" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Mortal Shell II Guide & Walkthrough Hub",
      url: SITE_URL + "/",
      inLanguage: "en",
    },
    {
      "@type": "VideoGame",
      name: "Mortal Shell II",
      alternateName: ["Mortal Shell 2"],
      genre: ["Action RPG", "Souls-like"],
      gamePlatform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      playMode: "SinglePlayer",
      developer: { "@type": "Organization", name: "Cold Symmetry" },
      publisher: { "@type": "Organization", name: "Playstack" },
      datePublished: "2026-08-20",
      url: SITE_URL + "/",
      sameAs: [
        "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
        "https://mortalshell.com/",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/site-4.jpg" alt="" width={1600} height={899} />
        </div>
        <div className="wrap">
          <div className="hero-copy">
            <p className="eyebrow">Fan-Made Community Guide</p>
            <h1 className="hero-title">Mortal Shell II</h1>
            <p className="hero-sub">Guide &amp; Walkthrough Hub</p>
            <p className="hero-desc">
              Mortal Shell II is an unrestricted action-RPG sequel featuring
              fast-paced melee combat with no stamina limits and eight
              possessable warrior shells.
            </p>
            <ul className="hero-stats" aria-label="Key facts">
              {HERO_STATS.map((stat) => (
                <li key={stat}>{stat}</li>
              ))}
            </ul>
            <div className="cta-row">
              <Link href="/beginner-guide/" className="btn btn-primary">
                Read the Beginner Guide
              </Link>
              <Link href="#guides" className="btn btn-ghost">
                Explore Builds &amp; Shells
              </Link>
              <a
                className="btn-text"
                href="https://store.steampowered.com/app/2584270/Mortal_Shell_II/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Steam ↗
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <HollowHelm />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="journey-heading">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Start Here</p>
            <h2 id="journey-heading">Your Mortal Shell II Journey</h2>
          </div>
          <div className="journey">
            {JOURNEY.map((step) => (
              <Link
                key={step.number}
                href={step.href}
                className="journey-cell"
                style={{ display: "block", color: "inherit" }}
              >
                <span className="journey-num">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="trailer-heading">
        <div className="wrap">
          <div className="media-split">
            <div>
              <VideoFacade
                youtubeId={TRAILERS.gameplay.id}
                title={TRAILERS.gameplay.title}
                poster="/img/yt-cPSE1yrooT4.jpg"
                caption="Official Gameplay Reveal — Playstack on YouTube"
              />
            </div>
            <div className="media-note">
              <p className="eyebrow">See It In Motion</p>
              <h2 id="trailer-heading">The world before you enter it</h2>
              <p>
                The official gameplay reveal shows the combat rhythm this whole
                guide hub is built around: unrestricted aggression, resolve
                spent on defense, and posture broken for the critical strike.
              </p>
              <p style={{ marginBottom: 0 }}>
                <a
                  className="btn-text"
                  href={`https://www.youtube.com/watch?v=${TRAILERS.releaseDate.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch the Release Date Trailer ↗
                </a>
              </p>
            </div>
          </div>

          <div className="gallery-grid" style={{ marginTop: "48px" }}>
            {GALLERY.map((item) => (
              <figure key={item.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="guides" aria-labelledby="guides-heading">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">All Guides</p>
            <h2 id="guides-heading">Every guide, one keyword at a time</h2>
            <p>One page per topic. Updated against the launch build.</p>
          </div>
          <div className="guides-grid">
            {guidePages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}/`}
                className="guide-card"
              >
                <span className="card-tag">{GUIDE_TAGS[page.slug]}</span>
                <h3>{page.h1}</h3>
                <p>{page.cardBlurb}</p>
                <span className="card-more">Read the guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <p className="eyebrow">The Game</p>
              <h2 id="about-heading">What is Mortal Shell II?</h2>
              <p>
                Mortal Shell II is a standalone dark fantasy action-RPG
                developed by Cold Symmetry and published by Playstack,
                expanding the original game with high-stakes combat and
                extensive exploration.
              </p>
              <p>
                Combat removes the traditional stamina gauge in favor of
                resolve-driven abilities, sidearms, and hardening posture
                mechanics across an interconnected world of over 60 dungeons.
              </p>
              <p style={{ marginTop: "28px" }}>
                <Link href="#guides" className="btn btn-ghost">
                  Explore All Guides
                </Link>
              </p>
            </div>
            <dl className="fact-table">
              {FACTS.map((fact) => (
                <div className="fact-row" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section final-cta" aria-labelledby="cta-heading">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Begin</p>
            <h2 id="cta-heading">Ready to Dethrone False Gods?</h2>
            <p>
              Explore verified builds, shell locations, and dungeon
              walkthroughs.
            </p>
          </div>
          <div className="cta-row">
            <Link href="/beginner-guide/" className="btn btn-primary">
              Read the Beginner Guide
            </Link>
            <a
              className="btn btn-ghost"
              href="https://store.steampowered.com/app/2584270/Mortal_Shell_II/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Steam
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
