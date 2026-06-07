// ══════════════════════════════════════════════════════════════
//  uniques-rogue.js  —  Rogue Unique Items
//  Source: game8.co Season 12 data
//  NOTE: General/shared uniques belong in a separate file.
// ══════════════════════════════════════════════════════════════
registerUniques("rogue", [
    // ── WEAPONS ──────────────────────────────────────────────
    { name: "Asheara's Khanjar", slot: "weapon", power: "Hits with this weapon increase your Attack Speed for 4 seconds, stacking up to a cap." },
    { name: "Condemnation", slot: "weapon", power: "Your Core Skills deal increased damage when spending 3 Combo Points. Your Basic Skills using this weapon have a 50% chance to generate 3 Combo Points." },
    { name: "Eaglehorn", slot: "weapon", power: "Penetrating Shot makes enemies Vulnerable for 3 seconds. Every 4th cast bounces off walls and deals more damage." },
    { name: "Orphan Maker", slot: "weapon", power: "Basic and Core skills that use this weapon now Reload. Reload Skills gain increased damage and every 2nd Reload Skill gains twice this bonus." },
    { name: "Skyhunter", slot: "weapon", power: "The first direct damage you deal to an enemy is a guaranteed Critical Strike. When you consume Precision casting a Skill, that Skill gains increased Critical Strike Damage and you gain Energy." },
    { name: "The Umbracrux", slot: "weapon", power: "Your Subterfuge Skills create an attackable Shade Totem. Any damage it takes is replicated onto surrounding enemies. This damage counts as a Trap Skill." },
    { name: "Windforce", slot: "weapon", power: "Hits of Barrage have a chance to deal triple damage and Knock Down enemies." },

    // ── ARMOR ────────────────────────────────────────────────
    { name: "Assassin's Stride", slot: "boots", power: "Mobility Skills are always Shadow Imbued with increased potency. Lucky Hit: Damaging an Elite or Boss with a Mobility Skill has a chance to instantly trigger a free Shadow Imbuement explosion." },
    { name: "Band of Ichorous Rose", slot: "gloves", power: "Poison Trap always deals its full damage over 3 seconds and benefits from all its upgrades with increased effectiveness. Also benefits from Combo Points, has no Cooldown during Inner Sight, and Cooldown is reduced by Preparation." },
    { name: "Beastfall Boots", slot: "boots", power: "When you cast an Ultimate skill, your next Core Skill consumes all of your Energy and deals increased damage per Energy consumed. Using a Cooldown restores 25 energy." },
    { name: "Cowl of the Nameless", slot: "helm", power: "You gain increased Lucky Hit Chance against Crowd Controlled enemies." },
    { name: "Death's Pavane", slot: "pants", power: "Dance of Knives drops knives from enemies hit. Picking them up grants you 1 charge and increases Dance of Knives damage for 6 seconds, stacking up to 3 times." },
    { name: "Deathmask of Nirmitruq", slot: "helm", power: "You can now overexert yourself while Casting Flurry, spending life when you don't have enough Energy. Spending life to Cast Flurry increases its damage and your Attack Speed." },
    { name: "Eyes in the Dark", slot: "pants", power: "Death Trap deals increased damage and will rearm itself once after activating." },
    { name: "Grasp of Shadow", slot: "gloves", power: "Lucky Hit: Damaging an enemy with a Marksman or Cutthroat Skill has a chance to summon a Shadow Clone that mimics that Skill." },
    { name: "Scoundrel's Leathers", slot: "chest", power: "Your Trap Skills can be thrown and will spawn a Death Trap every 10 seconds when Cast, granting you increased damage for 5 seconds." },
    { name: "Shroud of Khanduras", slot: "chest", power: "Dark Shroud grants Immune for 3 seconds, but your Evade Cooldown is increased. Evading while Dark Shroud is active leaves behind an explosion that deals Shadow damage and pulls in enemies." },

    // ── JEWELRY ──────────────────────────────────────────────
    { name: "Pitfighter's Gull", slots: ["ring-left", "ring-right"], power: "Casting Smoke Grenade increases your Critical Strike Damage for 3-6 seconds and leaves behind a cloud of shadows. While within the cloud, you gain Stealth once per second." },
    { name: "Saboteur's Signet", slots: ["ring-left", "ring-right"], power: "Casting a Core Skill has a chance to throw Stun Grenades that deal Physical damage and Stun enemies for 1 second." },
    { name: "Scoundrel's Kiss", slots: ["ring-left", "ring-right"], power: "Rapid Fire now lobs exploding arrows that deal increased damage." },
    { name: "Word of Hakan", slot: "amulet", power: "Your Rain of Arrows is always Imbued with all Imbuements and receives your Arrow Storm benefits." },
    { name: "Writhing Band of Trickery", slots: ["ring-left", "ring-right"], power: "Casting a Subterfuge Skill leaves behind a Decoy Trap that continuously Taunts and lures enemies. After 2 seconds, it explodes dealing Shadow damage. Treated as a Trap Skill." },
]);
