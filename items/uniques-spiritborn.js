// ══════════════════════════════════════════════════════════════
//  uniques-spiritborn.js  —  Spiritborn Unique Items
//  Source: D4_Uniques.xlsx (user-verified)
// ══════════════════════════════════════════════════════════════
registerUniques("spiritborn", [
    // ── WEAPONS ─────────────────────────────────────────
    { name: "Echo of Kwatli", slot: "weapon", power: "You deal x [53 - 67%] increased damage to Vulnerable enemies. After making an enemy Vulnerable, your next direct damage dealt to them: Heals you for 5% of your Maximum Life Generates 10 Vigor Removes the Vulnerable Effect" },
    { name: "Rod of Kepeleke", slot: "weapon", power: "Your Core Skills are now additionally Basic Skills and are free to cast. When cast at Maximum Vigor, your Core Skills consume all Vigor to return to full damage, cast at their largest Size, and become guaranteed Critical Strikes, with [0.33 - 0.38]%[x] or 0.90% increased Critical Strike Damage for each point of Vigor spent this way." },
    { name: "Sepazontec", slot: "weapon", power: "Your Basic Skills deal [40 - 60]% or 144% increased damage and always use their 3rd attack. Every 3rd cast of a Basic Skill strikes three times." },
    { name: "The Sunstained War-Crozie", slot: "weapon", power: "Your Focus Skills benefit from all their Upgrades, and they increase the damage of your Potency Skills by [20 - 25]% for 8 seconds, up to [100-125]% [x]." },
    { name: "Thundergod's Blessing", slot: "weapon", power: "Lightning damage against Close enemies has a 25% chance to grant Resolve and deal x [250 - 300%] increased damage." },
    { name: "Widow's Web", slot: "weapon", power: "Your Critical Strikes cause your Poisoning on an enemy to burst, dealing [167 - 200%] of the total Poisoning instantly to them and 10% of the burst to surrounding enemies before removing the Poisoning effect from the primary target." },
    { name: "Wūshe Nak Pa", slot: "weapon", power: "Casting an Ultimate Skill grants or amplifies its matching Primary Spirit Hall Bonus with [250 - 300]%[+] potency for 15 seconds. Your Ultimate Skills each gain an additional Skill Type: The Seeker is a Focus Skill. The Hunter is a Mobility Skill. The Devourer is a Potency Skill. The Protector is a Defensive Skill." },
    // ── HELM ────────────────────────────────────────────
    { name: "Harmony of Ebewaka", slot: "helm", power: "According to your secondary Spirit Hall choice, your Skills are all additionally Jaguar, Eagle, Gorilla, or Centipede Skills. Your skills deal [25 - 30]% or 48%[x] increased damage per Spirit type they have. (Spiritborn Only)" },
    { name: "Loyalty's Mantle", slot: "helm", power: "While your Spirit Hall choices match: Their bonuses are 100% more potent. Skills of their Base Spirit gain [50 - 60]% Vigor cost Reduction. Skills of their Base Spirit gain [50 - 60]% Cooldown Reduction" },
    // ── CHEST ───────────────────────────────────────────
    { name: "Jacinth Shell", slot: "chest", power: "Spending Vigor Heals you for [7 - 10]% of your Maximum Life. Every second, your active Cooldowns now drain 10% of your Maximum Life to reduce their durations by 2 seconds." },
    { name: "Protean Heart", slot: "chest", power: "The Base Spirit of a Skill cast grants: Eagle: + [17 - 20%] Movement Speed Gorilla: [17 - 20%] Damage Reduction Jaguar: [17 - 20%] Attack Speed Centipede: [1.7 - 2.0%] Life per Second Casting a Skill of a different Base Spirit: Swaps to the new bonus Increases Core Stats by +100% for 7 seconds" },
    // ── GLOVES ──────────────────────────────────────────
    { name: "Craze of the Dead God", slot: "gloves", power: "When you would take direct damage, it is instead distributed as Poisoning over the next 10 seconds but increased by [30 - 0]%. Lucky Hit: Direct damage has up to a 25% chance based on your Poisoned Life percentage to infect an enemy with Touch of Death." },
    { name: "Hesha E Kesungi", slot: "gloves", power: "The Protector can be invoked at range and Pulls inward with its smashes. Enemies in its area take [30 - 50]%[x] or 60%[x] increased damage from your Gorilla Skills, doubled while they are Knocked Down or a Boss." },
    // ── PANTS ───────────────────────────────────────────
    { name: "Balazan's Maxtlatl", slot: "pants", power: "Each attack damages Close enemies for [100 - 150]% or 180% of your Thorns and also deals 0% of this damage as Poisoning over 3 seconds. Each time you've retaliated with Thorns, for 5 seconds the Poisoning damage is increased by 0%, up to 0%." },
    { name: "Protection of the Prime", slot: "pants", power: "While moving you gain [25 - 30]% Dodge Chance. After standing still for 2 seconds you become Unstoppable until you move." },
    // ── BOOTS ───────────────────────────────────────────
    { name: "Path of the Emissary", slot: "boots", power: "Every [6 - 4] meters you move, invoke a base Core Skill from your primary Spirit Hall. While Ravager is active, Casting Core Skills instantly dashes you to your target." },
    { name: "Scorn of the Earth", slot: "boots", power: "Your Evade is now Soar. Soar deals x [125 - 150%] increased damage and triggers Vortex at its landing location." },
    // ── AMULET ──────────────────────────────────────────
    { name: "Sunbird's Gorget", slot: "amulet", power: "Picking up a Storm Feather forms a firestorm around you for 8 seconds dealing [300 - 600] Fire damage every 0.5 seconds. Every 5 additional Storm Feather you pick up intensifies the firestorm, increasing its damage by 100%[x] but not refreshing its duration. Storm Feathers are now Jaguar Skills and the firestorm is an Eagle, Jaguar, and Storm Feather Skill" },
    // ── RINGS ───────────────────────────────────────────
    { name: "Band of First Breath", slots: ["ring-left", "ring-right"], power: "Casting Evade consumes 1 stack of Resolve to increase your damage dealt by [50 - 60]% for 5 seconds. Gain Armored Hide's Passive Effect. (Spiritborn Only)" },
    { name: "Peacemonger's Signet", slots: ["ring-left", "ring-right"], power: "While you have at least 4 stacks of Ferocity, you gain [15 - 20]% increased damage and [60 - 80]%[+] increased Armor. Gaining Ferocity also grants Resolve." },
    { name: "Ring of Writhing Moon", slots: ["ring-left", "ring-right"], power: "A Pestilent Swarm spawns from you every 4 seconds, dealing [188 - 225] Poison damage per hit. Your Pestilent Swarms now orbit around you and generate 3 Vigor per hit. (Spiritborn Only)" },
    { name: "Ring of the Midday Hunt", slots: ["ring-left", "ring-right"], power: "Your Maximum Vigor is increased by 50%, and killing an enemy grants you [7 - 10] Vigor. While you have any Ferocity, your Poisoning effects deal their damage across 33% of the normal duration." },
    { name: "Ring of the Midnight Sun", slots: ["ring-left", "ring-right"], power: "When you Critically Strike, you regain [40 - 50]%[+] of the Vigor you've spent in the last 2 seconds. Gain Counterattack's Passive Effect. (Spiritborn Only)" },
    { name: "Wound Drinker", slots: ["ring-left", "ring-right"], power: "Generate [7 - 10] Vigor each time you deal Thorns damage. Gain Toxic Skin's Passive Effect." },
]);
