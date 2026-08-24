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
        Advertising: this site shows third-party ads (300&times;250 banner and
        native banner formats served via Adsterra-network domains such as
        highrevenueformat.com and profitableratecpmnetwork.com). For visitors
        we detect as being in the EU/EEA and similar jurisdictions, ads load
        only if you choose &ldquo;Allow ads&rdquo; in the consent banner — if
        you decline, no ad scripts or ad cookies run at all. Everywhere else,
        ads load by default; the consent banner&rsquo;s &ldquo;Turn off
        ads&rdquo; button removes ad content immediately. Visitors with
        Chinese-language browsers always get an ad-free page. Ad networks may
        set their own cookies to measure and cap impressions; each
        network&rsquo;s own privacy policy applies to that data, and changing
        a stored choice requires clearing this site&rsquo;s storage in your
        browser.
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
