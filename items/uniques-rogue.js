// ══════════════════════════════════════════════════════════════
//  uniques-rogue.js  —  Rogue Unique Items
//  Source: D4_Uniques.xlsx (user-verified) with boss drops
// ══════════════════════════════════════════════════════════════
registerUniques("rogue", [
    // ── WEAPONS ─────────────────────────────────────────
    { name: "Asheara's Khanjar", slot: "weapon", boss: "Astaroth", power: "Hits with this weapon increase your Attack Speed by [3.5 - 5.0]% and damage by [11.7 - 16.7]% for 4 seconds, up to [10.5 - 15.0]% and [35.0 - 50.0]% respectively." },
    { name: "Cassia's Grace", slot: "weapon", boss: "Urivar", power: "Your Arrow Storms last 2 seconds shorter, deal x [120 - 180%] increased damage, and, when created, have a 50% chance to create an additional Arrow Storm on a nearby target." },
    { name: "Condemnation", slot: "weapon", boss: "Duriel", power: "Your Core Skills deal [45-60] % increased damage when spending 3 Combo Points. Your Basic Skills always generates 3 Combo Points." },
    { name: "Eaglehorn", slot: "weapon", boss: "Varshan", power: "Penetrating Shot bounces off walls and deals [120 - 150]% more damage." },
    { name: "Etna's Lost Dagger", slot: "weapon", boss: "Harbinger", power: "Deal 2 different types of Non-Physical damage increases the Potency of your Imbuement Skills by x [45 - 60%] and Non-Physical damage by x [45 - 60%] for 8 seconds. Basic Skills are now Imbueable." },
    { name: "Gladiator's Triumph", slot: "weapon", boss: "Astaroth", power: "The first direct damage you deal to an enemy is a guaranteed Critical Strike. When a Marksman Skill first Critically Strikes, it gains x [90 - 120%] increased damage, and you gain 1 Overpower. This can stack up to 4 over your Maximum Overpower." },
    { name: "Misericorde", slot: "weapon", boss: "Bartuc", power: "Lucky Hit: Dealing damage to an enemy affected by a Trap Skill has up to a 40% chance to: - Reduce the active Cooldowns of your Trap Skills by 30% - Increase your Trap Skill damage by x [9 - 12%] for 10 seconds, up to x [45 - 60%]." },
    { name: "Orphan Maker", slot: "weapon", boss: "Beast in the Ice", power: "Basic and Core Skills that use this weapon now Reload. Reload Skills deal [40-50]% increased damage and every second Reload Skill increases this bonus by 100% [x] for 2 seconds." },
    { name: "Skyhunter", slot: "weapon", boss: "Zir", power: "Every consecutive Cast of Rapid Fire increases the amount of arrows it fires by 2, up to 6. Rapid Fire deals x [80 - 100%] increased damage." },
    { name: "The Maestro", slot: "weapon", boss: "Grigoire", power: "Twisting Blades impales an extra set of blades into its target, dealing x [24 - 30%] increased damage and creating additional blades that return to you." },
    { name: "The Umbracrux", slot: "weapon", boss: "Zir", power: "Your Subterfuge Skills create an attackable Shade Totem for [6.0 - 8.0] seconds. Any base damage it takes is replicated onto surrounding enemies at 20% effectiveness. This effect is treated as a Trap Skill. You may only have 1 Shade Totem active at a time." },
    { name: "Windforce", slot: "weapon", boss: "Urivar", power: "Hits of Barrage have a [50 - 60]% chance to deal triple damage and Knock Down enemies." },
    // ── HELM ────────────────────────────────────────────
    { name: "Cowl of the Nameless", slot: "helm", boss: "Butcher", power: "Lucky Hit: Imbued Skills have up to a 40% chance to trigger a large explosion, dealing 75% of the damage dealt and applying the Imbuement effect to each enemy it hits with x [120 - 150%] Potency." },
    { name: "Deathmask of Nirmitruq", slot: "helm", boss: "Andariel", power: "You can now overexert yourself while Casting Flurry, spending 8% life when you don't have enough Energy. Spending life to Cast Flurry increases its damage bby [45-60]% and your Attack Speed by 50% for 5 seconds." },
    // ── CHEST ───────────────────────────────────────────
    { name: "Scoundrel's Leathers", slot: "chest", boss: "Harbinger", power: "Your Trap Skills can be thrown and deal x [45 - 60%] increased damage." },
    { name: "Shroud of Khanduras", slot: "chest", boss: "Zir", power: "Casting Dark Shroud makes you Immune for 2 seconds, but your Evade Cooldown is increased by [3.0 - 4.0] seconds. Evading while Dark Shroud is active leaves behind an explosion that deals [450 - 600] Shadow damage and Pulls In enemies." },
    { name: "Shrouded Gift", slot: "chest", boss: "Harbinger", power: "Whenever you gain Stealth, you also gain Concealment. Gain [25 - 30%] Damage Reduction while Stealthed and for 8 seconds after breaking it." },
    // ── GLOVES ──────────────────────────────────────────
    { name: "Fist of the Iron Rose", slot: "gloves", boss: "Butcher", power: "Damage a Close enemy with Marksman or Cutthroat Skills each grant a +15% Attack Speed bonus for 8 seconds. While both Attack Speed bonuses are active, you deal x [45 - 60%] increased damage to Close enemies." },
    { name: "Grasp of Shadow", slot: "gloves", boss: "Bartuc", power: "Lucky Hit: Casting a Marksman or Cutthroat Skill has up to a [45 - 60]% or 96% chance to summon a Shadow Clone that mimics that Skill." },
    { name: "Sea Lord's Fine Gloves", slot: "gloves", boss: "Duriel", power: "Casting or Channeling a Cutthroat Skill grants a stack of Momentum, up to 10. Casting a Marksman Skill removes a stack of Momentum. For each stack of Momentum, you gain: - [2.5 - 3%] Maximum Energy - x [2.5 - 3%] Energy Regeneration - x [5 - 6%] Increased Damage" },
    // ── PANTS ───────────────────────────────────────────
    { name: "Death's Pavane", slot: "pants", boss: "Varshan", power: "Dance of Knives drops knives from enemies hit. Picking them up grants you 1 Charge and increases your Dance of Knives damage by [25-30]% for 5 seconds, stacking up to 3 times." },
    { name: "Eyes in the Dark", slot: "pants", boss: "Astaroth", power: "Death Trap deals [75-90]% increased damage and will rearm itself after activating, once every 10 seconds." },
    // ── BOOTS ───────────────────────────────────────────
    { name: "Assassin's Stride", slot: "boots", boss: "Andariel", power: "Mobility Skills are always Shadow Imbued with [45 - 60]%[x] increased potency.  Lucky Hit: Damaging an Elite or Boss with a Mobility Skill has up to a [45 - 60]% chance to instantly trigger a free Shadow Imbuement explosion." },
    { name: "Beastfall Boots", slot: "boots", boss: "Andariel", power: "When you Cast a non-Channeled Ultimate Skill, it Consumes all of your Energy and deals x [0.6 - 0.75%] increased damage per Energy Consumed. Using a Cooldown restores 25 Energy." },
    { name: "Desperate March", slot: "boots", boss: "Grigoire", power: "Evading leaves behind Caltrops. Caltrops gain +50% increased Size and deal x [75 - 90%] increased damage." },
    // ── AMULET ──────────────────────────────────────────
    { name: "Word of Hakan", slot: "amulet", boss: "Bartuc", power: "Your Rain of Arrows is always Imbued with all Imbuements and deals x [75 - 90%] increased damage to Distant enemies." },
    // ── RINGS ───────────────────────────────────────────
    { name: "Bands of Ichorous Rose", slots: ["ring-left", "ring-right"], boss: "Duriel", power: "Lucky Hit: Poison or Cold Imbued Skills have up to a 35% chance to deploy a Poison Trap while it is equipped, depending on your equipped Poison Trap's element. Poison Trap gains the Infiltrator Variant for free and deals x [75 - 90%] increased damage." },
    { name: "Pitfighter's Gull", slots: ["ring-left", "ring-right"], boss: "Varshan", power: "Smoke Grenade bounces and detonates a second damage. Smoke Grenade's damage is increased by [7.5-10]% and Duration is increased by [7.5-10]%." },
    { name: "Saboteur's Signet", slots: ["ring-left", "ring-right"], boss: "Beast in the Ice", power: "Your Grenades gain +50% increased Size and deal x [75 - 90%] increased damage. Enemies damaged by Grenade Skills become either Vulnerable or Weakened for 4 seconds." },
    { name: "Scoundrel's Kiss", slots: ["ring-left", "ring-right"], boss: "Butcher", power: "Gain 1 Ferocity every 2 seconds as long as no enemies are Close to you. Your Marksman Skills deal x [12 - 15%] increased damage per stack of Ferocity." },
    { name: "Writhing Band of Trickery", slots: ["ring-left", "ring-right"], boss: "Urivar", power: "Casting a Subterfuge Skill leaves behind a Decoy Trap that continuously Taunts and lures enemies. After 2 seconds, it explodes, dealing [900 - 1,200] Corrupting damage over 6 seconds. This effect is treated as a Trap Skill and only one Decoy can be active at a time." },
    // ──  ────────────────────────────────────────────────
    { name: "Rustbitten Dirk", slot: "", boss: "Any", power: "Deal [90-120]% increased damage to isolated enemies." },
]);
