// ══════════════════════════════════════════════════════════════
//  aspects-mobility.js  —  Mobility Legendary Aspects
//  Source: D4 Wiki (all classes). classes:[] = all classes.
//  power: aspect description shown in tooltip/modal.
// ══════════════════════════════════════════════════════════════
registerAspectCategory("mobility", [
    { name: "Agile Aspect", classes: ["rogue"], power: "Casting an Agility Skill increases your Movement Speed by [20 - 30]%[x] and your Dodge Chance by 10% for 10 seconds." },
    { name: "Aspect of Creeping Cadaver", classes: ["necromancer"], power: "Every 20 meters traveled triggers a random equipped Corpse Skill. Consuming a Corpse increases your Movement Speed by [10 - 15]% for 4 seconds." },
    { name: "Aspect of Explosive Verve", classes: ["rogue"], power: "Whenever you arm a Trap or drop Grenades, you gain [25 - 35]%[+] increased Movement Speed for 6 seconds." },
    { name: "Aspect of Forward Momentum", classes: [], power: "Your Knock Back and Pull effects grant you [25 - 35]%[x] Movement Speed for 4 seconds." },
    { name: "Aspect of Haste", classes: ["spiritborn"], power: "Every second while moving gain [20 - 30]%[+] Bonus Movement Speed for 1.5 seconds, up to [60 - 90]%[+]." },
    { name: "Aspect of Holy Cadence", classes: ["paladin"], power: "When Judgement detonates you gain [25.0 - 35.0]%[x] increased Movement Speed for 8 seconds." },
    { name: "Aspect of Impetus", classes: ["warlock"], power: "You gain [30 - 50]%[+] increased Movement Speed while Close to your Demons." },
    { name: "Aspect of Metamorphosis", classes: [], power: "Evade transforms you into a cloud of bats, dealing 300 Physical damage and inflicting Vampiric Curse to enemies in your path. Evade's Cooldown is increased by [10.0 - 4.0] seconds." },
    { name: "Aspect of Momentum", classes: ["spiritborn"], power: "After you Evade, your next Core Skill dashes to your target and increases your Movement Speed by [25 - 35]%[x] for 5 seconds." },
    { name: "Aspect of Nebulous Brews", classes: [], power: "Healing Potions grant [20 - 30]%[x] Movement Speed for 8 seconds. Every 80 meters you travel refills a Healing Potion." },
    { name: "Aspect of Perpetual Stomping", classes: ["barbarian"], power: "Damaging an enemy with Kick or Ground Stomp resets Leap's Cooldown." },
    { name: "Aspect of Sky Power", classes: ["spiritborn"], power: "Lucky Hit: Up to a 25%[+] chance to create a Mystic Circle for 10 seconds.\n\nCasting a Eagle Skill in Mystic Circles empowers them to move with you and explode for [150 - 225] Lightning damage when you Evade." },
    { name: "Aspect of Slaughter", classes: [], power: "You gain [30.0 - 45.0]%[+] increased Movement Speed. Taking damage from Close enemies Slows you by 30% for 2 seconds." },
    { name: "Aspect of Swift Spirit", classes: ["barbarian", "druid", "necromancer", "paladin", "rogue", "spiritborn"], power: "Losing Resolve grants [3.0 - 5.0]%[x] Movement Speed for 10 seconds, stacking up to 5 times." },
    { name: "Aspect of Tenuous Agility", classes: ["sorcerer"], power: "Gain [20.0 - 80.0]%[+] Movement Speed. This bonus is removed for 10 seconds after you Cast any Defensive Skill." },
    { name: "Aspect of the Arbiter's Zephyr", classes: ["paladin"], power: "Arbiter's evade cooldown is reduced by [1.0 - 3.0] Seconds." },
    { name: "Aspect of the Unholy Confederate", classes: ["barbarian", "druid", "necromancer", "rogue", "sorcerer", "spiritborn", "warlock"], power: "You gain [1.0 - 1.5]%[+] increased Movement Speed per active Summon. Casting a Summon Skill doubles this bonus for 3 seconds." },
    { name: "Charged Aspect", classes: ["sorcerer"], power: "Collecting Crackling Energy increases your Movement Speed by [15 - 30]%[+] for 8 seconds." },
    { name: "Craven Aspect", classes: [], power: "Each Nearby Hindered enemy grants you [1.0 - 1.5]%[+] increased Movement Speed." },
    { name: "Ghostwalker Aspect", classes: [], power: "While Unstoppable and for 4 seconds after, you gain [10.0 - 20.0]%[x] increased Movement Speed and are Unhindered." },
    { name: "Methodical Aspect", classes: ["warlock"], power: "Standing still reduces the Cooldown of Mobility Skills by [10.0 - 14.0]% per second. After 5 seconds, they become free to Cast." },
    { name: "Shadow-Soaked Aspect", classes: ["necromancer"], power: "While standing in Desecrated Ground and for 6 seconds after leaving it you gain [20 - 40]%[+] Movement Speed and are Unhindered." },
    { name: "Sickfoot's Aspect", classes: ["barbarian", "druid", "necromancer", "rogue", "sorcerer", "spiritborn", "warlock"], power: "Gain up to [1.0 - 1.5]%[+] increased Movement and Damage over Time Speed for each Nearby enemy affected by your Damage over Time effects, stacks up to 25 times." },
    { name: "Wind Striker Aspect", classes: [], power: "Critical Strikes grant [30.0 - 50.0]%[+] Movement Speed for 1 second, up to 6 seconds." },
]);