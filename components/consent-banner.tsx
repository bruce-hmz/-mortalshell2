"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "mortalshell2-consent-v1";

// Region heuristic shared with the inline script in components/ad-slot.tsx
// (keep both in sync). zh visitors never see ads, so they see no banner;
// EU/EEA-style visitors get strict opt-in, everyone else a notice with an
// opt-out while ads run by default.
const EU_REGIONS = new Set([
  "at", "be", "bg", "hr", "cy", "cz", "dk", "ee", "fi", "fr", "de", "gr",
  "hu", "ie", "it", "lv", "lt", "lu", "mt", "nl", "pl", "pt", "ro", "sk",
  "si", "es", "se", "gb", "ch", "no", "is", "li",
]);
const EU_LANGS = new Set([
  "de", "fr", "es", "it", "pt", "nl", "pl", "sv", "da", "fi", "cs", "el",
  "hu", "ro", "sk", "sl", "bg", "hr", "et", "lv", "lt", "mt", "ga",
]);

function localeTags(): readonly string[] {
  return navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""];
}

function isZhVisitor(): boolean {
  return localeTags().some((l) => String(l).toLowerCase().startsWith("zh"));
}

function isEuVisitor(): boolean {
  return localeTags().some((l) => {
    const parts = String(l).toLowerCase().replace("_", "-").split("-");
    const region = parts.slice(1).find((p) => p.length === 2) || "";
    return region ? EU_REGIONS.has(region) : EU_LANGS.has(parts[0]);
  });
}

type BannerMode = "opt-in" | "notice";

// GA4 is loaded via @next/third-parties in the root layout. If a visitor
// blocks it, skip silently — measurement must never break the banner.
type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

function trackConsent(name: "consent_banner_view" | "consent_choice", params: Record<string, string>) {
  const gtag = (window as GtagWindow).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

export function ConsentBanner() {
  const [mode, setMode] = useState<BannerMode | null>(null);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      // storage unavailable — do not show the banner
    }
    if (choice !== null) return;
    if (isZhVisitor()) return;
    const nextMode: BannerMode = isEuVisitor() ? "opt-in" : "notice";
    setMode(nextMode);
    trackConsent("consent_banner_view", { mode: nextMode });
  }, []);

  function choose(value: "all" | "essential") {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // storage unavailable — still apply the choice for this visit
    }
    document.dispatchEvent(
      new CustomEvent("mortalshell2:consent", { detail: value }),
    );
    trackConsent("consent_choice", { choice: value, mode: mode ?? "unknown" });
    setMode(null);
  }

  if (mode === null) return null;

  return (
    <div
      className="consent-banner"
      role="dialog"
      aria-label={mode === "opt-in" ? "Cookie consent" : "Ads notice"}
    >
      {mode === "opt-in" ? (
        <p>
          Anonymous traffic measurement always runs. Third-party ad cookies
          load only with your permission — see the{" "}
          <Link href="/privacy/">privacy policy</Link>.
        </p>
      ) : (
        <p>
          This free guide is funded by ads. Anonymous traffic measurement
          always runs, and outside the EU/EEA ad partners load by default —
          see the <Link href="/privacy/">privacy policy</Link>.
        </p>
      )}
      <div className="consent-banner__actions">
        {mode === "opt-in" ? (
          <>
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
          </>
        ) : (
          <>
            <button
              type="button"
              className="consent-banner__accept"
              onClick={() => choose("all")}
            >
              Got it
            </button>
            <button
              type="button"
              className="consent-banner__decline"
              onClick={() => choose("essential")}
            >
              Turn off ads
            </button>
          </>
        )}
      </div>
    </div>
  );
}
