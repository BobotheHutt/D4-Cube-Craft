// ══════════════════════════════════════════════════════════════
//  tempers-defensive.js  —  Defensive Temper Manuals
//  Valid slots: Helm, Chest, Pants, Amulet, Offhand
//  Slots are universal — same for all classes
// ══════════════════════════════════════════════════════════════
registerTemperCategory("defensive", {
    slots: ["helm", "chest", "pants", "amulet", "offhand"],
    entries: [
        "Armor",
        "Cold Resistance",
        "Fire Resistance",
        "Lightning Resistance",
        "Maximum Life",
        "Physical Resistance",
        "Poison Resistance",
        "Maximum Resolve Stacks",
        "Shadow Resistance",
        "Resistance to All Elements",
    ],
    classEntries: {
        paladin: [
            "Block Chance",
            "Armor in Arbiter Form",
        ],
        necromancer: [
            "Damage Reduction for Your Summons",
            "Chance for Minion Attacks to Fortify You for 3% Maximum Life",
            "Minions Inherit a % of Your Thorns",
            "Block Chance",
        ]
    }
});
