// ══════════════════════════════════════════════════════════════
//  mythics.js  —  Mythic Unique items, keyed by eligible slot
//  Items with slots:[] array are multi-slot (rings, weapons)
//  Call: registerMythics({ slotId: [{ name, slot }], ... })
// ══════════════════════════════════════════════════════════════
registerMythics({
    helm: [
        { name: "Andariel's Visage",  slot: "helm" },
        { name: "Harlequin Crest",    slot: "helm" },
        { name: "The 99th Maximus",   slot: "helm" }
    ],
    chest: [
        { name: "Arreat's Bearing",   slot: "chest" },
        { name: "Tyraels Might",      slot: "chest" }
    ],
    gloves: [
        { name: "Deathless Visage",   slot: "gloves" }
    ],
    pants: [
        { name: "Ahavarion Spear of Lycander", slot: "pants" }
    ],
    boots: [
        { name: "Doombringer",        slot: "boots" }
    ],
    amulet: [
        { name: "Melted Heart of Selig", slot: "amulet" }
    ],
    // Rings — eligible in both ring slots
    rings: [
        { name: "Ring of Starless Skies", slots: ["ring-left", "ring-right"] },
        { name: "Erreth-Akbe's Boon",     slots: ["ring-left", "ring-right"] }
    ],
    // Weapons — eligible across all weapon slots
    weapons: [
        { name: "Grandfather",        slots: ["weapon-0", "weapon-1", "weapon-2", "weapon-3"] },
        { name: "Heir of Perdition",  slots: ["weapon-0", "weapon-1", "weapon-2", "weapon-3"] },
        { name: "Shako",              slots: ["weapon-0", "weapon-1", "weapon-2", "weapon-3"] }
    ]
});
