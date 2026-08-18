import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for the Mortal Shell II Community Guide fan site.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <div className="wrap legal-body">
      <h1>Terms of Service</h1>
      <p>
        This is an independent, fan-made resource for Mortal Shell II players.
        Content is provided as-is, for informational purposes only, with no
        warranty of accuracy or completeness.
      </p>
      <p>
        Game facts on this site are checked against the official Steam page
        and the developer&apos;s website on the review date shown on each
        guide. Game content changes with patches; always treat specific
        numbers as subject to the current game version.
      </p>
      <p>
        Mortal Shell II, its name, and its assets belong to Cold Symmetry and
        Playstack. This unofficial fan site is not affiliated with or endorsed
        by them. All trademarks are the property of their respective owners.
      </p>
    </div>
  );
}
