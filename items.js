// ══════════════════════════════════════════════════════════════
//  items.js  —  Item name data for the Horadric Prism Planner
//  Populated per gear slot. Each entry has a name and tier.
//  Tiers: "legendary" | "mythic"
//  Slot keys match the card IDs used in index.html and app.js
// ══════════════════════════════════════════════════════════════

window.ItemRegistry = {

    helm: [
        { name: "Select Item", tier: null },
        // ── Legendary ──────────────────────────
        { name: "Placeholder Legendary Helm 1", tier: "legendary" },
        { name: "Placeholder Legendary Helm 2", tier: "legendary" },
        // ── Mythic ─────────────────────────────
        { name: "Placeholder Mythic Helm 1",    tier: "mythic" }
    ],

    chest: [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Chest 1", tier: "legendary" },
        { name: "Placeholder Legendary Chest 2", tier: "legendary" },
        { name: "Placeholder Mythic Chest 1",    tier: "mythic" }
    ],

    gloves: [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Gloves 1", tier: "legendary" },
        { name: "Placeholder Legendary Gloves 2", tier: "legendary" },
        { name: "Placeholder Mythic Gloves 1",    tier: "mythic" }
    ],

    pants: [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Pants 1", tier: "legendary" },
        { name: "Placeholder Legendary Pants 2", tier: "legendary" },
        { name: "Placeholder Mythic Pants 1",    tier: "mythic" }
    ],

    boots: [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Boots 1", tier: "legendary" },
        { name: "Placeholder Legendary Boots 2", tier: "legendary" },
        { name: "Placeholder Mythic Boots 1",    tier: "mythic" }
    ],

    amulet: [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Amulet 1", tier: "legendary" },
        { name: "Placeholder Legendary Amulet 2", tier: "legendary" },
        { name: "Placeholder Mythic Amulet 1",    tier: "mythic" }
    ],

    "ring-left": [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Ring 1", tier: "legendary" },
        { name: "Placeholder Legendary Ring 2", tier: "legendary" },
        { name: "Placeholder Mythic Ring 1",    tier: "mythic" }
    ],

    "ring-right": [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Ring 1", tier: "legendary" },
        { name: "Placeholder Legendary Ring 2", tier: "legendary" },
        { name: "Placeholder Mythic Ring 1",    tier: "mythic" }
    ],

    // ── Weapon slots ─────────────────────────────────────────
    // These keys are generated dynamically by app.js per class.
    // Add entries here as real item data becomes available.
    // Key format: weapon-{position}  e.g. weapon-0, weapon-1, weapon-2, weapon-3

    "weapon-0": [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Weapon 1", tier: "legendary" },
        { name: "Placeholder Mythic Weapon 1",    tier: "mythic" }
    ],

    "weapon-1": [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Weapon 1", tier: "legendary" },
        { name: "Placeholder Mythic Weapon 1",    tier: "mythic" }
    ],

    "weapon-2": [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Weapon 1", tier: "legendary" },
        { name: "Placeholder Mythic Weapon 1",    tier: "mythic" }
    ],

    "weapon-3": [
        { name: "Select Item", tier: null },
        { name: "Placeholder Legendary Weapon 1", tier: "legendary" },
        { name: "Placeholder Mythic Weapon 1",    tier: "mythic" }
    ]
};
