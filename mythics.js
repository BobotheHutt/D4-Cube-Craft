// ══════════════════════════════════════════════════════════════
//  mythics.js  —  Mythic Unique items
//  slot: single slot string
//  slots: array for multi-slot items (rings, weapons)
// ══════════════════════════════════════════════════════════════
registerMythics({
    helm: [
        { name: "Andariel's Visage",    slot: "helm" },
        { name: "Harlequin Crest",      slot: "helm" }
    ],
    chest: [
        { name: "Tyrael's Might",       slot: "chest" }
    ],
    gloves: [
        { name: "Godslayer Crown",      slot: "gloves" }
    ],
    pants: [
        { name: "Ahavarion, Spear of Lycander", slot: "pants" }
    ],
    boots: [],
    amulet: [
        { name: "Melted Heart of Selig", slot: "amulet" }
    ],
    rings: [
        { name: "Ring of Starless Skies", slots: ["ring-left", "ring-right"] },
        { name: "Arreat's Bearing",        slots: ["ring-left", "ring-right"] }
    ],
    weapons: [
        { name: "The Grandfather",       slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
        { name: "Doombringer",           slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
        { name: "Heir of Perdition",     slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
        { name: "Condemnation",          slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
        { name: "Rapidfire",             slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] },
        { name: "Windforce",             slots: ["weapon-0","weapon-1","weapon-2","weapon-3"] }
    ]
});
