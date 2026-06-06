// ══════════════════════════════════════════════════════════════
//  resourceful.js  —  Resource Tuning Prism affix pool
//  UI Label: "Resource"
//  Source: In-game Tuning Prism screen (Barbarian, Season 7+)
//  Note: Fury-specific entries are Barbarian only.
//  Other classes will have their own resource type entries.
//  Lucky Hit: Chance to Reset Cooldowns appears to be universal.
// ══════════════════════════════════════════════════════════════
registerPrismBucket("resourcefulPrism", {

    // ── Universal (all classes) ───────────────────────────
    universal: [
        "Maximum Resource",
        "Resource Cost Reduction",
        "Resource Generation",
        "Lucky Hit: Up to 15% Chance to Reset Cooldowns"
    ],

    // ── Class-specific resource entries ───────────────────
    classresource: {
        barbarian: [
            "Fury Regeneration",
            "Fury On Kill"
        ],
        druid: [
            "Spirit Regeneration",
            "Spirit On Kill"
        ],
        necromancer: [
            "Essence Regeneration",
            "Essence On Kill"
        ],
        rogue: [
            "Energy Regeneration",
            "Energy On Kill"
        ],
        sorcerer: [
            "Mana Regeneration",
            "Mana On Kill"
        ],
        spiritborn: [
            "Ferocity Regeneration",
            "Ferocity On Kill"
        ],
        paladin: [
            "Wrath Regeneration",
            "Wrath On Kill"
        ],
        warlock: [
            "Malice Regeneration",
            "Malice On Kill"
        ]
    }
});
