// THIS FILE IS THE RESULT OF CALLING GET HERO DETAIL BY ID API URL THEN FORMATTING THE RESULT AS MANY AS HERO LIST

const heroDetailList = [
    {
        "id": 1,
        "name": "npc_dota_hero_antimage",
        "order_id": 1,
        "name_loc": "Anti-Mage",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            3,
            0,
            1,
            0,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "id": 2,
        "name": "npc_dota_hero_axe",
        "order_id": 2,
        "name_loc": "Axe",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            0,
            2,
            2,
            3,
            0,
            0,
            3
        ]
    },
    {
        "id": 3,
        "name": "npc_dota_hero_bane",
        "order_id": 70,
        "name_loc": "Bane",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            1,
            3,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "id": 4,
        "name": "npc_dota_hero_bloodseeker",
        "order_id": 47,
        "name_loc": "Bloodseeker",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            1,
            1,
            1,
            0,
            0,
            0,
            1
        ]
    },
    {
        "id": 5,
        "name": "npc_dota_hero_crystal_maiden",
        "order_id": 3,
        "name_loc": "Crystal Maiden",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            2,
            2,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 6,
        "name": "npc_dota_hero_drow_ranger",
        "order_id": 5,
        "name_loc": "Drow Ranger",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0
        ]
    },
    {
        "id": 7,
        "name": "npc_dota_hero_earthshaker",
        "order_id": 6,
        "name_loc": "Earthshaker",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "id": 8,
        "name": "npc_dota_hero_juggernaut",
        "order_id": 46,
        "name_loc": "Juggernaut",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            0
        ]
    },
    {
        "id": 9,
        "name": "npc_dota_hero_mirana",
        "order_id": 10,
        "name_loc": "Mirana",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            1,
            1,
            1,
            1,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "id": 11,
        "name": "npc_dota_hero_nevermore",
        "order_id": 39,
        "name_loc": "Shadow Fiend",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 10,
        "name": "npc_dota_hero_morphling",
        "order_id": 11,
        "name_loc": "Morphling",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            3,
            0,
            1,
            1,
            0,
            2,
            3,
            0,
            0
        ]
    },
    {
        "id": 12,
        "name": "npc_dota_hero_phantom_lancer",
        "order_id": 75,
        "name_loc": "Phantom Lancer",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            1,
            0,
            0,
            0,
            2,
            1,
            0
        ]
    },
    {
        "id": 13,
        "name": "npc_dota_hero_puck",
        "order_id": 13,
        "name_loc": "Puck",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            0,
            2,
            3,
            0,
            0,
            3,
            0,
            3
        ]
    },
    {
        "id": 14,
        "name": "npc_dota_hero_pudge",
        "order_id": 14,
        "name_loc": "Pudge",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            1,
            2,
            0,
            2,
            0,
            0,
            2
        ]
    },
    {
        "id": 15,
        "name": "npc_dota_hero_razor",
        "order_id": 15,
        "name_loc": "Razor",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            1,
            0,
            0,
            2,
            0,
            1,
            0
        ]
    },
    {
        "id": 16,
        "name": "npc_dota_hero_sand_king",
        "order_id": 16,
        "name_loc": "Sand King",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            1,
            2,
            2,
            1,
            0,
            2,
            0,
            3
        ]
    },
    {
        "id": 17,
        "name": "npc_dota_hero_storm_spirit",
        "order_id": 18,
        "name_loc": "Storm Spirit",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            2,
            1,
            0,
            0,
            3,
            0,
            1
        ]
    },
    {
        "id": 18,
        "name": "npc_dota_hero_sven",
        "order_id": 19,
        "name_loc": "Sven",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            1,
            2,
            0,
            2,
            0,
            0,
            2
        ]
    },
    {
        "id": 19,
        "name": "npc_dota_hero_tiny",
        "order_id": 28,
        "name_loc": "Tiny",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            3,
            0,
            2,
            1,
            0,
            2,
            0,
            2,
            2
        ]
    },
    {
        "id": 20,
        "name": "npc_dota_hero_vengefulspirit",
        "order_id": 21,
        "name_loc": "Vengeful Spirit",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            1,
            2,
            0,
            0,
            1,
            0,
            2
        ]
    },
    {
        "id": 21,
        "name": "npc_dota_hero_windrunner",
        "order_id": 22,
        "name_loc": "Windranger",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            1,
            1,
            1,
            0,
            0,
            1,
            0,
            0
        ]
    },
    {
        "id": 22,
        "name": "npc_dota_hero_zuus",
        "order_id": 24,
        "name_loc": "Zeus",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 23,
        "name": "npc_dota_hero_kunkka",
        "order_id": 49,
        "name_loc": "Kunkka",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            1,
            1,
            2,
            0,
            1,
            0,
            0,
            2
        ]
    },
    {
        "id": 25,
        "name": "npc_dota_hero_lina",
        "order_id": 8,
        "name_loc": "Lina",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            1,
            3,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 31,
        "name": "npc_dota_hero_lich",
        "order_id": 7,
        "name_loc": "Lich",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            2,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 26,
        "name": "npc_dota_hero_lion",
        "order_id": 9,
        "name_loc": "Lion",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            3,
            3,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "id": 27,
        "name": "npc_dota_hero_shadow_shaman",
        "order_id": 17,
        "name_loc": "Shadow Shaman",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            2,
            3,
            0,
            0,
            0,
            3,
            1
        ]
    },
    {
        "id": 28,
        "name": "npc_dota_hero_slardar",
        "order_id": 25,
        "name_loc": "Slardar",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            0,
            1,
            0,
            2,
            1,
            0,
            2
        ]
    },
    {
        "id": 29,
        "name": "npc_dota_hero_tidehunter",
        "order_id": 20,
        "name_loc": "Tidehunter",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            1,
            2,
            0,
            3,
            0,
            0,
            3
        ]
    },
    {
        "id": 30,
        "name": "npc_dota_hero_witch_doctor",
        "order_id": 23,
        "name_loc": "Witch Doctor",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            2,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 32,
        "name": "npc_dota_hero_riki",
        "order_id": 48,
        "name_loc": "Riki",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            0,
            1,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "id": 33,
        "name": "npc_dota_hero_enigma",
        "order_id": 26,
        "name_loc": "Enigma",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            0,
            0,
            2,
            3,
            0,
            0,
            2,
            2
        ]
    },
    {
        "id": 34,
        "name": "npc_dota_hero_tinker",
        "order_id": 40,
        "name_loc": "Tinker",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            0,
            3,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "id": 35,
        "name": "npc_dota_hero_sniper",
        "order_id": 34,
        "name_loc": "Sniper",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            3,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 36,
        "name": "npc_dota_hero_necrolyte",
        "order_id": 12,
        "name_loc": "Necrophos",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            0,
            2,
            1,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "id": 37,
        "name": "npc_dota_hero_warlock",
        "order_id": 59,
        "name_loc": "Warlock",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "id": 38,
        "name": "npc_dota_hero_beastmaster",
        "order_id": 36,
        "name_loc": "Beastmaster",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            1,
            2,
            0,
            2,
            0,
            0,
            2
        ]
    },
    {
        "id": 39,
        "name": "npc_dota_hero_queenofpain",
        "order_id": 51,
        "name_loc": "Queen of Pain",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            0,
            3,
            0,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "id": 40,
        "name": "npc_dota_hero_venomancer",
        "order_id": 30,
        "name_loc": "Venomancer",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            1,
            1,
            0,
            0,
            0,
            1,
            1
        ]
    },
    {
        "id": 41,
        "name": "npc_dota_hero_faceless_void",
        "order_id": 27,
        "name_loc": "Faceless Void",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            0,
            2,
            0,
            1,
            1,
            0,
            3
        ]
    },
    {
        "id": 42,
        "name": "npc_dota_hero_skeleton_king",
        "order_id": 52,
        "name_loc": "Wraith King",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            1,
            0,
            2,
            0,
            3,
            0,
            0,
            1
        ]
    },
    {
        "id": 43,
        "name": "npc_dota_hero_death_prophet",
        "order_id": 62,
        "name_loc": "Death Prophet",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            0,
            1,
            1,
            0,
            0,
            0,
            3,
            0
        ]
    },
    {
        "id": 44,
        "name": "npc_dota_hero_phantom_assassin",
        "order_id": 80,
        "name_loc": "Phantom Assassin",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            3,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ]
    },
    {
        "id": 45,
        "name": "npc_dota_hero_pugna",
        "order_id": 35,
        "name_loc": "Pugna",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "id": 46,
        "name": "npc_dota_hero_templar_assassin",
        "order_id": 86,
        "name_loc": "Templar Assassin",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ]
    },
    {
        "id": 47,
        "name": "npc_dota_hero_viper",
        "order_id": 29,
        "name_loc": "Viper",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            1,
            0,
            0,
            1,
            0,
            2,
            0,
            0,
            1
        ]
    },
    {
        "id": 48,
        "name": "npc_dota_hero_luna",
        "order_id": 82,
        "name_loc": "Luna",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            2,
            0,
            0,
            0,
            0,
            1,
            0
        ]
    },
    {
        "id": 49,
        "name": "npc_dota_hero_dragon_knight",
        "order_id": 58,
        "name_loc": "Dragon Knight",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            1,
            2,
            0,
            2,
            0,
            3,
            1
        ]
    },
    {
        "id": 50,
        "name": "npc_dota_hero_dazzle",
        "order_id": 4,
        "name_loc": "Dazzle",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            1,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 51,
        "name": "npc_dota_hero_rattletrap",
        "order_id": 31,
        "name_loc": "Clockwerk",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            1,
            2,
            0,
            1,
            0,
            0,
            3
        ]
    },
    {
        "id": 52,
        "name": "npc_dota_hero_leshrac",
        "order_id": 38,
        "name_loc": "Leshrac",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            1,
            3,
            1,
            0,
            0,
            0,
            3,
            0
        ]
    },
    {
        "id": 53,
        "name": "npc_dota_hero_furion",
        "order_id": 32,
        "name_loc": "Nature's Prophet",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            0,
            1,
            0,
            3,
            0,
            1,
            3,
            0
        ]
    },
    {
        "id": 54,
        "name": "npc_dota_hero_life_stealer",
        "order_id": 61,
        "name_loc": "Lifestealer",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            0,
            1,
            1,
            2,
            1,
            0,
            0
        ]
    },
    {
        "id": 55,
        "name": "npc_dota_hero_dark_seer",
        "order_id": 33,
        "name_loc": "Dark Seer",
        "primary_attr": 2,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            0,
            1,
            1,
            0,
            1,
            0,
            1
        ]
    },
    {
        "id": 56,
        "name": "npc_dota_hero_clinkz",
        "order_id": 68,
        "name_loc": "Clinkz",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            0,
            0,
            0,
            0,
            3,
            1,
            0
        ]
    },
    {
        "id": 57,
        "name": "npc_dota_hero_omniknight",
        "order_id": 57,
        "name_loc": "Omniknight",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            2,
            1,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "id": 58,
        "name": "npc_dota_hero_enchantress",
        "order_id": 37,
        "name_loc": "Enchantress",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            0,
            1,
            3,
            1,
            0,
            2,
            0
        ]
    },
    {
        "id": 59,
        "name": "npc_dota_hero_huskar",
        "order_id": 54,
        "name_loc": "Huskar",
        "primary_attr": 0,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            1
        ]
    },
    {
        "id": 60,
        "name": "npc_dota_hero_night_stalker",
        "order_id": 42,
        "name_loc": "Night Stalker",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            1,
            2,
            0,
            2,
            0,
            0,
            2
        ]
    },
    {
        "id": 61,
        "name": "npc_dota_hero_broodmother",
        "order_id": 53,
        "name_loc": "Broodmother",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            1,
            0,
            0,
            0,
            3,
            3,
            0
        ]
    },
    {
        "id": 62,
        "name": "npc_dota_hero_bounty_hunter",
        "order_id": 64,
        "name_loc": "Bounty Hunter",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            1,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "id": 63,
        "name": "npc_dota_hero_weaver",
        "order_id": 41,
        "name_loc": "Weaver",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "id": 64,
        "name": "npc_dota_hero_jakiro",
        "order_id": 55,
        "name_loc": "Jakiro",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            1,
            2,
            1,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "id": 65,
        "name": "npc_dota_hero_batrider",
        "order_id": 56,
        "name_loc": "Batrider",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            0,
            0,
            2,
            2,
            0,
            1,
            0,
            3
        ]
    },
    {
        "id": 66,
        "name": "npc_dota_hero_chen",
        "order_id": 50,
        "name_loc": "Chen",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            0,
            0,
            3,
            0,
            0,
            2,
            0
        ]
    },
    {
        "id": 67,
        "name": "npc_dota_hero_spectre",
        "order_id": 44,
        "name_loc": "Spectre",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            3,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0
        ]
    },
    {
        "id": 69,
        "name": "npc_dota_hero_doom_bringer",
        "order_id": 45,
        "name_loc": "Doom",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            1,
            2,
            0,
            2,
            0,
            0,
            2
        ]
    },
    {
        "id": 68,
        "name": "npc_dota_hero_ancient_apparition",
        "order_id": 43,
        "name_loc": "Ancient Apparition",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            1,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 70,
        "name": "npc_dota_hero_ursa",
        "order_id": 63,
        "name_loc": "Ursa",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            0,
            1,
            1,
            1,
            0,
            0,
            0
        ]
    },
    {
        "id": 71,
        "name": "npc_dota_hero_spirit_breaker",
        "order_id": 66,
        "name_loc": "Spirit Breaker",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            0,
            2,
            0,
            2,
            1,
            0,
            2
        ]
    },
    {
        "id": 72,
        "name": "npc_dota_hero_gyrocopter",
        "order_id": 78,
        "name_loc": "Gyrocopter",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            3,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 73,
        "name": "npc_dota_hero_alchemist",
        "order_id": 60,
        "name_loc": "Alchemist",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            1,
            1,
            1,
            0,
            2,
            0,
            0,
            1
        ]
    },
    {
        "id": 74,
        "name": "npc_dota_hero_invoker",
        "order_id": 67,
        "name_loc": "Invoker",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            0,
            3,
            2,
            0,
            0,
            1,
            1,
            0
        ]
    },
    {
        "id": 75,
        "name": "npc_dota_hero_silencer",
        "order_id": 65,
        "name_loc": "Silencer",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "id": 76,
        "name": "npc_dota_hero_obsidian_destroyer",
        "order_id": 69,
        "name_loc": "Outworld Destroyer",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            2,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 77,
        "name": "npc_dota_hero_lycan",
        "order_id": 72,
        "name_loc": "Lycan",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            0,
            0,
            1,
            1,
            1,
            3,
            0
        ]
    },
    {
        "id": 78,
        "name": "npc_dota_hero_brewmaster",
        "order_id": 74,
        "name_loc": "Brewmaster",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            1,
            2,
            0,
            2,
            0,
            0,
            3
        ]
    },
    {
        "id": 79,
        "name": "npc_dota_hero_shadow_demon",
        "order_id": 71,
        "name_loc": "Shadow Demon",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            1,
            2,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "id": 80,
        "name": "npc_dota_hero_lone_druid",
        "order_id": 73,
        "name_loc": "Lone Druid",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            2,
            0,
            0,
            0,
            1,
            1,
            0,
            3,
            0
        ]
    },
    {
        "id": 81,
        "name": "npc_dota_hero_chaos_knight",
        "order_id": 79,
        "name_loc": "Chaos Knight",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            3,
            0,
            0,
            2,
            0,
            2,
            0,
            2,
            1
        ]
    },
    {
        "id": 82,
        "name": "npc_dota_hero_meepo",
        "order_id": 91,
        "name_loc": "Meepo",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            2,
            1,
            0,
            0,
            2,
            1,
            1
        ]
    },
    {
        "id": 83,
        "name": "npc_dota_hero_treant",
        "order_id": 76,
        "name_loc": "Treant Protector",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            3,
            0,
            1,
            0,
            1,
            1,
            0,
            2
        ]
    },
    {
        "id": 84,
        "name": "npc_dota_hero_ogre_magi",
        "order_id": 77,
        "name_loc": "Ogre Magi",
        "primary_attr": 2,
        "attack_capability": 1,
        "role_levels": [
            0,
            2,
            2,
            2,
            0,
            1,
            0,
            0,
            1
        ]
    },
    {
        "id": 85,
        "name": "npc_dota_hero_undying",
        "order_id": 84,
        "name_loc": "Undying",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            1,
            1,
            1,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "id": 86,
        "name": "npc_dota_hero_rubick",
        "order_id": 81,
        "name_loc": "Rubick",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            1,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 87,
        "name": "npc_dota_hero_disruptor",
        "order_id": 85,
        "name_loc": "Disruptor",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            1,
            2,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "id": 88,
        "name": "npc_dota_hero_nyx_assassin",
        "order_id": 88,
        "name_loc": "Nyx Assassin",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            2,
            2,
            0,
            0,
            1,
            0,
            2
        ]
    },
    {
        "id": 89,
        "name": "npc_dota_hero_naga_siren",
        "order_id": 87,
        "name_loc": "Naga Siren",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            3,
            1,
            0,
            2,
            0,
            0,
            1,
            2,
            1
        ]
    },
    {
        "id": 90,
        "name": "npc_dota_hero_keeper_of_the_light",
        "order_id": 89,
        "name_loc": "Keeper of the Light",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            2,
            1,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 91,
        "name": "npc_dota_hero_wisp",
        "order_id": 83,
        "name_loc": "Io",
        "primary_attr": 0,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            1,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "id": 92,
        "name": "npc_dota_hero_visage",
        "order_id": 90,
        "name_loc": "Visage",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            1,
            2,
            1,
            0,
            1,
            0,
            1,
            0
        ]
    },
    {
        "id": 93,
        "name": "npc_dota_hero_slark",
        "order_id": 94,
        "name_loc": "Slark",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            1,
            1,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "id": 94,
        "name": "npc_dota_hero_medusa",
        "order_id": 96,
        "name_loc": "Medusa",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            3,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "id": 95,
        "name": "npc_dota_hero_troll_warlord",
        "order_id": 97,
        "name_loc": "Troll Warlord",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            3,
            0,
            0,
            1,
            0,
            1,
            0,
            2,
            0
        ]
    },
    {
        "id": 96,
        "name": "npc_dota_hero_centaur",
        "order_id": 93,
        "name_loc": "Centaur Warrunner",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            1,
            1,
            0,
            3,
            1,
            0,
            3
        ]
    },
    {
        "id": 97,
        "name": "npc_dota_hero_magnataur",
        "order_id": 92,
        "name_loc": "Magnus",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            1,
            2,
            0,
            0,
            1,
            0,
            3
        ]
    },
    {
        "id": 98,
        "name": "npc_dota_hero_shredder",
        "order_id": 95,
        "name_loc": "Timbersaw",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            3,
            0,
            0,
            2,
            2,
            0,
            0
        ]
    },
    {
        "id": 99,
        "name": "npc_dota_hero_bristleback",
        "order_id": 99,
        "name_loc": "Bristleback",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            1,
            0,
            0,
            3,
            0,
            0,
            1
        ]
    },
    {
        "id": 100,
        "name": "npc_dota_hero_tusk",
        "order_id": 98,
        "name_loc": "Tusk",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            1,
            2,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "id": 101,
        "name": "npc_dota_hero_skywrath_mage",
        "order_id": 100,
        "name_loc": "Skywrath Mage",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            3,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 102,
        "name": "npc_dota_hero_abaddon",
        "order_id": 102,
        "name_loc": "Abaddon",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            2,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "id": 103,
        "name": "npc_dota_hero_elder_titan",
        "order_id": 101,
        "name_loc": "Elder Titan",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            1,
            1,
            0,
            1,
            0,
            0,
            2
        ]
    },
    {
        "id": 104,
        "name": "npc_dota_hero_legion_commander",
        "order_id": 105,
        "name_loc": "Legion Commander",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            1,
            2,
            0,
            1,
            0,
            0,
            1
        ]
    },
    {
        "id": 106,
        "name": "npc_dota_hero_ember_spirit",
        "order_id": 103,
        "name_loc": "Ember Spirit",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            1,
            1,
            0,
            0,
            3,
            0,
            1
        ]
    },
    {
        "id": 107,
        "name": "npc_dota_hero_earth_spirit",
        "order_id": 104,
        "name_loc": "Earth Spirit",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            0,
            2,
            1,
            0,
            1,
            2,
            0,
            1
        ]
    },
    {
        "id": 109,
        "name": "npc_dota_hero_terrorblade",
        "order_id": 107,
        "name_loc": "Terrorblade",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            3,
            0,
            1,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "id": 110,
        "name": "npc_dota_hero_phoenix",
        "order_id": 106,
        "name_loc": "Phoenix",
        "primary_attr": 0,
        "attack_capability": 2,
        "role_levels": [
            0,
            1,
            3,
            1,
            0,
            0,
            2,
            0,
            2
        ]
    },
    {
        "id": 111,
        "name": "npc_dota_hero_oracle",
        "order_id": 109,
        "name_loc": "Oracle",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            3,
            2,
            0,
            0,
            1,
            0,
            0
        ]
    },
    {
        "id": 105,
        "name": "npc_dota_hero_techies",
        "order_id": 108,
        "name_loc": "Techies",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            0,
            3,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 112,
        "name": "npc_dota_hero_winter_wyvern",
        "order_id": 110,
        "name_loc": "Winter Wyvern",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            3,
            1,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "id": 113,
        "name": "npc_dota_hero_arc_warden",
        "order_id": 111,
        "name_loc": "Arc Warden",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            3,
            0,
            1,
            0,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "id": 108,
        "name": "npc_dota_hero_abyssal_underlord",
        "order_id": 112,
        "name_loc": "Underlord",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            0,
            1,
            1,
            1,
            0,
            1,
            2,
            0,
            0
        ]
    },
    {
        "id": 114,
        "name": "npc_dota_hero_monkey_king",
        "order_id": 113,
        "name_loc": "Monkey King",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            0,
            1,
            0,
            0,
            2,
            0,
            1
        ]
    },
    {
        "id": 120,
        "name": "npc_dota_hero_pangolier",
        "order_id": 115,
        "name_loc": "Pangolier",
        "primary_attr": 1,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            2,
            1,
            0,
            1,
            2,
            0,
            2
        ]
    },
    {
        "id": 119,
        "name": "npc_dota_hero_dark_willow",
        "order_id": 114,
        "name_loc": "Dark Willow",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            2,
            2,
            1,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "id": 121,
        "name": "npc_dota_hero_grimstroke",
        "order_id": 116,
        "name_loc": "Grimstroke",
        "primary_attr": 2,
        "attack_capability": 2,
        "role_levels": [
            0,
            1,
            2,
            2,
            0,
            0,
            1,
            0,
            0
        ]
    },
    {
        "id": 129,
        "name": "npc_dota_hero_mars",
        "order_id": 117,
        "name_loc": "Mars",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            0,
            2,
            0,
            3,
            0,
            0,
            2
        ]
    },
    {
        "id": 126,
        "name": "npc_dota_hero_void_spirit",
        "order_id": 119,
        "name_loc": "Void Spirit",
        "primary_attr": 2,
        "attack_capability": 1,
        "role_levels": [
            2,
            0,
            2,
            1,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "id": 128,
        "name": "npc_dota_hero_snapfire",
        "order_id": 118,
        "name_loc": "Snapfire",
        "primary_attr": 0,
        "attack_capability": 2,
        "role_levels": [
            0,
            1,
            3,
            1,
            0,
            0,
            1,
            0,
            0
        ]
    },
    {
        "id": 123,
        "name": "npc_dota_hero_hoodwink",
        "order_id": 120,
        "name_loc": "Hoodwink",
        "primary_attr": 1,
        "attack_capability": 2,
        "role_levels": [
            0,
            0,
            2,
            1,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "id": 135,
        "name": "npc_dota_hero_dawnbreaker",
        "order_id": 121,
        "name_loc": "Dawnbreaker",
        "primary_attr": 0,
        "attack_capability": 1,
        "role_levels": [
            1,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    }
]

export default heroDetailList