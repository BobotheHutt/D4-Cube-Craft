// ══════════════════════════════════════════════════════════════
//  uniques-barbarian.js  —  Barbarian Unique Items
//  Source: D4_Uniques.xlsx (user-verified) with boss drops
// ══════════════════════════════════════════════════════════════
registerUniques("barbarian", [
    // ── WEAPONS ─────────────────────────────────────────
    { name: "Ancients' Oath", slot: "weapon", boss: "Andariel", power: "Steel Grasp launches 2 additional chains. Enemies hit by Steel Grasp are Slowed by [55 - 65%] for 3 seconds." },
    { name: "Fields of Crimson", slot: "weapon", boss: "Zir", power: "Rupture creates a blood pool that inflicts Bleeding damage over 6 seconds. Enemies standing in the pool take [10 - 20%] increased Bleeding damage." },
    { name: "Hellhammer", slot: "weapon", boss: "Andariel", power: "Upheaval ignites the ground, Burning enemies for Fire damage over 4 seconds. Damage is increased for every 100 Strength you have." },
    { name: "Overkill", slot: "weapon", boss: "Varshan", power: "Death Blow creates a shockwave, dealing [30 - 45%] of its base damage to enemies. Enemies who die to this effect reset Death Blow's Cooldown." },
    { name: "Ramaladni's Magnum Opus", slot: "weapon", boss: "Butcher", power: "Skills using this weapon deal [0.2 - 0.4%] increased damage per point of Fury you have, but you lose 2 Fury every second." },
    { name: "Sabre of Tsasgal", slot: "weapon", boss: "Duriel", power: "You gain [3.0 - 5.0%] increased damage for each damaging Skill you have equipped, and an additional [6.0 - 10.0%] for 15 seconds when each of those Skills are used." },
    { name: "The Third Blade", slot: "weapon", boss: "Astaroth", power: "Your Weapon Mastery Skills are now also Core Skills that cost 35 Fury and deal [60 - 80%] of their normal damage, but their Cooldowns are removed." },
    { name: "Thousand-Eye Reaver", slot: "weapon", boss: "Any", power: "Moving grants Ferocity, and Maximum Ferocity is increased by [2-4]. Ferocity also increases Movement Speed by [6-8]% per stack." },
    // ── HELM ────────────────────────────────────────────
    { name: "Tuskhelm of Joritz the Mighty", slot: "helm", boss: "Bartuc", power: "When you gain Berserking while already Berserk, you have a [40 - 60%] chance to become additionally empowered, gaining 15% increased damage, 2 Maximum Fury per second, and 15% Cooldown Reduction." },
    { name: "Ugly Bastard Helm", slot: "helm", boss: "Harbinger", power: "Wrath of the Berserker explodes, dealing Fire damage to surrounding enemies. While Berserking, you are Direct Damage Immune, and your damage is converted to Fire damage and increased." },
    // ── CHEST ───────────────────────────────────────────
    { name: "Mantle of the Mountain's Fury", slot: "chest", boss: "Urivar", power: "Hammer of the Ancients also forms a seismic line that deals its damage and Slows enemies hit by [60 - 80%] for 4 seconds. Earthquakes it passes through explode for their total damage and are consumed." },
    { name: "Rage of Harrogath", slot: "chest", boss: "Duriel", power: "Lucky Hit: Up to a [20 - 40%] chance to reduce the Cooldowns of your Non-Ultimate Skills by 1.5 seconds when you inflict Bleeding on Elites." },
    { name: "The Relentless Heart", slot: "chest", boss: "Beast in the Ice", power: "Hammer of the Ancients deals [20 - 30%] increased damage on consecutive hits to the same target. This stacks up to 3 times." },
    // ── GLOVES ──────────────────────────────────────────
    { name: "Bane of Ahjed-Den", slot: "gloves", boss: "Harbinger", power: "While channeling Whirlwind, you now periodically hurl out a Mighty Throw that deals [75 - 90%] increased damage." },
    { name: "Gohr's Devastating Grips", slot: "gloves", boss: "Grigoire", power: "Whirlwind explodes after it ends, dealing [16 - 26%] of the total Base damage dealt to surrounding enemies as Fire damage." },
    { name: "Might of Qual-Kehk", slot: "gloves", boss: "Grigoire", power: "Mighty Throw now gains multiplicative damage instead of cooldown from Cooldown Reduction at 100% effectiveness." },
    { name: "Twin Strikes", slot: "gloves", boss: "Zir", power: "After casting Double Swing 4 times, your next Double Swing will hit 2 additional times, each dealing [25 - 45%] increased damage." },
    // ── PANTS ───────────────────────────────────────────
    { name: "Arreat's Bearing", slot: "pants", boss: "Bartuc", power: "Ancients you summon are empowered. Korlic creates an Earthquake dealing Physical damage over 4 seconds. Talic leaves behind Dust Devils that deal damage. Madawc ignites the ground, Burning enemies for damage over 4 seconds." },
    { name: "Chainscourged Mail", slot: "pants", boss: "Butcher", power: "Casting a damaging Brawling Skill disables it afterwards. When all of these Skills on your Action Bar are disabled, they become re-enabled with their Cooldowns refreshed. Your Brawling Skills deal [60 - 80%] increased damage for each disabled Skill." },
    // ── BOOTS ───────────────────────────────────────────
    { name: "100,000 Steps", slot: "boots", boss: "Varshan", power: "Ground Stomp's damage is increased by [20 - 25%] plus an additional amount based on the distance traveled since the last casted Ground Stomp, up to [80 - 100%]." },
    { name: "Hooves of the Mountain God", slot: "boots", boss: "Astaroth", power: "Casting a Basic Skill while at Maximum Fury causes your Fury to increasingly Drain until you run out, during which your Basic skills now cleave, dealing [70 - 100%] increased damage." },
    // ── AMULET ──────────────────────────────────────────
    { name: "Battle Trance", slot: "amulet", boss: "Astaroth", power: "Increases Frenzy's maximum stacks by 2. While you have maximum Frenzy stacks, your other skills gain [35 - 45%] increased Attack Speed." },
    { name: "Dark Stalker's Medallion", slot: "amulet", boss: "Duriel", power: "Casting a Skill with a Two-Handed Bludgeoning, Two-Handed Slashing, or Dual-Wielded weapon grants [20 - 30%] increased damage for 15 seconds. While all three bonuses are active, you gain Crowd Control Duration and Attack Speed." },
    { name: "Emblem of Staalbreak", slot: "amulet", boss: "Andariel", power: "Berserking's damage bonus is increased by [75 - 100%]. While not Healthy, you are always Berserk." },
    { name: "Nomad's Longing Heart", slot: "amulet", boss: "Harbinger", power: "Core Skills deal [30 - 50%] increased damage, but cost 25% more Fury. The damage is doubled against Injured enemies." },
    { name: "The Open Eye of Gorgorra", slot: "amulet", boss: "Bartuc", power: "When inflicting Damage Over Time, you have a chance equal to your Critical Strike Chance to increase the damage amount by [112.5 - 135%]." },
    { name: "Unbroken Chain", slot: "amulet", boss: "Urivar", power: "Casting Iron Maelstrom reduces the Cooldown of your other skills and grants you Damage Reduction for 5 seconds." },
    // ── RINGS ───────────────────────────────────────────
    { name: "Ring of Red Furor", slots: ["ring-left", "ring-right"], boss: "Butcher", power: "After spending 100 Fury within 5 seconds, your next cast of Hammer of the Ancients, Upheaval, or Death Blow is a guaranteed Critical Strike and deals [10 - 30%] increased Critical Strike damage." },
    { name: "Ring of the Ravenous", slots: ["ring-left", "ring-right"], boss: "Beast in the Ice", power: "Rend's duration is increased by [20 - 40%]. Brawling Skills apply 2 stacks of Rend to all enemies hit." },
]);
