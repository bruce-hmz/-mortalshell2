import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About This Guide" },
  description:
    "Who runs the Mortal Shell II Community Guide, how its facts are checked, and how to get in touch.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About This Guide",
    description: "Who runs the Mortal Shell II Community Guide and how it verifies facts.",
    images: [{ url: "/img/site-2.jpg", width: 1600, height: 899 }],
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <div className="wrap legal-body">
      <p className="eyebrow">About</p>
      <h1>About This Guide</h1>
      <p>
        The Mortal Shell II Community Guide is an independent, fan-made
        resource run by Bruce. It started before the game&apos;s August 20,
        2026 release and is being updated through launch week and beyond.
      </p>
      <p>
        <strong>How this site handles facts.</strong> Every guide is built
        against a verification trail: game facts are checked against official
        sources (the Steam store page and mortalshell.com) or against at
        least two independent guide publishers, and each page shows its
        sources and review dates at the bottom. Community opinions — like
        build recommendations — are always attributed to their authors, and
        anything not yet confirmed is marked as pending instead of guessed.
        When sources disagree, the disagreement is recorded rather than
        silently resolved.
      </p>
      <p>
        <strong>What this site is not.</strong> It is not affiliated with or
        endorsed by Cold Symmetry or Playstack. Screenshots, key art, and
        trailers shown here are official promotional material, credited to
        their creators.
      </p>
      <p>
        <strong>Contact.</strong> Questions, corrections, and tips are
        welcome: <a href="mailto:yang2big@gmail.com">yang2big@gmail.com</a>.
        Corrections that come with a source will be checked and applied.
      </p>
    </div>
  );
}
