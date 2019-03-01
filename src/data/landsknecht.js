const landsknecht = {
  name: "Landsknecht",
  force: {
    boost: {
      name: "Trinity",
      description:
        "For 3 turns, increases the user's damage dealt, accuracy, and action speed.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        damageIncrease: "40%",
        accuracyIncrease: "+50%",
        speedMultiplier: "3x"
      }
    },
    break: {
      name: "Full Charge",
      description:
        "For one turn, the user becomes immune to any actions directed against them by enemies. Until the end of the next turn, the user's damage dealt and action speed are increased.",
      bodyPartsUsed: "Arms",
      levels: {
        total: 3,
        damageMultiplier: "3.3x",
        speedMultiplier: "40x"
      }
    }
  },
  novice: [
    {
      name: "Proficiency",
      description:
        "After the user attacks an enemy, for the rest of the turn, all further attacks toward that enemy will have their damage and accuracy increased.",
      levels: {
        total: 4,
        damageIncrease: ["3%", "4%", "5%", "10%"],
        accuracyIncrease: ["+5%", "+6%", "+7%", "+10%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Vanguard",
      description:
        "Increases the user's physical attack and action speed, but decreases their physical defense, for a set amount of turns.",
      levels: {
        total: 6,
        speedModifier: "100%",
        defenseDecrease: "50%",
        duration: 6,
        tpCost: [{ value: 3, colspan: 5 }, { value: 7, colspan: 1 }],
        attackIncrease: ["10%", "12%", "15%", "17%", "20%", "30%"],
        speedMultiplier: ["4x", "5x", "6x", "7x", "8x", "20x"]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Falcon Slash",
      description:
        "Deals melee STR-based damage to one enemy at the start of the turn. The element is determined by the user's equipped weapon.",
      levels: {
        total: 8,
        accuracyModifier: "+20%",
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 7, colspan: 4 },
          { value: 15, colspan: 1 }
        ],
        damage: ["150%", "155%", "160%", "195%", "200%", "205%", "210%", "280%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Rapier",
        skill: null,
        level: null
      }
    },
    {
      name: "Blazing Link",
      description:
        "Deals melee STR-based cut/stab + fire damage to one enemy. If the target is attacked again, the user will follow up with another attack of the same element. The chance of following up decreases with each activation.",
      levels: {
        total: 10,
        speedModifier: "125%",
        accuracyModifier: "0%",
        baseFollowUpChance: "100%",
        maximumFollowUps: 4,
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 14, colspan: 1 }
        ],
        chanceDecrease: [
          { value: "-30%", colspan: 4 },
          { value: "-25%", colspan: 5 },
          { value: "-20%", colspan: 1 }
        ],
        followUpDamage: [
          { value: "30%", colspan: 1 },
          { value: "31%", colspan: 1 },
          { value: "33%", colspan: 1 },
          { value: "34%", colspan: 2 },
          { value: "36%", colspan: 1 },
          { value: "37%", colspan: 1 },
          { value: "39%", colspan: 1 },
          { value: "40%", colspan: 2 }
        ],
        damage: [
          { value: "80%", colspan: 1 },
          { value: "85%", colspan: 1 },
          { value: "90%", colspan: 1 },
          { value: "95%", colspan: 2 },
          { value: "100%", colspan: 1 },
          { value: "105%", colspan: 1 },
          { value: "110%", colspan: 1 },
          { value: "115%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Rapier",
        skill: null,
        level: null
      }
    },
    {
      name: "Freezing Link",
      description:
        "Deals melee STR-based cut/stab + ice damage to one enemy. If the target is attacked again, the user will follow up with another attack of the same element. The chance of following up decreases with each activation.",
      levels: {
        total: 10,
        speedModifier: "125%",
        accuracyModifier: "0%",
        baseFollowUpChance: "100%",
        maximumFollowUps: 4,
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 14, colspan: 1 }
        ],
        chanceDecrease: [
          { value: "-30%", colspan: 4 },
          { value: "-25%", colspan: 5 },
          { value: "-20%", colspan: 1 }
        ],
        followUpDamage: [
          { value: "30%", colspan: 1 },
          { value: "31%", colspan: 1 },
          { value: "33%", colspan: 1 },
          { value: "34%", colspan: 2 },
          { value: "36%", colspan: 1 },
          { value: "37%", colspan: 1 },
          { value: "39%", colspan: 1 },
          { value: "40%", colspan: 2 }
        ],
        damage: [
          { value: "80%", colspan: 1 },
          { value: "85%", colspan: 1 },
          { value: "90%", colspan: 1 },
          { value: "95%", colspan: 2 },
          { value: "100%", colspan: 1 },
          { value: "105%", colspan: 1 },
          { value: "110%", colspan: 1 },
          { value: "115%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Rapier",
        skill: null,
        level: null
      }
    },
    {
      name: "Electrical Link",
      description:
        "Deals melee STR-based cut/stab + volt damage to one enemy. If the target is attacked again, the user will follow up with another attack of the same element. The chance of following up decreases with each activation.",
      levels: {
        total: 10,
        speedModifier: "125%",
        accuracyModifier: "0%",
        baseFollowUpChance: "100%",
        maximumFollowUps: 4,
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 14, colspan: 1 }
        ],
        chanceDecrease: [
          { value: "-30%", colspan: 4 },
          { value: "-25%", colspan: 5 },
          { value: "-20%", colspan: 1 }
        ],
        followUpDamage: [
          { value: "30%", colspan: 1 },
          { value: "31%", colspan: 1 },
          { value: "33%", colspan: 1 },
          { value: "34%", colspan: 2 },
          { value: "36%", colspan: 1 },
          { value: "37%", colspan: 1 },
          { value: "39%", colspan: 1 },
          { value: "40%", colspan: 2 }
        ],
        damage: [
          { value: "80%", colspan: 1 },
          { value: "85%", colspan: 1 },
          { value: "90%", colspan: 1 },
          { value: "95%", colspan: 2 },
          { value: "100%", colspan: 1 },
          { value: "105%", colspan: 1 },
          { value: "110%", colspan: 1 },
          { value: "115%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Rapier",
        skill: null,
        level: null
      }
    },
    {
      name: "Power Break",
      description:
        "Deals melee STR-based bash damage to one enemy. Reduces the target's attack for a set amount of turns. Uses triple the user's equipped shield's DEF value as a replacement for ATK.",
      levels: {
        total: 6,
        speedModifier: "50%",
        baseAccuracy: "92%",
        duration: 4,
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        attackReduction: ["7%", "8%", "9%", "10%", "11%", "15%"],
        damage: ["150%", "160%", "170%", "180%", "190%", "240%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Shield",
        skill: null,
        level: null
      }
    },
    {
      name: "Physical Defense Up",
      description: "Reduces physical damage to the user.",
      levels: {
        total: 8,
        incomingDamageReduction: [
          "4%",
          "5%",
          "6%",
          "9%",
          "10%",
          "11%",
          "12%",
          "15%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Mine",
      description: "Increases material yield from mining in the labyrinth.",
      levels: null,
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Double Strike",
      description:
        "Deals two instances of melee STR-based damage to one enemy. The element is determined by the user's equipped weapon.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 16, colspan: 1 }
        ],
        damagePerHit: [
          "140%",
          "145%",
          "150%",
          "165%",
          "170%",
          "175%",
          "180%",
          "210%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Rapier",
        skill: "Falcon Slash",
        level: 2
      }
    },
    {
      name: "Spiral Slice",
      description:
        "Deals melee STR-based cut damage to one enemy, with splash damage.",
      levels: {
        total: 8,
        speedModifier: "80%",
        accuracyModifier: "-5%",
        splashDamage: "50%",
        tpCost: [
          { value: 10, colspan: 3 },
          { value: 15, colspan: 4 },
          { value: 20, colspan: 1 }
        ],
        damage: ["240%", "248%", "256%", "286%", "294%", "302%", "310%", "360%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword",
        skill: "Double Strike",
        level: 3
      }
    },
    {
      name: "Penetrate",
      description:
        "Deals melee STR-based stab damage to one enemy, with line-piercing effect.",
      levels: {
        total: 8,
        speedModifier: "125%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 10, colspan: 4 },
          { value: 14, colspan: 1 }
        ],
        damage: ["255%", "264%", "273%", "303%", "312%", "321%", "330%", "385%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Rapier",
        skill: "Double Strike",
        level: 3
      }
    },
    {
      name: "Improved Link",
      description:
        "Increases the number of follow-up attacks from Link skills, as well as the chance of follow-ups, for a set amount of turns. Each individual action can only activate 4 follow - ups at most.",
      levels: {
        total: 4,
        speedModifier: "80%",
        duration: 4,
        tpCost: [{ value: 7, colspan: 3 }, { value: 12, colspan: 1 }],
        addedFollowUps: [{ value: 3, colspan: 3 }, { value: 5, colspan: 1 }]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Blazing Link", level: 3 },
          { name: "Freezing Link", level: 3 },
          { name: "Electric Link", level: 3 }
        ]
      }
    },
    {
      name: "Smash Link",
      description:
        "Link follow-ups can deal critical hits. Critical hits deal 150% of the attack's normal damage. If a multi-hit attack triggers multiple Link follow-ups, as soon as one Link follow - up crits, all remaining Link follow - ups for that attack will be crits too.",
      levels: {
        total: 10,
        chance: [
          "7%",
          "8%",
          "9%",
          "10%",
          "14%",
          "15%",
          "16%",
          "17%",
          "18%",
          "25%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Improved Link",
        level: 1
      }
    },
    {
      name: "Guard Break",
      description:
        "Deals melee STR-based bash damage to one enemy. Reduces the target's defense for a set amount of turns. Uses triple the user's equipped shield's DEF value as a replacement for ATK.",
      levels: {
        total: 6,
        speedModifier: "50%",
        baseAccuracy: "92%",
        duration: 4,
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        defenseReduction: ["10%", "12%", "14%", "16%", "18%", "25%"],
        damage: ["150%", "160%", "170%", "180%", "190%", "240%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Shield",
        skill: "Power Break",
        level: 2
      }
    },
    {
      name: "Speed Break",
      description:
        "Deals melee STR-based bash damage to one enemy. Reduces the target's evasion and action speed for a set amount of turns. Uses triple the user's equipped shield's DEF value as a replacement for ATK.",
      levels: {
        total: 6,
        speedModifier: "50%",
        duration: 4,
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        speedMultiplier: [
          "0.85x",
          "0.835x",
          "0.80x",
          "0.775x",
          "0.75x",
          "0.50x"
        ],
        baseAccuracy: ["100%", "110%", "125%", "135%", "145%", "170%"],
        evasionDecrease: ["-10%", "-11%", "-12%", "-13%", "-14%", "-20%"],
        damage: ["150%", "158%", "166%", "174%", "182%", "220%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Shield",
        skill: "Guard Break",
        level: 2
      }
    },
    {
      name: "Initiative",
      description:
        "Increases the user's damage and accuracy when they attack before any enemies have acted.",
      levels: {
        total: 4,
        accuracyIncrease: ["+4%", "+5%", "+6%", "+10%"],
        damageIncrease: ["7%", "10%", "13%", "20%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Status Defense Up",
      description: "Increases the user's resistance to all ailments and binds.",
      levels: {
        total: 8,
        resistanceIncrease: [
          "8%",
          "9%",
          "10%",
          "15%",
          "16%",
          "17%",
          "18%",
          "25%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    }
  ],
  master: [
    {
      name: "Sword Tempest",
      description: "Deals melee STR-based cut damage to one enemy.",
      levels: {
        total: 8,
        speedModifier: "50%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 13, colspan: 3 },
          { value: 18, colspan: 4 },
          { value: 24, colspan: 1 }
        ],
        damage: ["350%", "363%", "376%", "426%", "439%", "452%", "465%", "560%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword",
        skill: "Spiral Slice",
        level: 2
      }
    },
    {
      name: "Swift Stab",
      description:
        "Deals multiple instances of melee STR-based stab damage to random enemies.",
      levels: {
        total: 8,
        speedModifier: "200%",
        accuracyModifier: "-10%",
        minimumHits: [{ value: 2, colspan: 7 }, { value: 3, colspan: 1 }],
        maximumHits: [{ value: 3, colspan: 3 }, { value: 4, colspan: 5 }],
        tpCost: [
          { value: 9, colspan: 3 },
          { value: 14, colspan: 4 },
          { value: 21, colspan: 1 }
        ],
        damagePerHit: [
          { value: "135%", colspan: 1 },
          { value: "141%", colspan: 1 },
          { value: "147%", colspan: 2 },
          { value: "153%", colspan: 1 },
          { value: "159%", colspan: 1 },
          { value: "165%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Rapier",
        skill: "Penetrate",
        level: 2
      }
    },
    {
      name: "Link Mastery",
      description:
        "Each time the user performs a Link follow-up attack, the damage of further follow-ups on this turn is increased.",
      levels: {
        total: 10,
        maximumIncrease: "99%",
        damageIncreasePerLink: [
          "+4%",
          "+5%",
          "+6%",
          "+7%",
          "+8%",
          "+9%",
          "+10%",
          "+11%",
          "+12%",
          "+15%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Smash Link",
        level: 2
      }
    },
    {
      name: "Link Finale",
      description:
        "Deals melee STR-based damage to one enemy. The element is determined by the user's equipped weapon. Damage is increased based on the number of Link follow-ups the user performed last turn.",
      levels: {
        total: 6,
        speedModifier: "70%",
        accuracyIncrease: "+10%",
        damageIncreasePerLink: "+30%",
        tpCost: [{ value: 10, colspan: 5 }, { value: 16, colspan: 1 }],
        baseDamage: ["130%", "138%", "146%", "154%", "162%", "200%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Rapier",
        level: 2
      }
    },
    {
      name: "Full Break",
      description:
        "Deals melee STR-based bash damage to one enemy. Damage is increased if the target has any Break skill debuff. Uses triple the user's equipped shield's DEF value as a replacement for ATK. Multiple Break debuffs do not increase the damage further.",
      levels: {
        total: 6,
        speedModifier: "50%",
        baseAccuracy: "85%",
        debuffDamageMultiplier: "2.25x",
        tpCost: [{ value: 10, colspan: 5 }, { value: 18, colspan: 1 }],
        baseDamage: ["160%", "170%", "180%", "190%", "200%", "250%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Shield",
        skill: "Speed Break",
        level: 2
      }
    },
    {
      name: "Single Devotion",
      description:
        "Increases the user's damage based on the number of elements in an attack's damage type.",
      levels: {
        total: 6,
        threeElementsIncrease: [
          { value: "1%", colspan: 5 },
          { value: "2%", colspan: 1 }
        ],
        twoElementsIncrease: [
          { value: "2%", colspan: 1 },
          { value: "3%", colspan: 2 },
          { value: "4%", colspan: 2 },
          { value: "6%", colspan: 1 }
        ],
        oneElementIncrease: ["6%", "8%", "10%", "12%", "14%", "20%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    }
  ]
};

export default landsknecht;
