// ══════════════════════════════════════════════════════════════
//  adept.js  —  Core Stats Tuning Prism affix pool
//  UI Label: "Core Stats"
//  Primary stat is class-dependent — app.js filters dynamically.
//  Skill rank options: Basic and Core are universal per class,
//  individual skill ranks are class-specific.
// ══════════════════════════════════════════════════════════════
registerPrismBucket("adeptPrism", {

    // ── Primary Stats (class-mapped in app.js) ────────────
    stats: ["Strength", "Dexterity", "Intelligence", "Willpower"],

    // ── Universal skill rank affixes (all classes) ────────
    universal: [
        "Ranks to Basic Skills",
        "Ranks to Core Skills"
    ],

    // ── Class-specific skill rank affixes ─────────────────
    classskills: {
        barbarian: [
            // Basic
            "Ranks to Bash",
            "Ranks to Flay",
            "Ranks to Frenzy",
            "Ranks to Lunging Strike",
            // Core
            "Ranks to Double Swing",
            "Ranks to Hammer of the Ancients",
            "Ranks to Rend",
            "Ranks to Upheaval",
            "Ranks to Whirlwind"
        ],
        druid: [
            // Basic
            "Ranks to Claw",
            "Ranks to Earth Spike",
            "Ranks to Storm Strike",
            "Ranks to Wind Shear",
            "Ranks to Maul",
            // Core
            "Ranks to Boulder",
            "Ranks to Landslide",
            "Ranks to Pulverize",
            "Ranks to Shred",
            "Ranks to Tornado"
        ],
        necromancer: [
            // Basic
            "Ranks to Bone Splinters",
            "Ranks to Decompose",
            "Ranks to Hemorrhage",
            "Ranks to Reap",
            // Core
            "Ranks to Blood Lance",
            "Ranks to Blood Surge",
            "Ranks to Bone Spear",
            "Ranks to Sever",
            "Ranks to Blight"
        ],
        rogue: [
            // Basic
            "Ranks to Blade Shift",
            "Ranks to Forceful Arrow",
            "Ranks to Heartseeker",
            "Ranks to Invigorating Strike",
            "Ranks to Puncture",
            // Core
            "Ranks to Barrage",
            "Ranks to Flurry",
            "Ranks to Penetrating Shot",
            "Ranks to Rapid Fire",
            "Ranks to Twisting Blades"
        ],
        sorcerer: [
            // Basic
            "Ranks to Arc Lash",
            "Ranks to Fire Bolt",
            "Ranks to Frost Bolt",
            "Ranks to Spark",
            // Core
            "Ranks to Ball Lightning",
            "Ranks to Chain Lightning",
            "Ranks to Charged Bolts",
            "Ranks to Fireball",
            "Ranks to Frozen Orb",
            "Ranks to Ice Shards",
            "Ranks to Incinerate",
            "Ranks to Tornado"
        ],
        spiritborn: [
            // Basic
            "Ranks to Devastate",
            "Ranks to Quill Volley",
            "Ranks to Rake",
            "Ranks to Stinger",
            // Core
            "Ranks to Crushing Hand",
            "Ranks to Mighty Throw",
            "Ranks to Scalding Viper",
            "Ranks to Soar",
            "Ranks to Thunderspike"
        ],
        paladin: [
            // Basic
            "Ranks to Holy Bolt",
            "Ranks to Smite",
            "Ranks to Strike",
            "Ranks to Throw",
            // Core
            "Ranks to Blessed Hammer",
            "Ranks to Fist of the Heavens",
            "Ranks to Holy Fire",
            "Ranks to Judgment",
            "Ranks to Shield Bash"
        ],
        warlock: [
            // Basic
            "Ranks to Consume",
            "Ranks to Darkgrasp",
            "Ranks to Soul Rend",
            "Ranks to Torment",
            // Core
            "Ranks to Chaos Bolt",
            "Ranks to Drain Life",
            "Ranks to Hex",
            "Ranks to Rain of Fire",
            "Ranks to Soul Shatter"
        ]
    }
});
