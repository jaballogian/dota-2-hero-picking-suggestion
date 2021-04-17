// THIS DATA IS MANUALLY ADDED FROM https://dota2.fandom.com/wiki/<hero_name>/Counters
// UPDATED ON APRIL 17, 2021

const heroCounterList = [
    {
        "id": 102,
        "name_loc": "Abaddon",
        "bad_against": [
            "Ancient Apparition",
            "Axe",
            "Brewmaster",
            "Doom",
            "Lina",
            "Outworld Destroyer",
            "Shadow Demon"
        ],
        "good_against": [
            "Death Prophet",
            "Mirana",
            "Bane",
            "Batrider",
            "Beastmaster",
            "Chen",
            "Techies",
            "Bloodseeker",
            "Necrophos",
            "Nyx Assassin",
        ],
        "works_well_with": [
            "Storm Spirit",
            "Phantom Assassin",
            "Io",
            "Axe",
            "Legion Commander",
            "Centaur Warrunner",
            "Oracle"
        ]
    },
    {
        "id": 73,
        "name_loc": "Alchemist",
        "bad_against": [
            "Ancient Apparition",
            "Enchantress",
            "Invoker",
            "Kunkka",
            "Lifestealer",
            "Necrophos",
            "Slardar",
            "Slark",
            "Ursa",
            "Ember Spirit",
            "Razor"
        ],
        "good_against": [
            "Broodmother",
            "Nature's Prophet",
            "Phoenix",
            "Undying",
            "Huskar",
        ],
        "works_well_with": [
            "Oracle"
        ]
    },
    {
        "id": 68,
        "name_loc": "Ancient Apparition",
        "bad_against": [
            "Anti-Mage",
            "Brewmaster",
            "Lycan",
            "Mirana",
            "Oracle",
            "Phantom Lancer",
            "Phoenix",
            "Terrorblade",
            "Viper",
            "Void Spirit",
            "Weaver"
        ],
        "good_against": [
            "Abaddon",
            "Alchemist",
            "Chen",
            "Crystal Maiden",
            "Dazzle",
            "Death Prophet",
            "Huskar",
            "Io",
            "Morphling",
            "Snapfire",
            "Winter Wyvern"
        ],
        "works_well_with": [
            "Bloodseeker",
            "Faceless Void",
            "Meepo",
            "Necrophos",
            "Oracle",
            "Shadow Demon",
            "Slark",
            "Venomancer",
            "Winter Wyvern"
        ]
    },
    {
        "id": 1,
        "name_loc": "Anti-Mage",
        "bad_against": [
            "Axe",
            "Bane",
            "Terrorblade",
            "Disruptor",
            "Doom",
            "Grimstroke",
            "Legion Commander",
            "Meepo",
            "Night Stalker",
            "Outworld Destroyer",
            "Puck",
            "Phantom Lancer",
            "Phantom Assassin",
            "Slardar",
            "Slark",
            "Shadow Demon",
            "Templar Assassin",
            "Troll Warlord",
            "Viper",
        ],
        "good_against": [
            "Ancient Apparition",
            "Abaddon",
            "Arc Warden",
            "Bristleback",
            "Clockwerk",
            "Elder Titan",
            "Medusa",
            "Ogre Magi",
            "Phoenix",
            "Pugna",
            "Rubick",
            "Spectre",
            "Storm Spirit",
            "Tidehunter",
            "Undying",
            "Venomancer",
            "Wraith King",
            "Zeus",
        ],
        "works_well_with": [
            "Bane",
            "Bounty Hunter",
            "Dazzle",
            "Dark Seer",
            "Lion",
            "Magnus",
            "Oracle",
            "Shadow Demon",
            "Slardar",
            "Treant Protector"
        ]
    },
    {
        "id": 113,
        "name_loc": "Arc Warden",
        "bad_against": [
            "Broodmother",
            "Anti-Mage",
            "Axe",
            "Bristleback",
            "Chaos Knight",
            "Meepo",
            "Naga Siren",
            "Riki",
            "Phantom Lancer",
        ],
        "good_against": [
            "Legion Commander",
            "Mirana",
            "Terrorblade",
            "Phoenix",
            "Sniper",
            "Templar Assassin",
            "Drow Ranger",
            "Enchantress"
        ],
        "works_well_with": [
            "Ancient Apparition"
        ]
    },
    {
        "id": 2,
        "name_loc": "Axe",
        "bad_against": [
            "Doom",
            "Jakiro",
            "Lifestealer",
            "Necrophos",
            "Outworld Destroyer",
            "Phoenix",
            "Pugna",
            "Shadow Demon",
            "Spectre",
            "Timbersaw",
            "Ursa",
            "Undying",
            "Venomancer",
            "Viper"
        ],
        "good_against": [
            "Abaddon",
            "Anti-Mage",
            "Broodmother",
            "Chaos Knight",
            "Dazzle",
            "Huskar",
            "Morphling",
            "Nature's Prophet",
            "Phantom Assassin",
            "Phantom Lancer",
            "Slark",
            "Terrorblade",
            "Troll Warlord",
            "Weaver"
        ],
        "works_well_with": [
            "Ancient Apparition",
            "Dark Seer",
            "Dazzle",
            "Enigma",
            "Disruptor",
            "Magnus",
            "Phoenix",
            "Sand King",
            "Skywrath Mage",
            "Tiny",
            "Venomancer",
            "Witch Doctor"
        ]
    },
    {
        "id": 3,
        "name_loc": "Bane",
        "bad_against": [
            "Abaddon",
            "Pudge",
            "Luna",
            "Rubick",
            "Slark",
        ],
        "good_against": [
            "Faceless Void",
            "Legion Commander",
            "Medusa",
            "Phantom Assassin",
        ],
        "works_well_with": [
            "Grimstroke",
            "Kunkka",
            "Mirana",
            "Omniknight",
            "Pudge",
            "Skywrath Mage"
        ]
    },
    {
        "id": 65,
        "name_loc": "Batrider",
        "bad_against": [
            "Abaddon",
            "Kunkka",
            "Legion Commander",
            "Nyx Assassin",
            "Oracle",
            "Tidehunter",
            "Ursa",
            "Vengeful Spirit",
            "Venomancer",
            "Weaver",
            "Slark"
        ],
        "good_against": [
            "Chen",
            "Meepo",
            "Monkey King",
            "Naga Siren",
            "Techies",
            "Templar Assassin",
            "Treant Protector"
        ],
        "works_well_with": [
            "Ursa",
            "Pugna",
            "Skywrath Mage",
            "Pudge"
        ]
    },
    {
        "id": 38,
        "name_loc": "Beastmaster",
        "bad_against": [
            "Abaddon",
            "Crystal Maiden",
            "Enchantress",
            "Earthshaker",
            "Keeper of the Light",
            "Oracle",
            "Timbersaw",
            "Winter Wyvern"
        ],
        "good_against": [
            "Monkey King",
            "Phoenix",
            "Sven",
            "Templar Assassin",
            "Tinker",
            "Tiny",
            "Troll Warlord",
            "Ursa",
            "Wraith King"
        ],
        "works_well_with": [
            "Lifestealer",
            "Nature's Prophet",
            "Phantom Assassin",
            "Spirit Breaker",
            "Sven",
            "Tinker",
            "Tiny",
            "Underlord",
            "Ursa"
        ]
    },
    {
        "id": 4,
        "name_loc": "Bloodseeker",
        "bad_against": [
            "Abaddon",
            "Dazzle",
            "Ember Spirit",
            "Faceless Void",
            "Medusa",
            "Morphling",
            "Omniknight",
            "Storm Spirit",
            "Techies",
            "Tinker",
            "Troll Warlord",
            "Underlord",
            "Wraith King"
        ],
        "good_against": [
            "Anti-Mage",
            "Clinkz",
            "Huskar",
            "Lycan",
            "Meepo",
            "Mirana",
            "Pangolier",
            "Phoenix",
            "Queen of Pain",
            "Riki",
            "Slark",
            "Sniper",
            "Timbersaw",
            "Vengeful Spirit",
            "Weaver",
            "Windranger",
        ],
        "works_well_with": [
            "Ancient Apparition",
            "Batrider",
            "Bounty Hunter",
            "Earthshaker",
            "Earth Spirit",
            "Invoker",
            "Jakiro",
            "Magnus",
            "Nature's Prophet",
            "Phoenix",
            "Queen of Pain",
            "Venomancer",
            "Warlock",
            "Zeus"
        ]
    },
    {
        "id": 62,
        "name_loc": "Bounty Hunter",
        "bad_against": [
            "Bloodseeker",
            "Death Prophet",
            "Luna",
            "Rubick",
            "Slardar",
            "Spectre",
            "Spirit Breaker",
            "Venomancer",
            "Viper",
            "Zeus"
        ],
        "good_against": [
            "Sniper",
            "Nyx Assassin",
            "Shadow Fiend",
            "Pudge"
        ],
        "works_well_with": [
            "Invoker",
            "Nature's Prophet",
            "Tinker",
            "Spectre",
            "Zeus"
        ]
    },
    {
        "id": 78,
        "name_loc": "Brewmaster",
        "bad_against": [
            "Bane",
            "Death Prophet",
            "Lion",
            "Outworld Destroyer",
            "Shadow Shaman",
            "Skywrath Mage"
        ],
        "good_against": [
            "Abaddon",
            "Chaos Knight",
            "Huskar",
            "Lone Druid",
            "Lycan",
            "Templar Assassin",
            "Ursa"
        ],
        "works_well_with": [
            "Dazzle",
            "Oracle",
            "Tiny",
            "Invoker"
        ]
    },
    {
        "id": 99,
        "name_loc": "Bristleback",
        "bad_against": [
            "Anti-Mage",
            "Doom",
            "Faceless Void",
            "Grimstroke",
            "Hoodwink",
            "Legion Commander",
            "Lich",
            "Lion",
            "Necrophos",
            "Outworld Destroyer",
            "Razor",
            "Silencer",
            "Slardar",
            "Timbersaw",
            "Viper",
            "Weaver"
        ],
        "good_against": [
            "Arc Warden",
            "Broodmother",
            "Chaos Knight",
            "Huskar",
            "Jakiro",
            "Luna",
            "Lycan",
            "Meepo",
            "Phantom Lancer",
            "Pudge",
            "Riki",
            "Rubick",
            "Sand King",
        ],
        "works_well_with": [
            "Crystal Maiden",
            "Dazzle",
            "Drow Ranger",
            "Keeper of the Light",
            "Skywrath Mage",
            "Venomancer"
        ]
    },
    {
        "id": 61,
        "name_loc": "Broodmother",
        "bad_against": [
            "Alchemist",
            "Axe",
            "Ancient Apparition",
            "Bristleback",
            "Dark Seer",
            "Dragon Knight",
            "Earthshaker",
            "Elder Titan",
            "Ember Spirit",
            "Kunkka",
            "Legion Commander",
            "Lina",
            "Meepo",
            "Necrophos",
            "Pangolier",
            "Sand King",
            "Shadow Fiend",
            "Storm Spirit",
            "Sven",
            "Tidehunter",
            "Timbersaw",
            "Void Spirit"
        ],
        "good_against": [
            "Chen",
            "Drow Ranger",
            "Enchantress",
            "Medusa",
            "Nature's Prophet",
            "Phantom Assassin",
            "Sniper",
            "Treant Protector"
        ],
        "works_well_with": [
            "Beastmaster",
            "Dazzle",
            "Lifestealer"
        ]
    },
    {
        "id": 96,
        "name_loc": "Centaur Warrunner",
        "bad_against": [
            "Clockwerk",
            "Disruptor",
            "Kunkka",
            "Lifestealer",
            "Necrophos",
            "Nyx Assassin",
            "Templar Assassin"
        ],
        "good_against": [
            "Arc Warden",
            "Doom",
            "Nyx Assassin",
            "Phantom Assassin",
            "Phantom Lancer",
            "Sniper",
            "Windranger"
        ],
        "works_well_with": [
            "Abaddon",
            "Dark Seer",
            "Mirana",
            "Sven",
            "Tusk",
            "Tiny",
            "Vengeful Spirit",
            "Grimstroke"
        ]
    },
    {
        "id": 81,
        "name_loc": "Chaos Knight",
        "bad_against": [
            "Anti-Mage",
            "Abaddon",
            "Tinker",
            "Axe",
            "Lion",
            "Brewmaster",
            "Dragon Knight",
            "Earthshaker",
            "Enigma",
            "Jakiro",
            "Lich",
            "Magnus",
            "Monkey King",
            "Phantom Lancer",
            "Omniknight",
            "Pugna",
            "Sand King",
            "Sven",
            "Tidehunter",
            "Timbersaw",
            "Winter Wyvern",
            "Witch Doctor",
            "Puck"
        ],
        "good_against": [
            "Bane",
            "Bounty Hunter",
            "Disruptor",
            "Lone Druid",
            "Pudge",
            "Rubick",
            "Silencer",
            "Slark",
            "Techies",
            "Ursa",
            "Viper"
        ],
        "works_well_with": [
            "Crystal Maiden",
            "Keeper of the Light",
            "Morphling",
            "Shadow Demon"
        ]
    },
    {
        "id": 66,
        "name_loc": "Chen",
        "bad_against": [
            "Crystal Maiden",
            "Enchantress",
            "Earthshaker",
            "Legion Commander",
            "Sven",
            "Lina",
            "Luna",
            "Monkey King",
            "Venomancer",
            "Jakiro",
            "Sand King",
            "Timbersaw",
            "Necrophos",
            "Death Prophet",
            "Dark Seer",
            "Broodmother",
            "Alchemist",
            "Razor",
            "Phoenix",
            "Elder Titan",
            "Batrider",
            "Ancient Apparition",
            "Underlord"
        ],
        "good_against": [
            "Techies",
            "Arc Warden",
            "Beastmaster",
            "Clockwerk",
            "Pudge",
            "Bane",
            "Shadow Shaman"
        ],
        "works_well_with": [
            "Vengeful Spirit",
            "Lycan"
        ]
    },
    {
        "id": 56,
        "name_loc": "Clinkz",
        "bad_against": [
            "Bloodseeker",
            "Bounty Hunter",
            "Doom",
            "Enchantress",
            "Lion",
            "Morphling",
            "Slardar",
            "Spectre",
            "Spirit Breaker",
            "Treant Protector",
            "Winter Wyvern",
            "Zeus"
        ],
        "good_against": [
            "Anti-Mage",
            "Ember Spirit",
            "Huskar",
            "Nature's Prophet",
            "Viper"
        ],
        "works_well_with": [
            "Drow Ranger",
            "Omniknight",
            "Vengeful Spirit"
        ]
    },
    {
        "id": 51,
        "name_loc": "Clockwerk",
        "bad_against": [
            "Anti-Mage",
            "Chen",
            "Clinkz",
            "Dazzle",
            "Disruptor",
            "Ember Spirit",
            "Huskar",
            "Juggernaut",
            "Lifestealer",
            "Morphling",
            "Omniknight",
            "Phantom Lancer",
            "Phoenix",
            "Queen of Pain",
            "Terrorblade",
            "Ursa",
            "Visage"
        ],
        "good_against": [
            "Earthshaker",
            "Enigma",
            "Drow Ranger",
            "Legion Commander",
            "Monkey King",
            "Pudge",
            "Pugna",
            "Sniper",
            "Spirit Breaker",
            "Tinker",
            "Windranger"
        ],
        "works_well_with": [
            "Dark Seer",
            "Invoker",
            "Lifestealer",
            "Mirana",
            "Shadow Demon"
        ]
    },
    {
        "id": 5,
        "name_loc": "Crystal Maiden",
        "bad_against": [
            "Bounty Hunter",
            "Bristleback",
            "Clockwerk",
            "Doom",
            "Earth Spirit",
            "Jakiro",
            "Legion Commander",
            "Luna",
            "Naga Siren",
            "Nyx Assassin",
            "Tidehunter",
            "Tusk",
            "Visage"
        ],
        "good_against": [
            "Slark",
            "Phantom Assassin",
            "Templar Assassin"
        ],
        "works_well_with": [
            "Juggernaut",
            "Timbersaw",
            "Sven"
        ]
    }
]

export default heroCounterList

// TEMPLATE
// {
//     "id": ,
//     "name_loc": "",
//     "bad_against": [
        
//     ],
//     "good_against": [
        
//     ],
//     "works_well_with": [
        
//     ]
// }