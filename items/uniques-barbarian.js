// ══════════════════════════════════════════════════════════════
//  uniques-barbarian.js  —  Barbarian Unique Items
//  Source: game8.co Season 13 data
//  NOTE: General/shared uniques (Azurewrath, Frostburn, etc.)
//        belong in a separate generals file, not here.
// ══════════════════════════════════════════════════════════════
registerUniques("barbarian", [
    // ── WEAPONS ──────────────────────────────────────────────
    { name: "Ancients' Oath", slot: "weapon", power: "Steel Grasp launches 2 additional chains. Enemies hit by Steel Grasp take increased damage from you for 5 seconds." },
    { name: "Fields of Crimson", slot: "weapon", power: "While using this weapon, damaging at least one enemy with Rupture creates a blood pool that inflicts Bleeding damage over 6 seconds. Enemies standing in the pool take 50% increased damage." },
    { name: "Hellhammer", slot: "weapon", power: "Upheaval ignites the ground Burning enemies for additional damage over 4 seconds, increased by 25% for every 100 Strength you have." },
    { name: "Overkill", slot: "weapon", power: "Death Blow creates a shockwave, dealing a percentage of its Base damage to enemies. Enemies who die to this effect also reset Death Blow's Cooldown." },
    { name: "Ramaladni's Magnum Opus", slot: "weapon", power: "Skills using this weapon deal increased damage per point of Fury you have, but you lose 10 Fury every second." },
    { name: "Sabre of Tsasgal", slot: "weapon", power: "You gain increased damage for each damaging Skill you have equipped, and additional increased damage for 15 seconds when each of those Skills is used." },
    { name: "The Third Blade", slot: "weapon", power: "Your Weapon Mastery Skills are now also Core Skills that have no Cooldowns but cost Fury, dealing reduced normal damage." },

    // ── ARMOR ────────────────────────────────────────────────
    { name: "100,000 Steps", slot: "boots", power: "When activating or refreshing the full Walking Arsenal Key Passive, you automatically cast Ground Stomp and gain Fury. Can only occur once every 5 seconds." },
    { name: "Arreat's Bearing", slot: "pants", power: "Ancients you summon are empowered. Korlic creates an Earthquake when he leaps, Talic leaves behind Dust Devils while he whirlwinds, Mawdac ignites the ground when he upheaves." },
    { name: "Bane of Ahjed-Den", slot: "gloves", power: "Every 12 seconds, your next Mighty Throw detonates its pulses instantly as Fire Damage and deals massively increased damage." },
    { name: "Chainscourged Mail", slot: "pants", power: "Casting a damaging Brawling Skill disables it afterwards. When all Brawling Skills on your Action Bar are disabled, they re-enable with Cooldowns refreshed. Damage increases per disabled Skill." },
    { name: "Gohr's Devastating Grips", slot: "gloves", power: "Whirlwind explodes every 3 seconds dealing increased damage as Fire. Critical Strikes with Whirlwind reduce the time until the next explosion." },
    { name: "Hooves of the Mountain God", slot: "boots", power: "When reaching Maximum Fury, your Fury will rapidly drain and all your Basic skills now cleave and deal increased damage." },
    { name: "Mantle of the Mountain's Fury", slot: "chest", power: "Hammer of the Ancients also forms a seismic line that deals its damage and Slows enemies. Earthquakes it passes through explode for their total damage and are consumed." },
    { name: "Might of Qual-Kehk", slot: "gloves", power: "Mighty Throw now gains multiplicative damage instead of cooldown from Cooldown Reduction." },
    { name: "Rage of Harrogath", slot: "chest", power: "Lucky Hit: Inflicting Bleeding on an enemy has a chance to reduce the Cooldowns of your Skills by 1 second." },
    { name: "The Relentless Heart", slot: "chest", power: "Hammer of the Ancients deals increased damage on consecutive hits to the same target. This stacks up to 3 times." },
    { name: "Tuskhelm of Joritz the Mighty", slot: "helm", power: "When you gain Berserking while already Berserk, you have a chance to become more enraged granting increased damage, Fury per second, and Cooldown Reduction." },
    { name: "Twin Strikes", slot: "gloves", power: "After casting Double Swing 4 times, your next Double Swing will hit 2 additional times, each dealing increased damage." },
    { name: "Ugly Bastard Helm", slot: "helm", power: "Explode when activating Wrath of the Berserker, dealing Fire damage to enemies. While Berserking, damage you deal is converted to Fire damage with increased Fire damage." },

    // ── JEWELRY ──────────────────────────────────────────────
    { name: "Battle Trance", slot: "amulet", power: "Increase Frenzy's maximum stacks by 2. While at maximum stacks, you deal increased damage and your other Skills gain increased Attack Speed." },
    { name: "Dark Stalker's Medallion", slot: "amulet", power: "Casting a Skill with a Two-Handed Bludgeoning, Two-Handed Slashing, or Dual-Wielded weapon grants increased damage for 15 seconds. While all three bonuses are active, you gain Crowd Control Duration and Attack Speed." },
    { name: "Emblem of Staalbreak", slot: "amulet", power: "Berserking's damage bonus is increased. While not Healthy, you are always Berserk." },
    { name: "Nomad's Longing Heart", slot: "amulet", power: "Core Skills deal increased damage, but cost more Fury. The damage is doubled against Injured enemies." },
    { name: "Ring of Red Furor", slots: ["ring-left", "ring-right"], power: "After spending 100 Fury within 3 seconds, your next cast of Hammer of the Ancients, Upheaval, or Death Blow is a guaranteed Critical Strike and deals bonus Critical Strike Damage." },
    { name: "Ring of the Ravenous", slots: ["ring-left", "ring-right"], power: "Rend's duration is increased. Damaging enemies with your Brawling Skills applies 2 stacks of Rend's Bleed." },
    { name: "The Open Eye of Gorgorra", slot: "amulet", power: "When inflicting Damage Over Time, you have a chance equal to your Critical Strike Chance to increase the damage amount." },
    { name: "Unbroken Chain", slot: "amulet", power: "Casting Steel Grasp reduces Iron Maelstrom's Cooldown. Enemies damaged by Iron Maelstrom deal less damage for 6 seconds." },
]);
