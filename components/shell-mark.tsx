export function ShellMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5c-4.4 0-7 3.1-7 7.4v5.6l2.4 5h9.2l2.4-5V9.9c0-4.3-2.6-7.4-7-7.4Z" />
      <path d="M12 2.5v18.5" opacity="0.5" />
      <path d="M8.2 11.2h2.2M13.6 11.2h2.2" />
    </svg>
  );
}

export function HollowHelm() {
  return (
    <svg
      viewBox="0 0 220 240"
      fill="none"
      role="img"
      aria-label="Line illustration of a hollow warrior helm, the emblem of the lost shells"
    >
      {/* helm dome */}
      <path
        d="M110 16c-36 0-58 25-58 62v42l10 26v18h96v-18l10-26V78c0-37-22-62-58-62Z"
        stroke="#e7e2d4"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* central ridge */}
      <path
        d="M110 16v100"
        stroke="#e7e2d4"
        strokeWidth="1.4"
        opacity="0.55"
      />
      {/* visor void */}
      <path
        d="M62 96h34M124 96h34"
        stroke="#0c0e11"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M62 96h34M124 96h34"
        stroke="#d0834a"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* breath vents */}
      <path
        d="M96 128h28M100 138h20M103 148h14"
        stroke="#e7e2d4"
        strokeWidth="1.6"
        opacity="0.7"
      />
      {/* gorget / shoulders */}
      <path
        d="M40 178c14 22 40 34 70 34s56-12 70-34"
        stroke="#e7e2d4"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M58 190c12 14 31 22 52 22s40-8 52-22"
        stroke="#d0834a"
        strokeWidth="1.4"
        opacity="0.6"
      />
      {/* ember motes */}
      <circle cx="52" cy="70" r="2.2" fill="#d0834a" opacity="0.8" />
      <circle cx="172" cy="86" r="1.6" fill="#d0834a" opacity="0.6" />
      <circle cx="166" cy="52" r="1.2" fill="#e7e2d4" opacity="0.5" />
    </svg>
  );
}
