// ══════════════════════════════════════════════════════════════
//  uniques-sorcerer.js  —  Sorcerer Unique Items
//  Source: game8.co Season 11 data
//  NOTE: General/shared uniques belong in a separate file.
// ══════════════════════════════════════════════════════════════
registerUniques("sorcerer", [
    // ── WEAPONS ──────────────────────────────────────────────
    { name: "Flamescar", slot: "weapon", power: "While Channeling Incinerate, you periodically shoot embers that are attracted to enemies, each dealing Fire damage." },
    { name: "Okun's Catalyst", slot: "weapon", power: "Ball Lightning orbits you, creating a static field that damages all enemies within, and granting Unhindered while the field is active." },
    { name: "Orisvane", slot: "weapon", power: "For each Defensive Skill not on your Action Bar, you deal increased damage and gain its associated Enchantment effect." },
    { name: "Staff of Endless Rage", slot: "weapon", power: "Every 3rd cast of Fireball launches 2 additional projectiles and deals increased damage." },
    { name: "Staff of Lam Esen", slot: "weapon", power: "Your casts of Charged Bolts have a chance to be attracted to enemies and last 300% longer." },
    { name: "Strike of Stormhorn", slot: "weapon", power: "Ball Lightning splashes on contact for increased damage and Stuns enemies at maximum range. Super Ball Lightnings are larger, deal more damage, and have increased Stun duration." },
    { name: "The Oculus", slot: "weapon", power: "Gain the effect of the Teleport Enchantment for free. When you Evade using Teleport Enchantment, you are taken to a random location." },
    { name: "Vox Omnium", slot: "weapon", power: "Casting a Core Skill additionally fires 2 instances of Fire Bolt, Frost Bolt, or Spark, matching the elements of your last 2 non-Core Skill casts. These projectiles deal increased damage." },

    // ── ARMOR ────────────────────────────────────────────────
    { name: "Axial Conduit", slot: "pants", power: "Chain Lightning alternates between orbiting you and seeking up to 3 enemies. When it returns, it drains Mana. After draining enough total Mana, the bolt explodes for Lightning Damage. Chain Lightning expires if you don't have enough Mana." },
    { name: "Esu's Heirloom", slot: "boots", power: "Your Critical Strike Chance is increased by a percentage of your Movement Speed bonus." },
    { name: "Flameweaver", slot: "gloves", power: "Casting Fire Bolt through your Firewall causes it to split into 3 bolts, each dealing increased damage." },
    { name: "Gloves of the Illuminator", slot: "gloves", power: "Fireball now bounces as it travels, exploding each time it hits the ground, but its explosion deals reduced normal damage." },
    { name: "Hail of Verglas", slot: "helm", power: "Ice Shards now spreads out with 2 additional shards. You deal increased damage for each time Ice Shards damages an enemy, stacking up to a cap." },
    { name: "Iceheart Brais", slot: "pants", power: "Enemies that die while Frozen have a chance to unleash a Frost Nova." },
    { name: "Raiment of the Infinite", slot: "chest", power: "After using Teleport, Close enemies are Pulled to you and Stunned, but Teleport's Cooldown is increased by 20%." },
    { name: "Sidhe Bindings", slot: "gloves", power: "Casting Familiar now summons all three elemental variants at once. Familiar's duration is increased and its Cooldown is reduced, but its maximum Charges are reduced by 1." },
    { name: "Starfall Coronet", slot: "helm", power: "Meteor's Mana cost is replaced with a Cooldown and 3 total Charges. Casting Meteor drops 3 additional Meteors around the target." },

    // ── JEWELRY ──────────────────────────────────────────────
    { name: "Blue Rose", slots: ["ring-left", "ring-right"], power: "Lucky Hit: Up to a 30% chance to form an exploding Ice Spike dealing Cold Damage. Triple this chance if the enemy is Frozen." },
    { name: "Esadora's Overflowing Cameo", slot: "amulet", power: "Upon collecting Crackling Energy, there's a chance to release a lightning nova dealing Lightning Damage, increased for every 100 Intelligence you have." },
    { name: "Fractured Winterglass", slot: "amulet", power: "Casting Frozen Orb has a chance to spawn a random Conjuration when it explodes. Lucky Hit: Your Conjurations have a chance to launch a Frozen Orb at Nearby enemies." },
    { name: "Galvanic Azurite", slots: ["ring-left", "ring-right"], power: "Lightning damage leaves enemies magnetized, causing them to emit Crackling Energy and increasing all Lightning damage they take from you. Magnetized enemies that hit each other with Crackling Energy pull each other together." },
    { name: "Ophidian Iris", slot: "amulet", power: "Hydra is now a Core Skill and always summons a 3-headed Hydra whose attacks explode on impact. For each head above 3 it would have had, the Hydra grows larger and deals increased damage." },
    { name: "Tal Rasha's Iridescent Loop", slots: ["ring-left", "ring-right"], power: "Casting a Pyromancy, Shock, or Frost Skill increases your damage for 5 seconds, stacking once per element. Casting again refreshes all bonuses if the previous skill was a different Element." },
]);
