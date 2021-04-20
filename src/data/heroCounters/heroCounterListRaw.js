// THIS FILE IS CREATED FROM TRANSFORMING DATABASE.CVS FROM HERO COUNTERS FOLDER INTO A JSON ARRAY USING https://www.convertcsv.com/csv-to-json.htm

const heroCounterListRaw = [
    {
      "Hero": "Abaddon",
      "Bad against": "Ancient Apparition, Axe, Brewmaster, Doom, Lina, Outworld Destroyer, Shadow Demon",
      "Good against": "Death Prophet, Mirana, Bane, Batrider, Beastmaster, Chen, Techies, Bloodseeker, Necrophos, Nyx Assassin",
      "Works well with": "Storm Spirit, Phantom Assassin, Io, Axe, Legion Commander, Centaur Warrunner, Oracle"
    },
    {
      "Hero": "Alchemist",
      "Bad against": "Ancient Apparition, Enchantress, Invoker, Kunkka, Lifestealer, Necrophos, Slardar, Slark, Ursa, Ember Spirit, Razor",
      "Good against": "Broodmother, Nature's Prophet, Phoenix, Undying, Huskar",
      "Works well with": "Oracle"
    },
    {
      "Hero": "Ancient Apparition",
      "Bad against": "",
      "Good against": "",
      "Works well with": ""
    },
    {
      "Hero": "Anti-Mage",
      "Bad against": "Axe, Bane, Terrorblade, Disruptor, Doom, Grimstroke, Legion Commander, Meepo, Night Stalker, Outworld Destroyer, Puck, Phantom Lancer, Phantom Assassin, Slardar, Slark, Shadow Demon, Templar Assassin, Troll Warlord, Viper",
      "Good against": "Ancient Apparition, Abaddon, Arc Warden, Bristleback, Clockwerk, Elder Titan, Medusa, Ogre Magi, Phoenix, Pugna, Rubick, Spectre, Storm Spirit, Tidehunter, Undying, Venomancer, Wraith King, Zeus",
      "Works well with": "Bane, Bounty Hunter, Dazzle, Dark Seer, Lion, Magnus, Oracle, Shadow Demon, Slardar, Treant Protector"
    },
    {
      "Hero": "Arc Warden",
      "Bad against": "Broodmother, Anti-Mage, Axe, Bristleback, Chaos Knight, Meepo, Naga Siren, Riki, Phantom Lancer",
      "Good against": "Legion Commander, Mirana, Terrorblade, Phoenix, Sniper, Templar Assassin, Drow Ranger, Enchantress",
      "Works well with": "Ancient Apparition"
    },
    {
      "Hero": "Axe",
      "Bad against": "Doom, Jakiro, Lifestealer, Necrophos, Outworld Destroyer, Phoenix, Pugna, Shadow Demon, Spectre, Timbersaw, Ursa, Undying, Venomancer, Viper",
      "Good against": "Abaddon, Anti-Mage, Broodmother, Chaos Knight, Dazzle, Huskar, Morphling, Nature's Prophet, Phantom Assassin, Phantom Lancer, Slark, Terrorblade, Troll Warlord, Weaver",
      "Works well with": "Ancient Apparition, Dark Seer, Dazzle, Enigma, Disruptor, Magnus, Phoenix, Sand King, Skywrath Mage, Tiny, Venomancer, Witch Doctor"
    },
    {
      "Hero": "Bane",
      "Bad against": "Abaddon, Pudge, Luna, Rubick, Slark",
      "Good against": "Faceless Void, Legion Commander, Medusa, Phantom Assassin",
      "Works well with": "Grimstroke, Kunkka, Mirana, Omniknight, Pudge, Skywrath Mage"
    },
    {
      "Hero": "Batrider",
      "Bad against": "Abaddon, Kunkka, Legion Commander, Nyx Assassin, Oracle, Tidehunter, Ursa, Vengeful Spirit, Venomancer, Weaver, Slark",
      "Good against": "Chen, Meepo, Monkey King, Naga Siren, Techies, Templar Assassin, Treant Protector",
      "Works well with": "Ursa, Pugna, Skywrath Mage, Pudge"
    },
    {
      "Hero": "Beastmaster",
      "Bad against": "Abaddon, Crystal Maiden, Enchantress, Earthshaker, Keeper of the Light, Oracle, Timbersaw, Winter Wyvern",
      "Good against": "Monkey King, Phoenix, Sven, Templar Assassin, Tinker, Tiny, Troll Warlord, Ursa, Wraith King",
      "Works well with": "Lifestealer, Nature's Prophet, Phantom Assassin, Spirit Breaker, Sven, Tinker, Tiny, Underlord, Ursa"
    },
    {
      "Hero": "Bloodseeker",
      "Bad against": "Abaddon, Dazzle, Ember Spirit, Faceless Void, Medusa, Morphling, Omniknight, Storm Spirit, Techies, Tinker, Troll Warlord, Underlord, Wraith King",
      "Good against": "Anti-Mage, Clinkz, Huskar, Lycan, Meepo, Mirana, Pangolier, Phoenix, Queen of Pain, Riki, Slark, Sniper, Timbersaw, Vengeful Spirit, Weaver, Windranger",
      "Works well with": "Ancient Apparition, Batrider, Bounty Hunter, Earthshaker, Earth Spirit, Invoker, Jakiro, Magnus, Nature's Prophet, Phoenix, Queen of Pain, Venomancer, Warlock, Zeus"
    },
    {
      "Hero": "Bounty Hunter",
      "Bad against": "Bloodseeker, Death Prophet, Luna, Rubick, Slardar, Spectre, Spirit Breaker, Venomancer, Viper, Zeus",
      "Good against": "Sniper, Nyx Assassin, Shadow Fiend, Pudge",
      "Works well with": "Invoker, Nature's Prophet, Tinker, Spectre, Zeus"
    },
    {
      "Hero": "Brewmaster",
      "Bad against": "Bane, Death Prophet, Lion, Outworld Destroyer, Shadow Shaman, Skywrath Mage",
      "Good against": "Abaddon, Chaos Knight, Huskar, Lone Druid, Lycan, Templar Assassin, Ursa",
      "Works well with": "Dazzle, Oracle, Tiny, Invoker"
    },
    {
      "Hero": "Bristleback",
      "Bad against": "Anti-Mage, Doom, Faceless Void, Grimstroke, Hoodwink, Legion Commander, Lich, Lion, Necrophos, Outworld Destroyer, Razor, Silencer, Slardar, Timbersaw, Viper, Weaver",
      "Good against": "Arc Warden, Broodmother, Chaos Knight, Huskar, Jakiro, Luna, Lycan, Meepo, Phantom Lancer, Pudge, Riki, Rubick, Sand King",
      "Works well with": "Crystal Maiden, Dazzle, Drow Ranger, Keeper of the Light, Skywrath Mage, Venomancer"
    },
    {
      "Hero": "Broodmother",
      "Bad against": "Bristleback, Dark Seer, Dragon Knight, Legion Commander, Lina, Meepo, Necrophos, Pangolier, Sand King, Sven, Tidehunter, Timbersaw, Void Spirit",
      "Good against": "Chen, Drow Ranger, Enchantress, Medusa, Nature's Prophet, Phantom Assassin, Sniper, Treant Protector",
      "Works well with": "Beastmaster, Dazzle, Lifestealer"
    },
    {
      "Hero": "Centaur Warrunner",
      "Bad against": "Clockwerk, Disruptor, Kunkka, Lifestealer, Necrophos, Nyx Assassin, Templar Assassin",
      "Good against": "Arc Warden, Doom, Nyx Assassin, Phantom Assassin, Phantom Lancer, Sniper, Windranger",
      "Works well with": "Abaddon, Dark Seer, Mirana, Sven, Tusk, Tiny, Vengeful Spirit, Grimstroke"
    },
    {
      "Hero": "Chaos Knight",
      "Bad against": "Anti-Mage, Abaddon, Tinker, Axe, Lion, Brewmaster, Dragon Knight, Earthshaker, Enigma, Jakiro, Lich, Magnus, Monkey King, Phantom Lancer, Omniknight, Pugna, Sand King, Sven, Tidehunter, Timbersaw, Winter Wyvern, Witch Doctor, Puck",
      "Good against": "Bane, Bounty Hunter, Disruptor, Lone Druid, Pudge, Rubick, Silencer, Slark, Techies, Ursa, Viper",
      "Works well with": "Crystal Maiden, Keeper of the Light, Morphling, Shadow Demon"
    },
    {
      "Hero": "Chen",
      "Bad against": "Crystal Maiden, Enchantress, Earthshaker, Legion Commander, Sven, Lina, Luna, Monkey King, Venomancer, Jakiro, Sand King, Timbersaw, Necrophos, Death Prophet, Dark Seer, Broodmother, Alchemist, Razor, Phoenix, Elder Titan, Batrider, Ancient Apparition, Underlord",
      "Good against": "Techies, Arc Warden, Beastmaster, Clockwerk, Pudge, Bane, Shadow Shaman",
      "Works well with": "Vengeful Spirit, Lycan"
    },
    {
      "Hero": "Clinkz",
      "Bad against": "Bloodseeker, Bounty Hunter, Doom, Enchantress, Lion, Morphling, Slardar, Spectre, Spirit Breaker, Treant Protector, Winter Wyvern, Zeus",
      "Good against": "Anti-Mage, Ember Spirit, Huskar, Nature's Prophet, Viper",
      "Works well with": "Drow Ranger, Omniknight, Vengeful Spirit"
    },
    {
      "Hero": "Clockwerk",
      "Bad against": "Anti-Mage, Chen, Clinkz, Dazzle, Disruptor, Ember Spirit, Huskar, Juggernaut, Lifestealer, Morphling, Omniknight, Phantom Lancer, Phoenix, Queen of Pain, Terrorblade, Ursa, Visage",
      "Good against": "Earthshaker, Enigma, Drow Ranger, Legion Commander, Monkey King, Pudge, Pugna, Sniper, Spirit Breaker, Tinker, Windranger",
      "Works well with": "Dark Seer, Invoker, Lifestealer, Mirana, Shadow Demon"
    },
    {
      "Hero": "Crystal Maiden",
      "Bad against": "Bounty Hunter, Bristleback, Clockwerk, Doom, Earth Spirit, Jakiro, Legion Commander, Luna, Naga Siren, Nyx Assassin, Tidehunter, Tusk, Visage",
      "Good against": "Slark, Phantom Assassin, Templar Assassin",
      "Works well with": "Juggernaut, Timbersaw, Sven"
    },
    {
      "Hero": "Dark Seer",
      "Bad against": "Anti-Mage, Bloodseeker, Ember Spirit, Kunkka, Oracle, Sniper",
      "Good against": "Broodmother, Templar Assassin, Treant Protector, Meepo, Terrorblade, Venomancer",
      "Works well with": "Bounty Hunter, Elder Titan, Enigma, Riki, Sven, Venomancer"
    },
    {
      "Hero": "Dark Willow",
      "Bad against": "Anti-Mage, Axe, Bristleback, Drow Ranger, Ember Spirit, Juggernaut, Lifestealer, Nyx Assassin, Oracle, Puck, Pudge, Riki, Silencer, Storm Spirit",
      "Good against": "Bloodseeker, Faceless Void, Monkey King, Meepo, Spirit Breaker, Timbersaw, Troll Warlord, Windranger",
      "Works well with": "Mars, Rubick, Ember Spirit, Invoker, Juggernaut, Lina, Mirana, Phoenix, Puck, Warlock, Weaver, Axe"
    },
    {
      "Hero": "Dawnbreaker",
      "Bad against": "Viper, Nyx Assassin, Disruptor",
      "Good against": "Nature's Prophet",
      "Works well with": ""
    },
    {
      "Hero": "Dazzle",
      "Bad against": "Ancient Apparition, Axe, Naga Siren, Outworld Destroyer, Phantom Lancer, Silencer, Doom",
      "Good against": "Clockwerk, Necrophos, Venomancer",
      "Works well with": "Brewmaster, Broodmother, Huskar, Meepo, Naga Siren, Phantom Lancer"
    },
    {
      "Hero": "Death Prophet",
      "Bad against": "Ancient Apparition, Anti-Mage, Doom, Legion Commander, Omniknight, Shadow Fiend",
      "Good against": "Zeus, Invoker, Morphling, Timbersaw, Nature's Prophet",
      "Works well with": "Enigma, Faceless Void"
    },
    {
      "Hero": "Disruptor",
      "Bad against": "Abaddon, Kunkka, Juggernaut, Lifestealer, Omniknight, Phantom Lancer, Pugna, Sniper, Viper",
      "Good against": "Anti-Mage, Io, Queen of Pain, Slark, Storm Spirit, Tidehunter",
      "Works well with": "Zeus, Anti-Mage, Keeper of the Light, Warlock, Clinkz"
    },
    {
      "Hero": "Doom",
      "Bad against": "Alchemist, Centaur Warrunner, Drow Ranger, Lifestealer, Lone Druid, Medusa, Necrophos, Phantom Lancer, Sniper, Viper, Wraith King",
      "Good against": "Axe, Timbersaw, Anti-Mage, Bristleback, Tidehunter, Ember Spirit, Invoker, Omniknight, Tinker, Elder Titan, Faceless Void, Pudge, Spectre, Arc Warden",
      "Works well with": "Ancient Apparition, Crystal Maiden, Grimstroke, Sven, Bane"
    },
    {
      "Hero": "Dragon Knight",
      "Bad against": "Ancient Apparition, Bristleback, Drow Ranger, Lich, Necrophos, Ursa, Outworld Destroyer, Razor, Timbersaw, Viper",
      "Good against": "Bloodseeker, Clinkz, Nyx Assassin, Riki, Spirit Breaker, Templar Assassin, Witch Doctor",
      "Works well with": "Chen, Crystal Maiden, Enigma, Magnus, Medusa, Treant Protector, Vengeful Spirit"
    },
    {
      "Hero": "Drow Ranger",
      "Bad against": "Faceless Void, Tinker, Arc Warden, Tusk, Axe, Clockwerk, Chaos Knight, Huskar, Lycan, Nyx Assassin, Omniknight, Phantom Lancer, Pudge, Razor, Riki, Slark, Sniper",
      "Good against": "Ember Spirit, Dragon Knight, Juggernaut, Anti-Mage, Weaver, Mirana, Monkey King, Rubick",
      "Works well with": "Visage, Windranger, Vengeful Spirit, Medusa, Enigma, Clockwerk"
    },
    {
      "Hero": "Earth Spirit",
      "Bad against": "Abaddon, Lycan, Techies, Slark",
      "Good against": "Pudge, Tinker, Invoker, Templar Assassin, Enigma",
      "Works well with": "Alchemist, Bloodseeker, Dark Seer, Faceless Void, Lifestealer, Techies"
    },
    {
      "Hero": "Earthshaker",
      "Bad against": "Clockwerk, Death Prophet, Disruptor, Earth Spirit, Jakiro, Lifestealer, Necrophos, Outworld Destroyer, Puck, Razor, Skywrath Mage, Sniper, Spectre, Templar Assassin, Venomancer, Viper, Zeus",
      "Good against": "Broodmother, Chaos Knight, Enigma, Legion Commander, Meepo, Naga Siren, Nature's Prophet, Phantom Lancer, Spirit Breaker",
      "Works well with": "Dark Seer, Enigma, Magnus, Naga Siren, Puck, Sand King"
    },
    {
      "Hero": "Elder Titan",
      "Bad against": "Brewmaster, Clockwerk, Lich, Lion, Sven, Juggernaut, Enchantress, Earthshaker",
      "Good against": "Meepo, Morphling, Phantom Lancer, Slark, Terrorblade, Viper",
      "Works well with": "Disruptor, Faceless Void, Kunkka, Slardar, Luna"
    },
    {
      "Hero": "Ember Spirit",
      "Bad against": "Lion, Shadow Fiend, Silencer, Storm Spirit, Faceless Void, Omniknight, Outworld Destroyer, Nyx Assassin, Kunkka",
      "Good against": "Bloodseeker, Meepo, Chaos Knight, Terrorblade, Crystal Maiden, Nature's Prophet, Phantom Lancer",
      "Works well with": "Magnus, Keeper of the Light, Dazzle, Faceless Void"
    },
    {
      "Hero": "Enchantress",
      "Bad against": "Razor, Broodmother, Chen, Crystal Maiden, Juggernaut, Lina, Luna, Meepo, Nyx Assassin, Riki, Timbersaw, Troll Warlord, Venomancer, Windranger",
      "Good against": "Ember Spirit, Lycan, Omniknight, Spirit Breaker, Lifestealer, Sven, Beastmaster, Ursa",
      "Works well with": "Legion Commander, Lich, Io, Warlock"
    },
    {
      "Hero": "Enigma",
      "Bad against": "Abaddon, Anti-Mage, Bloodseeker, Bristleback, Clinkz, Clockwerk, Doom, Keeper of the Light, Luna, Medusa, Pudge, Pugna, Riki, Rubick, Silencer, Sniper, Spectre, Storm Spirit, Vengeful Spirit, Warlock, Winter Wyvern, Wraith King, Zeus, Tidehunter",
      "Good against": "Chaos Knight, Crystal Maiden, Huskar, Juggernaut, Lifestealer, Monkey King, Naga Siren, Omniknight",
      "Works well with": "Ancient Apparition, Lich, Axe, Crystal Maiden, Dark Seer, Dazzle, Earthshaker, Magnus, Naga Siren, Outworld Destroyer, Phoenix, Sand King, Treant Protector, Warlock, Witch Doctor"
    },
    {
      "Hero": "Faceless Void",
      "Bad against": "Abaddon, Brewmaster, Earth Spirit, Monkey King, Kunkka, Grimstroke, Night Stalker, Phoenix, Pudge, Shadow Demon, Sven, Vengeful Spirit",
      "Good against": "Anti-Mage, Lifestealer, Bloodseeker, Bristleback, Invoker, Mars, Morphling, Necrophos, Queen of Pain, Razor, Rubick, Slark, Storm Spirit, Weaver",
      "Works well with": "Dark Seer, Disruptor, Enigma, Invoker, Jakiro, Kunkka, Lich, Outworld Destroyer, Phoenix, Sniper, Witch Doctor"
    },
    {
      "Hero": "Grimstroke",
      "Bad against": "Huskar, Omniknight, Phoenix, Riki, Rubick, Shadow Demon, Silencer, Sniper, Vengeful Spirit",
      "Good against": "Broodmother, Crystal Maiden, Io, Necrophos, Phantom Lancer, Terrorblade, Timbersaw, Weaver",
      "Works well with": "Doom, Bane, Bloodseeker, Bounty Hunter, Crystal Maiden, Lich, Lion, Lina, Necrophos, Phoenix, Pugna, Slark, Witch Doctor"
    },
    {
      "Hero": "Gyrocopter",
      "Bad against": "Anti-Mage, Arc Warden, Huskar, Faceless Void, Juggernaut, Lina, Lifestealer, Omniknight, Queen of Pain, Timbersaw",
      "Good against": "Meepo, Undying, Phantom Lancer, Chaos Knight, Terrorblade",
      "Works well with": "Bloodseeker, Disruptor, Earthshaker, Enigma, Magnus, Morphling, Rubick, Warlock"
    },
    {
      "Hero": "Hoodwink",
      "Bad against": "Storm Spirit, Timbersaw, Treant Protector, Vengeful Spirit, Warlock, Slark, Windranger, Zeus, Techies, Clinkz, Nyx Assassin",
      "Good against": "Abaddon, Bristleback, Huskar, Lion, Monkey King, Phantom Assassin, Phantom Lancer, Morphling",
      "Works well with": "Elder Titan, Monkey King, Nature's Prophet, Windranger, Invoker, Disruptor, Pugna, Sand King"
    },
    {
      "Hero": "Huskar",
      "Bad against": "Abaddon, Alchemist, Ancient Apparition, Axe, Bristleback, Enchantress, Bloodseeker, Juggernaut, Lifestealer, Naga Siren, Slardar, Ursa, Viper, Windranger, Necrophos",
      "Good against": "Weaver, Clockwerk, Dragon Knight, Earthshaker, Ember Spirit, Nature's Prophet, Phoenix",
      "Works well with": "Ancient Apparition, Beastmaster, Dazzle, Omniknight, Oracle, Necrophos, Pugna, Terrorblade, Witch Doctor"
    },
    {
      "Hero": "Invoker",
      "Bad against": "Anti-Mage, Broodmother, Doom, Faceless Void, Juggernaut, Kunkka, Lifestealer, Night Stalker, Nyx Assassin, Outworld Destroyer, Queen of Pain, Silencer, Storm Spirit, Templar Assassin, Viper",
      "Good against": "Huskar, Legion Commander, Medusa, Necrophos, Pugna, Tinker, Wraith King",
      "Works well with": "Bloodseeker, Dark Seer, Disruptor, Luna, Magnus, Nature's Prophet, Faceless Void, Legion Commander"
    },
    {
      "Hero": "Io",
      "Bad against": "Ancient Apparition, Bloodseeker, Bristleback, Clinkz, Disruptor, Grimstroke, Legion Commander, Leshrac, Lich, Luna, Phantom Assassin, Sniper, Spirit Breaker, Treant Protector, Winter Wyvern",
      "Good against": "Drow Ranger, Meepo, Nature's Prophet, Phoenix, Pudge, Underlord",
      "Works well with": "Chaos Knight, Gyrocopter, Juggernaut, Legion Commander, Lifestealer, Phantom Assassin, Spirit Breaker, Sven, Tiny, Ursa"
    },
    {
      "Hero": "Jakiro",
      "Bad against": "Anti-Mage, Clockwerk, Lifestealer, Oracle, Rubick, Silencer, Skywrath Mage",
      "Good against": "Axe, Broodmother, Chen, Chaos Knight, Meepo, Nature's Prophet, Phantom Lancer, Riki, Templar Assassin, Treant Protector",
      "Works well with": "Dark Seer, Faceless Void, Kunkka, Magnus, Shadow Demon, Treant Protector"
    },
    {
      "Hero": "Juggernaut",
      "Bad against": "Axe, Bane, Chaos Knight, Enigma, Pugna, Omniknight, Outworld Destroyer, Ursa, Pudge, Legion Commander, Windranger",
      "Good against": "Dark Willow, Enchantress, Invoker, Keeper of the Light, Necrophos, Nyx Assassin, Phoenix, Templar Assassin, Zeus",
      "Works well with": "Crystal Maiden, Lich, Dazzle, Axe, Shadow Shaman, Venomancer, Zeus"
    },
    {
      "Hero": "Keeper of the Light",
      "Bad against": "Legion Commander, Lifestealer, Night Stalker, Nyx Assassin",
      "Good against": "Monkey King, Wraith King",
      "Works well with": "Mars, Medusa, Lina, Luna, Pudge"
    },
    {
      "Hero": "Kunkka",
      "Bad against": "Clinkz, Ursa, Silencer, Mirana, Phoenix, Omniknight, Huskar, Juggernaut, Lifestealer, Sniper, Outworld Destroyer",
      "Good against": "Chaos Knight, Broodmother, Lycan, Meepo, Phantom Lancer, Queen of Pain, Spectre, Sand King, Warlock",
      "Works well with": "Dark Seer, Faceless Void, Huskar, Invoker, Lifestealer, Slark, Warlock"
    },
    {
      "Hero": "Legion Commander",
      "Bad against": "Abaddon, Arc Warden, Bane, Dazzle, Dragon Knight, Io, Luna, Mars, Medusa, Omniknight, Oracle, Pangolier, Pugna, Razor, Skywrath Mage, Sven, Treant Protector, Underlord, Ursa, Visage, Vengeful Spirit, Winter Wyvern",
      "Good against": "Anti-Mage, Bristleback, Broodmother, Chen, Clinkz, Drow Ranger, Huskar, Nyx Assassin, Sniper, Terrorblade, Weaver",
      "Works well with": "Ancient Apparition, Disruptor, Invoker, Lifestealer, Mirana, Shadow Fiend, Silencer, Skywrath Mage, Ursa, Witch Doctor, Zeus"
    },
    {
      "Hero": "Leshrac",
      "Bad against": "Pugna, Anti-Mage, Clockwerk, Lifestealer, Nyx Assassin, Oracle",
      "Good against": "Meepo, Visage, Chen, Broodmother, Io, Shadow Demon, Phantom Lancer",
      "Works well with": "Dark Seer, Enigma, Magnus, Oracle"
    },
    {
      "Hero": "Lich",
      "Bad against": "Anti-Mage, Bloodseeker, Broodmother, Huskar, Lycan, Nature's Prophet, Phantom Assassin, Queen of Pain, Weaver",
      "Good against": "Meepo, Chaos Knight, Lone Druid",
      "Works well with": "Magnus, Warlock, Treant Protector, Witch Doctor, Faceless Void, Enigma, Axe, Grimstroke"
    },
    {
      "Hero": "Lifestealer",
      "Bad against": "Ancient Apparition, Bane, Beastmaster, Chaos Knight, Clinkz, Terrorblade, Phantom Lancer, Slark, Ursa, Weaver, Windranger",
      "Good against": "Axe, Dark Willow, Invoker, Techies, Tinker, Ogre Magi",
      "Works well with": "Clockwerk, Queen of Pain, Riki, Slardar, Spirit Breaker, Storm Spirit, Beastmaster"
    },
    {
      "Hero": "Lina",
      "Bad against": "Anti-Mage, Faceless Void, Lifestealer, Nyx Assassin, Phantom Lancer, Silencer, Slark, Spectre, Sven, Viper, Razor",
      "Good against": "Ancient Apparition, Clinkz, Crystal Maiden, Dazzle, Enchantress, Meepo, Mirana, Morphling, Necrophos, Pudge, Treant Protector, Venomancer",
      "Works well with": "Shadow Demon, Sven, Pugna, Bane, Grimstroke"
    },
    {
      "Hero": "Lion",
      "Bad against": "Abaddon, Lifestealer, Puck, Rubick, Slark, Nyx Assassin, Tidehunter",
      "Good against": "Drow Ranger, Ember Spirit, Enchantress, Medusa, Phantom Assassin, Weaver, Wraith King",
      "Works well with": "Pugna, Anti-Mage, Centaur Warrunner, Leshrac, Tinker, Ursa"
    },
    {
      "Hero": "Lone Druid",
      "Bad against": "Phantom Assassin, Bristleback, Necrophos, Grimstroke, Outworld Destroyer, Underlord, Winter Wyvern, Lich, Tinker, Death Prophet, Phoenix",
      "Good against": "Nature's Prophet, Silencer",
      "Works well with": "Beastmaster, Lycan, Ogre Magi, Omniknight"
    },
    {
      "Hero": "Luna",
      "Bad against": "Bristleback, Broodmother, Juggernaut, Lina, Meepo, Phantom Lancer, Pudge, Sniper, Slark, Techies, Tinker, Zeus",
      "Good against": "Arc Warden, Bane, Bounty Hunter, Chen, Enchantress, Legion Commander, Lifestealer, Magnus, Necrophos, Pugna, Riki, Tidehunter, Underlord, Winter Wyvern",
      "Works well with": "Crystal Maiden, Keeper of the Light, Night Stalker, Vengeful Spirit, Shadow Demon"
    },
    {
      "Hero": "Lycan",
      "Bad against": "Axe, Beastmaster, Bloodseeker, Bristleback, Earthshaker, Enigma, Enchantress, Grimstroke, Kunkka, Medusa, Omniknight, Phantom Assassin, Sven, Tidehunter, Timbersaw, Winter Wyvern",
      "Good against": "Lich, Techies, Arc Warden, Drow Ranger, Ursa",
      "Works well with": "Beastmaster, Chen, Nature's Prophet"
    },
    {
      "Hero": "Magnus",
      "Bad against": "Alchemist, Bloodseeker, Disruptor, Huskar, Jakiro, Night Stalker, Phoenix, Razor, Rubick, Sniper, Spectre, Treant Protector, Tinker, Venomancer, Wraith King, Zeus",
      "Good against": "Chaos Knight, Meepo, Lifestealer, Phantom Lancer",
      "Works well with": "Snapfire, Anti-Mage, Enigma, Invoker, Phantom Assassin, Sven, Troll Warlord, Kunkka, Tiny"
    },
    {
      "Hero": "Mars",
      "Bad against": "Axe, Riki, Batrider, Faceless Void, Huskar, Lina, Necrophos, Ogre Magi, Outworld Destroyer, Pugna, Shadow Fiend, Storm Spirit, Underlord, Undying, Venomancer, Viper, Zeus",
      "Good against": "Bloodseeker, Juggernaut, Legion Commander, Phantom Assassin, Slark, Spectre, Terrorblade, Weaver",
      "Works well with": "Dark Seer, Huskar, Crystal Maiden, Disruptor, Keeper of the Light, Kunkka, Lich, Monkey King, Phoenix, Riki, Sven"
    },
    {
      "Hero": "Medusa",
      "Bad against": "Anti-Mage, Arc Warden, Bane, Broodmother, Invoker, Keeper of the Light, Nyx Assassin, Phantom Lancer, Pugna, Riki, Slark, Sniper, Ursa",
      "Good against": "Enchantress, Lifestealer, Necrophos, Sven, Undying, Lycan, Enigma, Meepo, Axe, Visage, Spectre",
      "Works well with": "Axe, Earthshaker, Keeper of the Light, Lich, Phoenix, Shadow Demon"
    },
    {
      "Hero": "Meepo",
      "Bad against": "Axe, Earthshaker, Elder Titan, Ember Spirit, Kunkka, Lion, Mars, Monkey King, Pangolier, Phantom Assassin, Sven, Techies, Venomancer, Viper, Winter Wyvern",
      "Good against": "Anti-Mage, Legion Commander, Phantom Lancer, Phoenix, Queen of Pain, Shadow Demon, Spirit Breaker, Storm Spirit",
      "Works well with": "Disruptor, Kunkka, Silencer, Sven, Dazzle"
    },
    {
      "Hero": "Mirana",
      "Bad against": "Abaddon, Arc Warden, Bloodseeker, Lina, Lycan, Meepo, Night Stalker, Puck, Slark, Windranger",
      "Good against": "Crystal Maiden, Drow Ranger, Techies, Witch Doctor",
      "Works well with": "Axe, Bane, Batrider, Clockwerk, Shadow Demon, Sven, Underlord"
    },
    {
      "Hero": "Monkey King",
      "Bad against": "Batrider, Beastmaster, Bounty Hunter, Brewmaster, Clockwerk, Dark Willow, Disruptor, Drow Ranger, Earth Spirit, Enchantress, Enigma, Huskar, Keeper of the Light, Lina, Magnus, Mars, Pangolier, Phantom Assassin, Pudge, Queen of Pain, Slardar, Spectre, Spirit Breaker, Storm Spirit, Techies, Timbersaw, Vengeful Spirit, Venomancer, Viper, Visage, Warlock, Windranger",
      "Good against": "Alchemist, Faceless Void, Omniknight, Meepo, Nature's Prophet, Shadow Fiend, Spectre, Silencer, Timbersaw, Underlord, Skywrath Mage, Witch Doctor",
      "Works well with": "Beastmaster, Crystal Maiden, Dark Seer, Elder Titan, Keeper of the Light, Magnus, Mars, Nature's Prophet, Oracle, Puck, Treant Protector"
    },
    {
      "Hero": "Morphling",
      "Bad against": "Ancient Apparition, Anti-Mage, Arc Warden, Earth Spirit, Elder Titan, Lion, Meepo, Mirana, Outworld Destroyer, Rubick, Skywrath Mage",
      "Good against": "Lifestealer, Bloodseeker, Clockwerk, Drow Ranger, Lone Druid, Phantom Assassin, Razor, Sniper",
      "Works well with": "Drow Ranger, Earthshaker, Tiny, Pugna, Keeper of the Light, Crystal Maiden"
    },
    {
      "Hero": "Naga Siren",
      "Bad against": "Axe, Batrider, Earthshaker, Lion, Outworld Destroyer, Timbersaw, Zeus, Gyrocopter, Snapfire, Leshrac",
      "Good against": "Abaddon, Omniknight, Nature's Prophet, Legion Commander, Templar Assassin, Crystal Maiden, Chen, Bounty Hunter, Viper, Night Stalker, Arc Warden, Sniper, Rubick, Lone Druid",
      "Works well with": "Dazzle, Disruptor, Kunkka, Razor, Tidehunter"
    },
    {
      "Hero": "Nature's Prophet",
      "Bad against": "Batrider, Broodmother, Clockwerk, Death Prophet, Doom, Earthshaker, Elder Titan, Ember Spirit, Jakiro, Lina, Luna, Meepo, Naga Siren, Sand King, Shadow Shaman, Spectre, Spirit Breaker, Storm Spirit, Timbersaw, Tinker, Underlord, Visage",
      "Good against": "Lich, Monkey King, Techies, Treant Protector, Venomancer, Weaver",
      "Works well with": "Bloodseeker, Invoker, Lycan, Windranger, Timbersaw, Riki, Mars, Zeus"
    },
    {
      "Hero": "Necrophos",
      "Bad against": "Ancient Apparition, Silencer, Nyx Assassin, Dazzle, Lina, Lion, Meepo, Oracle, Phantom Lancer, Rubick, Shadow Demon, Wraith King",
      "Good against": "Axe, Bristleback, Huskar, Phoenix, Pudge, Sven, Tidehunter",
      "Works well with": "Abaddon, Axe, Earthshaker, Legion Commander, Oracle, Pugna"
    },
    {
      "Hero": "Night Stalker",
      "Bad against": "Chaos Knight, Lycan, Naga Siren, Phantom Lancer, Sven, Troll Warlord",
      "Good against": "Storm Spirit, Puck, Clinkz, Earthshaker, Keeper of the Light, Tinker, Riki, Slark",
      "Works well with": "Oracle, Luna, Magnus"
    },
    {
      "Hero": "Nyx Assassin",
      "Bad against": "Bounty Hunter, Bloodseeker, Brewmaster, Doom, Juggernaut, Visage, Lifestealer, Lycan, Slardar",
      "Good against": "Crystal Maiden, Enchantress, Enigma, Ember Spirit, Medusa, Outworld Destroyer, Phoenix, Puck, Pugna, Sniper, Storm Spirit, Tinker",
      "Works well with": "Invoker, Legion Commander, Lifestealer, Bloodseeker"
    },
    {
      "Hero": "Ogre Magi",
      "Bad against": "Chaos Knight, Doom, Lifestealer, Meepo, Phantom Lancer, Omniknight, Oracle, Slark, Viper",
      "Good against": "Earthshaker, Io, Nature's Prophet, Templar Assassin, Weaver",
      "Works well with": "Grimstroke, Juggernaut, Shadow Fiend, Sniper, Sven, Wraith King"
    },
    {
      "Hero": "Omniknight",
      "Bad against": "Brewmaster, Doom, Invoker, Luna, Naga Siren, Oracle, Outworld Destroyer, Rubick, Silencer, Sven",
      "Good against": "Axe, Chaos Knight, Death Prophet, Juggernaut, Legion Commander, Winter Wyvern",
      "Works well with": "Clockwerk, Crystal Maiden, Keeper of the Light, Pudge, Storm Spirit"
    },
    {
      "Hero": "Oracle",
      "Bad against": "Anti-Mage, Axe, Bristleback, Faceless Void, Shadow Demon, Spectre",
      "Good against": "Ember Spirit, Legion Commander, Dark Willow, Omniknight, Rubick, Ancient Apparition, Silencer, Phoenix, Necrophos, Dark Seer, Techies",
      "Works well with": "Alchemist, Ancient Apparition, Death Prophet, Huskar, Io, Legion Commander, Monkey King, Shadow Demon, Timbersaw, Ursa, Leshrac, Troll Warlord, Necrophos"
    },
    {
      "Hero": "Outworld Devourer",
      "Bad against": "Nyx Assassin, Rubick, Silencer, Sniper, Templar Assassin",
      "Good against": "Anti-Mage, Axe, Huskar, Legion Commander, Winter Wyvern, Morphling, Timbersaw, Wraith King",
      "Works well with": "Ogre Magi, Silencer"
    },
    {
      "Hero": "Pangolier",
      "Bad against": "Bloodseeker, Centaur Warrunner, Faceless Void, Grimstroke, Medusa, Outworld Destroyer, Puck, Slark, Spirit Breaker, Tusk",
      "Good against": "Arc Warden, Broodmother, Meepo, Phantom Lancer, Templar Assassin, Visage",
      "Works well with": "Abaddon, Batrider, Clockwerk, Dark Seer, Earth Spirit, Jakiro, Keeper of the Light, Undying"
    },
    {
      "Hero": "Phantom Assassin",
      "Bad against": "Axe, Bane, Broodmother, Centaur Warrunner, Dragon Knight, Lina, Lion, Morphling, Omniknight, Phoenix, Puck, Razor, Skywrath Mage, Spectre, Timbersaw, Tinker, Troll Warlord, Viper",
      "Good against": "Anti-Mage, Crystal Maiden, Dazzle, Nature's Prophet, Riki, Sniper",
      "Works well with": "Ancient Apparition, Beastmaster, Magnus, Omniknight, Slardar, Vengeful Spirit"
    },
    {
      "Hero": "Phantom Lancer",
      "Bad against": "Axe, Bristleback, Centaur Warrunner, Dragon Knight, Earthshaker, Ember Spirit, Grimstroke, Gyrocopter, Hoodwink, Jakiro, Kunkka, Legion Commander, Leshrac, Meepo, Magnus, Pangolier, Phoenix, Puck, Razor, Sand King, Storm Spirit, Sven, Tidehunter, Timbersaw, Void Spirit, Witch Doctor",
      "Good against": "Arc Warden, Bounty Hunter, Chaos Knight, Clockwerk, Disruptor, Lifestealer, Lone Druid, Pugna, Shadow Demon, Slark, Templar Assassin, Undying, Viper, Visage, Wraith King",
      "Works well with": "Bane, Crystal Maiden, Dazzle, Jakiro, Keeper of the Light, Oracle, Shadow Shaman, Slardar, Spirit Breaker, Undying, Venomancer"
    },
    {
      "Hero": "Phoenix",
      "Bad against": "Night Stalker, Arc Warden, Huskar, Ursa, Silencer, Meepo, Bloodseeker, Viper, Necrophos, Snapfire",
      "Good against": "Templar Assassin, Phantom Assassin, Legion Commander, Monkey King, Chen, Earthshaker, Ancient Apparition, Shadow Demon",
      "Works well with": "Enigma, Faceless Void, Invoker, Keeper of the Light, Lifestealer, Sven, Tinker, Treant Protector, Warlock"
    },
    {
      "Hero": "Puck",
      "Bad against": "Arc Warden, Faceless Void, Jakiro, Lycan, Night Stalker, Nyx Assassin, Silencer, Templar Assassin, Venomancer, Wraith King",
      "Good against": "Void Spirit, Pangolier, Crystal Maiden, Mirana, Phoenix, Sniper, Terrorblade",
      "Works well with": "Dark Willow, Magnus, Enigma, Invoker, Kunkka, Phoenix, Witch Doctor"
    },
    {
      "Hero": "Pudge",
      "Bad against": "Abaddon, Anti-Mage, Bristleback, Bounty Hunter, Dazzle, Doom, Legion Commander, Lifestealer, Mirana, Monkey King, Necrophos, Night Stalker, Nyx Assassin, Outworld Destroyer, Slardar, Slark, Tidehunter, Timbersaw, Weaver",
      "Good against": "Bloodseeker, Crystal Maiden, Drow Ranger, Luna, Sniper, Spectre, Techies, Tinker, Zeus",
      "Works well with": "Techies, Pugna, Outworld Destroyer, Lifestealer, Tiny, Crystal Maiden, Bloodseeker, Omniknight"
    },
    {
      "Hero": "Pugna",
      "Bad against": "Nyx Assassin, Clockwerk, Sniper, Phantom Lancer, Anti-Mage, Luna, Oracle, Storm Spirit",
      "Good against": "Enchantress, Juggernaut, Outworld Destroyer, Timbersaw, Leshrac, Legion Commander, Shadow Fiend, Faceless Void, Invoker, Skywrath Mage, Troll Warlord",
      "Works well with": "Grimstroke, Io, Legion Commander, Necrophos, Medusa, Phoenix, Skywrath Mage, Shadow Shaman"
    },
    {
      "Hero": "Queen of Pain",
      "Bad against": "Anti-Mage, Arc Warden, Axe, Bloodseeker, Centaur Warrunner, Death Prophet, Disruptor, Faceless Void, Legion Commander, Luna, Meepo, Night Stalker, Nyx Assassin, Puck, Shadow Shaman, Skywrath Mage",
      "Good against": "Drow Ranger, Enchantress, Huskar, Slark",
      "Works well with": "Axe, Dark Seer, Enigma, Faceless Void, Lifestealer, Magnus, Omniknight"
    },
    {
      "Hero": "Razor",
      "Bad against": "Anti-Mage, Chaos Knight, Centaur Warrunner, Earth Spirit, Huskar, Necrophos, Outworld Destroyer, Queen of Pain, Slark, Sniper, Viper, Weaver",
      "Good against": "Bristleback, Earthshaker, Lifestealer, Monkey King, Phantom Assassin, Phantom Lancer, Spirit Breaker, Troll Warlord, Windranger",
      "Works well with": "Death Prophet, Shadow Demon, Outworld Destroyer, Bane, Naga Siren, Winter Wyvern"
    },
    {
      "Hero": "Riki",
      "Bad against": "Axe, Bounty Hunter, Bristleback, Legion Commander, Meepo, Omniknight, Razor, Slardar, Spectre, Underlord, Viper, Zeus",
      "Good against": "Anti-Mage, Chen, Clinkz, Crystal Maiden, Drow Ranger, Lifestealer, Mars, Queen of Pain, Storm Spirit, Skywrath Mage, Sniper, Ursa, Weaver",
      "Works well with": "Faceless Void, Lifestealer, Meepo, Dark Seer, Magnus, Enigma, Axe"
    },
    {
      "Hero": "Rubick",
      "Bad against": "Bristleback, Broodmother, Clinkz, Legion Commander, Phantom Lancer, Riki, Shadow Fiend, Silencer, Slark, Wraith King",
      "Good against": "Crystal Maiden, Earthshaker, Enigma, Invoker, Kunkka, Lich, Lina, Lion, Luna, Magnus, Medusa, Morphling, Omniknight, Winter Wyvern, Witch Doctor",
      "Works well with": "Alchemist, Crystal Maiden, Morphling"
    },
    {
      "Hero": "Sand King",
      "Bad against": "Earth Spirit, Phoenix, Rubick, Silencer, Tidehunter, Zeus",
      "Good against": "Broodmother, Meepo, Nature's Prophet, Phantom Assassin, Slark, Templar Assassin",
      "Works well with": "Crystal Maiden, Keeper of the Light, Tidehunter, Tiny, Monkey King, Warlock, Earthshaker"
    },
    {
      "Hero": "Shadow Demon",
      "Bad against": "Ember Spirit, Leshrac, Lina, Lion, Puck, Pugna, Queen of Pain, Storm Spirit, Witch Doctor, Wraith King",
      "Good against": "Alchemist, Venomancer, Anti-Mage, Dark Seer, Legion Commander, Omniknight, Spectre, Juggernaut, Luna, Techies, Windranger",
      "Works well with": "Ancient Apparition, Dazzle, Terrorblade, Razor"
    },
    {
      "Hero": "Shadow Fiend",
      "Bad against": "Axe, Razor, Bane, Bounty Hunter, Disruptor, Doom, Dragon Knight, Luna, Night Stalker, Pugna, Sniper, Spirit Breaker, Tinker, Ursa, Tidehunter, Viper, Zeus",
      "Good against": "Clockwerk, Meepo, Nature's Prophet, Silencer, Slark",
      "Works well with": "Bane, Clockwerk, Enigma, Legion Commander, Magnus, Slardar, Tidehunter, Vengeful Spirit"
    },
    {
      "Hero": "Shadow Shaman",
      "Bad against": "Dragon Knight, Mirana, Morphling, Riki, Wraith King, Visage",
      "Good against": "Huskar, Nature's Prophet, Spirit Breaker, Templar Assassin, Terrorblade, Weaver",
      "Works well with": "Juggernaut, Ursa, Troll Warlord, Pugna, Legion Commander, Monkey King"
    },
    {
      "Hero": "Silencer",
      "Bad against": "Broodmother, Dragon Knight, Lycan, Nyx Assassin, Phantom Assassin, Phantom Lancer, Slark, Sniper, Ursa",
      "Good against": "Bristleback, Crystal Maiden, Enigma, Medusa, Oracle, Outworld Destroyer, Pugna, Shadow Demon, Timbersaw, Tinker, Windranger, Zeus",
      "Works well with": "Slardar, Crystal Maiden, Anti-Mage, Pudge, Outworld Destroyer"
    },
    {
      "Hero": "Skywrath Mage",
      "Bad against": "Anti-Mage, Huskar, Abaddon, Pugna, Nyx Assassin, Wraith King",
      "Good against": "Timbersaw, Storm Spirit, Enchantress, Alchemist, Vengeful Spirit, Winter Wyvern",
      "Works well with": "Faceless Void, Undying, Centaur Warrunner, Pugna, Silencer, Legion Commander"
    },
    {
      "Hero": "Slardar",
      "Bad against": "Oracle, Abaddon, Phantom Lancer, Meepo",
      "Good against": "Riki, Clinkz, Bounty Hunter, Weaver, Shadow Fiend, Alchemist, Legion Commander, Pudge",
      "Works well with": "Bounty Hunter, Vengeful Spirit, Shadow Fiend, Alchemist, Lifestealer, Phantom Assassin, Templar Assassin"
    },
    {
      "Hero": "Slark",
      "Bad against": "Ancient Apparition, Axe, Bloodseeker, Centaur Warrunner, Chaos Knight, Disruptor, Earthshaker, Meepo, Omniknight, Outworld Destroyer, Phantom Lancer, Puck, Spectre, Tiny",
      "Good against": "Arc Warden, Drow Ranger, Luna, Medusa, Phantom Assassin, Sniper, Spectre, Storm Spirit, Templar Assassin, Warlock",
      "Works well with": "Bane, Earthshaker, Luna, Magnus, Kunkka, Omniknight, Skywrath Mage, Underlord, Witch Doctor"
    },
    {
      "Hero": "Snapfire",
      "Bad against": "Anti-Mage, Silencer, Nyx Assassin, Ancient Apparition, Juggernaut, Abaddon, Pudge",
      "Good against": "Chen, Clockwerk, Phantom Lancer, Phoenix, Omniknight, Faceless Void",
      "Works well with": "Faceless Void, Oracle, Warlock, Mars"
    },
    {
      "Hero": "Sniper",
      "Bad against": "Axe, Bloodseeker, Bounty Hunter, Centaur Warrunner, Clockwerk, Ember Spirit, Invoker, Lifestealer, Omniknight, Phantom Assassin, Phantom Lancer, Pudge, Slardar, Slark, Spectre, Spirit Breaker, Storm Spirit, Tusk, Viper, Weaver",
      "Good against": "Drow Ranger, Earthshaker, Enigma, Medusa, Silencer, Shadow Fiend, Undying",
      "Works well with": "Grimstroke, Ogre Magi, Lich, Bloodseeker"
    },
    {
      "Hero": "Spectre",
      "Bad against": "Anti-Mage, Doom, Juggernaut, Lion, Lycan, Meepo, Necrophos, Omniknight, Pugna, Riki, Shadow Shaman, Storm Spirit, Terrorblade, Undying, Venomancer, Viper, Winter Wyvern",
      "Good against": "Ancient Apparition, Clinkz, Crystal Maiden, Drow Ranger, Earthshaker, Lina, Magnus, Nature's Prophet, Oracle, Phantom Assassin, Rubick, Sniper, Tinker, Windranger, Zeus",
      "Works well with": "Bloodseeker, Bounty Hunter, Chen, Clockwerk, Earthshaker, Enigma, Leshrac, Magnus, Outworld Destroyer, Treant Protector, Warlock, Pudge"
    },
    {
      "Hero": "Spirit Breaker",
      "Bad against": "Omniknight, Clockwerk, Ember Spirit, Outworld Destroyer, Enigma, Invoker, Medusa, Phoenix, Meepo, Razor, Treant Protector, Underlord, Undying",
      "Good against": "Anti-Mage, Clinkz, Nature's Prophet, Tinker",
      "Works well with": "Bloodseeker, Bounty Hunter, Io, Lifestealer, Dark Seer, Snapfire"
    },
    {
      "Hero": "Storm Spirit",
      "Bad against": "Anti-Mage, Doom, Ember Spirit, Night Stalker, Nyx Assassin, Riki, Silencer, Techies",
      "Good against": "Ancient Apparition, Arc Warden, Bloodseeker, Mars, Monkey King, Phantom Lancer, Razor, Sniper, Spectre, Terrorblade, Tinker, Vengeful Spirit, Viper, Weaver",
      "Works well with": "Keeper of the Light, Omniknight, Lifestealer"
    },
    {
      "Hero": "Sven",
      "Bad against": "Clockwerk, Lifestealer, Pugna, Razor, Omniknight, Spectre, Troll Warlord, Terrorblade, Templar Assassin, Venomancer, Winter Wyvern, Wraith King",
      "Good against": "Anti-Mage, Broodmother, Juggernaut, Chaos Knight, Chen, Death Prophet, Doom, Meepo, Pangolier, Phantom Lancer, Warlock",
      "Works well with": "Crystal Maiden, Dark Seer, Enigma, Io, Lion, Magnus, Oracle, Shadow Shaman"
    },
    {
      "Hero": "Techies",
      "Bad against": "Abaddon, Anti-Mage, Batrider, Beastmaster, Chen, Death Prophet, Juggernaut, Lifestealer, Night Stalker, Oracle, Templar Assassin, Visage, Wraith King, Zeus",
      "Good against": "Ember Spirit, Meepo, Monkey King, Morphling, Tinker",
      "Works well with": "Batrider, Crystal Maiden, Magnus, Pugna, Tusk"
    },
    {
      "Hero": "Templar Assassin",
      "Bad against": "Arc Warden, Venomancer, Windranger, Viper, Dragon Knight, Pudge, Huskar, Razor, Pugna",
      "Good against": "Shadow Fiend, Zeus, Puck",
      "Works well with": "Slardar, Elder Titan, Vengeful Spirit"
    },
    {
      "Hero": "Terrorblade",
      "Bad against": "Drow Ranger, Earth Spirit, Axe, Elder Titan, Ursa, Lina, Dark Seer, Shadow Shaman, Ember Spirit, Dazzle, Necrophos, Outworld Destroyer, Razor, Tinker, Zeus, Timbersaw, Morphling, Storm Spirit, Sven, Skywrath Mage",
      "Good against": "Ancient Apparition, Bane, Viper, Techies, Shadow Fiend, Pudge, Anti-Mage, Sniper, Lifestealer, Witch Doctor",
      "Works well with": "Dazzle, Oracle, Shadow Demon, Necrophos"
    },
    {
      "Hero": "Tidehunter",
      "Bad against": "Anti-Mage, Nyx Assassin, Razor, Rubick, Slark, Ursa",
      "Good against": "Bane, Batrider, Shadow Fiend, Phantom Lancer, Windranger",
      "Works well with": "Underlord, Earthshaker, Elder Titan, Shadow Fiend"
    },
    {
      "Hero": "Timbersaw",
      "Bad against": "Bane, Doom, Ember Spirit, Faceless Void, Invoker, Lion, Necrophos, Outworld Destroyer, Pangolier, Pugna, Shadow Shaman, Skywrath Mage, Silencer, Storm Spirit, Viper, Zeus",
      "Good against": "Broodmother, Axe, Chaos Knight, Meepo, Monkey King, Nature's Prophet, Phantom Assassin, Phantom Lancer, Razor, Slark, Terrorblade, Treant Protector",
      "Works well with": "Bounty Hunter, Crystal Maiden, Enigma, Magnus, Faceless Void"
    },
    {
      "Hero": "Tinker",
      "Bad against": "Anti-Mage, Clockwerk, Dazzle, Doom, Legion Commander, Lifestealer, Luna, Night Stalker, Nyx Assassin, Pudge, Silencer, Slark, Storm Spirit, Vengeful Spirit, Zeus, Pugna, Kunkka",
      "Good against": "Bloodseeker, Chaos Knight, Faceless Void, Shadow Fiend, Terrorblade, Timbersaw",
      "Works well with": "Faceless Void, Kunkka, Nature's Prophet, Spirit Breaker, Bloodseeker, Keeper of the Light, Bounty Hunter, Slardar"
    },
    {
      "Hero": "Tiny",
      "Bad against": "Bristleback, Juggernaut, Lifestealer, Lion, Necrophos, Slardar, Viper",
      "Good against": "Broodmother, Meepo, Naga Siren",
      "Works well with": "Bloodseeker, Earthshaker, Io, Magnus, Enigma, Slardar, Tidehunter, Pudge"
    },
    {
      "Hero": "Treant Protector",
      "Bad against": "Monkey King, Phantom Lancer, Rubick, Slardar, Timbersaw",
      "Good against": "Spirit Breaker, Anti-Mage, Lycan, Storm Spirit, Drow Ranger, Phantom Assassin",
      "Works well with": "Keeper of the Light, Crystal Maiden, Mirana, Nature's Prophet, Pudge, Sven, Warlock"
    },
    {
      "Hero": "Troll Warlord",
      "Bad against": "Axe, Bane, Chaos Knight, Crystal Maiden, Lich, Oracle, Outworld Destroyer, Razor, Sniper, Timbersaw, Underlord, Winter Wyvern",
      "Good against": "Anti-Mage, Enchantress, Huskar, Juggernaut, Lifestealer, Phantom Assassin, Phoenix, Sven, Undying",
      "Works well with": "Ogre Magi, Slardar, Vengeful Spirit"
    },
    {
      "Hero": "Tusk",
      "Bad against": "Anti-Mage, Disruptor, Earth Spirit, Earthshaker, Phantom Lancer, Razor, Techies",
      "Good against": "Bane, Bloodseeker, Crystal Maiden, Legion Commander, Pugna, Shadow Fiend, Sniper, Venomancer, Viper, Monkey King",
      "Works well with": "Omniknight, Axe, Juggernaut, Legion Commander, Lifestealer, Tidehunter, Tiny, Meepo"
    },
    {
      "Hero": "Underlord",
      "Bad against": "Necrophos, Razor, Luna, Disruptor, Kunkka, Doom, Sniper, Outworld Destroyer, Winter Wyvern, Rubick, Shadow Fiend, Ursa",
      "Good against": "Drow Ranger, Legion Commander, Templar Assassin, Phantom Lancer",
      "Works well with": "Disruptor, Dragon Knight, Elder Titan, Leshrac, Mirana, Riki, Rubick, Timbersaw, Vengeful Spirit"
    },
    {
      "Hero": "Undying",
      "Bad against": "Alchemist, Earthshaker, Gyrocopter, Luna, Necrophos, Silencer",
      "Good against": "Nature's Prophet, Spectre, Ogre Magi, Centaur Warrunner, Winter Wyvern, Sven, Bristleback",
      "Works well with": "Broodmother, Crystal Maiden, Morphling, Naga Siren, Pugna, Warlock, Winter Wyvern, Lich, Witch Doctor"
    },
    {
      "Hero": "Ursa",
      "Bad against": "Anti-Mage, Bane, Doom, Lion, Riki, Slark, Storm Spirit, Templar Assassin, Viper, Weaver, Windranger",
      "Good against": "Lifestealer, Lina, Timbersaw, Huskar, Medusa, Bristleback, Underlord, Pudge",
      "Works well with": "Io, Disruptor, Shadow Shaman, Lion, Bane"
    },
    {
      "Hero": "Vengeful Spirit",
      "Bad against": "Anti-Mage, Lina, Nyx Assassin, Phantom Lancer, Rubick, Spirit Breaker, Tidehunter, Viper",
      "Good against": "Batrider, Clockwerk, Faceless Void, Huskar, Meepo, Monkey King",
      "Works well with": "Techies, Shadow Fiend, Slardar, Drow Ranger, Mirana, Bloodseeker, Crystal Maiden, Weaver"
    },
    {
      "Hero": "Venomancer",
      "Bad against": "Abaddon, Anti-Mage, Huskar, Legion Commander, Oracle, Rubick, Slark, Terrorblade, Underlord, Wraith King",
      "Good against": "Axe, Earthshaker, Magnus, Mars, Monkey King, Spectre, Templar Assassin, Techies, Windranger",
      "Works well with": "Ancient Apparition, Undying, Viper"
    },
    {
      "Hero": "Viper",
      "Bad against": "Broodmother, Chaos Knight, Invoker, Lifestealer, Phantom Lancer, Pugna, Rubick, Terrorblade, Weaver, Windranger, Wraith King",
      "Good against": "Abaddon, Axe, Bristleback, Dragon Knight, Earthshaker, Huskar, Magnus, Mars, Monkey King, Necrophos, Nyx Assassin, Razor, Slark, Spectre, Templar Assassin, Tidehunter, Vengeful Spirit, Venomancer, Visage, Zeus",
      "Works well with": "Abaddon, Beastmaster, Clockwerk, Crystal Maiden, Dark Seer, Dazzle, Drow Ranger, Earth Spirit, Faceless Void, Lich, Luna, Necrophos, Ogre Magi, Slardar, Treant Protector"
    },
    {
      "Hero": "Visage",
      "Bad against": "Axe, Doom, Luna, Phoenix, Tidehunter, Timbersaw, Tiny, Venomancer, Viper",
      "Good against": "Clockwerk, Nature's Prophet, Puck, Pudge, Shadow Shaman, Spectre",
      "Works well with": "Slardar, Lifestealer, Beastmaster, Elder Titan"
    },
    {
      "Hero": "Void Spirit",
      "Bad against": "Bane, Bloodseeker, Death Prophet, Bounty Hunter, Doom, Ember Spirit, Meepo, Puck, Queen of Pain, Slardar, Templar Assassin, Viper",
      "Good against": "Broodmother, Terrorblade, Gyrocopter, Morphling, Monkey King, Windranger",
      "Works well with": "Keeper of the Light, Pudge, Pugna, Bane, Bloodseeker"
    },
    {
      "Hero": "Warlock",
      "Bad against": "Weaver, Anti-Mage, Bloodseeker, Silencer, Dark Seer, Ember Spirit, Lycan, Ancient Apparition, Nyx Assassin, Sven",
      "Good against": "Huskar, Meepo, Templar Assassin, Shadow Fiend, Enigma",
      "Works well with": "Sven, Bloodseeker, Axe, Dark Seer, Kunkka, Magnus, Enigma, Silencer, Spectre"
    },
    {
      "Hero": "Weaver",
      "Bad against": "Axe, Bloodseeker, Drow Ranger, Faceless Void, Night Stalker, Nyx Assassin, Skywrath Mage, Slardar, Zeus",
      "Good against": "Ancient Apparition, Brewmaster, Lifestealer, Undying, Pudge, Sven, Ursa, Wraith King",
      "Works well with": "Crystal Maiden, Alchemist, Vengeful Spirit"
    },
    {
      "Hero": "Windranger",
      "Bad against": "Axe, Bloodseeker, Centaur Warrunner, Nyx Assassin, Ember Spirit, Morphling, Razor, Spectre, Sven",
      "Good against": "Earthshaker, Huskar, Hoodwink, Phantom Assassin, Pudge, Ursa",
      "Works well with": "Nature's Prophet, Hoodwink"
    },
    {
      "Hero": "Winter Wyvern",
      "Bad against": "Ancient Apparition, Invoker, Luna, Naga Siren, Omniknight, Outworld Destroyer, Pugna, Skywrath Mage, Slark, Timbersaw, Tinker, Undying",
      "Good against": "Beastmaster, Chaos Knight, Lycan, Legion Commander, Meepo, Troll Warlord",
      "Works well with": "Dark Seer, Enigma, Magnus, Venomancer, Invoker"
    },
    {
      "Hero": "Witch Doctor",
      "Bad against": "Faceless Void, Kunkka, Lina, Luna, Morphling, Omniknight, Oracle, Pudge, Riki, Rubick, Silencer, Tidehunter, Vengeful Spirit",
      "Good against": "Bloodseeker, Lone Druid, Lycan, Monkey King, Venomancer, Viper",
      "Works well with": "Enigma, Faceless Void, Lich, Magnus, Underlord, Undying"
    },
    {
      "Hero": "Wraith King",
      "Bad against": "Anti-Mage, Broodmother, Chaos Knight, Juggernaut, Invoker, Lion, Monkey King, Phantom Lancer, Riki, Slark, Terrorblade, Weaver",
      "Good against": "Bloodseeker, Doom, Legion Commander, Necrophos, Rubick, Techies, Witch Doctor",
      "Works well with": "Bloodseeker, Ogre Magi"
    },
    {
      "Hero": "Zeus",
      "Bad against": "Anti-Mage, Faceless Void, Chaos Knight, Juggernaut, Lifestealer, Meepo, Pudge, Pugna, Silencer, Templar Assassin, Ursa, Viper",
      "Good against": "Slardar, Enchantress, Timbersaw, Bounty Hunter, Winter Wyvern, Lich, Necrophos, Tinker",
      "Works well with": "Ancient Apparition, Bloodseeker, Dazzle, Tidehunter"
    }
]

export default heroCounterListRaw