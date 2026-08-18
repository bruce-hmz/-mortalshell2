import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2>Mortal Shell II Community Guide</h2>
            <p>
              An independent, fan-made resource for Mortal Shell II players.
              Guides, builds, walkthroughs, and mechanics for Mortal Shell II.
            </p>
            <p style={{ fontSize: "0.82rem" }}>
              Mortal Shell II is developed by Cold Symmetry and published by
              Playstack. This unofficial fan site is not affiliated with or
              endorsed by them.
            </p>
            <p style={{ fontSize: "0.82rem" }}>
              Screenshots, key art, and trailers are official promotional
              material courtesy of Cold Symmetry / Playstack, sourced from the
              Steam store page, mortalshell.com, and Playstack&apos;s YouTube
              channel.
            </p>
          </div>
          <div>
            <h2>Official links</h2>
            <ul className="footer-links">
              <li>
                <a
                  href="https://store.steampowered.com/app/2584270/Mortal_Shell_II/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mortal Shell II on Steam ↗
                </a>
              </li>
              <li>
                <a
                  href="https://mortalshell.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2026 mortalshell2.online</span>
          <nav aria-label="Legal">
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/terms/">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
