// ══════════════════════════════════════════════════════════════
//  uniques-general.js  —  Non-Class-Specific Unique Items
//  Source: game8.co
//  These can be equipped by any class.
//  Mythics (Ahavarion, Doombringer, Grandfather, Andariel's,
//  Harlequin Crest, Heir of Perdition, Shroud of False Death,
//  Tyrael's Might, Melted Heart, Ring of Starless Skies) are
//  in mythics.js — not duplicated here.
// ══════════════════════════════════════════════════════════════
registerUniques("general", [
    // ── WEAPONS ──────────────────────────────────────────────
    { name: "Shard of Verathiel", slot: "weapon", power: "Basic Skills deal 50-200% increased damage but additionally cost 25 Primary Resource." },
    { name: "Shattered Vow", slot: "weapon", power: "Enemies afflicted by more Damage over Time than remaining Life are Executed." },
    { name: "The Butcher's Cleaver", slot: "weapon", power: "Lucky Hit: Critically Striking an enemy has up to a 100% chance to Fear and Slow them for 4 seconds." },

    // ── HELM ─────────────────────────────────────────────────
    { name: "Crown of Lucion", slot: "helm", power: "Each time you use a Skill with a Resource Cost, gain increased damage and Resource Cost is increased by 30% for 4 seconds, stacking up to 5 times." },
    { name: "Godslayer Crown", slot: "helm", power: "When you Stun, Freeze, or Immobilize an Elite, you Pull In all Nearby enemies and deal increased damage to them for 3 seconds. Can only occur once every 12 seconds." },

    // ── CHEST ────────────────────────────────────────────────
    { name: "Razorplate", slot: "chest", power: "Thorns has a 10% chance to deal 100-200% increased damage." },
    { name: "Soulbrand", slot: "chest", power: "Your Healing Potion no longer Heals instantly and instead grants a Barrier for 200% of the original healing for 4 seconds. You gain Damage Reduction while you have a Barrier." },

    // ── GLOVES ───────────────────────────────────────────────
    { name: "Endurant Faith", slot: "gloves", power: "When you would be damaged for at least 40% of your Maximum Life at once, it is instead distributed over the next 3 seconds and reduced." },
    { name: "Fists of Fate", slot: "gloves", power: "Your attacks randomly deal 1% to 200-300% of their normal damage." },
    { name: "Frostburn", slot: "gloves", power: "Lucky Hit: Up to a 20-60% chance to Freeze enemies for 3 seconds." },
    { name: "Paingorger's Gauntlets", slot: "gloves", power: "Damaging enemies with a Non-Basic Skill cast marks them for 3 seconds. When a Basic Skill first hits a marked enemy, the Basic Skill's damage is echoed to all marked enemies with increased damage." },

    // ── PANTS ────────────────────────────────────────────────
    { name: "Tassets of the Dawning Sky", slot: "pants", power: "When you take damage from a Non-Physical damage type, you gain increased Maximum Resistance to that damage type for 6 seconds. Can only apply to one damage type at a time." },
    { name: "Temerity", slot: "pants", power: "Effects that Heal you beyond 100% Life grant you a Barrier up to a percentage of your Maximum Life that lasts for 8 seconds. You may drink your Healing Potion while at full Life." },
    { name: "Tibault's Will", slot: "pants", power: "You deal increased damage while Unstoppable and for 5 seconds after. When you become Unstoppable, gain 50 of your Primary Resource." },

    // ── BOOTS ────────────────────────────────────────────────
    { name: "Flickerstep", slot: "boots", power: "Each enemy you Evade through reduces your active Ultimate Cooldown by 2-4 seconds, up to 10 seconds." },
    { name: "Penitent Greaves", slot: "boots", power: "You leave behind a trail of frost that Chills enemies. You deal increased damage to Chilled enemies." },
    { name: "Rakanoth's Wake", slot: "boots", power: "When you cast a Skill with a Cooldown, you explode, dealing Fire damage." },
    { name: "Yen's Blessing", slot: "boots", power: "Casting a Skill has a chance to cast a Non-Mobility, Non-Ultimate Skill that is currently on Cooldown. Can only occur once every 8 seconds." },

    // ── JEWELRY ──────────────────────────────────────────────
    { name: "Banished Lord's Talisman", slot: "amulet", power: "After you spend 275 of your Primary Resource, your next Core Skill is guaranteed to Overpower. Your Critical Strikes that Overpower deal increased damage." },
    { name: "Locran's Talisman", slot: "amulet", power: "Your skills gain Critical Strike Chance bonus per point of Primary Resource you have. Each point of Primary Resource above 100 grants Critical Strike Damage instead." },
    { name: "Mother's Embrace", slots: ["ring-left", "ring-right"], power: "If a Core Skill hits 4 or more enemies, 30-60% of the Resource cost is refunded." },
    { name: "X'Fal's Corroded Signet", slots: ["ring-left", "ring-right"], power: "Lucky Hit: Your damage over time effects have up to a 75% chance to erupt, dealing damage of the same type to surrounding enemies." },
]);
