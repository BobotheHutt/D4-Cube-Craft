// ══════════════════════════════════════════════════════════════
//  tempers-resource.js  —  Resource Temper Manuals
//  Valid slots: Amulet, Rings
//  Slots are universal — same for all classes
// ══════════════════════════════════════════════════════════════
registerTemperCategory("resource", {
    slots: ["amulet", "ring-left", "ring-right"],
    entries: [
        "Cooldown Reduction",
        "Lucky Hit: Chance to Restore Primary Resource",
        "Resource Cost Reduction",
        "Resource Generation",
    ]
});
