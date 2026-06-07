// ══════════════════════════════════════════════════════════════
//  uniques-paladin.js  —  Paladin Unique Items
//  Source: game8.co Season 11 data
//  NOTE: General/shared uniques belong in a separate file.
//  NOTE: Shields mapped to "offhand" slot
// ══════════════════════════════════════════════════════════════
registerUniques("paladin", [
    // ── WEAPONS ──────────────────────────────────────────────
    { name: "Griswold's Opus", slot: "weapon", power: "Dealing direct damage grants increased Critical Strike Damage per enemy hit, stacking over 10 seconds. At maximum, Critical Strikes have a chance to deal double damage, heal you, and refresh the bonus." },
    { name: "Herald's Morningstar", slot: "weapon", power: "Blessed Hammer deals increased damage. Lucky Hit: Up to a 20% chance to spawn a base Blessed Hammer on the target hit." },
    { name: "Light's Rebuke", slot: "weapon", power: "Enemies impaled by the first strike of Divine Lance take increased damage from Divine Lance's subsequent hits." },
    { name: "Red Sermon", slot: "weapon", power: "Zeal deals increased damage and gains the Death or Glory Upgrade for free." },
    { name: "Sunbrand", slot: "weapon", power: "Heaven's Fury gains 3 additional rays and deals increased damage." },
    { name: "Sundered Night", slot: "weapon", power: "Casting an Aura Skill triggers a Consecration beneath you. You gain increased Aura Potency while standing in Consecration." },
    { name: "Supplication", slot: "weapon", power: "Brandish Unleashes in all directions dealing increased damage." },

    // ── SHIELDS ──────────────────────────────────────────────
    { name: "Bastion of Sir Matthias", slot: "offhand", power: "Blocking has a 15% chance to retaliate with a Shield Bash. Your Shield Bash damage is increased." },
    { name: "Cathedral's Song", slot: "offhand", power: "Lucky Hit: Disciple Skills have a chance to call down Spear of the Heavens on a random enemy. Spear of the Heavens damage is increased." },
    { name: "Gate of the Red Dawn", slot: "offhand", power: "Juggernaut Core Skills are empowered, dealing increased damage to the first enemy hit and storing the damage dealt, up to 10 times." },
    { name: "Herald of Zakarum", slot: "offhand", power: "Gain increased Strength, Resistance, Armor, and Retribution Chance." },
    { name: "Ward of the White Dove", slot: "offhand", power: "Blessed Shield deals increased damage. Casting another Skill makes your next 3 Blessed Shields double this bonus and cost less Faith." },

    // ── ARMOR ────────────────────────────────────────────────
    { name: "Arcadia", slot: "pants", power: "Rally Fortifies you for a percentage of your Maximum Life. Whenever you recover 8% of your Maximum Life, gain a charge of Rally." },
    { name: "Dawnfire", slot: "gloves", power: "Holy Light's passive now deals Fire Damage every second around you. Each time an enemy dies within this aura, its damage increases for 15 seconds, stacking up to 10 times." },
    { name: "Judicant's Glaivehelm", slot: "helm", power: "Lucky Hit: Judicator Skills have a chance to call down a Blessed Spear that carries a Judgement mark and deals Judgement's damage on impact." },
    { name: "Mantle of the Grey", slot: "chest", power: "Juggernaut Oath makes your Juggernaut Skills 25% larger but consumes Resolve equal to your Maximum, granting increased Juggernaut Skill damage for each point consumed." },
    { name: "March of the Stalwart Soul", slot: "boots", power: "Advance deals increased damage, gains 3 Skill Ranks, and travels twice as far." },

    // ── JEWELRY ──────────────────────────────────────────────
    { name: "Argent Veil", slots: ["ring-left", "ring-right"], power: "Arbiter's Evade triggers a random equipped Core Skill for every 2.0 meters traveled. Core Skills deal increased damage during Arbiter's evade and for 4 seconds after." },
    { name: "Judgement of Auriel", slot: "amulet", power: "Arbiter of Justice gains all Skill Upgrades and grants increased damage and Damage Reduction for each Skill Rank it has while in Arbiter form. This bonus doubles for 30 seconds after Arbiter of Justice lands." },
    { name: "Sanctis of Kethamar", slot: "amulet", power: "Arbiter form increases Aura Potency and Wing Strike damage." },
    { name: "Seal of the Second Trumpet", slots: ["ring-left", "ring-right"], power: "Judgement deals increased damage. Judgement has a 33% chance to explode twice." },
    { name: "Wreath of Auric Laurel", slots: ["ring-left", "ring-right"], power: "Lucky Hit: Holy Bolt has up to a 40% chance to trigger Purify. Purify causes enemies to take increased damage for 4 seconds." },
]);
