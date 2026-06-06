// ══════════════════════════════════════════════════════════════
//  adept.js  —  Adept's Tuning Prism affix pool
//  UI Label: "Core Stats"
//  Source: In-game prism reference screenshot
//  Core Stat = class primary stat (filtered dynamically in app.js)
//  Skill Ranks = class-specific ranks (filtered dynamically in app.js)
// ══════════════════════════════════════════════════════════════
registerPrismBucket("adeptPrism", {
    universal: [],

    // Primary stat per class — app.js picks the right one
    stats: {
        barbarian:   "Strength",
        druid:       "Willpower",
        necromancer: "Intelligence",
        rogue:       "Dexterity",
        sorcerer:    "Intelligence",
        spiritborn:  "Dexterity",
        paladin:     "Strength",
        warlock:     "Intelligence"
    },

    // Class-specific skill rank affixes
    classskills: {
        barbarian: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Weapon Mastery Skills",
            "Ranks to Defensive Skills",
            "Ranks to Ancient Skills",
            "Ranks to Dust Devil Skills",
            "Ranks to Earthquake Skills"
        ],
        druid: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Companion Skills",
            "Ranks to Wrath Skills",
            "Ranks to Nature Magic Skills"
        ],
        necromancer: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Macabre Skills",
            "Ranks to Bone Skills",
            "Ranks to Blood Skills",
            "Ranks to Summoning Skills"
        ],
        rogue: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Agility Skills",
            "Ranks to Subterfuge Skills",
            "Ranks to Imbuement Skills"
        ],
        sorcerer: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Conjuration Skills",
            "Ranks to Mastery Skills",
            "Ranks to Pyromancy Skills",
            "Ranks to Shock Skills"
        ],
        spiritborn: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Centipede Skills",
            "Ranks to Eagle Skills",
            "Ranks to Gorilla Skills",
            "Ranks to Jaguar Skills"
        ],
        paladin: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Aura Skills",
            "Ranks to Conviction Skills",
            "Ranks to Holy Skills"
        ],
        warlock: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Affliction Skills",
            "Ranks to Dark Magic Skills",
            "Ranks to Shadow Skills"
        ]
    }
});
