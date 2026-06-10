// ══════════════════════════════════════════════════════════════
//  uniques-general.js  —  General Unique Pool (any class)
//  Source: fextralife wiki Boss Lair general pool
//  boss: which boss drops it ("Any" = general pool)
// ══════════════════════════════════════════════════════════════
registerUniques("general", [
    // ── WEAPONS ──────────────────────────────────────────────
    { name: "Azurewrath", slot: "weapon", boss: "Any", power: "After Freeze expires, enemies explode for [100 - 120%] of the damage you dealt to them while Frozen. " },
    { name: "Shard of Verathiel", slot: "weapon", boss: "Any", power: "Basic Skills deal [70 - 100]%[x] increased damage but additionally cost 25 Primary Resource." },
    { name: "The Butcher's Cleaver", slot: "weapon", boss: "Any", power: "Your attacks Critically Strike Injured Enemies. Killing Elites Fears and Slows nearby enemies by [85 - 95]% for 2 seconds" },
    
    // ── HELM ─────────────────────────────────────────────────
    { name: "Crown of Lucion", slot: "helm", boss: "Any", power: "Each time you use a Skill with a Resource Cost, gain [10 - 15]% or 18%[x] increased damage and Resource Cost is increased by 30%[+] for 4 seconds, stacking up to 5 times." },
    { name: "Godslayer Crown", slot: "helm", boss: "Any", power: "When you Stun, Freeze, or Immobilize an Elite, you Pull In all Nearby enemies and deal [30-40]%[x] increased damage to them." },

    // ── CHEST ────────────────────────────────────────────────
    { name: "Razorplate", slot: "chest", boss: "Any", power: "Thorns has a 10% chance to deal [180-200]% increased damage." },
    { name: "Soulbrand", slot: "chest", boss: "Any", power: "Your Healing Potion no longer heals instantly and instead grants a Barrier for 100% of the original healing for 4 seconds. You gain [25-30]% Damage Reduction while you have a Barrier and may drink your Healing Potion while at full Life." },

    // ── GLOVES ───────────────────────────────────────────────
    { name: "Endurant Faith", slot: "gloves", boss: "Any", power: "When you would be damaged for at least 30% of your Maximum Life at once, it is instead distributed over the next 2 seconds and reduced by [30-40]%." },
    { name: "Fists of Fate", slot: "gloves", boss: "Any", power: "Your attacks randomly deal 1% to [250-300]% or 360% of their normal damage." },
    { name: "Frostburn", slot: "gloves", boss: "Any", power: "Lucky Hit: Up to a 50% chance to Freeze enemies for 1 second. You deal x [40 - 50%] increased damage to Frozen enemies." },
    { name: "Paingorger's Gauntlets", slot: "gloves", boss: "Any", power: "Damaging enemies with a Non-Basic Skill cast marks them for 3 seconds. When a Basic Skill first hits a marked enemy, the Basic Skill's damage is echoed to all marked enemies, dealing [100-125]% [x] increased damage." },
    { name: "Wyrdskin", slot: "gloves", boss: "Any", power: "Attacks apply Vulnerable to Distance Enemies, and Weakened to Close Enemies.  You deal [30 - 40]%[x] increased damage to Enemies that are both Vulnerable and Weakened." },

    // ── PANTS ────────────────────────────────────────────────
    { name: "Tassets of the Dawning Sky", slot: "pants", boss: "Any", power: "When you take damage from a Non-Physical damage type, you gain [130 - 160]%[+] Maximum Resistance to that damage type for 6 seconds. This effect can only apply to one damage type at a time." },
    { name: "Temerity", slot: "pants", boss: "Any", power: "Effects that Heal you beyond 100% Life grant you a Barrier up to [80 - 100]% of your Maximum Life that lasts for 8 seconds. You may now drink your Healing Potion while at full Life." },
    { name: "Tibault's Will", slot: "pants", boss: "Any", power: "You deal [15- 20]%[x] increased damage while Unstoppable and for 5 seconds after. When you become Unstoppable, gain 50 of your Primary Resource." },

    // ── BOOTS ────────────────────────────────────────────────
    { name: "Flickerstep", slot: "boots", boss: "Any", power: "Each enemy you Evade through reduces your active Ultimate Cooldown by [3.0 - 4.0] or 4.8 seconds, up to 10 seconds." },
    { name: "Penitent Greaves", slot: "boots", boss: "Any", power: "You are permanently Unhindered and leave behind a trail of frost that Chills enemies. Your Chill effects cause enemies to take [10 - 15]%[x] increased damage from you." },
    { name: "Rakanoth's Wake", slot: "boots", boss: "Any", power: "When you cast a Skill with a Cooldown, you explode, dealing [450 - 525] Fire damage." },
    { name: "Yen's Blessing", slot: "boots", boss: "Any", power: "Casting a Skill has a [40 - 60]% chance to cast a Non-Mobility, Non-Ultimate Skill that is currently on Cooldown. Can only occur once every 8 seconds." },

    // ── JEWELRY ──────────────────────────────────────────────
    { name: "Banished Lord's Talisman", slot: "amulet", boss: "Any", power: "After you spend 275 of your Primary Resource, gain 4 stacks of Overpower. Your Critical Strikes that Overpower deal x [15 - 18%] increased damage per stack of Overpower." },
    { name: "Locran's Talisman", slot: "amulet", boss: "Any", power: "Critical Strikes deal [80 - 100]%[x] increases damage by your Critical Strike Chance is reduced by 50%[+]." },
    { name: "Blood-Mad Idol", slot: "amulet", boss: "Any", power: "You are always Berserking but take 200%[x] increased damage as Burning over 8 seconds. While Burning, Berserking grants an additional [75 - 125]%[x] increased damage.." },
    { name: "Mother's Embrace", slots: ["ring-left", "ring-right"], boss: "Any", power: "If a Core Skill hits 4 or more enemies, [50 - 60]% of the Resource cost is refunded." },
    { name: "Wendigo Brand", slot: "ring", boss: "Any", power: "Every 15 kills in the last [50 - 60] seconds increases your damage by 2%[x], and Maximum Life by 1%[+]." },
    { name: "Signet of Pelghain", slots: ["ring-left", "ring-right"], boss: "Any", power: "Your Freeze effects cause enemies to permanently take x [15 - 20%] increased damage from you for each second they are Frozen." },
    { name: "X'Fal's Corroded Signet", slots: ["ring-left", "ring-right"], boss: "Any", power: "Lucky Hit: Your damage over time effects have up to a 75% chance to erupt, dealing [450 - 525] damage of the same type to surrounding enemies." },
]);
