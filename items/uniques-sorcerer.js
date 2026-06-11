// ══════════════════════════════════════════════════════════════
//  uniques-sorcerer.js  —  Sorcerer Unique Items
//  Source: D4_Uniques.xlsx (user-verified) with boss drops
// ══════════════════════════════════════════════════════════════
registerUniques("sorcerer", [
    // ── WEAPONS ─────────────────────────────────────────
    { name: "Drognan's Anguish", slot: "weapon", boss: "Andariel", power: "Casting Pyromancy Skills Burns you for 5% of your Maximum Life over 10 seconds. You inflict [200 - 250%] increased Burning damage based on how much of your Life is Burning." },
    { name: "Fang of the Vipermagi", slot: "weapon", boss: "Zir", power: "Inferno constricts the area 2 more times and deals x [20 - 25%] increased damage." },
    { name: "Flamescar", slot: "weapon", boss: "Urivar", power: "Incinerate gains one final charge, irradiating the area around you and increasing damage dealt by x [200-300%] but costing an additional 50 Mana per second." },
    { name: "Orsivane", slot: "weapon", boss: "Andariel", power: "For each Defensive Skill not on your Action Bar, you deal [15.0 - 25.0]%[x] increased damage and gain its associated Enchantment effect." },
    { name: "Staff of Endless Rage", slot: "weapon", boss: "Duriel", power: "Fireball deals [40 - 60]% increased damage and every 3rd Cast launches 2 additional projectiles." },
    { name: "Staff of Lam Esen", slot: "weapon", boss: "Zir", power: "Charged Bolts deal [55 - 80]%[x] increased damage, last 300% longer and seek enemies." },
    { name: "Staff of Zarae", slot: "weapon", boss: "Butcher", power: "Unstable Currents increases your Armor and Resistances by 100%[+] and kills increase your damage by [4.0 - 5.0]%[x] for the duration." },
    { name: "Strike of Stormhorn", slot: "weapon", boss: "Grigoire", power: "Ball Lightning deals x [40 - 60%] increased damage and explodes for 40% of its total damage when dissipating." },
    { name: "The Oculus", slot: "weapon", boss: "Grigoire", power: "Each enemy hit by Teleport increases the damage by [10.0 - 15.0]%[x] and reduces the Cooldown by 0.50 of the next Cast. Becoming Injured will Teleport you to a random location." },
    { name: "Thundergod's Blessing", slot: "weapon", boss: "Any", power: "Lightning damage against Close enemies has a 25% chance to grant Resolve and deal x [250 - 300%] increased damage." },
    { name: "Vision of the Firestorm", slot: "weapon", boss: "Grigoire", power: "Firewall has x [80 - 100%] increased damage and it's size is overcapped by 100%." },
    { name: "Vox Omnium", slot: "weapon", boss: "Beast in the Ice", power: "Casting a Core Skill triggers a random equipped Basic Skill at a random enemy which deals x [300 - 360%] increased damage." },
    // ── OFFHAND ─────────────────────────────────────────
    { name: "Onyx Soul", slot: "offhand", boss: "Varshan", power: "Frozen Orb now returns to you dealing [80 - 100]%[x] increased damage." },
    { name: "Shanar's Resonance", slot: "offhand", boss: "Butcher", power: "Deep Freeze's final blast deals [400 - 500]%[x] increased damage." },
    // ── HELM ────────────────────────────────────────────
    { name: "Hail of Verglas", slot: "helm", boss: "Astaroth", power: "Gain Ice Shard's Piercing Cold upgrade. Ice Shards deal x [30-50%] bonus damage." },
    { name: "Starfall Coronet", slot: "helm", boss: "Beast in the Ice", power: "Meteor's Casts consume Overpower when possible, dropping an additional Meteor for every 2 Overpower consumed. Meteor deals x [50-70%] increased damage." },
    // ── CHEST ───────────────────────────────────────────
    { name: "Emberfury", slot: "chest", boss: "Butcher", power: "Overpower increases your Pyromancy Skill damage by [20 - 25%] and size, Mana cost and Cooldowns by 0%." },
    { name: "Gift of Frost", slot: "chest", boss: "Beast in the Ice", power: "Ice Armor gains the Permafrost Variant for free and [20 - 25%] increased potency." },
    { name: "Raiment of the Infinite", slot: "chest", boss: "Bartuc", power: "Teleport pulls Close enemies to you and you gain [40 - 50] Damage Reduction for 8 seconds." },
    { name: "Raiment of the Sea", slot: "chest", boss: "Varshan", power: "Blizzard's effects linger on enemies for an additional [100 - 120]% of its duration." },
    // ── GLOVES ──────────────────────────────────────────
    { name: "Flameweaver", slot: "gloves", boss: "Harbinger", power: "Casting Fire Bolt through your Firewall causes it to split into 3 bolts, each dealing [80-100]%[x] increased damage." },
    { name: "Gloves of the Illuminator", slot: "gloves", power: "Fireball now bounces as it travels, exploding each time it hits the ground, but its explosion deals [70 - 100]% less damage." },
    { name: "Levin Grasp", slot: "gloves", boss: "Varshan", power: "Spark shocks enemies 1-9 additional times and deals [20 - 30%] increased damage." },
    { name: "Rimeblood", slot: "gloves", boss: "Zir", power: "Frost Bolt pierces through Crowd Controlled and Unstoppable enemies and deals [80 - 100]%[x] increased damage." },
    { name: "Sidhe Bindings", slot: "gloves", boss: "Harbinger", power: "Gain Familiar's Enchantment and Familiar's Potency is increased by x [60-80%]" },
    // ── PANTS ───────────────────────────────────────────
    { name: "Axial Conduit", slot: "pants", boss: "Bartuc", power: "Casting Chain Lightning has a 50% chance to activate [2-5] additional times." },
    { name: "Iceheart Brais", slot: "pants", boss: "Urivar", power: "Your Conjurations periodically unleash Frost Nova. Enemies affected by Frost Nova x [20-30%] increased damage from you." },
    // ── BOOTS ───────────────────────────────────────────
    { name: "Esu's Heirloom", slot: "boots", boss: "Astaroth", power: "Your Critical Strike Chance is increased by [20 - 40]% of your Movement Speed bonus." },
    // ── AMULET ──────────────────────────────────────────
    { name: "Esadora's Overflowing Cameo", slot: "amulet", boss: "Andariel", power: "Crackling Energy's discharge rate is increased by your Attack Speed, its damage is increased by x [100-121%] and each hit has a 25% chance to reduce a random Cooldown by 1 second." },
    { name: "Fractured Winterglass", slot: "amulet", boss: "Astaroth", power: "Casting a Core Skill has a 25% chance to summon a Conjuration of the same element. Each active Conjuration grants: x [3-6%] increased damage; 1 Mana per second; + 5% Movement Speed; +3% Damage Reduction" },
    { name: "Ophidian Iris", slot: "amulet", boss: "Bartuc", power: "Hydra is now a Core Skill with increased Mana cost and its attacks now explode dealing x [100 - 125%] increased damage." },
    // ── RINGS ───────────────────────────────────────────
    { name: "Blue Rose", slots: ["ring-left", "ring-right"], boss: "Duriel", power: "Skill that form Ice Spikes deal x [40-60%] increased damage. Lucky Hit: Up to a 15% chance to a form an exploding Ice Spike, dealing 255 cold damage." },
    { name: "Galvanic Azurite", slots: ["ring-left", "ring-right"], boss: "Duriel", power: "Cast Shock Skill damage leaves enemies Magnetized for 4 seconds, causing them to emit Crackling Energy and receive x [40-60%] increased Shock damage from you. Crackling Energy's damage Pulls Magnetized enemies together." },
    { name: "Molten Band", slots: ["ring-left", "ring-right"], boss: "Urivar", power: "Your Pyromancy Critical Strike Damage is increased by x [60 - 80%] against Healthy enemies and your Pyromancy Critical Strike Chance is increased by x [40 - 60%] against Injured enemies. Killing an enemy with a Critical Strike grants both bonuses against all enemies as well as +50% Attack Speed for 4 seconds." },
    { name: "Tal Rasha's Iridescent Loop", slots: ["ring-left", "ring-right"], boss: "Harbinger", power: "Casting a Pyromancy, Shock, or Frost Skill increases your damage by [10.0 - 20.0]%[x] for 8 seconds, stacking once per Element. Casting again refreshes all bonuses if the previous skill was a different Element." },
]);
