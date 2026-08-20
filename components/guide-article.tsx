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
  const articleImage = `${SITE_URL}${page.heroImage?.src ?? "/img/site-2.jpg"}`;
  const articleSources = page.sources ?? SOURCES;
  const reviewedOn = page.reviewedOn ?? LAST_REVIEWED;

  const graph: object[] = [
    {
      "@type": "Article",
      headline: page.h1,
      url: `${SITE_URL}/${page.slug}/`,
      image: [articleImage],
      inLanguage: "en",
      datePublished: page.datePublished ?? "2026-08-17",
      dateModified: page.datePublished ?? "2026-08-17",
      author: {
        "@type": "Organization",
        name: "Mortal Shell II Community Guide",
        url: `${SITE_URL}/`,
      },
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
        "@id": `${SITE_URL}/${page.slug}/`,
      },
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
          name: page.h1,
          item: `${SITE_URL}/${page.slug}/`,
        },
      ],
    },
  ];

  if (page.video) {
    graph.push({
      "@type": "VideoObject",
      name: page.video.title,
      description: page.video.caption,
      thumbnailUrl: [`${SITE_URL}/img/yt-${page.video.youtubeId}.jpg`],
      uploadDate: page.video.publishedAt,
      duration: page.video.duration,
      embedUrl: `https://www.youtube.com/embed/${page.video.youtubeId}`,
      contentUrl: `https://www.youtube.com/watch?v=${page.video.youtubeId}`,
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap article">
        <div className="article-body">
          <p className="breadcrumb">
            <Link href="/">Mortal Shell II Guide</Link>
            <span aria-hidden="true"> / </span>
            {page.eyebrow}
          </p>
          <article>
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
              <p key={i} className={i === 0 ? "lead" : undefined}>
                {paragraph}
              </p>
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
                    page.video.poster ?? `/img/yt-${page.video.youtubeId}.jpg`
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
          </article>

          <aside
            className="pending-box"
            aria-label="Pending launch verification"
          >
            <h2>{page.pending.heading}</h2>
            <p>{page.pending.intro}</p>
            <ul>
              {page.pending.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>

          <footer className="article-sources">
            <h2>Sources &amp; review trail</h2>
            <ul>
              {articleSources.map((source) => (
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
              {reviewedOn}. The game releases {RELEASE_DATE}; this page will
              be rechecked against the launch build.
            </p>
          </footer>
        </div>

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
              <strong>Last reviewed</strong> — {reviewedOn}
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
