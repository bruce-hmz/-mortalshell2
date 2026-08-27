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
    slug: "ova-locations",
    metaTitle: "Mortal Shell 2 Ova Locations: How to Collect All 196",
    metaDescription:
      "Every Mortal Shell 2 Ova location explained: all 196 come from cleansing Beacons, six post-boss nodes pay 26 each, and the first-playthrough rule that protects your Ascension trophy.",
    cardBlurb:
      "Where all 196 Ova hide, which Beacons pay the biggest hauls, and the NG+ bug to respect.",
    heroImage: {
      src: "/img/site-5.jpg",
      alt: "Mortal Shell II key art with a helmeted shell facing a corrupted landscape",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Ova Locations",
    eyebrow: "Completion",
    intro: [
      "There is no secret stash of 196 hidden eggs — every Ova in Mortal Shell II is a Beacon reward. Cleansing any of the game's Beacons pays out its Ova at the end of that mini-dive, so collecting all of them is a fast-travel discipline task, not a scavenger hunt. This page explains where they all are, what progress looks like, and the patch-era bug that decides when you must finish.",
      "Totals, payout tables, and trophy rules were verified against PowerPyx's trophy guide and Beacon compendium on August 27, 2026, cross-checked against this site's own beacon research. The per-Beacon count table below fills in as those numbers are transcribed — the skeleton is open about what is verified today.",
    ],
    blocks: [
      {
        heading: "What are Ova in Mortal Shell 2?",
        paragraphs: [
          "Ova are the oval collectible eggs you obtain throughout the game by cleansing Beacons — PowerPyx's trophy guide describes them as rewards 'always given at the end of Beacons'. They function as the currency of completion: the syphon NPC in Marrow Keep tracks your deposited total, and depositing enough unlocks Mether's Breath early in the campaign (the fast-travel ability detailed in the [fast travel guide](/fast-travel/)).",
        ],
      },
      {
        heading: "How many Ova are in Mortal Shell 2?",
        paragraphs: [
          "196. That total is tied directly to the Ascension trophy — one of the rarest in the game at roughly a 14% unlock rate — and per community help threads it counts only Ova obtained through Beacon cleansing. Boss payouts like Magdalena's famous 26-Ova purse feed the same economy but don't add collection slots beyond what the Beacons hold; if your count stalls below 196, an uncleansed Beacon somewhere is why, not a missed field pickup.",
        ],
      },
      {
        heading: "Where to find every Ova",
        paragraphs: [
          "All 196 live inside the game's 49 Beacons — three start pre-cleansed and simply reveal their contents as you discover them, while the other 46 require a cleanse dive (which is why trackers show 46/49 until endgame). The dive order below follows the same region sweep our [walkthrough](/walkthrough/) uses, so you can fold cleanses into progression instead of backtracking:",
        ],
        bullets: [
          "**Disciple's Pass:** tutorial beacons walk you through the cleanse loop on scripted dives",
          "**Fainweald south:** Widow's Overlook → Mushroom Village + gate pairings — the village area's cleanse teaches the Ova payout rhythm early",
          "**Fainweald north:** Blackridge Pass → Stonebled Gate → Hidden Keep run, plus Gloomshade Grove's side cleanes for materials on top of Ova",
          "**Fainweald west → Nochte:** Outskirts of Nochte, whose eastern-gate cleanse triggers the Mether's Breath unlock at Marrow Keep's syphon",
          "**Ruins of Mammon outward:** every post-boss Beacon from here through The Unfounded Path carries the heavy 26-Ova purses — never skip these even if you're underleveled, because the bug below makes them first-playthrough-critical",
        ],
      },
      {
        heading: "The six big payouts: post-boss Beacons pay 26 each",
        paragraphs: [
          "Payouts are not flat across the network. Per PowerPyx's tables, the six Beacons that appear behind each main boss always hold **26 Ova** — roughly 156 of your 196 total sits in just those six dives. Whenever your route passes a post-boss Beacon, cleanse it before moving on; postponing them concentrates the entire late-game collection burden into the free-roam window instead of spreading it naturally across the campaign.",
          "Boss fight specifics for reaching each of those gated nodes are mapped boss-by-boss in the [boss guide](/bosses/), and what resting at each node does for your build loop is covered in the [fast travel guide](/fast-travel/).",
        ],
      },
      {
        heading: "How to check your Ova progress",
        paragraphs: [
          "The Ova Siphon in Marrow Keep reads out your deposited total whenever you interact with it — make a habit of banking after big cleanse runs rather than hoarding, since deposited totals are what trigger both the Mether's Breath unlock and eventually the ending choice itself. There is no separate per-region breakdown anywhere in-game, which is exactly why this page's checklist expands next.",
        ],
      },
      {
        heading: "Can you still get all Ova in NG+?",
        paragraphs: [
          "Treat the answer as no until a patch says otherwise. PowerPyx warns that **Bring My Ova Back to Me currently can only be earned in your first playthrough** due to a bug introduced in a recent patch — entering NG+ without finishing your cleanup can lock the trophy out on that save indefinitely. Finish all 196 before interacting with the Siphon's “Send Ova” option at the end of the game; the endgame free-roam window exists precisely so you can complete this sweep before committing.",
        ],
      },
      {
        heading: "What is the Ascension trophy?",
        paragraphs: [
          "Ascension is the completion trophy awarded for depositing all 196 Ova — PowerPyx records it at roughly a **14% unlock rate**, making it one of the rarest awards in the game despite requiring no out-of-route exploration. The grind is real (49 cleanse dives) but nothing about it is missable *except* through the NG+ bug above: keep everything in the first playthrough and Ascension follows mechanically from playing the campaign through.",
          "Its sibling achievement So Fresh, So Clean (cleanse every Beacon) runs on the same route, so one disciplined pass serves both — the fuller trophy-ordering plan lives in our [achievements guide](/achievements-guide/) as it grows.",
        ],
      },
      {
        heading: "Why don't you list all 49 Beacons individually here?",
        paragraphs: [
          "Because the exact per-node Ova counts haven't been published as clean text anywhere yet — video guides dominate this query space, and transcription without verification is how bad collectible lists spread. Rather than ship 46 guessed numbers, we shipped the verified structure (the 196 total, the 26×6 heavy nodes, the Siphon mechanics, the bug warning) now and will fill in per-Beacon figures as they're confirmed against played saves. The full Beacon locations themselves, region by region, are already catalogued in the [fast travel guide](/fast-travel/).",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro: "This page ships as a checklist skeleton — deliberately honest about what isn't pinned down yet:",
      items: [
        "Per-Beacon Ova counts for all 46 cleanse dives (structure verified; individual figures awaiting transcription)",
        "Whether Balance Patch 1 fixed the Bring My Ova Back to Me NG+ bug — PowerPyx's warning predates it with no visible change noted yet",
        "Exact Mether's Breath unlock threshold (community consensus points to roughly 40-50 deposited, unconfirmed)",
      ],
    },
    related: [
      { label: "Fast Travel Guide", href: "/fast-travel/" },
      { label: "Missable Content", href: "/missable-content/" },
      { label: "Boss Guide", href: "/bosses/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
    sources: [
      {
        name: "PowerPyx — Mortal Shell 2 Trophy Guide & Roadmap",
        url: "https://www.powerpyx.com/mortal-shell-2-trophy-guide-roadmap/",
      },
      {
        name: "PowerPyx — Mortal Shell 2 All Beacon Locations",
        url: "https://www.powerpyx.com/mortal-shell-2-all-beacon-locations/",
      },
    ],
    reviewedOn: "August 27, 2026",
    datePublished: "2026-08-27",
  },
  {
    slug: "beginner-guide",
    metaTitle: "Mortal Shell 2 Beginner Guide: First Hours & Combat",
    metaDescription:
      "Mortal Shell 2 beginner guide: a step-by-step first two hours, the five mistakes that waste them, your first shell, and the combat rules that matter.",
    cardBlurb:
      "A first-two-hours route, the mistakes that cost runs, and your first shell-and-weapon pairing.",
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
        "; shell and weapon details were verified against the launch build on August 20, 2026, and the opening-route script was checked against Kotaku's starter-tips guide on August 27, 2026. Anything still unconfirmed is listed openly at the bottom of the page.",
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
        heading: "Your first two hours, step by step",
        paragraphs: [
          "The opening hours hand you the systems gradually, but they do reward a plan. Follow this order and every step compounds into the next; each one maps onto a fuller block in the [region-by-region walkthrough](/walkthrough/).",
        ],
        bullets: [
          "**Before you load in:** open Settings → Gameplay and turn on Auto Pick Up Gold — walking over coins collects them automatically, which matters in dark, cluttered zones where loose piles are easy to miss",
          "**Play the prologue as scripted:** the Gloombound Ritualist, the Tainted Vestige, and the Tar Golem arrive in order — and secretly beating the Golem is one of the game's missable trophies, so read the [missable checklist](/missable-content/) first",
          "**Reach Marrow Keep and take the roof:** talk to the NPCs, ride the roof lift, and the game introduces fast travel properly — your first destination is Widow's Overlook in Fainweald",
          "**Go south first:** southern Fainweald fields measurably weaker enemies than the north, making it the right leveling ground; Tiel's gravestone waits east of Mushroom Village",
          "**Cleanse the Mushroom Village gate:** your first corrupted-gate cleanse teaches the mechanic and pays Ova, the currency that unlocks Mether's Breath fast travel",
          "**Take Magdalena when she feels fair:** the Lady of the Woods is intentionally winnable early — her fight pays 26 Ova and returns you to Marrow Keep to deposit it",
          "**Unlock Mether's Breath, aim for level 20:** deposit Ova at the syphon, grab the fast-travel ability, and treat level 20 as the soft checkpoint before the Ruins of Mammon",
        ],
      },
      {
        heading: "The five mistakes that cost beginners hours",
        paragraphs: [
          "Most wasted progress in this game traces back to one of five habits. None are permanent damage — but each one quietly multiplies grind.",
        ],
        bullets: [
          "**Wandering unshelled:** the base Harbinger takes heavy damage and has no second life — possess Tiel or Proxima as soon as the story path reveals either, then never look back",
          "**Skipping south to chase the main arrow:** northern Fainweald will check whether you belong there yet; if common soldiers pressure you, reroute rather than bash through",
          "**Spending Glimpses casually:** prioritize your main shell's upgrade tree before optional purchases — and hold surplus until you know which upgrades you actually want, per AltChar's progression notes",
          "**Upgrading every weapon with gold:** test a weapon's moveset first; Balance Patch 1 cut Tarforge smelting costs by 75%, so swapping tools mid-run is cheap experimentation now, not commitment",
          "**Treating it like a stamina game:** stopping your offense stops your defense — resolve funds both, so backing off between swings is how you lose fights you were winning",
        ],
      },
      {
        heading: "Editions and when you can start",
        paragraphs: [
          "Two editions are confirmed. The Standard Edition unlocked on " +
            RELEASE_DATE +
            ". The Devout Edition granted up to 72 hours of advance access, letting early buyers begin playing before the worldwide release window opened.",
          "Buying today, the calculus is simple: the Standard Edition is the complete game, and Devout's entire advantage — the 72-hour head start — expired at launch. Pay extra only if collector packaging or future bundle terms matter to you, not for access that no longer exists.",
        ],
      },
      {
        heading: "Before you skip anything: the missables shortlist",
        paragraphs: [
          "Only three trophies in Mortal Shell II can be permanently locked out of a playthrough — Marigold's prologue flower crown, beating the tutorial Tar Golem, and The Nameless Captive's second-phase parry trial. All three are quick to secure if you know they exist, and painful to discover after the fact. Run through the [missable content checklist](/missable-content/) before you commit serious hours to a save.",
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
        heading: "Which shell should I unlock first?",
        paragraphs: [
          "Tiel, and the game does most of the work for you: his location is revealed the moment you enter Fainweald, and his gravestone waits just east of Mushroom Village along the southern route. He is the gentlest first pickup — forgiving mobility and a straightforward kit — and possessing any shell immediately fixes the Harbinger's fragility problem.",
          "Proxima is the natural second (the northern story marker reveals her), and neither choice locks anything: shells remain collectible all run, their abilities stay available to unravel later, and a second body is always worth claiming whenever a dungeon detour puts it in reach — full locations live in the [shells guide](/shells/).",
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
        heading: "Your first build pairing",
        paragraphs: [
          "You do not need best-in-slot gear to feel strong — you need one coherent pairing. The crit-focused Tiel setup (an Axe and Dagger you can find early, later upgraded with the Salvaged Trebuchaxe) turns every hit into guaranteed critical strikes and carries an entire playthrough. If you find the Great Martyr's Blade in Martyr's Prison early, slotting it on Proxima with the Triarch Repeater is the other proven opener — the 'Lightning Proxima' spread featured across Game8's build tables.",
          "Both paths scale the same way: pick the shell whose ability you enjoy, match one weapon to it, add a seal (Vatra's Seal from the Tar Golem past Disciple's Grotto remains the strongest single pickup), and iterate from there. The full matrix, including patch-tuned matchups, is laid out in the [best build guide](/best-build/).",
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
      {
        name: "Kotaku — 12 Tips To Know Before You Start Playing Mortal Shell 2",
        url: "https://kotaku.com/12-tips-to-know-before-you-start-playing-mortal-shell-2-2000725388",
      },
    ],
    reviewedOn: "August 27, 2026",
    datePublished: "2026-08-20",
  },
  {
    slug: "best-build",
    metaTitle: "Mortal Shell 2 Best Build: Shell, Weapon & Sidearm Combos",
    metaDescription:
      "The best build for every Mortal Shell 2 shell after Balance Patch 1: per-shell weapon, sidearm, and seal loadouts, plus the patch changes that shift each one.",
    cardBlurb:
      "Post-patch build picks for all eight shells — what Balance Patch 1 changed and how to read it.",
    heroImage: {
      src: "/img/site-2.jpg",
      alt: "Mortal Shell II key art: an armored warrior bearing a sword against a burning backdrop",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Best Build",
    eyebrow: "Builds",
    intro: [
      "Builds in Mortal Shell II are built from two confirmed pillars: which of the eight shells you possess, and how your combat loop generates and spends resolve. This page explains both, then records the community's launch-build consensus — clearly attributed, because it is an opinion, not a verified fact.",
      "The build tables below follow Game8's launch guide; this page was rechecked on August 27, 2026 against Playstack's official Balance Patch 1 notes (live since August 20), which buffed key weapons, cut Tarforge smelt costs, and rebalanced enemy health. The patch facts in the boxes below come straight from those notes.",
    ],
    blocks: [
      {
        heading: "What Balance Patch 1 changed for builds (August 20)",
        paragraphs: [
          "Four patch lines matter when picking a build. Weapons: Great Martyr's Blade attack damage is up 20%, Troubadour's Lute attack damage is up 100%, Caged Hystrix and Triarch Repeater no longer have minimum resolve requirements to fire, and light attacks track better on Axatana, Black Needle, and Clockwork Scythe. Economy: Tarforge smelting costs 75% less Gloom, gold drops are significantly increased (enemies in Mammon drop double), and shell map locations now cost Gloom instead of Glimpses — refunds wait in the Shell Keeper's alcove in Blackmarrow. Enemies: beta health values were restored, cutting boss damage and health across the board (The Lost Child takes 15% less health and 10% less damage; Monolith 10% less health and 19% less damage, with some attacks retimed).",
          "Read together, that shifts builds toward the buffed weapons and cheaper experimentation. The Martyr's Blade Lightning setup gains flat damage; repeater sidearms lose their resolve floor, so casters can spend resolve on defense without starving their sidearm; smelting being cheap makes swapping weapons mid-run a plan instead of a punishment; and Mammon's doubled gold funds Tarstone work faster. Full nerf math per enemy lives in the patch discussion linked at the bottom of this page.",
        ],
        bullets: [
          "Great Martyr's Blade +20% attack damage — Proxima setups scale directly",
          "Troubadour's Lute +100% attack damage — watch this slot",
          "Caged Hystrix / Triarch Repeater: no minimum resolve to fire",
          "Tarforge smelt costs −75% Gloom; swapping weapons mid-run is cheap now",
          "Beta enemy HP/damage values restored (Lost Child −15% HP, Monolith −19% dmg, and more)",
        ],
      },
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
          "Game8's walkthrough team (guide updated August 19, 2026, against the launch build) publishes a best build for each of the eight shells, pairing a weapon, a sidearm, and a seal with each shell's ability kit. Balance Patch 1 touched several of these picks — the patch notes under each line show what changed. Their base picks, summarized:",
        ],
        bullets: [
          "Tiel — Axe and Dagger + Salvaged Trebuchaxe: guaranteed critical strikes via the Critical Role ability",
          "Proxima (Lightning) — Great Martyr's Blade + Triarch Repeater: Biosampler inflicts Stasis and Lightning stacks for burst — [full Proxima build guide](/best-proxima-build/)",
          "Eredrim — The Iconoclast + Forgotten Crossbow: wears down enemy Break gauges and controls groups",
          "Gragu — Axe and Dagger + Triarch Repeater: high critical damage stacked on Revered Heart buffs",
          "Smert (Chaos) — Axe and Dagger + Caged Hystrix: unarmed Chaos stacks during Miracle, burst at the end — [full Smert build guide](/best-smert-build/)",
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
          "Balance Patch 1 makes both early targets hit harder. The Martyr's Blade in the Proxima setup carries a flat +20% damage buff, and with no minimum resolve to fire, the Triarch Repeater stops competing with your defensive skills for resolve — fire it freely while keeping your guard funded.",
          "Until then, the core principles hold: aggression generates resolve, resolve funds defense, and posture breaks create your execute windows. Any shell and any weapon played inside that loop will carry you through the first dungeons while you collect the parts for the loadout you actually want.",
        ],
      },
      {
        heading: "Smelting and swap economy after the patch",
        paragraphs: [
          "Two economic changes reshape how aggressively you can iterate on builds. Tarforge smelting now costs 75% less Gloom, so re-speccing a weapon or shifting to a different upgrade path mid-run is a reasonable move rather than an NG+-length grind; Playstack framed it as letting players switch weapons without hours of grinding through repeated runs. Gold drops also rose significantly across the board, with Mammon enemies dropping double — which pairs well with Lazlo's Royal Crypt stomping grounds if you need coin for Tarstone work fast.",
          "The practical takeaway for builders: test more builds per hour of play. The cost of a wrong pick dropped alongside the buff table above, so treat the first half of the campaign as cheap experimentation instead of commitment.",
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
        "Second attributed build source for cross-comparison against Game8's picks",
        "Whether console versions of Balance Patch 1 (PC live since August 20) ship with any additional tuning",
        "Troubadour's Lute build pairings worth revisiting after its +100% damage buff",
      ],
    },
    related: [
      { label: "Damage Calculator", href: "/damage-calculator/" },
      { label: "All Shells", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
    ],
    sources: [
      {
        name: "Balance Patch 1 — Patch Notes (Playstack, official Steam announcement thread)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/",
      },
      {
        name: "Game8 — Mortal Shell 2 Best Builds",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614504",
      },
      {
        name: "Mortal Shell II on Steam (Playstack)",
        url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
      },
    ],
  },
  {
    slug: "walkthrough",
    metaTitle: "Mortal Shell 2 Walkthrough: World & Progression",
    metaDescription:
      "Mortal Shell 2 walkthrough, region by region: step-by-step route through Fainweald and Ruins of Mammon, every beacon and gate in order, boss checkpoints, and detours worth taking.",
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
        "), and it drops you into its interconnected world with a map and zero hand-holding. This walkthrough gives you the order: every step from the end of the tutorial to the gates of the Ruins of Mammon — which beacon to activate first, which gate to cleanse next, where each boss waits, and which detours pay off.",
      "The route below follows AltChar's complete progression guide (published August 17, 2026), with encounter specifics corroborated against Rock Paper Shotgun's 45-boss compendium (updated August 25, 2026). The world-structure overview was originally fact-checked against the official Steam page on " +
        LAST_REVIEWED +
        ". Notes on the game's later regions and final area are marked as still being built out.",
    ],
    blocks: [
      {
        heading: "One interconnected world, 60+ dungeons",
        paragraphs: [
          "The campaign takes place across an interconnected open world containing more than 60 distinct dungeons. The world is compact and tightly woven rather than a sprawl of separate levels, so routes loop back on themselves and shortcuts matter.",
        ],
      },
      {
        heading: "The regions, in the order you meet them",
        paragraphs: [
          "Per Game8's launch compendium, the critical path runs through nine regions — Disciple's Pass, Fainweald, Glutted Mire, Sanguine Caverns, Ruins of Mammon, Prisoners' Domain, Withered Shoals, Conquered Temple, and Faded Citadel — with the endgame encounters waiting along The Unfounded Path. Each region is anchored by Beacons, the fast-travel and checkpoint spines you unlock as you push outward.",
          "Most of what looks missable here is not: after the final boss a free-roam window lets you claim any Beacon, shell, or weapon still on the board. The genuinely one-time encounters are few — the [missable content guide](/missable-content/) keeps the honest list, and the [fast travel guide](/fast-travel/) maps every Beacon node.",
        ],
      },
      {
        heading: "The route at a glance",
        paragraphs: [
          "The campaign's critical path in one line — steps follow in the region blocks below:",
        ],
        bullets: [
          "**Prologue** (Disciple's Pass): Gloombound Ritualist → Tainted Vestige → Tar Golem → arrive at Marrow Keep",
          "**Fainweald south**: Widow's Overlook Beacon → first miniboss → map extension + Mushroom Village Beacon → eastern corrupted gate → Magdalena",
          "**Fainweald north**: Blackridge Pass Beacon → Broodshell Swarm → Flooded Village Grisha → Lucian in the Hidden Keep",
          "**Fainweald west**: teleporter → Outskirts of Nochte Beacon → Vrago's Abandoned Shrine → eastern gate → deposit Ova → unlock Mether's Breath",
          "**Ruins of Mammon**: Outskirts of Mammon Beacon → two corrupted gates → all shells → return to Marrow Keep for the endgame",
        ],
      },
      {
        heading: "Step 1 — Prologue: Disciple's Pass",
        paragraphs: [
          "Three encounters open the game. The **Gloombound Ritualist** is your first fight, in an arena you drop into beyond the bridges past the Village Outskirts Beacon; dodge its exploding summons and punish between waves. From the Disciple's Grotto Beacon, a left exit leads out to the **Tainted Vestige**, an early test of your Perfect Guard timing — everything telegraphs except the unblockable grab. Down the slope from the same beacon waits the **Tar Golem**, the prologue's scripted closer.",
          "Win or lose, the Golem fight ends the same way: Harros surrenders his shell so you can continue, and Marrow Keep opens as your hub. Secretly winning awards the **No, You Still Can't Win** trophy on the spot — see the [missable content checklist](/missable-content/) before you skip this fight. Once in Marrow Keep, speak to the NPCs, then head to the roof where fast travel is introduced properly.",
        ],
      },
      {
        heading: "Step 2 — Fainweald south: first shell, first map, Magdalena",
        paragraphs: [
          "Fast travel from Marrow Keep's roof deposits you at the **Widow's Overlook Beacon** in Fainweald. Go **south first**: southern enemies are weaker, making it the better leveling ground, and the story-path shells split by direction — **Tiel to the south, Proxima to the north**, both marked on your map. Claim whichever shell fits your build early; unshelled, the Harbinger takes heavy damage and has no second life.",
          "Past the first miniboss arena sits the map extension guarded by Ruk, then **Mushroom Village** with its own beacon — your base for the whole southern sweep. East of the village beacon, Fainweald's first **corrupted gates** appear alongside a neighboring beacon; cleansing the village gate both teaches the gate mechanic (each cleanse pays Ova, the currency that later unlocks Mether's Breath fast travel) and opens the path to **Magdalena, the Lady of the Woods**, your first major boss.",
          "Magdalena is intentionally winnable early, and she is worth the effort: beating her pays 26 Ova and returns you to Marrow Keep to deposit it. RPS adds that she fights from a rocket-powered mobility scooter — keep to her flank during fiery donut attacks and punish after her two rotation cycles; summoning Smert can smooth the opener if you're underleveled.",
        ],
      },
      {
        heading: "Step 3 — Fainweald north: Blackridge Pass and the Hidden Keep",
        paragraphs: [
          "With the south cleared, head north of Widow's Overlook to the **Blackridge Pass Beacon**. Northern Fainweald is measurably tougher than the south — treat it as your checkpoint for whether to farm more levels before pushing on. Detours here compound: the graveyard at Stones of Remembrance hides the **Broodshell Swarm** enclave northeast of the cliffs, and the rope bridges south of the pass lead to the **Flooded Village dungeon**, where a full Grisha miniboss waits in its eastern arena.",
          "Northern Fainweald also contains the first shell-route dungeons: cleansing the **Stonebled Gate Beacon** opens the **Hidden Keep**, whose final rooms hold **Lucian, the Thirsting Knight** — he ambushes you once mid-dungeon in visible form, then rematches invisible in the Ovum chamber. Stay aggressive so his stagger prevents him vanishing again. Clearing this keep lines up directly with the guide's shell-route notes in the [shells guide](/shells/), including the nearby Gloomshade Grove farming loop in western Fainweald should you need extra Gloom.",
        ],
      },
      {
        heading: "Step 4 — Fainweald west: Outskirts of Nochte and Mether's Breath",
        paragraphs: [
          "Take the **teleporter on the map's southern edge directly below Widow's Overlook** to reach Fainweald's western zone. Activate the **Outskirts of Nochte Beacon** and work toward the gate at the area's eastern edge; behind it waits the **Abandoned Shrine dungeon ending in Vrago, Solikar Champion** — who drops the Voltaic Crown sidearm lightning Tarstone noted in the [missable content guide](/missable-content/). Clearing Nochte's eastern gate auto-returns you to Marrow Keep.",
          "Back home, **deposit enough Ova at the syphon to unlock Mether's Breath** — the game's fast-travel / gate-cleansing ability. If you arrived short, Magdalena's 26-Ova payout plus your accumulated gate cleanses are usually enough; per-beacon totals live in the [fast travel guide](/fast-travel/). Take the roof lift up, use Mether's Breath to clear corruption on the far side of the roof teleporter, and the southern route to the Ruins of Mammon opens.",
        ],
      },
      {
        heading: "Step 5 — Ruins of Mammon: level check, two gates, endgame trigger",
        paragraphs: [
          "The Ruins of Mammon land you at the **Outskirts of Mammon Beacon**, and the common soldiers patrolling outside are the region's difficulty check: if they pressure you, go farm first. AltChar recommends arriving around **level 20 or higher**. Mammon's pattern compresses to what you've practiced: pick an area, fight through to its corrupted gate, cleanse it. Only two gates exist here.",
          "Before triggering the endgame, finish your collection sweep. Shell positions can be bought from **Zhirelle in Marrow Keep** if any remain hidden — though AltChar advises holding off until your Glimpse is mostly spent on upgrades you actually want, since shells aren't going anywhere and the free-roam window after the final boss keeps every non-prologue pickup available (see the [missable content checklist](/missable-content/)). With both gates down and every shell claimed, return to Marrow Keep to trigger the endgame sequence.",
        ],
      },
      {
        heading: "Beyond Mammon: Prisoners' Domain through the endgame",
        paragraphs: [
          "AltChar's progression guide stops at the Mammon boundary — past that point, RPS's 45-boss ordered list maps the road ahead. **Prisoners' Domain** climbs from the Hangman's Scaffold and Executioner's Pulpit Beacons through the Gloombound Legion, Tishina's Confessor, and the parry-gauntlet **Nameless Captive** (whose reversed seven-spin holds the hardest missable trophy). The **Withered Shoals** run from the Gate of Mammon Beacon through Strange Grisha, Hexapod near Nameless Pass, and Sariel's double fight at the Chamber of Becoming.",
          "Late regions stack up through Mammon's snowy **Valley of the Revered** (Caged Grisha, Urrig, Droeg), the **Vestige of Infinity** (Starved Harridan, Gloombound Wraith), and the **Ashen Sanctum** (Solnir, Servants, Sir Isaac). The final multi-layered area beneath Marrow Keep chains Monolith, Malborn Offspring, Orrem, and finally **Zmey the Unbidden** at the Hidden Nave — with the Monolith standing out as the roadblock most players grind on. Each region gets a detailed expansion here as research wraps; per-fight tactics meanwhile live in the [boss guide](/bosses/), and every beacon referenced above has rest effects and unlock rules catalogued in the [fast travel guide](/fast-travel/).",
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
        "The route walkthrough currently covers the prologue through the Ruins of Mammon in full steps; later regions are mapped at boss-checkpoint level. Still being expanded:",
      items: [
        "Full step-level expansions for Prisoners' Domain, Withered Shoals, Conquered Temple, Faded Citadel, and The Unfounded Path — following the same entry point → key pickups → exit template used above",
        "Per-dungeon order for non-critical side zones in Mammon's sub-regions (Valley of the Revered, Vestige of Infinity, Ashen Sanctum)",
        "Second source for region-name spellings: Game8's compendium was unreachable this session, so late-region naming leans on RPS's list alone",
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
        name: "AltChar — Mortal Shell 2: The Complete Progression Guide",
        url: "https://www.altchar.com/guides/mortal-shell-2-the-complete-progression-guide-aDaUv0P7BNa7",
      },
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 shell locations",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-shell-locations",
      },
    ],
    reviewedOn: "August 27, 2026",
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
      {
        heading: "Which shell is the best class in Mortal Shell 2?",
        paragraphs: [
          "There is no official best shell — each of the eight pairs a unique ability kit with a different playstyle, so the honest answer is which kit matches how you fight. Two practical starting points: Tiel and Proxima are the earliest shells you can possess (both are revealed when you first enter Fainweald), and the community's launch-build consensus pairs every shell with its own weapon, sidearm, and seal rather than crowning one class above the rest.",
          "If you want a place to start: Proxima's Lightning burst kit and Smert's Chaos Miracle setup each have a full deep-dive — the [best Proxima build](/best-proxima-build/) and the [best Smert build](/best-smert-build/) — and all eight pairings are compared in the [best build guide](/best-build/).",
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
      "All 8 Mortal Shell 2 weapons and sidearms, annotated through Balance Patch 1: buff callouts, Tarforge cost ladder to +25, and the eel-hitbox sidearm bug FAQ.",
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
        "; Balance Patch 1 effects annotated per Playstack's official patch notes (August 25, 2026), and the Tarforge cost ladder verified against mortalshelldb's forge data (August 25, 2026).",
    ],
    blocks: [
      {
        heading: "What Balance Patch 1 changed about weapons",
        paragraphs: [
          "Playstack's first balance patch materially reshuffles weapon advice — four of its lines touch this arsenal directly. If your weapon assumptions predate August 25, re-read the notes below: two names received damage buffs large enough to change tier-list arguments, two sidearms lost the resolve floors that used to gate their fire rate, and the forge economy got dramatically cheaper.",
        ],
        bullets: [
          "**Great Martyr's Blade +20% attack damage** — already the heavy hitter of Proxima Lightning builds; the lead widens",
          "**Troubadour's Lute +100% attack damage** — the support-flavored pick doubled its damage; re-check it before dismissing it as a meme",
          "**Caged Hystrix & Triarch Repeater: resolve minimums removed** — both now fire at any resolve level instead of holding fire below a threshold, which changes sidearm budgeting in long boss fights",
          "**Tarforge smelting −75% Gloom** — mid-run weapon swapping becomes cheap experimentation rather than an NG+-length commitment",
        ],
      },
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
        bullets: [
          "**Mechanism:** Franz runs the Tarforge in Marrow Keep; upgrading burns materials plus Coin, with a Muradean Actuator tied into the process per Fextralife's upgrades guide",
          "**Cost ladder:** five materials in five-level tiers — Ventrium (+1–5), Laterite (+6–10), Dorsalite (+11–15), Thoracium (+16–20), Ossinite (+21–25), costing 1/3/6/9/12 pieces per step respectively",
          "**Total bill:** a full +0 → +25 journey consumes **185,650 Coin** alongside the material ladder",
          "**Damage curve:** shared across all eight weapons — ×1.00 at +0 rising to ×1.80 at +16, while stagger-type stats keep climbing to ×2.00 at +20; the only per-weapon exception is Great Martyr's Blade's Guard Meter multiplier",
          "**Post-patch discount:** smelting costs dropped 75% under Balance Patch 1, so the real Gloom price is far kinder than launch-era guides told you",
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
      {
        heading: "Do sidearms pass through eel-type enemies on purpose?",
        paragraphs: [
          "It reads like a bug, not design. Steam threads report **Triarch Repeater shots phasing through the heads of eel-type enemies** — projectiles visibly connect but deal no damage — with similar echoes appearing across player reviews around launch. Until a patch note says otherwise, treat ranged hits on serpentine models as unreliable and switch to melee rather than wasting resolve on refused hitboxes.",
          "If your sidearm seems to stop working entirely, rule out the other usual suspects first: post-patch there is no resolve floor left on Caged Hystrix or Triarch Repeater (both fire at any resolve level), so a gun refusing to fire is more likely animation lock or ammo state than the removed threshold mechanic.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro: "Collected against the launch build over the coming days:",
      items: [
        "Per-weapon absolute base damage (hidden in-game; the multiplier curve and cost ladder above are complete)",
        "Full sidearm roster with locations (second-source verification pending)",
      ],
    },
    related: [
      { label: "Damage Calculator", href: "/damage-calculator/" },
      { label: "Best Build", href: "/best-build/" },
      { label: "Mortal Shell 2 Tips", href: "/tips/" },
      { label: "All Shells", href: "/shells/" },
    ],
    sources: [
      {
        name: "Mortal Shell II on Steam (Playstack)",
        url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
      },
      {
        name: "Game8 — Mortal Shell 2 Weapons List",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614498",
      },
      {
        name: "PowerPyx — Mortal Shell 2 All Weapon Locations",
        url: "https://www.powerpyx.com/mortal-shell-2-all-weapon-locations/",
      },
      {
        name: "mortalshelldb.com — Tarforge ladder & upgrade multipliers",
        url: "https://mortalshelldb.com/forge",
      },
    ],
    reviewedOn: "August 27, 2026",
  },
  {
    slug: "bosses",
    metaTitle: "Mortal Shell 2 Bosses: All 10 Major Bosses in Order",
    metaDescription:
      "All 10 Mortal Shell 2 major bosses in order, with location, payout, and a phase-by-phase strategy for every fight, from Magdalena to Zmey.",
    cardBlurb:
      "All 10 major bosses in order, their regions, and which fights pay out shells and weapons.",
    h1: "Mortal Shell 2 Bosses",
    eyebrow: "Bosses",
    intro: [
      "Mortal Shell II's critical path runs through ten major bosses guarding the Corrupted Gates, spread across nine regions from Disciple's Pass to the Faded Citadel and beyond. This page lists all ten in the recommended encounter order, with where each fight happens and what it pays out.",
      "The roster was verified on August 20, 2026 (launch day) against Game8's boss compendium and GameSpot's boss guide. The per-boss strategies below were written against Rock Paper Shotgun's 45-boss compendium, updated August 25, 2026.",
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
          "Orrem, the Discarded Golem — near the Bridge of Procession Beacon",
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
        heading: "Magdalena, the Lady of the Woods strategy",
        paragraphs: [
          "Arena and gimmick: she fights from a rocket-powered mobility scooter, driving through the arena and doing fiery donuts while flames pour from the vehicle's back. Summonable Smert helps little here — plan to carry the fight yourself.",
          "The pattern: hug **her flank** to dodge the rear exhaust flames, and learn that she always does exactly **two donut rotations** before pausing — that pause after rotation two is your punishment window. Her scooter periodically gets stuck; if you're far away when it happens, chip with your sidearm instead of running in. Dealing enough damage opens **two Riposte cut-ins** where you hop atop the scooter for quick stabs. When mutated **Tar Babies** spawn later, delete them cheaply — they die in a hit or two and each kill generates resolve for your next big exchange.",
        ],
      },
      {
        heading: "The Lost Child strategy",
        paragraphs: [
          "Arena and gimmick: a slug-mass horror in the Sanguine Caverns spitting acid streams, swallowing you whole, and swinging arms — one of which is **unblockable**. His other unblockable is an **inhale** that drags you into his gut: when he draws breath, sprint-dodge sideways immediately or you're swallowed.",
          "Safe plan: this is the fight where ranged carries hardest. A **Forgotten Crossbow** infused with Burn (Emberseed Stone) plus the Barrage Stone shreds him from elevation while he eats the damage-over-time. Melee works too — respect the mouth streams and arm sweeps, punish after his inhale whiffs, and bank your ripostes for stagger windows. Eredrim can be summoned but melts fast; treat him as a distraction, not a tank.",
        ],
      },
      {
        heading: "The Nameless Captive strategy",
        paragraphs: [
          "Arena and gimmick: the parry-gauntlet. Almost everything he throws — including the rotating sword-head swings — is **blockable**, designed around Perfect Guard mastery; the main exception is a nasty kick he favors in the second half. His blade reach is enormous: when a read fails, **dodge sideways repeatedly** rather than once.",
          "Safe plan: build the fight around your defense stat, not trades. Two interruptions make it survivable: the **Grisha Remnant** equipped as a passive summons allies that knock him out of swing animations, and the Infused Stone lets you fling a heavy weapon to create space from the sword-head. Expect dozens of attempts — the reversed seven-spin variant holds the site-wide trophy detailed in the [missable content guide](/missable-content/).",
        ],
      },
      {
        heading: "Droeg, the Conquerer strategy",
        paragraphs: [
          "Arena and gimmick: a frost giant whose club punishes panic — counterintuitively, staying **close** is safer than mid-range, where his swings track best. Kneeling club combos invite parries; watch the stomp; the **club slam** is unblockable and must be dodged.",
          "The real killer arrives after your first riposte: he begins raining **flaming ice balls** that track and deal enormous damage — arguably deadlier than the club all fight. Never stand still, dodge on their descent, and equip anti-Frozen insurance (**Martyr's Ash** as your active item, fired the moment phase two starts) because being frozen mid-slam is how runs end.",
        ],
      },
      {
        heading: "Hexapod strategy",
        paragraphs: [
          "Arena and gimmick: an alien arthropod in Withered Shoals that rewards a very specific loadout — its own shell's memories hint at it. Fire **Proxima's Triarch Repeater** nonstop; stack Deadeye or Marksman stones (crit damage/chance) with the Rupturing Stone so critical shots apply Break, steadily feeding you riposte windows without ever closing distance.",
          "Late fight adjustments: at low health the Hexapod speeds up, dives into the arena water, and rushdowns — reopen distance and resume firing, jumping into melee only when cornered. Pure melee builds clear it too, but respect the **unblockable grab**; it's the one mistake the arena doesn't forgive.",
        ],
      },
      {
        heading: "The Warden strategy",
        paragraphs: [
          "Arena and gimmick: a cramped circular pit at Citadel of Penance where nearly every axe swing is **unblockable** — this is a dodge-and-punish fight by design, and wall-behinds-you awareness matters more than normal.",
          "The tell: his signature is **four rapid spin-flings** of the burning axe; survive the sequence and you get a guaranteed punish window after the fourth blow. Damage-over-time carries the attrition battle — apply **Burn or Poison via Tarstones** to his huge health pool, and reuse the Nameless Captive toolkit that interrupts: passive **Grisha Remnant** summons plus the Infused Stone thrown weapon to buy breathing room between spins.",
        ],
      },
      {
        heading: "Sir Isaac, the Scholar-Prince strategy",
        paragraphs: [
          "Phase one: he holds a shield that eats frontal and ranged damage entirely — strafe to his **shieldless flank** to land anything meaningful. At roughly one-third health he discards the shield and goes berserk with **four blades**, launching aerial multi-stab dives that require repeated backward dodges.",
          "The cliff-edge rules: his second form kills in one or two hits, and his lone **unblockable grab** near-wipes your health bar on catch. Safe proven plan: the Proxima lightning setup — Biosampler-driven **Lightning stacks** for steady damage-over-time through both phases, then manage distance from the blade barrage with a thrown weapon. Resolver discipline matters; Common Moonshine-style resolve regen is legitimate insurance for a long learning curve.",
        ],
      },
      {
        heading: "Monolith strategy",
        paragraphs: [
          "The wall: widely rated the game's worst fight — Day-one overtuned, briefly nerfed, still brutal. Its ground slams have absurd tracking; answer them with **parries or Hardening** timed for i-frames rather than trying to outrun the targeting. The central fleshy mass swing is parryable too.",
          "After your first riposte it rolls and fires **lasers**: tracked beams plus swinging arcs. The counterintuitive core skill — dodge **into** the arcs, never away, cutting through with i-frames, then sprint to its back where lasers haven't extended yet and unload there. Phase three adds top-spin attacks, an **unblockable airborne drop** (dodge at the last second), and the accelerating death-spiral arc show — lock the rhythm down and accept it takes attempts. Corner yourself and the camera will kill you; fight center-arena. Thrown weapons have been observed glitching the lasers off temporarily — abuse anything cheap, this fight deserves it.",
        ],
      },
      {
        heading: "Malborn Offspring strategy",
        paragraphs: [
          "Phase one reads as: a repeating triple sword combo where the **first two strikes parry and the third is unblockable**, plus a teleported sword-throw into jump-slash you must respect at range. Phase two adds Lightning damage, relentless aggression, and an almost-always-available unblockable grab with nasty tracking — trading hits back is losing play here.",
          "Win condition: prevent him from acting. Overwhelm with summons (**Grisha Remnant** passives, or Genessa's clones) until his stagger bar breaks repeatedly, or bring fast cancel-heavy gear like the **Axatana with Duality Tarstone**. Proxima's Lightning mitigation blunts phase two. There is a farm: the secret Desolate Keep behind Genessa's training room lets you kill a remnant-dropping Grisha, exit to the main menu, and repeat with everything kept — about twenty stored remnants trivializes both phases. Flagged honestly: exploit-shaped, could be patched anytime.",
        ],
      },
      {
        heading: "Orrem, the Discarded Golem strategy",
        paragraphs: [
          "Phase one reads as: tutorial-nostalgia tar golem with twin axes — hard-hitting but very readable, primed for Perfect Guards. Two exceptions demand dodges: the **jumping slam** and the **double-axe smash**. Build Break, cash ripostes.",
          "Phase two transforms him into **Orrem the Reclaimed**: faster, tail-equipped, much harder to parry. Two outs exist: inflict **Stasis stacks** to drag his speed back down, or simply overwhelm the lumbering body with summon armies — among the final four bosses this is the forgiving one, the place to breathe before the Monolith and Zmey take turns humbling you.",
        ],
      },
      {
        heading: "Zmey, the Unbidden strategy",
        paragraphs: [
          "The final exam: obscene health, a far-reaching **unblockable tail impale** that pins you for a follow-up butt slam capable of knocking you out of (or ending) your run, delayed fire breath, and post-riposte **AoE flame waves** that must be dashed into — getting clipped inflicts **Cosmic Disease**, locking you out of re-shelling and every skill and Tarstone.",
          "The shape of the win: stand under him and work the lower body, timing guards against the foot stamps; when he leaps back and raises the blade-throw, dodge immediately (your summoned companions rarely draw that specific throw — assume it's coming for you). Pack the **Seedbearer's Scripture** as your active if you've completed the Night Mode Forgotten Tower gland quest — triggered on-hit, it cures Cosmic Disease *and* floors Zmey for a free punish. And if the mountain won't move: the **Slayer Seal** exists precisely for fights like this, no shame attached.",
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
        "Second-source confirmation of the 44 total boss count",
        "Optional boss and miniboss roster per region",
      ],
    },
    related: [
      { label: "All Shells", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
    sources: [
      {
        name: "Game8 — Mortal Shell 2 All Bosses",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614453",
      },
      {
        name: "Rock Paper Shotgun — All 45 bosses in Mortal Shell 2 (per-boss strategies)",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-all-bosses",
      },
      {
        name: "GameSpot — Mortal Shell 2 Boss Guide",
        url: "https://www.gamespot.com/articles/mortal-shell-2-boss-guide/1100-6524311/",
      },
    ],
    reviewedOn: "August 27, 2026",
  },
  {
    slug: "tips",
    metaTitle: "Mortal Shell 2 Tips: Resolve, Combat & Dungeon Secrets",
    metaDescription:
      "Mortal Shell 2 tips: a 0.3-second parry window you can train, posture-break math, bear-trap survival, escape steps when geometry eats you, and boss-prep habits.",
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
      {
        heading: "The parry has roughly 0.3 seconds of prep — so train it like it",
        paragraphs: [
          "Community testing on Steam converges on a rough figure worth planning around: the parry animation needs about 0.3 seconds before its active frames, and some of the game's fastest combo strings re-touch you in less time than that. This is why parrying feels unfair against certain enemies while feeling trivial against others — the attack's tell, not your reflexes, decides whether 0.3 seconds is enough.",
          "The drill that follows from the number: pick one enemy archetype per session (Fainweald soldiers are ideal), and for that session do not dodge — every incoming attack gets exactly one committed attempt at a timed Perfect Guard or an eat-the-hit reset. Twenty minutes of this converts vague 'parry when it feels right' into concrete per-enemy tells you can name. Perfect Guard timing is also fully compatible with aggressive play: a landed guard preserves your posture position and feeds the same resolve economy described above.",
          "Per-archetype frame data is still being measured — that precision lives in this page's pending list rather than pretending it is settled science.",
        ],
      },
      {
        heading: "Posture math: what actually fills the bar",
        paragraphs: [
          "The stagger bar rewards sustained pressure, not big single hits. Two facts from Game8's tables shape the arithmetic: skills and parries inflict Break damage alongside raw strikes — with no stamina bar limiting how often you can press — and red-glow attacks are pure dodge signals, meaning trading into them always loses more than it teaches. The practical loop against any tanky enemy: three to four quick strikes between their swings, parry anything telegraphed yellow, save skills for windows after you force a whiff, and treat red attacks as the loop's reset button.",
          "Weapon choice changes the exchange rate: heavy weapons spend longer per swing but move larger chunks of posture, while fast weapons deposit smaller amounts at higher frequency — the [weapons guide](/weapons/) keeps the per-weapon breakdowns, and the [boss guide](/bosses/) shows where each fight's posture rhythm breaks down phase by phase.",
        ],
      },
      {
        heading: "Bear traps: survive them without losing runs",
        paragraphs: [
          "Invisible bear traps are among the most complained-about design choices since launch — Steam players describe stepping on chained traps they could not see while kiting enemies, eating heavy damage plus a stagger at the worst possible moment. Three habits neutralize most of that damage:",
        ],
        bullets: [
          "**Never backpedal through grass:** traps hide almost perfectly behind foliage — strafe sideways during kites instead of retreating blind",
          "**Let chasers path over traps first:** pursuing enemies trigger them too; a Grisha chasing you through a trap cluster does half your work for free",
          "**Trek unknown ground ranged:** poking distant targets with a sidearm discharge beats walking face-first into unseen ground — remembering sidearm discharges spend resolve, so budget accordingly",
        ],
      },
      {
        heading: "Is there a way to disable bear traps?",
        paragraphs: [
          "In-game: no setting or ability turns them off, and placement persists across visits. PC players unwilling to tolerate them use Nexus Mods community patches that remove world traps entirely; console players get the behavioral workarounds above as the practical answer. Traps do not respawn mid-dungeon once triggered, so heavily-trafficked corridors become safer over a run — first-pass exploration zones concentrate the risk.",
        ],
      },
      {
        heading: "My character is wedged near Hall of Murmirs — how do I escape?",
        paragraphs: [
          "Steam threads document a specific geometry hole near South Castigator Keep by Hall of Murmirs that swallows characters during careless traversal. Escape order, cheapest first: sprint-jump repeatedly against the seam toward the wedge lip; if that fails, force a state refresh by changing equipment and retrying; if still stuck, fast travel out — cleansed Beacons override your collision state (the [fast travel guide](/fast-travel/) helps if none are nearby yet); the last resort is reloading your last save, which costs everything since your last autosave.",
          "Prevention matters more than escape here: walk, never sprint-jump, across the cliffside seam on Hall of Murmirs' southern approach toward the Castigator Keep wall — that specific traversal is what drops characters into the wedge in the first place.",
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
      {
        name: "Mortal Shell II Steam Community Discussions (community timing and bug reports)",
        url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/discussions/",
      },
    ],
    reviewedOn: "August 27, 2026",
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
        heading: "Screen tearing: the V-Sync trade-off (attributed)",
        paragraphs: [
          "Screen tearing — horizontal tears in the image when a frame lands mid-refresh — has no officially confirmed fix in Mortal Shell 2. The attributed guidance from LagoFast runs against instinct: disable the in-game V-Sync and cap the frame rate externally instead (for example at 60 FPS via a tool like RivaTuner). The logic is to let one frame-rate governor handle pacing rather than stacking the game's own V-Sync on top of it.",
          "As with every attributed setting on this page, treat it as a test rather than a guarantee: change one thing, re-test, and keep what your hardware actually responds to.",
        ],
      },
      {
        heading: "Compiling shaders: why the stutter happens and what the cache does",
        paragraphs: [
          "Much of Mortal Shell 2's mid-fight stutter points at the same underlying shader-compilation behavior the lock-up fix addresses: when the game meets visual effects it has not compiled yet, that compilation lands in the middle of play as a hitch. The fix with the strongest support is the same one Playstack's community manager recommends for lock-ups — set Shader Cache Size to Unlimited in the NVIDIA Control Panel (or the AMD Software equivalent) so compiled shaders are kept instead of being recompiled.",
          "LagoFast additionally lists the community-reported -UseFixedTimeStep Steam launch option as a thing to try for shader stutter. That one is community-reported only — it is not an official recommendation, so weigh it accordingly.",
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
      {
        heading: "How do I fix screen tearing in Mortal Shell 2?",
        paragraphs: [
          "No screen-tearing fix has been officially confirmed. The attributed guidance is to disable the in-game V-Sync and cap the frame rate externally — for example at 60 FPS — so a single governor handles frame pacing. Change one setting at a time and re-test after each.",
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
  {
    slug: "best-proxima-build",
    metaTitle: "Mortal Shell 2 Best Proxima Build: Lightning Burst Loadout",
    metaDescription:
      "Mortal Shell 2 best Proxima build: Great Martyr's Blade and Triarch Repeater, how the Biosampler Lightning kit works, and where to find every piece.",
    cardBlurb:
      "The Lightning burst build for Proxima: loadout, why Biosampler wins, and where every piece is found.",
    h1: "Mortal Shell 2 Best Proxima Build",
    eyebrow: "Builds",
    intro: [
      "Proxima turns Mortal Shell 2's lightning system into a burst-damage machine: her Biosampler kit stacks Stasis and Lightning while a heavy blade holds enemies in place. This page collects the community's launch-build loadout for her, why it works, and where to find every piece of it.",
      "The loadout pairing below follows Game8's launch guide, verified against the August 20 release build; the locations come from our own shell and weapon research. Anything not yet confirmed is listed openly at the bottom of the page.",
    ],
    blocks: [
      {
        heading: "The best Proxima build in one look",
        paragraphs: [
          "Game8's walkthrough team publishes a best build for each of the eight shells, pairing a weapon and a sidearm with each shell's ability kit. Their pick for Proxima:",
        ],
        bullets: [
          "Shell — Proxima (Lightning), found at the Shattered Beacon in the Blackridge Cliffs",
          "Weapon — Great Martyr's Blade, the reforged weapon of the First Martyr Tarsus",
          "Sidearm — Triarch Repeater",
          "Gameplan — Biosampler inflicts Stasis and Lightning stacks, then the blade converts them into burst damage",
        ],
      },
      {
        heading: "Why this loadout wins: Biosampler and the Lightning gameplan",
        paragraphs: [
          "Proxima's signature is the Biosampler kit that lightning builds are built on: it inflicts Stasis and Lightning stacks on enemies, setting up a window where burst damage lands all at once. The Great Martyr's Blade is the pairing that makes that window pay — a heavy weapon whose complete, unique moveset can dump damage into a Stasis-slowed target instead of chipping at it.",
          "Every weapon in Mortal Shell II defines its own full moveset — there are no shared-animation subtypes — so the blade genuinely changes how Proxima plays compared with a faster pairing. The Triarch Repeater covers the gap: as a ranged sidearm it extends pressure between the blade's slower swings and keeps Lightning stacks ticking while you reposition.",
        ],
      },
      {
        heading: "Where to find Proxima",
        paragraphs: [
          "Proxima is one of the two easiest shells: her general location is revealed when you first enter Fainweald. From the Widow's Overlook Beacon head north into the Blackridge Cliffs, past cultists fighting a Tarred Vestige and the white spider-like enemy, until a glimmering beacon appears — the Shattered Beacon. Proxima's body lies on a table inside; possessing her unlocks the Biosampler kit.",
        ],
      },
      {
        heading: "Where to find the Great Martyr's Blade and Triarch Repeater",
        paragraphs: [
          "The Great Martyr's Blade waits in the Martyr's Prison dungeon at the northeast corner of the castle, reachable from the Gloomshade Grove Beacon or via the well from the Holding Cells. Clear the four enemies in the locked room and the blade is yours.",
          "The Triarch Repeater is one of the eight ranged sidearms. Per PowerPyx's locations guide, none of the sidearms are missable, and Merrick in Marrow Keep sells their map markers like he does for weapons — so if you would rather buy the waymark than search, that trade exists.",
        ],
      },
      {
        heading: "The Great Martyr's Blade is the guard-meter outlier",
        paragraphs: [
          "One detail build planners miss: the Great Martyr's Blade is the only weapon in the game whose Guard Meter scaling breaks the universal curve. Every other weapon scales Guard Meter at x1.25; the Great Martyr's Blade scales at x1.30 — a small but real defensive edge at high upgrade levels.",
          "Raw damage on all weapons scales from x1.00 at +0 to x1.80 at +16, while stagger and the zero-based stats keep scaling to x2.00 at +20. The full multiplier table and a level-by-level Tarforge cost calculator are in the [damage calculator](/damage-calculator/).",
        ],
      },
      {
        heading: "What is the best Proxima build in Mortal Shell 2?",
        paragraphs: [
          "Game8's launch-build pick pairs the Great Martyr's Blade with the Triarch Repeater: Biosampler inflicts Stasis and Lightning stacks for burst, and the blade's heavy unique moveset converts that crowd control into damage. See the loadout breakdown above for why each piece earns its slot.",
        ],
      },
      {
        heading: "Where do I find Proxima in Mortal Shell 2?",
        paragraphs: [
          "Proxima lies at the Shattered Beacon in the Blackridge Cliffs, north of the Widow's Overlook Beacon in Fainweald. Her general location is revealed automatically when you first enter Fainweald — head past the cultists fighting a Tarred Vestige and the white spider-like enemy to reach her.",
        ],
      },
      {
        heading: "Is Proxima a good first shell?",
        paragraphs: [
          "She is one of the two earliest shells you can possess — the Fainweald pair, Tiel and Proxima, are both revealed when you first enter the region, while every other shell hides in a specific corner of the world and several are guarded by bosses. An early Proxima means an early Lightning gameplan; whether that suits you depends on how comfortable you are with a heavy blade's slower swings.",
        ],
      },
    ],
    pending: {
      heading: "Not yet verified",
      intro:
        "Post-launch patch tuning will reshuffle build rankings; these points are not yet confirmed in any source we trust.",
      items: [
        "Which seal pairs with Proxima's loadout — Game8's per-shell pairings do not list one for her",
        "Exact Biosampler stack values and decay rates",
      ],
    },
    related: [
      { label: "All Best Builds", href: "/best-build/" },
      { label: "All Shells & Locations", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Damage Calculator", href: "/damage-calculator/" },
    ],
    sources: [
      {
        name: "Game8 — Mortal Shell 2 Best Builds",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614504",
      },
      {
        name: "PowerPyx — Mortal Shell 2 All Sidearm Locations",
        url: "https://www.powerpyx.com/mortal-shell-2-all-sidearm-locations/",
      },
      {
        name: "Game8 — Mortal Shell 2 Weapons List",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614498",
      },
    ],
    reviewedOn: "August 25, 2026",
    datePublished: "2026-08-25",
  },
  {
    slug: "best-smert-build",
    metaTitle: "Mortal Shell 2 Best Smert Build: Chaos Miracle Loadout",
    metaDescription:
      "Mortal Shell 2 best Smert build: Axe and Dagger with the Caged Hystrix, how unarmed Chaos stacks during Miracle work, and where to find everything.",
    cardBlurb:
      "The Chaos build for Smert: unarmed stacks during Miracle, the ritual to claim him, and every piece's location.",
    h1: "Mortal Shell 2 Best Smert Build",
    eyebrow: "Builds",
    intro: [
      "Smert is Mortal Shell 2's time-stopping Chaos shell, and his best build is the strangest of the eight: you win by not attacking. Unarmed strikes during Miracle build Chaos stacks that burst all at once when the ability ends — a setup that rewards patience more than any other shell.",
      "The loadout below follows Game8's launch guide, verified against the August 20 release build; locations and the ritual walkthrough come from our own shell and weapon research. Anything not yet confirmed is listed openly at the bottom of the page.",
    ],
    blocks: [
      {
        heading: "The best Smert build in one look",
        paragraphs: [
          "Game8's walkthrough team publishes a best build for each of the eight shells, pairing a weapon, a sidearm, and a seal with each shell's ability kit. Their pick for Smert:",
        ],
        bullets: [
          "Shell — Smert (Chaos), claimed from the blood ritual in Prophet's Rest",
          "Weapon — Axe and Dagger, a thief's tool paired with a northern axe",
          "Sidearm — Caged Hystrix",
          "Seal — Untarnished Seal",
          "Gameplan — unarmed attacks during Miracle build Chaos stacks, then burst at the end of the duration",
        ],
      },
      {
        heading: "Why this loadout wins: Chaos stacks during Miracle",
        paragraphs: [
          "The engine of this build is a deliberate contradiction: while Miracle is active, you attack with your bare hands. Unarmed strikes stack Chaos during the ability's duration, and when Miracle ends the stacks detonate into a single burst — timing damage for the end of the window instead of the start.",
          "The Axe and Dagger covers everything outside Miracle. It is the one weapon in the arsenal that serves three different gameplans — guaranteed crits on Tiel, Revered Heart buffs on Gragu, and Chaos stacking on Smert — so the pairing is flexible rather than exotic. The Caged Hystrix sidearm keeps pressure on while you wait for the next Miracle window, and the Untarnished Seal rounds out the kit.",
        ],
      },
      {
        heading: "Where to find Smert",
        paragraphs: [
          "Smert's ritual is the strangest sight of the eight shells. From the Outskirts of Nochte Beacon turn left up the slope into Prophet's Rest: three cultist groups chant over circular pits of red liquid, with Smert's body on a stone slab beside them. Clear the three groups — Rock Paper Shotgun notes the Troubadour's Lute can turn them on each other — and the screen glows red when the shell is claimable.",
        ],
      },
      {
        heading: "Where to find the Axe and Dagger and Caged Hystrix",
        paragraphs: [
          "The Axe and Dagger sits behind a two-step puzzle: walk through the arch facing the burning pyre south of Mushroom Village to summon the statue holding the Chapel Key, then open the Shrine of Trials dungeon northwest of the village.",
          "The Caged Hystrix is one of the eight ranged sidearms. Per PowerPyx's locations guide none of them are missable, and Merrick in Marrow Keep sells their map markers if you would rather buy the waymark than search.",
        ],
      },
      {
        heading: "What is the best Smert build in Mortal Shell 2?",
        paragraphs: [
          "Game8's launch-build pick pairs the Axe and Dagger with the Caged Hystrix and the Untarnished Seal: unarmed attacks during Miracle build Chaos stacks that burst at the end of the duration, while the paired weapon handles everything outside the ability window. See the loadout breakdown above for why each piece earns its slot.",
        ],
      },
      {
        heading: "Where do I find Smert in Mortal Shell 2?",
        paragraphs: [
          "Smert's body lies on a stone slab in Prophet's Rest, up the slope from the Outskirts of Nochte Beacon, surrounded by three cultist groups chanting over pits of red liquid. Clear the three groups — the Troubadour's Lute can turn them on each other — and the screen glows red when the shell is claimable.",
        ],
      },
      {
        heading: "Why does the Smert build use unarmed attacks?",
        paragraphs: [
          "Because that is where the Chaos stacks come from. Unarmed strikes during Miracle are what build the Chaos count; when the ability ends, the stacks convert into a single burst of damage. Attacking with your weapon during the window would deal normal damage instead of stacking the payoff — hence a build that deliberately fights bare-handed inside Miracle and saves the Axe and Dagger for everything else.",
        ],
      },
    ],
    pending: {
      heading: "Not yet verified",
      intro:
        "Post-launch patch tuning will reshuffle build rankings; these points are not yet confirmed in any source we trust.",
      items: [
        "The community-reported 'Smert memory bug' — what it affects and whether it is real is unverified; general crash fixes live in the crash fix guide",
        "Exact Chaos stack values and the burst formula during Miracle",
      ],
    },
    related: [
      { label: "All Best Builds", href: "/best-build/" },
      { label: "All Shells & Locations", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Crash & Stutter Fixes", href: "/performance-fix/" },
    ],
    sources: [
      {
        name: "Game8 — Mortal Shell 2 Best Builds",
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
    reviewedOn: "August 25, 2026",
    datePublished: "2026-08-25",
  },
  {
    slug: "fast-travel",
    metaTitle: "Mortal Shell 2 Fast Travel: All 49 Beacons & Unlock Steps",
    metaDescription:
      "Mortal Shell 2 fast travel explained: cleanse Beacons to reach the Mether's Breath menu, all 49 Beacon locations by region, and why none are missable.",
    cardBlurb:
      "Cleanse Beacons to open the fast-travel network — all 49, none missable.",
    h1: "Mortal Shell 2 Fast Travel",
    eyebrow: "Progression",
    intro: [
      "Fast travel in Mortal Shell II is not a spell you learn or a questline you finish — it is the Beacon network you build yourself. Every region hides corrupted checkpoints that become the travel map's pins as you cleanse them, and by launch week players were asking the same question across Steam and YouTube: where exactly does fast travel start?",
      "This page covers the mechanic end to end: what Beacons do before and after cleansing, how to trigger the Mether's Breath travel menu, every one of the 49 Beacon locations ordered by region, and the completion stakes — none of them are missable. Everything below was verified against PowerPyx's Beacon compendium and the Fextralife wiki on August 27, 2026.",
    ],
    blocks: [
      {
        heading: "Fast travel runs through Beacons",
        paragraphs: [
          "Mortal Shell II has no standalone teleport system: the fast-travel network lives inside the world's Beacon checkpoints. Each region you push into is anchored by these Beacons — the checkpoint-and-travel spines our [walkthrough](/walkthrough/) routes are built around — so your travel map fills out naturally as you explore rather than unlocking in one cutscene.",
          "A freshly found Beacon is corrupted. Per Fextralife's wiki, it offers only the basics while darkened overgrowth still covers it: you can rest there and set it as your respawn point, but none of the travel and progression menus exist yet. Cleansing is what turns a campfire stop into a node of the network.",
        ],
      },
      {
        heading: "How to unlock fast travel at a Beacon",
        paragraphs: [
          "Unlocking travel node by node follows the same loop everywhere in the world:",
        ],
        bullets: [
          "Interact with a corrupted Beacon to rest: the prompt confirms it will now revive you here if you fall in combat.",
          "Enter the Beacon to cleanse it. Cleansing drops you into a contained dungeon — clear the enemies, and sometimes a miniboss, then claim the reward waiting at the end.",
          "Once cleansed, the Beacon's menu expands. Fextralife lists the unlocked options: Level Up with Gloom, Change Equipment, Mether's Pulse upgrades, Return to Marrow Keep (a direct fast-travel ride back to the hub), and Enter/Cleanse to dive back inside.",
          "From any Beacon's Mether's Breath menu you reach the full fast-travel destination list — PowerPyx orders its complete 49-Beacon rundown by exactly how the entries appear in that in-game menu.",
        ],
      },
      {
        heading: "What resting at a Beacon does",
        paragraphs: [
          "Whether corrupted or cleansed, resting is what makes a Beacon matter mid-run. Four effects stack every time you sit down at one:",
        ],
        bullets: [
          "Revives the equipped shell if it had fallen.",
          "Restores Health and Resolve.",
          "Respawns regular enemies — boss encounters stay dead — so farming loops run through whatever route feeds the Beacon.",
          "Updates your respawn point to this Beacon for your next death.",
        ],
      },
      {
        heading: "Cleansing pays in Ova, loot, and shortcuts",
        paragraphs: [
          "Every cleanse ends with a unique reward, usually the Ova tucked inside the Beacon — the collectibles needed for the game's toughest completion trophy — plus smaller payouts like Glimpse or materials such as Laterite, depending on the node. Cleansing also clears the obstructions around a Beacon, per Fextralife, unblocking loot you couldn't reach before.",
          "Payouts are not flat. The six Beacons that appear after each main boss always hold the heaviest haul: 26 Ova each, per PowerPyx's tables. If completion hunting is part of your loop, those are the dives worth prioritizing whenever the route passes one — the full roster and drop tables live in the [boss guide](/bosses/).",
        ],
      },
      {
        heading: "All 49 Beacon locations by region",
        paragraphs: [
          "PowerPyx catalogs 49 Beacons worldwide, grouped below by the region each sits in and numbered the way the Mether's Breath menu lists them. Three arrive pre-cleansed when you find them: Marrow Keep, Widow's Overlook, and Outskirts of Mammon.",
        ],
        bullets: [
          "Marrow Keep — Marrow Keep (#1), the hub itself.",
          "Fainweald — Stonebled Gate (#2), Mushroom Village Gate (#3), Nochtean Gate (#4), Mushroom Village (#5), Outskirts of Nochte (#6), Blackridge Pass (#7), Widow's Overlook (#8), Gloomshade Grove (#9), Citadel of Penance (#10), One Legged Wolf Ruins (#11).",
          "Ruins of Mammon — Outskirts of Mammon (#12), Sester's Gate (#13), Gate of Infinity (#14), Castigator's Keep (#15), Abbey Entrance (#16), Abandoned Outpost (#17), Gate of Mammon (#18), The Silent Steps (#19), High Lord's Courtyard (#20).",
          "Glutted Mire — Seeping Mire (#21), Sunken Village (#22), Magdalena's Glade (#23).",
          "Prisoners' Domain — Hangman's Scaffold (#24), Executioner's Pulpit (#25), Slumwater Drain (#26), Captive's End (#27).",
          "Sanguine Caverns — Pulsing Caves (#28), Sanguine Shoreline (#29), Child's Feeding Grounds (#30).",
          "Conquered Temple — Ovate's Chamber (#31), Winterglass Lake (#32), Conqueror's Hoard (#33).",
          "Faded Citadel — Citadel Annex (#34), Citadel Atrium (#35), Scholar-Prince's Chamber (#36).",
          "Withered Shoals — Nameless Pass (#37), Ossinite Falls (#38), Hexapod's Burrow (#39).",
          "The Unfounded Path — The Hidden Nave (#40), Receiving Hall (#41), Faithful's Shelter (#42), Brether's Court (#43), Obsidian Vault (#44), Bridge of Procession (#45), Empty Cradle (#46), Chamber of the Forsaken (#47).",
          "Disciple's Pass — Disciple's Grotto (#48), Village Outskirts (#49).",
        ],
      },
      {
        heading: "No Beacon is ever missable",
        paragraphs: [
          "Completionists get a safety net the rest of the game doesn't always offer: none of the 49 Beacons can be missed. PowerPyx confirms you can still find and cleanse anything left over after the final boss, during the free-roam window before you choose to enter New Game+.",
          "The math behind the cleanup: only 46 of 49 show progress on the trophy tracker, because three are already cleansed the moment you discover them. Cleansing everything is required for the So Fresh, So Clean achievement — and since Beacons are where the Ova live, finishing them also serves the companion collection achievement attached to those rewards.",
        ],
      },
      {
        heading: "When do you unlock fast travel?",
        paragraphs: [
          "There is no story gate or timer: the pieces appear with the world itself. The first time you meet a corrupted Beacon you already have a working checkpoint, and every successful cleanse immediately extends the travel network — culminating in the full 49-entry Mether's Breath menu. By endgame, all six post-boss Beacons and every regional node are reachable across the whole map without a single repeat footpath.",
        ],
      },
      {
        heading: "Why can't I fast travel yet?",
        paragraphs: [
          "You're standing at a Beacon that is still corrupted — or trying to travel from somewhere that isn't a Beacon at all. An uncleansed node gives you rest, healing, and a respawn point, but no destinations. Step inside and clear its dungeon first; once cleansed, the travel options appear in that node's menu, and the Return to Marrow Keep option is the fastest way home from anywhere the network reaches.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro:
        "Two behaviors and one naming discrepancy were not pinned down by the sources checked this week:",
      items: [
        "Whether the Mether's Breath menu shows corrupted Beacons as locked entries or hides them entirely until cleansed",
        "Whether fast travel carries any resource cost or usage limit (none is described by PowerPyx or Fextralife)",
        "Spelling: PowerPyx writes the endgame region as 'The Unfound Path'; this site keeps 'The Unfounded Path', the form used by the walkthrough sources — the same late-game zone either way",
      ],
    },
    related: [
      { label: "Walkthrough", href: "/walkthrough/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
      { label: "Boss Guide", href: "/bosses/" },
      { label: "Best Builds", href: "/best-build/" },
    ],
    sources: [
      {
        name: "PowerPyx — Mortal Shell 2 All Beacon Locations",
        url: "https://www.powerpyx.com/mortal-shell-2-all-beacon-locations/",
      },
      {
        name: "Fextralife Wiki — Mortal Shell 2 Beacons",
        url: "https://mortalshell2.wiki.fextralife.com/Beacons",
      },
    ],
     reviewedOn: "August 27, 2026",
     datePublished: "2026-08-27",
   },
  {
    slug: "missable-content",
    metaTitle: "Mortal Shell 2 Missable Content: Everything That Locks You Out",
    metaDescription:
      "Every missable trophy and one-time encounter in Mortal Shell 2: Marigold's flower crown, the Tar Golem tutorial fight, Peter's Perfect Parry, and what survives into NG+.",
    cardBlurb:
      "Three trophies can lock you out per run — here is exactly where, and what stays recoverable.",
    h1: "Mortal Shell 2 Missable Content Guide",
    eyebrow: "Completion",
    intro: [
      "Mortal Shell II is friendlier to completionists than its reputation suggests — but not completely. Only three trophies in the entire 53-trophy list are flagged missable, and every one of them can be recovered with a fresh save slot; meanwhile, several things players assume are lost forever (Beacons, Ova, shells, weapons) remain collectible even after credits roll.",
      "This page maps both sides of that line: the short list of things you can genuinely lock yourself out of, the timing windows that decide them, and the safety nets the game does provide. Everything below was verified on August 27, 2026 against PowerPyx's full trophy roadmap, the Fextralife wiki, GameTrek's trophy database, and Playstack's official Steam forum.",
    ],
    blocks: [
      {
        heading: "The quick answer: only 3 things are truly missable",
        paragraphs: [
          "PowerPyx's launch-window roadmap counts exactly three missable trophies out of 53:",
        ],
        bullets: [
          "**Mid Summer?** — accept Marigold's flower crown during the prologue walk to your first Shell. Ignore her once and it is gone for that playthrough.",
          "**No, You Still Can't Win** — reduce the tutorial Tar Golem to zero health. The game casts it as an unwinnable fight; winning ends the tutorial fight immediately, and the Golem never appears again in any playthrough including NG+.",
          "**Peter's Perfect Parry** — Perfect Guard every hit of a specific head-spin variant from The Nameless Captive while wearing the Untarnished Seal. If he dies before you land it, the save moves past the encounter permanently.",
        ],
      },
      {
        heading: "Mid Summer? — the flower crown everyone asks about",
        paragraphs: [
          "During the prologue, before you claim your first Shell, you pass a character named **Marigold** who offers you a flower crown. Accepting it triggers Mid Summer?; walking past without interacting locks the trophy for that run. It cannot be earned in NG+ either, because the offer only exists in the initial prologue sequence.",
          "The recovery path is mechanical, not magical: start a new save in a different slot, watch for Marigold, accept the crown, done. Trophy progress across save slots is shared, so this costs about ten minutes, not a full replay.",
          "**The community angle:** Steam users report that once accepted, the crown stays on your character through the rest of the campaign — though some players report it vanishing after certain story beats. A Playstack team member (liv) confirmed on the official forums that adding a way to reclaim lost cosmetics is logged as a suggestion, but no recovery method exists as of this writing. Skipping Marigold by mistake means the crown is simply gone until a fresh save.",
        ],
      },
      {
        heading: "No, You Still Can't Win — beat the unbeatable tutorial boss",
        paragraphs: [
          "In the prologue the game hands you a scripted-losing fight against the **Tar Golem**. Reducing it to zero health instead skips the loss cutscene and awards the trophy instantly, regardless of your own HP bar.",
          "This is a strict one-shot window: the Tar Golem never respawns — not later in the same run, not in NG+, not anywhere else in the world. If you skip past the tutorial without winning the duel, the trophy waits for a brand-new save file.",
          "**Backup saves work here**: PlayStation Plus cloud users can upload a save right before the Bone Gate (the checkpoint just before the fight), then reload if the attempt goes badly. On PC, exiting to the main menu and continuing also resets you to just before the Bone Gate — useful if you take a big mid-fight hit but don't want to abandon the attempt.",
        ],
      },
      {
        heading: "Peter's Perfect Parry — the hardest clean-up item",
        paragraphs: [
          "The hardest entry on the missable list. During the second phase of **The Nameless Captive** fight (Prisoners' Domain), at half health he performs a fast 7-hit spinning head attack; sometime afterward he uses a slower, opposite-direction variant — again seven consecutive spins, but reversed. You must Perfect Guard all seven hits of that reversed variant, with the Untarnished Seal equipped in your seal slot.",
          "Two failure modes exist: dying before you ever see the reversed spin (it is random within phase two), or killing him too fast between phase-two attempts. He only spawns once per playthrough, so prepare properly rather than winging it.",
          "**Recommended approach:** unlock Untarnished Seal first if you don't have it, practice the regular 7-spin timing on earlier phase-two attempts, and bring a tanky shell like Eredrim so a single mistimed guard doesn't end the run. The seal requirement is mandatory — guards without it do not count even if the parry itself lands.",
        ],
      },
      {
        heading: "What is NOT missable — the long safety net",
        paragraphs: [
          "Most big-ticket collectibles survive past credits, thanks to post-game free-roam:",
        ],
        bullets: [
          "**All 49 Beacons** — none missable; anything left cleanses fine during free-roam before entering NG+ (see the [fast travel guide](/fast-travel/)).",
          "**All shells** — each can still be claimed after the final boss.",
          "**All weapons, sidearms, and Tarstones** — including reward drops from optional encounters such as Vatra's Seal from the Tar Golem past Disciple's Grotto (a different Golem from the tutorial's) and the Arbiter's Prize from the Great Arbiter of Flesh near Widow's Overlook.",
          "**The Voltaic Crown** — worth naming because some lists miscategorize it: per the Fextralife wiki it is not festival or prologue content at all, but a sidearm lightning Tarstone dropped by Vrago, the Solikar Champion of the Abandoned Shrine in Prisoners' Domain. That places it squarely in the weapons-and-Tarstones category above, covered by the same free-roam window.",
          "**Egon's Feed Me trophy** — found southwest of Castigator's Keep Beacon; cumulative giving totals matter, not a specific amount, so there is no wrong order.",
          "**The Mango secret (Ascension)** — reachable any time; no expiry on Mether's Flesh or the cup interaction.",
        ],
      },
      {
        heading: "The one caveat: Bring My Ova Back to Me",
        paragraphs: [
          "Technically not flagged missable, but currently bugged in a way that makes it behave like one: per PowerPyx's patch-era warning, **Bring My Ova Back to Me (all 196 Ova) can currently only be earned in your first playthrough** due to a bug introduced in a recent patch. Enter NG+ without finishing your Ova cleanup and the trophy may be unobtainable on that save until a fix lands.",
          "Practical rule until this changes: treat all 196 Ova as first-playthrough-only content. Collect them before entering NG+, using the endgame free-roam window if needed; the Beacon-to-Ova mapping lives in the [fast travel guide](/fast-travel/), and boss-by-boss payouts sit in the [boss guide](/bosses/).",
        ],
      },
      {
        heading: "What carries over vs what starts fresh in New Game+",
        paragraphs: [
          "Understanding carryover determines whether 'missing' something actually matters:",
        ],
        bullets: [
          "**Carries into NG+:** your level, gear, tarstone infusions, shells already unlocked, Beacons already cleansed, and trophy state for anything collected.",
          "**Does not carry:** anything tied specifically to the prologue — Marigold's crown offer and the Tar Golem tutorial fight simply do not re-run in subsequent playthroughs.",
          "**Seeking the Past nuance:** memories must be VIEWED via the Shellkeeper bond menu (not merely unlocked), and community reports flag it as buggy in NG+ — budget extra partial runs if a memory refuses to count.",
        ],
      },
      {
        heading: "Can I still get missed content after beating the game?",
        paragraphs: [
          "Mostly yes. After the final boss, a free-roam window opens before you commit to NG+: any Beacon still corrupted can be cleansed there, and every shell, weapon, sidearm, and Tarstone remains collectible. What free-roam cannot restore is anything tied to the prologue itself — Marigold's crown offer and the Tar Golem tutorial duel do not re-run — plus the bugged all-Ova trophy if you have already entered NG+. Anything genuinely lost costs only a fresh save slot, since trophy progress is shared across saves."
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro:
        "Open questions we could not pin down from fetched sources this week:",
      items: [
        "Exact trigger (if any) behind player reports of the flower crown disappearing mid-campaign",
        "Whether the Bring My Ova NG+ bug has been fixed by Balance Patch 1 — PowerPyx's warning predates it and has not visibly changed",
      ],
    },
    related: [
      { label: "Fast Travel & Beacons", href: "/fast-travel/" },
      { label: "Boss Guide", href: "/bosses/" },
      { label: "Walkthrough", href: "/walkthrough/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
    ],
    sources: [
      {
        name: "PowerPyx — Mortal Shell 2 Trophy Guide & Roadmap",
        url: "https://www.powerpyx.com/mortal-shell-2-trophy-guide-roadmap/",
      },
      {
        name: "Steam Discussions — Flower crown thread (Playstack forum)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/582805931178549011/",
      },
      {
        name: "Fextralife Wiki — Voltaic Crown",
        url: "https://mortalshell2.wiki.fextralife.com/Voltaic_Crown",
      },
      {
        name: "GameTrek — Mortal Shell 2 Trophies",
        url: "https://gmtreks.com/mortal-shell-2/page/01M098T01E73M7CEN55T07PWFY",
      },
    ],
    reviewedOn: "August 27, 2026",
    datePublished: "2026-08-27",
  },
];

export function getGuidePage(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}
