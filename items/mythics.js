// ══════════════════════════════════════════════════════════════
//  mythics.js  —  Mythic Unique items
//  Source: In-game screenshots — confirmed complete list
//  power: the unique mythic effect shown on tooltip hover
// ══════════════════════════════════════════════════════════════
registerMythics({
    helms: [
        {
            name:  "Heir of Perdition",
            slot:  "helm",
            power: "Succumb to hatred and earn Mother's Favor, increasing your damage dealt by 80%. Slaughter enemies to briefly steal Mother's Favor from surrounding allies."
        },
        {
            name:  "Andariel's Visage",
            slot:  "helm",
            power: "Lucky Hit: Up to a 20% chance to trigger a poison nova that deals 40% of the damage dealt over 5 seconds to enemies in the area."
        },
        {
            name:  "Harlequin Crest",
            slot:  "helm",
            power: "Gain 20% Damage Reduction. In addition, gain +4 Ranks to all Skills."
        }
    ],
    chests: [
        {
            name:  "Tyrael's Might",
            slot:  "chest",
            power: "While at full Life, your Skills unleash a divine barrage dealing damage."
        },
        {
            name:  "Shroud of False Death",
            slot:  "chest",
            power: "When you would be dealt fatal damage, instead you Heal to full Life, gain a Barrier for 100% of your Maximum Life for 3 seconds, and Knock Back Close enemies. This can only occur once every 300 seconds."
        }
    ],
    amulets: [
        {
            name:  "Melted Heart of Selig",
            slot:  "amulet",
            power: "Damage is dealt to your Primary Resource before Life and damage taken this way is drastically reduced. Your Primary Resource is doubled but Maximum Life is reduced by 75%."
        }
    ],
    rings: [
        {
            name:  "Ring of Starless Skies",
            slots: ["ring-left", "ring-right"],
            power: "Spending your Primary Resource reduces the Resource cost of your Skills and increases your damage by 10% for 3 seconds, up to 50%."
        }
    ],
    weapons: [
        {
            name:  "El'Druin, Sword of Justice",
            slots: ["weapon-0","weapon-1","weapon-2","weapon-3"],
            power: "Defeating an Elite pack reduces your Skill Cooldowns by 10 seconds for 12 seconds."
        },
        {
            name:  "The Grandfather",
            slots: ["weapon-0","weapon-1","weapon-2","weapon-3"],
            power: "Increases your Critical Strike Damage by 150%."
        },
        {
            name:  "Doombringer",
            slots: ["weapon-0","weapon-1","weapon-2","weapon-3"],
            power: "Lucky Hit: Up to a 40% chance to deal Shadow damage to surrounding enemies and reduce their damage dealt by 25% for 5 seconds."
        },
        {
            name:  "Ahavarion, Spear of Lycander",
            slots: ["weapon-0","weapon-1","weapon-2","weapon-3"],
            power: "Gain a random Shrine effect for 20 seconds after killing an Elite enemy. Can only occur once every 30 seconds."
        }
    ]
});
