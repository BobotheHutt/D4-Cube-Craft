// App State mapping out the 4 custom affix slots for the active item
const activeSelection = {
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null
};

// Global register to dynamically pool our prism dictionaries
window.PrismRegistry = {};

// Register single prism files as they load into memory
function registerPrismBucket(prismName, affixList) {
    window.PrismRegistry[prismName] = affixList;
}

// Triggers when a user clicks a gear piece on the armor grid
function selectGearPiece(slotName) {
    document.querySelectorAll('.gear-slot').forEach(el => el.classList.remove('active'));
    const targetElement = document.getElementById(`slot-${slotName}`);
    if (targetElement) targetElement.classList.add('active');

    // Reset current active selections for the fresh slot
    Object.keys(activeSelection).forEach(key => activeSelection[key] = null);
    
    document.getElementById('active-gear-title').innerText = slotName.toUpperCase().replace('-', ' ');
    renderAffixDropdowns();
    evaluateRequiredPrisms();
}

// Populates all 4 affix dropdown boxes with options from our databases
function renderAffixDropdowns() {
    const container = document.getElementById('affix-dropdowns-container');
    container.innerHTML = '';

    for (let i = 1; i <= 4; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'dropdown-wrapper';
        
        const label = document.createElement('label');
        label.innerText = `Affix Slot ${i}:`;
        
        const select = document.createElement('select');
        select.id = `select-affix-${i}`;
        select.addEventListener('change', (e) => handleAffixChange(i, e.target.value));

        // Default placeholder option
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.innerText = '-- Choose Desired Affix --';
        select.appendChild(placeholder);

        // Gather every unique affix across all our prisms alphabetically
        let allAvailableAffixes = [];
        Object.values(window.PrismRegistry).forEach(list => {
            allAvailableAffixes = allAvailableAffixes.concat(list);
        });
        const distinctAffixes = [...new Set(allAvailableAffixes)].sort();

        distinctAffixes.forEach(affix => {
            const opt = document.createElement('option');
            opt.value = affix;
            opt.innerText = affix;
            select.appendChild(opt);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(select);
        container.appendChild(wrapper);
    }
}

// Stores the selected user affix choice
function handleAffixChange(slotIndex, affixValue) {
    activeSelection[`slot${slotIndex}`] = affixValue || null;
    evaluateRequiredPrisms();
}

// Scans selected slots and outputs exactly what prisms match the pool
function evaluateRequiredPrisms() {
    const resultsPanel = document.getElementById('prism-results-output');
    resultsPanel.innerHTML = '';

    const selectedAffixes = Object.values(activeSelection).filter(val => val !== null);

    if (selectedAffixes.length === 0) {
        resultsPanel.innerHTML = '<p class="empty-notice">Select a piece of gear and assign target affixes to reveal required Tuning Prisms.</p>';
        return;
    }

    let prismMatches = {};

    // Match each active choice against our loaded data modules
    selectedAffixes.forEach(affix => {
        prismMatches[affix] = [];
        Object.keys(window.PrismRegistry).forEach(prismName => {
            if (window.PrismRegistry[prismName].includes(affix)) {
                prismMatches[affix].push(prismName);
            }
        });
    });

    // Build the visual results view for the user
    Object.keys(prismMatches).forEach(affix => {
        const row = document.createElement('div');
        row.className = 'result-row';

        const affixNameSpan = document.createElement('span');
        affixNameSpan.className = 'affix-target';
        affixNameSpan.innerText = `${affix}: `;

        const prismBadgeContainer = document.createElement('span');
        if (prismMatches[affix].length === 0) {
            prismBadgeContainer.innerHTML = '<span class="badge badge-none">No targeted Prism (Requires Chaotic Reroll / Occultist)</span>';
        } else {
            prismBadgeContainer.innerHTML = prismMatches[affix].map(name => {
                const cleanName = name.replace('Prism', '');
                return `<span class="badge badge-${cleanName.toLowerCase()}">${cleanName} Tuning Prism</span>`;
            }).join(' or ');
        }

        row.appendChild(affixNameSpan);
        row.appendChild(prismBadgeContainer);
        resultsPanel.appendChild(row);
    });
}

// Startup initializations once elements finish loading
document.addEventListener('DOMContentLoaded', () => {
    // Select Head by default to initialize app states smoothly
    setTimeout(() => { selectGearPiece('helm'); }, 200);
});
