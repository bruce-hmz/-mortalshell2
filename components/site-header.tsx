"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/beginner-guide/", label: "Beginner" },
  { href: "/best-build/", label: "Best Build" },
  { href: "/walkthrough/", label: "Walkthrough" },
  { href: "/shells/", label: "Shells" },
  { href: "/weapons/", label: "Weapons" },
  { href: "/tips/", label: "Tips" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-logo"
            src="/android-chrome-192x192.png"
            alt="Mortal Shell II Guide logo"
            width={28}
            height={28}
          />
          <span>
            Mortal Shell II<span style={{ color: "var(--ash-dim)" }}> Guide</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Guides">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
