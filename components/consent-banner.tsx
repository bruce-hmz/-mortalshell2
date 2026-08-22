"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "mortalshell2-consent-v1";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      // storage unavailable — do not show the banner
    }
    if (choice === null) setVisible(true);
  }, []);

  if (!visible) return null;

  function choose(value: "all" | "essential") {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // storage unavailable — still apply the choice for this visit
    }
    document.dispatchEvent(
      new CustomEvent("mortalshell2:consent", { detail: value }),
    );
    setVisible(false);
  }

  return (
    <div
      className="consent-banner"
      role="dialog"
      aria-label="Cookie consent"
    >
      <p>
        Anonymous traffic measurement always runs. Third-party ad cookies load
        only with your permission — see the{" "}
        <Link href="/privacy/">privacy policy</Link>.
      </p>
      <div className="consent-banner__actions">
        <button
          type="button"
          className="consent-banner__accept"
          onClick={() => choose("all")}
        >
          Allow ads
        </button>
        <button
          type="button"
          className="consent-banner__decline"
          onClick={() => choose("essential")}
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
