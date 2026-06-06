// ══════════════════════════════════════════════════════════════
//  adept.js  —  Core Stats Tuning Prism affix pool
//  UI Label: "Core Stats"
//  Primary stat only — skill ranks moved to pragmaticPrism
//  per in-game Tuning Prism screen (Season 7+)
// ══════════════════════════════════════════════════════════════
registerPrismBucket("adeptPrism", [
    "Strength",
    "Dexterity",
    "Intelligence",
    "Willpower"
    // app.js filters to show only the active class primary stat
    // in the affix modal, but all 4 are stored here for lookup
]);
