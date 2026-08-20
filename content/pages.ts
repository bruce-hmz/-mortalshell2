export type FactBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuidePageMedia = {
  src: string;
  alt: string;
  caption: string;
};

export type GuidePageVideo = {
  youtubeId: string;
  title: string;
  caption: string;
  publishedAt: string;
  duration: string;
  poster?: string;
};

export type GuidePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  cardBlurb: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  heroImage?: GuidePageMedia;
  video?: GuidePageVideo;
  blocks: FactBlock[];
  communityNote?: {
    heading: string;
    body: string;
    attribution: string;
  };
  pending: {
    heading: string;
    intro: string;
    items: string[];
  };
  related: { label: string; href: string }[];
  /**
   * Per-page overrides. Defaults keep the original site-wide review trail
   * (Steam store page + official site, August 17); pages researched later
   * point at the sources they were actually verified against.
   */
  sources?: { name: string; url: string }[];
  reviewedOn?: string;
  datePublished?: string;
};

export const LAST_REVIEWED = "August 17, 2026";
export const RELEASE_DATE = "August 20, 2026";

export const guidePages: GuidePage[] = [
  {
    slug: "beginner-guide",
    metaTitle: "Mortal Shell 2 Beginner Guide: First Hours & Combat",
    metaDescription:
      "Mortal Shell 2 beginner guide: how no-stamina combat and resolve shape your first hours, what changes between Standard and Devout Edition, and what gets confirmed at launch.",
    cardBlurb:
      "No-stamina combat pacing, resolve generation, and the edition that lets you start early.",
    video: {
      youtubeId: "w0SLSLuYMhw",
      title: "Mortal Shell II — Official Announcement Trailer",
      caption: "Official Announcement Trailer — Playstack on YouTube",
      publishedAt: "2025-06-06T14:04:28-07:00",
      duration: "PT2M",
    },
    h1: "Mortal Shell 2 Beginner Guide",
    eyebrow: "Start Here",
    intro: [
      "Mortal Shell II rewards aggression from the very first fight. This beginner guide covers what is officially confirmed about the early game — the resolve-driven combat loop and the edition differences that decide when you can start playing.",
      "It was fact-checked against the official Steam page and the developer's website on " +
        LAST_REVIEWED +
        ". Everything not yet confirmed is listed openly at the bottom of the page.",
    ],
    blocks: [
      {
        heading: "Combat first: no stamina, resolve instead",
        paragraphs: [
          "Mortal Shell II removes the stamina gauge entirely. Attacking has no resource cost, so the correct opening hours are aggressive: keep pressing into melee range instead of backing off between swings.",
          "That pressure is not just for damage. Landing aggressive hits is how you charge resolve, and resolve is what pays for your defensive skills and the discharge of your ranged sidearm. A beginner who stops attacking also stops defending — the two share one economy.",
        ],
        bullets: [
          "Attack freely — there is no stamina bar to manage",
          "Melee hits charge resolve, your resource for defense and sidearm discharge",
          "Aggressive positioning is the intended rhythm, not a risk you avoid",
        ],
      },
      {
        heading: "Editions and when you can start",
        paragraphs: [
          "Two editions are confirmed for launch. The Standard Edition unlocks on " +
            RELEASE_DATE +
            ". The Devout Edition grants up to 72 hours of advance access, letting you begin playing before the worldwide release window opens.",
        ],
      },
    ],
    pending: {
      heading: "Pending launch verification",
      intro:
        "The game has not released yet. The following will be confirmed on this page once the release build is in hand:",
      items: [
        "Exact parry timing windows across different enemy weapon archetypes",
      ],
    },
    related: [
      { label: "Mortal Shell 2 Tips", href: "/tips/" },
      { label: "All Shells", href: "/shells/" },
      { label: "Best Build", href: "/best-build/" },
    ],
  },
  {
    slug: "best-build",
    metaTitle: "Mortal Shell 2 Best Build: Shells & Posture Synergy",
    metaDescription:
      "How builds work in Mortal Shell 2: eight shells as classes with talent trees, no-stamina resolve generation, and the early community consensus on the strongest burst combination.",
    cardBlurb:
      "Eight shells as classes, resolve-driven builds, and the early consensus on burst DPS.",
    heroImage: {
      src: "/img/site-2.jpg",
      alt: "Mortal Shell II key art: an armored warrior bearing a sword against a burning backdrop",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Best Build",
    eyebrow: "Builds",
    intro: [
      "Builds in Mortal Shell II are built from two confirmed pillars: which of the eight shells you possess, and how your combat loop generates and spends resolve. This page explains both, then records the early community consensus — clearly attributed, because it is an opinion, not a verified fact.",
      "It was fact-checked against the official Steam page and the developer's website on " +
        LAST_REVIEWED +
        ".",
    ],
    blocks: [
      {
        heading: "Shells are the class system",
        paragraphs: [
          "The eight warrior shells act as specialized combat classes. Each shell carries its own talent tree and its own set of passives, so the foundation of any build is choosing the shell whose kit matches the way you want to fight.",
        ],
      },
      {
        heading: "No stamina means resolve builds",
        paragraphs: [
          "There is no stamina management in Mortal Shell II. Instead, combat builds revolve around resolve generation and sidearm synergy: you charge resolve through aggression, then spend it on the abilities and sidearm discharge that define your build's power spikes.",
        ],
      },
    ],
    communityNote: {
      heading: "Early community consensus",
      body: "Aggressive high-resolve shells combined with heavy posture-breaking melee weapons offered the highest burst DPS in early testing.",
      attribution: "Community Early Testing Consensus",
    },
    pending: {
      heading: "Pending launch verification",
      intro:
        "Numeric details arrive with the full release. This page will be rechecked against:",
      items: [
        "Detailed damage multipliers for end-game weapon ascensions",
        "Day-one patch balance adjustments and post-launch shell tuning",
      ],
    },
    related: [
      { label: "All Shells", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
    ],
  },
  {
    slug: "walkthrough",
    metaTitle: "Mortal Shell 2 Walkthrough: World & Progression",
    metaDescription:
      "What is confirmed about Mortal Shell 2 progression: an interconnected open world with over 60 dungeons, and what exploration off the golden path rewards.",
    cardBlurb:
      "An interconnected world of 60+ dungeons — and what hides beyond the golden path.",
    heroImage: {
      src: "/img/site-5.jpg",
      alt: "Mortal Shell II key art: a hooded armored figure before a dark, corrupted landscape",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Walkthrough",
    eyebrow: "Progression",
    intro: [
      "A full step-by-step Mortal Shell II walkthrough will be published once the game is in players' hands on " +
        RELEASE_DATE +
        ". What is already officially confirmed is the shape of the journey — the world structure and the rules of exploration — and that is what this page covers today.",
      "Fact-checked against the official Steam page and the developer's website on " +
        LAST_REVIEWED +
        ".",
    ],
    blocks: [
      {
        heading: "One interconnected world, 60+ dungeons",
        paragraphs: [
          "The campaign takes place across an interconnected open world containing more than 60 distinct dungeons. The world is compact and tightly woven rather than a sprawl of separate levels, so routes loop back on themselves and shortcuts matter.",
        ],
      },
      {
        heading: "The golden path and what hides beyond it",
        paragraphs: [
          "Exploration beyond the golden path — the main route to each objective — is how you find hidden shells, weapons, and upgrade curiosities. The game is built to reward players who wander from the critical route.",
        ],
        bullets: [
          "Hidden shells off the main route",
          "Additional weaponry",
          "Upgrade curiosities",
        ],
      },
    ],
    pending: {
      heading: "Pending launch verification",
      intro:
        "The step-by-step route content will be added after public release, including:",
      items: [
        "Boss names and encounter order",
        "Exact dungeon order for non-critical side zones",
      ],
    },
    related: [
      { label: "Beginner Guide", href: "/beginner-guide/" },
      { label: "Mortal Shell 2 Tips", href: "/tips/" },
      { label: "All Shells", href: "/shells/" },
    ],
  },
  {
    slug: "shells",
    metaTitle: "Mortal Shell 2 Shells: All 8 Lost Warriors & Abilities",
    metaDescription:
      "All confirmed details on the eight lost warrior shells in Mortal Shell 2: possession, innate abilities, talent trees, and the memories that unlock each shell's story.",
    cardBlurb:
      "All eight lost warriors: possession, innate abilities, and the memories that unlock them.",
    heroImage: {
      src: "/img/shot-1.jpg",
      alt: "Mortal Shell II gameplay screenshot showing the Change Equipment menu with shell, weapon and sidearm tabs",
      caption:
        "Official gameplay screenshot — the equipment menu (Steam store page)",
    },
    h1: "Mortal Shell 2 Shells",
    eyebrow: "Classes",
    intro: [
      "Shells are Mortal Shell II's answer to classes: the forgotten bodies of eight lost warriors, scattered across the world, each one waiting to be possessed and mastered. This page collects everything officially confirmed about them so far.",
      "Fact-checked against the official Steam page and the developer's website on " +
        LAST_REVIEWED +
        ".",
    ],
    blocks: [
      {
        heading: "Eight lost warriors to possess",
        paragraphs: [
          "Eight distinct lost warrior shells are scattered throughout the game's ravaged world. Finding and possessing them is the core of character progression — each shell changes how the game feels to play.",
        ],
      },
      {
        heading: "Memories unlock abilities and lore",
        paragraphs: [
          "Unravelling a shell's memories unlocks its unique innate abilities and reveals its personal lore background. Playing a shell well and digging into its secrets is how you develop its full kit.",
        ],
      },
    ],
    pending: {
      heading: "Pending launch verification",
      intro: "Per-shell numbers arrive with the launch build:",
      items: [
        "Full individual shell stat spreads, including health and resolve capacity",
      ],
    },
    related: [
      { label: "Best Build", href: "/best-build/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
    ],
  },
  {
    slug: "weapons",
    metaTitle: "Mortal Shell 2 Weapons: Upgrades & Posture Breaks",
    metaDescription:
      "Confirmed Mortal Shell 2 weapon systems: strategic upgrades for melee blades and ranged sidearms, and how consecutive strikes break enemy posture for critical executions.",
    cardBlurb:
      "Melee blades, ranged sidearms, and the posture system that turns stagger into executions.",
    heroImage: {
      src: "/img/site-3.jpg",
      alt: "Mortal Shell II key art: a hooded warrior in worn armor standing in a dark corrupted scene",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Weapons",
    eyebrow: "Arsenal",
    intro: [
      "Mortal Shell II's arsenal spans close-quarters melee blades and ranged projectile sidearms, both feeding into one posture system. This page covers every weapon mechanic officially confirmed so far.",
      "Fact-checked against the official Steam page and the developer's website on " +
        LAST_REVIEWED +
        ".",
    ],
    blocks: [
      {
        heading: "Two upgrade tracks: melee and sidearms",
        paragraphs: [
          "Weaponry features a strategic upgrade system that covers both close-quarters melee blades and ranged projectile sidearms. Upgrading is a deliberate choice between the two tracks rather than a single linear path.",
        ],
      },
      {
        heading: "Posture damage and critical strikes",
        paragraphs: [
          "Consecutive melee strikes build posture damage on the target. Enough of it staggers tough enemies, opening them up for critical execution strikes — the payoff rhythm the whole combat system is built around.",
        ],
        bullets: [
          "Chain melee hits to build posture damage",
          "Posture break staggers tough enemies",
          "Staggered enemies can be finished with critical execution strikes",
        ],
      },
    ],
    pending: {
      heading: "Pending launch verification",
      intro: "Confirmed on this page after release:",
      items: [
        "Exact weapon upgrade material costs per tier",
      ],
    },
    related: [
      { label: "Best Build", href: "/best-build/" },
      { label: "Mortal Shell 2 Tips", href: "/tips/" },
      { label: "All Shells", href: "/shells/" },
    ],
  },
  {
    slug: "tips",
    metaTitle: "Mortal Shell 2 Tips: Resolve, Combat & Dungeon Secrets",
    metaDescription:
      "Essential confirmed Mortal Shell 2 tips: how resolve funds defense and weapon arts, and why non-linear dungeon paths hide equipment, currencies and lore.",
    cardBlurb:
      "Resolve is earned in melee — and dungeons are branching mazes that reward wandering.",
    heroImage: {
      src: "/img/site-7.jpg",
      alt: "Mortal Shell II key art: an armored figure in a helmet, centered against a dark background",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Tips",
    eyebrow: "Mechanics",
    intro: [
      "The best Mortal Shell II tips follow from two confirmed systems: resolve, the currency your aggression earns, and dungeons built as non-linear branching mazes. Master both and the early game opens up.",
      "Fact-checked against the official Steam page and the developer's website on " +
        LAST_REVIEWED +
        ".",
    ],
    blocks: [
      {
        heading: "Tip 1 — Stay aggressive to stay defended",
        paragraphs: [
          "Landing aggressive hits actively generates resolve. Resolve is the primary currency for your defensive skills and your powerful weapon arts, so the safest play in Mortal Shell II looks violent: keep hitting things to keep your options open.",
        ],
        bullets: [
          "Resolve is generated by landing hits",
          "Resolve pays for defensive skills",
          "Resolve pays for powerful weapon arts",
        ],
      },
      {
        heading: "Tip 2 — Treat dungeons as branching mazes",
        paragraphs: [
          "Dungeons feature non-linear branching paths containing hidden equipment, upgrade currencies, and lore items. Dead ends are rarely wasted — the path you skip is often where the reward is.",
        ],
        bullets: [
          "Hidden equipment",
          "Upgrade currencies",
          "Lore items",
        ],
      },
    ],
    pending: {
      heading: "Pending launch verification",
      intro: "Benchmarked on this page once the final build is available:",
      items: [
        "Optimal parry timing frames per shell",
      ],
    },
    related: [
      { label: "Beginner Guide", href: "/beginner-guide/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Walkthrough", href: "/walkthrough/" },
      { label: "Performance Fix", href: "/performance-fix/" },
    ],
  },
  {
    slug: "performance-fix",
    metaTitle: "Mortal Shell 2 Performance Fix: Crashes & Stuttering",
    metaDescription:
      "Fix Mortal Shell 2 PC crashes and stuttering: Playstack's Hotfix 1, the official Keyboard Bindings save-file workaround, the shader cache fix, and minimum PC requirements.",
    cardBlurb:
      "The crash hotfix, the official save-file workaround, and the shader cache fix for lock-ups.",
    h1: "Mortal Shell 2 Performance Fix",
    eyebrow: "Troubleshooting",
    intro: [
      "The Advanced Access window that opened on August 17 came with PC crash reports — and Playstack has already responded. This page collects every fix that is officially confirmed: the crash hotfix the publisher shipped during Advanced Access, the save-file workaround for the Keyboard Bindings menu crash, and the shader cache change recommended for full lock-ups.",
      "It was fact-checked against Playstack's official Steam announcements, the publisher's verified community posts, and Steam store data on August 19, 2026 — the day before worldwide release.",
    ],
    blocks: [
      {
        heading: "Fix 1 — Install the crash hotfix",
        paragraphs: [
          "If Mortal Shell II crashes frequently on PC, the first fix is already published. During Advanced Access, Playstack released Hotfix 1 for the frequent PC crashes players were reporting. It was first offered on the Steam patch-preview branch — Mortal Shell II in your library, Properties, then Betas — and has since been rolled out to all players as a standard patch, so the default branch already includes it.",
        ],
        bullets: [
          "Hotfix 1 targets the frequent PC crashes reported during Advanced Access",
          "It was initially opt-in via the patch-preview beta branch (Properties > Betas)",
          "It is now available to all players as a standard patch",
        ],
      },
      {
        heading: "Fix 2 — Keyboard Bindings menu crash (official workaround)",
        paragraphs: [
          "Playstack has confirmed receiving several reports of crashes when opening the Keyboard Bindings menu in Settings. While a permanent fix is being worked on, the publisher published this official workaround:",
        ],
        bullets: [
          "Close Mortal Shell II completely",
          "Navigate to \\Users\\[Your Username]\\AppData\\Local\\MortalShell2\\Saved\\SaveGames",
          "Delete EnhancedInputUserSettings.sav and SpartaGameSettings.sav",
          "Launch the game again",
        ],
      },
      {
        heading: "Fix 3 — Full lock-ups: set shader cache to Unlimited",
        paragraphs: [
          "For full lock-ups and crashes — including lock-ups on the loading screen after death — Playstack's community manager recommends raising the shader cache limit: open the NVIDIA Control Panel app, go to 3D Settings, and set Shader Cache Size to \"Unlimited\".",
          "An independent guide reaches the same conclusion, listing the Shader Cache Size change (NVIDIA Control Panel or AMD Software equivalent) as the most effective fix for Mortal Shell II stuttering.",
        ],
        bullets: [
          "NVIDIA Control Panel > 3D Settings > Shader Cache Size > Unlimited",
          "AMD owners: the equivalent setting lives in AMD Software",
        ],
      },
      {
        heading: "Before anything else: check the requirements",
        paragraphs: [
          "Mortal Shell II's Steam listing sets a clear floor for PC players, and two details are easy to miss: the game wants 70 GB of space and an SSD is required. The PC release is Windows-only — there are no macOS or Linux listings.",
        ],
        bullets: [
          "OS: Windows 10 / 11 (Windows-only release)",
          "CPU: Intel Core i7-10700K @ 3.8 GHz or AMD Ryzen 5 3600 @ 3.6 GHz",
          "RAM: 16 GB",
          "GPU: NVIDIA GeForce RTX 2060 SUPER 8 GB or AMD Radeon RX 6600 8 GB",
          "DirectX: Version 12",
          "Storage: 70 GB available space — SSD required",
        ],
      },
    ],
    communityNote: {
      heading: "Further settings worth trying (attributed)",
      body: "Beyond the official fixes, LagoFast recommends disabling in-game V-Sync and capping the frame rate externally (e.g. 60 FPS via RivaTuner), switching Windows to a High Performance power plan with GPU mode \"Prefer maximum performance\", lowering Shadow Quality to High or Medium, enabling DLSS/FSR in Balanced mode, and trying the community-reported -UseFixedTimeStep Steam launch option for shader stutter.",
      attribution: "LagoFast performance guide, updated August 16, 2026",
    },
    pending: {
      heading: "Pending launch verification",
      intro:
        "The game releases August 20, 2026. This page will be rechecked against the launch build; still open:",
      items: [
        "Whether a launch-day patch supersedes Hotfix 1",
        "A permanent fix note for the Keyboard Bindings crash (the workaround above is temporary)",
        "Recommended PC requirements — Steam currently lists minimum only",
        "Official word on Xbox Series S crash reports near the forgotten crossbow area (player-reported, collected by Playstack)",
      ],
    },
    related: [
      { label: "Mortal Shell 2 Tips", href: "/tips/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
      { label: "Best Build", href: "/best-build/" },
    ],
    sources: [
      {
        name: "Mortal Shell II Steam news (Playstack)",
        url: "https://store.steampowered.com/news/app/2584270",
      },
      {
        name: "Devout Edition Bug Reports megathread (Playstack community team, Reddit)",
        url: "https://www.reddit.com/r/MortalShell/comments/1vqrp5x/megathread_devout_edition_bug_reports/",
      },
      {
        name: "Mortal Shell II on Steam — store data",
        url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
      },
      {
        name: "LagoFast — Mortal Shell 2 stuttering & FPS drops guide",
        url: "https://www.lagofast.com/en/blog/mortal-shell-2-stuttering-fps-drops/",
      },
    ],
    reviewedOn: "August 19, 2026",
    datePublished: "2026-08-20",
  },
];

export function getGuidePage(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}
