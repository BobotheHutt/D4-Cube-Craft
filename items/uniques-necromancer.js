// ══════════════════════════════════════════════════════════════
//  uniques-necromancer.js  —  Necromancer Unique Items
//  Source: game8.co Season 12 data
//  NOTE: General/shared uniques belong in a separate file.
// ══════════════════════════════════════════════════════════════
registerUniques("necromancer", [
    // ── WEAPONS ──────────────────────────────────────────────
    { name: "Black River", slot: "weapon", power: "Corpse Explosion consumes up to 4 additional Corpses around the initial Corpse, gaining increased damage and size per additional Corpse consumed." },
    { name: "Bloodless Scream", slot: "weapon", power: "Your Darkness Skills Chill enemies for up to 100% and deal increased damage to Frozen enemies. Lucky Hit: Your Darkness Skills have a chance to generate additional Essence against Frozen targets." },
    { name: "Gospel of the Devotee", slot: "weapon", power: "Your Basic Skills are empowered. Damaging an enemy with a Basic Skill causes them to take increased damage from your other Basic Skills for 10 seconds." },
    { name: "Gravebloom", slot: "weapon", power: "You raise 3 smaller Golems that each deal reduced normal damage and gain increased Attack Speed." },
    { name: "Lidless Wall", slot: "weapon", power: "Lucky Hit: While you have an active Bone Storm, hitting an enemy outside of a Bone Storm has a chance to spawn an additional Bone Storm at their location. Each active Sacrifice bonus increases this chance and the maximum possible Bone Storms." },
    { name: "Sanguivor, Blade of Zir", slot: "weapon", power: "Your Summons' damage afflicts enemies with Vampiric Curse. Consuming a Corpse also contributes a soul to Vampiric Curse. Army of the Dead can unleash the souls, causing both to deal increased damage per soul unleashed." },
    { name: "The Mortacrux", slot: "weapon", power: "When consuming a Corpse, there is a chance to also create a decaying Skeletal Simulacrum that seeks enemies. When it dies, it explodes for Shadow damage. Treated as a Macabre Skill." },

    // ── ARMOR ────────────────────────────────────────────────
    { name: "Blood Artisan's Cuirass", slot: "chest", power: "When you pick up enough Blood Orbs, a free Bone Spirit is spawned, dealing bonus damage based on your current Life percent." },
    { name: "Blood Moon Breeches", slot: "pants", power: "Your Minions' attacks have a chance to randomly inflict Decrepify or Iron Maiden. You deal increased Overpower damage to enemies affected by your Curses." },
    { name: "Cruor's Embrace", slot: "gloves", power: "Casting Blood Surge consumes nearby Corpses to cause mini novas. Damage is increased for each enemy drained by your initial cast and for each Corpse consumed." },
    { name: "Deathless Visage", slot: "helm", power: "Bone Spear leaves behind echoes that explode for Physical damage, increased by 5% for every 20% Critical Strike Damage you have." },
    { name: "Greaves of the Empty Tomb", slot: "boots", power: "Sever leaves behind Desecrated Ground that deals Shadow damage over 2 seconds." },
    { name: "Howl from Below", slot: "gloves", power: "Instead of detonating immediately, Corpse Explosion summons a Volatile Skeleton that charges at a random enemy and explodes. Corpse Explosion's damage is increased." },
    { name: "Indira's Memory", slot: "pants", power: "Blood Wave is also a Bone Skill that spawns a Bone Prison at its end point and increases Blood Skill damage when cast. Bone Spear is also a Blood Skill and drains Maximum Life to consume a Corpse and launch a new Bone Spear from it." },
    { name: "Kessime's Legacy", slot: "pants", power: "Blood Wave now forms a wave on each side of you. Both waves converge at your feet, Pulling In enemies and exploding. Each time an enemy is hit, they take increased damage from your Blood Waves." },
    { name: "Mutilator Plate", slot: "chest", power: "You are Blood Lanced, and when Blood Lance would deal damage to you, it instead Fortifies you and has a chance to form a Blood Orb. Blood Lance deals increased damage." },
    { name: "Path of Trag'Oul", slot: "boots", power: "Bone Prison traps a larger area and fires Bone Splinters at enemies trapped within. Your Maximum Essence increases each time these Bone Splinters hit an enemy." },
    { name: "The Hand of Naz", slot: "gloves", power: "Sacrificing both Skeletal Warriors and Golems grants additional Skeletal Mages. When a Skeletal Mage attacks enough without dying it upgrades to a Skeletal Arch-Mage with improved abilities." },
    { name: "The Unmaker", slot: "helm", power: "Soulrift's duration is increased for every Essence you spend while active. Soulrift deals increased Shadow damage per second to surrounding enemies for every Essence you gain while active." },

    // ── JEWELRY ──────────────────────────────────────────────
    { name: "Deathspeaker's Pendant", slot: "amulet", power: "Blood Surge casts a mini nova on your Minions. Damage is increased per target drained by the initial cast." },
    { name: "Ebonpiercer", slot: "amulet", power: "Blight also shoots 4 smaller projectiles that pierce enemies and deal Shadow damage over 3 seconds." },
    { name: "Ring of Mendeln", slots: ["ring-left", "ring-right"], power: "Every 6th attack from each Minion is empowered, exploding for Physical damage." },
    { name: "Ring of the Sacrilegious Soul", slots: ["ring-left", "ring-right"], power: "You automatically activate equipped Corpse Skills on Corpses around you: Raise Skeleton, Corpse Explosion, and Corpse Tendrils on periodic intervals." },
]);
