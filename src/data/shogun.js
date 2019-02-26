const shogun = {
  name: "Shogun",
  force: {
    boost: {
      name: "Unified Effort",
      description:
        "For 3 turns, increases all party members' maximum HP and damage dealt.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        damageIncrease: "15%",
        maximumHpIncrease: "40%"
      }
    },
    break: {
      name: "Decoy Party",
      description:
        "For one turn, all party members will block one enemy action targeted at them.",
      bodyPartsUsed: "Head",
      levels: null
    }
  },
  novice: [
    {
      name: "Second Sword",
      description:
        "Reduces physical damage the user takes when they have two weapons equipped. Enables the equipping of subweapons.",
      levels: {
        total: 10,
        damageResuction: [
          "5%",
          "6%",
          "7%",
          "8%",
          "12%",
          "13%",
          "14%",
          "15%",
          "16%",
          "20%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Echoing Slash",
      description:
        "Deals melee STR-based cut damage to one enemy at the start of the turn. If a subweapon is equipped, attack again with the equipped subweapon after the target takes their turn.",
      levels: {
        total: 10,
        accuracyModifier: "+20%",
        toCost: [
          { value: 3, colspan: 4 },
          { value: 6, colspan: 5 },
          { value: 9, colspan: 1 }
        ],
        firstHitDamage: [
          "120%",
          "123%",
          "126%",
          "129%",
          "141%",
          "145%",
          "149%",
          "153%",
          "157%",
          "180%"
        ],
        secondHitDamage: [
          "100%",
          "103%",
          "106%",
          "109%",
          "120%",
          "123%",
          "126%",
          "129%",
          "132%",
          "150%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Second Sword",
        level: 2
      }
    },
    {
      name: "Great Warrior",
      description:
        "Increases one party member's physical attack and chance of being targeted (enmity) for a set amount of turns.",
      levels: {
        total: 6,
        speedModifier: "150%",
        duration: 4,
        tpCost: [{ value: 5, colspan: 5 }, { value: 9, colspan: 1 }],
        attackIncrease: ["20%", "25%", "30%", "35%", "40%", "60%"],
        enmityIncrease: ["20%", "22%", "24%", "26%", "28%", "40%"]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Taunt Assassins",
      description:
        "For a set number of steps in the Labyrinth, increases the encounter rate and experience gain from encounters.",
      levels: {
        total: 6,
        experienceMultiplier: "2x",
        tpCost: [{ value: 5, colspan: 5 }, { value: 15, colspan: 1 }],
        dangerMultiplier: ["25x", "32.5x", "40x", "47.5x", "55x", "100x"],
        duration: [20, 30, 40, 50, 60, 100]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: {
        weapon: null,
        skill: "Great Warrior",
        level: 2
      }
    },
    {
      name: "Front Command",
      description:
        "Targets one party member. For one turn, when that party member is attacked, all party members in the front row will counterattack. Does not activate on enemy counterattacks.",
      levels: {
        total: 6,
        speedModifier: "200%",
        tpCost: [{ value: 4, colspan: 5 }, { value: 8, colspan: 1 }],
        counterattackDamage: ["125%", "133%", "141%", "149%", "157%", "200%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: null
    },
    {
      name: "Bolt Slash",
      description: "Deals melee STR-based cut + volt damage to one enemy.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 10, colspan: 4 },
          { value: 15, colspan: 1 }
        ],
        damage: ["160%", "168%", "176%", "196%", "204%", "212%", "220%", "260%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: null,
        level: null
      }
    },
    {
      name: "Avidya Sight",
      description:
        "Increases the user's damage at night, or when they are blinded.",
      levels: {
        total: 4,
        damageIncrease: ["8%", "10%", "12%", "20%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Morale Boost",
      description:
        "When the user is revived, all party members have their HP restored.",
      levels: {
        total: 4,
        hpRestored: [25, 30, 35, 50]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Take",
      description: "Increases material yield from taking in the labyrinth.",
      levels: {
        total: 1
      },
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Twin Swallows",
      description:
        "Deals melee STR-based damage to one enemy. The element is determined by the user's main weapon. If the user has a subweapon equipped, they will deal another instance of melee STR-based damage. The element for the second attack is determined by the user's subweapon.",
      levels: {
        total: 10,
        speedModifier: "80%",
        accuracyModifier: "-5%",
        tpCost: [
          { value: 6, colspan: 4 },
          { value: 11, colspan: 5 },
          { value: 17, colspan: 1 }
        ],
        damagePerHit: [
          "140%",
          "144%",
          "148%",
          "152%",
          "168%",
          "172%",
          "176%",
          "180%",
          "184%",
          "225%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Echoing Slash",
        level: 3
      }
    },
    {
      name: "Endure Command",
      description:
        "For one turn, when the user is attacked, all party members besides the user will counterattack the damage source with their equipped weapons. Does not activate on enemy counterattacks.",
      levels: {
        total: 6,
        speedModifier: "200%",
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        damage: ["110%", "116%", "123%", "129%", "136%", "175%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Front Command",
        level: 2
      }
    },
    {
      name: "Blitz Command",
      description:
        "Targets one enemy. All party members besides the user will attack the target with their equipped weapons.",
      levels: {
        total: 10,
        speedModifier: "50%",
        tpCost: [
          { value: 10, colspan: 4 },
          { value: 15, colspan: 5 },
          { value: 22, colspan: 1 }
        ],
        damage: [
          "75%",
          "78%",
          "81%",
          "84%",
          "93%",
          "96%",
          "99%",
          "102%",
          "105%",
          "120%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Endure Command",
        level: 2
      }
    },
    {
      name: "Morning Star",
      description:
        "Deals melee STR-based cut damage to one row of enemies. Damage increases when the clock is between 7 AM and 6 PM.",
      levels: {
        total: 6,
        speedModifier: "70%",
        accuracyModifier: "-5%",
        daytimeDamageMultiplier: "1.5x",
        tpCost: [{ value: 12, colspan: 5 }, { value: 18, colspan: 1 }],
        baseDamage: ["130%", "138%", "146%", "154%", "162%", "200%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Bolt Slash",
        level: 3
      }
    },
    {
      name: "Twilight Hour",
      description:
        "Deals melee STR-based cut damage to one enemy. Damage increases when the clock is between 7 PM and 6 AM.",
      levels: {
        total: 6,
        speedModifier: "125%",
        accuracyModifier: "+5%",
        nighttimeDamageMultiplier: "1.5x",
        tpCost: [{ value: 7, colspan: 5 }, { value: 12, colspan: 1 }],
        baseDamage: ["160%", "172%", "184%", "196%", "208%", "265%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Avidya Sight",
        level: 2
      }
    },
    {
      name: "Bloody Lance",
      description:
        "Increases the user's damage dealt whenever they kill an enemy or party member. If the user dies, Bloody Lance's bonus is reset.",
      levels: {
        total: 6,
        stackCap: 9,
        damageIncreasePerKill: ["6%", "8%", "10%", "12%", "14%", "20%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Twilight Hour",
        level: 2
      }
    },
    {
      name: "Peerless Demon",
      description:
        "Increases the user's damage based on the number of hits they've dealt this turn.",
      levels: {
        total: 10,
        damageIncreasePerHit: [
          { value: "4%", colspan: 4 },
          { value: "7%", colspan: 5 },
          { value: "10%", colspan: 1 }
        ],
        stackCap: [
          { value: 2, colspan: 1 },
          { value: 3, colspan: 1 },
          { value: 4, colspan: 1 },
          { value: 5, colspan: 2 },
          { value: 6, colspan: 1 },
          { value: 7, colspan: 1 },
          { value: 8, colspan: 1 },
          { value: 9, colspan: 2 }
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Reincarnation",
      description:
        "When the user dies, they have a chance to revive at 1 HP, at the end of the turn they were killed.",
      levels: {
        total: 10,
        chance: [
          "5%",
          "6%",
          "7%",
          "8%",
          "11%",
          "12%",
          "13%",
          "14%",
          "15%",
          "20%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Seppuku",
      description:
        "Kills the user. Restores all party members' HP. Attempts to revive dead party members. The instant death inflicted on the user cannot be prevented.",
      levels: {
        total: 6,
        speedModifier: "40%",
        tpCost: [{ value: 15, colspan: 5 }, { value: 25, colspan: 1 }],
        healingPower: ["100%", "115%", "130%", "145%", "160%", "250%"],
        reviveChance: ["34%", "38%", "42%", "46%", "50%", "67%"]
      },
      bodyPartsUsed: "Arms",
      type: "Heal",
      requeriments: null
    }
  ],
  master: [
    {
      name: "5-Ring Sword",
      description:
        "Deals multiple instances of melee STR-based damage to one enemy. The element is based on the user's equipped weapon, and any imbues they have. If the user has a subweapon equipped, the skill's maximum hits is increased, and every other attack will be the element of the user's subweapon, instead of cut, instead.",
      levels: {
        total: 10,
        speedModifier: "70%",
        accuracyModifier: "-7%",
        subweaponHitsModifier: "2x",
        maximumHits: [{ value: 4, colspan: 9 }, { value: 5, colspan: 1 }],
        minimumHits: [{ value: 2, colspan: 4 }, { value: 3, colspan: 6 }],
        tpCost: [
          { value: 15, colspan: 4 },
          { value: 22, colspan: 5 },
          { value: 30, colspan: 1 }
        ],
        damagePerHit: [
          { value: "61%", colspan: 1 },
          { value: "63%", colspan: 1 },
          { value: "65%", colspan: 1 },
          { value: "67%", colspan: 2 },
          { value: "69%", colspan: 1 },
          { value: "71%", colspan: 1 },
          { value: "73%", colspan: 1 },
          { value: "75%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Twin Swallows",
        level: 4
      }
    },
    {
      name: "Shot Command",
      description:
        "Targets one row of party members. For one turn, when that row of party members is attacked, all party members who have a bow or gun equipped will counterattack the source of damage. Does not activate on enemy counterattacks.",
      levels: {
        total: 6,
        speedModifier: "200%",
        tpCost: [{ value: 7, colspan: 5 }, { value: 12, colspan: 1 }],
        damage: ["125%", "133%", "141%", "149%", "157%", "200%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Blitz Command",
        level: 3
      }
    },
    {
      name: "Warrior Might",
      description:
        "For one turn, the user will chase all attacks made by all party members. Warrior Might causes the user to lose HP for each chase made. This HP loss can kill the user. Each action will only be chased once. Warrior Might does not chase Link skills, other Chase skills, or counterattack skills.",
      levels: {
        total: 10,
        tpCost: [
          { value: 10, colspan: 4 },
          { value: 15, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        hpCostPerChase: [
          { value: 45, colspan: 4 },
          { value: 55, colspan: 5 },
          { value: 70, colspan: 1 }
        ],
        damage: [
          "100%",
          "103%",
          "106%",
          "109%",
          "119%",
          "122%",
          "125%",
          "128%",
          "131%",
          "150%"
        ]
      },
      bodyPartsUsed: "Legs",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Shot Command",
        level: 2
      }
    },
    {
      name: "Curse Strike",
      description:
        "Deals melee STR-based bash damage to one enemy. Attempts to inflict curse on and bind the arms of the target.",
      levels: {
        total: 8,
        speedModifier: "80%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 9, colspan: 3 },
          { value: 13, colspan: 4 },
          { value: 18, colspan: 1 }
        ],
        baseInflictChance: [
          { value: "25%", colspan: 3 },
          { value: "32%", colspan: 4 },
          { value: "40%", colspan: 1 }
        ],
        damage: ["220%", "230%", "240%", "270%", "280%", "290%", "300%", "350%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Bloody Lance",
        level: 2
      }
    },
    {
      name: "Execution",
      description:
        "When any enemy or party member is attacked while they are below a certain percentage of their max HP, the user has a chance to, unconditionally, instantly kill them. The instant death cannot be prevented. Certain enemies are immune to Execution.",
      levels: {
        total: 4,
        chance: ["25%", "30%", "35%", "60%"],
        percentageMaxHpThreshold: ["5%", "7%", "9%", "15%"]
      },
      bodyPartsUsed: null,
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Curse Strike",
        level: 3
      }
    },
    {
      name: "Swift Justice",
      description:
        "Increases one party member's physical attack and action speed, but decreases their physical defense, for a set amount of turns",
      levels: {
        total: 6,
        speedModifier: "50%",
        defenseDecrease: "50%",
        duration: 4,
        tpCost: [{ value: 10, colspan: 5 }, { value: 16, colspan: 1 }],
        attackIncrease: ["20%", "22%", "25%", "27%", "30%", "40%"],
        speedMultiplier: ["3.5x", "4.25x", "5x", "5.75x", "6.5x", "10x"]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Reincarnation",
        level: 2
      }
    }
  ]
};

export default shogun;
