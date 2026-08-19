import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Mortal Shell II Community Guide fan site.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="wrap legal-body">
      <h1>Privacy Policy</h1>
      <p>
        This fan-made guide site does not create accounts, does not require
        sign-in, and does not ask for personal information.
      </p>
      <p>
        We use Google Analytics (Google tag, measurement ID G-2WH9BHR3T7) to
        measure aggregate traffic — which pages are read and where visitors
        come from. Google&apos;s measurement cookies may be set in your
        browser; IP addresses are anonymized by default in GA4 and we do not
        build individual profiles, sell, or share personal data. You can
        block measurement with any standard ad-blocker or browser tracking
        protection without affecting how this site works.
      </p>
      <p>
        External links to the official Steam store page and the official
        Mortal Shell website are provided for convenience; those sites have
        their own privacy policies.
      </p>
      <p>
        Mortal Shell II is developed by Cold Symmetry and published by
        Playstack. This unofficial fan site is not affiliated with or endorsed
        by them.
      </p>
    </div>
  );
}
