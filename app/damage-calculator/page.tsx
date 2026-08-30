import type { Metadata } from "next";
import Link from "next/link";
import { DamageCalculator } from "@/components/damage-calculator";
import { AdNative } from "@/components/ad-slot";
import {
  POISE_ENTRIES,
  TARFORGE_LADDER,
  WEAPONS,
} from "@/content/damage-calculator-data";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Mortal Shell 2 Damage Calculator: Weapon & Stagger Scaling",
  },
  description:
    "Mortal Shell 2 damage calculator: upgrade multipliers for damage and stagger, Tarforge costs for every level to +25, and poise pools for every boss.",
  keywords: [
    "mortal shell 2 damage calculator",
    "mortal shell 2 weapon damage",
    "mortal shell 2 stagger damage",
    "mortal shell 2 upgrade costs",
    "mortal shell 2 tarforge",
  ],
  alternates: { canonical: "/damage-calculator/" },
  openGraph: {
    title: {
      absolute: "Mortal Shell 2 Damage Calculator: Weapon & Stagger Scaling",
    },
    description:
      "Upgrade multipliers, Tarforge costs, and boss poise pools in one calculator.",
    images: [{ url: "/img/site-3.jpg", width: 1000, height: 563 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      absolute: "Mortal Shell 2 Damage Calculator: Weapon & Stagger Scaling",
    },
    description:
      "Upgrade multipliers, Tarforge costs, and boss poise pools in one calculator.",
    images: [{ url: "/img/site-3.jpg" }],
  },
};

const FAQS = [
  {
    q: "How is damage calculated in Mortal Shell 2?",
    a: "Mortal Shell 2 does not publish absolute weapon damage numbers. Damage is a multiplier applied to each weapon's own hidden base stats: every melee weapon shares one upgrade curve, scaling from x1.00 at +0 to x1.80 at +16. A weapon's strength comes from its hidden base values, not its upgrade path - so two fully upgraded weapons still hit for different amounts. Enter your own tested base damage above and the calculator applies the correct multiplier for every upgrade level.",
  },
  {
    q: "Does weapon upgrade level affect stagger damage?",
    a: "Yes. Stagger damage scales from x1.00 at +0 to x2.00 at +20 - and unlike raw damage, which stops improving at +16, stagger keeps scaling through +20. Elemental Efficiency, Critical Chance, Critical Damage, and Resolve Regeneration follow the same x2.00 curve, but start at zero and unlock from +1 onward. Guard Meter is the one exception: it is x1.25 for every weapon except Great Martyr's Blade at x1.30.",
  },
  {
    q: "What is the maximum weapon upgrade level in Mortal Shell 2?",
    a: "The Tarforge upgrades primary weapons from +0 to +25. Raw damage stops improving at +16 (x1.80) and the other stats stop at +20 (x2.00); what the final five levels (+21 to +25) improve is not documented in any public source. Upgrading requires the Muradean Actuator key item, then tar-metals and Coin at Franz the Tarforge Smith in Marrow Keep.",
  },
  {
    q: "How much does it cost to fully upgrade a weapon in Mortal Shell 2?",
    a: "Taking a weapon from +0 to +25 costs 185,650 Coin in total plus tar-metals: 31 of each of the five types - Ventrium for +1 to +5, Laterite for +6 to +10, Dorsalite for +11 to +15, Thoracium for +16 to +20, and Ossinite for +21 to +25. Within each tier the amounts rise 1, 3, 6, 9, then 12. The full level-by-level cost table is above.",
  },
];

export default function DamageCalculatorPage() {
  const poiseTable = POISE_ENTRIES.filter((e) => e.tier !== null).slice(0, 24);
  const collectible = WEAPONS.filter((w) => w.collectible);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Mortal Shell 2 Damage Calculator",
        url: `${SITE_URL}/damage-calculator/`,
        image: [`${SITE_URL}/img/site-3.jpg`],
        inLanguage: "en",
        datePublished: "2026-08-25",
        dateModified: "2026-08-25",
        author: { "@type": "Person", name: "Bruce", url: `${SITE_URL}/about/` },
        publisher: {
          "@type": "Organization",
          name: "Mortal Shell II Community Guide",
          url: `${SITE_URL}/`,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/android-chrome-192x192.png`,
          },
        },
        about: { "@type": "VideoGame", name: "Mortal Shell II" },
        isAccessibleForFree: true,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/damage-calculator/`,
        },
      },
      {
        "@type": "WebApplication",
        name: "Mortal Shell 2 Damage Calculator",
        url: `${SITE_URL}/damage-calculator/`,
        applicationCategory: "GameApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList:
          "Weapon upgrade multipliers, Tarforge cost ladder to +25, enemy poise pools, stagger-break estimates",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Mortal Shell II Guide",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Damage Calculator",
            item: `${SITE_URL}/damage-calculator/`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap article">
        <div className="article-body" style={{ maxWidth: "82ch" }}>
          <p className="breadcrumb">
            <Link href="/">Mortal Shell II Guide</Link>
            <span aria-hidden="true"> / </span>
            Tools
          </p>
          <article>
            <p className="eyebrow">Tools</p>
            <h1>Mortal Shell 2 Damage Calculator</h1>

            <p className="lead">
              Dial in an upgrade level and see exactly what every weapon stat
              multiplies to - damage, stagger, crit, and the Tarforge cost of
              getting there. One page, every number that exists.
            </p>
            <p>
              Mortal Shell 2 does not publish absolute weapon damage numbers,
              so every public calculator - including this one - works with{" "}
              <Link href="#methodology">upgrade multipliers</Link>. If you
              have tested a weapon's base damage or stagger value yourself,
              enter it above and this tool computes the real numbers at every
              upgrade level, plus how many hits break each boss's poise pool.
              Just want the arsenal? The{" "}
              <Link href="/weapons/">weapons guide</Link> covers where to find
              all eight, and the <Link href="/best-build/">best build guide</Link>{" "}
              pairs them with shells and sidearms.
            </p>

            <AdNative />

            <DamageCalculator />

            <section className="fact-block">
              <h2>How damage scaling works in Mortal Shell 2</h2>
              <p>
                Every melee weapon in the game shares one upgrade curve per
                stat. That sounds strange until it clicks: weapons differ by
                their hidden base values, not their scaling paths, so the
                upgrade system raises every weapon by the same proportion and
                never reorders the arsenal. Upgrading happens at Franz the
                Tarforge Smith in Marrow Keep, unlocked by the Muradean
                Actuator key item.
              </p>
              <ul>
                <li>
                  Damage: x1.00 at +0 to x1.80 at +16 - then capped; +17 to
                  +25 add nothing documented
                </li>
                <li>
                  Stagger Damage: x1.00 at +0 to x2.00 at +20 - keeps scaling
                  four levels after damage stops
                </li>
                <li>
                  Elemental Efficiency, Critical Chance, Critical Damage,
                  Resolve Regeneration: the same x2.00 curve, but they start
                  at zero and read "inactive" at +0
                </li>
                <li>
                  Guard Meter: x1.25 for every weapon except Great Martyr's
                  Blade, the sole exception at x1.30
                </li>
              </ul>
              <p>
                Because stagger scales further and faster than raw damage,
                late-game upgrades are effectively posture tools: a +20 weapon
                breaks bosses twice as fast as a +0 one even though it hits
                for only 1.8 times as much.
              </p>
            </section>

            <section className="fact-block">
              <h2>Tarforge upgrade costs: every level to +25</h2>
              <p>
                Five tar-metals, five tiers of five levels. Ventrium covers
                +1 to +5, Laterite +6 to +10, Dorsalite +11 to +15, Thoracium
                +16 to +20, and Ossinite +21 to +25. The full ladder from +0
                to +25 adds up to 185,650 Coin and 31 of each material.
              </p>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Material</th>
                      <th>Amount</th>
                      <th>Coin</th>
                      <th>Cumulative Coin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TARFORGE_LADDER.map((row) => (
                      <tr key={row.level}>
                        <td>+{row.level}</td>
                        <td>{row.material}</td>
                        <td>{row.amount}</td>
                        <td>{row.coin.toLocaleString("en-US")}</td>
                        <td>{row.cumulativeCoin.toLocaleString("en-US")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="fact-block">
              <h2>Enemy poise reference: stagger pools by boss</h2>
              <p>
                The game exposes no absolute stagger numbers, so each enemy's
                poise pool is measured relative to the toughest target in the
                game - Hexapod at 1200. The table lists every boss and
                miniboss from toughest down; enter your weapon's stagger
                damage above to turn these into hit counts.
              </p>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Enemy</th>
                      <th>Tier</th>
                      <th>Poise pool</th>
                    </tr>
                  </thead>
                  <tbody>
                    {poiseTable.map((e) => (
                      <tr key={e.name}>
                        <td>{e.name}</td>
                        <td>{e.tier}</td>
                        <td>{e.maxPoise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="fact-block">
              <h2>All 8 collectible weapons in Mortal Shell 2</h2>
              <p>
                Eight weapons count toward the Lord of War achievement -
                Game8, Fextralife, and Mortal Shell DB agree on the same
                eight, with identical official flavor text. Two extra melee
                entries, Fists and the Hallowed Sword, exist in game data but
                are not collectible.
              </p>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Weapon</th>
                      <th>Description</th>
                      <th>Ability Tarstones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collectible.map((w) => (
                      <tr key={w.slug}>
                        <td>{w.name}</td>
                        <td>{w.description}</td>
                        <td>
                          {w.tarstones.length > 0
                            ? w.tarstones.map((t) => t.name).join(", ")
                            : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Full locations and the sidearm roster are in the{" "}
                <Link href="/weapons/">weapons guide</Link>; per-shell pairings
                live in the <Link href="/best-build/">best build guide</Link>.
              </p>
            </section>

            <section className="fact-block">
              <h2>Frequently asked questions</h2>
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </section>

            <section className="fact-block" id="methodology">
              <h2>Data methodology</h2>
              <p>
                Mortal Shell 2 does not publish per-weapon damage numbers.
                All figures here are upgrade multipliers applied to each
                weapon's own base stats - the same curve is shared by every
                melee weapon, so a weapon's strength comes from its hidden
                base values, not its upgrade path. Stagger comparisons use
                each enemy's poise pool relative to the toughest target, since
                the game exposes no absolute stagger values. Tarforge material
                and Coin costs per level are listed in full, +1 through +25.
              </p>
              <p>
                Data sourced from Mortal Shell DB, Game8, and the Fextralife
                wiki, cross-checked against each other and verified on August
                25, 2026 against game version 1.0. Weapon upgrade multipliers,
                Tarforge costs, and poise pools are single-source (Mortal
                Shell DB, internally consistent); the weapon roster and
                descriptions are agreed by all three sources.
              </p>
            </section>
          </article>

          <footer className="article-sources">
            <h2>Sources &amp; review trail</h2>
            <ul>
              <li>
                <a
                  href="https://mortalshelldb.com/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mortal Shell DB - Damage &amp; Stagger Calculator
                </a>
              </li>
              <li>
                <a
                  href="https://mortalshelldb.com/forge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mortal Shell DB - Tarforge Calculator
                </a>
              </li>
              <li>
                <a
                  href="https://game8.co/games/Mortal-Shell-2/archives/614498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Game8 - Mortal Shell 2 Weapons List
                </a>
              </li>
              <li>
                <a
                  href="https://mortalshell2.wiki.fextralife.com/weapons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fextralife Wiki - Mortal Shell 2 Weapons
                </a>
              </li>
            </ul>
            <p style={{ marginTop: "12px" }}>
              Facts on this page were verified against the sources above on
              August 25, 2026. Multiplier caps beyond +20 are not documented
              in any public source; the calculator caps its slider where the
              data ends.
            </p>
          </footer>
        </div>

        <aside className="article-side">
          <div className="side-box">
            <h2>Continue reading</h2>
            <ul className="side-links">
              <li>
                <Link href="/weapons/">All weapons &amp; locations</Link>
              </li>
              <li>
                <Link href="/best-build/">Best builds per shell</Link>
              </li>
              <li>
                <Link href="/bosses/">Boss order &amp; rewards</Link>
              </li>
              <li>
                <Link href="/performance-fix/">Crash &amp; stutter fixes</Link>
              </li>
            </ul>
          </div>
          <div className="side-box">
            <h2>Page status</h2>
            <p className="side-meta">
              <strong>Last reviewed</strong> — August 25, 2026
              <br />
              <strong>Game status</strong> — released Aug 20, 2026
              <br />
              <strong>Status</strong> — v1.0 data; multipliers single-source
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
