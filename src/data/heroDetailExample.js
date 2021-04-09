// THIS FILE IS THE RESULT OF CALLING GET HERO DETAIL BY ID API URL WITH THE ID IS 1

const heroDetailExample = {
    "result": {
      "data": {
        "heroes": [
          {
            "id": 1,
            "name": "npc_dota_hero_antimage",
            "order_id": 1,
            "name_loc": "Anti-Mage",
            "bio_loc": "The monks of Turstarkuri watched the rugged valleys below their mountain monastery as wave after wave of invaders swept through the lower kingdoms. Ascetic and pragmatic, in their remote monastic eyrie they remained aloof from mundane strife, wrapped in meditation that knew no gods or elements of magic. Then came the Legion of the Dead God, crusaders with a sinister mandate to replace all local worship with their Unliving Lord's poisonous nihilosophy. From a landscape that had known nothing but blood and battle for a thousand years, they tore the souls and bones of countless fallen legions and pitched them against Turstarkuri. The monastery stood scarcely a fortnight against the assault, and the few monks who bothered to surface from their meditations believed the invaders were but demonic visions sent to distract them from meditation. They died where they sat on their silken cushions. Only one youth survived--a pilgrim who had come as an acolyte, seeking wisdom, but had yet to be admitted to the monastery. He watched in horror as the monks to whom he had served tea and nettles were first slaughtered, then raised to join the ranks of the Dead God's priesthood. With nothing but a few of Turstarkuri's prized dogmatic scrolls, he crept away to the comparative safety of other lands, swearing to obliterate not only the Dead God's magic users--but to put an end to magic altogether. ",
            "hype_loc": "Should Anti-Mage have the opportunity to gather his full strength, few can stop his assaults. <b>Draining mana</b> from enemies with every strike or <b>teleporting short distances</b> to escape an ambush, cornering him is a challenge for any foe.",
            "npe_desc_loc": "Slashes his foes with mana-draining attacks",
            "str_base": 23,
            "str_gain": 1.2999999523163,
            "agi_base": 24,
            "agi_gain": 2.7999999523163,
            "int_base": 12,
            "int_gain": 1.7999999523163,
            "primary_attr": 1,
            "complexity": 1,
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
            ],
            "damage_min": 53,
            "damage_max": 57,
            "attack_rate": 1.3999999761581,
            "attack_range": 150,
            "projectile_speed": 0,
            "armor": 3,
            "magic_resistance": 25,
            "movement_speed": 310,
            "turn_rate": 0.5,
            "sight_range_day": 1800,
            "sight_range_night": 800,
            "max_health": 660,
            "health_regen": 2.5499999523163,
            "max_mana": 219,
            "mana_regen": 0.60000002384186,
            "abilities": [
              {
                "id": 5003,
                "name": "antimage_mana_break",
                "name_loc": "Mana Break",
                "desc_loc": "Burns an opponent's mana on each attack.  Mana Break deals %percent_damage_per_burn%%% of the mana burned as damage to the target. Mana Break has %illusion_percentage%%% effect if caused by illusions.",
                "lore_loc": "A modified technique of the Turstarkuri monks' peaceful ways is to turn magical energies on their owner.",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 0,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 1,
                "immunity": 4,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "percent_damage_per_burn",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      50
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  },
                  {
                    "name": "mana_per_hit",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      28,
                      40,
                      52,
                      64
                    ],
                    "is_percentage": false,
                    "heading_loc": "MANA BURNED PER HIT:"
                  },
                  {
                    "name": "mana_per_hit_pct",
                    "values_float": [
                      1,
                      1.7999999523163,
                      2.5999999046326,
                      3.4000000953674
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": true,
                    "heading_loc": "MAX MANA BURNED PER HIT:"
                  },
                  {
                    "name": "silence_chance",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      15
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  },
                  {
                    "name": "silence_duration",
                    "values_float": [
                      3
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  },
                  {
                    "name": "illusion_percentage",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      50
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 5004,
                "name": "antimage_blink",
                "name_loc": "Blink",
                "desc_loc": "Short distance teleportation that allows Anti-Mage to move in and out of combat.",
                "lore_loc": "In his encounter with the Dead Gods, Anti-Mage learned the value of being elusive.",
                "notes_loc": [
                  "You can use Blink to dodge incoming projectiles."
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 0,
                "behavior": "524304",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0.40000000596046,
                  0.40000000596046,
                  0.40000000596046,
                  0.40000000596046
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  15,
                  12,
                  9,
                  6
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  60
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "blink_range",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      925,
                      1000,
                      1075,
                      1150
                    ],
                    "is_percentage": false,
                    "heading_loc": "RANGE:"
                  },
                  {
                    "name": "min_blink_range",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      200
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  },
                  {
                    "name": "AbilityCastPoint",
                    "values_float": [
                      0.40000000596046,
                      0.40000000596046,
                      0.40000000596046,
                      0.40000000596046
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 7314,
                "name": "antimage_counterspell",
                "name_loc": "Counterspell",
                "desc_loc": "Passively grants you magic resistance. Can be activated to create an anti-magic shell around you that sends any targeted spells back towards enemies instead of affecting you.",
                "lore_loc": "With the proper focus, Anti-Mage turns innate resistance into calculated retaliation.",
                "notes_loc": [
                  
                ],
                "shard_loc": "Successful Counterspell creates an illusion attacking the caster for 5 seconds. Removes Counterspell manacost.",
                "scepter_loc": "",
                "type": 0,
                "behavior": "2052",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 2,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  15,
                  11,
                  7,
                  3
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  45,
                  50,
                  55,
                  60
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "magic_resistance",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      15,
                      25,
                      35,
                      45
                    ],
                    "is_percentage": true,
                    "heading_loc": "MAGIC RESISTANCE:"
                  },
                  {
                    "name": "duration",
                    "values_float": [
                      1.2000000476837
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": "DURATION:"
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": true,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 543,
                "name": "antimage_mana_overload",
                "name_loc": "Blink Fragment",
                "desc_loc": "Blinks an illusion at the target enemy or location and attack them for 7 seconds. Counterspell is replicated on the Blink Fragment illusion.",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 0,
                "behavior": "8589934617",
                "target_team": 2,
                "target_type": 19,
                "flags": 0,
                "damage": 0,
                "immunity": 4,
                "dispellable": 0,
                "max_level": 1,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0.20000000298023
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  20
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  50
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "duration",
                    "values_float": [
                      7
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  },
                  {
                    "name": "outgoing_damage",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      -50
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  },
                  {
                    "name": "incoming_damage",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      150
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  },
                  {
                    "name": "AbilityCastPoint",
                    "values_float": [
                      0.20000000298023
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": true,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": true,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 5006,
                "name": "antimage_mana_void",
                "name_loc": "Mana Void",
                "desc_loc": "For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies.  The main target is also mini-stunned.",
                "lore_loc": "After bringing enemies to their knees, Anti-Mage punishes them for their use of the arcane arts.",
                "notes_loc": [
                  "Damage is calculated based on the primary target's mana, but applied to all enemies within the area of effect."
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 1,
                "behavior": "40",
                "target_team": 2,
                "target_type": 19,
                "flags": 0,
                "damage": 2,
                "immunity": 4,
                "dispellable": 0,
                "max_level": 3,
                "cast_ranges": [
                  600
                ],
                "cast_points": [
                  0.30000001192093,
                  0.30000001192093,
                  0.30000001192093,
                  0.30000001192093
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  70,
                  70,
                  70
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  125,
                  200,
                  275
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "mana_void_damage_per_mana",
                    "values_float": [
                      0.80000001192093,
                      0.94999998807907,
                      1.1000000238419
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": "DAMAGE:"
                  },
                  {
                    "name": "mana_void_ministun",
                    "values_float": [
                      0.30000001192093
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": "STUN DURATION:"
                  },
                  {
                    "name": "mana_void_aoe_radius",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      500
                    ],
                    "is_percentage": false,
                    "heading_loc": "RADIUS:"
                  },
                  {
                    "name": "AbilityCastRange",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      600
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  },
                  {
                    "name": "AbilityCastPoint",
                    "values_float": [
                      0.30000001192093,
                      0.30000001192093,
                      0.30000001192093,
                      0.30000001192093
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": true,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              }
            ],
            "talents": [
              {
                "id": 6250,
                "name": "special_bonus_strength_9",
                "name_loc": "+{s:value} Strength",
                "desc_loc": "",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 2,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "value",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      9
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 6119,
                "name": "special_bonus_attack_speed_15",
                "name_loc": "+{s:value} Attack Speed",
                "desc_loc": "",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 2,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "value",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      15
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 6606,
                "name": "special_bonus_unique_antimage_3",
                "name_loc": "+{s:value} Blink Cast Range",
                "desc_loc": "",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 2,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "value",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      300
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 5934,
                "name": "special_bonus_armor_8",
                "name_loc": "+{s:value} Armor",
                "desc_loc": "",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 2,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "value",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      8
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 665,
                "name": "special_bonus_unique_antimage_6",
                "name_loc": "+{s:value} Mana Void Damage Multiplier",
                "desc_loc": "",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 2,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "value",
                    "values_float": [
                      0.10000000149012
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 6012,
                "name": "special_bonus_unique_antimage",
                "name_loc": "-{s:value}s Blink Cooldown",
                "desc_loc": "",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 2,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "value",
                    "values_float": [
                      2
                    ],
                    "values_int": [
                      
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 6607,
                "name": "special_bonus_unique_antimage_4",
                "name_loc": "+{s:value}% Counterspell Magic Resistance",
                "desc_loc": "",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 2,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "value",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      20
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              },
              {
                "id": 6353,
                "name": "special_bonus_unique_antimage_2",
                "name_loc": "-{s:value}s Mana Void Cooldown",
                "desc_loc": "",
                "lore_loc": "",
                "notes_loc": [
                  
                ],
                "shard_loc": "",
                "scepter_loc": "",
                "type": 2,
                "behavior": "2",
                "target_team": 0,
                "target_type": 0,
                "flags": 0,
                "damage": 0,
                "immunity": 0,
                "dispellable": 0,
                "max_level": 4,
                "cast_ranges": [
                  0
                ],
                "cast_points": [
                  0,
                  0,
                  0,
                  0
                ],
                "channel_times": [
                  0,
                  0,
                  0,
                  0
                ],
                "cooldowns": [
                  0,
                  0,
                  0,
                  0
                ],
                "durations": [
                  0,
                  0,
                  0,
                  0
                ],
                "damages": [
                  0,
                  0,
                  0,
                  0
                ],
                "mana_costs": [
                  0,
                  0,
                  0,
                  0
                ],
                "gold_costs": [
                  
                ],
                "special_values": [
                  {
                    "name": "value",
                    "values_float": [
                      
                    ],
                    "values_int": [
                      50
                    ],
                    "is_percentage": false,
                    "heading_loc": ""
                  }
                ],
                "is_item": false,
                "ability_has_scepter": false,
                "ability_has_shard": false,
                "ability_is_granted_by_scepter": false,
                "ability_is_granted_by_shard": false,
                "item_cost": 0,
                "item_initial_charges": 0,
                "item_neutral_tier": 4294967295,
                "item_stock_max": 0,
                "item_stock_time": 0,
                "item_quality": 0
              }
            ]
          }
        ]
      },
      "status": 1
    }
  }