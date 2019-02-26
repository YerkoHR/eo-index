const survivalist = {
  name: "Survivalist",
  force: {
    boost: {
      name: "Illusory Formation",
      description:
        "For 3 turns, increases the party's evasion and action speed.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        speedMoltiplier: "3.5x",
        evasionIncrease: "+20%"
      }
    },
    break: {
      name: "Mirage Arrow",
      description:
        "Deals ranged STR-based stab damage to one enemy. Reduces the target's accuracy and action speed.",
      bodyPartsUsed: "Arms",
      levels: {
        total: 3,
        speedMoltiplier: "0.4x",
        evasionDecrease: "-35%",
        damage: ["500%", "1200%", "1800%"]
      }
    }
  },
  novice: [
    {
      name: "Power Shot",
      description:
        "Deals ranged STR-based stab damage to one enemy, with line-piercing effect.",
      levels: {
        total: 8,
        speedModifier: "70%",
        accuracyModifier: "-5%",
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 9, colspan: 4 },
          { value: 14, colspan: 1 }
        ],
        damage: ["240%", "250%", "260%", "300%", "310%", "320%", "330%", "400%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Bow",
        skill: null,
        level: null
      }
    },
    {
      name: "Flame Arrow",
      description: "Deals ranged STR-based stab + fire damage to one enemy.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 5, colspan: 3 },
          { value: 9, colspan: 4 },
          { value: 13, colspan: 1 }
        ],
        damage: ["230%", "241%", "252%", "287%", "298%", "309%", "320%", "380%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Bow",
        skill: "Power Shot",
        level: 3
      }
    },
    {
      name: "Blind Arrow",
      description:
        "Deals ranged STR-based stab damage to one enemy. Attempts to inflict blind on the target.",
      levels: {
        total: 8,
        speedModifier: "80%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 7, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        baseBlindChance: [
          { value: "40%", colspan: 3 },
          { value: "50%", colspan: 4 },
          { value: "65%", colspan: 1 }
        ],
        damage: ["150%", "158%", "166%", "186%", "194%", "202%", "210%", "240%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Bow",
        skill: null,
        level: null
      }
    },
    {
      name: "Chain Dance",
      description:
        "Increases the user's evasion and chance of being targeted (enmity) for one turn.",
      levels: {
        total: 10,
        tpCost: [
          { value: 3, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 9, colspan: 1 }
        ],
        evasionIncrease: [
          { value: "+20%", colspan: 4 },
          { value: "+27%", colspan: 5 },
          { value: "+35%", colspan: 1 }
        ],
        enmityIncrease: [
          "+25%",
          "+26.5%",
          "+28%",
          "+29.5%",
          "+35%",
          "+37%",
          "+39%",
          "+41%",
          "+43%",
          "+50%"
        ]
      },
      bodyPartsUsed: "Legs",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Blind Arrow",
        level: 3
      }
    },
    {
      name: "Safe Passage",
      description:
        "For a set amount of steps in the Labyrinth, nullifies damage tiles and muddy tiles. Reduces damage taken from certain FOE field attacks.",
      levels: {
        total: 6,
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        duration: [60, 70, 80, 90, 100, 255]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: null
    },
    {
      name: "Risk Perception",
      description: "Gives the user a chance to nullify surprise attacks.",
      levels: {
        total: 6,
        chance: ["35%", "41%", "47%", "53%", "59%", "75%"]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: null
    },
    {
      name: "Resuscitate",
      description:
        "Only usable in the Labyrinth. Restores one party member's HP. At higher levels, can also revive dead party members.",
      levels: {
        total: 6,
        tpCost: [{ value: 2, colspan: 5 }, { value: 3, colspan: 1 }],
        canRevive: [{ value: "No", colspan: 3 }, { value: "Yes", colspan: 3 }],
        reviveRestore: [
          { value: 0, colspan: 3 },
          { value: 1, colspan: 1 },
          { value: 50, colspan: 1 },
          { value: 150, colspan: 1 }
        ],
        normalRestore: [50, 60, 70, 80, 90, 200]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Sorting Skill",
      description:
        "Increases max inventory space when the user is in the party.",
      levels: {
        total: 10,
        addedCapacity: [
          "+4",
          "+5",
          "+6",
          "+7",
          "+10",
          "+11",
          "+12",
          "+13",
          "+14",
          "+20"
        ]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: {
        weapon: null,
        skill: "Resuscitate",
        level: 3
      }
    },
    {
      name: "Natural Instinct",
      description: "Find additional material when taking, chopping, or mining.",
      levels: null,
      bodyPartsUsed: null,
      type: "Field",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Flank Shot",
      description: "Deals ranged STR-based stab damage to one row of enemies.",
      levels: {
        total: 8,
        speedModifier: "75%",
        accuracyModifier: "-5%",
        tpCost: [
          { value: 9, colspan: 3 },
          { value: 13, colspan: 4 },
          { value: 18, colspan: 1 }
        ],
        damage: ["215%", "223%", "231%", "266%", "274%", "282%", "290%", "350%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Bow",
        skill: "Flame Arrow",
        level: 3
      }
    },
    {
      name: "Finishing Shot",
      description:
        "When the user attacks an enemy whose current HP percentage is below a certain threshold, they will add an extra follow-up attack.",
      levels: {
        total: 8,
        currentHpPercentageThreshold: [
          "10%",
          "12%",
          "14%",
          "16%",
          "18%",
          "20%",
          "22%",
          "30%"
        ],
        damage: ["70%", "73%", "76%", "79%", "82%", "85%", "88%", "100%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Flank Shot",
        level: 3
      }
    },
    {
      name: "Multi-Shot",
      description:
        "Deals 2 instances of ranged STR-based stab damage to one enemy.",
      levels: {
        total: 10,
        speedModifier: "85%",
        accuracyModifier: "-5%",
        tpCost: [
          { value: 8, colspan: 4 },
          { value: 13, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        damagePerHit: [
          "150%",
          "155%",
          "160%",
          "165%",
          "190%",
          "195%",
          "200%",
          "205%",
          "210%",
          "265%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Bow",
        skill: "Flame Arrow",
        level: 3
      }
    },
    {
      name: "Drop Shot",
      description:
        "Deals ranged STR-based stab damage to one enemy. Damage is increased when attacking a target in the back row.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        backRowDamageMultiplier: "3x",
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 9, colspan: 4 },
          { value: 13, colspan: 1 }
        ],
        damage: ["180%", "188%", "196%", "221%", "231%", "241%", "251%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Bow",
        skill: "Multi-Shot",
        level: 3
      }
    },
    {
      name: "Trickery",
      description:
        "Reduces one row of enemies' accuracy for a set number of turns.",
      levels: {
        total: 10,
        speedModifier: "85%",
        duration: [
          { value: 4, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 6, colspan: 1 }
        ],
        tpCost: [
          { value: 6, colspan: 4 },
          { value: 11, colspan: 5 },
          { value: 17, colspan: 1 }
        ],
        accuracyDecrease: [
          { value: "-9.5%", colspan: 1 },
          { value: "-11%", colspan: 1 },
          { value: "-12.5%", colspan: 1 },
          { value: "-14%", colspan: 2 },
          { value: "-15.5%", colspan: 1 },
          { value: "-17%", colspan: 1 },
          { value: "-18.5%", colspan: 1 },
          { value: "-20%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Legs",
      type: "Debuff",
      requeriments: {
        weapon: null,
        skill: "Chain Dance",
        level: 2
      }
    },
    {
      name: "Cautious Steps",
      description:
        "Only usable in the Labyrinth. Reduces the encounter rate for a set number of steps.",
      levels: {
        total: 6,
        tpCost: [{ value: 8, colspan: 5 }, { value: 14, colspan: 1 }],
        dangerMultiplier: ["0.5x", "0.45x", "0.4x", "0.35x", "0.3x", "0.15x"],
        duration: [80, 100, 120, 140, 160, 255]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: {
        weapon: null,
        skill: "Risk Perception",
        level: 2
      }
    },
    {
      name: "Efficiency",
      description:
        "For 6 turns, increases the amount of HP restored by Medica items used by the user, and increases their target type to row-target.",
      levels: {
        total: 4,
        speedModifier: "90%",
        tpCost: [{ value: 5, colspan: 3 }, { value: 10, colspan: 1 }],
        restoreMultiplier: ["1.05x", "1.15x", "1.25x", "2x"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: null
    },
    {
      name: "Speed Up",
      description:
        "Unlike most other action speed increases, Speed Up applies its speed boost by adding to the user's equipment speed total.",
      levels: {
        total: 8,
        speedIncrease: ["+6", "+8", "+10", "+16", "+18", "+20", "+22", "+30"],
        accuracyAndEvasionIncrease: [
          "+2.5%",
          "+3.1%",
          "+3.7%",
          "+5.7%",
          "+6.3%",
          "+6.9%",
          "+7.5%",
          "+10%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Quick Step",
      description:
        "Targets one party member. That party member will act first on this turn.",
      levels: {
        total: 4,
        tpCost: [35, 30, 25, 15]
      },
      bodyPartsUsed: "Legs",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Speed Up",
        level: 2
      }
    }
  ],
  master: [
    {
      name: "Disabling Shot",
      description:
        "When the user attacks with a bow skill, they will attempt to bind the legs of hit targets.",
      levels: {
        total: 8,
        baseLegBlindChance: [
          "7%",
          "9%",
          "11%",
          "13%",
          "15%",
          "17%",
          "19%",
          "25%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Finishing Shot",
        level: 1
      }
    },
    {
      name: "Sagitarius Shot",
      description:
        "Two turns after use, deals ranged STR-based stab damage to one enemy. Attempts to stun the target. If the user dies, becomes afflicted with panic or sleep before Sagittarius Shot goes off, Sagittarius Shot will fail.",
      levels: {
        total: 10,
        accuracyModifier: "+30%",
        baseStunChance: [
          { value: "40%", colspan: 4 },
          { value: "55%", colspan: 5 },
          { value: "70%", colspan: 1 }
        ],
        tpCost: [
          { value: 15, colspan: 4 },
          { value: 20, colspan: 5 },
          { value: 27, colspan: 1 }
        ],
        damage: [
          "500%",
          "520%",
          "540%",
          "560%",
          "620%",
          "640%",
          "660%",
          "680%",
          "700%",
          "800%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Bow",
        skill: "Drop Shot",
        level: 3
      }
    },
    {
      name: "Hazy Arrow",
      description:
        "Only usable if the user evaded an attack last turn. Deals ranged STR-based stab damage to one enemy. Cannot miss.",
      levels: {
        total: 6,
        speedModifier: "200%",
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        damage: ["600%", "660%", " 720%", "780%", "840%", "1200%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Bow",
        skill: "Trickery",
        level: 3
      }
    },
    {
      name: "Nature's Blessing",
      description:
        "Gives the user a chance to find more rare materials at gathering points.",
      levels: {
        total: 4,
        chance: ["up", "up", "up", "up"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Cautious Steps",
        level: 2
      }
    },
    {
      name: "Scapegoat",
      description:
        "Targets one party member. That party member will redirect a set number of instances of damage from any party member to themself. Damage taken from redirected attacks is reduced. Scapegoat will fail if the targeted party member's legs are bound.",
      levels: {
        total: 6,
        tpCost: [
          { value: 7, colspan: 2 },
          { value: 12, colspan: 3 },
          { value: 18, colspan: 1 }
        ],
        maxRedirectedAttacks: [
          { value: 1, colspan: 2 },
          { value: 2, colspan: 3 },
          { value: 3, colspan: 1 }
        ],
        redirectedDamageReduction: ["5%", "7%", "13%", "15%", "17%", "25%"]
      },
      bodyPartsUsed: "Legs",
      type: "Support",
      requeriments: null
    },
    {
      name: "Sneak Attack",
      description:
        "For a set amount of steps in the Labyrinth, increases the chance of preemptive attacks.",
      levels: {
        total: 6,
        tpCost: [{ value: 10, colspan: 5 }, { value: 15, colspan: 1 }],
        chanceIncrease: ["+6%", "+7%", "+8%", "+9%", "+10%", "+20%"],
        duration: [60, 70, 80, 90, 100, 255]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: null
    }
  ]
};

export default survivalist;
