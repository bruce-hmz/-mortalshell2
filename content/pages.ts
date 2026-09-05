export type FactBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  anchor?: string;
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
    slug: "achievements/seeking-the-past",
    metaTitle: "Mortal Shell 2 Seeking the Past Trophy: All 40 Shell Memories (1.9% Rarity)",
    metaDescription:
      "How to earn Mortal Shell 2's rarest trophy: the 40 Shell Memories explained — the must-watch rule, the post-Week-1 Glimpse economy that rewrote the budget, and the known 38/40 counter stall.",
    cardBlurb:
      "The rarest trophy's verification chain: must-watch memories, the post-patch Glimpse budget, and the 38/40 stall workaround.",
    h1: "Mortal Shell 2 Seeking the Past — Every Shell Memory, Watched Properly",
    eyebrow: "Achievements",
    intro: [
      "Seeking the Past is Mortal Shell II's rarest achievement — **1.9%** of Steam players hold it, against a 1.3% rate for the platinum itself. Its official condition is just 'Watch all Shell Memories': **40 memories, five per shell, across all eight shells**. What makes it rare is not difficulty but logistics — unlocking every memory requires raising all eight shells to maximum Bond Tier 4, which costs **27 Glimpse per shell and 216 Glimpse in total** — launch-era math that priced the trophy at two complete runs plus a partial third (NG++, per PowerPyx's roadmap). The Week 1 Update (August 29, 2026) removed that ceiling: **Glimpses are no longer finite**, so a single thorough playthrough can now fund all eight bond trees.",
      "This page is the verification chain: how the gating works, why watching counts but unlocking alone does not, how the Glimpse budget reads after the economy change, and what to do when the tracker stalls — a failure mode PowerPyx commenters were still reporting fresh this week. For where this sits in the full 53-trophy plan, see the [achievement strategy guide](/achievements-guide/) and the [full achievements list](/achievements/).",
    ],
    blocks: [
      {
        anchor: "gating",
        heading: "How the 40 memories are gated",
        paragraphs: [
          "Memories are bought, not found. Each shell's bond tree tops out at Tier 4, and all five of that shell's memories become available there. The Shellkeeper (Sester Genessa's bond menu) is where Glimpse converts into bond levels — and where each memory is then viewed. PowerPyx's trophy entry prices it exactly: 27 Glimpse raises one shell to the maximum, so the full eight-shell sweep costs 216. A single playthrough used to fund roughly three shells to max — which is why every launch-era guide priced this trophy across multiple runs; since the Week 1 Update removed the Glimpse cap, the full sweep is fundable in one.",
        ],
      },
      {
        anchor: "must-watch",
        heading: "The must-VIEW rule almost every guide fumbles",
        paragraphs: [
          "The official wording of both trophies uses the same verb deliberately: Haunting Times (68.1%) is 'Watch your first Shell Memory' and Seeking the Past is 'Watch all Shell Memories'. Unlocking a memory by reaching Bond Tier 4 is a separate act from selecting it and watching it in the bond menu. Every shell forces one memory on you during its natural bond progression, which teaches the wrong lesson — the other four sit in the menu waiting, and they do not tick until watched.",
          "The practical habit: after topping a shell to Tier 4, stay in the bond menu and play all five memories back-to-back, then confirm the shell shows no unwatched marker before moving on. Players who treat the menu as a checklist per shell are the ones who reach 40/40 cleanly; the tracker-stall reports below are one more reason not to leave views for later.",
        ],
      },
      {
        anchor: "budget",
        heading: "The Glimpse budget after the economy change",
        paragraphs: [
          "PowerPyx's roadmap names three income lines per playthrough, and all three still work — they just matter less now that the ceiling is gone:",
        ],
        bullets: [
          "**Cleanse every Beacon again** — Glimpse rewards repeat each cycle, which makes the Beacon network your primary income in runs two and three (the cleansing habit doubles as the So Fresh, So Clean trophy; routing lives in the [fast travel guide](/fast-travel/)).",
          "**Grab the loose Glimpse caches near Beacons** — a handful sits within a short walk of the network; easy to miss in run one when inventory pressure feels low.",
          "**Visit every original shell location at night** — worth an extra **8 Glimpse per shell location per playthrough** when the time-of-day is shifted; with eight locations that is a meaningful flat bonus each cycle, and the [night mode guide](/night-mode/) covers how the toggle works.",
          "**Use the Week 1 income lines** — the update added sources launch players never had: **Glimpse Stones** that wear down as you defeat enemies and break into Glimpses, additional Glimpse rewards in the gloom siphon, and Merrick's expanded stock.",
          "The old budget — one run funding about three maxed shells (81 of the 216 total), two full runs plus a partial third to finish — described the pre-patch economy. With Glimpses no longer finite, all eight bond trees fit inside a single thorough playthrough; the multi-run structure is now the fallback for a save that is already deep in NG+, not the plan.",
        ],
      },
      {
        anchor: "bug",
        heading: "The 38/40 stall — a known, still-open bug",
        paragraphs: [
          "The tracker can wedge below the finish line. PowerPyx's comment section carried two first-hand reports in the last week alone: one player (August 23) stuck at exactly **38/40** with every memory watched and no exclamation markers left anywhere, and another (August 27) reporting the counter simply not going up. No workaround has been confirmed by developers, and the commenters' stopgap matches the community consensus: **relaunch the game and re-watch the shell's bond-menu entries** — one commenter's suggested remedy, and a restart is what another player believed popped theirs.",
          "Status against the current patches: neither Playstack's Balance Patch 1 notes (August 20) nor the Week 1 Update notes (August 29) contain a memory, bond, or trophy fix — the Week 1 changelog's only Glimpse lines are the economy un-cap and the new respec item. Until a patch note says otherwise, treat the stall as live, keep your save backed up before triggering NG+ boundaries, and do not delete a save that stalls — reboot and re-watch first. The [patch notes page](/patch-notes/) tracks when that changes.",
        ],
      },
      {
        anchor: "checklist",
        heading: "The checklist, post-cap",
        paragraphs: [
          "With the Glimpse ceiling gone, the whole trophy collapses into one disciplined run — or one disciplined continuation of the run you're already in:",
        ],
        bullets: [
          "**Fresh run:** max each shell's bond tree as your build touches it — the un-capped economy funds all eight; watch all five memories of each the moment it hits Tier 4. Bank the night-pickup habit early — shell locations at night, 8 Glimpse each.",
          "**Already mid-save (pre-patch economy):** nothing is lost. Cleanse Beacons again, sweep the caches, and lean on the new income — Glimpse Stones, gloom-siphon rewards, Merrick's stock — to finish the remaining trees in this run instead of waiting for NG+.",
          "**If the counter stalls:** reboot and re-watch before anything drastic — see the bug section above.",
        ],
      },
      {
        anchor: "faq",
        heading: "FAQ",
        paragraphs: [],
        bullets: [
          "**Does this still take multiple playthroughs?** Not by economy. The Week 1 Update (August 29) made Glimpses non-finite, so all eight shells can be maxed in a single save; PowerPyx's two-runs-plus-NG++ roadmap describes the pre-patch economy. The must-watch discipline is unchanged.",
          "**Is the trophy still bugged?** The stall reports are recent (August 23 and 27) and no patch has addressed them — the Week 1 Update notes contain no memory or trophy fix either. Relaunch-and-rewatch is the only community-verified stopgap.",
          "**Does using Mether's Severance (the new respec) affect memory tracking?** Unverified. The Week 1 notes describe the Glimpse refund but say nothing about whether a shell's watched memories stay counted after its bond is severed. Until that is confirmed, watch a shell's five memories before severing its bond rather than after.",
          "**Do memory views carry over between NG+ cycles?** Unverified either way in accessible sources — which is exactly why the checklist has you watch each shell's five memories the moment it maxes, instead of deferring views to a final sweep.",
          "**Does this trophy share a root cause with the Ova tracker bug?** Unknown. Both are count-to-complete trackers misbehaving (the Ova one currently locks its trophy out of NG+ entirely — see the [Ova locations page](/ova-locations/)), but no developer statement connects them.",
        ],
      },
    ],
    pending: {
      heading: "Open verification items",
      intro: "What this page genuinely does not know yet:",
      items: [
      "Whether the 38/40 stall has a confirmed developer fix or root cause — no statement in PowerPyx's roadmap or comments, and neither Balance Patch 1 nor the Week 1 Update notes address it",
      "Whether a Shell's watched memories stay counted after its bond is severed with Mether's Severance — the Week 1 notes are silent; the FAQ advises watching before severing until confirmed",
      "Exact Glimpse payouts per Beacon cleanse per cycle — PowerPyx describes the income lines qualitatively; per-Beacon numbers have not been published",
    ],
    },
    related: [
      { label: "Achievements List", href: "/achievements/" },
      { label: "Achievement Strategy Guide", href: "/achievements-guide/" },
      { label: "Farming Guide", href: "/farming-guide/" },
      { label: "Night Mode", href: "/night-mode/" },
      { label: "Patch Notes", href: "/patch-notes/" },
    ],
    sources: [
      {
        name: "PowerPyx — Mortal Shell 2 Trophy Guide & Roadmap (trophy entry, roadmap, and August 2026 comments)",
        url: "https://www.powerpyx.com/mortal-shell-2-trophy-guide-roadmap/",
      },
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
      {
        name: "Balance Patch 1 — Mortal Shell II Steam announcement (Playstack, August 20, 2026)",
        url: "https://steamcommunity.com/app/2584270/discussions/",
      },
    ],
    reviewedOn: "September 2, 2026",
    datePublished: "2026-08-28",
  },

  {
    slug: "achievements",
    metaTitle: "Mortal Shell 2 Achievements List: All 53 Trophies (Bronze/Silver/Gold/Platinum)",
    metaDescription:
      "The complete Mortal Shell 2 achievement list: all 53 trophies with official descriptions, rarity tiers, and missable/glitched flags — story, bosses, shells, weapons, collectibles, and secrets.",
    cardBlurb:
      "Every trophy in one place: official descriptions, rarity tiers, and the three you can lock yourself out of.",
    heroImage: {
      src: "/img/site-4.jpg",
      alt: "Mortal Shell II key art with a fallen knight before a monumental door",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Achievements — The Full List of 53",
    eyebrow: "Achievements",
    intro: [
      "Every Mortal Shell II achievement in one list: the official name and unlock condition for all **53 trophies** — 41 Bronze, 10 Silver, 1 Gold, and 1 Platinum — transcribed from PowerPyx's full trophy guide (August 2026) and grouped by what they ask of you. Three are missable, one is glitched as of Balance Patch 1, and one used to demand New Game++ until the Week 1 Update un-capped the Glimpse economy; each carries its flag inline so you can scan the list before it costs you. One trap sits outside the numbered list: the **Slayer Seal disables Steam achievements** while equipped — see the flags section below.",
      "This page is the reference list. For the order to earn them in — the rare-first route, the Glimpse math behind Seeking the Past, and the efficient three-playthrough plan — use the [achievement strategy guide](/achievements-guide/) alongside it. Rarity percentages cited there were checked against Steam's official global stats on August 27, 2026; the descriptions here follow the official unlock wording.",
    ],
    blocks: [
      {
        anchor: "story",
        heading: "Story and tutorial (5 achievements)",
        paragraphs: [
          "Unmissable except where flagged — the first hour of the game carries two of the three missables in the entire list."
        ],
        bullets: [
          "**1. Mid Summer?** (Bronze — *MISSABLE*) — Enter the Festival. Accept Marigold's flower crown during the walk to your first Shell; refusing or skipping it ends the chance for that playthrough.",
          "**2. Home at Last** (Bronze) — Reach Marrowkeep. Story-related; awarded after the tutorial.",
          "**3. Haunting Times** (Bronze) — Watch your first Shell Memory. Awarded the first time you view one from the Shellkeeper bond menu.",
          "**43. No, You Still Can't Win** (Bronze — *MISSABLE*) — Take the Tar Golem to his minimum health in the tutorial fight instead of losing on script. He never reappears in NG+ or later runs.",
          "**37. Peter's Perfect Parry** (Bronze — *MISSABLE*) — Perfect Guard each one of The Nameless Captive's headspins using the Untarnished Seal. Setup before the fight; he spawns once per run."
        ],
      },
      {
        anchor: "bosses",
        heading: "Boss defeat trophies (10 achievements)",
        paragraphs: [
          "One Bronze per major boss, all story-gated and unmissable. Strategy for each fight lives in the [bosses guide](/bosses/)."
        ],
        bullets: [
          "**19. Ultimate Karen** — Defeat Magdalena, the Lady of the Woods.",
          "**20. Meat's Back on the Menu, Boys!** — Defeat The Lost Child.",
          "**21. Headcase** — Defeat The Nameless Captive.",
          "**22. Nightmare Fuel** — Defeat Sir Isaac, the Scholar-Prince.",
          "**23. Something in the deep…** — Defeat Hexapod.",
          "**24. Praise him!** — Defeat The Monolith.",
          "**25. It burnssssssssss** — Defeat Droeg, the Conquerer.",
          "**26. Giga Chad** — Defeat Malborn Offspring.",
          "**27. Lost Your Head** — Defeat Orrem, the Reclaimed.",
          "**28. It's over now?** — Defeat Zmey, the Unbidden."
        ],
      },
      {
        anchor: "shells",
        heading: "Shell unlock trophies (8 achievements)",
        paragraphs: [
          "Each Bronze pops the moment you claim that shell's body. Where all eight wait is mapped in the [shells guide](/shells/)."
        ],
        bullets: [
          "**29. Sester** — Unlock Sester Genessa.",
          "**30. Forever Alone?** — Unlock Tiel.",
          "**31. Down with the Thickness** — Unlock Lazlo.",
          "**32. Vengeance is Mine** — Unlock Eredrim.",
          "**33. The Alchemist** — Unlock Sariel.",
          "**34. Arrival** — Unlock Proxima.",
          "**35. My Brether** — Unlock Smert.",
          "**36. Heartless** — Unlock Gragu."
        ],
      },
      {
        anchor: "weapons",
        heading: "Weapon unlock trophies (14 achievements)",
        paragraphs: [
          "Six Bronze cover the melee roster, six cover named sidearms, and one Silver sits on top of the full set. Location tables for every weapon and sidearm are in the [weapons guide](/weapons/) and the [sidearms guide](/sidearms/)."
        ],
        bullets: [
          "**4. Deep Cuts** (Bronze) — Unlock Axe and Dagger.",
          "**5. Big Boi** (Bronze) — Unlock Great Martyr's Blade.",
          "**6. Just the Tip** (Bronze) — Unlock Black Needle.",
          "**7. Like Clockwork** (Bronze) — Unlock the Clockwork Scythe.",
          "**8. Stop – Hammer Time** (Bronze) — Unlock the Obsidian Hammer.",
          "**9. Dual Wielding** (Bronze) — Unlock the Axatana.",
          "**10. Cut You Down to Size** (Bronze) — Unlock the Veteran's Battle Axe.",
          "**11. Spiked** (Bronze) — Unlock the Caged Hystrix.",
          "**12. Old Painless** (Bronze) — Unlock the Triarch Repeater.",
          "**13. Beautiful Baby** (Bronze) — Unlock the Cursed Child.",
          "**14. Speared** (Bronze) — Unlock the Ballistazooka.",
          "**15. Chop Chop** (Bronze) — Unlock the Salvaged Trebuchaxe.",
          "**16. Old School** (Bronze) — Unlock the Forgotten Crossbow.",
          "**48. Lord of War** (Silver) — Unlock all Weapons. The count follows the collectible roster — eight melee and eight sidearms — excluding the Iconoclast starter and the prologue's Hallowed Sword."
        ],
      },
      {
        anchor: "collectibles",
        heading: "Collectibles and completion (11 achievements)",
        paragraphs: [
          "The heavy Silver tier. Everything here survives past the credits thanks to post-game free roam — except the glitched one, which must be finished in your first playthrough until a patch lifts the restriction."
        ],
        bullets: [
          "**17. Bring My Ova Back to Me** (Silver — *GLITCHED*) — Collect all of the Ova. PowerPyx reports it currently pops only in a first playthrough; the route and bug status are tracked on the [Ova locations page](/ova-locations/).",
          "**38. Stoned** (Silver) — Find all Tarstones.",
          "**39. Decked Out** (Silver) — Reach the maximum bonding tier for a Shell at the Shellkeeper (27 Glimpse for one shell).",
          "**40. Over 9000** (Silver) — Max out a Weapon at the Tarforge (+16; the upgrade math is in the [weapons guide](/weapons/)).",
          "**42. So Fresh, So Clean** (Bronze) — Cleanse All Beacons. Beacon mechanics and routing are covered in the [fast travel guide](/fast-travel/).",
          "**44. Sat Nav** (Silver) — Find all Map Fragments.",
          "**45. Seeking the Past** (Silver) — Watch all Shell Memories. All 40 across eight shells; launch-era Glimpse scarcity made this the rarest trophy in the game, but the Week 1 Update un-capped the economy, so a single-run finish is now plausible.",
          "**46. Shell Seeker** (Silver) — Unlock all Shells.",
          "**47. Guns. Lots of Guns** (Silver) — Unlock all Sidearms.",
          "**49. Ascension** (Bronze) — Discover the secret of the Mango. A hidden quest chain — the [side quests guide](/side-quests/) walks the NPC chains it ties into.",
          "**50. This is Not an Achievement** (Gold) — Complete Mortal Shell II. Awarded for finishing the game's ending."
        ],
      },
      {
        anchor: "secrets",
        heading: "Quests and secrets (3 achievements)",
        paragraphs: [
          "The oddballs that don't fit anywhere else — none are missable, but all are easy to never encounter."
        ],
        bullets: [
          "**18. Heavy Metal** (Silver) — Play all Lute Tracks in the Game. The Troubadour's Lute and its tracks are covered in the [sidearms guide](/sidearms/) — post-patch, its doubled damage makes this grind build-relevant too.",
          "**41. Feed Me** (Bronze) — Cause Egon to pass away. Part of the frog-feeding chain in the [side quests guide](/side-quests/).",
          "**51. Bag Holder** (Bronze) — 'You've mastered nothing and this is your reward. Pretty pointless, eh?' Complete the Baghead interaction chain southwest of Gloomshade Grove Beacon (through the Bone Gates to Desolate Peak): sit with him, keep answering Yes, refuse to give him items, and sit once more to trigger the joke ending. Reload after the credits — you respawn at the nearby Beacon."
        ],
      },
      {
        anchor: "platinum",
        heading: "Platinum (1 achievement)",
        paragraphs: ["One trophy above it all:"],
        bullets: [
          "**52. No Lifer** (Platinum) — Unlock All Trophies for Mortal Shell II. No DLC required."
        ],
      },
      {
        anchor: "flags",
        heading: "Reading the flags — what actually bites",
        paragraphs: [
          "The list above is deliberately calm: 49 of 53 trophies are simply earned by playing thoroughly, and the endgame free-roam window rescues almost every collectible. Only four entries need forward planning, and each links to a page that plans it for you: the three missables are prologue-and-first-boss work ([missable content checklist](/missable-content/)), the glitched Ova trophy is a first-playthrough-only commitment until patched ([Ova locations](/ova-locations/)), and Seeking the Past is a Glimpse budget the Week 1 Update just made dramatically cheaper — a single-run finish is now plausible ([strategy guide](/achievements-guide/)).",
          "One warning that isn't a trophy flag at all: **the Slayer Seal disables achievements**. The game's optional 'easy mode' seal locks Steam achievements for that save — developers confirmed the behavior and told Rock Paper Shotgun they 'didn't intend to lock everybody out', and nothing in the Week 1 Update notes (August 29) changes it. If the seal is on and you care about trophies, switch it off before investing hours.",
        ],
      },
    ],
    pending: {
      heading: "List maintenance notes",
      intro: "Kept honest about what this page can and cannot claim:",
      items: [
        "Descriptions are the official unlock wording as transcribed by PowerPyx (August 2026); Steam's own achievements page was unreachable at last review, so global rarity percentages are cited on the strategy guide from its August 27 verification instead",
        "Whether Balance Patch 1, the Week 1 Update, or later hotfixes lifted the Bring My Ova Back to Me first-playthrough restriction — neither patch's notes mention it; tracked on the patch notes page",
        "Whether a future patch re-enables achievements on saves that used the Slayer Seal — dev comments say the lockout wasn't intended, but no reversal has shipped",
        "The numbered order above follows PowerPyx's table; Steam's list order may differ cosmetically but the set of 53 is confirmed"
      ],
    },
    related: [
      { label: "Achievement Strategy Guide", href: "/achievements-guide/" },
      { label: "Missable Content", href: "/missable-content/" },
      { label: "Ova Locations", href: "/ova-locations/" },
      { label: "Patch Notes", href: "/patch-notes/" }
    ],
    sources: [
      {
        name: "PowerPyx — Mortal Shell 2 Trophy Guide & Roadmap",
        url: "https://www.powerpyx.com/mortal-shell-2-trophy-guide-roadmap/"
      },
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 devs on the Slayer Seal achievement lockout (August 24, 2026)",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-slayer-seal-achievements"
      },
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852"
      }
    ],
    reviewedOn: "September 2, 2026",
    datePublished: "2026-08-28",
  },

  {
    slug: "patch-notes",
    metaTitle: "Mortal Shell 2 Patch Notes: Week 1 Update & Balance Patch 1",
    metaDescription:
      "Mortal Shell 2 update history: the Week 1 Update in full (shell respec, economy un-cap, new day-only Beacons, boss fixes), Balance Patch 1 annotated, and the crash-hotfix timeline.",
    cardBlurb:
      "Every update in one place: the Week 1 Update, Balance Patch 1 changes, crash hotfixes, and what ships next.",
    heroImage: {
      src: "/img/site-7.jpg",
      alt: "Mortal Shell II key art showing a knight before a monumental ruined structure",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Patch Notes & Update History",
    eyebrow: "Updates",
    intro: [
      "This page tracks Mortal Shell II's post-launch updates in one place: what each patch changed, verified against Playstack's own announcements, and what each change means for the builds and routes on this site. Update logs go stale fast — every entry here links the guide pages it affects, so the advice you are reading stays tied to the patch it was tested on.",
      "Verified against Playstack's official Week 1 Update announcement (August 29, 2026) and the Balance Patch 1 announcement thread (August 20, 2026); the September 1 PC hotfix entry below is the official note text as quoted verbatim by players in the Steam discussions (the developer posted it on Reddit and Discord, not Steam News). Last reviewed September 4, 2026.",
    ],
    blocks: [
      {
        anchor: "week-1-update",
        heading: "Week 1 Update — August 29, 2026",
        paragraphs: [
          "One week after full launch, Playstack shipped its first major post-launch patch — and it is the largest update so far: new items, an economy un-cap, a shell respec, new Beacons, a full riposte overhaul, and sweeping boss and weapon reworks. The complete published list, section by section:",
        ],
        bullets: [
          "**Economy un-cap** — \"Glimpses and Tarcores are no longer finite resources, allowing all shells and Tarstones to be upgraded in a single playthrough\"; saves that leveled Tarstones pre-patch find a compensatory cache of Tarcores in their inventory",
          "**Shell respec: Mether's Severance** — a new item given to [Zhirelle, the shell keeper](/shells/): in exchange she severs your bond with a Shell, resetting it and refunding every spent Glimpse; Tarstones and Mether's Severance can also be purchased from Merrick and restock as you progress — this reshapes the [trophy budgeting math](/achievements-guide/)",
          "**New items** — Fragile Tarstones (a new Tarstone class that breaks when durability runs out, yielding a tarcore; not unique, found multiple times per playthrough), Glimpse Stone (wears down as you defeat enemies, then breaks into Glimpses), and Egon's Stone (revive at a dungeon's entrance; when it breaks it prevents Gloom loss for that death); Justicar's Stone and Gloombound Stone are now Fragile with increased passives and on-break effects, and existing copies were converted",
          "**New Beacons** — new Beacons have appeared \"throughout Fainweald and Mammon\", but are **only active during the day**; the notes publish no count, and Mini-Beacons no longer award a Glimpse — what this does to the travel network and the [49-Beacon catalog](/fast-travel/)",
          "**Weapons** — the Great Martyr's Blade damage buff \"didn't actually make it in the last patch\" and shipped here instead, \"even stronger\"; Obsidian Hammer received a full balance pass and \"hits substantially harder\"; heavy weapons in general got a poise and damage pass; the Salvaged Trebuchaxe's Tarred Fragment was redesigned (officially \"simultaneously overpowered and broken\"); Axatana's ability now grants invulnerability frames and inflicts Fragile stacks; Weltcap is stronger in both active and passive forms — the [weapons guide](/weapons/) is re-anchored accordingly",
          "**Riposte overhaul** — player riposte damage now scales with enemy health, so executions keep up in late game, NG+, and [Night Mode](/night-mode/); invulnerability windows last through the end of the animation; many recoveries end sooner; a calculation rewrite fixed ripostes applying twice or not at all",
          "**Bosses** — Zmey's tail grab no longer takes both Shell and Harbinger from 100-0 (\"In night mode it's ON, though\") and his ring waves align to the ground; the Monolith's double-damage bug is fixed with readable laser/spin timings; Hexapod's arena is smaller with its beacon lit by default and its splash damage raised; the Warden and Urrig are reworked with new ice attacks, and Urrig's unparryable spin now gives a proper warning; the Lost Child no longer launches anyone across the arena — updated notes per boss in the [boss guide](/bosses/)",
          "**Shells** — Smert can destroy projectiles while in permanent fight stance; Eredrim's Shoulder Bash no longer permanently stows your weapon; Proxima's hook-shot and Biosampler fixes; Genesa's dashes fixed including corrupted — [best build pairings](/best-build/) shift with the heavy-weapon buffs",
          "**Merrick, chests, and rewards** — Merrick's stock expands (Glimpse Stones, Egon's Stones, and Tarcores once you have gathered enough Ova); the Collector now carries Tarcores; dungeon reward chests across the first two regions were revised, Mammon's reward placement updated, and missing arena-dungeon rewards restored; the gloom siphon gained additional rewards including Glimpses — route implications tracked in the [farming guide](/farming-guide/)",
          "**Softlocks and saves** — an interrupted save can no longer destroy your save file; Vatra's Temple's permanent lockout is fixed (a prior [missable-content warning](/missable-content/), now resolved); softlocks fixed in Lazlo's Rekindle, the post-Gragu barkeep talk, Hilga's Cauldron, and declining a Shell-unlock cutscene",
          "**Stuck spots** — the closed castle gates, the opening-region church, the sunken-village house, the Castigator's Keep wall, the snow approach to Droeg's arena, and the hole in Eredrim's castle jail are all fixed, with collision holes patched across the first two regions — the [stuck-spot FAQ](/tips/) gains patch statuses",
          "**Performance and options** — fewer enemies in the busiest areas; the shader-compilation hitch now happens in the menu; frame generation is reworked (applies after a reload, no longer activates before the world loads, NVIDIA frame gen on a much wider card range); a new Geometry Budgets graphics option; a crash diagnostics option — details for the [performance guide](/performance-fix/)",
        ],
      },
      {
        anchor: "what-week-1-changed",
        heading: "What the Week 1 Update changes for players",
        paragraphs: [
          "The economy un-cap is the headline for completionists: maxing every shell's bond and every Tarstone in one playthrough is no longer a two-run project, and Mether's Severance makes build experimentation refundable instead of permanent. Anything on this site that budgeted Glimpse as a scarce resource is being re-checked against the new math, starting with the [achievements guide](/achievements-guide/) and the [farming routes](/farming-guide/).",
          "The day-only Beacons give the world clock its first mechanical bite — a cleanse run through Fainweald or Mammon now pays attention to daylight. And if you were avoiding the final boss over the tail-grab one-shot: it is gone on standard difficulty, but [Night Mode](/night-mode/) keeps it on, exactly as the notes say.",
        ],
      },
      {
        anchor: "pc-hotfix-september",
        heading: "PC Hotfix — September 1, 2026 (~1 GB)",
        paragraphs: [
          "Around September 1, 2026 — while the [Week 1 Update](#week-1-update) was still going through console certification, per the developer's own note — Cold Symmetry shipped a PC-only hotfix (a ~1 GB download by player reports) with no announcement on Steam News. The official fix list went up on the developer's Reddit and Discord channels instead, and the text below is that official note as quoted verbatim by players in the game's Steam discussions (two threads, identical wording, linked in the sources). Since the notes were scattered across three platforms, this page consolidates them:",
        ],
        bullets: [
          "**Devout and Pre-Order Shell Shades** not appearing for some players",
          "**World map** failing to open when playing with FSR",
          "**Citadel Annex giant spider** traversal",
          "**Certain enemies** not reacting to the player",
          "**Several collision areas**",
          "**Lens flare and Minibeacon** visual issues",
        ],
      },
      {
        anchor: "hotfix-not-cover",
        heading: "Did the September 1 PC hotfix fix frame generation, crashes, or saves?",
        paragraphs: [
          "No — the hotfix list contains no frame generation, freeze/crash, or save-file fixes, and players in the quote threads explicitly flagged that absence. It also does not touch the eel-type sidearm hitbox reports, which answers this page's own open question below: still no eel-specific fix. Those technical issues remain tracked, with workarounds and save-backup steps, in the [performance fix guide](/performance-fix/).",
        ],
      },
      {
        anchor: "balance-patch-1",
        heading: "Balance Patch 1 — August 20, 2026",
        paragraphs: [
          "Playstack's first balance patch (\"live on PC and coming to PlayStation 5 and Xbox Series shortly\") is the largest update so far, touching economy, enemies, bosses, weapons, seals, and Tarstones in one pass. The complete published list, section by section:",
        ],
        bullets: [
          "**Economy** — shell map locations now cost Gloom instead of Glimpse, with refunded Glimpses claimable in the Shell Keeper's alcove in Blackmarrow; enemy gold drops increased significantly, with enemies in Mammon dropping double gold; smelting at the Tarforge costs 75% less Gloom",
          "**Enemies & Bosses** — all beta enemies restored to their beta HP values, except the Caerinid spider in Magdelena's area, which stays post-launch (and does not respawn once defeated)",
          "**Boss nerfs** — The Lost Child: −10% base damage, −15% max health; Monolith: −19% base damage, −10% max health, plus attack retiming \"to be more fair\"",
          "**Enemy trims** — Cultist (mace) −21.1% max health; Caerinid spider −33.3%; Infested Stalker −52.4%; Rusted Knave (halberd) −20.8% max health with a hit-detection fix on its overhead strike",
          "**Weapons** — Great Martyr's Blade +20% attack damage; Troubadour's Lute +100% attack damage; Caged Hystrix and Triarch Repeater lose their minimum resolve requirements to fire; improved tracking for Axatana, Black Needle, and Clockwork Scythe light attacks",
          "**Seals** — Guard can now be used while walking",
          "**Tarstones** — Parasitic Stone, Grudge Stone, Clerik's Stone, and Squall Stone buffed; Bulwark Stone damage reduction increased significantly",
          "**Miscellaneous** — crash fixes, bug fixes, and performance updates",
        ],
      },
      {
        anchor: "what-patch-1-changed",
        heading: "What Balance Patch 1 changes for players",
        paragraphs: [
          "The patch reshuffles more than numbers. Builds shift toward the buffed lines — the Martyr's Blade Lightning setup widens its lead, and the Lute graduates from joke to genuine pick (its [Confusion effect](/sidearms/#all-eight-sidearms) plus doubled damage is a real package). The resolve-floor removal on Hystrix and Repeater changes boss-fight budgeting: you no longer starve defense to keep shooting.",
          "The economy lines matter for routes. Shell-location maps becoming a Gloom purchase refunds real Glimpse into the [shell bond grind](/achievements-guide/), Mammon's doubled gold supercharges the [Coin farming routes](/farming-guide/), and the 75% smelt discount makes mid-run weapon swapping cheap — which is also why the [best build pairings](/best-build/) now treat weapon swaps as a plan rather than a punishment.",
        ],
      },
      {
        anchor: "hotfixes",
        heading: "Pre-launch hotfixes (Advanced Access window)",
        paragraphs: [
          "Before Balance Patch 1, Playstack shipped crash-targeted fixes during the Advanced Access window: **Hotfix 1** addressed the frequent PC crashes reported in the August 17 early-play period (initially opt-in via the patch-preview beta branch, later rolled out to everyone), and a **Keyboard Bindings menu crash** received an official save-file workaround while a permanent fix was developed. The step-by-step fix instructions live in the [performance fix guide](/performance-fix/) — this page tracks the update timeline; that page carries the how-to.",
        ],
      },
      {
        anchor: "roadmap",
        heading: "What Playstack says ships next",
        paragraphs: [
          "In the Balance Patch 1 announcement, Playstack states: \"While we have a bigger patch in the works, which has to be thoroughly tested... Planned future updates will see extensions to popular game features such as Night Mode, Tarstones, PP Items, and more.\" Nothing in that line carries a date — treat it as directional. That \"bigger patch\" has since shipped as the [Week 1 Update](#week-1-update), documented above; the Night Mode / Tarstones / PP Item extensions it previews remain unshipped, and when they land their changes will be verified against the official notes the same way.",
        ],
      },
      {
        anchor: "patch-faq",
        heading: "Patch FAQ",
        paragraphs: [
          "**Do console players have Balance Patch 1 yet?** The patch went live on PC first; Playstack's announcement says it was \"coming to PlayStation 5 and Xbox Series shortly\". Check your platform's update history for the current rollout state.",
          "**Are the enemy nerfs retroactive to NG+?** The announcement phrases enemy changes as flat restorations to beta HP values, not difficulty-mode-specific multipliers — the beta-restoration line applies across the game, while the patch-preview language (\"live on PC and coming to PlayStation 5 and Xbox Series shortly\") is about platform rollout, not difficulty tiers.",
          "**Where are the official notes posted?** Usually the game's official Steam community hub — the Balance Patch 1 thread and the Week 1 Update announcement are linked in this page's sources. The September 1 PC hotfix is the exception so far: its fix list was posted on Reddit and Discord only, never as a Steam News entry, which is exactly why this page consolidates every update in one place. Console patch histories appear on each platform's official channels.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro: "Open questions on the update trail as of September 4, 2026:",
      items: [
        "Exact console rollout dates for the Week 1 Update (PC went live August 29; the developer's September 1 hotfix note says the Week 1 patch was still in certification for consoles at that date)",
        "Official count and locations of the Week 1 Update's new day-only Beacons — the notes name no number; player estimates say 10+",
        "Official Steam News entry for the September 1 PC hotfix — the fix list was posted on Reddit and Discord only; if Playstack publishes it as a Steam announcement, this page will link it",
      ],
    },
    related: [
      { label: "Performance Fix", href: "/performance-fix/" },
      { label: "Best Build", href: "/best-build/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Sidearms Guide", href: "/sidearms/" },
      { label: "Fast Travel", href: "/fast-travel/" },
      { label: "Farming Guide", href: "/farming-guide/" },
    ],
    sources: [
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
      {
        name: "Steam Discussions — “1 GB update?” thread carrying the official September 1 PC hotfix note text, as posted on the developer's Reddit/Discord (quoted verbatim, OP dated September 1, 2026)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681246928686311/",
      },
      {
        name: "Balance Patch 1 — Mortal Shell II Steam announcement (Playstack)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/",
      },
      {
        name: "Mortal Shell II Steam news hub (Playstack)",
        url: "https://store.steampowered.com/news/app/2584270",
      },
    ],
    reviewedOn: "September 4, 2026",
    datePublished: "2026-08-28",
  },
  {
    slug: "sidearms",
    metaTitle: "Mortal Shell 2 Sidearms: All 8 Ranged Weapons & Locations",
    metaDescription:
      "Every Mortal Shell 2 sidearm: how resolve-firing works, all 8 locations in progression order, the Balance Patch 1 resolve-floor removals, and the Lute's Confusion trick.",
    cardBlurb:
      "The offhand arsenal: all eight sidearms, their locations, and the patch changes that reshaped them.",
    heroImage: {
      src: "/img/site-3.jpg",
      alt: "Mortal Shell II key art: a hooded warrior in worn armor standing in a dark corrupted scene",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Sidearms",
    eyebrow: "Arsenal",
    intro: [
      "Sidearms are Mortal Shell II's offhand ranged weapons: eight collectible arms that fire on resolve instead of ammo, swap freely at any Beacon, and turn spare resolve into ranged pressure, utility, or plain panic buttons. This guide covers how the system works, every sidearm's location in progression order, and what Balance Patch 1 changed about the two most build-relevant picks.",
      "Fact-checked on August 28, 2026 against PowerPyx's sidearm locations guide, mortalshelldb's game-data bundle (re-parsed this session), and Playstack's official Balance Patch 1 announcement.",
    ],
    blocks: [
      {
        anchor: "how-sidearms-work",
        heading: "How sidearms work",
        paragraphs: [
          "Every sidearm discharge costs **resolve** — the same resource your parries and shell abilities run on — and ranged hits do not refill it the way melee aggression does. That makes the sidearm a budgeted tool rather than a second magazine: fire it when the spend buys something (a posture chunk, a distance-closer, a clutch heal-window), and let melee refill the tank. The resolve economy is explained step by step in our [weapons guide](/weapons/).",
          "Sidearms swap for free at any Beacon, so the offhand slot is loadout-flexible in a way melee weapons are not — melee swaps require a Tarforge smelt. Tarstones modify sidearm behavior the same as melee, and collecting all eight unlocks the Guns. Lots of Guns trophy discussed below.",
        ],
      },
      {
        anchor: "all-eight-sidearms",
        heading: "All 8 sidearms",
        paragraphs: [
          "The launch build's eight sidearms, with identities straight from the game's own item data (mortalshelldb's bundle, re-parsed this session):",
        ],
        bullets: [
          "**Naylshotte** — your prologue starter; the game's internal ID (ID_Sidearm_NailShotgun) marks it as a nail shotgun (some guides spell it Naylesshotte)",
          "**Forgotten Crossbow** — \"a surprisingly well-calibrated\" crossbow traded away by a desperate addict",
          "**Salvaged Trebuchaxe** — a siege arm that throws axes as projectiles",
          "**Troubadour's Lute** — the support pick: its in-game effect line reads *inflicts Confusion when used in combat*, and its flavor notes it \"soothes man and beast alike\"",
          "**Triarch Repeater** — otherworldly carved-bone repeater, the sustained-fire option",
          "**Ballistazooka** — heavy and unwieldy; \"scholars argue if the weapon was ever used in battle or just executions\"",
          "**Cursed Child** — a protective relic whose caretaker it desperately guards",
          "**Caged Hystrix** — a contraption that pierces the creature trapped inside, \"prompting a violent and often useful reaction\"",
        ],
      },
      {
        anchor: "locations",
        heading: "Where to find every sidearm",
        paragraphs: [
          "Locations below follow PowerPyx's progression order — roughly the sequence a normal playthrough surfaces them. None are missable: the whole roster stays collectible in free-roam after the final boss, before you enter New Game+.",
        ],
        bullets: [
          "**Naylshotte** — handed to you at the start of the prologue",
          "**Forgotten Crossbow** — Flooded Village dungeon, northwest of Blackridge Pass Beacon: use the arc mechanism to open the doorway, grab the Damp Key from a box in the underground village, and unlock the central building",
          "**Salvaged Trebuchaxe** — Ravaged Hideout dungeon, south of Gloomshade Grove Beacon (opens after the nearby Bloodcursed Lithopod); on a body in the final room",
          "**Troubadour's Lute** — on the stage inside the One Legged Wolf Tavern, southeast of the One Legged Wolf Beacon, left of the lute-playing man",
          "**Triarch Repeater** — Blackwell Cavern dungeon, north of Castigator's Keep Beacon's lower level; on the ground in the first lit area",
          "**Ballistazooka** — Sentry's Grave dungeon off Gate of Mammon Beacon (northwest stairs, indoor clockwise loop); drops from the Subjugated Guardian miniboss",
          "**Cursed Child** — Revered Beacon dungeon, from Sester's Gate Beacon: circle counterclockwise past the golden-light tower, strike the central pillar to stop the light, then claim it",
          "**Caged Hystrix** — Chamber of Becoming: after breaking all four of Sariel's reviving tombstones, the sidearm waits near the dungeon exit stairs",
        ],
      },
      {
        anchor: "patch-changes",
        heading: "Balance Patch 1: resolve floors removed, Lute doubled",
        paragraphs: [
          "The patch (August 20, 2026) made two sidearm lines materially better. The **Caged Hystrix and Triarch Repeater no longer have minimum resolve requirements to fire** — before the patch they held fire below a resolve threshold, which forced you to starve defense to shoot; now they fire at any resolve level, which changes long boss-fight budgeting entirely. And the **Troubadour's Lute gained +100% attack damage**, doubling its output — re-check it before dismissing it as a meme pick, because Confusion utility plus doubled damage is a real package. Full patch math lives in our [weapons guide](/weapons/).",
        ],
      },
      {
        anchor: "eel-hitbox-bug",
        heading: "The eel-hitbox bug, briefly",
        paragraphs: [
          "One known frustration: Steam threads and launch-window reviews report Repeater shots phasing through the heads of eel-type enemies — the projectile visibly connects but deals no damage. Until a patch note says otherwise, treat ranged hits on serpentine models as unreliable and switch to melee. The FAQ entry with sources lives in the [weapons guide](/weapons/).",
        ],
      },
      {
        anchor: "guns-lots-of-guns",
        heading: "Guns. Lots of Guns: the collection trophy",
        paragraphs: [
          "Collecting all eight sidearms unlocks **Guns. Lots of Guns** (each sidearm also has its own small trophy). Nothing expires and nothing is missable — you can finish the set in the post-final-boss free-roam window. Merrick in Marrow Keep sells map markers that reveal each hidden sidearm's approximate location, but per PowerPyx the maps are optional: if you would rather keep the Coin for Tarstones or the [night merchant's Glimpses](/night-mode/), every location above is findable unaided. The full trophy path is laid out in the [achievements guide](/achievements-guide/).",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro: "Open questions on sidearms as of the launch window:",
      items: [
        "Numeric damage, ammo, and resolve costs — no source publishes them",
        "Full Tarstone-fit matrix per sidearm",
        "Whether the eel-hitbox behavior has been fixed in any hotfix",
      ],
    },
    related: [
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Best Build", href: "/best-build/" },
      { label: "Achievements Guide", href: "/achievements-guide/" },
      { label: "Night Mode", href: "/night-mode/" },
    ],
    sources: [
      {
        name: "PowerPyx — Mortal Shell 2 All Sidearm Locations",
        url: "https://www.powerpyx.com/mortal-shell-2-all-sidearm-locations/",
      },
      {
        name: "mortalshelldb — game data bundle (sidearm objects)",
        url: "https://mortalshelldb.com/assets/index-q1tdAEgn.js",
      },
      {
        name: "Balance Patch 1 — Mortal Shell II Steam announcement",
        url: "https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/",
      },
    ],
    reviewedOn: "August 28, 2026",
    datePublished: "2026-08-28",
  },
  {
    slug: "night-mode",
    metaTitle: "Mortal Shell 2 Night Mode Guide: Bonus, Unlock & Rewards",
    metaDescription:
      "Mortal Shell 2 Night Mode explained: how to unlock it, Thestus's toggle at Marrow Keep, the +20% Gloom bonus, The Collector's night-only stock, and the gland quest it gates.",
    cardBlurb:
      "The opt-in night difficulty: +20% Gloom, the night merchant, and the gland quest it gates.",
    heroImage: {
      src: "/img/site-4.jpg",
      alt: "Mortal Shell II key art with a fallen knight before a monumental door",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Night Mode",
    eyebrow: "Endgame",
    intro: [
      "Night Mode is Mortal Shell II's opt-in difficulty layer: a toggle that turns the world to night, hardens the enemies already standing in it, and pays you for the trouble with better Gloom income and night-only content. This primer covers when it unlocks, what the bonus actually pays, and everything the dark currently gates.",
      "Fact-checked on " +
        LAST_REVIEWED +
        " against GamingBolt's Gloom farming guide, Game8's complete walkthrough, and Playstack's official Balance Patch 1 announcement thread.",
    ],
    blocks: [
      {
        anchor: "what-night-mode-is",
        heading: "What Night Mode is",
        paragraphs: [
          "Night Mode is not a main-menu difficulty setting. It is an in-world toggle: once unlocked, you set the time to night and the same world keeps its layout while its enemies hit harder and take more of your attention. GamingBolt frames the trade plainly — whether the mode is worth it comes down to your skill level, because the reward is a **20% boost to Gloom gains** and access to content that simply does not exist in daylight.",
          "If you are still dying to regular elite mobs, stay in daylight and run the Beacon loops in our [farming guide](/farming-guide/) first. Night Mode amplifies income you are already earning; it does not fix a struggling build.",
        ],
      },
      {
        anchor: "how-to-unlock",
        heading: "How to unlock and activate Night Mode",
        paragraphs: [
          "The gate is boss-shaped. In Game8's recommended route, defeating the **Great Arbiter of Flesh** — the optional Ritual Grounds boss — is the step immediately before Night Mode opens up, which is why most players first meet the night toggle in the mid-game rather than the opening hours.",
          "Once unlocked, activation runs through **Thestus at Marrow Keep**: talk to him to set the world to night (per GamingBolt), and the world stays nocturnal until you choose otherwise. Marrow Keep is already on your route for [Sester Genessa](/shells/#gragu-and-genessa), so the toggle is never out of the way.",
        ],
      },
      {
        anchor: "gloom-bonus",
        heading: "The +20% Gloom bonus, in practice",
        paragraphs: [
          "The headline reward is mechanical: **+20% Gloom on gains**, which makes every existing farm loop pay a fifth better for the same effort — GamingBolt calls this the most important effect the mode has. It pairs naturally with the **Gloombound Stone** Tarstone, whose four levels each raise the Gloom bonus from slain enemies; slot it before an intentional farming run and let the two bonuses pile onto the same kills.",
          "Practically, the bonus matters most in the level-up stretch between roughly 20 and 40, where Gloom requirements climb steeply and every Beacon reset loop's yield adds up. Our [farming guide](/farming-guide/) lists the loops; Night Mode is the multiplier you switch on once the loops themselves are muscle memory.",
        ],
      },
      {
        anchor: "night-only-content",
        heading: "What the night unlocks: merchant, glands, and Glimpse",
        paragraphs: [
          "**The Collector, the night merchant** — set the time to night and he appears near the **Abandoned Outpost Beacon** in the Outskirts of Mammon. The headline wares per Game8: **three Glimpses**, a **Blackmarrow Key**, and a stock of **Tarstones**. The Glimpses are the notable line item — they convert spare Coin into shell bond progress, which the [completion checklist](/missable-content/) leans on for the platinum math.",
          "**The Forbidden Tower gland quest** — in the Silent Steps region, the giant statue at the Forbidden Tower accepts an offering of **three different Glands** during night mode and grants the **Seedbearer's Scripture**, plus access to the locked tower holding the **Axatana**. The Scripture is a genuine boss-fight item: our [boss guide](/bosses/) recommends it for the Zmey, the Unbidden fight, where its on-hit Cosmic Disease cure also floors the boss for a free punish.",
          "**Night Glimpse pickups at shell locations** — visiting each original shell location at night once per playthrough is worth an extra **8 Glimpse** per location per cycle (a community-transcribed figure, not dev-confirmed). Across eight shells that is meaningful progress toward the 216-Glimpse total the [achievements guide](/achievements-guide/) breaks down.",
        ],
      },
      {
        anchor: "trophies",
        heading: "Does Night Mode affect trophies?",
        paragraphs: [
          "No achievement demands clearing a boss or the game under night specifically. But the toggle is **required for certain content** — the night-only Glimpse pickups above and the Forbidden Tower offering — so completion routes pass through the night even though no trophy tests your ability to survive it.",
        ],
      },
      {
        anchor: "roadmap",
        heading: "Playstack plans to extend Night Mode",
        paragraphs: [
          "The mode is early. In the official Balance Patch 1 announcement, Playstack states: \"Planned future updates will see extensions to popular game features such as Night Mode, Tarstones, PP Items, and more.\" Treat this page as a snapshot of launch-era Night Mode — when the promised extensions land, the new rewards and any changes to the unlock chain will be verified and folded in here.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro: "Open questions on Night Mode as of the launch window:",
      items: [
        "Exact night-time enemy stat multipliers (harder is confirmed; by how much is not)",
        "The Collector's full stock beyond the three headline wares",
        "Night Mode extensions promised in Playstack's post-launch roadmap",
      ],
    },
    related: [
      { label: "Farming Guide", href: "/farming-guide/" },
      { label: "Completion Checklist", href: "/missable-content/" },
      { label: "Achievements Guide", href: "/achievements-guide/" },
      { label: "Boss Guide", href: "/bosses/" },
    ],
    sources: [
      {
        name: "GamingBolt — Mortal Shell 2 Guide: Best Gloom Farming Spots",
        url: "https://gamingbolt.com/mortal-shell-2-guide-best-gloom-farming-spots-how-to-level-up-fast",
      },
      {
        name: "Game8 — Mortal Shell 2 Complete Walkthrough",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614504",
      },
      {
        name: "Balance Patch 1 — Mortal Shell II Steam announcement",
        url: "https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/",
      },
    ],
    reviewedOn: "August 27, 2026",
    datePublished: "2026-08-31",
  },
  {
    slug: "farming-guide",
    metaTitle: "Mortal Shell 2 Farming Guide: Gloom, Coin & Glimpse After Week 1 Update",
    metaDescription:
      "Where to farm Gloom, Coin and Glimpse in Mortal Shell 2 after the Week 1 Update: the un-capped Glimpse/Tarcore economy, the Sunken Village sheep loop, Mammon's doubled gold, where Ossinite actually drops, and the Tarforge math that decides what you actually need.",
    cardBlurb:
      "Three Beacon loops for Gloom, four methods for Coin, the Ossinite loop at Withered Shoals, and the Week 1 economy changes that decide how much you really need before grinding.",
    heroImage: {
      src: "/img/site-2.jpg",
      alt: "Mortal Shell II key art with a knight standing before a ruined bridge",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Farming Guide — Gloom, Coin & Glimpse After the Week 1 Update",
    eyebrow: "Economy",
    intro: [
      "Everything in Fallgrimm costs something: levels eat Gloom, weapons eat Coin and materials, and the Tarforge happily consumes both. Most launch-era farm routes were calibrated to the old economy — then Balance Patch 1 (August 20) cut Tarforge smelting costs by 75%, significantly raised gold drops, and made Mammon enemies pay double. The Week 1 Update (August 29) went further and broke the economy's central constraint: **Glimpses and Tarcores are no longer finite**. This page ranks the loops actually worth your time under the current numbers, plus what each currency buys so you know when to stop grinding.",
      "Loop data was verified on August 27, 2026 against GamingBolt's dedicated Gloom and Coin farming guides (both published post-launch on August 21), with Balance Patch 1 figures quoted from Playstack's official notes and the Week 1 economy changes quoted from Playstack's official Week 1 Update announcement (August 29, 2026; reviewed September 6, 2026). The Ossinite sourcing and the death-loss guidance were added September 6 from the wiki/Game8 materials documentation and current Steam forum reports. Loop mechanics tie back to how Beacon resting works — covered in the [fast travel guide](/fast-travel/) — and every currency sink is cross-referenced in our [weapons guide](/weapons/).",
    ],
    blocks: [
      {
        heading: "What the Week 1 Update changed about the economy",
        anchor: "week-1-economy",
        paragraphs: [
          "The Week 1 Update dismantled the scarcity model every launch guide (including this one) was built on. Per Playstack's official notes:",
        ],
        bullets: [
          "**Glimpses and Tarcores are no longer finite** — Playstack's own framing: this 'allow[s] all shells and Tarstones to be upgraded in a single playthrough.' Every 'save your Glimpse for the right shell' instinct is obsolete; spend freely.",
          "**Glimpse Stone** — a new item that wears down as you defeat enemies, then breaks into Glimpses: passive Glimpse income that simply did not exist at launch.",
          "**Fragile Tarstones** — the new breakable stone class yields a tarcore when it breaks, certain enemies now drop them, several dungeons reward them, and Merrick sells them. Tarstones in general now yield more tarcores when broken (saves that leveled Tarstones pre-patch found a compensatory cache in their inventory).",
          "**Merrick's stock expanded** — Glimpse Stones, Egon's Stones, and Tarcores once you have gathered enough Ova; Tarstones and Mether's Severance (the respec item) also restock there as you progress. The Collector now carries Tarcores as well.",
          "**Chests revised** — dungeon reward chests across the first two regions were revised, reward placement in Mammon updated, missing arena-dungeon rewards restored, and some world chests replaced with straightforward pickups.",
          "**Gloom siphon pays Glimpse now** — additional rewards including Glimpses were added to the siphon. The flip side: **mini-Beacons no longer award a Glimpse**.",
          "One exploit died with the patch: the Week 1 notes fixed 'an infinite Ossinite farm', so the top of the weapon-material ladder is back to honest farming.",
        ],
      },
      {
        heading: "What Balance Patch 1 changed about farming",
        paragraphs: [
          "Three patch lines reshape the grind. First, Tarforge smelting now costs **75% less Gloom** — Playstack's own note admits launch prices were 'set exorbitantly high' and the goal is switching weapons 'without the need to spend hours grinding through NG+ runs.' Second, gold drops were 'significantly increased' game-wide. Third, enemies in Mammon now drop **double gold**, which the patch notes say brings the gold economy in line with weapon crafting item discovery.",
          "The combined effect: mid-game Gloom pressure dropped sharply (smelting was the main late Gloom sink), while Coin pressure rose if you're pushing the Tarstone ladder. Practical translation: farm Gloom in Fainweald until your build settles, then move your Coin loop to Mammon where every kill pays twice.",
        ],
      },
      {
        heading: "Best Gloom farms (ranked by return per minute)",
        paragraphs: [
          "Gloom funds level-ups at any Beacon and the cheaper post-patch Tarforge smelts. GamingBolt ranks three loops; all rely on the same Beacon-rest reset mechanic that respawns regular enemies while bosses stay dead:",
        ],
        bullets: [
          "**Mushroom Village Gate Beacon — ~2,000 Gloom per 20-30 seconds (best in game).** Cross the nearest bridge right of the Beacon to a single elite, fire three Shotgun blasts loaded with an Emberseed Stone (level 2+ so Burn procs even on non-crits), collect the kill as burn finishes him, rest, repeat. GamingBolt calls this the highest-return-per-effort Gloom farm in the game so far. Requires the separate Mushroom Village *Gate* node — not the village's main Beacon — and a damage build that can carry the burst.",
          "**Sunken Village Beacon — just under 1,000 Gloom per ~60 seconds (best early game).** After killing the local boss, The Wandering Shepherd, the sheep pen behind the Beacon across the narrow bridge opens up. One strike per sheep, rest at the Beacon to reset, loop. The lowest-effort farm available once unlocked; stays worthwhile until level costs outpace its payout.",
          "**Widow's Overlook Beacon — ~200 Gloom per sub-minute loop (fallback).** Bear right off the Beacon, down the slope to the rundown structure on the left: five clustered ground enemies plus one flyer. Functional but tedious; most players outgrow it quickly. Keep it in reserve for the Coin notes below — the same loop serves double duty.",
        ],
      },
      {
        heading: "The emergency chest loop at the endgame",
        paragraphs: [
          "If you hit the final gate underleveled, Game8's walkthrough documents a farm inside The Hidden Nave: the opening section hides numerous Gloom chests behind a torch-revealed path. Open every chest, exit to the main menu, and you reload standing outside the Beacon with all collected Gloom still banked — repeat until satisfied, then offer Gloom at the door to reach Zmey. Menu-exit farming is slower per hour than the Beacon loops above but requires zero combat, works at any level, and scales with nothing but patience.",
        ],
      },
      {
        heading: "Best Coin farms (ranked by effort)",
        paragraphs: [
          "Coin pays vendors, map markers, and — the real sink — the Tarforge upgrade ladder. Four methods matter:",
        ],
        bullets: [
          "**Mammon Beacon loops — double gold, every kill.** The patch specifically doubled Mammon gold drops, making any dense enemy cluster near a Mammon-area Beacon the strongest per-kill Coin source. High Lord's Keep and the Deserted Slums both pack respawning humanoids close to their nodes — and per Game8, the Prisoner's Way fountain route pairs Brigand kills with a hidden-area bonus.",
          "**Gorf's questline — 8,000 Coin windfall.** Feeding the giant toad Weltcaps at Widow's Overlook pays Marsh Pearls per visit (GamingBolt counts four at 2,000 Coin each via Merrick). The fifth feeding flips to the Poisoned Dagger story item instead of currency, so don't expect an infinite pearl tap. One-time, but it funds early Tarforge work outright. Full steps in our [side quests guide](/side-quests/).",
          "**Proxima's Specimen collector — passive income on kills.** At Proxima's final bond tier the Specimen harvest procs often enough to matter: 100 Coin each at Merrick, stacked on top of whatever farming loop you're already running. Zero extra travel — the income rides along with combat you were doing anyway.",
          "**Widow's Overlook loop — low output, situational.** The same five-enemy cluster that makes a mediocre Gloom farm technically drops Coin, but GamingBolt notes only the humanoids pay out — skip the flyer. Use it only when you're already there for Gloom and don't want to travel.",
        ],
      },
      {
        heading: "Where to farm Ossinite (the top of the material ladder)",
        paragraphs: [
          "Ossinite is the high-tier Tarforge material every endgame weapon ask feeds on, and it's the one currency question the loops above don't answer — unlike Gloom or Coin, it doesn't fall out of every kill. Per the Fextralife wiki, the reliable source is **Withered Shoals**, the area past the Gate of Mammon (the gate out of Marrow's west/southwest side). The loop: fast travel to the **Ossinite Falls Beacon**, sweep the fixed spawn points around the falls, rest to reset, and run it again — the same Beacon-rest rhythm as the Gloom routes above. Our [weapons guide](/weapons/) has the full Tarforge cost table so you know exactly how many loops you need.",
          "Two caveats before you commit an evening. Game8's materials guide argues Ossinite may only drop **reliably in NG+**, since the dependable route wants the Muredean Actuator and other late progression — treat your first-playthrough Ossinite income as trickle, not flood. And skip the 'infinite Ossinite farm' videos still floating around YouTube: the Week 1 Update fixed exactly that exploit (see the economy block above), so the Beacon loop is the honest route.",
        ],
      },
      {
        heading: "Where the money actually goes",
        paragraphs: [
          "Grinding without a target wastes an evening. The honest accounting: the Tarforge materials ladder (Ventrium through Ossinite) plus its Coin bill up to +25 comes to roughly 185,650 Coin in total per our weapons guide, but almost nobody pays that in one playthrough — pick your carry weapon and fund just its tiers. Levels from Beacon Gloom scale steeply; GamingBolt's farming numbers matter most in the 20-40 stretch where the Sunken Village and Mushroom Village Gate loops live. And shell bond upgrades eat **Glimpse**, not Gloom — 27 per shell to max, per our achievement guide. Beacon cleanses used to be one of the only Glimpse sources; the Week 1 Update added several more (Glimpse Stones, siphon rewards, Merrick's stock) and removed the ceiling, so Glimpse is now a grind-by-choice, not a rationed currency.",
        ],
        bullets: [
          "**Gloom** — level-ups at any Beacon; cheaper post-patch Tarforge smelts",
          "**Coin** — vendor stock, map markers, and the Tarforge's material ladder",
          "**Glimpse** — shell bonds only (27 per shell); Beacon cleanses and night pickups, plus the Week 1 sources: Glimpse Stones, gloom-siphon rewards, and Merrick's stock",
          "**Ova** — Beacon-cleanse collectibles, never purchased; see the Ova locations page",
        ],
      },
      {
        heading: "Settings and Tarstones that pay for themselves",
        paragraphs: [
          "Two loadout choices compound every loop above. First, enable **Auto Pick Up Gold** in the settings — GamingBolt flags it as the single biggest anti-tedium toggle, eliminating the per-drop pouch chase entirely. Second, slot the right Tarstone before an intentional farm: **Gloombound Stone** boosts Gloom-per-kill (its four levels each add a few percentage points), while **Justiciar's Stone** does the same for Coin drops. Both matter enough that GamingBolt recommends equipping them at the start of any dedicated run rather than mid-loop — and note the Week 1 change: both stones are now **Fragile**, meaning they wear down and break, in exchange for increased passive effects and on-break bonuses. Treat them as consumables to re-acquire for dedicated sessions (enemies, dungeons, and Merrick all supply the fragile line) instead of permanent fixtures.",
          "Night Mode adds a **20% Gloom gain bonus** if your skills can carry the harder enemies — a late-game amplifier, not an early option. And one spending note: The Collector, the night merchant, still sells Tarstones and Glimpses near the Abandoned Outpost Beacon after dark, and now carries Tarcores as well — leftover Coin converts to bond progress or forge materials if you'd rather skip the grind.",
        ],
      },
      {
        heading: "Can you recover Gloom you lost when you die?",
        paragraphs: [
          "Partially — and the smart play is to never need the answer. When you die, your unbanked Gloom drops where you fell, and players have been learning the hard way that the pile doesn't always wait around: the latest report on the Steam forums describes losing **20,000+ Gloom twice** (a bridge jump, then an enemy kill), finding the dropped pile had vanished from the map entirely, and getting no working recovery method — shooting the floor and the sky included. Treat dropped Gloom as at-risk: spend it down at a Beacon before risky jumps and boss attempts instead of hauling a big pile around.",
          "The real fix arrived with the Week 1 Update: the **Egon's Stone**, a Fragile Tarstone that revives you at the dungeon entrance — and when it breaks, the death it covered costs you **no Gloom at all** (per Playstack's official notes). Merrick stocks them once you've gathered enough Ova, so carry one into any area that's been killing you. It's consumable insurance, not a permanent ward — which is exactly why it pairs well with the fragility economy above.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro:
        "Economy numbers shifted under two patches and some community figures haven't been re-tested publicly:",
      items: [
        "Whether Egon's 10,000-to-20,000 Gloom refund (Castigator's Keep) survives as a farm post-cap — KosGames reports the day-one patch capped the doubling sharply, and no retest has pinned the current ceiling",
        "Exact Glimpse payout per Beacon cleanse — totals vary by node and no source has published a complete table (the Week 1 Update added siphon Glimpse but published no numbers)",
        "Whether Mammon's doubled gold stacks with the Justiciar's Stone bonus additively or multiplicatively",
        "Hidden Nave chest Gloom amounts per chest — Game8 confirms the menu-reset method but not the per-chest payout",
        "Whether dropped-on-death Gloom can vanish permanently — reported repeatedly on the Steam forums with no confirmed recovery method (carry an Egon's Stone meanwhile)",
      ],
    },
    related: [
      { label: "Fast Travel Guide", href: "/fast-travel/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Side Quests", href: "/side-quests/" },
      { label: "Achievement Guide", href: "/achievements-guide/" },
      { label: "Patch Notes", href: "/patch-notes/" },
    ],
    sources: [
      {
        name: "GamingBolt — Mortal Shell 2 Guide: Best Gloom Farming Spots",
        url: "https://gamingbolt.com/mortal-shell-2-guide-best-gloom-farming-spots-how-to-level-up-fast",
      },
      {
        name: "GamingBolt — Mortal Shell 2 Guide: Best Coin Farming Methods",
        url: "https://gamingbolt.com/mortal-shell-2-guide-best-coin-farming-methods-how-to-get-gold-fast",
      },
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
      {
        name: "Balance Patch 1 — Patch Notes (Playstack, official Steam announcement thread)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/",
      },
      {
        name: "Game8 — Mortal Shell 2 Complete Walkthrough",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614504",
      },
      {
        name: "Fextralife Wiki — Withered Shoals (Ossinite source area)",
        url: "https://mortalshell2.wiki.fextralife.com/Withered_Shoals",
      },
      {
        name: "Game8 — Mortal Shell 2 Upgrade Materials (Ossinite NG+ caveat)",
        url: "https://game8.co/games/Mortal-Shell-2/archives/617742",
      },
      {
        name: "Steam Discussions — 'Lost Gloom' (dropped-on-death Gloom vanishing)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681298840628348/",
      },
    ],
    reviewedOn: "September 6, 2026",
    datePublished: "2026-08-29",
  },
  {
    slug: "side-quests",
    metaTitle: "Mortal Shell 2 Side Quests: Every NPC Line Explained",
    metaDescription:
      "Every Mortal Shell 2 side quest explained: Gorf & Hilga's five Marsh Pearls, the Grisha Pup's costly rescue, Vlas's Coin of Mammon trail, Egon's Gloom-doubling ritual, Baghead's joke ending, and unlocking Sester Genessa as the ninth shell.",
    cardBlurb:
      "A giant lovesick frog, a cult that worships an empty sack, and seven more optional chains worth dropping everything for — walked start to finish.",
    heroImage: {
      src: "/img/site-3.jpg",
      alt: "Mortal Shell II key art showing a hooded warrior amid desolate ruins",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Side Quests — Every NPC Chain Explained",
    eyebrow: "Quests",
    intro: [
      "Mortal Shell II keeps its world hostile but its heart weirdly soft: tucked behind Beacons across Fallgrimm are a lovesick toad the size of a chapel, a banker begging to be made rich before he dies, and a cult that worships an empty sack. This guide walks every major side quest we could verify end-to-end, with the rewards, the easy mistakes, and the permanent consequences called out at each fork.",
      "Every step below was transcribed and cross-checked on August 27, 2026 against Rock Paper Shotgun's dedicated chain guides, Destructoid's and KosGames' NPC compendiums, GameRant's Vlas walkthrough, GamesRadar's Genessa unlock guide, and PowerPyx's trophy roadmap. Where the sources disagree, the disagreement is stated rather than smoothed over — and the whole page plugs into our [completion checklist](/missable-content/) so chasing flavor never costs you a trophy.",
    ],
    blocks: [
      {
        heading: "Quest list at a glance",
        paragraphs: [
          "Eight chains reward stepping off the critical path across Fainweald, Mammon, and Castigator's Keep. Two of them feed trophies directly; the rest pay in gear, currency, or stories that hit harder than they should:",
        ],
        bullets: [
          "**Gorf & Hilga (Widow's Overlook)** — the longest chain: swamp mushroom medicine becomes a love story, and Marsh Pearls pile up at nearly every step",
          "**Grisha Pup (Shrine of Trials)** — free a caged beast cub and pay for it with an entire hunting camp; short, brutal, one-time-only",
          "**Vlas (Road to Absolution → Lonesome Spire)** — rescue a broken-down merchant and reunite him with his cat, collecting Coin of Mammon along the way",
          "**Egon (Castigator's Keep)** — grant a dying creature's final request and he repays ten thousand Gloom with twenty thousand; ties to the Feed Me trophy",
          "**Baghead (Desolate Peak)** — say yes to everything, hand over nothing, and trigger a joke ending with its own trophy",
          "**Sester Genessa (Revenant Graves)** — clear the Censer dungeon to unlock the game's ninth shell, obtainable no other way",
          "**Gragu (Fallgrimm tavern)** — fetch the Heart of Vatra from the Temple of Vara's altar while the temple statues fight back",
          "**The Mango sanctuary** — the hidden chain behind Ascension, kept on its own page: see the [achievement guide](/achievements-guide/) for that puzzle",
        ],
      },
      {
        heading: "Gorf & Hilga — the love story at Widow's Overlook",
        paragraphs: [
          "Just off the path toward the Trial obelisk near the Widow's Overlook Beacon, a truly enormous toad named Gorf lies visibly ill in a rocky crevice. Talking to him starts a multi-visit saga that braids together with a second thread on the other side of the map: in Mushroom Village east of the area's bridge, a brute named Grom has caged Hilga — a fellow amphibian, and evidently the love of Gorf's large life — after killing her pet frog Harwald. Drinking from Grom's bubbling cauldron emboldens you to push her subplot forward before the two paths converge.",
          "Rock Paper Shotgun's full sequence takes roughly nine visits. Early steps ask only for Weltcaps, the red marsh mushrooms growing along the low ground near the overlook — feed him two and he burps up Marsh Pearls as gratitude. As Hilga's rescue progresses, brigand raiding parties start ambushing the road between the village and the crevice; their bodies (and lootable camps) accumulate right alongside the romance. Once she finally joins Gorf, though, his condition turns: the pearls stop coming, and instead a Poisoned Dagger juts from his side. Hilga explains that Common Moonshine — the swill brewed in every brigand camp — is the only antidote.",
          "Deliver a bottle to the suffering pair and the scene resolves warmly: Gorf is revealed as the legendary Great Frógga (“technically a toad,” Hilga concedes — “very handsome, but very foolish”), the poison recedes, and the epilogue finds Hilga transformed into a giant amphibian herself, the two of them curled around four named baby toads. Summoned with the Troubadour's Lute, the whole family dances. Run every branch cleanly and RPS counts **five Marsh Pearls** in pocket by the credits — most paid incrementally along the way, not handed over at the end.",
        ],
      },
      {
        heading: "Grisha Pup — kindness with collateral damage",
        paragraphs: [
          "Head west from the Mushroom Village Beacon and keep going until the ground rises toward the Shrine of Trials: a hunter camp occupies the approach, with a Grisha pup pacing inside a cage at its center. Speak to the lead hunter at the table and his shop unlocks — and Destructoid recommends draining it **before** anything else, buying the Cage Key (**250 Glimpse**) along with the Grisha Remnant and three Common Moonshine while he still has pulse and inventory.",
          "Open the cell and the pup quietly gives you a Sheephead Totem, no violence required. Rest at a Beacon and return, though, and the scene has rewritten itself: every hunter lies slaughtered and the pup stands vigil over its dead parent — including, possibly, the man you just shopped from. It stays calm toward you. A last conversation yields **one Glimpse and one Ventrium**, and then the Grisha vanish from the region entirely.",
          "One warning comes with a split verdict. KosGames states that freeing the pup gets the lead hunter killed outright — cost you an eventual re-stock point if you wanted one — while Destructoid presents the massacre as inevitable once any key turns. Until someone tests leaving the cell shut through a full rest cycle, treat the vendor as mortal on every timeline and spend his stock first.",
        ],
      },
      {
        heading: "Vlas — the merchant, his cat, and two Coins of Mammon",
        paragraphs: [
          "South of the Outskirts of Mammon Beacon, at the roadside spot Destructoid calls the Road to Absolution, Vlas bleeds quietly beside his wrecked cart — reachable most easily by dropping from the bridge above. He's alive but distraught: his cat Mutton fled the crash, and finding her falls to you. Check the cage ahead of his position before wandering off; a **Coin of Mammon** sits inside it, cashable no matter how the rest of the chain goes.",
          "Rest and talk until his dialogue escalates: Mutton has been carried off to Lonesome Spire, reached by riding the lift west of the Gate of Mammon Beacon. The spire belongs to brigands — and unlike ordinary bandits these can't simply be killed, per GameRant, so infiltration replaces combat. Near the broken wooden structure past the lift lies the aptly named Unremarkable Key, and in a cage deeper in camp sits Vlas himself. Deliver the key and father-cat reunion follows.",
          "The chain closes back at Marrow Keep, where Vlas and Mutton relocate to the corridor outside Merrick's shop; speaking with him there grants a **second Coin of Mammon** per Destructoid's count. One economic footnote matters more than it sounds: the Lonesome Spire merchant disappears once the camp's story completes, so buy anything you'll ever want from his stall before handing over that key.",
        ],
      },
      {
        heading: "Egon — doubling your Gloom at death's door",
        paragraphs: [
          "Castigator's Keep hides the game's strangest transaction in its central tower, southwest of the main Beacon: Egon, a pitiable creature who begs for Gloom as tribute and rewards each gift by lingering another day. Per PowerPyx, contributions accrue cumulatively — and once they cross **10,000 Gloom**, he expires on the spot and refunds **20,000**, unlocking the Feed Me trophy (currently at **20.5%** on Steam). Generosity has rarely compounded faster.",
        ],
        bullets: [
          "PowerPyx's figures: give cumulatively 10,000 Gloom total; receive double back, 20,000 at completion",
          "KosGames disputes the arithmetic — early builds doubled your entire carry, and a day-one patch capped the mechanic hard; small test donations first are advised before dumping savings",
          "Feed Me (20.5%) pops on his death; nothing here affects the story or blocks other content",
        ],
      },
      {
        heading: "Baghead — the sack, the sect, and a joke ending",
        paragraphs: [
          "Desolate Peak, southwest of the Gloomshade Grove Beacon through the Bone Gates (traversal portals from Citadel of Penance and Prophet's Rest both lead there too), hosts the least demanding congregation in Fallgrimm: robed cultists seated in a semicircle around Baghead, a figure whose headwear explains his name and little else. Accept the invitation to sit, listen to his questions, and follow one rule above all others — agree constantly, concede nothing material.",
          "PowerPyx's roadmap lays out the exact script: sit down, answer Yes throughout, refuse to hand over any of the odd trinkets scattered around the peak, sit again, talk again, keep agreeing. Destructoid adds the mechanical detail — one item he covets is a Special Moonshine from the Illusionist's Cache entrance, and surrendering it earns only scripted refusal. Holding nothing back (literally: give him nothing at every prompt) triggers a full joke-ending cutscene and the **Bag Holder trophy** at **23.5%** rarity. You can skip the credits immediately, reload back at Desolate Peak, and keep playing with progress intact — nothing locks, nothing resets, and the worst outcome of wasting fifteen minutes is having seen something memorable.",
        ],
      },
      {
        heading: "Sester Genessa — earning the ninth shell",
        paragraphs: [
          "Genessa doesn't roam a landmark the way the eight habitable shells do. From the Outskirts of Mammon Beacon, head southeast through the middle Bone Gate, cross the gap traversal creates, and climb toward the Revenant Graves — an arena haunted by ghostly red apparitions and dominated by an enormous **Sester's Censer**. Touch it and the environment dissolves into a dungeon built inside the artifact itself, with Sester Secundus waiting at the bottom.",
          "GamesRadar calls Secundus comfortably beatable mid-progression: stay mobile, respect her wide cleave arcs, and capitalize on recovery windows after heavy swings. Winning releases the Censer into your inventory. Carry it home to Genessa's seat in Marrow Keep and hand it over — she becomes the game's **ninth shell**, permanently, and notably does *not* join the rotation at Zhirelle's chamber: swapping into her always requires returning to her own arena first.",
          "Unlocking her also opens the sparring trials at the keep, which award the parry-focused Infinite Seal — and GamesRadar points out bonus bond expansions plus a backup-safe method for preserving progress at Genessa's corner of the elevator room. That seal alone makes the detour worthwhile; if Sester Secundus herself is the obstacle, the [bosses guide](/bosses/) maps her attack rhythm in detail.",
        ],
      },
      {
        heading: "Threads without a walkthrough",
        paragraphs: [
          "Two further loops matter mostly for completeness rather than strategy. Gragu's tavern chain sends you west to the Temple of Vara, where plucking the Heart of Vatra from the altar wakes the building's statue guardians — fight down and out, deliver the heart back, and witness a memory cutscene; Destructoid confirms it but flags no unique reward. And Grom's cauldron back in Mushroom Village is drinkable repeatedly with zero effect on the player — community consensus treats it as set dressing, not a hidden buff, so don't burn rests farming it.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro:
        "NPC chains have loose ends most compendiums smooth over — these questions stayed open as of verification day:",
      items: [
        "Whether sparing the lead Grisha hunter is even possible — KosGames says releasing the pup kills him and his shop outright, while Destructoid implies the massacre occurs regardless once you rest",
        "Marsh Pearl maximum: RPS documents five obtainable without skipping steps; whether alternate visit orders squeeze out additional pearls hasn't been independently tested",
        "Egon's exact doubling ceiling after the day-one cap — PowerPyx cites flat 10,000/20,000 economics while KosGames insists patched limits make amounts variable",
        "Whether completing Egon's chain at all interacts with endgame free-roam — i.e., if he's dead permanently after the Siphon, or respawns per cycle like the rest of the keep",
      ],
    },
    related: [
      { label: "Missable Content", href: "/missable-content/" },
      { label: "Boss Guide", href: "/bosses/" },
      { label: "Ova Locations", href: "/ova-locations/" },
      { label: "Achievement Guide", href: "/achievements-guide/" },
    ],
    sources: [
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 Gorf questline",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-gorf-questline",
      },
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 Hilga questline",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-hilga-questline",
      },
      {
        name: "DualShockers — Mortal Shell 2 Gorf and Hilga quest",
        url: "https://www.dualshockers.com/mortal-shell-2-how-to-complete-gorf-and-hilgas-quest/",
      },
      {
        name: "Destructoid — All NPC quests in Mortal Shell 2 and how to complete them",
        url: "https://www.destructoid.com/all-npc-quests-in-mortal-shell-2-and-how-to-complete-them/",
      },
      {
        name: "GameRant — Mortal Shell 2 Vlas questline walkthrough",
        url: "https://gamerant.com/mortal-shell-2-vlas-questline-walkthrough-where-to-find-key-cage-free/",
      },
      {
        name: "GamesRadar — How to get the Mortal Shell 2 Genessa Shell",
        url: "https://www.gamesradar.com/games/rpg/mortal-shell-2-genessa-unlock/",
      },
      {
        name: "PowerPyx — Mortal Shell 2 Trophy Guide & Roadmap",
        url: "https://www.powerpyx.com/mortal-shell-2-trophy-guide-roadmap/",
      },
      {
        name: "KosGames — Mortal Shell 2 Complete NPC Quest Guide",
        url: "https://kosgames.com/mortal-shell-2-complete-npc-quest-guide-57279/",
      },
    ],
    reviewedOn: "August 27, 2026",
    datePublished: "2026-08-28",
  },
  {
    slug: "achievements-guide",
    metaTitle: "Mortal Shell 2 Achievement Guide: Rare Ones First (53 Total)",
    metaDescription:
      "A rare-first Mortal Shell 2 achievement guide: Seeking the Past's must-VIEW memory rule and NG++ requirement, the three missables, Lord of War's roster count, and Steam rarity data for every trophy.",
    cardBlurb:
      "The 53-trophy roadmap ordered by risk: what to secure early, what to leave for free-roam, and the one chain that needs NG++.",
    heroImage: {
      src: "/img/site-4.jpg",
      alt: "Mortal Shell II key art with a fallen knight before a monumental door",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Achievement Guide — Rare Ones First",
    eyebrow: "Achievements",
    intro: [
      "Mortal Shell II's 53-achievement list is friendlier than most soulslikes — no no-hit runs, no difficulty modifiers, and a post-game free-roam window that rescues almost every collectible. But three things still punish the unprepared: exactly three achievements are missable, the single rarest one (Seeking the Past, **1.9%** of players per Steam) is a long Glimpse grind — dramatically shorter since the Week 1 Update un-capped the economy — and the Slayer Seal, the game's built-in easy mode, silently disables achievements while equipped.",
      "This guide orders the list by risk rather than by unlock percentage. Every figure below was checked against Steam's official global achievement stats on August 27, 2026, cross-referenced with PowerPyx's full trophy roadmap; the Week 1 economy and Slayer Seal notes were verified against official sources on September 2, 2026, the Baghead NG+ trap was added September 3, 2026 from Steam bug reports, and the Finish the Fight kill-window quirk was added September 5, 2026 from the Steam bug board. Need the plain list instead? The [full achievements list](/achievements/) has every trophy's official description on one page.",
    ],
    blocks: [
      {
        heading: "The numbers at a glance (Steam official stats)",
        paragraphs: [
          "All 53 achievements are offline; there is no multiplayer or difficulty gating. Steam's global stats show the platinum-tier completion rate at just **1.3%** (No Lifer), with a long middle band of story and collectible unlocks between 15% and 40%. The full risk map:",
        ],
        bullets: [
          "**3 missable:** Mid Summer? (83.2% — high rate because most players accept naturally), No You Still Can't Win (13.0%), Peter's Perfect Parry (4.2%)",
          "**1 glitched:** Bring My Ova Back to Me (15.7%) — currently earnable only in a first playthrough; see its section below",
          "**Glimpse grind:** Seeking the Past (1.9%, Watch all Shell Memories) — priced at two runs plus NG++ by launch-era guides, but the Week 1 Update made Glimpse non-finite, so a single-run finish is now plausible",
          "**Achievement lockout:** the Slayer Seal — the optional 'easy mode' — disables Steam achievements while equipped (developer-confirmed; see the FAQ below)",
          "**1 NG+ trap:** Bag Holder (23.5%) — carrying Baghead's Special Moonshine into NG+ blocks his quest chain, and the game has no item-drop (see the FAQ below)",
          "**Post-game safe:** everything else, including all shells (17.5% Shell Seeker), weapons (18.8% Lord of War), sidearms (17.0% Guns. Lots of Guns), Tarstones (6.0% Stoned), Beacons (7.8% So Fresh, So Clean), and Map Fragments (19.0% Sat Nav)",
        ],
      },
      {
        heading: "Seeking the Past (1.9%) — the rarest trophy, explained properly",
        paragraphs: [
          "Seeking the Past requires watching all 40 Shell Memories — five per shell across all eight shells. The rule almost every generic guide gets wrong: memories are unlocked by spending Glimpse at the Shellkeeper, but unlocking alone does not count. Each one must be selected and **viewed from the Shellkeeper bond menu**, even though every shell forces you through one memory during its natural bond progression. The very first memory has its own easier trophy (Haunting Times, 68.1%), which is where most players discover the distinction.",
          "The Glimpse economy used to decide how many runs this took. Raising one shell to maximum Bond Tier 4 costs **27 Glimpse**; all eight shells cost a cumulative **216 Glimpse**, and a launch-era playthrough reliably funded only about three maxed shells — which is where the two-full-runs-plus-a-partial-third (NG++) roadmap came from. The Week 1 Update (August 29, 2026) removed the ceiling: **Glimpses are no longer finite**, so all eight bond trees fit inside one thorough playthrough, with new income lines on top — **Glimpse Stones** that wear down as you defeat enemies and break into Glimpses, additional Glimpse in the gloom siphon, and Merrick's expanded stock. The per-run income habits still speed things up: cleanse every Beacon, grab the handful of loose Glimpse caches near Beacons, and visit each original shell location at night once per playthrough for an extra **8 Glimpse** each.",
          "Known bug behavior as of August 2026: PowerPyx commenters and Steam discussions report the counter stalling at 38/40 with no unwatched memories left, and one player saw it pop after restarting the game mid-dungeon. Developers are reportedly aware. Nothing in the Balance Patch 1 or Week 1 Update notes we could verify addresses it — if your tracker wedges below 40/40 after viewing everything, reboot the game first, then finish that shell's bond menu entry again before starting a fresh run.",
        ],
      },
      {
        heading: "The three missables — secure them in your first hour",
        paragraphs: [
          "None of the three are hard; they are only easy to walk past. All details live in our [missable content checklist](/missable-content/) — the short version:",
        ],
        bullets: [
          "**Mid Summer? (83.2%)** — accept Marigold's flower crown during the prologue walk. The offer never re-runs in NG+, so skipping it costs a fresh save slot (~10 minutes) if missed.",
          "**No You Still Can't Win (13.0%)** — reduce the tutorial Tar Golem to zero health instead of losing the scripted fight. He never reappears in any later playthrough.",
          "**Peter's Perfect Parry (4.2%)** — Perfect Guard every hit of The Nameless Captive's reversed second-phase head-spin while wearing the Untarnished Seal. Because he spawns once per run, set up the seal before the fight rather than trying to backfill it.",
        ],
      },
      {
        heading: "Lord of War counts weapons — but which ones?",
        paragraphs: [
          "Lord of War (18.8%) asks you to 'Unlock all Weapons', and the useful nuance is in that word *weapons*: the count follows the game's own collectible roster of **eight melee weapons and eight sidearms**, tracked through their dedicated inventory screens. Iconoclast (your starting weapon) and the tutorial Hallowed Sword are excluded from the tally — the Hallowed Sword does not even persist past the prologue. Merrick in Marrow Keep sells map markers that reveal any still-hidden locations, and nothing here expires: the whole roster stays collectible through the endgame free-roam window.",
          "Full location tables for both halves of the arsenal — including the Coin-and-material upgrade ladder feeding Over 9000 (+16 max) — are maintained in the [weapons guide](/weapons/).",
        ],
      },
      {
        heading: "Bring My Ova Back to Me (15.7%) — the glitched one",
        paragraphs: [
          "Collecting all 196 Ova should be a straightforward Beacon-sweeping task (the [Ova locations page](/ova-locations/) maps the route), but a recent patch introduced a bug: PowerPyx reports the achievement can currently pop only in a first playthrough. Crossing into NG+ with unfinished cleanup risks a permanently dead save for this entry until a fix lands.",
          "Sooner or later the developers will patch this — at which point the restriction presumably lifts and normal NG+ collection resumes. Until an update note says otherwise, treat every post-boss 26-Ova Beacon payout as first-run-critical and do not send Ova through the Marrow Keep Siphon's ending prompt without a finished count.",
        ],
      },
      {
        heading: "Is the Finish the Fight achievement bugged?",
        paragraphs: [
          "Finish the Fight — the kill achievement for the final boss — can fail to unlock even when the boss goes down, and the Steam bug-board thread on it (15+ replies) explains why: the kill only registers if the boss's health reaches **exactly zero before the death cutscene takes over**. When the boss starts its ultimate attack at low health, the cutscene can swallow the kill and the achievement never fires — which is why players are split on whether to call it bugged or just brutally timed.",
          "The repeatable workaround players confirm: hold your **ranged charges in reserve for the finishing blow**. A ranged hit that drops the health bar to zero counts even while the boss is mid-air in its ultimate, so saving sidearm ammo for the kill window sidesteps the cutscene problem entirely. If a cutscene does lock in without the achievement popping, players report force-closing the game (Alt+F4) and reloading from before the attempt rather than letting the save advance. The fight itself, start to finish, is mapped in the [boss guide](/bosses/).",
        ],
      },
      {
        heading: "Efficient order of operations",
        paragraphs: [
          "One disciplined pass covers nearly everything; only Seeking the Past legitimately needs repeats.",
        ],
        bullets: [
          "**Playthrough 1:** secure the three missables in the prologue and Prisoners' Domain; cleanse all 49 Beacons while collecting Ova as you go (serves So Fresh So Clean at 7.8%, Stoned at 6.0%, Sat Nav at 19.0%, Bring My Ova at 15.7%); find Mether's Flesh and complete the Mango cup ritual for Ascension (16.7%); max one shell's bond (Decked Out, 37.1%); push one weapon to +16 (Over 9000, 24.7%). Endgame free-roam mops up anything left before you trigger NG+ via the Siphon.",
          "**Playthroughs 2-3 (now optional):** since the Week 1 Update removed the Glimpse cap, the remaining shells' bond trees and memory views can all happen inside run one — these cycles are only for a save that chose to defer them. If you do run them: re-cleanse Beacons each cycle, night-pickup the shell locations' bonus Glimpse (8 per cycle), and view every memory in the bond menus. Both Shell Seeker (17.5%) and Guns. Lots of Guns (17.0%) fall somewhere along the way if the roster survived run one.",
        ],
      },
      {
        heading: "FAQ quick hits",
        paragraphs: [
          "**Does Night (increased difficulty mode) affect trophies?** No — the in-game Night toggle raises enemy pressure but is required for certain content like night-only Glimpse pickups, and no achievement demands clearing bosses under it specifically.",
          "**Does the Slayer Seal affect achievements?** Yes — equipping it disables Steam achievements for that save. Developers confirmed the lockout and told Rock Paper Shotgun they 'didn't intend to lock everybody out'; nothing in the Week 1 Update notes (August 29) changes it. If the seal is on and you care about the platinum, switch it off before pushing deeper.",
          "**Does the Baghead chain break in NG+?** It can. Players who kept the Special Moonshine from their first playthrough report that Baghead's quest will not continue in NG+ while the bottle sits in the inventory — and the game has no drop function, so Bag Holder (23.5%) locks on that save. Return the moonshine to its place (or finish his chain) during the endgame free-roam window before you commit to NG+; community reports also tie one of the Week 1 questline cosmetics to the same lockout. The full entry lives in the [missable content guide](/missable-content/).",
          "**Is Ascension the 196-Ova trophy?** No — they are separate entries. Ascension (16.7%, Discover the secret of the Mango) ties to the hidden Mango sanctuary quest; Bring My Ova Back to Me (15.7%) is the Ova-completion one. Community confusion between the two is common because their rates sit close together.",
          "**How long is a full completion?** PowerPyx estimates **40-60 hours** at a 6/10 difficulty rating, with roughly 85% of that being one thorough first playthrough plus two lighter Glimpse-farming cycles.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro:
        "This hub ships anchored to official Steam stats and PowerPyx's roadmap — open about what isn't pinned down yet:",
      items: [
        "Whether Balance Patch 1, the Week 1 Update, or later hotfixes lifted the Bring My Ova Back to Me first-playthrough bug — neither patch's notes mention it",
        "Exact Glimpse-per-cycle totals beyond Beacon cleanse rewards (night-bonus 8-per-location figure is community-transcribed, not dev-confirmed)",
        "Whether a patch will re-enable achievements on saves that used the Slayer Seal — dev comments say the lockout wasn't intended, but no reversal has shipped",
        "Whether the Seeking the Past 38/40 stall shares a root cause with the Bring My Ova tracker bug",
      ],
    },
    related: [
      { label: "Ova Locations", href: "/ova-locations/" },
      { label: "Missable Content", href: "/missable-content/" },
      { label: "Shells Guide", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Patch Notes", href: "/patch-notes/" },
    ],
    sources: [
      {
        name: "Steam Community — Mortal Shell II Global Achievements",
        url: "https://steamcommunity.com/stats/2584270/achievements",
      },
      {
        name: "Steam Discussions (bug board) — \"Finish the Fight\" achievement, bugged but is still achievable",
        url: "https://steamcommunity.com/app/2584270/discussions/2/563659002336173025/",
      },
      {
        name: "Steam Discussions — Softlock Baghead achievement thread (August 29, 2026)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581680955258937465/",
      },
      {
        name: "PowerPyx — Mortal Shell 2 Trophy Guide & Roadmap",
        url: "https://www.powerpyx.com/mortal-shell-2-trophy-guide-roadmap/",
      },
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 devs on the Slayer Seal achievement lockout (August 24, 2026)",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-slayer-seal-achievements",
      },
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
    ],
    reviewedOn: "September 5, 2026",
    datePublished: "2026-08-27",
  },
  {
    slug: "ova-locations",
    metaTitle: "Mortal Shell 2 Ova Locations: How to Collect All 196",
    metaDescription:
      "Every Mortal Shell 2 Ova location explained: all 196 come from cleansing Beacons, six post-boss nodes pay 26 each, and the first-playthrough rule that protects the Bring My Ova Back to Me trophy.",
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
          "196 — and the collection is tracked by its own achievement, **Bring My Ova Back to Me**, which Steam records at a **15.7%** unlock rate. (Ascension at 16.7% looks similar but is actually the hidden Mango-secret trophy — see our [achievement guide](/achievements-guide/) for why the two are frequently confused.) Per community help threads the count includes only Ova obtained through Beacon cleansing; boss payouts like Magdalena's famous 26-Ova purse feed the same economy but don't add collection slots beyond what the Beacons hold. If your count stalls below 196, an uncleansed Beacon somewhere is why, not a missed field pickup.",
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
          "Correction from an earlier draft: Ascension is **not** the Ova trophy. Steam's official stats list Ascension (16.7% unlock rate) as “Discover the secret of the Mango” — the hidden sanctuary quest behind Mether's Flesh and the Outskirts of Nochte cup ritual detailed in the [missable content guide](/missable-content/). The Ova-collection achievement is the separate **Bring My Ova Back to Me** entry covered above (15.7%, currently bugged first-playthrough-only). Both sit in the same completion neighborhood, which is why so many guides conflate them.",
          "Its actual sibling on this route is So Fresh, So Clean (7.8%, cleanse every Beacon) — one disciplined pass serves both, and the fuller rare-first ordering plan lives in our [achievement guide](/achievements-guide/).",
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
      "The best build for every Mortal Shell 2 shell after the Week 1 Update: per-shell weapon, sidearm, and seal loadouts, plus the patch changes — infinite Glimpses, Shell respec, weapon buffs — that shift each one.",
    cardBlurb:
      "Post-patch build picks for all eight shells — what the Week 1 Update changed and how to read it.",
    heroImage: {
      src: "/img/site-2.jpg",
      alt: "Mortal Shell II key art: an armored warrior bearing a sword against a burning backdrop",
      caption: "Official key art — Cold Symmetry / Playstack",
    },
    h1: "Mortal Shell 2 Best Build",
    eyebrow: "Builds",
    intro: [
      "Builds in Mortal Shell II are built from two confirmed pillars: which of the eight shells you possess, and how your combat loop generates and spends resolve. This page explains both, then records the community's launch-build consensus — clearly attributed, because it is an opinion, not a verified fact.",
      "The build tables below follow Game8's launch guide; this page was rechecked on September 3, 2026 against Playstack's official Week 1 Update notes (live since August 29) on top of Balance Patch 1 (August 20), which buffed key weapons, cut Tarforge smelt costs, and rebalanced enemy health. The patch facts in the boxes below come straight from those official notes.",
    ],
    blocks: [
      {
        heading: "What the Week 1 Update changed for builds (August 29)",
        paragraphs: [
          "The Week 1 Update is now the reference patch for build decisions, and its headline is economic: Glimpses and Tarcores are no longer finite resources, so every shell and every Tarstone can be fully upgraded inside a single playthrough. Alongside that, a new respec item — Mether's Severance, sold by Merrick — is given to Zhirelle, the shell keeper, who severs your bond with a Shell, resets it, and refunds every spent Glimpse (the full how-to is in the FAQ below). The commitment risk the launch meta was built around is simply gone: a 'wrong' shell investment is now a refundable detour.",
          "The weapon board moved too. Per the official notes: the Obsidian Hammer received a full balance pass and now hits substantially harder; the Great Martyr's Blade damage buff that was announced for Balance Patch 1 did not actually ship in that patch — Week 1 delivered it 'even stronger' instead; heavy weapons in general took a poise and damage pass (good news for Eredrim's Iconoclast plan); Axatana's weapon ability now grants invulnerability frames and inflicts Fragile stacks, and its combat Tarstone active triggers correctly (a real lift for the Genesa and Lazlo picks); the Salvaged Trebuchaxe's Tarred Fragment was redesigned after being 'simultaneously overpowered and broken', so Tiel's signature pairing needs a fresh look; and Weltcap is stronger in both its active and passive forms. Ripostes received a full scaling pass — Rock Paper Shotgun's read: the update is 'making riposte damage scaling actually work', which puts riposte back on the menu as a damage verb rather than a trap.",
        ],
        bullets: [
          "Glimpses and Tarcores are no longer finite — all shells and Tarstones upgrade in one playthrough",
          "Mether's Severance respec: buy from Merrick, give to Zhirelle — Shell resets, every spent Glimpse refunded",
          "Obsidian Hammer hits substantially harder; Great Martyr's Blade's buff shipped here, even stronger than announced",
          "Heavy weapons: poise and damage pass — Eredrim frontloaders scale with it",
          "Axatana ability grants i-frames + Fragile stacks; Trebuchaxe Tarred Fragment redesigned; Weltcap stronger",
          "Ripostes: full scaling pass — viable damage again",
        ],
      },
      {
        heading: "What Balance Patch 1 changed for builds (August 20)",
        paragraphs: [
          "Four patch lines matter when picking a build. Weapons: Great Martyr's Blade attack damage was announced up 20%, Troubadour's Lute attack damage is up 100%, Caged Hystrix and Triarch Repeater no longer have minimum resolve requirements to fire, and light attacks track better on Axatana, Black Needle, and Clockwork Scythe. (One correction from later notes: the Martyr's Blade buff did not actually ship in this patch — Week 1 delivered it, stronger.) Economy: Tarforge smelting costs 75% less Gloom, gold drops are significantly increased (enemies in Mammon drop double), and shell map locations now cost Gloom instead of Glimpses — refunds wait in the Shell Keeper's alcove in Blackmarrow. Enemies: beta health values were restored, cutting boss damage and health across the board (The Lost Child takes 15% less health and 10% less damage; Monolith 10% less health and 19% less damage, with some attacks retimed).",
          "Read together, that shifts builds toward the buffed weapons and cheaper experimentation. The Martyr's Blade Lightning setup gains flat damage; repeater sidearms lose their resolve floor, so casters can spend resolve on defense without starving their sidearm; smelting being cheap makes swapping weapons mid-run a plan instead of a punishment; and Mammon's doubled gold funds Tarstone work faster. Full nerf math per enemy lives in the patch discussion linked at the bottom of this page.",
        ],
        bullets: [
          "Great Martyr's Blade +20% attack damage as announced — the buff actually shipped in Week 1, stronger (Proxima setups scale directly)",
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
          "Tiel — Axe and Dagger + Salvaged Trebuchaxe: guaranteed critical strikes via the Critical Role ability (Trebuchaxe's Tarred Fragment was redesigned in Week 1 — retest before committing)",
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
          "The patches since launch make both early targets hit harder. The Martyr's Blade in the Proxima setup carries the Week 1 damage buff — stronger than the +20% originally announced — and with no minimum resolve to fire, the Triarch Repeater stops competing with your defensive skills for resolve — fire it freely while keeping your guard funded.",
          "Until then, the core principles hold: aggression generates resolve, resolve funds defense, and posture breaks create your execute windows. Any shell and any weapon played inside that loop will carry you through the first dungeons while you collect the parts for the loadout you actually want.",
        ],
      },
      {
        heading: "Smelting and swap economy after the patch",
        paragraphs: [
          "Two economic changes reshape how aggressively you can iterate on builds. Tarforge smelting now costs 75% less Gloom, so re-speccing a weapon or shifting to a different upgrade path mid-run is a reasonable move rather than an NG+-length grind; Playstack framed it as letting players switch weapons without hours of grinding through repeated runs. Gold drops also rose significantly across the board, with Mammon enemies dropping double — which pairs well with Lazlo's Royal Crypt stomping grounds if you need coin for Tarstone work fast.",
          "The practical takeaway for builders: test more builds per hour of play. The cost of a wrong pick dropped alongside the buff table above, so treat the first half of the campaign as cheap experimentation instead of commitment.",
          "The Week 1 Update (August 29) pushed the same direction further. Glimpses and Tarcores are no longer finite, Tarstones yield more Tarcores when broken, and both Tarstones and the Mether's Severance respec item restock at Merrick as you progress. The BP1 levers above still apply — smelting is 75% off and Mammon pays double gold — but the ceiling they worked against is gone, so the experimentation window is no longer just the first half of the campaign.",
        ],
      },
      {
        heading: "How do I respec my Shell in Mortal Shell 2?",
        paragraphs: [
          "Since the Week 1 Update (August 29, 2026), respec runs through an item called Mether's Severance: buy it from Merrick, then give it to Zhirelle, the shell keeper. In exchange she severs your bond with that Shell — the Shell resets and every Glimpse you spent on it comes back. Merrick restocks the item as you progress through the game.",
          "This changes build strategy as much as any damage number. Because Glimpses are no longer finite either, testing a different Shell's build no longer destroys the upgrade tree you already built: respec out, pump the next Shell, and switch back later if the grass wasn't greener. The old advice to 'pick once and commit' is obsolete — pick, test, and let the refund absorb the mistake.",
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
        "Build rankings move fast in patch season — this page now reflects the Week 1 Update (August 29):",
      items: [
        "Second attributed build source for cross-comparison against Game8's picks — especially a tier re-derivation under the infinite-Glimpse economy",
        "Whether the unannounced ~1 GB update deployed September 2, 2026 (official notes not yet published) touches build-relevant numbers",
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
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
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
    reviewedOn: "September 3, 2026",
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
          "Exploration beyond the golden path — the main route to each objective — is how you find hidden shells, weapons, and upgrade curiosities. The game is built to reward players who wander from the critical route: the seals that anchor the strongest builds (Vatra's Seal from the optional Tar Golem fight, per Game8's tables) never touch the main story. The full set of optional NPC chains is walked step-by-step in our [side quests guide](/side-quests/).",
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
      "Fact-checked against the official Steam page and the developer's website on August 17, 2026; the three player-question FAQs below (Harros, Genessa's shade, Lazlo's heat) were added September 4, 2026 from the Steam discussion threads linked in the sources.",
    ],
    blocks: [
      {
        anchor: "the-eight-shells",
        heading: "The eight shells, named",
        paragraphs: [
          "The launch build's eight possessable shells are Tiel, Proxima, Eredrim, Gragu, Smert, Sester Genessa, Lazlo, and Sariel. A ninth figure, Harros, appears as the vassal who helps you during the prologue — he is not counted among the eight lost warriors your Harbinger ultimately inhabits.",
          "Two of the shells, Gragu and Sester Genessa, are first encountered as living NPCs rather than corpses — Gragu drinking at the One Legged Wolf Tavern, Genessa running combat training in Marrow Keep. The rest are found out in the world, usually behind a boss fight or a ritual.",
        ],
      },
      {
        anchor: "save-harros",
        heading: "Can you save Harros or keep his shell?",
        paragraphs: [
          "No. Players hoping to preserve him get a firm answer in the Steam discussions (September 2026): Harros dies as part of the story, and there is no way to save him or claim his body. He is the vassal who fights beside you in the prologue, not one of the eight lost warriors listed above — no dialogue choice or hidden step turns him into a playable shell.",
        ],
      },
      {
        anchor: "how-to-unlock-every-shell",
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
        anchor: "tiel-and-proxima",
        heading: "Tiel and Proxima: the Fainweald pair",
        paragraphs: [
          "Tiel is the gentlest unlock of the eight. His general location is revealed the moment you first enter Fainweald; Rock Paper Shotgun's location guide describes the walk — from Mushroom Village keep heading east to a torch-lit fenced enclosure, where Tiel's gravestone waits inside on the left. Interact with it and the shadow-specialist shell is yours.",
          "Proxima sits a screen north: from the Widow's Overlook Beacon head into the Blackridge Cliffs, past cultists fighting a Tarred Vestige and the white spider-like enemy, until a glimmering beacon appears — the Shattered Beacon. Her body lies on a table inside, and possessing her unlocks the Biosampler kit that lightning builds are built on.",
        ],
      },
      {
        anchor: "gragu-and-genessa",
        heading: "Gragu and Sester Genessa: the living NPCs",
        paragraphs: [
          "Gragu drinks at the One Legged Wolf Tavern long before you can wear him. To claim his shell you need the Heart of Vatra, found on a vampire-infested mountain pass northeast of the tavern: infiltrate the Temple of Vatra past petrified cultists who wake and attack, carry the heart back, and Gragu dies content — leaving his shell behind. The tavern is also where you pick up the Troubadour's Lute.",
          "Sester Genessa is the training NPC in Marrow Keep, and talking to her enough times hints at her side quest. The censer she wants sits in the Revenant Graves — the red-tree area past the Sester's Refuge in the eastern Ruins of Mammon. Interact with the glowing red censer to draw out Sester Secondus, defeat her, and return the prize to Genessa.",
        ],
      },
      {
        anchor: "genessa-shade-second-form",
        heading: "Why doesn't my Shell Shade show on Sester Genessa's second form?",
        paragraphs: [
          "Shell Shades applied to Sester Genessa do not carry over to her Stray second form. Several players confirmed this in the Steam discussions (September 2026) and read it as design behavior rather than a bug — one regretted spending a Blackmarrow key on the shade for exactly that reason. Note this is separate from the display bug that stopped some Devout and Pre-Order Shell Shades from appearing at all; that one was fixed by the September 1 PC hotfix (see the [patch notes](/patch-notes/)), while the second-form behavior stands.",
        ],
      },
      {
        anchor: "guarded-bodies",
        heading: "Eredrim, Smert, Lazlo: the guarded bodies",
        paragraphs: [
          "Eredrim is the knight waiting in the Citadel of Penance, the heavily patrolled keep of western Fainweald. From the citadel's own beacon, drop from the courtyard into the pit, follow the circular lower passage past burstable eggs until you spot the lift near the air current, and ride it into the central arena — the Warden who killed Eredrim long ago is the price of the shell.",
          "Smert's ritual is the strangest sight of the eight. From the Outskirts of Nochte Beacon turn left up the slope into Prophet's Rest: three cultist groups chant over circular pits of red liquid, with Smert's body on a stone slab beside them. Clear the three groups (RPS notes the Troubadour's Lute can turn them on each other) and the screen glows red when the shell is claimable.",
          "Lazlo lies in the Royal Crypt of Mammon behind Vellen, High Lord of Mammon. From the High Lord's Courtyard Beacon ride the air current up, dodge the rolling Knight of Mammon on the way down into the dark crypt, and put Vellen down — Lazlo's body is in the chamber just beyond.",
        ],
      },
      {
        anchor: "lazlo-heat-drain",
        heading: "Does Lazlo's heat bar drain once it's full?",
        paragraphs: [
          "No — once Lazlo's heat gauge fills it stops draining and stays at full until you re-use his ability, per the players who answered exactly this question in the Steam discussions (a five-reply thread from late August 2026). The replies read the behavior as intended, and it is the backbone of the common passive Lazlo setup: reach max heat, leave the ability alone, and build around the shell while its gauge stays pinned. For how that pairs with weapons, sidearms, and seals, see the [best build guide](/best-build/).",
        ],
      },
      {
        anchor: "sariel",
        heading: "Sariel: the shell you fight for",
        paragraphs: [
          "Sariel is the only shell you earn entirely through boss encounters. He first challenges you at the brutalist structure in the far south of Mammon, near The Silent Steps Beacon — RPS's writer even knocked him off the edge seconds into the fight. It doesn't end there: he retreats through the walls into the dungeon behind the massive statue, leading to the Chamber of Becoming. Break the stones in the final room so he can't keep reviving, and the Endless is finally yours.",
        ],
      },
      {
        anchor: "what-each-shell-is-known-for",
        heading: "What each shell is known for",
        paragraphs: [
          "Every shell carries its own ability tree and passive identity. Tiel's specialty is disappearing into the shadows; Smert wields time-stopping powers. For how those abilities turn into combat builds — which weapon, sidearm, and seal to pair with each shell — see the Mortal Shell 2 [best build guide](/best-build/).",
          "Shells also hold their own memories: unravelling them unlocks each shell's innate abilities and reveals their personal stories. Playing a shell well and digging into its secrets is how you develop its full kit — and the weapon you pair with it decides the rest. The full arsenal is catalogued in the [weapons guide](/weapons/), and the bosses that guard several shells are listed in the [boss guide](/bosses/).",
        ],
      },
      {
        anchor: "balance-patch-pairings",
        heading: "Balance Patch 1 and shell pairings",
        paragraphs: [
          "Playstack's Balance Patch 1 (August 20, 2026) reshuffles the weapon half of every shell pairing. The Great Martyr's Blade — Proxima's signature heavy option in our [best build guide](/best-build/) — gained **+20% attack damage**, and the Troubadour's Lute doubled its attack damage outright (**+100%**). Neither buff changes which shell you enjoy playing, but both change which weapon deserves your first Tarforge investment once you have claimed a body — and the patch cut Tarforge smelting costs by 75%, so swapping weapons between shells is far cheaper than it was at launch.",
          "The patch also touches how you hunt shells in the first place: shell map locations now cost Gloom instead of Glimpse, with refunded Glimpses waiting in the Shell Keeper's alcove in Blackmarrow. A Seals note applies to every shell's defensive kit too — Guard can now be used while walking. For the full weapon-by-weapon breakdown, see the [weapons guide](/weapons/).",
        ],
      },
      {
        anchor: "best-shell",
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
      { label: "Achievements Guide", href: "/achievements-guide/" },
    ],
    sources: [
      {
        name: "Rock Paper Shotgun — Mortal Shell 2 shell locations",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-shell-locations",
      },
      {
        name: "Steam Discussions — “Any way to save the Harros shell?” thread (September 2026)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681298840559954/",
      },
      {
        name: "Steam Discussions — Genessa Shell Shade vs. her second form thread (September 2026)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681246928699834/",
      },
      {
        name: "Steam Discussions — Lazlo max heat mechanic thread (August 2026)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581680955259000069/",
      },
      {
        name: "Balance Patch 1 — Mortal Shell II Steam announcement",
        url: "https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/",
      },
      {
        name: "Mortal Shell II on Steam (Playstack)",
        url: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
      },
    ],
    reviewedOn: "September 4, 2026",
    datePublished: "2026-08-20",
  },
 {
   slug: "weapons",
    metaTitle: "Mortal Shell 2 Weapons: Upgrades & Posture Breaks",
    metaDescription:
      "All 8 Mortal Shell 2 weapons and sidearms, annotated through the Week 1 Update: the Martyr's Blade buff correction, Obsidian Hammer's rework, Tarforge cost ladder to +25, and the eel-hitbox sidearm bug FAQ.",
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
        "; Balance Patch 1 effects annotated per Playstack's official patch notes (August 20, 2026), the Tarforge cost ladder verified against mortalshelldb's forge data (August 25, 2026), and the Week 1 Update balance lines added from Playstack's official announcement (August 29, 2026; reviewed September 1, 2026).",
    ],
    blocks: [
      {
        heading: "What Balance Patch 1 changed about weapons",
        paragraphs: [
          "Playstack's first balance patch materially reshuffles weapon advice — four of its lines touch this arsenal directly. One caveat surfaced a week later: the Great Martyr's Blade buff announced here did not actually ship with this patch (Playstack's own Week 1 admission — see the next section). If your weapon assumptions predate the Week 1 Update, re-read the notes below: two sidearms lost the resolve floors that used to gate their fire rate, and the forge economy got dramatically cheaper.",
        ],
        bullets: [
          "**Great Martyr's Blade +20% attack damage** — announced for this patch but \"didn't actually make it in the last patch\"; the real, stronger buff shipped in the Week 1 Update (below). The Proxima Lightning pick stands either way",
          "**Troubadour's Lute +100% attack damage** — the support-flavored pick doubled its damage; re-check it before dismissing it as a meme",
          "**Caged Hystrix & Triarch Repeater: resolve minimums removed** — both now fire at any resolve level instead of holding fire below a threshold, which changes sidearm budgeting in long boss fights",
          "**Tarforge smelting −75% Gloom** — mid-run weapon swapping becomes cheap experimentation rather than an NG+-length commitment",
        ],
      },
      {
        heading: "What the Week 1 Update changed about weapons",
        paragraphs: [
          "The Week 1 Update (live August 29, 2026) is the largest balance pass since launch, and it corrects this page's record in the process: the Martyr's Blade buff the Balance Patch 1 notes promised arrived here instead — heavier. Per Playstack's official notes:",
        ],
        bullets: [
          "**Great Martyr's Blade deals more damage — for real this time** — official wording: \"It was a pity it didn't actually make it in the last patch, to make up for it, it's even stronger now.\" The +20% figure above describes what was announced for August 20; the shipped buff landed August 29 at a higher value (exact percentage not published)",
          "**Obsidian Hammer — full balance pass** — it \"now hits substantially harder\"; the brutalist chunk of obsidianite graduates from curiosity pick",
          "**Heavy weapons in general — poise and damage pass** — the whole heavyweight class trends up, which [best build pairings](/best-build/) lean into",
          "**Salvaged Trebuchaxe: Tarred Fragment redesigned** — officially \"simultaneously overpowered and broken\"; its signature fragment works differently now",
          "**Axatana — the ability now grants invulnerability frames and inflicts Fragile stacks**, and its combat Tarstone active triggers correctly",
          "**Weltcap is stronger in both its active and passive forms**",
          "**Riposte overhaul (all weapons)** — player riposte damage now scales with enemy health, so executions keep up in late game, NG+, and [Night Mode](/night-mode/); invulnerability windows last through the end of the animation; many recoveries hand control back sooner",
          "**Enemy aggression and disengage ranges retuned** — mid-fight weapon pacing from the launch window shifts slightly across the board",
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
          "**New stone class (Week 1):** Fragile Tarstones wear down as you use them and break — dropping a tarcore when they do — and are not unique, so multiple can be found per playthrough; Tarstones also now yield more tarcores when broken, and pre-patch saves received a compensatory cache",
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
          "It reads like a bug, not design. Steam threads report **Triarch Repeater shots phasing through the heads of eel-type enemies** — projectiles visibly connect but deal no damage — with similar echoes appearing across player reviews around launch. The Week 1 Update fixed several projectile-registration bugs (weak-point hits and wrong-target picks among them) but named no eel-specific fix, so until a patch note says otherwise, treat ranged hits on serpentine models as unreliable and switch to melee rather than wasting resolve on refused hitboxes.",
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
      { label: "Patch Notes", href: "/patch-notes/" },
    ],
    sources: [
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
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
    reviewedOn: "September 1, 2026",
  },
  {
    slug: "bosses",
    metaTitle: "Mortal Shell 2 Bosses: All 11 Major Bosses in Order",
    metaDescription:
      "All 11 Mortal Shell 2 main bosses in order, with location, payout, and a phase-by-phase strategy for every fight, from the Tar Golem to Zmey.",
    cardBlurb:
      "All 11 main bosses in order, their regions, and which fights pay out shells and weapons.",
    h1: "Mortal Shell 2 Bosses",
    eyebrow: "Bosses",
    intro: [
      "Mortal Shell II's critical path runs through eleven main bosses guarding the Corrupted Gates, spread across nine regions from Disciple's Pass to the Faded Citadel and beyond. This page lists all eleven in the recommended encounter order, with where each fight happens and what it pays out.",
      "The roster was verified on August 20, 2026 (launch day) against Game8's boss compendium and GameSpot's boss guide. The per-boss strategies below were written against Rock Paper Shotgun's 45-boss compendium, updated August 25, 2026, and re-checked against Playstack's official Week 1 Update notes (August 29, 2026; reviewed September 6, 2026) — the patch changed several of these fights, and every changed fight carries a dated note inline plus a summary in the first block. On September 6 the Zmey strategy block was rebuilt against the active Steam discussion of that fight, and the roster was corrected to PowerPyx's eleven-main-boss count (Game8's route order retained, with the Tar Golem added).",
    ],
    blocks: [
      {
        heading: "All 11 main bosses in order",
        paragraphs: [
          "PowerPyx's main-boss roster counts eleven; the order below follows Game8's recommended route (starting from Magdalena), with each boss's location:",
        ],
        bullets: [
          "Tar Golem — past the Disciple's Grotto in Disciple's Pass; Game8 files it as an optional encounter while PowerPyx counts it among the main bosses — it drops Vatra's Seal either way",
          "Magdalena, the Lady of the Woods — Magdalena's Glade in the Glutted Mire",
          "The Lost Child — past the Sanguine Shoreline Beacon",
          "The Nameless Captive — Prisoners' Domain, beyond the Executioner's Pulpit Beacon",
          "Sir Isaac, the Scholar-Prince — past the Citadel Atrium Beacon",
          "Droeg, the Conquerer — past the Ovate's Chamber Beacon",
          "Hexapod — near the Nameless Pass Beacon",
          "Monolith — near the Obsidian Vault Beacon",
          "Malborn Offspring — near the Faithful's Shelter Beacon",
          "Orrem, the Discarded Golem — near the Bridge of Procession Beacon",
          "Zmey, the Unbidden — The Hidden Nave Beacon, at The Unfounded Path (GameSpot's guide lists Zmey as the final boss; PowerPyx writes the region 'The Unfound Path')",
        ],
      },
      {
        heading: "The nine regions",
        paragraphs: [
          "Bosses are spread across Disciple's Pass, Fainweald, Glutted Mire, Sanguine Caverns, Ruins of Mammon, Prisoners' Domain, Withered Shoals, Conquered Temple, and Faded Citadel, with the endgame encounters waiting along The Unfounded Path. Beyond the eleven mains, the world is thick with optional bosses and minibosses — Game8's compendium counts 44 boss encounters in total, with some of them missable.",
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
          "Per Game8's boss tables, the majors pay out boss-specific mementos and stones — Magdalena drops her Memento, the Lost Child the Lost Clotstone, the Nameless Captive the Captive's Scabstone — alongside hefty Gloom sums that scale from the 11,000s in the Glutted Mire to the 65,000s at the end of the path. Two fights a short detour off the critical path matter just as much for build planners: the Tar Golem rostered above drops Vatra's Seal (half of the strongest build setups), and the Great Arbiter of Flesh near Widow's Overlook drops the Arbiter's Prize stone that recurs across game8's recommended loadouts.",
        ],
      },
      {
        heading: "What the Week 1 Update changed about these fights",
        anchor: "week-1-bosses",
        paragraphs: [
          "The Week 1 Update (live August 29, 2026) gave most bosses a general polish pass and changed four of the fights below in ways that matter for strategy. Per Playstack's official notes:",
        ],
        bullets: [
          "**Zmey, the Unbidden** — the tail grab no longer takes both your Shell and Harbinger from 100 to 0 in one hit (Playstack: 'We heard some of you don't like getting one-shotted'). **In Night Mode it is still on.** His ring waves now align to the ground properly, and his elemental stomps have new effects.",
          "**The Monolith** — a 'nasty bug' that dealt double damage on certain hits is fixed, and the laser and spin attacks now have consistent, readable timings instead of spamming (the spam was itself a bug).",
          "**Hexapod** — the area attack deals considerably more splash damage now; the arena is smaller and its beacon light is lit by default, which makes the fight far easier to read; one attack was retimed to be fairer, and he can no longer wedge himself into the environment during his dive.",
          "**The Warden and Urrig, the Executioner** — both reworked, with retuned attacks, new ice attacks, and corrected effects; Urrig's spin now gives a proper warning that it cannot be parried.",
          "Across the rest of the roster: arena navigation repairs for Droeg and Sir Isaac, a finished walk animation and retimed bite for the Lost Child, and a game-wide riposte pass — player riposte damage now scales with enemy health, so it keeps up properly in the late game, NG+, and Night Mode.",
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
          "Late fight adjustments: at low health the Hexapod speeds up, dives into the arena water, and rushdowns — reopen distance and resume firing, jumping into melee only when cornered. Pure melee builds clear it too, but respect the **unblockable grab**; it's the one mistake the arena doesn't forgive. **Week 1 Update (August 29):** the arena is smaller and its beacon light is lit by default, which makes the fight far easier to read — but his area attack now deals considerably more splash damage, so respect the range you're keeping.",
        ],
      },
      {
        heading: "The Warden strategy",
        paragraphs: [
          "Arena and gimmick: a cramped circular pit at Citadel of Penance where nearly every axe swing is **unblockable** — this is a dodge-and-punish fight by design, and wall-behinds-you awareness matters more than normal.",
          "The tell: his signature is **four rapid spin-flings** of the burning axe; survive the sequence and you get a guaranteed punish window after the fourth blow. Damage-over-time carries the attrition battle — apply **Burn or Poison via Tarstones** to his huge health pool, and reuse the Nameless Captive toolkit that interrupts: passive **Grisha Remnant** summons plus the Infused Stone thrown weapon to buy breathing room between spins. **Week 1 Update (August 29):** the Warden was reworked with retuned attacks and new ice attacks — if you learned this fight pre-patch, expect some new answers alongside the old rhythm.",
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
          "After your first riposte it rolls and fires **lasers**: tracked beams plus swinging arcs. The counterintuitive core skill — dodge **into** the arcs, never away, cutting through with i-frames, then sprint to its back where lasers haven't extended yet and unload there. Phase three adds top-spin attacks, an **unblockable airborne drop** (dodge at the last second), and the accelerating death-spiral arc show — lock the rhythm down and accept it takes attempts. Corner yourself and the camera will kill you; fight center-arena. Thrown weapons have been observed glitching the lasers off temporarily — abuse anything cheap, this fight deserves it. **Week 1 Update (August 29):** a double-damage bug on certain hits is fixed and the laser/spin timings are now consistent and readable (the old spamming was a bug) — still brutal, but no longer cheating.",
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
          "The final exam: obscene health, a far-reaching **unblockable tail impale** that pins you for a follow-up butt slam capable of knocking you out of (or ending) your run, delayed fire breath, and post-riposte **AoE flame waves** that must be dashed into — getting clipped inflicts **Cosmic Disease**, locking you out of re-shelling and every skill and Tarstone. **Week 1 Update (August 29):** the tail grab no longer takes both Shell and Harbinger from 100-0 — except in Night Mode, where it still does — and the ring waves now align to the ground properly instead of floating.",
          "The shape of the win: stand under him and work the lower body, timing guards against the foot stamps; when he leaps back and raises the blade-throw, dodge immediately (your summoned companions rarely draw that specific throw — assume it's coming for you). Pack the **Seedbearer's Scripture** as your active if you've completed the Night Mode Forgotten Tower gland quest — triggered on-hit, it cures Cosmic Disease *and* floors Zmey for a free punish. And if the mountain won't move: the **Slayer Seal** exists precisely for fights like this, no shame attached — but know the price first: equipping it disables Steam achievements (developer-confirmed in August 2026), so trophy runs need to win this fight without it.",
          "Where to stand and what to swing: Game8's take is that his **sides** are the safest footing — his front eats you with breath and blade throws, his rear with the tail. Players who've ground out the fight also report that hugging his legs and attacking **non-stop** denies his ranged flame attacks entirely, a pressure style that wants fast weapons (Axe, Dagger, Axatana — with a **Duality Tarstone** if you run the Axatana). The move that ends most attempts is the **helicopter spin**, and it has two versions with opposite answers: the **vertical ten-spin** cannot be parried, so sprint out of range and let it finish; the **horizontal spin** is fully parriable — and parrying every one of its hits is its own achievement hunt, if you're the stubborn type.",
          "Phase two is where runs actually die, and rarely to the sword: players report the **burn effect stacks** through the second phase — tick after tick after tick — until a healthy Shell melts without a single clean hit landing. The most-repeated piece of community advice for this fight is simply to **freeze the boss**: it's the top answer in the biggest current Steam thread on Zmey, with video guides attached, so if your loadout can inflict freeze, build around it. His mid-fight **projectile barrage** draws the same kind of grief ('but the balls? So many') — respect it as a positioning problem, not a damage window.",
          "Two footnotes for the end of the road. If you'd rather skip the exam entirely, a speed-kill route circulating on the Steam forums drops him in about **fifteen seconds, damage-free**, built on **Escalation 3/3** and **Deathmark 3/3** (a YouTube guide does the steering). And mind the kill itself: the [Finish the Fight achievement](/achievements-guide/) only counts if his HP reaches exactly **zero before the death cutscene** takes over — an ultimate started at low health can eat the kill, so save your ranged charges for the finisher.",
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
        "A Tar Golem strategy block — the roster's eleventh main boss (per PowerPyx) has no strategy section yet",
        "Name and unlock conditions of the achievement for parrying every hit of Zmey's horizontal spin",
      ],
    },
    related: [
      { label: "All Shells", href: "/shells/" },
      { label: "Weapons Guide", href: "/weapons/" },
      { label: "Walkthrough", href: "/walkthrough/" },
      { label: "Patch Notes", href: "/patch-notes/" },
    ],
    sources: [
      {
        name: "Game8 — Mortal Shell 2 All Bosses",
        url: "https://game8.co/games/Mortal-Shell-2/archives/614453",
      },
      {
        name: "PowerPyx — Mortal Shell 2 Boss Guide (All Main Bosses)",
        url: "https://www.powerpyx.com/mortal-shell-2-boss-guide-all-main-bosses/",
      },
      {
        name: "Game8 — Zmey, the Unbidden Boss Guide",
        url: "https://game8.co/games/Mortal-Shell-2/archives/616314",
      },
      {
        name: "Rock Paper Shotgun — All 45 bosses in Mortal Shell 2 (per-boss strategies)",
        url: "https://www.rockpapershotgun.com/mortal-shell-2-all-bosses",
      },
      {
        name: "GameSpot — Mortal Shell 2 Boss Guide",
        url: "https://www.gamespot.com/articles/mortal-shell-2-boss-guide/1100-6524311/",
      },
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
      {
        name: "Steam Discussions — 'Im not beating this final boss' (community Zmey strategies, incl. freeze)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681298840650982/",
      },
      {
        name: "Steam Discussions — 'Bro with a sword for a face' (Zmey helicopter-spin parry split)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681298840702741/",
      },
      {
        name: "Steam Discussions — The final boss in 15 seconds (Escalation 3/3 + Deathmark 3/3 build)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581680955259021896/",
      },
    ],
    reviewedOn: "September 6, 2026",
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
      "Fix Mortal Shell 2 crashing, stuttering, and frame generation problems: Hotfix 1, the save-file workaround, the shader cache fix, post-Week-1 framegen and save-backup guidance, and PC settings.",
    cardBlurb:
      "Every confirmed crash fix — plus what the Week 1 Update changed about frame generation, freezes, and your save files.",
    h1: "Mortal Shell 2 Crash Fix",
    eyebrow: "Troubleshooting",
    intro: [
      "If Mortal Shell 2 keeps crashing, stutters mid-fight, or locks up on the loading screen after a death, the fixes that actually exist are collected here: the crash hotfix Playstack shipped during Advanced Access, the official save-file workaround for the Keyboard Bindings menu crash, and the shader cache change recommended for full lock-ups. Every fix is tied to its source — publisher-confirmed or independently attributed. Once the game runs clean, the [beginner guide](/beginner-guide/) covers the resolve-driven first hours and the [best build guide](/best-build/) has the per-shell loadouts.",
      "Skim by symptom: keeps crashing starts at Fix 1, a crash when rebinding keys is Fix 2, a lock-up on the loading screen after death is Fix 3, random crashes that survive every patch live in the community-confirmed crashes section, stuttering lives in the shader cache change and the attributed settings, frame generation that misbehaves since the Week 1 Update and save-file worries live in the Week 1 section, and a game that won't launch at all starts with the requirements check.",
      "It was fact-checked against Playstack's official Steam announcements, the publisher's verified community posts, and Steam store data on August 19, 2026 — the day before worldwide release — and rechecked on September 5, 2026 against the Week 1 Update notes (August 29), the September 1 hotfix notes, and the post-patch crash threads.",
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
        heading: "After the Week 1 Update (August 29): frame gen, freezes, and your saves",
        paragraphs: [
          "The Week 1 Update reworked frame generation by Playstack's own notes: it now applies only after a reload, no longer activates before the world has loaded, and NVIDIA frame generation now covers a much wider range of cards. The same patch added a Geometry Budgets graphics option and a crash diagnostics option, moved the shader-compilation hitch into the main menu, and reduced enemy counts in the busiest areas. On paper, that is a straight improvement for the problems on this page.",
          "The community picture one week in is rougher. In the pinned Week 1 discussion thread, multiple players report frame generation broken after updating — including one who had uninstalled mods, toggled frame gen off and on, and restarted repeatedly without fixing it — and others describe severe freezes and frame drops on hardware that ran a stable 120–140 FPS before the patch: down to 80, dipping to 20, with freezes lasting up to 20 seconds. A third independent report adds a driver-level wrinkle: the NVIDIA app lists the game but refuses to change its settings (the shipping executable sits in a directory the app doesn't recognize), with frame gen dead after the patch.",
          "What to actually do, in order: fully quit and relaunch first, because the reworked frame generation only applies after a reload and an old session can run half-applied; confirm the patch fully downloaded; then disable frame generation and play without it while the reports are unresolved — that is the only framegen state with consistent community confirmation behind it right now. Keep the shader cache fix above for lock-ups, try the new crash diagnostics option if crashes persist, and when you report, include your build number (pause menu, bottom right) in the bug-report thread so Playstack can triage it.",
          "Save files deserve their own caution. The Week 1 notes do contain one official save improvement — an interrupted save can no longer destroy your save file — but the same pinned thread carries reports of save files disappearing entirely after the update, and no official recovery path has been announced. The prevention is manual: copy the SaveGames folder at \\Users\\[Your Username]\\AppData\\Local\\MortalShell2\\Saved\\SaveGames somewhere safe before installing any update, and if a save vanishes after a patch, restore that folder copy before doing anything else.",
          "Playstack also shipped a ~1 GB PC hotfix on September 1, 2026. Its official notes were posted on the developer's Reddit and Discord rather than Steam News, and they list six fixes — Devout/Pre-Order Shell Shades, the FSR world-map problem, Citadel Annex spider traversal, enemies not reacting, collision areas, and Minibeacon visuals — with nothing for frame generation, freezes, crashes, or saves. The full entry is on the [patch notes page](/patch-notes/).",
        ],
        bullets: [
          "Official (Week 1 notes): frame gen reworked — applies after a reload, wider NVIDIA card support; new Geometry Budgets and crash diagnostics options",
          "Community reports (pinned Week 1 thread): framegen still broken for some players even after clean restarts; freezes dropping rigs from 120–140 FPS to 20",
          "Official (September 1 hotfix notes): six fixes, none of them framegen, freeze, crash, or save related",
          "Workaround-first: quit fully, relaunch, then disable frame generation until an official fix lands",
          "Saves: back up \\Users\\[Your Username]\\AppData\\Local\\MortalShell2\\Saved\\SaveGames before installing any update",
        ],
      },
      {
        heading: "Random crashes that survive every patch: what the community has confirmed",
        paragraphs: [
          "Past the officially confirmed crashes above sits a bigger cluster: random crashes reported since launch that no patch has eliminated. The game's largest active Steam discussion — \"Am I the only one being plagued by crashes?\", 140+ replies and flagged answered — collects the pattern: hard lock-ups that take the whole PC down with no error text, crashes on alt-tab, and reports persisting \"even after the updates\". The community has not agreed on a cause — several repliers report zero crashes on comparable hardware — but a handful of workarounds now have confirmed successes attached, and the September 1 hotfix explicitly did not touch this cluster.",
        ],
        bullets: [
          "**Lower graphics settings and turn off ray tracing** — the one player-confirmed fix so far: crashes stopped entirely after this change on a rig that had run max settings smoothly",
          "**Cap the frame rate at 60 and keep frame generation off** — the standard advice across the crash threads, pairing the framegen workaround above with a strict cap",
          "**Start at 1080p Lowest and step up** — crash sufferers report beginning at the floor and raising one setting at a time to find what their build tolerates",
          "**DDU driver resets and stress-testing the rig** — recurring advice for the hard-freeze variant; attributed suggestions, not confirmed fixes",
          "Save files: players in the crash threads report crashes corrupting saves — one counts three corrupted saves from crashes alone, four including the beta — which makes the backup routine in the Week 1 section above the only documented protection",
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
          "LagoFast additionally lists the community-reported -UseFixedTimeStep Steam launch option as a thing to try for shader stutter. That one is community-reported only — it is not an official recommendation, so weigh it accordingly. The forum's own pinned [PC NVIDIA] stutter thread makes the same cache recommendation as Fix 3 — clear the shader cache and raise its size — and a separate thread asks why the game reserves so much space for shaders in the first place; both point at the same lever.",
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
          "Install Hotfix 1 — it is now a standard patch on the default branch, so a normal update applies it. If the crash happens when opening Keyboard Bindings, delete EnhancedInputUserSettings.sav and SpartaGameSettings.sav as described in Fix 2. For full lock-ups, set Shader Cache Size to Unlimited in the NVIDIA Control Panel (Fix 3). If random crashes survive all of that, the crash threads' one player-confirmed success is lowering graphics settings and turning off ray tracing. Apply one change at a time and re-test after each, so you know which fix your crash actually responded to.",
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
      {
        heading: "Did the Week 1 Update break frame generation?",
        paragraphs: [
          "It broke for some players, yes. The Week 1 Update officially reworked frame generation (it now applies after a reload, and NVIDIA frame gen covers a much wider card range), but the pinned Week 1 discussion thread collects multiple reports of frame generation not working after updating — including from a player with mods uninstalled who toggled it off and on and restarted repeatedly. There is no official fix announcement yet. Until one lands: fully quit and relaunch (the rework only applies after a reload), confirm the patch downloaded completely, and if it still misbehaves, play with frame generation disabled. The September 1 PC hotfix did not touch frame generation — its six fixes, listed on the [patch notes page](/patch-notes/), are all visual and traversal items — so the workaround stands.",
        ],
      },
      {
        heading: "Mortal Shell 2 save file disappeared after the update — what now?",
        paragraphs: [
          "Reports of saves vanishing after the Week 1 Update exist in the pinned Week 1 thread, and no official recovery path has been announced — the patch's only official save fix is that an interrupted save can no longer destroy the file. Before patching (always), copy \\Users\\[Your Username]\\AppData\\Local\\MortalShell2\\Saved\\SaveGames to a safe location; if a save disappears right after an update, restore that folder copy before relaunching. If you have no backup, report it in the bug-report thread with your build number — do not start overwriting saves first.",
        ],
      },
    ],
    communityNote: {
      heading: "Further settings worth trying (attributed)",
      body: "Beyond the official fixes, LagoFast recommends disabling in-game V-Sync and capping the frame rate externally (e.g. 60 FPS via RivaTuner), switching Windows to a High Performance power plan with GPU mode \"Prefer maximum performance\", lowering Shadow Quality to High or Medium, enabling DLSS/FSR in Balanced mode, and trying the community-reported -UseFixedTimeStep Steam launch option for shader stutter.",
      attribution: "LagoFast performance guide, updated August 16, 2026",
    },
    pending: {
      heading: "Pending verification",
      intro:
        "Rechecked September 5, 2026 against the Week 1 Update notes (August 29), the September 1 hotfix notes, and the post-patch crash threads. Still open:",
      items: [
        "An official fix or acknowledgment for the random-crash cluster — the game's largest active Steam thread — and whether the crash-linked save-corruption reports share its cause",
        "An official fix or workaround for the frame-generation breakage reported after Week 1",
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
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
      {
        name: "PINNED: The Week 1 Patch — details (Steam Discussions, post-patch reports)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581680955258892870/",
      },
      {
        name: "Steam Discussions — \"Am I the only one being plagued by crashes?\" (the game's largest active thread)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/582805931178353028/",
      },
      {
        name: "Steam Discussions — \"Game still crashes\" (crash-to-save-corruption reports)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681298840625385/",
      },
      {
        name: "Steam Discussions — \"Nvidia Framegen doenst work after Patch.\"",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681298840630817/",
      },
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
    reviewedOn: "September 5, 2026",
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
      "This page covers the mechanic end to end: what Beacons do before and after cleansing, how to trigger the Mether's Breath travel menu, every one of the 49 Beacon locations ordered by region, and the completion stakes — none of them are missable. Everything below was verified against PowerPyx's Beacon compendium and the Fextralife wiki on August 27, 2026. The Week 1 Update (August 29, 2026) has since added new day-only Beacons in Fainweald and Mammon — covered in the first section below; the 49-node catalog documents the verified launch baseline, re-checked September 1, 2026, and the Beacon-revitalization FAQ was added September 5, 2026 from post-patch Steam reports.",
    ],
    blocks: [
      {
        anchor: "week-1-beacons",
        heading: "Week 1 Update: new day-only Beacons",
        paragraphs: [
          "The Week 1 Update added new Beacons \"throughout Fainweald and Mammon\" — and gave them a twist no launch Beacon had: they are **only active during the day**. The official notes publish no count, and the region-by-region catalog below is the launch build's 49-node list; player reports put the additions at 10 or more, but that figure is a community estimate, not a confirmed number. This page keeps the 49 count — including its title — until an updated compendium pins the new total down; the [patch notes page](/patch-notes/) carries the full Week 1 changelog.",
        ],
        bullets: [
          "**New Beacons, day-only** — spread across Fainweald and the Ruins of Mammon; they only work in daylight, so cleanse-route planning now touches the in-game clock for the first time",
          "**Mini-Beacons no longer award a Glimpse** — the smallest Beacon payouts just shrank; what that does to Glimpse income is tracked in the [farming guide](/farming-guide/)",
          "**Dungeon shortcut** — a teleporter now appears in one dungeon after the Grisha pit fight, removing the walk back entirely",
          "**Count pending** — the title and the 49-node table below stay at the verified launch baseline until the new total is confirmed; the day-only Beacons are additive exploration content, not replacements",
        ],
      },
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
          "Respawns regular enemies — boss encounters stay dead — so farming loops run through whatever route feeds the Beacon (the most efficient ones are ranked in our [farming guide](/farming-guide/)).",
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
          "PowerPyx catalogs 49 Beacons worldwide, grouped below by the region each sits in and numbered the way the Mether's Breath menu lists them. Three arrive pre-cleansed when you find them: Marrow Keep, Widow's Overlook, and Outskirts of Mammon. (Launch-baseline catalog: the Week 1 Update's new day-only Beacons are not yet in this table — see the first section above.)",
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
          "One open question from the patch: whether the Week 1 Update's new day-only Beacons count toward the So Fresh, So Clean cleanse requirement is not confirmed yet. Completionists chasing the full roster should watch the [patch notes page](/patch-notes/) until that is pinned down.",
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
      {
        heading: "Why can't I revitalize some Beacons?",
        paragraphs: [
          "Post-patch, almost every \"this Beacon won't respond\" report comes down to one of two things — and neither is a bug. First, the Beacons the Week 1 Update added throughout Fainweald and the Ruins of Mammon are **day-only by official design**: at night they sit inert, and they come to life in daylight (see the Week 1 section at the top of this page). If the node you're trying to revitalize is in either region, wait for the in-game morning and try again. Second, some Beacon sites are already cleansed before you reach them — the player reports that prompted this FAQ single out spots like the Revenant-graves Beacon and nodes in the snowy regions that can't be interacted with — and a pre-cleansed Beacon has nothing left to revitalize. If it's already lit and serving you as a travel node, it's done.",
          "If neither applies — the node is a normal cleansable Beacon, the sun is up, and it still refuses the interaction — treat it as a genuine bug: report it on the Steam bug board with a screenshot (the original reports include them), and check the [patch notes page](/patch-notes/) in case a future hotfix addresses it.",
        ],
      },
    ],
    pending: {
      heading: "Still being verified",
      intro:
        "Beacon-count items from the Week 1 Update plus two behaviors and one naming discrepancy that sources have not pinned down:",
      items: [
        "Official count and locations of the Week 1 Update's new day-only Beacons in Fainweald and Mammon (player estimates say 10+; unconfirmed — this page's title and table update once verified)",
        "Whether the new day-only Beacons count toward the So Fresh, So Clean cleanse requirement",
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
      { label: "Patch Notes", href: "/patch-notes/" },
    ],
    sources: [
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026)",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
      {
        name: "PowerPyx — Mortal Shell 2 All Beacon Locations",
        url: "https://www.powerpyx.com/mortal-shell-2-all-beacon-locations/",
      },
      {
        name: "Steam Discussions — \"some Beacons i cant Revitalize\" (September 2, 2026)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581681246928682193/",
      },
      {
        name: "Fextralife Wiki — Mortal Shell 2 Beacons",
        url: "https://mortalshell2.wiki.fextralife.com/Beacons",
      },
    ],
     reviewedOn: "September 5, 2026",
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
      "This page maps both sides of that line: the short list of things you can genuinely lock yourself out of, the timing windows that decide them, and the safety nets the game does provide. Everything below was verified on August 27, 2026 against PowerPyx's full trophy roadmap, the Fextralife wiki, GameTrek's trophy database, and Playstack's official Steam forum — with the Baghead NG+ trap added on September 3, 2026 from the Steam bug-report thread and pinned Week 1 discussion, and the Week 1 Update's lockout/chest fixes cross-checked against the official notes on September 4, 2026.",
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
          "**NG+ trap, not first-run missable:** Baghead's Special Moonshine — carry the bottle into New Game+ and the Bag Holder trophy locks on that save; the endgame free-roam window is the time to deal with it (see the Baghead section below).",
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
          "**Egon's Feed Me trophy** — found southwest of Castigator's Keep Beacon; give him tribute until his cumulative total crosses the threshold and he refunds it doubled (see the [side quests guide](/side-quests/) for the exact figures), with no wrong order or expiry.",
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
        heading: "The NG+ trap: Baghead's Special Moonshine",
        paragraphs: [
          "A fourth entry behaves like a missable even though Bag Holder is formally a post-game-safe trophy. Per an August 29 Steam bug report — with a matching complaint in the pinned Week 1 thread — players who picked up the Special Moonshine (the bottle Baghead covets, found near the Illusionist's Cache) in their first playthrough and did not return it to its place cannot finish Baghead's chain in NG+: the quest refuses to continue while a Special Moonshine sits in the inventory, because his chain only proceeds from an empty-handed start. Mortal Shell II has no way to drop items, so the bottle is stuck there — and Bag Holder (23.5%) locks on that save. The bug reporter could only fix it with external save editing.",
          "The rule that costs nothing: settle the moonshine before entering NG+. During the endgame free-roam window, either finish Baghead's chain outright — the full script is in the [side quests guide](/side-quests/) — or return the Special Moonshine to its place. Community reports also tie one of the Week 1 Update's two new questline cosmetics to this chain, with players who entered NG+ early asking for it retroactively — one more reason to keep your first save Baghead-clean before you commit.",
        ],
      },
      {
        heading: "Patched since launch: lockouts and chests the Week 1 Update resolved",
        paragraphs: [
          "The missable-content picture shifts with every patch, and the Week 1 Update (August 29) retired several completionist worries that older guides still warn about — all per the official notes, cross-checked in our [patch notes](/patch-notes/):",
        ],
        bullets: [
          "**Vatra's Temple can no longer softlock your save** — the update fixed the bug that locked players out of the game permanently after exploring the temple, and repaired its gates that could strand your Gloom somewhere unreachable",
          "**Problematic chests were reset** — the notes confirm \"some problematic chests have been reset\", a chest that destroyed itself was fixed, several chests that became unreliable after loading a save now work, and dungeon reward chests across the first two regions were revised",
          "**Justicar's Stone and Gloombound Stone are no longer unique** — both were converted to Fragile Tarstones, and Fragile Tarstones \"can be found multiple times during a playthrough\" (Merrick also sells them), so neither pickup carries once-per-run weight anymore",
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
        "Whether the Bring My Ova NG+ bug has been fixed — PowerPyx's warning predates Balance Patch 1 and has not visibly changed, and the Week 1 Update (August 29) notes name no Ova fix either (checked September 4, 2026)",
        "Whether a patch resets the Special Moonshine on NG+ transition or otherwise unblocks Baghead's chain — the bug report requests exactly that, and the Week 1 notes (which fixed Baghead's ending unlocking early) name no moonshine reset",
        "Which Week 1 questline cosmetic ties to the Baghead chain, per community reports, and whether locked-out players get it retroactively",
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
        name: "Steam Discussions — Softlock Baghead achievement thread (August 29, 2026)",
        url: "https://steamcommunity.com/app/2584270/discussions/0/581680955258937465/",
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
      {
        name: "The Week 1 Update is Available Now — Mortal Shell II Steam announcement (Playstack, August 29, 2026) — source for the Vatra's Temple, chest-reset, and Fragile Tarstone fixes",
        url: "https://store.steampowered.com/news/app/2584270/view/1842212951305852",
      },
    ],
    reviewedOn: "September 4, 2026",
    datePublished: "2026-08-27",
  },
];

export function getGuidePage(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}
