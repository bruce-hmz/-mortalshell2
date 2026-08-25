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
      "Mortal Shell 2 beginner guide: no-stamina combat, the resolve economy, your first shells, posture-break executions, and Standard vs Devout start times.",
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
      "Mortal Shell II rewards aggression from the very first fight. This beginner guide covers the opening hours: the resolve-driven combat loop, your first shells, the posture-break system, and the edition differences that decided when you could start playing.",
      "Core mechanics were fact-checked against the official Steam page and the developer's website on " +
        LAST_REVIEWED +
        "; shell and weapon details were verified against the launch build on August 20, 2026. Anything still unconfirmed is listed openly at the bottom of the page.",
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
          "Two editions are confirmed. The Standard Edition unlocked on " +
            RELEASE_DATE +
            ". The Devout Edition granted up to 72 hours of advance access, letting early buyers begin playing before the worldwide release window opened.",
        ],
      },
      {
        heading: "Possession 101: your first shells",
        paragraphs: [
          "Shells are Mortal Shell II's answer to character classes: the forgotten bodies of eight lost warriors — Tiel, Proxima, Eredrim, Gragu, Smert, Sester Genessa, Lazlo, and Sariel — scattered across the world for your Harbinger to possess. A ninth figure, Harros, only helps you through the prologue; he is not one of the eight.",
          "Tiel is the gentlest first pickup: his general location is revealed the moment you enter Fainweald, and his gravestone waits east of Mushroom Village. Possessing a shell is just the start — unravelling its memories unlocks its innate abilities and its personal story. Every shell's location is mapped in the [shells guide](/shells/).",
        ],
      },
      {
        heading: "Posture damage: the execution loop",
        paragraphs: [
          "Consecutive melee strikes build posture damage on your target. Fill the invisible bar and tough enemies stagger, opening them up for critical execution strikes — the payoff rhythm the whole combat system is built around.",
          "For a beginner this reframes every fight: your job is not to chip health safely from range, it is to stay in the enemy's face long enough to break them. Which weapon you swing changes how fast that happens — see the [weapons guide](/weapons/).",
        ],
      },
      {
        heading: "Sidearms run on resolve too",
        paragraphs: [
          "Your ranged sidearm is not a free backup weapon — discharging it spends the same resolve your defense depends on. There are eight sidearms to collect (Naylesshotte is your first), and per PowerPyx's locations guide none of them are missable, so nothing is lost by postponing the collection.",
          "Because sidearms draw on the aggression economy, which one you carry is a build decision, not an afterthought — the [best build guide](/best-build/) shows which sidearm each shell's loadout prefers.",
        ],
      },
      {
        heading: "Before your first session",
        paragraphs: [
          "Launch week has known rough edges. Playstack shipped Hotfix 1 for crashes, and there is an official save-file workaround for the keyboard bindings bug — both are step-by-step in the [performance fixes](/performance-fix/) guide, worth two minutes before your first run.",
          "Once you are in-game, the [tips guide](/tips/) expands the resolve and posture habits above into concrete habits for dungeons and bosses.",
        ],
      },
    ],
    pending: {
      heading: "Pending launch verification",
      intro:
        "The launch build is in hand; the following are still being measured before they appear here:",
      items: [
        "Exact parry timing windows across different enemy weapon archetypes",
        "Full per-shell stat spreads (health, resolve capacity)",
      ],
    },
    related: [
      { label: "Mortal Shell 2 Tips", href: "/tips/" },
      { label: "All Shells", href: "/shells/" },
      { label: "Best Build", href: "/best-build/" },
    ],
    sources: [
      {
        name: "Mortal Shell II on Steam (Playstack)",
        url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
      },
      {
        name: "Official Mortal Shell website (Cold Symmetry)",
        url: "https://mortalshell.com/",
      },
      {
        name: "Game8 — Mortal Shell 2 Shells List",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614504",
      },
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 shell locations",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-shell-locations",
      },
      {
        name: "PowerPyx — Mortal Shell 2 All Sidearm Locations",
        url: "https://www.powerpyx.com/mortal-shell-2-all-sidearm-locations/",
      },
    ],
    reviewedOn: "August 20, 2026",
    datePublished: "2026-08-20",
  },
  {
    slug: "best-build",
    metaTitle: "Mortal Shell 2 Best Build: Shell, Weapon & Sidearm Combos",
    metaDescription:
      "The best build for every Mortal Shell 2 shell: per-shell weapon, sidearm, and seal loadouts, plus the resolve loop that makes each one work.",
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
          "The eight warrior shells act as specialized combat classes. Each shell carries its own talent tree and its own set of passives, so the foundation of any build is choosing the shell whose kit matches the way you want to fight. The full roster — and where to find every shell — is in the [shells guide](/shells/).",
        ],
      },
      {
        heading: "No stamina means resolve builds",
        paragraphs: [
          "There is no stamina management in Mortal Shell II. Instead, combat builds revolve around resolve generation and sidearm synergy: you charge resolve through aggression, then spend it on the abilities and sidearm discharge that define your build's power spikes.",
        ],
      },
      {
        heading: "A named build for every shell",
        paragraphs: [
          "Game8's walkthrough team (guide updated August 19, 2026, against the launch build) publishes a best build for each of the eight shells, pairing a weapon, a sidearm, and a seal with each shell's ability kit. Their picks, summarized:",
        ],
        bullets: [
          "Tiel — Axe and Dagger + Salvaged Trebuchaxe: guaranteed critical strikes via the Critical Role ability",
          "Proxima (Lightning) — Great Martyr's Blade + Triarch Repeater: Biosampler inflicts Stasis and Lightning stacks for burst",
          "Eredrim — The Iconoclast + Forgotten Crossbow: wears down enemy Break gauges and controls groups",
          "Gragu — Axe and Dagger + Triarch Repeater: high critical damage stacked on Revered Heart buffs",
          "Smert (Chaos) — Axe and Dagger + Caged Hystrix: unarmed Chaos stacks during Miracle, burst at the end",
          "Sester Genessa (Clone) — Axatana + Naylshotte: Light Attack spam with Faithful Double and Stray Double for multi-hit damage",
          "Lazlo — Axatana + Ballistazooka: rapid critical hits during Overheat, Retribution feeding the Heat Meter",
          "Sariel — Veteran's Battle Axe + Caged Hystrix: Trauma damage-over-time leading into executes",
        ],
      },
      {
        heading: "What goes into a build",
        paragraphs: [
          "A full loadout in Mortal Shell II has four moving parts, and Game8's build tables show all four being tuned together. Your weapon carries the moveset and can be modified with Tarstones — the upgrade stones catalogued in the [weapons guide](/weapons/). Your sidearm (from the repeaters and crossbows like the Triarch Repeater, Ballistazooka, Forgotten Crossbow, and Caged Hystrix) spends your resolve on ranged pressure. Seals — Untarnished Seal and Vatra's Seal appear across the strongest setups — round out the kit, and each shell's ability list does the rest: Genessa's clone skills, Smert's time-stopping kit, Proxima's Biosampler, Lazlo's Heat Meter.",
          "That layering is why builds are shell-first rather than weapon-first: the same Axe and Dagger serves completely different gameplans on Smert (Chaos burst), Gragu (critical damage), and Tiel (guaranteed crits). Decide what you want the fight to feel like, pick the shell that owns that fantasy, then let the weapon and seal choices follow.",
        ],
      },
      {
        heading: "Your first build of the run",
        paragraphs: [
          "The opening hours hand you the pieces in a sensible order. The Iconoclast arrives in the prologue, and Tiel and Proxima are the first shells most players find in Fainweald — which means the Lightning Proxima setup (Great Martyr's Blade plus Triarch Repeater) and crit-focused Tiel are realistic early targets, even though their best-in-slot parts take longer to assemble.",
          "Until then, the pre-launch principles hold: aggression generates resolve, resolve funds defense, and posture breaks create your execute windows. Any shell and any weapon played inside that loop will carry you through the first dungeons while you collect the parts for the loadout you actually want.",
        ],
      },
      {
        heading: "How to read these builds",
        paragraphs: [
          "These are attributed recommendations, not objective truth — build rankings will reshuffle as patches land and the community digs into the game. The stable principles are the ones this page was built on before launch: pick the shell whose abilities you enjoy, pair it with a weapon whose moveset you can pilot (all eight are catalogued in the weapons guide), and let resolve generation pay for your defense.",
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
        "Build rankings move fast in week one:",
      items: [
        "Damage multipliers for end-game weapon ascensions",
        "Post-launch balance patches reshuffling shell and weapon rankings",
        "Second attributed build source for cross-comparison",
      ],
    },
    related: [
      { label: "Damage Calculator", href: "/damage-calculator/" },
      { label: "All Shells", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
    ],
  },
  {
    slug: "walkthrough",
    metaTitle: "Mortal Shell 2 Walkthrough: World & Progression",
    metaDescription:
      "Mortal Shell 2 walkthrough: the nine regions, the ten major bosses gating the critical path, and the shells and weapons waiting off the golden route.",
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
      "Mortal Shell II is out now (released " +
        RELEASE_DATE +
        "), and the full step-by-step walkthrough is being built against the launch build. What is already verified: the world structure, the nine regions, the ten major bosses that gate the critical path, and the rewards that hide beyond it.",
      "World structure was fact-checked against the official Steam page on " +
        LAST_REVIEWED +
        "; regions, bosses, and locations were verified on August 20, 2026 against Game8's and Rock Paper Shotgun's launch guides.",
    ],
    blocks: [
      {
        heading: "One interconnected world, 60+ dungeons",
        paragraphs: [
          "The campaign takes place across an interconnected open world containing more than 60 distinct dungeons. The world is compact and tightly woven rather than a sprawl of separate levels, so routes loop back on themselves and shortcuts matter.",
        ],
      },
      {
        heading: "The nine regions, in the order you meet them",
        paragraphs: [
          "Per Game8's launch compendium, the critical path runs through nine regions — Disciple's Pass, Fainweald, Glutted Mire, Sanguine Caverns, Ruins of Mammon, Prisoners' Domain, Withered Shoals, Conquered Temple, and Faded Citadel — with the endgame encounters waiting along The Unfounded Path. Each region is anchored by Beacons, the fast-travel and checkpoint spines you unlock as you push outward.",
        ],
      },
      {
        heading: "Ten major bosses gate the critical path",
        paragraphs: [
          "Ten major bosses guard the Corrupted Gates between you and the end of the path. Game8's recommended encounter order starts with Magdalena, the Lady of the Woods, in her glade in the Glutted Mire, and ends with Zmey the Unbidden at The Hidden Nave Beacon on The Unfounded Path — with GameSpot's guide naming Zmey as the final boss. Beyond the ten majors, Game8 counts 44 boss encounters in total, some of them missable.",
          "The full ordered roster — every boss, its Beacon, and what it drops — is in the [boss guide](/bosses/), including the two optional fights that drop Vatra's Seal and the Arbiter's Prize.",
        ],
      },
      {
        heading: "The golden path and what hides beyond it",
        paragraphs: [
          "Exploration beyond the golden path — the main route to each objective — is how you find hidden shells, weapons, and upgrade curiosities. The game is built to reward players who wander from the critical route: the seals that anchor the strongest builds (Vatra's Seal from the optional Tar Golem fight, per Game8's tables) never touch the main story.",
        ],
        bullets: [
          "Hidden shells off the main route",
          "Additional weaponry",
          "Upgrade curiosities",
        ],
      },
      {
        heading: "Shells live off the critical route",
        paragraphs: [
          "Most of the eight lost warrior shells are detours, not story milestones. Tiel and Proxima are the easiest — both general locations are revealed when you first enter Fainweald, with Tiel's gravestone east of Mushroom Village and Proxima at the Shattered Beacon in the Blackridge Cliffs. Eredrim waits behind the Warden in the Citadel of Penance's central arena; Gragu is a quest — bring him the Heart of Vatra from the Temple of Vatra and his shell is left at the One Legged Wolf Tavern; Sariel must be beaten twice, finally in the Chamber of Becoming.",
          "Every shell's unlock route, including the NPC quests for Gragu and Sester Genessa, is written up in the [shells guide](/shells/).",
        ],
      },
      {
        heading: "Weapon payouts along the way",
        paragraphs: [
          "The Iconoclast, your first weapon, arrives in the prologue. After that the arsenal is exploration bait: the Clockwork Scythe only drops in the Chamber of Becoming after Sariel the Endless is defeated twice and his four reviving tombstones are broken, and the remaining blades and axes sit in corners of the world ranging from the Obsidianite Mines to air-current rides above the High Lord's Courtyard. Weapons are upgraded with Tarstones at the Tarforge — the full set of routes and upgrade notes is in the [weapons guide](/weapons/).",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro:
        "The step-by-step route content is being written against the launch build:",
      items: [
        "Region-by-region route order with Beacon unlock sequence",
        "Per-dungeon order for non-critical side zones",
        "Optional boss and miniboss roster per region",
      ],
    },
    related: [
      { label: "Boss Guide", href: "/bosses/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
      { label: "All Shells", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
    ],
    sources: [
      {
        name: "Mortal Shell II on Steam (Playstack)",
        url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
      },
      {
        name: "Official Mortal Shell website (Cold Symmetry)",
        url: "https://mortalshell.com/",
      },
      {
        name: "Game8 — Mortal Shell 2 All Bosses",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614453",
      },
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 all bosses",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-all-bosses",
      },
      {
        name: "Game8 — Mortal Shell 2 Shells List",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614504",
      },
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 shell locations",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-shell-locations",
      },
    ],
    reviewedOn: "August 20, 2026",
    datePublished: "2026-08-20",
  },
  {
    slug: "shells",
    metaTitle: "Mortal Shell 2 Shells: All 8 Lost Warriors & Abilities",
    metaDescription:
      "All eight Mortal Shell 2 shells: the named roster, every unlock location from Tiel to Sariel, and the memories that unlock their abilities.",
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
        heading: "The eight shells, named",
        paragraphs: [
          "The launch build's eight possessable shells are Tiel, Proxima, Eredrim, Gragu, Smert, Sester Genessa, Lazlo, and Sariel. A ninth figure, Harros, appears as the vassal who helps you during the prologue — he is not counted among the eight lost warriors your Harbinger ultimately inhabits.",
          "Two of the shells, Gragu and Sester Genessa, are first encountered as living NPCs rather than corpses — Gragu drinking at the One Legged Wolf Tavern, Genessa running combat training in Marrow Keep. The rest are found out in the world, usually behind a boss fight or a ritual.",
        ],
      },
      {
        heading: "How to unlock every shell",
        paragraphs: [
          "Tiel and Proxima are the easiest: both general locations are revealed when you first enter Fainweald. Every other shell hides in a specific corner of the world, and several guard their bodies with a boss.",
        ],
        bullets: [
          "Tiel — his gravestone east of Mushroom Village, inside a torch-lit fenced enclosure",
          "Proxima — the Shattered Beacon in the Blackridge Cliffs, north of Widow's Overlook",
          "Eredrim — defeat the Warden in the central arena of the Citadel of Penance (western Fainweald)",
          "Gragu — bring him the Heart of Vatra from the Temple of Vatra; he dies and leaves his shell at the One Legged Wolf Tavern",
          "Smert — interrupt the blood ritual over his body in Prophet's Rest, near the Outskirts of Nochte",
          "Sester Genessa — win the censer from Sester Secondus in the Revenant Graves and return it to her in Marrow Keep",
          "Lazlo — defeat Vellen, High Lord of Mammon, in the Royal Crypt of Mammon",
          "Sariel — beat Sariel the Endless in his boss encounters: first in the white ruins of southern Mammon, then inside the Chamber of Becoming",
        ],
      },
      {
        heading: "Tiel and Proxima: the Fainweald pair",
        paragraphs: [
          "Tiel is the gentlest unlock of the eight. His general location is revealed the moment you first enter Fainweald; Rock Paper Shotgun's location guide describes the walk — from Mushroom Village keep heading east to a torch-lit fenced enclosure, where Tiel's gravestone waits inside on the left. Interact with it and the shadow-specialist shell is yours.",
          "Proxima sits a screen north: from the Widow's Overlook Beacon head into the Blackridge Cliffs, past cultists fighting a Tarred Vestige and the white spider-like enemy, until a glimmering beacon appears — the Shattered Beacon. Her body lies on a table inside, and possessing her unlocks the Biosampler kit that lightning builds are built on.",
        ],
      },
      {
        heading: "Gragu and Sester Genessa: the living NPCs",
        paragraphs: [
          "Gragu drinks at the One Legged Wolf Tavern long before you can wear him. To claim his shell you need the Heart of Vatra, found on a vampire-infested mountain pass northeast of the tavern: infiltrate the Temple of Vatra past petrified cultists who wake and attack, carry the heart back, and Gragu dies content — leaving his shell behind. The tavern is also where you pick up the Troubadour's Lute.",
          "Sester Genessa is the training NPC in Marrow Keep, and talking to her enough times hints at her side quest. The censer she wants sits in the Revenant Graves — the red-tree area past the Sester's Refuge in the eastern Ruins of Mammon. Interact with the glowing red censer to draw out Sester Secondus, defeat her, and return the prize to Genessa.",
        ],
      },
      {
        heading: "Eredrim, Smert, Lazlo: the guarded bodies",
        paragraphs: [
          "Eredrim is the knight waiting in the Citadel of Penance, the heavily patrolled keep of western Fainweald. From the citadel's own beacon, drop from the courtyard into the pit, follow the circular lower passage past burstable eggs until you spot the lift near the air current, and ride it into the central arena — the Warden who killed Eredrim long ago is the price of the shell.",
          "Smert's ritual is the strangest sight of the eight. From the Outskirts of Nochte Beacon turn left up the slope into Prophet's Rest: three cultist groups chant over circular pits of red liquid, with Smert's body on a stone slab beside them. Clear the three groups (RPS notes the Troubadour's Lute can turn them on each other) and the screen glows red when the shell is claimable.",
          "Lazlo lies in the Royal Crypt of Mammon behind Vellen, High Lord of Mammon. From the High Lord's Courtyard Beacon ride the air current up, dodge the rolling Knight of Mammon on the way down into the dark crypt, and put Vellen down — Lazlo's body is in the chamber just beyond.",
        ],
      },
      {
        heading: "Sariel: the shell you fight for",
        paragraphs: [
          "Sariel is the only shell you earn entirely through boss encounters. He first challenges you at the brutalist structure in the far south of Mammon, near The Silent Steps Beacon — RPS's writer even knocked him off the edge seconds into the fight. It doesn't end there: he retreats through the walls into the dungeon behind the massive statue, leading to the Chamber of Becoming. Break the stones in the final room so he can't keep reviving, and the Endless is finally yours.",
        ],
      },
      {
        heading: "What each shell is known for",
        paragraphs: [
          "Every shell carries its own ability tree and passive identity. Tiel's specialty is disappearing into the shadows; Smert wields time-stopping powers. For how those abilities turn into combat builds — which weapon, sidearm, and seal to pair with each shell — see the Mortal Shell 2 [best build guide](/best-build/).",
          "Shells also hold their own memories: unravelling them unlocks each shell's innate abilities and reveals their personal stories. Playing a shell well and digging into its secrets is how you develop its full kit — and the weapon you pair with it decides the rest. The full arsenal is catalogued in the [weapons guide](/weapons/), and the bosses that guard several shells are listed in the [boss guide](/bosses/).",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro: "Collected against the launch build over the coming days:",
      items: [
        "Full per-shell stat spreads (health, resolve capacity) from individual shell data",
        "Sidearm and seal rosters beyond the build pairings",
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
      "All 8 Mortal Shell 2 weapons and sidearms: upgrade routes, Tarstones and the Tarforge, and the posture breaks that set up critical executions.",
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
        heading: "All 8 weapons in the launch build",
        paragraphs: [
          "Mortal Shell II ships with eight obtainable melee weapons, and the first one is handed to you: The Iconoclast is acquired during the prologue. The remaining seven are found across the world. Each has its own identity, from the pairing of a thief's axe with a dagger to a spear stolen from the Twiceborn.",
        ],
        bullets: [
          "The Iconoclast — exceptionally light two-hander; your prologue starter",
          "Axe and Dagger — a thief's tool paired with a northern axe",
          "Great Martyr's Blade — the reforged weapon of the First Martyr Tarsus",
          "Veteran's Battle Axe — solid steel, quenched in the blood of the Revered",
          "Clockwork Scythe — the instrument of a madman or a genius",
          "Axatana — exquisite forged blade that once bore the name Dream Thresher",
          "Black Needle — a Twiceborn spear with implausible reach and speed",
          "Obsidian Hammer — a brutalist chunk of obsidianite",
        ],
      },
      {
        heading: "Where to find each weapon",
        paragraphs: [
          "PowerPyx's location guide walks all seven findable weapons; the routes below follow their numbering. Two of them hide behind the same boss as a shell — the Chamber of Becoming duel with Sariel also yields the Clockwork Scythe (see the [boss guide](/bosses/)), so you can double-dip one trip.",
        ],
        bullets: [
          "Axe and Dagger — walk through the arch facing the burning pyre south of Mushroom Village to summon the statue holding the Chapel Key, then open the Shrine of Trials dungeon northwest of the village",
          "Veteran's Battle Axe — The King's Crypt cave northwest of the Shattered Beacon dungeon; on a body right beside an enemy after the long drop",
          "Great Martyr's Blade — Martyr's Prison dungeon at the northeast corner of the castle from Gloomshade Grove Beacon (or via the well from the Holding Cells); clear the four enemies in the locked room",
          "Obsidian Hammer — Obsidianite Mines under the Deserted Slums southwest of the Outskirts of Mammon Beacon; guarded by the miniboss Prophet of Profane Infinities",
          "Black Needle — reward for defeating Twin Sesters and Stray Sesters inside the Sester's Gate Beacon area",
          "Axatana — behind the Bone Gate at the highest northeastern point from The Silent Steps Beacon; press the button on the tower's back to open the gate",
          "Clockwork Scythe — Chamber of Becoming, after defeating Sariel the Endless twice and breaking all four tombstones that revive him",
        ],
      },
      {
        heading: "Every moveset is unique",
        paragraphs: [
          "According to Game8's launch guide, each weapon defines its own complete moveset — Mortal Shell II has no weapon subtypes borrowing shared animations, so swapping weapons genuinely swaps playstyles. Ranged sidearms (like the Triarch Repeater or Ballistazooka that appear in build guides) extend that identity further.",
        ],
      },
      {
        heading: "Weapons feed your resolve",
        paragraphs: [
          "The arsenal does more than deal damage. Per Game8's weapons explainer, melee hits also recover resolve — the same currency that pays for your defensive skills and sidearm discharge. A weapon you swing well is a weapon that keeps your whole toolkit funded, which is why build guides treat weapon choice and resolve economy as one decision rather than two.",
        ],
      },
      {
        heading: "Tarstone upgrades and the Tarforge",
        paragraphs: [
          "Weapons are modified using Tarstones — the upgrade stones scattered across the world — at the Tarforge. Game8's build tables slot named Tarstones like the Duality Stone, Rupturing Stone, or Acolyte's Stone directly into loadouts, so collecting the right stones for your weapon is as much a part of a build as the shell wearing it. Exact per-tier upgrade costs are still being verified against the launch build.",
        ],
      },
      {
        heading: "The eight sidearms",
        paragraphs: [
          "The ranged half of the arsenal holds eight sidearms, and per PowerPyx's locations guide they mirror the melee roster's rules: Naylesshotte (your first), Forgotten Crossbow, Salvaged Trebuchaxe, Troubadour's Lute, Triarch Repeater, Ballistazooka, Cursed Child, and Caged Hystrix. Collecting all eight unlocks the trophy \u201cGuns. Lots of Guns\u201d, none are missable, and Merrick in Marrow Keep sells their map markers like he does for weapons. The build guide shows which sidearm each shell's loadout prefers.",
        ],
      },
      {
        heading: "Pairing weapons with shells",
        paragraphs: [
          "Because every moveset is unique and every shell has its own kit, the interesting question is never “which weapon is best” — it’s which pairing you can pilot. The Iconoclast you start with becomes Eredrim's Break-gauge machine; the Axe and Dagger serves three different gameplans on Tiel, Gragu, and Smert. The pairing logic behind all eight shells is laid out in the [best build guide](/best-build/).",
        ],
      },
      {
        heading: "Posture damage and critical strikes",
        paragraphs: [
          "Consecutive melee strikes build posture damage on the target. Enough of it staggers tough enemies, opening them up for critical execution strikes — the payoff rhythm the whole combat system is built around. Build guides lean into it: the shell-and-weapon pairings in the best build guide are largely organized around who breaks posture fastest and who capitalizes on the break.",
        ],
        bullets: [
          "Chain melee hits to build posture damage",
          "Posture break staggers tough enemies",
          "Staggered enemies can be finished with critical execution strikes",
        ],
      },
      {
        heading: "None are missable",
        paragraphs: [
          "Per PowerPyx's location guide, no weapon is missable: all eight remain collectible after the final boss while you explore in free-roam, before entering New Game+. Their locations can be bought as map markers from the merchant Merrick in Marrow Keep — handy, but not required.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro: "Collected against the launch build over the coming days:",
      items: [
        "Per-weapon damage numbers and Tarstone upgrade costs per tier",
        "Full sidearm roster with locations (second-source verification pending)",
      ],
    },
    related: [
      { label: "Damage Calculator", href: "/damage-calculator/" },
      { label: "Best Build", href: "/best-build/" },
      { label: "Mortal Shell 2 Tips", href: "/tips/" },
      { label: "All Shells", href: "/shells/" },
    ],
  },
  {
    slug: "bosses",
    metaTitle: "Mortal Shell 2 Bosses: All 10 Major Bosses in Order",
    metaDescription:
      "All 10 Mortal Shell 2 major bosses in order, with locations, the nine regions, and the fights that pay out shells and weapons.",
    cardBlurb:
      "All 10 major bosses in order, their regions, and which fights pay out shells and weapons.",
    h1: "Mortal Shell 2 Bosses",
    eyebrow: "Bosses",
    intro: [
      "Mortal Shell II's critical path runs through ten major bosses guarding the Corrupted Gates, spread across nine regions from Disciple's Pass to the Faded Citadel and beyond. This page lists all ten in the recommended encounter order, with where each fight happens and what it pays out.",
      "The roster was verified on August 20, 2026 (launch day) against Game8's boss compendium and GameSpot's boss guide, with Rock Paper Shotgun's ordered list corroborating the early encounters.",
    ],
    blocks: [
      {
        heading: "All 10 major bosses in order",
        paragraphs: [
          "Game8's recommended encounter order, with each boss's location:",
        ],
        bullets: [
          "Magdalena, the Lady of the Woods — Magdalena's Glade in the Glutted Mire",
          "The Lost Child — past the Sanguine Shoreline Beacon",
          "The Nameless Captive — Prisoners' Domain, beyond the Executioner's Pulpit Beacon",
          "Sir Isaac, the Scholar-Prince — past the Citadel Atrium Beacon",
          "Droeg, the Conquerer — past the Ovate's Chamber Beacon",
          "Hexapod — near the Nameless Pass Beacon",
          "Monolith — near the Obsidian Vault Beacon",
          "Malborn Offspring — near the Faithful's Shelter Beacon",
          "Orrem, the Reclaimed — near the Bridge of Procession Beacon",
          "Zmey, the Unbidden — The Hidden Nave Beacon, at The Unfounded Path (GameSpot's guide lists Zmey as the final boss)",
        ],
      },
      {
        heading: "The nine regions",
        paragraphs: [
          "Bosses are spread across Disciple's Pass, Fainweald, Glutted Mire, Sanguine Caverns, Ruins of Mammon, Prisoners' Domain, Withered Shoals, Conquered Temple, and Faded Citadel, with the endgame encounters waiting along The Unfounded Path. Beyond the ten majors, the world is thick with optional bosses and minibosses — Game8's compendium counts 44 boss encounters in total, with some of them missable.",
        ],
      },
      {
        heading: "Bosses that pay out shells and weapons",
        paragraphs: [
          "Several of the toughest fights double as collection milestones. The Warden at the centre of the Citadel of Penance rewards the Eredrim shell — the knight he killed long ago. Sariel the Endless guards his own shell at the Chamber of Becoming, and breaking his four reviving tombstones in the final room also yields the Clockwork Scythe. If you're planning a collection route, the [shells guide](/shells/) and [weapons guide](/weapons/) map the rest of those payouts.",
        ],
      },
      {
        heading: "Rewards worth planning around",
        paragraphs: [
          "Per Game8's boss tables, the majors pay out boss-specific mementos and stones — Magdalena drops her Memento, the Lost Child the Lost Clotstone, the Nameless Captive the Captive's Scabstone — alongside hefty Gloom sums that scale from the 11,000s in the Glutted Mire to the 65,000s at the end of the path. Two optional fights matter just as much for build planners: the Tar Golem past the Disciple's Grotto drops Vatra's Seal (half of the strongest build setups), and the Great Arbiter of Flesh near Widow's Overlook drops the Arbiter's Prize stone that recurs across game8's recommended loadouts.",
        ],
      },
      {
        heading: "General boss tips",
        paragraphs: [
          "Game8's walkthrough team sums up boss preparation in five habits: level up your Harbinger before pushing into a new region, upgrade weapons and Tarstones, inflict Break damage with skills and parrying rather than raw trades, keep the resolve gauge maintained so your defenses stay funded, and treat red attacks as unconditional dodge signals.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro: "Collected against the launch build over the coming days:",
      items: [
        "Per-boss strategies and move-set breakdowns",
        "Second-source confirmation of the 44 total boss count",
        "Optional boss and miniboss roster per region",
      ],
    },
    related: [
      { label: "All Shells", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
  },
  {
    slug: "tips",
    metaTitle: "Mortal Shell 2 Tips: Resolve, Combat & Dungeon Secrets",
    metaDescription:
      "Mortal Shell 2 tips: the resolve economy, posture-break executions, branching dungeons, and the boss-prep habits that carry the early game.",
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
      "Mechanics were verified against the official Steam page on " +
        LAST_REVIEWED +
        "; boss-preparation habits and shell details below are attributed to Game8's launch guides, checked August 20, 2026.",
    ],
    blocks: [
      {
        heading: "Why does aggression pay in Mortal Shell 2?",
        paragraphs: [
          "Because defense is bought with the resolve that only attacking generates. Landing aggressive hits charges resolve, and resolve is the primary currency for your defensive skills, your powerful weapon arts, and your sidearm's discharge. Stop swinging and your options quietly empty — the safest play in Mortal Shell II looks violent.",
          "The habit to build early: treat every exchange as a deposit. Even punishing trades that you survive while hitting back fund the skills that make the next exchange safer. The [beginner guide](/beginner-guide/) walks this loop in detail.",
        ],
        bullets: [
          "Resolve is generated by landing hits",
          "Resolve pays for defensive skills, weapon arts, and sidearm discharge",
          "One economy: attacking is defending",
        ],
      },
      {
        heading: "How do posture breaks decide fights?",
        paragraphs: [
          "Consecutive melee strikes build posture damage on the target; fill it and tough enemies stagger, opening them up for critical execution strikes. This is the payoff rhythm the whole combat system is built around, and it rewards exactly the sustained aggression the resolve economy demands.",
          "Game8's boss guide frames the same system as preparation: inflict Break damage with skills and parrying rather than raw trades, keep the resolve gauge maintained, and treat red attacks as unconditional dodge signals. Which weapon breaks posture fastest is covered in the [weapons guide](/weapons/); the fights themselves are in the [boss guide](/bosses/).",
        ],
      },
      {
        heading: "Why are dungeons worth getting lost in?",
        paragraphs: [
          "Dungeons feature non-linear branching paths containing hidden equipment, upgrade currencies, and lore items. Dead ends are rarely wasted — the path you skip is often where the reward is. In a game whose shells and weapons live off the critical route (see the [walkthrough](/walkthrough/)), dungeon side paths are not optional content; they are the collection route.",
          "The upgrade currencies matter more than they look: Tarstones — found scattered across the world — are what the Tarforge uses to upgrade your weapons, so a dungeon that seems to pay out only stones is actually funding your next weapon tier.",
        ],
        bullets: [
          "Hidden equipment",
          "Upgrade currencies",
          "Lore items",
        ],
      },
      {
        heading: "Which boss-prep habits carry the early game?",
        paragraphs: [
          "Game8's walkthrough team sums up boss preparation in five habits: level up your Harbinger before pushing into a new region, upgrade weapons and Tarstones, inflict Break damage with skills and parrying, keep the resolve gauge maintained, and dodge red attacks on sight. None of them require reflexes — all of them are planning, which is what makes them tips worth keeping.",
        ],
      },
      {
        heading: "Which shell should you learn first?",
        paragraphs: [
          "Tiel is the gentlest first pickup — his general location is revealed when you first enter Fainweald, and his gravestone sits east of Mushroom Village. Every shell then plays differently through its ability tree: Tiel's specialty is disappearing into shadows, Smert wields time-stopping powers, Proxima's Biosampler drives lightning builds.",
          "Pick the shell whose fantasy matches how you like to fight, then pair it deliberately — the [shells guide](/shells/) maps every unlock, and the [best build guide](/best-build/) records the per-shell weapon, sidearm, and seal pairings.",
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
    sources: [
      {
        name: "Mortal Shell II on Steam (Playstack)",
        url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
      },
      {
        name: "Official Mortal Shell website (Cold Symmetry)",
        url: "https://mortalshell.com/",
      },
      {
        name: "Game8 — Mortal Shell 2 All Bosses",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614453",
      },
      {
        name: "Game8 — Mortal Shell 2 Shells List",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614504",
      },
    ],
    reviewedOn: "August 20, 2026",
    datePublished: "2026-08-20",
  },
  {
    slug: "performance-fix",
    metaTitle: "Mortal Shell 2 Crash Fix: Crashing, Stuttering, Black Screen",
    metaDescription:
      "Fix Mortal Shell 2 crashing on load: the official Hotfix 1 crash fix, the save-file workaround, the shader cache fix, and stuttering settings for PC.",
    cardBlurb:
      "Every confirmed crash fix: the launch hotfix, the save-file workaround, and the shader cache fix for stuttering and full lock-ups.",
    h1: "Mortal Shell 2 Crash Fix",
    eyebrow: "Troubleshooting",
    intro: [
      "If Mortal Shell 2 keeps crashing, stutters mid-fight, or locks up on the loading screen after a death, the fixes that actually exist are collected here: the crash hotfix Playstack shipped during Advanced Access, the official save-file workaround for the Keyboard Bindings menu crash, and the shader cache change recommended for full lock-ups. Every fix is tied to its source — publisher-confirmed or independently attributed. Once the game runs clean, the [beginner guide](/beginner-guide/) covers the resolve-driven first hours and the [best build guide](/best-build/) has the per-shell loadouts.",
      "Skim by symptom: keeps crashing starts at Fix 1, a crash when rebinding keys is Fix 2, a lock-up on the loading screen after death is Fix 3, stuttering lives in the shader cache change and the attributed settings, and a game that won't launch at all starts with the requirements check.",
      "It was fact-checked against Playstack's official Steam announcements, the publisher's verified community posts, and Steam store data on August 19, 2026 — the day before worldwide release.",
    ],
    blocks: [
      {
        heading: "Keeps crashing? Install the crash hotfix first (Fix 1)",
        paragraphs: [
          "When the game keeps crashing every few minutes, the first crash fix is already published. During Advanced Access — the August 17 window that let Devout Edition pre-orders play up to 72 hours early — Playstack shipped Hotfix 1 for the frequent PC crashes players were reporting.",
          "It was first offered on the Steam patch-preview branch — Mortal Shell II in your library, Properties, then Betas. It has since been rolled out to all players as a standard patch, so if the game keeps crashing today, the default branch already includes the fix: update fully and relaunch before trying anything else.",
        ],
        bullets: [
          "Hotfix 1 targets the frequent PC crashes reported during Advanced Access",
          "It was initially opt-in via the patch-preview beta branch (Properties > Betas)",
          "It is now available to all players as a standard patch",
        ],
      },
      {
        heading: "Keyboard Bindings crash: the official save-file workaround (Fix 2)",
        paragraphs: [
          "A second confirmed crash has a specific trigger: opening the Keyboard Bindings menu in Settings. Playstack has confirmed receiving several reports of exactly that. While a permanent fix is being worked on, the publisher published this official workaround:",
        ],
        bullets: [
          "Close Mortal Shell II completely",
          "Navigate to \\Users\\[Your Username]\\AppData\\Local\\MortalShell2\\Saved\\SaveGames",
          "Delete EnhancedInputUserSettings.sav and SpartaGameSettings.sav",
          "Launch the game again",
        ],
      },
      {
        heading: "Crash on load: full lock-ups and the shader cache fix (Fix 3)",
        paragraphs: [
          "The officially confirmed loading-screen problem is a full lock-up: the game freezes solid, including on the loading screen after a death. For those lock-ups and crashes, Playstack's community manager recommends raising the shader cache limit — open the NVIDIA Control Panel app, go to 3D Settings, and set Shader Cache Size to \"Unlimited\".",
          "An independent guide reaches the same conclusion: LagoFast lists the Shader Cache Size change (NVIDIA Control Panel or the AMD Software equivalent) as the most effective fix for the game's stuttering, which points at the same underlying shader-compilation behavior.",
        ],
        bullets: [
          "NVIDIA Control Panel > 3D Settings > Shader Cache Size > Unlimited",
          "AMD owners: the equivalent setting lives in AMD Software",
        ],
      },
      {
        heading: "Stuttering fixes beyond the hotfix (attributed)",
        paragraphs: [
          "For stuttering and frame drops specifically, the settings-level fix with the strongest support is the shader cache change above — LagoFast independently calls it the most effective fix for the game's stuttering. Beyond that, everything else is attributed opinion rather than official guidance: the settings box on this page collects LagoFast's additional suggestions — disabling in-game V-Sync, capping the frame rate externally, a High Performance power plan, lower Shadow Quality, DLSS/FSR in Balanced mode, and a community-reported launch option — with full attribution so you can weigh them yourself.",
          "One million people played the beta across Steam, PS5 and Xbox — announced by the development team on August 17 — so launch-week reports cover an enormous range of hardware. Treat any single settings list, including LagoFast's, as a starting point to test rather than a guarantee.",
        ],
      },
      {
        heading: "Won't launch? Check the requirements before anything else",
        paragraphs: [
          "If the game won't launch at all, start with the blunt possibility: the machine may sit below the floor that Steam publishes. The listing sets a clear minimum for PC players, and two details are easy to miss — the game wants 70 GB of space and an SSD is required, not merely recommended.",
          "Two of the listed numbers trip people up in practice: the GPUs on the minimum list carry 8 GB of VRAM, and the storage note says SSD required — a spinning drive is below minimum no matter how much space is free.",
          "The PC release is also Windows-only: there are no macOS or Linux listings, so if you are trying to launch it there, that is the whole story.",
          "Once the game runs clean, the [boss guide](/bosses/) maps the ten fights ahead.",
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
      {
        heading: "Black screen: what is confirmed — and what isn't",
        paragraphs: [
          "Black screens sit in a gray zone. Publisher channels have confirmed frequent crashes, the Keyboard Bindings crash, and full lock-ups including loading-screen freezes, but no black-screen-specific fix has been announced. What you can honestly do is run the confirmed stack — the crash hotfix, the save-file workaround if the crash has that trigger, the shader cache change, and the requirements check — because those are the fixes that exist.",
          "Anything beyond that list is not yet official. If you report a black screen in the Devout Edition bug-report megathread, include your build number — it is readable on the pause menu, bottom right. That thread and the Steam news page are where Playstack posts fix notes first, and this page gets rechecked when they do.",
        ],
      },
      {
        heading: "How do you stop Mortal Shell 2 from crashing?",
        paragraphs: [
          "Install Hotfix 1 — it is now a standard patch on the default branch, so a normal update applies it. If the crash happens when opening Keyboard Bindings, delete EnhancedInputUserSettings.sav and SpartaGameSettings.sav as described in Fix 2. For full lock-ups, set Shader Cache Size to Unlimited in the NVIDIA Control Panel (Fix 3). Apply one change at a time and re-test after each, so you know which fix your crash actually responded to.",
        ],
      },
      {
        heading: "How do I fix Mortal Shell 2 crash on load?",
        paragraphs: [
          "Set Shader Cache Size to Unlimited in the NVIDIA Control Panel — Playstack's community manager recommends exactly that for the confirmed loading-screen lock-ups after a death. Frequent general crashes are covered by Hotfix 1, and no other cause has been officially named.",
        ],
      },
      {
        heading: "How do I fix Mortal Shell 2 stuttering?",
        paragraphs: [
          "Set the shader cache to Unlimited — it has the strongest support: LagoFast independently calls it the most effective stuttering fix, and Playstack's community manager recommends the same change for lock-ups. LagoFast's further suggestions (disabling in-game V-Sync, capping the frame rate externally, a High Performance power plan, lower Shadow Quality, DLSS/FSR in Balanced mode, and the community-reported -UseFixedTimeStep launch option) are attributed opinion, collected in the settings box on this page.",
        ],
      },
      {
        heading: "Why won't Mortal Shell 2 launch?",
        paragraphs: [
          "Check Steam's minimum specs first: Windows 10/11, an Intel Core i7-10700K or AMD Ryzen 5 3600, 16 GB of RAM, an RTX 2060 SUPER or RX 6600 with 8 GB, DirectX 12, and 70 GB on an SSD. The PC build is Windows-only, so there is no macOS or Linux version to launch.",
        ],
      },
      {
        heading: "How do I fix the Keyboard Bindings crash in Mortal Shell 2?",
        paragraphs: [
          "Delete EnhancedInputUserSettings.sav and SpartaGameSettings.sav in AppData\\Local\\MortalShell2\\Saved\\SaveGames, then relaunch — that is Playstack's official workaround. It is not a permanent fix: the publisher says one is in progress, and the page's pending-verification box tracks that status.",
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
  {
    slug: "damage-calculator",
    metaTitle: "Mortal Shell 2 Damage Calculator: Weapon & Stagger Scaling",
    metaDescription:
      "Mortal Shell 2 damage calculator: upgrade multipliers for damage and stagger, Tarforge costs for every level to +25, and poise pools for every boss.",
    cardBlurb:
      "Damage and stagger multipliers at every upgrade level, Tarforge costs to +25, and boss poise pools in one tool.",
    h1: "Mortal Shell 2 Damage Calculator",
    eyebrow: "Tools",
    intro: [
      "A multiplier calculator for Mortal Shell 2 weapons: pick a weapon, set an upgrade level, and see damage, stagger, crit, and guard-meter scaling plus the full Tarforge cost curve.",
    ],
    blocks: [
      {
        heading: "Interactive calculator",
        paragraphs: [
          "The calculator lives on the page itself and runs entirely in the browser. Data was verified against the launch build on August 25, 2026.",
        ],
      },
    ],
    pending: {
      heading: "Not yet documented",
      intro:
        "The game does not publish absolute damage numbers, and multiplier behavior beyond +20 is not documented in any public source.",
      items: [
        "What upgrade levels +21 to +25 actually improve",
        "Absolute base damage values (hidden in-game; enter your own tested values)",
      ],
    },
    related: [
      { label: "All Weapons & Locations", href: "/weapons/" },
      { label: "Best Build", href: "/best-build/" },
      { label: "Boss Order & Rewards", href: "/bosses/" },
    ],
    sources: [
      {
        name: "Game8 — Mortal Shell 2 Weapons List",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614498",
      },
      {
        name: "mortalshelldb.com — upgrade multipliers",
        url: "https://mortalshelldb.com/",
      },
    ],
    reviewedOn: "August 25, 2026",
    datePublished: "2026-08-25",
  },
];

export function getGuidePage(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}
