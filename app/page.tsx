import type { Metadata } from "next";
import Link from "next/link";
import { HollowHelm } from "@/components/shell-mark";
import { guidePages } from "@/content/pages";
import { SITE_URL } from "@/lib/site";
import { VideoFacade } from "@/components/video-facade";

export const metadata: Metadata = {
  title: "Mortal Shell 2 Guide & Walkthrough: Builds, Shells, Bosses",
  description:
    "Fan-made Mortal Shell 2 guide hub: beginner routes, best builds, all 8 shells, weapon upgrades, boss order, and PC performance fixes.",
  keywords: [
    "mortal shell 2 guide",
    "mortal shell 2 wiki",
    "mortal shell 2 best build",
    "mortal shell 2 walkthrough",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mortal Shell 2 Guide & Walkthrough: Builds, Shells, Bosses",
    description:
      "Fan-made guides, builds, shells, weapons and walkthroughs for Mortal Shell 2.",
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
    alt: "Mortal Shell 2 key art: an armored warrior bearing a sword against a burning backdrop",
    caption: "Key art — Cold Symmetry / Playstack",
    width: 1600,
    height: 899,
  },
  {
    src: "/img/shot-1.jpg",
    alt: "Mortal Shell 2 gameplay screenshot showing the Change Equipment menu with shell, weapon and sidearm tabs",
    caption: "Official gameplay screenshot — equipment menu",
    width: 1920,
    height: 1080,
  },
  {
    src: "/img/yt-qHLY7zFhRvg.jpg",
    alt: "Mortal Shell 2 release date trailer key art showing a hooded shell warrior",
    caption: "Official Release Date Trailer still",
    width: 1280,
    height: 720,
  },
];

const HERO_STATS = [
  "Out now — released August 20, 2026 on PC, PS5, and Xbox Series X/S",
  "Features 8 distinct possessable warrior shells with dedicated ability trees",
  "Compact interconnected dark fantasy world with over 60 dungeons",
];

const JOURNEY = [
  {
    number: "1",
    title: "Beginner Survival",
    description:
      "Master the no-stamina combat pacing, resolve generation through melee hits, and posture-breaking strikes. The beginner guide turns them into an opening route that survives day one.",
    href: "/beginner-guide/",
  },
  {
    number: "2",
    title: "Shell Progression",
    description:
      "Discover all 8 lost warrior shells scattered across the world and unlock their unique memories. Each shell plays like its own class — the shells guide maps where all eight wait.",
    href: "/shells/",
  },
  {
    number: "3",
    title: "Weapon Mastery",
    description:
      "Upgrade melee blades and ranged sidearms to shatter enemy posture and trigger critical strikes. The weapons guide walks through the full arsenal, blade by blade.",
    href: "/weapons/",
  },
  {
    number: "4",
    title: "Dungeon Walkthroughs",
    description:
      "Navigate interconnected non-linear dungeon paths, find key curiosities, and defeat false gods. The walkthrough maps the golden route — and the detours that hide shells and weapons.",
    href: "/walkthrough/",
  },
];

const GUIDE_TAGS: Record<string, string> = {
  "beginner-guide": "Getting Started",
  "best-build": "Builds",
  walkthrough: "Progression",
  shells: "Classes",
  weapons: "Arsenal",
  bosses: "Bosses",
  tips: "Mechanics",
  "performance-fix": "Troubleshooting",
  "damage-calculator": "Tools",
  "best-proxima-build": "Builds",
  "best-smert-build": "Builds",
  "fast-travel": "Progression",
  "missable-content": "Completion",
  "ova-locations": "Completion",
  "achievements-guide": "Completion",
};

/* Per-card CTA anchors: varied, descriptive of the target page. */
const GUIDE_CTA: Record<string, string> = {
  "beginner-guide": "Start the beginner guide →",
  "best-build": "See the best builds →",
  walkthrough: "Open the walkthrough →",
  shells: "Compare all eight shells →",
  weapons: "Browse the full arsenal →",
  bosses: "Study the boss order →",
  tips: "Get the survival tips →",
  "performance-fix": "Fix PC stutters →",
  "damage-calculator": "Run the numbers →",
  "best-proxima-build": "Build Proxima's burst →",
  "best-smert-build": "Stack Chaos with Smert →",
  "fast-travel": "Map every Beacon →",
  "missable-content": "Check what locks you out →",
  "ova-locations": "Collect all 196 Ova →",
  "achievements-guide": "Plan the platinum run →",
};

const PILLARS = [
  {
    lead: "No stamina, all aggression.",
    body: "There is no stamina gauge to manage — attacks flow freely, hardening absorbs a blow mid-swing, and resolve is earned by landing hits rather than by waiting.",
  },
  {
    lead: "Eight shells as classes.",
    body: "You don't pick a class from a menu; you possess one. Each of the eight lost warrior shells brings a dedicated ability tree and sealed memories, so the shell you're wearing is the build you're playing.",
  },
  {
    lead: "Sidearms and posture.",
    body: "Ranged sidearms open fights from distance, and posture-breaking strikes end them — shatter an enemy's stance and the critical execution is yours.",
  },
  {
    lead: "One compact, interconnected world.",
    body: "Over 60 dungeons fold into a single dark fantasy map with non-linear paths, hidden curiosities, and bosses that pay out shells and weapons. The golden route is short; everything worth finding is off it.",
  },
];

const FAQS = [
  {
    q: "Is Mortal Shell 2 out yet?",
    a: "Yes. It launched worldwide on August 20, 2026 for PC (Steam), PlayStation 5, and Xbox Series X|S — and every guide on this hub is written against that launch build, then updated as patches land.",
  },
  {
    q: "How many shells are there?",
    a: "Eight lost warrior shells, each with a dedicated ability tree and sealed memories to unravel. They act as the game's class system: the shells guide maps where all eight wait, and the best build guide tracks the early consensus on which one to main.",
  },
  {
    q: "Do I need to play the first Mortal Shell first?",
    a: "No. The sequel is a standalone action-RPG — the story, the combat, and the world are built to welcome new players, while veterans will recognize more of the lore it builds on.",
  },
  {
    q: "Is combat stamina-based?",
    a: "No. There is no stamina gauge at all: resolve is generated by landing melee hits and spent on abilities, sidearms, and hardening — which is why aggression is usually the safest strategy.",
  },
  {
    q: "Who made the game?",
    a: "Developer Cold Symmetry and publisher Playstack — the same pairing behind the original Mortal Shell. The official links in the footer point to the Steam page and the developer's website.",
  },
  {
    q: "The PC version stutters or crashes. Where do I start?",
    a: "With the performance fix guide. It walks through the crash hotfix Playstack shipped during Advanced Access, the official save-file workaround for the keyboard-bindings menu crash, and the shader cache change recommended for full lock-ups.",
  },
  {
    q: "Is there a wiki for the game?",
    a: "This hub is the next best thing: one focused page per topic, fact-checked against the launch build, with unknowns listed openly instead of guessed. Start with the beginner guide, or jump straight to builds, shells, weapons, bosses, tips, and performance fixes.",
  },
];

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
      name: "Mortal Shell 2 Guide & Walkthrough Hub",
      url: SITE_URL + "/",
      inLanguage: "en",
    },
    {
      "@type": "VideoGame",
      name: "Mortal Shell II",
      alternateName: ["Mortal Shell 2"],
      description:
        "Standalone dark fantasy souls-like action RPG by Cold Symmetry and Playstack: no-stamina resolve-driven combat, eight possessable warrior shells, and an interconnected world with over 60 dungeons. Releases August 20, 2026 on PC, PS5 and Xbox Series X/S.",
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
        "https://www.youtube.com/@Playstack",
      ],
    },
    {
      "@type": "VideoObject",
      name: "Mortal Shell II — Official Gameplay Reveal",
      description:
        "Playstack's official gameplay reveal for Mortal Shell II.",
      thumbnailUrl: [`${SITE_URL}/img/yt-cPSE1yrooT4.jpg`],
      uploadDate: "2026-04-01T07:58:06-07:00",
      duration: "PT11M39S",
      embedUrl: "https://www.youtube.com/embed/cPSE1yrooT4",
      contentUrl: "https://www.youtube.com/watch?v=cPSE1yrooT4",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
          <img src="/img/site-4.jpg" alt="Mortal Shell 2 key art: the possessed warrior before a dark, ruined landscape" width={1600} height={899} />
        </div>
        <div className="wrap">
          <div className="hero-copy">
            <p className="eyebrow">Fan-Made Community Guide</p>
            <h1 className="hero-title">Mortal Shell 2</h1>
            <p className="hero-sub">Guide &amp; Walkthrough Hub</p>
            <p className="hero-desc">
              Mortal Shell 2 — officially titled Mortal Shell II — is an
              unrestricted action-RPG sequel featuring fast-paced melee combat
              with no stamina limits and eight possessable warrior shells.
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
            <h2 id="journey-heading">Your journey, in four steps</h2>
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
                Watch how the player never stops pressing forward — in a game
                with no stamina gauge, that habit is the whole strategy.
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
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
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
            <p>
              One page per topic, each fact-checked against the launch build —
              start anywhere; every page stands alone.
            </p>
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
                <span className="card-more">{GUIDE_CTA[page.slug]}</span>
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
              <h2 id="about-heading">What is Mortal Shell 2?</h2>
              <p>
                It's a standalone dark fantasy action-RPG from developer Cold
                Symmetry and publisher Playstack, released worldwide on August
                20, 2026 for PC (Steam), PlayStation 5, and Xbox Series X|S. It
                expands the original Mortal Shell with high-stakes combat and
                extensive exploration — and you don't need to have finished the
                first game to jump in.
              </p>
              <p>
                Combat removes the traditional stamina gauge in favor of
                resolve: you generate it by landing melee hits, spend it on
                abilities and sidearms, and harden your posture mid-swing to
                turn enemy pressure into openings. Over 60 interconnected
                dungeons thread the world together, and ten major bosses — the
                false gods of this ruin — gate your progress and pay out new
                shells and weapons.
              </p>
              <p>
                You play as a formless occupant rather than a fixed hero. You
                possess eight lost warrior shells, each with its own innate
                ability tree and sealed memories to recover — choosing a shell
                is choosing a class, and your weapons, route, and build all
                bend around it.
              </p>
              <p>
                Every guide on this hub is fact-checked against the launch
                build and updated as patches land — including the crash hotfix,
                the official save-file workaround, and the shader cache fix
                covered in the performance guide.
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

      <section className="section" aria-labelledby="pillars-heading">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Design</p>
            <h2 id="pillars-heading">What makes the sequel different</h2>
          </div>
          <div className="pillar-list">
            {PILLARS.map((pillar) => (
              <p key={pillar.lead}>
                <strong>{pillar.lead}</strong> {pillar.body}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-heading">Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
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
              walkthroughs. New to souls-likes? The beginner guide's survival
              routes ease you in, and the shell and boss guides carry you the
              rest of the way.
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
