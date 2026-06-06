// ══════════════════════════════════════════════════════════════
//  resourceful.js  —  Resourceful Tuning Prism affix pool
//  UI Label: "Resource"
//  Source: In-game master reference screenshot (all classes)
//  Lucky Hit entry confirmed as "Restore Primary Resource"
// ══════════════════════════════════════════════════════════════
registerPrismBucket("resourcefulPrism", {
    universal: [
        "Maximum Resource",
        "Resource Cost Reduction",
        "Lucky Hit: Up to 15% Chance to Restore Primary Resource"
    ],

    // Class-specific resource regeneration and on-kill entries
    classresource: {
        barbarian: [
            "Fury On Kill",
            "Fury Regeneration"
        ],
        druid: [
            "Spirit On Kill",
            "Spirit Regeneration"
        ],
        necromancer: [
            "Essence On Kill",
            "Essence Regeneration"
        ],
        rogue: [
            "Energy On Kill",
            "Energy Regeneration"
        ],
        sorcerer: [
            "Mana On Kill",
            "Mana Regeneration"  // Note: may show as separate from universal
        ],
        spiritborn: [
            "Vigor On Kill",
            "Vigor Regeneration"
        ],
        paladin: [
            "Faith On Kill",
            "Faith Regeneration",
            "Wrath every 10 Kills",
            "Wrath Regeneration"
        ],
        warlock: [
            "Energy On Kill",
            "Energy Regeneration"
        ]
    }
});
