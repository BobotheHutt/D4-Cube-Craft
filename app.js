// ══════════════════════════════════════════════════════════════
//  app.js  —  Core logic for the Horadric Prism Planner
//  Depends on: aggressive.js, protector.js, pragmatic.js,
//              resourceful.js, adept.js, items.js
// ══════════════════════════════════════════════════════════════

// ── PRISM REGISTRY ────────────────────────────────────────────
// Populated by each data module via registerPrismBucket()
window.PrismRegistry = {};

function registerPrismBucket(prismName, affixList) {
    window.PrismRegistry[prismName] = affixList;
}

// ── CATEGORY MAP ──────────────────────────────────────────────
// UI-facing category names → internal prism bucket keys
const CATEGORY_MAP = [
    { label: "Offensive",   key: "aggressivePrism"  },
    { label: "Defensive",   key: "protectorPrism"   },
    { label: "Utility",     key: "pragmaticPrism"   },
    { label: "Resource",    key: "resourcefulPrism" },
    { label: "Core Stats",  key: "adeptPrism"       }
];

// Badge CSS class per prism bucket key
const PRISM_BADGE_CLASS = {
    aggressivePrism:  "badge-aggressive",
    protectorPrism:   "badge-protector",
    pragmaticPrism:   "badge-pragmatic",
    resourcefulPrism: "badge-resourceful",
    adeptPrism:       "badge-adept"
};

// Friendly display name per prism bucket key
const PRISM_DISPLAY_NAME = {
    aggressivePrism:  "Aggressive",
    protectorPrism:   "Protector",
    pragmaticPrism:   "Pragmatic",
    resourcefulPrism: "Resourceful",
    adeptPrism:       "Adept"
};

// ── CLASS WEAPON CONFIGS ───────────────────────────────────────
// leftSlots  → mount under left-weapon-mounts
// rightSlots → mount under right-weapon-mounts
const CLASS_WEAPONS = {
    spiritborn: {
        leftSlots:  [{ label: "Weapon", sub: "Polearm or One-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Shield (optional)" }]
    },
    barbarian: {
        leftSlots:  [
            { label: "Weapon 1", sub: "One-Handed Slashing" },
            { label: "Weapon 2", sub: "One-Handed Slashing" }
        ],
        rightSlots: [
            { label: "Weapon 3", sub: "One-Handed Bludgeoning" },
            { label: "Weapon 4", sub: "Two-Handed" }
        ]
    },
    druid: {
        leftSlots:  [{ label: "Weapon", sub: "Staff or One-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Totem" }]
    },
    necromancer: {
        leftSlots:  [{ label: "Weapon", sub: "One-Handed or Two-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Focus (if 1H)" }]
    },
    rogue: {
        leftSlots:  [{ label: "Weapon 1", sub: "One-Handed" }],
        rightSlots: [{ label: "Weapon 2", sub: "One-Handed or Bow" }]
    },
    sorcerer: {
        leftSlots:  [{ label: "Weapon", sub: "Wand or Staff" }],
        rightSlots: [{ label: "Offhand", sub: "Focus (if Wand)" }]
    },
    paladin: {
        leftSlots:  [{ label: "Weapon", sub: "Two-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Offhand" }]
    },
    warlock: {
        leftSlots:  [{ label: "Weapon", sub: "Two-Handed" }],
        rightSlots: [{ label: "Offhand", sub: "Offhand" }]
    }
};

// ── APP STATE ─────────────────────────────────────────────────
const AppState = {
    activeClass:   "spiritborn",
    focusedCard:   null,
    // affixSelections: { [slotId]: { slot1, slot2, slot3, slot4 } }
    affixSelections: {},
    // itemNames: { [slotId]: string }
    itemNames: {}
};

// ── STATIC SLOT IDS ───────────────────────────────────────────
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

// ── INITIALISE SLOT STATE ─────────────────────────────────────
function initSlotState(slotId) {
    if (!AppState.affixSelections[slotId]) {
        AppState.affixSelections[slotId] = {
            slot1: null, slot2: null, slot3: null, slot4: null
        };
    }
    if (!AppState.itemNames[slotId]) {
        AppState.itemNames[slotId] = "Select Item";
    }
}

// ── RENDER AFFIX ROWS FOR A CARD ──────────────────────────────
function renderAffixRows(slotId) {
    initSlotState(slotId);
    const container = document.getElementById(`affixes-${slotId}`);
    if (!container) return;
    container.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const row = document.createElement("div");
        row.className = "affix-row" + (i === 5 ? " placeholder" : "");

        const num = document.createElement("span");
        num.className = "affix-num";
        num.textContent = i;

        const sel = document.createElement("select");
        sel.className = "affix-select";
        sel.id = `affix-${slotId}-${i}`;

        if (i === 5) {
            // Slot 5 is a styled non-functional placeholder
            sel.disabled = true;
            const opt = document.createElement("option");
            opt.textContent = "— Future Expansion —";
            sel.appendChild(opt);
        } else {
            // Functional slots 1–4
            const currentVal = AppState.affixSelections[slotId][`slot${i}`];

            const placeholder = document.createElement("option");
            placeholder.value = "";
            placeholder.textContent = "Select Affix…";
            sel.appendChild(placeholder);

            if (currentVal) {
                // Re-populate the saved value so it survives re-renders
                const opt = document.createElement("option");
                opt.value = currentVal;
                opt.textContent = currentVal;
                opt.selected = true;
                sel.appendChild(opt);
                sel.classList.add("has-value");
            }

            // Clicking opens the affix category modal
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
    STATIC_SLOTS.forEach(({ id }) => renderAffixRows(id));
}

// ── WEAPON SLOT MANAGEMENT ────────────────────────────────────
function buildWeaponSlots(className) {
    const config = CLASS_WEAPONS[className] || CLASS_WEAPONS.spiritborn;
    const leftMount  = document.getElementById("left-weapon-mounts");
    const rightMount = document.getElementById("right-weapon-mounts");
    leftMount.innerHTML  = "";
    rightMount.innerHTML = "";

    // Remove old weapon slot state so fresh slots start clean
    Object.keys(AppState.affixSelections).forEach(key => {
        if (key.startsWith("weapon-")) delete AppState.affixSelections[key];
    });
    Object.keys(AppState.itemNames).forEach(key => {
        if (key.startsWith("weapon-")) delete AppState.itemNames[key];
    });

    let weaponIndex = 0;

    function mountWeaponCard(slot, mountEl) {
        const slotId = `weapon-${weaponIndex}`;
        weaponIndex++;
        initSlotState(slotId);

        const card = document.createElement("div");
        card.className = "item-card";
        card.id = `card-${slotId}`;
        card.style.marginBottom = "12px";
        card.onclick = () => focusCard(slotId);

        card.innerHTML = `
            <div class="card-slot-label">${slot.label}</div>
            <div class="card-item-name" id="name-${slotId}">
                <span id="name-text-${slotId}">${AppState.itemNames[slotId]}</span>
                <span class="name-chevron">▾</span>
            </div>
            <div class="affix-list" id="affixes-${slotId}"></div>
        `;

        // Bind item modal to the name row after insertion
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

// ── CLASS CHANGE ──────────────────────────────────────────────
function handleClassChange(className) {
    AppState.activeClass = className;

    // If focused card was a weapon slot, clear focus
    if (AppState.focusedCard && AppState.focusedCard.startsWith("weapon-")) {
        AppState.focusedCard = null;
        updateCraftPanel();
    }

    buildWeaponSlots(className);
}

// ── CARD FOCUS ────────────────────────────────────────────────
function focusCard(slotId) {
    // Deactivate previously focused card
    if (AppState.focusedCard) {
        const prev = document.getElementById(`card-${AppState.focusedCard}`);
        if (prev) prev.classList.remove("focused");
    }

    AppState.focusedCard = slotId;
    const card = document.getElementById(`card-${slotId}`);
    if (card) card.classList.add("focused");

    updateCraftPanel();
}

// ── CRAFT PANEL UPDATE ────────────────────────────────────────
function updateCraftPanel() {
    const labelEl   = document.getElementById("craft-slot-label");
    const resultsEl = document.getElementById("craft-results");

    if (!AppState.focusedCard) {
        labelEl.textContent = "No slot selected";
        resultsEl.innerHTML = `<div class="craft-empty">Click any gear card to select it,<br>then assign affixes to reveal<br>the required Tuning Prisms.</div>`;
        return;
    }

    const slotId    = AppState.focusedCard;
    const itemName  = AppState.itemNames[slotId] || "Select Item";
    const slotLabel = getSlotLabel(slotId);

    labelEl.textContent = `↳ ${slotLabel}${itemName !== "Select Item" ? " — " + itemName : ""}`;

    const selections = AppState.affixSelections[slotId] || {};
    const chosen = [selections.slot1, selections.slot2, selections.slot3, selections.slot4]
        .filter(Boolean);

    if (chosen.length === 0) {
        resultsEl.innerHTML = `<div class="craft-empty">No affixes selected for this slot.<br>Click an affix row to choose one.</div>`;
        return;
    }

    resultsEl.innerHTML = "";

    chosen.forEach(affix => {
        const matchedPrism = findPrismForAffix(affix);

        const row = document.createElement("div");
        row.className = "result-row";

        const nameSpan = document.createElement("span");
        nameSpan.className = "result-affix-name";
        nameSpan.textContent = affix;

        const badge = document.createElement("span");
        badge.className = "prism-badge";

        if (matchedPrism) {
            badge.classList.add(PRISM_BADGE_CLASS[matchedPrism] || "badge-none");
            badge.textContent = PRISM_DISPLAY_NAME[matchedPrism] || matchedPrism;
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
    for (const [prismKey, affixList] of Object.entries(window.PrismRegistry)) {
        if (affixList.includes(affixName)) return prismKey;
    }
    return null;
}

// ── SLOT LABEL HELPER ─────────────────────────────────────────
function getSlotLabel(slotId) {
    const found = STATIC_SLOTS.find(s => s.id === slotId);
    if (found) return found.label;
    if (slotId.startsWith("weapon-")) {
        const idx = parseInt(slotId.replace("weapon-", ""), 10);
        const config = CLASS_WEAPONS[AppState.activeClass];
        const all = [...(config.leftSlots || []), ...(config.rightSlots || [])];
        return all[idx] ? all[idx].label : "Weapon";
    }
    return slotId;
}

// ══════════════════════════════════════════════════════════════
//  AFFIX MODAL
// ══════════════════════════════════════════════════════════════

let affixModalState = {
    slotId:     null,
    slotIndex:  null,
    activeCategory: CATEGORY_MAP[0].key
};

function openAffixModal(slotId, slotIndex) {
    affixModalState.slotId    = slotId;
    affixModalState.slotIndex = slotIndex;
    affixModalState.activeCategory = CATEGORY_MAP[0].key;

    document.getElementById("affix-modal-title").textContent =
        `Affix Slot ${slotIndex} — ${getSlotLabel(slotId)}`;

    renderModalCategories();
    renderModalAffixes();

    document.getElementById("affix-modal").classList.add("open");
}

function closeAffixModal() {
    document.getElementById("affix-modal").classList.remove("open");
}

function handleModalOverlayClick(e) {
    if (e.target.id === "affix-modal") closeAffixModal();
}

function renderModalCategories() {
    const container = document.getElementById("modal-category-list");
    container.innerHTML = "";

    CATEGORY_MAP.forEach(({ label, key }) => {
        const btn = document.createElement("button");
        btn.className = "modal-cat-btn" + (key === affixModalState.activeCategory ? " active" : "");
        btn.textContent = label;
        btn.onclick = () => {
            affixModalState.activeCategory = key;
            renderModalCategories();
            renderModalAffixes();
        };
        container.appendChild(btn);
    });
}

function renderModalAffixes() {
    const container = document.getElementById("modal-affix-list");
    container.innerHTML = "";

    const affixList = window.PrismRegistry[affixModalState.activeCategory] || [];

    // "Clear" option at top
    const clearBtn = document.createElement("button");
    clearBtn.className = "modal-affix-btn";
    clearBtn.textContent = "— Clear Selection —";
    clearBtn.style.color = "var(--text-secondary)";
    clearBtn.onclick = () => selectAffix(null);
    container.appendChild(clearBtn);

    affixList.forEach(affix => {
        const btn = document.createElement("button");
        btn.className = "modal-affix-btn";
        btn.textContent = affix;

        // Highlight if already selected in this slot
        const currentVal = AppState.affixSelections[affixModalState.slotId]?.[`slot${affixModalState.slotIndex}`];
        if (affix === currentVal) {
            btn.style.color = "#6ab0ff";
            btn.style.background = "var(--bg-card-hover)";
        }

        btn.onclick = () => selectAffix(affix);
        container.appendChild(btn);
    });
}

function selectAffix(affixValue) {
    const { slotId, slotIndex } = affixModalState;
    if (!slotId || !slotIndex) return;

    initSlotState(slotId);
    AppState.affixSelections[slotId][`slot${slotIndex}`] = affixValue;

    // Update the select element text to show chosen value
    const sel = document.getElementById(`affix-${slotId}-${slotIndex}`);
    if (sel) {
        sel.innerHTML = "";
        if (affixValue) {
            const opt = document.createElement("option");
            opt.value = affixValue;
            opt.textContent = affixValue;
            opt.selected = true;
            sel.appendChild(opt);
            sel.classList.add("has-value");
        } else {
            const opt = document.createElement("option");
            opt.value = "";
            opt.textContent = "Select Affix…";
            sel.appendChild(opt);
            sel.classList.remove("has-value");
        }
    }

    closeAffixModal();

    // Refresh craft panel if this card is focused
    if (AppState.focusedCard === slotId) updateCraftPanel();
}

// ══════════════════════════════════════════════════════════════
//  ITEM MODAL
// ══════════════════════════════════════════════════════════════

let itemModalState = { slotId: null };

function openItemModal(slotId, event) {
    if (event) event.stopPropagation();
    itemModalState.slotId = slotId;

    document.getElementById("item-modal-title").textContent =
        `Select Item — ${getSlotLabel(slotId)}`;

    const listEl = document.getElementById("item-modal-list");
    listEl.innerHTML = "";

    // Use slot-specific items if available, else generic weapon list
    const items = window.ItemRegistry?.[slotId]
        || window.ItemRegistry?.["weapon-0"]
        || [{ name: "Select Item", tier: null }];

    items.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "item-modal-btn";

        if (item.tier === "legendary") btn.classList.add("tier-legendary");
        else if (item.tier === "mythic") btn.classList.add("tier-mythic");
        else btn.style.color = "var(--text-secondary)";

        btn.textContent = item.name;
        btn.onclick = () => selectItem(item.name);
        listEl.appendChild(btn);
    });

    document.getElementById("item-modal").classList.add("open");
}

function closeItemModal() {
    document.getElementById("item-modal").classList.remove("open");
}

function handleItemModalOverlayClick(e) {
    if (e.target.id === "item-modal") closeItemModal();
}

function selectItem(itemName) {
    const { slotId } = itemModalState;
    if (!slotId) return;

    AppState.itemNames[slotId] = itemName;

    // Update the name display on the card
    const nameTextEl = document.getElementById(`name-text-${slotId}`);
    if (nameTextEl) {
        nameTextEl.textContent = itemName;
        // Colour based on what was selected
        const parentEl = nameTextEl.closest(".card-item-name");
        if (parentEl) {
            if (itemName === "Select Item") {
                parentEl.style.color = "";
            } else {
                // Check tier from registry
                const registry = window.ItemRegistry?.[slotId] || [];
                const found = registry.find(i => i.name === itemName);
                if (found?.tier === "mythic")    parentEl.style.color = "#e090ff";
                else if (found?.tier === "legendary") parentEl.style.color = "";
                else parentEl.style.color = "";
            }
        }
    }

    closeItemModal();

    // Refresh craft panel label if this card is focused
    if (AppState.focusedCard === slotId) updateCraftPanel();
}

// ══════════════════════════════════════════════════════════════
//  TAB SWITCHING
// ══════════════════════════════════════════════════════════════

function switchTab(tabName) {
    document.querySelectorAll(".tab-page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

    const page = document.getElementById(`tab-${tabName}`);
    if (page) page.classList.add("active");

    const btns = document.querySelectorAll(".tab-btn");
    btns.forEach(b => {
        if (b.getAttribute("onclick")?.includes(tabName)) b.classList.add("active");
    });
}

// ══════════════════════════════════════════════════════════════
//  BOOT
// ══════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
    buildStaticCards();
    buildWeaponSlots(AppState.activeClass);

    // Set initial class selector to match state
    const classSelect = document.getElementById("class-select-dropdown");
    if (classSelect) classSelect.value = AppState.activeClass;
});
