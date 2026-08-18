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
        We do not sell or share personal data. If analytics are enabled in the
        future, this policy will be updated before that happens, and any
        measurement will be limited to aggregate, non-identifying traffic
        counts.
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
