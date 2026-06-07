// ══════════════════════════════════════════════════════════════
//  tempers-utility.js  —  Utility Temper Manuals
//  Valid slots: Helm, Chest, Pants, Gloves, Boots, Amulet, Offhand
//  Slots are universal — same for all classes
// ══════════════════════════════════════════════════════════════
registerTemperCategory("utility", {
    slots: ["helm", "chest", "pants", "gloves", "boots", "amulet", "offhand"],
    entries: [
        "Crowd Control Duration",
        "Lucky Hit Chance",
        "Impairment Reduction",
        "Thorns",
        "Fortify Generation",
        "Barrier Generation",
    ],
    classEntries: {
        warlock: [
            "Sigil Duration",
        ],
        paladin: [
            "Defiance Aura Potency",
            "Fanaticism Aura Potency",
            "Holy Light Aura Potency",
            "Arbiter Duration",
        ]
    }
});
