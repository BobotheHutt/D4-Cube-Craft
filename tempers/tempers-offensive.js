// ══════════════════════════════════════════════════════════════
//  tempers-offensive.js  —  Offensive Temper Manuals
//  Valid slots: Weapons, Offhand, Amulet, Rings, Gloves
//  Slots are universal — same for all classes
//  ~half are shared across all classes, rest are class-specific
// ══════════════════════════════════════════════════════════════
registerTemperCategory("offensive", {
    slots: ["weapon", "offhand", "amulet", "ring-left", "ring-right", "gloves"],
    entries: [
        "Cold Damage",
        "Critical Strike Damage",
        "Damage",
        "Damage to Crowd Controlled Enemies",
        "Damage when Spending Resolve",
        "Damage Per Overpower Stack",
        "Damage to Close Enemies",
        "Damage to Distant Enemies",
        "Damage Over Time",
        "Fire Damage",
        "Holy Damage",
        "Lightning Damage",
        "Physical Damage",
        "Poison Damage",
        "Shadow Damage",
        "Vulnerable Damage",
        "Weapon Damage",
        "Weapon Mastery Damage",
        "Werebear Skill Damage",
        "Werewolf Skill Damage",
        "Whirlwind Damage",
    ],
    classEntries: {
        barbarian: [
            "Placeholder Barbarian Temper",
        ],
        druid: [
            "Placeholder Druid Temper",
        ],
        necromancer: [
            "Placeholder Necromancer Temper",
        ],
        rogue: [
            "Placeholder Rogue Temper",
        ],
        sorcerer: [
            "Placeholder Sorcerer Temper",
        ],
        spiritborn: [
            "Placeholder Spiritborn Temper",
        ],
        paladin: [
            "Placeholder Paladin Temper",
        ],
        warlock: [
            "Placeholder Warlock Temper",
        ]
    }
});
