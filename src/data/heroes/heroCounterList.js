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
    },
    {
        "id": 55,
        "name_loc": "Dark Seer",
        "bad_against": [
            "Anti-Mage",
            "Bloodseeker",
            "Ember Spirit",
            "Kunkka",
            "Oracle",
            "Sniper"
        ],
        "good_against": [
            "Broodmother",
            "Templar Assassin",
            "Treant Protector",
            "Meepo",
            "Terrorblade",
            "Venomancer"
        ],
        "works_well_with": [
            "Bounty Hunter",
            "Elder Titan",
            "Enigma",
            "Riki",
            "Sven",
            "Venomancer"
        ]
    },
    {
        "id": 119,
        "name_loc": "Dark Willow",
        "bad_against": [
            "Anti-Mage",
            "Axe",
            "Bristleback",
            "Drow Ranger",
            "Ember Spirit",
            "Juggernaut",
            "Lifestealer",
            "Nyx Assassin",
            "Oracle",
            "Puck",
            "Pudge",
            "Riki",
            "Silencer",
            "Storm Spirit"
        ],
        "good_against": [
            "Bloodseeker",
            "Faceless Void",
            "Monkey King",
            "Meepo",
            "Spirit Breaker",
            "Timbersaw",
            "Troll Warlord",
            "Windranger"
        ],
        "works_well_with": [
            "Mars",
            "Rubick",
            "Ember Spirit",
            "Invoker",
            "Juggernaut",
            "Lina",
            "Mirana",
            "Phoenix",
            "Puck",
            "Warlock",
            "Weaver",
            "Axe"
        ]
    },
    {
        "id": 135,
        "name_loc": "Dawnbreaker",
        "bad_against": [
            "Viper",
            "Nyx Assassin",
            "Disruptor"
        ],
        "good_against": [
            "Nature's Prophet"
        ],
        "works_well_with": [
        ]
    },
    {
        "id": 50,
        "name_loc": "Dazzle",
        "bad_against": [
            "Ancient Apparition",
            "Axe",
            "Naga Siren",
            "Outworld Destroyer",
            "Phantom Lancer",
            "Silencer",
            "Doom"
        ],
        "good_against": [
            "Clockwerk",
            "Necrophos",
            "Venomancer"
        ],
        "works_well_with": [
            "Brewmaster",
            "Broodmother",
            "Huskar",
            "Meepo",
            "Naga Siren",
            "Phantom Lancer"
        ]
    },
    {
        "id": 43,
        "name_loc": "Death Prophet",
        "bad_against": [
            "Ancient Apparition",
            "Anti-Mage",
            "Doom",
            "Legion Commander",
            "Omniknight",
            "Shadow Fiend"
        ],
        "good_against": [
            "Zeus",
            "Invoker",
            "Morphling",
            "Timbersaw",
            "Nature's Prophet"
        ],
        "works_well_with": [
            "Enigma",
            "Faceless Void"
        ]
    },
    {
        "id": 87,
        "name_loc": "Disruptor",
        "bad_against": [
            "Abaddon",
            "Kunkka",
            "Juggernaut",
            "Lifestealer",
            "Omniknight",
            "Phantom Lancer",
            "Pugna",
            "Sniper",
            "Viper"
        ],
        "good_against": [
            "Anti-Mage",
            "Io",
            "Queen of Pain",
            "Slark",
            "Storm Spirit",
            "Tidehunter"
        ],
        "works_well_with": [
            "Zeus",
            "Anti-Mage",
            "Keeper of the Light",
            "Warlock",
            "Clinkz"
        ]
    },
    {
        "id": 69,
        "name_loc": "Doom",
        "bad_against": [
            "Alchemist",
            "Centaur Warrunner",
            "Drow Ranger",
            "Lifestealer",
            "Lone Druid",
            "Medusa",
            "Necrophos",
            "Phantom Lancer",
            "Sniper",
            "Viper",
            "Wraith King"
        ],
        "good_against": [
            "Axe",
            "Timbersaw",
            "Anti-Mage",
            "Bristleback",
            "Tidehunter",
            "Ember Spirit",
            "Invoker",
            "Omniknight",
            "Tinker",
            "Elder Titan",
            "Faceless Void",
            "Pudge",
            "Spectre",
            "Arc Warden"
        ],
        "works_well_with": [
            "Ancient Apparition",
            "Crystal Maiden",
            "Grimstroke",
            "Sven",
            "Bane"
        ]
    },
    {
        "id": 49,
        "name_loc": "Dragon Knight",
        "bad_against": [
            "Ancient Apparition",
            "Bristleback",
            "Drow Ranger",
            "Lich",
            "Necrophos",
            "Ursa",
            "Outworld Destroyer",
            "Razor",
            "Timbersaw",
            "Viper"
        ],
        "good_against": [
            "Bloodseeker",
            "Clinkz",
            "Nyx Assassin",
            "Riki",
            "Spirit Breaker",
            "Templar Assassin",
            "Witch Doctor"
        ],
        "works_well_with": [
            "Chen",
            "Crystal Maiden",
            "Enigma",
            "Magnus",
            "Medusa",
            "Treant Protector",
            "Vengeful Spirit"
        ]
    },
    {
        "id": 6,
        "name_loc": "Drow Ranger",
        "bad_against": [
            "Faceless Void",
            "Tinker",
            "Arc Warden",
            "Tusk",
            "Axe",
            "Clockwerk",
            "Chaos Knight",
            "Huskar",
            "Lycan",
            "Nyx Assassin",
            "Omniknight",
            "Phantom Lancer",
            "Pudge",
            "Razor",
            "Riki",
            "Slark",
            "Sniper"
        ],
        "good_against": [
            "Ember Spirit",
            "Dragon Knight",
            "Juggernaut",
            "Anti-Mage",
            "Weaver",
            "Mirana",
            "Monkey King",
            "Rubick"
        ],
        "works_well_with": [
            "Visage",
            "Windranger",
            "Vengeful Spirit",
            "Medusa",
            "Enigma",
            "Clockwerk"
        ]
    },
    {
        "id": 107,
        "name_loc": "Earth Spirit",
        "bad_against": [
            "Abaddon",
            "Lycan",
            "Techies",
            "Slark"
        ],
        "good_against": [
            "Pudge",
            "Tinker",
            "Invoker",
            "Templar Assassin",
            "Enigma"
        ],
        "works_well_with": [
            "Alchemist",
            "Bloodseeker",
            "Dark Seer",
            "Faceless Void",
            "Lifestealer",
            "Techies"
        ]
    },
    {
        "id": 7,
        "name_loc": "Earthshaker",
        "bad_against": [
            "Clockwerk",
            "Death Prophet",
            "Disruptor",
            "Earth Spirit",
            "Jakiro",
            "Lifestealer",
            "Necrophos",
            "Outworld Destroyer",
            "Puck",
            "Razor",
            "Skywrath Mage",
            "Sniper",
            "Spectre",
            "Templar Assassin",
            "Venomancer",
            "Viper",
            "Zeus"
        ],
        "good_against": [
            "Broodmother",
            "Chaos Knight",
            "Enigma",
            "Legion Commander",
            "Meepo",
            "Naga Siren",
            "Nature's Prophet",
            "Phantom Lancer",
            "Spirit Breaker"
        ],
        "works_well_with": [
            "Dark Seer",
            "Enigma",
            "Magnus",
            "Naga Siren",
            "Puck",
            "Sand King"
        ]
    },
    {
        "id": 103,
        "name_loc": "Elder Titan",
        "bad_against": [
            "Brewmaster",
            "Clockwerk",
            "Lich",
            "Lion",
            "Sven",
            "Juggernaut",
            "Enchantress",
            "Earthshaker"
        ],
        "good_against": [
            "Meepo",
            "Morphling",
            "Phantom Lancer",
            "Slark",
            "Terrorblade",
            "Viper"
        ],
        "works_well_with": [
            "Disruptor",
            "Faceless Void",
            "Kunkka",
            "Slardar",
            "Luna"
        ]
    },
    {
        "id": 106,
        "name_loc": "Ember Spirit",
        "bad_against": [
            "Lion",
            "Shadow Fiend",
            "Silencer",
            "Storm Spirit",
            "Faceless Void",
            "Omniknight",
            "Outworld Destroyer",
            "Nyx Assassin",
            "Kunkka"
        ],
        "good_against": [
            "Bloodseeker",
            "Meepo",
            "Chaos Knight",
            "Terrorblade",
            "Crystal Maiden",
            "Nature's Prophet",
            "Phantom Lancer"
        ],
        "works_well_with": [
            "Magnus",
            "Keeper of the Light",
            "Dazzle",
            "Faceless Void"
        ]
    },
    {
        "id": 58,
        "name_loc": "Enchantress",
        "bad_against": [
            "Razor",
            "Broodmother",
            "Chen",
            "Crystal Maiden",
            "Juggernaut",
            "Lina",
            "Luna",
            "Meepo",
            "Nyx Assassin",
            "Riki",
            "Timbersaw",
            "Troll Warlord",
            "Venomancer",
            "Windranger"
        ],
        "good_against": [
            "Ember Spirit",
            "Lycan",
            "Omniknight",
            "Spirit Breaker",
            "Lifestealer",
            "Sven",
            "Beastmaster",
            "Ursa"
        ],
        "works_well_with": [
            "Legion Commander",
            "Lich",
            "Io",
            "Warlock"
        ]
    },
    {
        "id": 33,
        "name_loc": "Enigma",
        "bad_against": [
            "Abaddon",
            "Anti-Mage",
            "Bloodseeker",
            "Bristleback",
            "Clinkz",
            "Clockwerk",
            "Doom",
            "Keeper of the Light",
            "Luna",
            "Medusa",
            "Pudge",
            "Pugna",
            "Riki",
            "Rubick",
            "Silencer",
            "Sniper",
            "Spectre",
            "Storm Spirit",
            "Tusk",
            "Vengeful Spirit",
            "Warlock",
            "Winter Wyvern",
            "Wraith King",
            "Zeus",
            "Tidehunter"
        ],
        "good_against": [
            "Chaos Knight",
            "Crystal Maiden",
            "Huskar",
            "Juggernaut",
            "Lifestealer",
            "Monkey King",
            "Naga Siren",
            "Omniknight"
        ],
        "works_well_with": [
            "Ancient Apparition",
            "Lich",
            "Axe",
            "Crystal Maiden",
            "Dark Seer",
            "Dazzle",
            "Earthshaker",
            "Magnus",
            "Naga Siren",
            "Outworld Destroyer",
            "Phoenix",
            "Sand King",
            "Treant Protector",
            "Warlock",
            "Witch Doctor"
        ]
    },
    {
        "id": 41,
        "name_loc": "Faceless Void",
        "bad_against": [
            "Abaddon",
            "Brewmaster",
            "Earth Spirit",
            "Monkey King",
            "Kunkka",
            "Grimstroke",
            "Night Stalker",
            "Phoenix",
            "Pudge",
            "Shadow Demon",
            "Sven",
            "Vengeful Spirit"
        ],
        "good_against": [
            "Anti-Mage",
            "Lifestealer",
            "Bloodseeker",
            "Bristleback",
            "Invoker",
            "Mars",
            "Morphling",
            "Necrophos",
            "Queen of Pain",
            "Razor",
            "Rubick",
            "Slark",
            "Storm Spirit",
            "Weaver"
        ],
        "works_well_with": [
            "Dark Seer",
            "Disruptor",
            "Enigma",
            "Invoker",
            "Jakiro",
            "Kunkka",
            "Lich",
            "Outworld Destroyer",
            "Phoenix",
            "Sniper",
            "Witch Doctor"
        ]
    },
    {
        "id": 121,
        "name_loc": "Grimstroke",
        "bad_against": [
            "Huskar",
            "Omniknight",
            "Phoenix",
            "Riki",
            "Rubick",
            "Shadow Demon",
            "Silencer",
            "Sniper",
            "Vengeful Spirit"
        ],
        "good_against": [
            "Broodmother",
            "Crystal Maiden",
            "Io",
            "Necrophos",
            "Phantom Lancer",
            "Terrorblade",
            "Timbersaw",
            "Weaver"
        ],
        "works_well_with": [
            "Doom",
            "Bane",
            "Bloodseeker",
            "Bounty Hunter",
            "Crystal Maiden",
            "Lich",
            "Lion",
            "Lina",
            "Necrophos",
            "Phoenix",
            "Pugna",
            "Slark",
            "Witch Doctor"
        ]
    },
    {
        "id": 72,
        "name_loc": "Gyrocopter",
        "bad_against": [
            "Anti-Mage",
            "Arc Warden",
            "Huskar",
            "Faceless Void",
            "Juggernaut",
            "Lina",
            "Lifestealer",
            "Omniknight",
            "Queen of Pain",
            "Timbersaw"
        ],
        "good_against": [
            "Meepo",
            "Undying",
            "Phantom Lancer",
            "Chaos Knight",
            "Terrorblade"
        ],
        "works_well_with": [
            "Bloodseeker",
            "Disruptor",
            "Earthshaker",
            "Enigma",
            "Magnus",
            "Morphling",
            "Rubick",
            "Warlock"
        ]
    },
    {
        "id": 123,
        "name_loc": "Hoodwink",
        "bad_against": [
            "Storm Spirit",
            "Timbersaw",
            "Treant Protector",
            "Vengeful Spirit",
            "Warlock",
            "Slark",
            "Windranger",
            "Zeus",
            "Techies",
            "Clinkz",
            "Nyx Assassin"
        ],
        "good_against": [
            "Abaddon",
            "Bristleback",
            "Huskar",
            "Lion",
            "Monkey King",
            "Phantom Assassin",
            "Phantom Lancer",
            "Morphling"
        ],
        "works_well_with": [
            "Elder Titan",
            "Monkey King",
            "Nature's Prophet",
            "Windranger",
            "Invoker",
            "Disruptor",
            "Pugna",
            "Sand King"
        ]
    },
    {
        "id": 59,
        "name_loc": "Huskar",
        "bad_against": [
            "Abaddon",
            "Alchemist",
            "Ancient Apparition",
            "Axe",
            "Bristleback",
            "Enchantress",
            "Bloodseeker",
            "Juggernaut",
            "Lifestealer",
            "Naga Siren",
            "Slardar",
            "Ursa",
            "Viper",
            "Windranger",
            "Necrophos"
        ],
        "good_against": [
            "Weaver",
            "Clockwerk",
            "Dragon Knight",
            "Earthshaker",
            "Ember Spirit",
            "Nature's Prophet",
            "Phoenix"
        ],
        "works_well_with": [
            "Ancient Apparition",
            "Beastmaster",
            "Dazzle",
            "Omniknight",
            "Oracle",
            "Necrophos",
            "Pugna",
            "Terrorblade",
            "Witch Doctor"
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