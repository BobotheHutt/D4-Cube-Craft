// ══════════════════════════════════════════════════════════════
//  uniques-barbarian.js  —  Barbarian Unique items
//  slot: single slot string
//  slots: array for multi-slot eligibility
// ══════════════════════════════════════════════════════════════
registerUniques("barbarian", [
    // ── Helm ──────────────────────────────────────────────
    { name: "Deathless Visage",         slot: "helm" },
    { name: "Helm of the Cranium",       slot: "helm" },
    // ── Chest ─────────────────────────────────────────────
    { name: "Arreat's Bearing",          slot: "chest" },
    { name: "Fields of Crimson",         slot: "chest" },
    // ── Gloves ────────────────────────────────────────────
    { name: "Gohr's Devastating Grips",  slot: "gloves" },
    // ── Pants ─────────────────────────────────────────────
    { name: "100,000 Steps",             slot: "pants" },
    // ── Boots ─────────────────────────────────────────────
    { name: "Rage of Harrogath",         slot: "boots" },
    // ── Amulet ────────────────────────────────────────────
    { name: "Ancients' Oath",            slot: "amulet" },
    { name: "Razorplate",                slot: "amulet" },
    // ── Rings ─────────────────────────────────────────────
    { name: "Paingorger's Gauntlets",    slots: ["ring-left", "ring-right"] },
    { name: "Temerity",                  slots: ["ring-left", "ring-right"] },
    // ── Weapons ───────────────────────────────────────────
    { name: "Battle Trance",             slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
    { name: "Overkill",                  slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
    { name: "Ramaladni's Magnum Opus",   slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
    { name: "The Grandfather",           slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
    { name: "Doombringer",               slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
    { name: "Hellhammer",                slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
    { name: "Mace of Smashing",          slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] }
]);
