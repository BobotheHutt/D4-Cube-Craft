// ══════════════════════════════════════════════════════════════
//  app.js  —  Core logic for the Horadric Prism Planner
//  Depends on: aggressive.js, protector.js, pragmatic.js,
//              resourceful.js, adept.js, chromatic.js,
//              mobility.js, mythics.js, aspects-*.js, tempers-*.js
// ══════════════════════════════════════════════════════════════

// ── REGISTRIES ────────────────────────────────────────────────
window.PrismRegistry   = window.PrismRegistry   || {};
window.AspectRegistry  = window.AspectRegistry  || {};
window.MythicRegistry  = window.MythicRegistry  || {};
window.TemperRegistry  = window.TemperRegistry  || {};
window.UniqueRegistry  = window.UniqueRegistry  || {};

function registerPrismBucket(prismName, affixList) { window.PrismRegistry[prismName] = affixList; }
function registerAspectCategory(k, v)              { window.AspectRegistry[k] = v; }
function registerMythics(d)                        { window.MythicRegistry = d; }
function registerTemperCategory(k, v)              { window.TemperRegistry[k] = v; }
function registerUniques(className, itemList)       { window.UniqueRegistry[className] = itemList; }

// ── PRISM DISPLAY MAPS ────────────────────────────────────────
const PRISM_BADGE_CLASS = {
    aggressivePrism:  "badge-aggressive",
    protectorPrism:   "badge-protector",
    pragmaticPrism:   "badge-pragmatic",
    resourcefulPrism: "badge-resourceful",
    adeptPrism:       "badge-adept",
    chromaticPrism:   "badge-chromatic",
    mobilityPrism:    "badge-mobility"
};

const PRISM_DISPLAY_NAME = {
    aggressivePrism:  "Aggressive",
    protectorPrism:   "Protector",
    pragmaticPrism:   "Pragmatic",
    resourcefulPrism: "Resourceful",
    adeptPrism:       "Adept",
    chromaticPrism:   "Chromatic",
    mobilityPrism:    "Mobility"
};

// ── CLASS PRIMARY STAT MAP ────────────────────────────────────
const CLASS_PRIMARY_STAT = {
    barbarian:   "Strength",
    druid:       "Willpower",
    necromancer: "Intelligence",
    rogue:       "Dexterity",
    sorcerer:    "Intelligence",
    spiritborn:  "Dexterity",
    paladin:     "Strength",
    warlock:     "Intelligence"
};

// ── AFFIX CATEGORY MAP ────────────────────────────────────────
const AFFIX_CATEGORY_MAP = [
    { label: "Offensive",  key: "aggressivePrism"  },
    { label: "Defensive",  key: "protectorPrism"   },
    { label: "Utility",    key: "pragmaticPrism"   },
    { label: "Resource",   key: "resourcefulPrism" },
    { label: "Core Stats", key: "adeptPrism"       },
    { label: "Elemental",  key: "chromaticPrism"   },
    { label: "Mobility",   key: "mobilityPrism"    }
];

const ASPECT_CATEGORY_MAP = [
    { label: "Offensive", key: "offensive" },
    { label: "Defensive", key: "defensive" },
    { label: "Resource",  key: "resource"  },
    { label: "Utility",   key: "utility"   },
    { label: "Mobility",  key: "mobility"  }
];

const TEMPER_CATEGORY_MAP = [
    { label: "Offensive", key: "offensive" },
    { label: "Defensive", key: "defensive" },
    { label: "Resource",  key: "resource"  },
    { label: "Utility",   key: "utility"   },
    { label: "Mobility",  key: "mobility"  },
    { label: "Weapons",   key: "weapons"   }
];

// ── SLOT CONFIG ───────────────────────────────────────────────
const SLOT_CONFIG = {
    helm:        { aspectCategories: ["offensive","defensive","utility"],                              temperCategories: ["offensive","defensive","utility"],                              mythicEligible: true  },
    chest:       { aspectCategories: ["defensive","utility"],                                          temperCategories: ["defensive","utility"],                                          mythicEligible: true  },
    gloves:      { aspectCategories: ["offensive","utility"],                                          temperCategories: ["offensive","utility"],                                          mythicEligible: true  },
    pants:       { aspectCategories: ["defensive","utility","mobility"],                               temperCategories: ["defensive","utility","mobility"],                               mythicEligible: true  },
    boots:       { aspectCategories: ["mobility","utility"],                                           temperCategories: ["mobility","utility"],                                           mythicEligible: true  },
    amulet:      { aspectCategories: ["offensive","defensive","resource","utility","mobility"],        temperCategories: ["offensive","defensive","resource","utility","mobility"],        mythicEligible: true  },
    "ring-left": { aspectCategories: ["offensive","resource"],                                         temperCategories: ["offensive","resource"],                                         mythicEligible: true  },
    "ring-right":{ aspectCategories: ["offensive","resource"],                                         temperCategories: ["offensive","resource"],                                         mythicEligible: true  },
    weapon:      { aspectCategories: ["offensive","defensive","resource","utility","mobility"],        temperCategories: ["offensive","defensive","resource","utility","mobility","weapons"], mythicEligible: false }
};

function getSlotConfig(slotId) { return SLOT_CONFIG[slotId] || SLOT_CONFIG["weapon"]; }

// ── CLASS WEAPON CONFIGS ──────────────────────────────────────
const CLASS_WEAPONS = {
    spiritborn:  { leftSlots: [{ label: "Weapon",   sub: "Polearm or One-Handed"     }], rightSlots: [{ label: "Offhand",   sub: "Shield (optional)"      }] },
    barbarian:   { leftSlots: [{ label: "Weapon 1", sub: "One-Handed Slashing"       }, { label: "Weapon 2", sub: "One-Handed Slashing" }], rightSlots: [{ label: "Weapon 3", sub: "One-Handed Bludgeoning" }, { label: "Weapon 4", sub: "Two-Handed" }] },
    druid:       { leftSlots: [{ label: "Weapon",   sub: "Staff or One-Handed"       }], rightSlots: [{ label: "Offhand",   sub: "Totem"                  }] },
    necromancer: { leftSlots: [{ label: "Weapon",   sub: "One-Handed or Two-Handed"  }], rightSlots: [{ label: "Offhand",   sub: "Focus (if 1H)"           }] },
    rogue:       { leftSlots: [{ label: "Weapon 1", sub: "One-Handed"                }], rightSlots: [{ label: "Weapon 2", sub: "One-Handed or Bow"        }] },
    sorcerer:    { leftSlots: [{ label: "Weapon",   sub: "Wand or Staff"             }], rightSlots: [{ label: "Offhand",   sub: "Focus (if Wand)"         }] },
    paladin:     { leftSlots: [{ label: "Weapon",   sub: "Two-Handed"                }], rightSlots: [{ label: "Offhand",   sub: "Offhand"                 }] },
    warlock:     { leftSlots: [{ label: "Weapon",   sub: "Two-Handed"                }], rightSlots: [{ label: "Offhand",   sub: "Offhand"                 }] }
};

// ── STATIC SLOTS ──────────────────────────────────────────────
const STATIC_SLOTS = [
    { id: "helm",        label: "Helm"        },
    { id: "chest",       label: "Chest Armor" },
    { id: "gloves",      label: "Gloves"      },
    { id: "pants",       label: "Pants"       },
    { id: "boots",       label: "Boots"       },
    { id: "amulet",      label: "Amulet"      },
    { id: "ring-left",   label: "Left Ring"   },
    { id: "ring-right",  label: "Right Ring"  }
];

// ── CLASS-SPECIFIC AFFIX VALIDATION ───────────────────────────
// Returns true if an affix is mismatched for the current class
function isAffixMismatch(affixValue, className) {
    if (!affixValue) return false;

    // Check if it's a primary stat that doesn't match this class
    const classStat = CLASS_PRIMARY_STAT[className];
    const allStats  = Object.values(CLASS_PRIMARY_STAT);
    if (allStats.includes(affixValue) && affixValue !== classStat) return true;

    // Check if it's a class-specific skill rank that doesn't match
    const adeptData = window.PrismRegistry["adeptPrism"];
    if (adeptData?.classskills) {
        for (const [cls, skills] of Object.entries(adeptData.classskills)) {
            if (cls !== className && skills.includes(affixValue)) return true;
        }
    }

    // Check class-specific resource entries
    const resourceData = window.PrismRegistry["resourcefulPrism"];
    if (resourceData?.classresource) {
        for (const [cls, resources] of Object.entries(resourceData.classresource)) {
            if (cls !== className && resources.includes(affixValue)) return true;
        }
    }

    // Check utility class skills
    const pragmaticData = window.PrismRegistry["pragmaticPrism"];
    if (pragmaticData?.classskills) {
        for (const [cls, skills] of Object.entries(pragmaticData.classskills)) {
            if (cls !== className && skills.includes(affixValue)) return true;
        }
    }

    return false;
}

// ══════════════════════════════════════════════════════════════
//  CHARACTER MANAGEMENT
// ══════════════════════════════════════════════════════════════

const STORAGE_KEY = "horadric_planner_v1";

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function emptyCharacterSlots() {
    const slots = {};
    STATIC_SLOTS.forEach(({ id }) => {
        slots[id] = { item: null, affixes: { slot1: null, slot2: null, slot3: null, slot4: null } };
    });
    return slots;
}

function createCharacter(name, className) {
    return {
        id:         generateId(),
        name:       name || "New Character",
        className:  className || "spiritborn",
        gearLocked: false,
        slots:      emptyCharacterSlots()
    };
}

function loadStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
}

function saveStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Storage));
    } catch (e) {}
}

// In-memory storage state
let Storage = {
    characters:        [],
    activeCharacterId: null
};

function initStorage() {
    const saved = loadStorage();
    if (saved && saved.characters?.length) {
        Storage = saved;
    } else {
        const defaultChar = createCharacter("My Character", "spiritborn");
        Storage.characters        = [defaultChar];
        Storage.activeCharacterId = defaultChar.id;
        saveStorage();
    }
}

function getActiveCharacter() {
    return Storage.characters.find(c => c.id === Storage.activeCharacterId) || Storage.characters[0];
}

function setActiveCharacter(id) {
    Storage.activeCharacterId = id;
    saveStorage();
    loadCharacterIntoApp(getActiveCharacter());
    renderCharacterSelector();
}

// ── LOAD CHARACTER INTO APP STATE ─────────────────────────────
function loadCharacterIntoApp(char) {
    if (!char) return;

    // Set class
    AppState.activeClass = char.className;

    // Restore lock state
    AppState.gearLocked = char.gearLocked || false;
    applyGearLockUI();
    const classSelect = document.getElementById("class-select-dropdown");
    if (classSelect) classSelect.value = char.className;

    // Load slot data into AppState
    AppState.affixSelections = {};
    AppState.itemSelections  = {};

    STATIC_SLOTS.forEach(({ id }) => {
        const slotData = char.slots?.[id] || {};
        AppState.affixSelections[id]  = { ...(slotData.affixes || { slot1: null, slot2: null, slot3: null, slot4: null }) };
        AppState.itemSelections[id]   = slotData.item   || null;
        AppState.temperSelections[id] = slotData.temper || null;
    });

    // Rebuild weapon slots for the class
    buildWeaponSlots(char.className);

    // Load weapon slot data
    const weaponConfig = CLASS_WEAPONS[char.className] || CLASS_WEAPONS.spiritborn;
    const allWeaponSlots = [...weaponConfig.leftSlots, ...weaponConfig.rightSlots];
    allWeaponSlots.forEach((_, idx) => {
        const slotId   = `weapon-${idx}`;
        const slotData = char.slots?.[slotId] || {};
        AppState.affixSelections[slotId]  = { ...(slotData.affixes || { slot1: null, slot2: null, slot3: null, slot4: null }) };
        AppState.itemSelections[slotId]   = slotData.item   || null;
        AppState.temperSelections[slotId] = slotData.temper || null;
    });

    // Re-render all static cards
    buildStaticCards();

    // Clear focused card and craft panel
    AppState.focusedCard = null;
    updateCraftPanel();
}

// ── SAVE CURRENT APP STATE TO ACTIVE CHARACTER ────────────────
function saveCurrentCharacter() {
    const char = getActiveCharacter();
    if (!char) return;

    char.className  = AppState.activeClass;
    char.gearLocked = AppState.gearLocked;

    // Save static slots
    STATIC_SLOTS.forEach(({ id }) => {
        if (!char.slots[id]) char.slots[id] = {};
        char.slots[id].affixes = { ...AppState.affixSelections[id] };
        char.slots[id].item    = AppState.itemSelections[id]  || null;
        char.slots[id].temper  = AppState.temperSelections[id] || null;
    });

    // Save weapon slots
    Object.keys(AppState.affixSelections).forEach(k => {
        if (!k.startsWith("weapon-")) return;
        if (!char.slots[k]) char.slots[k] = {};
        char.slots[k].affixes = { ...AppState.affixSelections[k] };
        char.slots[k].item    = AppState.itemSelections[k]  || null;
        char.slots[k].temper  = AppState.temperSelections[k] || null;
    });

    saveStorage();
}

// ── CHARACTER SELECTOR UI ─────────────────────────────────────
function renderCharacterSelector() {
    const select = document.getElementById("character-select");
    if (!select) return;
    select.innerHTML = "";
    Storage.characters.forEach(char => {
        const opt = document.createElement("option");
        opt.value       = char.id;
        opt.textContent = char.name;
        opt.selected    = char.id === Storage.activeCharacterId;
        select.appendChild(opt);
    });
}

function handleCharacterSelect(id) {
    if (id === Storage.activeCharacterId) return;
    saveCurrentCharacter();
    setActiveCharacter(id);
}

// ── ADD CHARACTER ─────────────────────────────────────────────
function openAddCharacterModal() {
    document.getElementById("char-modal-name").value   = "";
    document.getElementById("char-modal-class").value  = "spiritborn";
    document.getElementById("char-modal-error").textContent = "";
    document.getElementById("add-character-modal").classList.add("open");
    setTimeout(() => document.getElementById("char-modal-name").focus(), 50);
}

function closeAddCharacterModal() {
    document.getElementById("add-character-modal").classList.remove("open");
}

function confirmAddCharacter() {
    const name      = document.getElementById("char-modal-name").value.trim();
    const className = document.getElementById("char-modal-class").value;
    const errorEl   = document.getElementById("char-modal-error");

    if (!name) {
        errorEl.textContent = "Please enter a character name.";
        return;
    }

    saveCurrentCharacter();
    const newChar = createCharacter(name, className);
    Storage.characters.push(newChar);
    Storage.activeCharacterId = newChar.id;
    saveStorage();

    closeAddCharacterModal();
    loadCharacterIntoApp(newChar);
    renderCharacterSelector();
}

// ── RENAME CHARACTER ──────────────────────────────────────────
function renameCharacter() {
    const char = getActiveCharacter();
    if (!char) return;
    const newName = prompt("Rename character:", char.name);
    if (newName && newName.trim()) {
        char.name = newName.trim();
        saveStorage();
        renderCharacterSelector();
    }
}

// ── DELETE CHARACTER ──────────────────────────────────────────
function deleteCharacter() {
    if (Storage.characters.length <= 1) {
        alert("You must have at least one character.");
        return;
    }
    const char = getActiveCharacter();
    if (!confirm(`Delete "${char.name}"? This cannot be undone.`)) return;

    Storage.characters = Storage.characters.filter(c => c.id !== char.id);
    Storage.activeCharacterId = Storage.characters[0].id;
    saveStorage();
    loadCharacterIntoApp(getActiveCharacter());
    renderCharacterSelector();
}

// ── CLASS CHANGE CONFIRMATION ─────────────────────────────────
function handleClassChange(newClass) {
    const currentClass = AppState.activeClass;
    if (newClass === currentClass) return;

    // Check if any selections exist that would be affected
    const hasSelections = Object.values(AppState.affixSelections).some(slot =>
        Object.values(slot).some(Boolean)
    );

    if (hasSelections) {
        openClassChangeModal(newClass, currentClass);
    } else {
        applyClassChange(newClass, false);
    }
}

function openClassChangeModal(newClass, oldClass) {
    document.getElementById("class-change-new").textContent  = newClass.charAt(0).toUpperCase() + newClass.slice(1);
    document.getElementById("class-change-old").textContent  = oldClass.charAt(0).toUpperCase() + oldClass.slice(1);
    document.getElementById("class-change-modal").dataset.newClass = newClass;
    document.getElementById("class-change-modal").classList.add("open");
}

function closeClassChangeModal() {
    document.getElementById("class-change-modal").classList.remove("open");
    // Revert the dropdown to current class
    document.getElementById("class-select-dropdown").value = AppState.activeClass;
}

function confirmClassChangeClear() {
    const newClass = document.getElementById("class-change-modal").dataset.newClass;
    document.getElementById("class-change-modal").classList.remove("open");
    applyClassChange(newClass, true);
}

function confirmClassChangeKeep() {
    const newClass = document.getElementById("class-change-modal").dataset.newClass;
    document.getElementById("class-change-modal").classList.remove("open");
    applyClassChange(newClass, false);
}

function applyClassChange(newClass, clearGear) {
    if (clearGear) {
        AppState.affixSelections = {};
        AppState.itemSelections  = {};
        STATIC_SLOTS.forEach(({ id }) => initSlotState(id));
    }

    AppState.activeClass = newClass;
    document.getElementById("class-select-dropdown").value = newClass;

    if (AppState.focusedCard?.startsWith("weapon-")) {
        AppState.focusedCard = null;
        updateCraftPanel();
    }

    buildWeaponSlots(newClass);
    buildStaticCards();
    saveCurrentCharacter();
    updateCraftPanel();
}

// ══════════════════════════════════════════════════════════════
//  APP STATE
// ══════════════════════════════════════════════════════════════
const AppState = {
    activeClass:      "spiritborn",
    focusedCard:      null,
    affixSelections:  {},
    itemSelections:   {},
    temperSelections: {},
    gearLocked:       false
};

function initSlotState(slotId) {
    if (!AppState.affixSelections[slotId]) {
        AppState.affixSelections[slotId] = { slot1: null, slot2: null, slot3: null, slot4: null };
    }
    if (AppState.itemSelections[slotId] === undefined) {
        AppState.itemSelections[slotId] = null;
    }
    if (AppState.temperSelections[slotId] === undefined) {
        AppState.temperSelections[slotId] = null;
    }
}

// ── RENDER AFFIX ROWS ─────────────────────────────────────────
function renderAffixRows(slotId) {
    initSlotState(slotId);
    const container = document.getElementById(`affixes-${slotId}`);
    if (!container) return;
    container.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const isTemper   = i === 5;
        const currentVal = !isTemper ? AppState.affixSelections[slotId][`slot${i}`] : null;
        const mismatch   = !isTemper && isAffixMismatch(currentVal, AppState.activeClass);

        const row = document.createElement("div");
        row.className = "affix-row" + (isTemper ? " temper-slot" : "");

        const num = document.createElement("span");
        num.className   = "affix-num";
        num.textContent = i;

        // Red asterisk for mismatched affixes
        if (mismatch) {
            num.innerHTML = `${i}<span class="mismatch-flag" title="This affix doesn't match the selected class">✱</span>`;
        }

        const sel = document.createElement("select");
        sel.className = "affix-select";
        sel.id        = `affix-${slotId}-${i}`;

        if (isTemper) {
            const temperVal = AppState.temperSelections?.[slotId] || null;
            const opt       = document.createElement("option");
            opt.textContent = temperVal || "Temper Slot";
            sel.appendChild(opt);
            if (temperVal) sel.classList.add("has-value");

            sel.addEventListener("mousedown", (e) => {
                e.preventDefault();
                if (AppState.gearLocked) { focusCard(slotId); return; }
                openTemperModal(slotId);
            });
        } else {
            const phOpt = document.createElement("option");
            phOpt.value       = "";
            phOpt.textContent = "Select Affix…";
            sel.appendChild(phOpt);

            if (currentVal) {
                const opt       = document.createElement("option");
                opt.value       = currentVal;
                opt.textContent = currentVal;
                opt.selected    = true;
                sel.appendChild(opt);
                sel.classList.add(mismatch ? "has-mismatch" : "has-value");
            }

            sel.addEventListener("mousedown", (e) => {
                e.preventDefault();
                if (AppState.gearLocked) { focusCard(slotId); return; }
                openAffixModal(slotId, i);
            });
        }

        // Plain-text label shown only in locked mode (CSS toggles visibility)
        const lockedLabel = document.createElement("span");
        lockedLabel.className = "affix-locked-label";

        if (isTemper) {
            const temperVal = AppState.temperSelections?.[slotId] || null;
            lockedLabel.textContent = temperVal || "No temper set";
            if (!temperVal) lockedLabel.classList.add("empty");
        } else {
            if (currentVal) {
                lockedLabel.textContent = currentVal;
                if (mismatch) lockedLabel.classList.add("mismatch");
            } else {
                lockedLabel.textContent = "—";
                lockedLabel.classList.add("empty");
            }
        }

        row.appendChild(num);
        row.appendChild(sel);
        row.appendChild(lockedLabel);
        container.appendChild(row);
    }
}

function buildStaticCards() {
    STATIC_SLOTS.forEach(({ id }) => {
        initSlotState(id);
        renderAffixRows(id);
        updateItemNameDisplay(id);
    });
}

// ── WEAPON SLOTS ──────────────────────────────────────────────
function buildWeaponSlots(className) {
    const config     = CLASS_WEAPONS[className] || CLASS_WEAPONS.spiritborn;
    const leftMount  = document.getElementById("left-weapon-mounts");
    const rightMount = document.getElementById("right-weapon-mounts");
    leftMount.innerHTML  = "";
    rightMount.innerHTML = "";

    let idx = 0;

    function mountWeaponCard(slot, mountEl) {
        const slotId = `weapon-${idx}`;
        idx++;
        initSlotState(slotId);

        const card    = document.createElement("div");
        card.className = "item-card";
        card.id        = `card-${slotId}`;
        card.style.marginBottom = "12px";
        card.onclick   = () => focusCard(slotId);

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
            if (AppState.gearLocked) { focusCard(slotId); return; }
            openItemModal(slotId, e);
        });
        renderAffixRows(slotId);
        updateItemNameDisplay(slotId);
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
    nameEl.classList.remove("is-legendary", "is-unique", "is-mythic");

    // Clear any existing tooltip listeners by cloning the element
    const newNameEl = nameEl.cloneNode(true);
    nameEl.parentNode.replaceChild(newNameEl, nameEl);
    const freshNameEl     = document.getElementById(`name-${slotId}`);
    const freshNameTextEl = document.getElementById(`name-text-${slotId}`);

    // Re-bind item modal click
    freshNameEl.addEventListener("click", (e) => {
        e.stopPropagation();
        if (AppState.gearLocked) { focusCard(slotId); return; }
        openItemModal(slotId, e);
    });

    if (!selection) { freshNameTextEl.textContent = "Select Item"; return; }

    freshNameTextEl.textContent = selection.name;
    if (selection.tier === "legendary")  freshNameEl.classList.add("is-legendary");
    else if (selection.tier === "unique")  freshNameEl.classList.add("is-unique");
    else if (selection.tier === "mythic")  freshNameEl.classList.add("is-mythic");

    // Attach hover tooltip if item has a power description
    const power = getItemPower(selection.name, selection.tier);
    if (power) {
        const typeLabel = selection.tier === "mythic" ? "Mythic Unique"
                        : selection.tier === "unique" ? "Unique"
                        : "Legendary Aspect";
        attachTooltip(freshNameEl, selection.name, typeLabel, power);
    }
}

function getItemPower(name, tier) {
    if (tier === "mythic") {
        const all = window.MythicRegistry || {};
        for (const list of Object.values(all)) {
            const found = list.find(i => i?.name === name);
            if (found?.power) return found.power;
        }
    } else if (tier === "unique") {
        const items = window.UniqueRegistry[AppState.activeClass] || [];
        const found = items.find(i => i?.name === name);
        if (found?.power) return found.power;
    } else if (tier === "legendary") {
        for (const list of Object.values(window.AspectRegistry || {})) {
            const found = list.find(i => typeof i === "object" && i?.name === name);
            if (found?.power) return found.power;
        }
    }
    return null;
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

    const picks  = AppState.affixSelections[slotId] || {};
    const chosen = [picks.slot1, picks.slot2, picks.slot3, picks.slot4].filter(Boolean);

    if (chosen.length === 0) {
        resultsEl.innerHTML = `<div class="craft-empty">No affixes selected.<br>Click an affix row to choose one.</div>`;
        return;
    }

    resultsEl.innerHTML = "";
    chosen.forEach(affix => {
        const prismKeys  = findPrismsForAffix(affix);
        const mismatch   = isAffixMismatch(affix, AppState.activeClass);
        const row        = document.createElement("div");
        row.className    = "result-row" + (mismatch ? " result-mismatch" : "");

        const nameSpan = document.createElement("span");
        nameSpan.className   = "result-affix-name";
        nameSpan.textContent = affix;
        if (mismatch) {
            nameSpan.innerHTML = `${affix} <span class="mismatch-flag" title="Doesn't match current class">✱</span>`;
        }

        const badgeWrap = document.createElement("span");
        badgeWrap.style.cssText = "display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;";

        if (prismKeys.length === 0) {
            const badge       = document.createElement("span");
            badge.className   = "prism-badge badge-none";
            badge.textContent = "No Prism";
            badgeWrap.appendChild(badge);
        } else {
            prismKeys.forEach(key => {
                const badge       = document.createElement("span");
                badge.className   = "prism-badge " + (PRISM_BADGE_CLASS[key] || "badge-none");
                badge.textContent = PRISM_DISPLAY_NAME[key] || key;
                badgeWrap.appendChild(badge);
            });
        }

        row.appendChild(nameSpan);
        row.appendChild(badgeWrap);
        resultsEl.appendChild(row);
    });
}

// ── PRISM LOOKUP ──────────────────────────────────────────────
function flattenPrismData(data) {
    if (Array.isArray(data)) return data;
    if (typeof data === "object") {
        const cls         = AppState.activeClass;
        const primaryStat = data.stats?.[cls] || null;
        return [
            ...(primaryStat ? [primaryStat] : []),
            ...(data.universal            || []),
            ...(data.classskills?.[cls]   || []),
            ...(data.classresource?.[cls] || [])
        ];
    }
    return [];
}

function findPrismsForAffix(affixName) {
    const matches = [];
    for (const [key, data] of Object.entries(window.PrismRegistry)) {
        if (flattenPrismData(data).includes(affixName)) matches.push(key);
    }
    return matches;
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

// ── AUTO-SAVE HOOK ────────────────────────────────────────────
function autoSave() { saveCurrentCharacter(); }

// ══════════════════════════════════════════════════════════════
//  GEAR LOCK
// ══════════════════════════════════════════════════════════════

function toggleGearLock() {
    AppState.gearLocked = !AppState.gearLocked;
    applyGearLockUI();
    autoSave();
}

function applyGearLockUI() {
    const inner  = document.getElementById("gear-panel-inner");
    const btn    = document.getElementById("gear-lock-btn");
    if (!inner || !btn) return;

    if (AppState.gearLocked) {
        inner.classList.add("gear-locked");
        btn.textContent = "🔒";
        btn.classList.add("locked");
        btn.title = "Unlock gear to edit affixes and items";
    } else {
        inner.classList.remove("gear-locked");
        btn.textContent = "🔓";
        btn.classList.remove("locked");
        btn.title = "Lock gear for quick slot selection";
    }

}

// ══════════════════════════════════════════════════════════════
//  TEMPER MODAL
// ══════════════════════════════════════════════════════════════

let temperModalState = {
    slotId:         null,
    activeCategory: null
};

function openTemperModal(slotId) {
    temperModalState.slotId = slotId;
    if (!temperModalState.activeCategory) {
        const config      = getSlotConfig(slotId);
        const allowedCats = TEMPER_CATEGORY_MAP.filter(c => config.temperCategories.includes(c.key));
        temperModalState.activeCategory = allowedCats[0]?.key || null;
    }

    document.getElementById("temper-modal-title").textContent =
        `Temper — ${getSlotLabel(slotId)}`;

    renderTemperCategories();
    renderTemperList();
    document.getElementById("temper-modal").classList.add("open");
}

function closeTemperModal() {
    document.getElementById("temper-modal").classList.remove("open");
}

function renderTemperCategories() {
    const container  = document.getElementById("temper-category-list");
    container.innerHTML = "";
    const slotId     = temperModalState.slotId;
    const config     = getSlotConfig(slotId);
    const allowedCats = TEMPER_CATEGORY_MAP.filter(c => config.temperCategories.includes(c.key));

    allowedCats.forEach(({ label, key }) => {
        const btn = document.createElement("button");
        btn.className   = "modal-cat-btn" + (key === temperModalState.activeCategory ? " active" : "");
        btn.textContent = label;
        btn.onclick = () => {
            temperModalState.activeCategory = key;
            renderTemperCategories();
            renderTemperList();
        };
        container.appendChild(btn);
    });
}

function renderTemperList() {
    const container  = document.getElementById("temper-affix-list");
    container.innerHTML = "";
    const slotId     = temperModalState.slotId;
    const currentVal = AppState.temperSelections[slotId];
    const tempers    = window.TemperRegistry[temperModalState.activeCategory] || [];

    // Filter to slot-eligible tempers
    const filtered = tempers.filter(t => {
        if (!t.slots || t.slots.length === 0) return true;
        return t.slots.includes(slotId);
    });

    // Clear option
    const clearBtn = document.createElement("button");
    clearBtn.className   = "modal-affix-btn";
    clearBtn.textContent = "— Clear Temper —";
    clearBtn.style.color = "var(--text-secondary)";
    clearBtn.onclick     = () => selectTemper(null);
    container.appendChild(clearBtn);

    if (filtered.length === 0) {
        const empty = document.createElement("div");
        empty.style.cssText = "padding:16px;color:var(--text-hint);font-style:italic;font-size:12px;";
        empty.textContent   = "No tempers available for this slot.";
        container.appendChild(empty);
        return;
    }

    filtered.forEach(t => {
        const name = typeof t === "string" ? t : t.name;
        const btn  = document.createElement("button");
        btn.className   = "modal-affix-btn" + (name === currentVal ? " selected" : "");
        btn.textContent = name;
        btn.onclick     = () => selectTemper(name);
        container.appendChild(btn);
    });
}

function selectTemper(value) {
    const slotId = temperModalState.slotId;
    if (!slotId) return;
    AppState.temperSelections[slotId] = value;
    renderAffixRows(slotId);
    closeTemperModal();
    autoSave();
    if (AppState.focusedCard === slotId) updateCraftPanel();
}

// ══════════════════════════════════════════════════════════════
//  AFFIX MODAL
// ══════════════════════════════════════════════════════════════
let affixModalState = {
    slotId:         null,
    slotIndex:      null,
    activeCategory: null
};

function openAffixModal(slotId, slotIndex) {
    affixModalState.slotId    = slotId;
    affixModalState.slotIndex = slotIndex;
    if (!affixModalState.activeCategory) {
        affixModalState.activeCategory = AFFIX_CATEGORY_MAP[0].key;
    }
    document.getElementById("affix-modal-title").textContent = `Affix Slot ${slotIndex} — ${getSlotLabel(slotId)}`;
    renderAffixModalCategories();
    renderAffixModalList();
    document.getElementById("affix-modal").classList.add("open");
}

function closeAffixModal() { document.getElementById("affix-modal").classList.remove("open"); }
function handleModalOverlayClick(e) { if (e.target.id === "affix-modal") closeAffixModal(); }

function renderAffixModalCategories() {
    const container = document.getElementById("modal-category-list");
    container.innerHTML = "";
    AFFIX_CATEGORY_MAP.forEach(({ label, key }) => {
        const btn = document.createElement("button");
        btn.className   = "modal-cat-btn" + (key === affixModalState.activeCategory ? " active" : "");
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
    const rawData    = window.PrismRegistry[affixModalState.activeCategory];
    const affixList  = flattenPrismData(rawData || []);

    const clearBtn = document.createElement("button");
    clearBtn.className   = "modal-affix-btn";
    clearBtn.textContent = "— Clear Selection —";
    clearBtn.style.color = "var(--text-secondary)";
    clearBtn.onclick     = () => selectAffix(null);
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

    const sel = document.getElementById(`affix-${slotId}-${slotIndex}`);
    if (sel) {
        sel.innerHTML = "";
        if (affixValue) {
            const opt       = document.createElement("option");
            opt.value       = affixValue;
            opt.textContent = affixValue;
            opt.selected    = true;
            sel.appendChild(opt);
            sel.classList.remove("has-value", "has-mismatch");
            sel.classList.add(isAffixMismatch(affixValue, AppState.activeClass) ? "has-mismatch" : "has-value");
        } else {
            const opt       = document.createElement("option");
            opt.value       = "";
            opt.textContent = "Select Affix…";
            sel.appendChild(opt);
            sel.classList.remove("has-value", "has-mismatch");
        }
    }

    // Re-render rows and summary
    renderAffixRows(slotId);
    closeAffixModal();
    autoSave();
    if (AppState.focusedCard === slotId) updateCraftPanel();
}

// ══════════════════════════════════════════════════════════════
//  ITEM MODAL
// ══════════════════════════════════════════════════════════════
let itemModalState = { slotId: null, selectedTier: null, activeCategory: null };

function openItemModal(slotId, event) {
    if (event) event.stopPropagation();
    if (AppState.gearLocked) { focusCard(slotId); return; }
    itemModalState.slotId        = slotId;
    itemModalState.selectedTier  = null;
    itemModalState.activeCategory = null;
    document.getElementById("item-modal-title").textContent = `Select Item — ${getSlotLabel(slotId)}`;
    showItemTierStep();
    document.getElementById("item-modal").classList.add("open");
}

function closeItemModal() { document.getElementById("item-modal").classList.remove("open"); }
function handleItemModalOverlayClick(e) { if (e.target.id === "item-modal") closeItemModal(); }

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
    legBtn.onclick   = () => showItemBrowseStep("legendary");
    tierEl.appendChild(legBtn);

    const uniqueBtn = document.createElement("button");
    uniqueBtn.className = "tier-btn unique";
    uniqueBtn.innerHTML = `Unique <span class="tier-btn-sub">Class-specific named items</span>`;
    uniqueBtn.onclick   = () => showItemBrowseStep("unique");
    tierEl.appendChild(uniqueBtn);

    const mythBtn = document.createElement("button");
    mythBtn.className = "tier-btn mythic";
    mythBtn.innerHTML = `Mythic <span class="tier-btn-sub">Slot-locked ultra-rare items</span>`;
    mythBtn.onclick   = () => showItemBrowseStep("mythic");
    tierEl.appendChild(mythBtn);

    const clearBtn = document.createElement("button");
    clearBtn.className   = "tier-btn-clear";
    clearBtn.textContent = "✕  Clear item selection";
    clearBtn.onclick     = () => selectItem(null);
    tierEl.appendChild(clearBtn);
}

function showItemBrowseStep(tier) {
    itemModalState.selectedTier = tier;
    document.getElementById("item-step-tier").style.display   = "none";
    document.getElementById("item-step-browse").style.display = "flex";

    const slotId = itemModalState.slotId;
    const config = getSlotConfig(slotId);

    if (tier === "unique") {
        renderItemBrowseCats([]);
        renderUniqueList(slotId);
    } else if (tier === "mythic") {
        renderItemBrowseCats([]);
        renderMythicList(slotId);
    } else {
        const allowedCats = ASPECT_CATEGORY_MAP.filter(c => config.aspectCategories.includes(c.key));
        itemModalState.activeCategory = allowedCats[0]?.key || null;
        renderItemBrowseCats(allowedCats);
        renderAspectList(slotId, itemModalState.activeCategory);
    }
}

function renderItemBrowseCats(cats) {
    const catsEl = document.getElementById("item-modal-cats");
    catsEl.innerHTML = "";
    const backBtn = document.createElement("button");
    backBtn.className = "modal-cat-btn";
    backBtn.style.borderBottom = "1px solid var(--border-dim)";
    backBtn.innerHTML = "‹ Back";
    backBtn.onclick   = showItemTierStep;
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

function renderAspectList(slotId, categoryKey) {
    const listEl = document.getElementById("item-modal-list");
    listEl.innerHTML = "";
    const aspects = (window.AspectRegistry[categoryKey] || []).filter(aspect => {
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
        const name  = typeof aspect === "string" ? aspect : aspect.name;
        const power = typeof aspect === "object" ? aspect.power || "" : "";
        const btn   = document.createElement("button");
        btn.className = "item-modal-btn tier-legendary";
        btn.innerHTML = `
            <span class="item-btn-name">${name}</span>
            ${power ? `<span class="item-btn-power">${power}</span>` : "<span></span>"}
        `;
        btn.onclick = () => selectItem({ name, tier: "legendary" });
        listEl.appendChild(btn);
    });
}

function renderUniqueList(slotId) {
    const listEl = document.getElementById("item-modal-list");
    listEl.innerHTML = "";
    const catsEl = document.getElementById("item-modal-cats");
    catsEl.innerHTML = "";
    const backBtn = document.createElement("button");
    backBtn.className = "modal-cat-btn";
    backBtn.innerHTML = "‹ Back";
    backBtn.onclick   = showItemTierStep;
    catsEl.appendChild(backBtn);

    const classItems = window.UniqueRegistry[AppState.activeClass] || [];
    const matched = classItems.filter(item => {
        if (!item?.name) return false;
        const itemSlots = item.slots || (item.slot ? [item.slot] : []);
        return itemSlots.length === 0 || itemSlots.includes(slotId);
    });

    if (matched.length === 0) {
        const empty = document.createElement("div");
        empty.style.cssText = "padding:20px 16px;color:var(--text-hint);font-style:italic;font-size:12px;";
        empty.textContent   = "No unique items available for this slot and class.";
        listEl.appendChild(empty);
        return;
    }

    matched.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "item-modal-btn tier-unique";
        btn.innerHTML = `
            <span class="item-btn-name">${item.name}</span>
            ${item.power ? `<span class="item-btn-power">${item.power}</span>` : "<span></span>"}
        `;
        btn.onclick = () => selectItem({ name: item.name, tier: "unique" });
        listEl.appendChild(btn);
    });
}

function renderMythicList(slotId) {
    const listEl = document.getElementById("item-modal-list");
    listEl.innerHTML = "";
    const catsEl = document.getElementById("item-modal-cats");
    catsEl.innerHTML = "";
    const backBtn = document.createElement("button");
    backBtn.className = "modal-cat-btn";
    backBtn.innerHTML = "‹ Back";
    backBtn.onclick   = showItemTierStep;
    catsEl.appendChild(backBtn);

    const all     = window.MythicRegistry || {};
    const matched = [];
    Object.values(all).flat().forEach(item => {
        if (!item?.name) return;
        const itemSlots = item.slots || (item.slot ? [item.slot] : []);
        if (itemSlots.length === 0 || itemSlots.includes(slotId)) matched.push(item.name);
    });

    if (matched.length === 0) {
        const empty = document.createElement("div");
        empty.style.cssText = "padding:20px 16px;color:var(--text-hint);font-style:italic;font-size:12px;";
        empty.textContent   = "No mythic items available for this slot.";
        listEl.appendChild(empty);
        return;
    }
    // Build item map for power lookup
    const mythicItemMap = {};
    Object.values(window.MythicRegistry || {}).flat().forEach(item => {
        if (item?.name) mythicItemMap[item.name] = item;
    });

    matched.forEach(name => {
        const item  = mythicItemMap[name] || {};
        const btn   = document.createElement("button");
        btn.className = "item-modal-btn tier-mythic";
        btn.innerHTML = `
            <span class="item-btn-name">${name}</span>
            ${item.power ? `<span class="item-btn-power">${item.power}</span>` : "<span></span>"}
        `;
        btn.onclick = () => selectItem({ name, tier: "mythic" });
        listEl.appendChild(btn);
    });
}

function selectItem(itemObj) {
    const { slotId } = itemModalState;
    if (!slotId) return;
    AppState.itemSelections[slotId] = itemObj;
    updateItemNameDisplay(slotId);
    closeItemModal();
    autoSave();
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

    if (tabName === "database") {
        const sel = document.getElementById("db-class-select");
        renderDatabase(sel ? sel.value : "all");
    }
}

// ══════════════════════════════════════════════════════════════
//  BOOT
// ══════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
    initStorage();
    renderCharacterSelector();
    loadCharacterIntoApp(getActiveCharacter());
});

// ══════════════════════════════════════════════════════════════
//  DATABASE PAGE
// ══════════════════════════════════════════════════════════════

const PRISM_SECTION_COLOR = {
    aggressivePrism:  "badge-aggressive",
    protectorPrism:   "badge-protector",
    pragmaticPrism:   "badge-pragmatic",
    resourcefulPrism: "badge-resourceful",
    adeptPrism:       "badge-adept",
    chromaticPrism:   "badge-chromatic",
    mobilityPrism:    "badge-mobility"
};

function renderDatabase(filterClass) {
    const container = document.getElementById("db-content");
    if (!container) return;
    container.innerHTML = "";
    container.appendChild(buildPrismsSection(filterClass));
    container.appendChild(buildAspectsSection(filterClass));
    container.appendChild(buildTempersSection(filterClass));
    container.appendChild(buildUniquesSection(filterClass));
    container.appendChild(buildMythicsSection());
}

// ── SECTION BUILDER ───────────────────────────────────────────
// toggleDefs: array of { label, key } or null for no toggles
function buildSection(title, metaText, toggleDefs, buildBodyFn) {
    const section = document.createElement("div");
    section.className = "db-section";

    const header = document.createElement("div");
    header.className = "db-section-header";
    header.innerHTML = `
        <span class="db-section-title">${title}</span>
        <span style="display:flex;align-items:center;gap:12px;">
            <span class="db-section-meta">${metaText}</span>
            <span class="db-section-chevron">▼</span>
        </span>
    `;

    let toggleRow = null;
    if (toggleDefs && toggleDefs.length > 0) {
        toggleRow = document.createElement("div");
        toggleRow.className = "db-cat-toggles";
        toggleRow.style.display = "none";
        toggleRow.onclick = e => e.stopPropagation();
    }

    const body = document.createElement("div");
    body.className = "db-section-body";
    let built = false;

    function rebuildBody(activeCat) {
        body.innerHTML = "";
        body.appendChild(buildBodyFn(activeCat));
    }

    header.onclick = () => {
        section.classList.toggle("open");
        const isOpen = section.classList.contains("open");
        if (toggleRow) toggleRow.style.display = isOpen ? "flex" : "none";
        if (isOpen && !built) {
            built = true;
            rebuildBody(null);
        }
    };

    if (toggleDefs && toggleRow) {
        const allBtn = document.createElement("button");
        allBtn.className = "db-cat-toggle active";
        allBtn.textContent = "All";
        allBtn.onclick = () => {
            toggleRow.querySelectorAll(".db-cat-toggle").forEach(b => b.classList.remove("active"));
            allBtn.classList.add("active");
            rebuildBody(null);
        };
        toggleRow.appendChild(allBtn);

        toggleDefs.forEach(({ label, key }) => {
            const btn = document.createElement("button");
            btn.className = "db-cat-toggle";
            btn.textContent = label;
            btn.onclick = () => {
                toggleRow.querySelectorAll(".db-cat-toggle").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                rebuildBody(key);
            };
            toggleRow.appendChild(btn);
        });
    }

    section.appendChild(header);
    if (toggleRow) section.appendChild(toggleRow);
    section.appendChild(body);
    return section;
}

// ── PRISMS ────────────────────────────────────────────────────
function buildPrismsSection(filterClass) {
    const toggles = [
        { label: "Aggressive",  key: "aggressivePrism"  },
        { label: "Protector",   key: "protectorPrism"   },
        { label: "Pragmatic",   key: "pragmaticPrism"   },
        { label: "Resourceful", key: "resourcefulPrism" },
        { label: "Adept",       key: "adeptPrism"       },
        { label: "Chromatic",   key: "chromaticPrism"   },
        { label: "Mobility",    key: "mobilityPrism"    }
    ];

    return buildSection("Tuning Prisms", "7 prisms", toggles, (activeCat) => {
        const grid = document.createElement("div");
        grid.className = "db-cat-grid";

        const entries = activeCat
            ? (window.PrismRegistry[activeCat] ? [[activeCat, window.PrismRegistry[activeCat]]] : [])
            : Object.entries(window.PrismRegistry);

        entries.forEach(([key, data]) => {
            const block = document.createElement("div");
            block.className = "db-cat-block";

            const label = document.createElement("div");
            label.className = "db-cat-label";
            label.innerHTML = `<span class="db-cat-badge prism-badge ${PRISM_SECTION_COLOR[key] || ""}">${PRISM_DISPLAY_NAME[key] || key}</span>`;
            block.appendChild(label);

            const cls = filterClass === "all" ? null : filterClass;
            let affixList = [];
            if (Array.isArray(data)) {
                affixList = data;
            } else if (typeof data === "object") {
                if (cls) {
                    const primaryStat = data.stats?.[cls] || null;
                    affixList = [
                        ...(primaryStat ? [primaryStat] : []),
                        ...(data.universal            || []),
                        ...(data.classskills?.[cls]   || []),
                        ...(data.classresource?.[cls] || [])
                    ];
                } else {
                    const allStats     = data.stats        ? [...new Set(Object.values(data.stats))]                 : [];
                    const allSkills    = data.classskills  ? [...new Set(Object.values(data.classskills).flat())]    : [];
                    const allResources = data.classresource? [...new Set(Object.values(data.classresource).flat())]  : [];
                    affixList = [...allStats, ...(data.universal || []), ...allSkills, ...allResources];
                }
            }

            if (affixList.length === 0) {
                const empty = document.createElement("div");
                empty.className = "db-placeholder-msg";
                empty.textContent = "No entries for this class.";
                block.appendChild(empty);
            } else {
                affixList.forEach(affix => {
                    const entry = document.createElement("div");
                    entry.className   = "db-entry";
                    entry.textContent = affix;
                    block.appendChild(entry);
                });
            }
            grid.appendChild(block);
        });
        return grid;
    });
}

// ── ASPECTS ───────────────────────────────────────────────────
function buildAspectsSection(filterClass) {
    const isFiltered = filterClass !== "all";
    const meta = isFiltered
        ? `Filtered for ${filterClass.charAt(0).toUpperCase() + filterClass.slice(1)}`
        : "All Classes";

    return buildSection("Legendary Aspects", meta,
        ASPECT_CATEGORY_MAP.map(c => ({ label: c.label, key: c.key })),
        (activeCat) => {
            // Gather all matching aspects across relevant categories, sorted alpha
            const catsToUse = activeCat
                ? ASPECT_CATEGORY_MAP.filter(c => c.key === activeCat)
                : ASPECT_CATEGORY_MAP;

            let rows = [];
            catsToUse.forEach(({ label, key }) => {
                const aspects = window.AspectRegistry[key] || [];
                const filtered = isFiltered
                    ? aspects.filter(a => !a.classes || a.classes.length === 0 || a.classes.includes(filterClass))
                    : aspects;
                filtered.forEach(a => {
                    rows.push({ name: typeof a === "string" ? a : a.name, tag: label, desc: typeof a === "object" ? (a.power || "") : "" });
                });
            });

            rows.sort((a, b) => a.name.localeCompare(b.name));

            const table = document.createElement("div");
            table.className = "db-table";

            const hdr = document.createElement("div");
            hdr.className = "db-table-header";
            hdr.innerHTML = "<span>Aspect</span><span>Category</span><span>Effect</span>";
            table.appendChild(hdr);

            if (rows.length === 0) {
                const empty = document.createElement("div");
                empty.className = "db-placeholder-msg";
                empty.style.padding = "16px 12px";
                empty.textContent = "None available.";
                table.appendChild(empty);
            } else {
                rows.forEach(r => {
                    const row = document.createElement("div");
                    row.className = "db-table-row";
                    row.innerHTML = `
                        <div class="db-row-name is-legendary">${r.name}</div>
                        <div class="db-row-tag">${r.tag}</div>
                        <div class="db-row-desc">${r.desc}</div>
                    `;
                    table.appendChild(row);
                });
            }
            return table;
        }
    );
}

// ── TEMPERS ───────────────────────────────────────────────────
function buildTempersSection(filterClass) {
    const isFiltered = filterClass !== "all";
    const meta = isFiltered
        ? `Filtered for ${filterClass.charAt(0).toUpperCase() + filterClass.slice(1)}`
        : "All Classes";

    return buildSection("Temper Manuals", meta,
        TEMPER_CATEGORY_MAP.map(c => ({ label: c.label, key: c.key })),
        (activeCat) => {
            const wrap = document.createElement("div");
            const grid = document.createElement("div");
            grid.className = "db-cat-grid";

            const catsToShow = activeCat
                ? TEMPER_CATEGORY_MAP.filter(c => c.key === activeCat)
                : TEMPER_CATEGORY_MAP;

            catsToShow.forEach(({ label, key }) => {
                const block = document.createElement("div");
                block.className = "db-cat-block";

                const catLabel = document.createElement("div");
                catLabel.className   = "db-cat-label";
                catLabel.textContent = label;
                block.appendChild(catLabel);

                const tempers  = window.TemperRegistry[key] || [];
                const filtered = isFiltered
                    ? tempers.filter(t => !t.classes || t.classes.length === 0 || t.classes.includes(filterClass))
                    : tempers;

                if (filtered.length === 0) {
                    const empty = document.createElement("div");
                    empty.className = "db-placeholder-msg";
                    empty.textContent = "None available.";
                    block.appendChild(empty);
                } else {
                    // When a single category is shown, derive valid slot list from entries
                    if (activeCat) {
                        const slotSet = new Set();
                        filtered.forEach(t => {
                            if (typeof t === "object" && t.slots?.length) {
                                t.slots.forEach(s => slotSet.add(
                                    s.startsWith("weapon") ? "Weapons" :
                                    s.charAt(0).toUpperCase() + s.slice(1)
                                ));
                            }
                        });
                        // entries with slots:[] roll on all slots eligible for this category
                        const hasUniversal = filtered.some(t => typeof t === "object" && (!t.slots || t.slots.length === 0));
                        
                        if (slotSet.size > 0 || hasUniversal) {
                            const slotHeader = document.createElement("div");
                            slotHeader.className = "db-entry-slot";
                            slotHeader.style.cssText = "display:block;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--border-dim);font-size:11px;";
                            const universal = hasUniversal ? "All eligible slots" : "";
                            const specific  = slotSet.size > 0 ? [...slotSet].sort().join(", ") : "";
                            slotHeader.textContent = "Valid slots: " + [universal, specific].filter(Boolean).join(" + ");
                            block.appendChild(slotHeader);
                        }
                    }

                    filtered.forEach(t => {
                        const name  = typeof t === "string" ? t : t.name;
                        const entry = document.createElement("div");
                        entry.className = "db-entry";
                        entry.textContent = name;
                        block.appendChild(entry);
                    });
                    // Sort entries alphabetically
                    const entryNodes = [...block.querySelectorAll(".db-entry")];
                    entryNodes.sort((a, b) => a.textContent.localeCompare(b.textContent))
                             .forEach(n => block.appendChild(n));
                }
                grid.appendChild(block);
            });

            wrap.appendChild(grid);
            return wrap;
        }
    );
}

// ── UNIQUES ───────────────────────────────────────────────────
function buildUniquesSection(filterClass) {
    const isFiltered = filterClass !== "all";
    const meta = isFiltered
        ? `${filterClass.charAt(0).toUpperCase() + filterClass.slice(1)} only`
        : "All Classes";

    // Build class toggles from registered unique classes
    const classToggleKeys = Object.keys(window.UniqueRegistry || {});
    const classToggles = classToggleKeys.map(cls => ({
        label: cls.charAt(0).toUpperCase() + cls.slice(1),
        key:   cls
    }));

    return buildSection("Unique Items", meta, classToggles, (activeCat) => {
        const wrap = document.createElement("div");
        // activeCat here is a class key (e.g. "barbarian") or null for all
        const classesToShow = activeCat
            ? [activeCat]
            : (isFiltered ? [filterClass] : classToggleKeys);

        classesToShow.forEach(cls => {
            const items = window.UniqueRegistry[cls] || [];
            if (items.length === 0) return;

            // Show class label when showing multiple classes
            if (!activeCat && !isFiltered) {
                const classLabel = document.createElement("div");
                classLabel.style.cssText = "font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--text-hint);padding:10px 0 6px;border-bottom:1px solid var(--border-dim);margin-bottom:10px;";
                classLabel.textContent = cls;
                wrap.appendChild(classLabel);
            }

            const grid = document.createElement("div");
            grid.className = "db-table";
            grid.style.marginBottom = "16px";

            const hdr = document.createElement("div");
            hdr.className = "db-table-header";
            hdr.innerHTML = "<span>Item</span><span>Slot</span><span>Unique Power</span>";
            grid.appendChild(hdr);

            items.sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
                const slotLabel = item.slot
                    ? item.slot.charAt(0).toUpperCase() + item.slot.slice(1)
                    : (item.slots || []).map(s =>
                        s.startsWith("weapon") ? "Weapons" :
                        s.startsWith("ring")   ? "Rings"   :
                        s.charAt(0).toUpperCase() + s.slice(1)
                    ).filter((v, i, a) => a.indexOf(v) === i).join(", ");

                const row = document.createElement("div");
                row.className = "db-table-row";
                row.innerHTML = `
                    <div class="db-row-name is-unique">${item.name}</div>
                    <div class="db-row-tag">${slotLabel}</div>
                    <div class="db-row-desc">${item.power || "—"}</div>
                `;
                grid.appendChild(row);
            });
            wrap.appendChild(grid);
        });
        return wrap;
    });
}

// ── MYTHICS ───────────────────────────────────────────────────
function buildMythicsSection() {
    return buildSection("Mythic Uniques", "All classes — slot-locked", null, () => {
        const items = Object.values(window.MythicRegistry || {}).flat().filter(i => i?.name);
        items.sort((a, b) => a.name.localeCompare(b.name));

        const table = document.createElement("div");
        table.className = "db-table";

        const hdr = document.createElement("div");
        hdr.className = "db-table-header";
        hdr.innerHTML = "<span>Item</span><span>Slot</span><span>Unique Power</span>";
        table.appendChild(hdr);

        items.forEach(item => {
            const slotLabel = item.slot
                ? item.slot.charAt(0).toUpperCase() + item.slot.slice(1)
                : (item.slots || []).map(s =>
                    s.startsWith("weapon") ? "Weapons" :
                    s.startsWith("ring")   ? "Rings"   :
                    s.charAt(0).toUpperCase() + s.slice(1)
                ).filter((v, i, a) => a.indexOf(v) === i).join(", ");

            const row = document.createElement("div");
            row.className = "db-table-row";
            row.innerHTML = `
                <div class="db-row-name is-mythic">${item.name}</div>
                <div class="db-row-tag">${slotLabel}</div>
                <div class="db-row-desc">${item.power || ""}</div>
            `;
            table.appendChild(row);
        });
        return table;
    });
}
