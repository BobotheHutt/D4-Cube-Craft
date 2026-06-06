// ══════════════════════════════════════════════════════════════
//  app.js  —  Core logic for the Horadric Prism Planner
//  Depends on: aggressive.js, protector.js, pragmatic.js,
//              resourceful.js, adept.js,
//              mythics.js, aspects-*.js, tempers-*.js
// ══════════════════════════════════════════════════════════════

// ── PRISM REGISTRY ────────────────────────────────────────────
window.PrismRegistry   = window.PrismRegistry   || {};
window.AspectRegistry  = window.AspectRegistry  || {};
window.MythicRegistry  = window.MythicRegistry  || {};
window.TemperRegistry  = window.TemperRegistry  || {};

function registerPrismBucket(prismName, affixList) {
    window.PrismRegistry[prismName] = affixList;
}

function registerAspectCategory(categoryKey, aspectList) {
    window.AspectRegistry[categoryKey] = aspectList;
}

function registerMythics(mythicData) {
    window.MythicRegistry = mythicData;
}

function registerTemperCategory(categoryKey, temperList) {
    window.TemperRegistry[categoryKey] = temperList;
}

// ── PRISM DISPLAY MAPS ────────────────────────────────────────
const PRISM_BADGE_CLASS = {
    aggressivePrism:  "badge-aggressive",
    protectorPrism:   "badge-protector",
    pragmaticPrism:   "badge-pragmatic",
    resourcefulPrism: "badge-resourceful",
    adeptPrism:       "badge-adept"
};

const PRISM_DISPLAY_NAME = {
    aggressivePrism:  "Aggressive",
    protectorPrism:   "Protector",
    pragmaticPrism:   "Pragmatic",
    resourcefulPrism: "Resourceful",
    adeptPrism:       "Adept"
};

// ── AFFIX CATEGORY MAP ────────────────────────────────────────
// UI label → internal prism bucket key
const AFFIX_CATEGORY_MAP = [
    { label: "Offensive",  key: "aggressivePrism"  },
    { label: "Defensive",  key: "protectorPrism"   },
    { label: "Utility",    key: "pragmaticPrism"   },
    { label: "Resource",   key: "resourcefulPrism" },
    { label: "Core Stats", key: "adeptPrism"       }
];

// ── ASPECT CATEGORY MAP ───────────────────────────────────────
// UI label → aspect registry key
const ASPECT_CATEGORY_MAP = [
    { label: "Offensive", key: "offensive" },
    { label: "Defensive", key: "defensive" },
    { label: "Resource",  key: "resource"  },
    { label: "Utility",   key: "utility"   },
    { label: "Mobility",  key: "mobility"  }
];

// ── TEMPER CATEGORY MAP ───────────────────────────────────────
const TEMPER_CATEGORY_MAP = [
    { label: "Offensive", key: "offensive" },
    { label: "Defensive", key: "defensive" },
    { label: "Resource",  key: "resource"  },
    { label: "Utility",   key: "utility"   },
    { label: "Mobility",  key: "mobility"  },
    { label: "Weapons",   key: "weapons"   }
];

// ── SLOT CONFIG ───────────────────────────────────────────────
// Single source of truth for what each slot can use.
// Add/remove category keys here to change what appears in modals.
const SLOT_CONFIG = {
    helm: {
        aspectCategories: ["offensive", "defensive", "utility"],
        temperCategories: ["offensive", "defensive", "utility"],
        mythicEligible:   true
    },
    chest: {
        aspectCategories: ["defensive", "utility"],
        temperCategories: ["defensive", "utility"],
        mythicEligible:   true
    },
    gloves: {
        aspectCategories: ["offensive", "utility"],
        temperCategories: ["offensive", "utility"],
        mythicEligible:   true
    },
    pants: {
        aspectCategories: ["defensive", "utility", "mobility"],
        temperCategories: ["defensive", "utility", "mobility"],
        mythicEligible:   true
    },
    boots: {
        aspectCategories: ["mobility", "utility"],
        temperCategories: ["mobility", "utility"],
        mythicEligible:   true
    },
    amulet: {
        aspectCategories: ["offensive", "defensive", "resource", "utility", "mobility"],
        temperCategories: ["offensive", "defensive", "resource", "utility", "mobility"],
        mythicEligible:   true
    },
    "ring-left": {
        aspectCategories: ["offensive", "resource"],
        temperCategories: ["offensive", "resource"],
        mythicEligible:   true
    },
    "ring-right": {
        aspectCategories: ["offensive", "resource"],
        temperCategories: ["offensive", "resource"],
        mythicEligible:   true
    },
    // Weapon slots: flexible — all aspect/temper categories available
    weapon: {
        aspectCategories: ["offensive", "defensive", "resource", "utility", "mobility"],
        temperCategories: ["offensive", "defensive", "resource", "utility", "mobility", "weapons"],
        mythicEligible:   false
    }
};

// Helper: get config for any slot (weapons fall back to "weapon" key)
function getSlotConfig(slotId) {
    return SLOT_CONFIG[slotId] || SLOT_CONFIG["weapon"];
}

// ── CLASS WEAPON CONFIGS ──────────────────────────────────────
const CLASS_WEAPONS = {
    spiritborn: {
        leftSlots:  [{ label: "Weapon",  sub: "Polearm or One-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Shield (optional)"     }]
    },
    barbarian: {
        leftSlots:  [
            { label: "Weapon 1", sub: "One-Handed Slashing" },
            { label: "Weapon 2", sub: "One-Handed Slashing" }
        ],
        rightSlots: [
            { label: "Weapon 3", sub: "One-Handed Bludgeoning" },
            { label: "Weapon 4", sub: "Two-Handed"             }
        ]
    },
    druid: {
        leftSlots:  [{ label: "Weapon",  sub: "Staff or One-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Totem"               }]
    },
    necromancer: {
        leftSlots:  [{ label: "Weapon",  sub: "One-Handed or Two-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Focus (if 1H)"            }]
    },
    rogue: {
        leftSlots:  [{ label: "Weapon 1", sub: "One-Handed"        }],
        rightSlots: [{ label: "Weapon 2", sub: "One-Handed or Bow" }]
    },
    sorcerer: {
        leftSlots:  [{ label: "Weapon",  sub: "Wand or Staff"    }],
        rightSlots: [{ label: "Offhand", sub: "Focus (if Wand)"  }]
    },
    paladin: {
        leftSlots:  [{ label: "Weapon",  sub: "Two-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Offhand"    }]
    },
    warlock: {
        leftSlots:  [{ label: "Weapon",  sub: "Two-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Offhand"    }]
    }
};

// ── STATIC SLOT LIST ──────────────────────────────────────────
const STATIC_SLOTS = [
    { id: "helm",       label: "Helm"        },
    { id: "chest",      label: "Chest Armor" },
    { id: "gloves",     label: "Gloves"      },
    { id: "pants",      label: "Pants"       },
    { id: "boots",      label: "Boots"       },
    { id: "amulet",     label: "Amulet"      },
    { id: "ring-left",  label: "Left Ring"   },
    { id: "ring-right", label: "Right Ring"  }
];

// ── APP STATE ─────────────────────────────────────────────────
const AppState = {
    activeClass:      "spiritborn",
    focusedCard:      null,
    affixSelections:  {},   // { [slotId]: { slot1, slot2, slot3, slot4 } }
    itemSelections:   {}    // { [slotId]: { name, tier } | null }
};

// ── SLOT STATE INIT ───────────────────────────────────────────
function initSlotState(slotId) {
    if (!AppState.affixSelections[slotId]) {
        AppState.affixSelections[slotId] = {
            slot1: null, slot2: null, slot3: null, slot4: null
        };
    }
    if (!AppState.itemSelections[slotId]) {
        AppState.itemSelections[slotId] = null;
    }
}

// ── RENDER AFFIX ROWS ─────────────────────────────────────────
function renderAffixRows(slotId) {
    initSlotState(slotId);
    const container = document.getElementById(`affixes-${slotId}`);
    if (!container) return;
    container.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const isTemper = i === 5;
        const row = document.createElement("div");
        row.className = "affix-row" + (isTemper ? " temper-slot" : "");

        const num = document.createElement("span");
        num.className = "affix-num";
        num.textContent = i;

        const sel = document.createElement("select");
        sel.className = "affix-select";
        sel.id = `affix-${slotId}-${i}`;

        if (isTemper) {
            sel.disabled = true;
            const opt = document.createElement("option");
            opt.textContent = "Temper Slot";
            sel.appendChild(opt);
        } else {
            const currentVal = AppState.affixSelections[slotId][`slot${i}`];

            const phOpt = document.createElement("option");
            phOpt.value = "";
            phOpt.textContent = "Select Affix…";
            sel.appendChild(phOpt);

            if (currentVal) {
                const opt = document.createElement("option");
                opt.value = currentVal;
                opt.textContent = currentVal;
                opt.selected = true;
                sel.appendChild(opt);
                sel.classList.add("has-value");
            }

            sel.addEventListener("mousedown", (e) => {
                e.preventDefault();
                openAffixModal(slotId, i);
            });
        }

        row.appendChild(num);
        row.appendChild(sel);
        container.appendChild(row);
    }
}

// ── BUILD ALL STATIC CARDS ────────────────────────────────────
function buildStaticCards() {
    STATIC_SLOTS.forEach(({ id }) => {
        initSlotState(id);
        renderAffixRows(id);
        updateItemNameDisplay(id);
    });
}

// ── WEAPON SLOTS ──────────────────────────────────────────────
function buildWeaponSlots(className) {
    const config    = CLASS_WEAPONS[className] || CLASS_WEAPONS.spiritborn;
    const leftMount  = document.getElementById("left-weapon-mounts");
    const rightMount = document.getElementById("right-weapon-mounts");
    leftMount.innerHTML  = "";
    rightMount.innerHTML = "";

    // Clear old weapon state
    Object.keys(AppState.affixSelections).forEach(k => { if (k.startsWith("weapon-")) delete AppState.affixSelections[k]; });
    Object.keys(AppState.itemSelections).forEach(k  => { if (k.startsWith("weapon-")) delete AppState.itemSelections[k];  });

    let idx = 0;

    function mountWeaponCard(slot, mountEl) {
        const slotId = `weapon-${idx}`;
        idx++;
        initSlotState(slotId);

        const card = document.createElement("div");
        card.className = "item-card";
        card.id = `card-${slotId}`;
        card.style.marginBottom = "12px";
        card.onclick = () => focusCard(slotId);

        card.innerHTML = `
            <div class="card-slot-label">${slot.label}<span style="color:var(--text-hint);font-weight:400;margin-left:6px;font-size:10px;">${slot.sub}</span></div>
            <div class="card-item-name" id="name-${slotId}">
                <span id="name-text-${slotId}">Select Item</span>
                <span class="name-chevron">▾</span>
            </div>
            <div class="affix-list" id="affixes-${slotId}"></div>
        `;

        mountEl.appendChild(card);

        document.getElementById(`name-${slotId}`).addEventListener("click", (e) => {
            e.stopPropagation();
            openItemModal(slotId, e);
        });

        renderAffixRows(slotId);
    }

    config.leftSlots.forEach(slot  => mountWeaponCard(slot, leftMount));
    config.rightSlots.forEach(slot => mountWeaponCard(slot, rightMount));
}

// ── ITEM NAME DISPLAY ─────────────────────────────────────────
function updateItemNameDisplay(slotId) {
    const nameEl     = document.getElementById(`name-${slotId}`);
    const nameTextEl = document.getElementById(`name-text-${slotId}`);
    if (!nameEl || !nameTextEl) return;

    const selection = AppState.itemSelections[slotId];

    // Reset tier classes
    nameEl.classList.remove("is-legendary", "is-mythic");

    if (!selection) {
        nameTextEl.textContent = "Select Item";
        return;
    }

    nameTextEl.textContent = selection.name;

    if (selection.tier === "legendary") {
        nameEl.classList.add("is-legendary");
    } else if (selection.tier === "mythic") {
        nameEl.classList.add("is-mythic");
    }
}

// ── CLASS CHANGE ──────────────────────────────────────────────
function handleClassChange(className) {
    AppState.activeClass = className;
    if (AppState.focusedCard?.startsWith("weapon-")) {
        AppState.focusedCard = null;
        updateCraftPanel();
    }
    buildWeaponSlots(className);
}

// ── CARD FOCUS ────────────────────────────────────────────────
function focusCard(slotId) {
    if (AppState.focusedCard) {
        const prev = document.getElementById(`card-${AppState.focusedCard}`);
        if (prev) prev.classList.remove("focused");
    }
    AppState.focusedCard = slotId;
    const card = document.getElementById(`card-${slotId}`);
    if (card) card.classList.add("focused");
    updateCraftPanel();
}

// ── CRAFT PANEL ───────────────────────────────────────────────
function updateCraftPanel() {
    const labelEl   = document.getElementById("craft-slot-label");
    const resultsEl = document.getElementById("craft-results");

    if (!AppState.focusedCard) {
        labelEl.textContent = "No slot selected";
        resultsEl.innerHTML = `<div class="craft-empty">Click any gear card to select it,<br>then assign affixes to reveal<br>the required Tuning Prisms.</div>`;
        return;
    }

    const slotId     = AppState.focusedCard;
    const slotLabel  = getSlotLabel(slotId);
    const selection  = AppState.itemSelections[slotId];
    const itemSuffix = selection ? ` — ${selection.name}` : "";

    labelEl.textContent = `↳ ${slotLabel}${itemSuffix}`;

    const picks = AppState.affixSelections[slotId] || {};
    const chosen = [picks.slot1, picks.slot2, picks.slot3, picks.slot4].filter(Boolean);

    if (chosen.length === 0) {
        resultsEl.innerHTML = `<div class="craft-empty">No affixes selected.<br>Click an affix row to choose one.</div>`;
        return;
    }

    resultsEl.innerHTML = "";
    chosen.forEach(affix => {
        const prismKey = findPrismForAffix(affix);
        const row      = document.createElement("div");
        row.className  = "result-row";

        const nameSpan = document.createElement("span");
        nameSpan.className   = "result-affix-name";
        nameSpan.textContent = affix;

        const badge = document.createElement("span");
        badge.className = "prism-badge";
        if (prismKey) {
            badge.classList.add(PRISM_BADGE_CLASS[prismKey] || "badge-none");
            badge.textContent = PRISM_DISPLAY_NAME[prismKey] || prismKey;
        } else {
            badge.classList.add("badge-none");
            badge.textContent = "No Prism";
        }

        row.appendChild(nameSpan);
        row.appendChild(badge);
        resultsEl.appendChild(row);
    });
}

// ── PRISM LOOKUP ──────────────────────────────────────────────
function findPrismForAffix(affixName) {
    for (const [key, list] of Object.entries(window.PrismRegistry)) {
        if (list.includes(affixName)) return key;
    }
    return null;
}

// ── SLOT LABEL HELPER ─────────────────────────────────────────
function getSlotLabel(slotId) {
    const found = STATIC_SLOTS.find(s => s.id === slotId);
    if (found) return found.label;
    if (slotId.startsWith("weapon-")) {
        const idx    = parseInt(slotId.replace("weapon-", ""), 10);
        const config = CLASS_WEAPONS[AppState.activeClass];
        const all    = [...(config.leftSlots || []), ...(config.rightSlots || [])];
        return all[idx]?.label || "Weapon";
    }
    return slotId;
}

// ══════════════════════════════════════════════════════════════
//  AFFIX MODAL
// ══════════════════════════════════════════════════════════════

let affixModalState = {
    slotId:         null,
    slotIndex:      null,
    activeCategory: AFFIX_CATEGORY_MAP[0].key
};

function openAffixModal(slotId, slotIndex) {
    affixModalState.slotId         = slotId;
    affixModalState.slotIndex      = slotIndex;
    affixModalState.activeCategory = AFFIX_CATEGORY_MAP[0].key;

    document.getElementById("affix-modal-title").textContent =
        `Affix Slot ${slotIndex} — ${getSlotLabel(slotId)}`;

    renderAffixModalCategories();
    renderAffixModalList();
    document.getElementById("affix-modal").classList.add("open");
}

function closeAffixModal() {
    document.getElementById("affix-modal").classList.remove("open");
}

function handleModalOverlayClick(e) {
    if (e.target.id === "affix-modal") closeAffixModal();
}

function renderAffixModalCategories() {
    const container = document.getElementById("modal-category-list");
    container.innerHTML = "";
    AFFIX_CATEGORY_MAP.forEach(({ label, key }) => {
        const btn = document.createElement("button");
        btn.className = "modal-cat-btn" + (key === affixModalState.activeCategory ? " active" : "");
        btn.textContent = label;
        btn.onclick = () => {
            affixModalState.activeCategory = key;
            renderAffixModalCategories();
            renderAffixModalList();
        };
        container.appendChild(btn);
    });
}

function renderAffixModalList() {
    const container  = document.getElementById("modal-affix-list");
    container.innerHTML = "";
    const currentVal = AppState.affixSelections[affixModalState.slotId]?.[`slot${affixModalState.slotIndex}`];
    const affixList  = window.PrismRegistry[affixModalState.activeCategory] || [];

    // Clear option
    const clearBtn = document.createElement("button");
    clearBtn.className   = "modal-affix-btn";
    clearBtn.textContent = "— Clear Selection —";
    clearBtn.style.color = "var(--text-secondary)";
    clearBtn.onclick = () => selectAffix(null);
    container.appendChild(clearBtn);

    affixList.forEach(affix => {
        const btn = document.createElement("button");
        btn.className   = "modal-affix-btn" + (affix === currentVal ? " selected" : "");
        btn.textContent = affix;
        btn.onclick     = () => selectAffix(affix);
        container.appendChild(btn);
    });
}

function selectAffix(affixValue) {
    const { slotId, slotIndex } = affixModalState;
    if (!slotId || !slotIndex) return;

    initSlotState(slotId);
    AppState.affixSelections[slotId][`slot${slotIndex}`] = affixValue;

    // Update the select element
    const sel = document.getElementById(`affix-${slotId}-${slotIndex}`);
    if (sel) {
        sel.innerHTML = "";
        if (affixValue) {
            const opt      = document.createElement("option");
            opt.value      = affixValue;
            opt.textContent = affixValue;
            opt.selected   = true;
            sel.appendChild(opt);
            sel.classList.add("has-value");
        } else {
            const opt       = document.createElement("option");
            opt.value       = "";
            opt.textContent = "Select Affix…";
            sel.appendChild(opt);
            sel.classList.remove("has-value");
        }
    }

    closeAffixModal();
    if (AppState.focusedCard === slotId) updateCraftPanel();
}

// ══════════════════════════════════════════════════════════════
//  ITEM MODAL  (two-step: tier → category+list)
// ══════════════════════════════════════════════════════════════

let itemModalState = {
    slotId:          null,
    selectedTier:    null,   // "legendary" | "mythic"
    activeCategory:  null
};

function openItemModal(slotId, event) {
    if (event) event.stopPropagation();
    itemModalState.slotId       = slotId;
    itemModalState.selectedTier = null;
    itemModalState.activeCategory = null;

    document.getElementById("item-modal-title").textContent =
        `Select Item — ${getSlotLabel(slotId)}`;

    showItemTierStep();
    document.getElementById("item-modal").classList.add("open");
}

function closeItemModal() {
    document.getElementById("item-modal").classList.remove("open");
}

function handleItemModalOverlayClick(e) {
    if (e.target.id === "item-modal") closeItemModal();
}

// Step 1 — Tier picker
function showItemTierStep() {
    document.getElementById("item-step-tier").style.display   = "flex";
    document.getElementById("item-step-browse").style.display = "none";

    const tierEl = document.getElementById("item-step-tier");
    tierEl.innerHTML = "";

    const label = document.createElement("div");
    label.className   = "tier-pick-label";
    label.textContent = "Choose item tier";
    tierEl.appendChild(label);

    const legBtn = document.createElement("button");
    legBtn.className = "tier-btn legendary";
    legBtn.innerHTML = `Legendary <span class="tier-btn-sub">Aspects — slot-filtered by item type</span>`;
    legBtn.onclick = () => showItemBrowseStep("legendary");
    tierEl.appendChild(legBtn);

    const mythBtn = document.createElement("button");
    mythBtn.className = "tier-btn mythic";
    mythBtn.innerHTML = `Mythic <span class="tier-btn-sub">Unique items — slot-locked</span>`;
    mythBtn.onclick = () => showItemBrowseStep("mythic");
    tierEl.appendChild(mythBtn);

    // Clear option
    const clearBtn = document.createElement("button");
    clearBtn.className   = "tier-btn-clear";
    clearBtn.textContent = "✕  Clear item selection";
    clearBtn.onclick     = () => { selectItem(null); };
    tierEl.appendChild(clearBtn);
}

// Step 2 — Category + item list
function showItemBrowseStep(tier) {
    itemModalState.selectedTier = tier;
    document.getElementById("item-step-tier").style.display   = "none";
    document.getElementById("item-step-browse").style.display = "flex";

    const slotId = itemModalState.slotId;
    const config = getSlotConfig(slotId);

    if (tier === "mythic") {
        // Mythics have no category split — show all slot-eligible mythics directly
        renderItemBrowseCats([]);
        renderMythicList(slotId);
    } else {
        // Legendary: category sidebar filtered by SLOT_CONFIG.aspectCategories
        const allowedCats = ASPECT_CATEGORY_MAP.filter(c =>
            config.aspectCategories.includes(c.key)
        );
        itemModalState.activeCategory = allowedCats[0]?.key || null;
        renderItemBrowseCats(allowedCats);
        renderAspectList(slotId, itemModalState.activeCategory);
    }
}

// Category sidebar for legendary step
function renderItemBrowseCats(cats) {
    const catsEl = document.getElementById("item-modal-cats");
    catsEl.innerHTML = "";

    // Back button always at top
    const backBtn = document.createElement("button");
    backBtn.className   = "modal-cat-btn";
    backBtn.style.borderBottom = "1px solid var(--border-dim)";
    backBtn.innerHTML   = "‹ Back";
    backBtn.onclick     = showItemTierStep;
    catsEl.appendChild(backBtn);

    cats.forEach(({ label, key }) => {
        const btn = document.createElement("button");
        btn.className   = "modal-cat-btn" + (key === itemModalState.activeCategory ? " active" : "");
        btn.textContent = label;
        btn.onclick = () => {
            itemModalState.activeCategory = key;
            renderItemBrowseCats(cats);
            renderAspectList(itemModalState.slotId, key);
        };
        catsEl.appendChild(btn);
    });
}

// Aspect list for selected category
function renderAspectList(slotId, categoryKey) {
    const listEl = document.getElementById("item-modal-list");
    listEl.innerHTML = "";

    const aspects = (window.AspectRegistry[categoryKey] || []).filter(aspect => {
        // Filter aspects to those eligible for this slot
        // Each aspect entry: { name, slots[] } or just a string
        if (typeof aspect === "string") return true;
        if (!aspect.slots || aspect.slots.length === 0) return true;
        return aspect.slots.includes(slotId);
    });

    if (aspects.length === 0) {
        const empty = document.createElement("div");
        empty.style.cssText = "padding:20px 16px;color:var(--text-hint);font-style:italic;font-size:12px;";
        empty.textContent   = "No aspects available for this slot.";
        listEl.appendChild(empty);
        return;
    }

    aspects.forEach(aspect => {
        const name = typeof aspect === "string" ? aspect : aspect.name;
        const btn  = document.createElement("button");
        btn.className   = "item-modal-btn tier-legendary";
        btn.textContent = name;
        btn.onclick     = () => selectItem({ name, tier: "legendary" });
        listEl.appendChild(btn);
    });
}

// Mythic list — filtered to this slot
function renderMythicList(slotId) {
    const listEl = document.getElementById("item-modal-list");
    listEl.innerHTML = "";

    // Back button in cats panel
    const catsEl = document.getElementById("item-modal-cats");
    catsEl.innerHTML = "";
    const backBtn = document.createElement("button");
    backBtn.className   = "modal-cat-btn";
    backBtn.innerHTML   = "‹ Back";
    backBtn.onclick     = showItemTierStep;
    catsEl.appendChild(backBtn);

    // Gather mythics eligible for this slot
    // MythicRegistry entries: { name, slot } or { name, slots[] }
    const all     = window.MythicRegistry || {};
    const matched = [];

    Object.values(all).flat().forEach(item => {
        if (!item || !item.name) return;
        const itemSlots = item.slots || (item.slot ? [item.slot] : []);
        if (itemSlots.length === 0 || itemSlots.includes(slotId)) {
            matched.push(item.name);
        }
    });

    if (matched.length === 0) {
        const empty = document.createElement("div");
        empty.style.cssText = "padding:20px 16px;color:var(--text-hint);font-style:italic;font-size:12px;";
        empty.textContent   = "No mythic items available for this slot.";
        listEl.appendChild(empty);
        return;
    }

    matched.forEach(name => {
        const btn = document.createElement("button");
        btn.className   = "item-modal-btn tier-mythic";
        btn.textContent = name;
        btn.onclick     = () => selectItem({ name, tier: "mythic" });
        listEl.appendChild(btn);
    });
}

// Commit item selection
function selectItem(itemObj) {
    const { slotId } = itemModalState;
    if (!slotId) return;

    AppState.itemSelections[slotId] = itemObj;
    updateItemNameDisplay(slotId);
    closeItemModal();
    if (AppState.focusedCard === slotId) updateCraftPanel();
}

// ══════════════════════════════════════════════════════════════
//  TAB SWITCHING
// ══════════════════════════════════════════════════════════════

function switchTab(tabName) {
    document.querySelectorAll(".tab-page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("onclick")?.includes(tabName));
    });
    const page = document.getElementById(`tab-${tabName}`);
    if (page) page.classList.add("active");
}

// ══════════════════════════════════════════════════════════════
//  BOOT
// ══════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
    buildStaticCards();
    buildWeaponSlots(AppState.activeClass);
    const classSelect = document.getElementById("class-select-dropdown");
    if (classSelect) classSelect.value = AppState.activeClass;
});
