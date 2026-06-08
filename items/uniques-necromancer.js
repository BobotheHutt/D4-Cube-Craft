// ══════════════════════════════════════════════════════════════
//  uniques-necromancer.js  —  Necromancer Unique Items
//  Source: D4_Uniques.xlsx (user-verified)
// ══════════════════════════════════════════════════════════════
registerUniques("necromancer", [
    // ── WEAPONS ─────────────────────────────────────────
    { name: "Black River", slot: "weapon", power: "Corpse Explosion consumes up to 4 additional Corpses around the initial Corpse, gaining [120 - 160]%[x] or 192%[x] damage and [42.0 - 50.0]% or 60.0% Size per additional Corpse consumed." },
    { name: "Blood Wake", slot: "weapon", power: "Blood Mist casts Corpse Explosion on surrounding Corpses. When Blood Mist detonates a Corpse, its Cooldown is reduced by 1 second and you gain +[50 - 60%] increased Movement Speed for 3 seconds." },
    { name: "Bloodless Scream", slot: "weapon", power: "Your Darkness Skills Chill enemies for up to 100% and deal [100 - 125]%[x] increased damage to Frozen enemies and bosses. Every 800 times you damage enemies with Darkness Skills, all Nearby enemies are Feared for 0.25 seconds before Freezing for 3 more seconds." },
    { name: "Gospel of the Devotee", slot: "weapon", power: "Your Basic Skills gain the effect of every Upgrade. Damaging an enemy with a Basic Skill causes them to take x [30 - 40%] increased damage from your other Basic Skills for 10 seconds." },
    { name: "Hangman's Hand", slot: "weapon", power: "Sever deals x [10 - 15%] increased damage and sends out 1 additional specter to attack a nearby enemy." },
    { name: "Lidless Wall", slot: "weapon", power: "Lucky Hit: While you have an active Bone Storm, hitting an enemy outside has up to a [35 - 45]% chance to spawn an additional Bone Storm at their location. Each Sacrifice bonus increases this chance by 25% and allows you to spawn 1 more Bone Storm. Each active Bone Storm grants 20% Critical Strike Damage." },
    { name: "Mace of King Leoric", slot: "weapon", power: "Your Golem will consume one of your Skeleton Mages or Skeleton Warriors every 8 seconds, healing to full Life and gaining x [70 - 80%] increased damage for 10 seconds." },
    { name: "Omen of Pain", slot: "weapon", power: "A dark aura surrounds you, inflicting Decrepify and Iron Maiden on enemies who touch it. Curses inflicted this way to spread to surrounding targets every [1.3 - 1] seconds and last 4 seconds outside of the aura." },
    { name: "The Mortacrux", slot: "weapon", power: "When consuming a Corpse, there is a [40 - 50]% or 48% chance to also create a decaying Skeletal Simulacrum that seeks enemies but cannot attack. When it dies, it explodes for 450 Shadow damage. This effect is treated as a Macabre Skill." },
    { name: "Vengeful Sinew", slot: "weapon", power: "Bone Spirit explodes an additional time, dealing [35 - 45%] of normal damage. Bone Spirit deals x [30 - 40%] increased damage." },
    // ── HELM ────────────────────────────────────────────
    { name: "Deathless Visage", slot: "helm", power: "Critical Strikes with Bone Spear form an echo that bursts, dealing [30 - 40]% of its normal damage. Bone Spear deals [40-50]% increased Critical Strike damage." },
    { name: "The Undercrown", slot: "helm", power: "Your maximum number of Skeleton Warriors and Skeleton Mages is increased by [2 - 4]. Commanding Skeleton Warriors also causes Skeleton Mages to focus the same target for 5 seconds." },
    { name: "The Unmaker", slot: "helm", power: "Soulrift's duration is increased by 0.5 seconds for every 30 Essence you spend while it's active, up to 8 seconds. Soulrift deals [200 - 250]% of its Shadow damage per second to surrounding enemies for every 30 Essence you gain while its active." },
    // ── CHEST ───────────────────────────────────────────
    { name: "Blood Artisan's Cuirass", slot: "chest", power: "When you pick up [10-3] Blood Orbs, a free Bone Spirit is spawned, dealing bonus damage based on your current Life percent." },
    { name: "Mutilator Plate", slot: "chest", power: "You are Blood Lanced, and when Blood Lance would deal damage to you, it instead Fortifies you for 5% of your Maximum Life and has a 10% chance to form a Blood Orb. Blood Lance deals [70-90]%[x] increased damage." },
    { name: "The Gloom Ward", slot: "chest", power: "Shadow damage infects enemies with Shadowblight for 2 seconds. Every 8th time an enemy receives Shadow damage from you while they are affected by Shadowblight, they take an additional x [500 - 600%] of that damage as Corrupting damage over 4 seconds." },
    // ── GLOVES ──────────────────────────────────────────
    { name: "Cruor's Embrace", slot: "gloves", power: "Casting Blood Surge picks up 4 Blood Orbs around you to expel smaller blood novas, dealing [50 - 60%] of normal damage." },
    { name: "Deathgrip", slot: "gloves", power: "Your maximum number of Skeleton Warriors is increased by 6. Skeleton Warriors cleave with their attacks and deal x[40 - 50%] increased damage. Commanding them onto a target increases the damage that target takes from your Skeleton Warriors by x[40 - 50%]." },
    { name: "Gravewalker's Hand", slot: "gloves", power: "Your Essence Generation is increased by [30 - 40%]. Your Bone Skills deal x0.5% increased damage for each point of Essence you have when Cast, up to x [60 - 80%]." },
    { name: "Howl from Below", slot: "gloves", power: "Instead of detonating immediately, Corpse Explosion summons a Volatile Skeleton that charges at a random enemy and explodes. Corpse Explosion's damage is increased by [70-90]%[x]." },
    { name: "The Hand of Naz", slot: "gloves", power: "Your maximum number of Skeleton Mages is increased by 1 and they are upgraded to Arch-Mages. Arch-Mages teleport to safety when attacked and their attacks occasionally shatter on impact, dealing x [80 - 90%] increased damage to the enemy and up to 3 additional targets." },
    // ── PANTS ───────────────────────────────────────────
    { name: "Blood Moon Breeches", slot: "pants", power: "Your Summoning Skills have a [7.0 - 10.0]% chance to randomly inflict Decrepify or Iron Maiden. You deal [50.0 - 60.0]% increased Critical Strike Damage to enemies affected by your Curses. Curses can now be applied from all of your Summoning Skills, not just Minion attacks." },
    // ── BOOTS ───────────────────────────────────────────
    { name: "Greaves of the Empty Tomb", slot: "boots", power: "Sever leaves behind Desecrated Ground that deals [300 - 1,200] Shadow damage over 2 seconds." },
    { name: "Path of Trag'Oul", slot: "boots", power: "Bone Prison traps a larger area and fires [30 - 35] Bone Splinters at enemies trapped within. Increase your Maximum Essence by 2 for 10 seconds each time these Bone Splinters hit an enemy." },
    // ── AMULET ──────────────────────────────────────────
    { name: "Deathspeaker's Pendant", slot: "amulet", power: "Blood Surge casts a mini nova on your Minions, dealing [41 - 85] or 103 damage. Damage is increased by 10% per target drained by the initial cast, up to 50%." },
    { name: "Ebonpiercer", slot: "amulet", power: "Blight also shoots 4 smaller piercing projectiles, each dealing [27 - 33%] of Blight's defiled area damage." },
    { name: "Pact of Bone", slot: "amulet", power: "Your Minions gain +[30 - 35%] Attack Speed and Critical Strike Chance. When one of your Minions die, your other Minions enrage, dealing x[30 - 35%] increased damage for 3 seconds." },
    { name: "Red Blessing", slot: "amulet", power: "While Healthy, gain 4 Maximum Overpower. Blood Orbs grant 2 stacks of Overpower. You deal [5.33 - 6.67%] increased damage per stack of Overpower." },
    { name: "Will of Rathma", slot: "amulet", power: "Vulnerable, Weakened, Crowd Controlled, or Corrupted enemies are Afflicted, taking 40% increased damage from you. Curse Skills deal [600 - 750] Physical Damage when applied to Afflicted enemies." },
    // ── RINGS ───────────────────────────────────────────
    { name: "Ring of Mendeln", slots: ["ring-left", "ring-right"], power: "Every 6th attack from each Minion is empowered, exploding for [975 - 1,650] Physical damage." },
    { name: "Ring of the Sacrilegious Soul", slots: ["ring-left", "ring-right"], power: "Corpse Tendrils gains the effect of every Upgrade and is automatically cast every [8 - 6] seconds." },
]);
