import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="wrap legal-body">
      <p className="eyebrow">Lost in the dark</p>
      <h1>This path leads nowhere</h1>
      <p>
        The page you were looking for does not exist — or has not been
        awakened yet.
      </p>
      <p>
        <Link href="/" className="btn btn-ghost">
          Return to the hub
        </Link>
      </p>
    </div>
  );
}
