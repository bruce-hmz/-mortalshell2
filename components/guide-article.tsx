import Link from "next/link";
import type { GuidePage } from "@/content/pages";
import { LAST_REVIEWED, RELEASE_DATE } from "@/content/pages";
import { SITE_URL } from "@/lib/site";
import { VideoFacade } from "./video-facade";

const SOURCES = [
  {
    name: "Mortal Shell II on Steam (Playstack)",
    url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
  },
  {
    name: "Official Mortal Shell website (Cold Symmetry)",
    url: "https://mortalshell.com/",
  },
];

export function GuideArticle({ page }: { page: GuidePage }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.h1,
        inLanguage: "en",
        datePublished: "2026-08-17",
        dateModified: "2026-08-17",
        author: {
          "@type": "Organization",
          name: "Mortal Shell II Community Guide",
        },
        about: { "@type": "VideoGame", name: "Mortal Shell II" },
        isAccessibleForFree: true,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Mortal Shell II Guide",
            item: SITE_URL + "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: `${SITE_URL}/${page.slug}/`,
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
        <article className="article-body">
          <p className="breadcrumb">
            <Link href="/">Mortal Shell II Guide</Link>
            <span aria-hidden="true"> / </span>
            {page.eyebrow}
          </p>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>

          {page.heroImage ? (
            <figure className="article-hero">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={page.heroImage.src}
                alt={page.heroImage.alt}
                loading="lazy"
              />
              <figcaption>{page.heroImage.caption}</figcaption>
            </figure>
          ) : null}

          {page.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          {page.blocks.map((block) => (
            <section className="fact-block" key={block.heading}>
              <h2>{block.heading}</h2>
              {block.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {block.bullets ? (
                <ul>
                  {block.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {page.video ? (
            <section className="article-video" aria-label="Official video">
              <VideoFacade
                youtubeId={page.video.youtubeId}
                title={page.video.title}
                poster={
                  page.video.poster ??
                  `/img/yt-${page.video.youtubeId}.jpg`
                }
                caption={page.video.caption}
              />
            </section>
          ) : null}

          {page.communityNote ? (
            <aside className="note-box" aria-label="Community opinion">
              <h2>{page.communityNote.heading}</h2>
              <p>{page.communityNote.body}</p>
              <p className="attribution">
                — {page.communityNote.attribution}
              </p>
            </aside>
          ) : null}

          <section className="pending-box" aria-label="Pending launch verification">
            <h2>{page.pending.heading}</h2>
            <p>{page.pending.intro}</p>
            <ul>
              {page.pending.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <footer className="article-sources">
            <h2>Sources &amp; review trail</h2>
            <ul>
              {SOURCES.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "12px" }}>
              Facts on this page were verified against the sources above on{" "}
              {LAST_REVIEWED}. The game releases {RELEASE_DATE}; this page will
              be rechecked against the launch build.
            </p>
          </footer>
        </article>

        <aside className="article-side">
          <div className="side-box">
            <h2>Continue reading</h2>
            <ul className="side-links">
              {page.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="side-box">
            <h2>Page status</h2>
            <p className="side-meta">
              <strong>Last reviewed</strong> — {LAST_REVIEWED}
              <br />
              <strong>Game version</strong> — pre-release (1.0 pending)
              <br />
              <strong>Status</strong> — facts verified, launch details pending
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
