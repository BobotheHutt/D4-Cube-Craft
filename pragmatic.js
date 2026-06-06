// ══════════════════════════════════════════════════════════════
//  pragmatic.js  —  Utility Tuning Prism affix pool
//  UI Label: "Utility"
//  Source: In-game Tuning Prism screen (Barbarian, Season 7+)
//  Note: Skill rank categories shown are Barbarian-specific below
//  the divider. Other classes will have their own skill categories.
// ══════════════════════════════════════════════════════════════
registerPrismBucket("pragmaticPrism", {

    // ── Universal (all classes) ───────────────────────────
    universal: [
        "Potion Capacity",
        "Lucky Hit Chance",
        "Healing Received",
        "Barrier Generation",
        "Fortify Generation",
        "Cooldown Reduction",
        "Impairment Reduction"
    ],

    // ── Class-specific skill rank categories ──────────────
    // Each class sees their own skill rank buckets below the divider
    classskills: {
        barbarian: [
            "Ranks to Weapon Mastery Skills",
            "Ranks to Basic Skills",
            "Ranks to Core Skills",
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
