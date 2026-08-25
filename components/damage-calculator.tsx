"use client";

import { useMemo, useState } from "react";
import {
  DAMAGE_CAP_LEVEL,
  DAMAGE_MULT,
  GUARD_METER_DEFAULT,
  GUARD_METER_MARTYR,
  MAX_SLIDER_LEVEL,
  POISE_ENTRIES,
  SECONDARY_MULT,
  TARFORGE_LADDER,
  WEAPONS,
  ZERO_BASE_MULT,
} from "@/content/damage-calculator-data";

// The six toughest named bosses - shown as the stagger-break preview.
const BOSS_PREVIEW = POISE_ENTRIES.filter((e) => e.tier === "Boss").slice(0, 6);

function fmt(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

export function DamageCalculator() {
  const [weaponSlug, setWeaponSlug] = useState("axatana");
  const [baseDamage, setBaseDamage] = useState("");
  const [baseStagger, setBaseStagger] = useState("");
  const [level, setLevel] = useState(10);

  const weapon = WEAPONS.find((w) => w.slug === weaponSlug) ?? WEAPONS[0];
  const isMartyr = weapon.slug === "great-martyr-s-blade";

  const damageMult = DAMAGE_MULT[Math.min(level, DAMAGE_CAP_LEVEL)];
  const secondaryMult = SECONDARY_MULT[level];
  const zeroBaseMult = ZERO_BASE_MULT[level];
  const forgeRow = TARFORGE_LADDER[level - 1];

  const dmgBase = Number.parseFloat(baseDamage);
  const stagBase = Number.parseFloat(baseStagger);
  const hasDmg = Number.isFinite(dmgBase) && dmgBase > 0;
  const hasStag = Number.isFinite(stagBase) && stagBase > 0;
  const staggerValue = hasStag ? stagBase * secondaryMult : null;

  const guardNote = useMemo(
    () =>
      isMartyr
        ? `x${GUARD_METER_MARTYR.toFixed(2)} — Great Martyr's Blade is the one exception`
        : `x${GUARD_METER_DEFAULT.toFixed(2)}`,
    [isMartyr],
  );

  return (
    <div className="calc">
      <div className="calc-controls">
        <label className="calc-field">
          <span>Weapon</span>
          <select
            value={weaponSlug}
            onChange={(e) => setWeaponSlug(e.target.value)}
          >
            {WEAPONS.map((w) => (
              <option key={w.slug} value={w.slug}>
                {w.name}
                {w.collectible ? "" : " (non-collectible)"}
              </option>
            ))}
          </select>
        </label>
        <label className="calc-field">
          <span>Base damage (optional)</span>
          <input
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            placeholder="Your own tested value"
            value={baseDamage}
            onChange={(e) => setBaseDamage(e.target.value)}
          />
        </label>
        <label className="calc-field">
          <span>Base stagger damage (optional)</span>
          <input
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            placeholder="Your own tested value"
            value={baseStagger}
            onChange={(e) => setBaseStagger(e.target.value)}
          />
        </label>
        <label className="calc-field calc-level">
          <span>Upgrade level: +{level}</span>
          <input
            type="range"
            min="0"
            max={MAX_SLIDER_LEVEL}
            step="1"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          />
          <small>Damage caps at +16 · other stats scale to +20</small>
        </label>
      </div>

      <div className="calc-results">
        <div className="calc-result">
          <h3>Damage</h3>
          <p className="calc-mult">
            x{damageMult.toFixed(2)}
            {level > DAMAGE_CAP_LEVEL ? <small> capped at +16</small> : null}
          </p>
          <p className="calc-value">
            {hasDmg
              ? `${fmt(dmgBase * damageMult)} at +${level}`
              : "Enter a base damage value above"}
          </p>
        </div>
        <div className="calc-result">
          <h3>Stagger damage</h3>
          <p className="calc-mult">x{secondaryMult.toFixed(2)}</p>
          <p className="calc-value">
            {hasStag
              ? `${fmt(staggerValue!)} at +${level}`
              : "Enter a base stagger value above"}
          </p>
        </div>
        <div className="calc-result">
          <h3>Elemental · Crit · Resolve</h3>
          <p className="calc-mult">
            {zeroBaseMult === 0
              ? "Inactive at +0"
              : `x${zeroBaseMult.toFixed(2)}`}
          </p>
          <p className="calc-value">
            Elemental Efficiency, Critical Chance, Critical Damage and Resolve
            Regeneration share this curve.
          </p>
        </div>
        <div className="calc-result">
          <h3>Guard Meter</h3>
          <p className="calc-mult">{guardNote}</p>
          <p className="calc-value">
            The only stat with per-weapon variance.
          </p>
        </div>
      </div>

      <div className="calc-forge">
        <h3>Getting to +{level} at the Tarforge</h3>
        {forgeRow ? (
          <p>
            Level +{forgeRow.level} costs{" "}
            <strong>
              {forgeRow.amount}× {forgeRow.material} +{" "}
              {forgeRow.coin.toLocaleString("en-US")} Coin
            </strong>{" "}
            — cumulative {forgeRow.cumulativeCoin.toLocaleString("en-US")} Coin
            from +0.
          </p>
        ) : (
          <p>
            Level +0 is the un-upgraded weapon — no Tarforge materials spent
            yet.
          </p>
        )}
      </div>

      {weapon.tarstones.length > 0 ? (
        <div className="calc-forge">
          <h3>Ability Tarstones for {weapon.name}</h3>
          <p>
            {weapon.tarstones
              .map((t) => `${t.name} (${t.fits.toLowerCase()})`)
              .join(" · ")}
          </p>
        </div>
      ) : null}

      {staggerValue ? (
        <div className="calc-break">
          <h3>Stagger-break estimate vs the toughest bosses</h3>
          <p className="calc-value">
            Hits of {fmt(staggerValue)} stagger damage needed to break each
            poise pool (one full bar, no regeneration).
          </p>
          <ul>
            {BOSS_PREVIEW.map((boss) => (
              <li key={boss.name}>
                <span>{boss.name}</span>
                <span>
                  {Math.ceil(boss.maxPoise / staggerValue)} hits
                  <small> · poise {boss.maxPoise}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
