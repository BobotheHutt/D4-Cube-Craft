// ══════════════════════════════════════════════════════════════
//  adept.js  —  Adept's Tuning Prism affix pool
//  UI Label: "Core Stats"
//  Shows class primary stat (not generic "Core Stat") + skill ranks
//  Primary stat also rolls on Aggressive prism (dual-bucket)
// ══════════════════════════════════════════════════════════════
registerPrismBucket("adeptPrism", {
    universal: [],

    // Primary stat per class — only the relevant one shown in modal
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

    // Skill ranks mirror pragmatic but belong to Adept bucket
    classskills: {
        barbarian: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Weapon Mastery Skills",
            "Ranks to Ancient Skills",
            "Ranks to Dust Devil Skills",
            "Ranks to Earthquake Skills",
            "Ranks to Iron Shrapnel Skills",
        ],
        druid: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Companion Skills",
            "Ranks to Wrath Skills",
            "Ranks to Versatile Skills",
        ],
        necromancer: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Macabre Skills",
            "Ranks to Corpse Skills",
            "Ranks to Curse Skills",
        ],
        rogue: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Agility Skills",
            "Ranks to Subterfuge Skills",
            "Ranks to Imbuement Skills",
            "Ranks to Arrow Storm Skills",
        ],
        sorcerer: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Conjuration Skills",
            "Ranks to Mastery Skills",
        ],
        spiritborn: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Centipede Skills",
            "Ranks to Eagle Skills",
            "Ranks to Gorilla Skills",
            "Ranks to Jaguar Skills",
            "Ranks to Versatile Skills",
        ],
        paladin: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Human Skills",
            "Ranks to Shade Skills",
        ],
        warlock: [
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
            "Ranks to Defensive Skills",
            "Ranks to Curse Skills",
            "Ranks to Grenade Skills",
            "Ranks to Imbuement Skills",
            "Ranks to Subterfuge Skills",
        ]
    }
});
