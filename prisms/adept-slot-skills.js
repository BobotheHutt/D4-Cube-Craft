// ══════════════════════════════════════════════════════════════
//  Adept prism skill rank availability by class and gear slot
//  Each entry lists which skill CATEGORIES can roll on that slot.
//  The actual affixes are "Ranks to [Category] Skills".
//  "-" or missing = no skill ranks available on that slot.
//  Source: Cross-referenced from two community sources,
//          conservative (fewer options) on conflicts.
// ══════════════════════════════════════════════════════════════
window.ADEPT_SLOT_SKILLS = {
    barbarian: {
        helm:    ["Defensive", "Weapon Mastery"],
        chest:   ["Brawling", "Defensive"],
        gloves:  ["Core", "Ultimate"],
        pants:   ["Basic", "Defensive"],
        boots:   ["Brawling", "Defensive"],
        amulet:  ["Core"],
        ring:    ["Weapon Mastery"],
        "weapon-0": ["Ultimate"],   // 2H Bludgeoning
        "weapon-1": ["Basic"],      // 1H
        "weapon-2": ["Ultimate"],   // 2H Slashing
        "weapon-3": ["Basic"],      // 1H
    },
    druid: {
        helm:    ["Companion", "Defensive"],
        chest:   ["Defensive", "Wrath"],
        gloves:  ["Core", "Ultimate"],
        pants:   ["Basic", "Defensive"],
        boots:   ["Defensive", "Wrath"],
        amulet:  ["Core"],
        ring:    ["Companion"],
        "weapon-0": ["Ultimate"],   // 2H
        "weapon-1": ["Basic"],      // 1H
        offhand: ["Basic"],
    },
    necromancer: {
        helm:    ["Curse", "Macabre"],
        chest:   ["Corpse", "Macabre"],
        gloves:  ["Core"],
        pants:   ["Macabre"],
        boots:   ["Corpse", "Macabre"],
        amulet:  ["Core"],
        ring:    ["Curse"],
        "weapon-0": [],             // 2H — none
        "weapon-1": ["Basic"],      // 1H
        offhand: ["Basic"],
        shield:  ["Basic", "Macabre"],
    },
    paladin: {
        helm:    ["Aura", "Valor"],
        chest:   ["Aura", "Justice"],
        gloves:  ["Core"],
        pants:   ["Basic", "Aura"],
        boots:   ["Aura", "Justice"],
        amulet:  ["Core"],
        ring:    ["Valor"],
        "weapon-0": [],             // 2H — none
        "weapon-1": ["Basic"],      // 1H
        shield:  ["Basic", "Aura"],
    },
    rogue: {
        helm:    ["Imbuement", "Subterfuge"],
        chest:   ["Agility", "Subterfuge"],
        gloves:  ["Core"],
        pants:   ["Basic", "Subterfuge"],
        boots:   ["Agility", "Subterfuge"],
        amulet:  ["Core"],
        ring:    ["Imbuement"],
        "weapon-0": [],             // 2H — none
        "weapon-1": ["Basic"],      // 1H
        offhand: ["Basic"],
    },
    sorcerer: {
        helm:    ["Conjuration", "Defensive"],
        chest:   ["Defensive", "Mastery"],
        gloves:  ["Core"],
        pants:   ["Basic", "Defensive"],
        boots:   ["Defensive", "Mastery"],
        amulet:  ["Core"],
        ring:    ["Conjuration"],
        "weapon-0": ["Ultimate"],   // 2H
        "weapon-1": ["Basic"],      // 1H
    },
    spiritborn: {
        helm:    ["Defensive", "Potency"],
        chest:   ["Defensive", "Focus"],
        gloves:  ["Core", "Ultimate"],
        pants:   ["Basic", "Defensive"],
        boots:   ["Defensive", "Focus"],
        amulet:  ["Core"],
        ring:    ["Potency"],
        "weapon-0": ["Ultimate"],   // 2H
        "weapon-1": [],             // 1H — none
        offhand: ["Basic"],
    },
    warlock: {
        helm:    ["Sigil"],
        chest:   ["Archfiend"],
        gloves:  ["Core"],
        pants:   ["Basic"],
        boots:   ["Archfiend"],
        amulet:  ["Core"],
        ring:    ["Sigil"],
        "weapon-0": [],             // 2H — none
        "weapon-1": ["Basic"],      // 1H
        offhand: ["Basic"],
    },
};
