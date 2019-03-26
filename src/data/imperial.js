const imperial = {
  name: "Imperial",
  force: {
    boost: {
      name: "Ignition",
      description:
        "For 3 turns, stops the user from entering the Overheat state. Does not dispel the Overheat state.",
      bodyPartsUsed: null,
      levels: null
    },
    break: {
      name: "Conversion",
      description:
        "Restores the user's TP. Can overheal the user's TP, without a limit. The overheal is removed at the end of battle, or when the user dies.",
      bodyPartsUsed: "Head",
      levels: {
        total: 3,
        healingPower: ["300%", "550%", "800%"]
      }
    }
  },
  novice: [
    {
      name: "Sharp Edge",
      description:
        "Starter skill. Deals melee STR-based cut damage to one enemy. If the user is in the Overheat state, reduces the Overheat state's duration.",
      levels: {
        total: 4,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        overheatDurationDecrease: 1,
        tpCost: [{ value: 5, colspan: 3 }, { value: 7, colspan: 1 }],
        damage: ["120%", "130%", "140%", "180%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: null,
        level: null
      }
    },
    {
      name: "Natural Edge",
      description:
        "Starter skill. Deals melee STR-based cut damage to one enemy.",
      levels: {
        total: 8,
        speedModifier: "80%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 7, colspan: 1 }
        ],
        damage: ["155%", "161%", "167%", "187%", "193%", "199%", "205%", "240%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: null,
        level: null
      }
    },
    {
      name: "Blood Edge",
      description:
        "Combo skill; can only be used if a starter skill was used on the previous turn. Deals melee STR-based cut damage to one enemy. Restores the user's HP, for a percentage of the damage dealt.",
      levels: {
        total: 8,
        speedModifier: "150%",
        accuracyModifier: "+10%",
        percentageDamageAsHpRestore: "35%",
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 7, colspan: 4 },
          { value: 12, colspan: 1 }
        ],
        damage: ["200%", "208%", "216%", "246%", "254%", "262%", "270%", "320%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: [
          { name: "Sharp Edge", level: 2 },
          { name: "Natural Edge", level: 2 }
        ]
      }
    },
    {
      name: "Heavy Guard",
      description:
        "Increases one party member's defense, but makes them act last, for a set number of turns.",
      levels: {
        total: 6,
        speedModifier: "250%",
        duration: 4,
        tpCost: [{ value: 3, colspan: 5 }, { value: 7, colspan: 1 }],
        defenseIncrease: ["15%", "18%", "21%", "24%", "27%", "40%"]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Assault Drive",
      description:
        "Only usable if the user is not in the Overheat state. Deals melee STR-based cut damage to one enemy. Causes the user to enter the Overheat state. Increases all damage taken by the user until activation.",
      levels: {
        total: 10,
        speedModifier: "25%",
        accuracyModifier: "0%",
        incomingDamageIncrease: "2x",
        overheatDuration: 8,
        tpCost: [
          { value: 20, colspan: 4 },
          { value: 30, colspan: 5 },
          { value: 40, colspan: 1 }
        ],
        damage: [
          "450%",
          "470%",
          "490%",
          "510%",
          "610%",
          "640%",
          "670%",
          "700%",
          "730%",
          "900%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: null,
        level: null
      }
    },
    {
      name: "Heat Sink",
      description:
        "Only usable if the user is in the Overheat state. Reduces the Overheat state's duration.",
      levels: {
        total: 8,
        speedModifier: "80%",
        overheatDurationDecrease: [
          { value: 2, colspan: 3 },
          { value: 3, colspan: 3 },
          { value: 4, colspan: 2 }
        ],
        tpCost: [10, 6, 3, 15, 10, 7, 25, 15]
      },
      bodyPartsUsed: "Arms",
      type: "Support",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Assault Drive",
        level: 3
      }
    },
    {
      name: "Heat Shield",
      description:
        "Reduces all damage the user takes when they are in the Overheat state.",
      levels: {
        total: 6,
        damageReduction: ["7%", "9%", "11%", "13%", "15%", "20%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Assault Drive",
        level: 3
      }
    },
    {
      name: "Avenger",
      description: "When any party member dies, restores HP to the user.",
      levels: {
        total: 4,
        staticHpRestore: [30, 40, 50, 100],
        percentageMaxHpRestore: ["10%", "15%", "20%", "40%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
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
      name: "Massive Edge",
      description:
        "Starter skill. Deals melee STR-based cut damage to one enemy, with splash damage.",
      levels: {
        total: 8,
        speedModifier: "60%",
        accuracyModifier: "-5%",
        splashDamage: "50%",
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 16, colspan: 1 }
        ],
        damage: ["170%", "177%", "184%", "209%", "216%", "223%", "230%", "280%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Blood Edge",
        level: 3
      }
    },
    {
      name: "Cool Edge",
      description:
        "Connecting skill; can only be used if a starter skill was used on the previous turn. Deals melee STR-based cut damage to one enemy. If the user is in the Overheat state, reduces the Overheat state's duration.",
      levels: {
        total: 4,
        speedModifier: "80%",
        accuracyModifier: "+5%",
        overheatDurationDecrease: 2,
        tpCost: [{ value: 9, colspan: 3 }, { value: 14, colspan: 1 }],
        damage: ["200%", "215%", "230%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Massive Edge",
        level: 2
      }
    },
    {
      name: "Trip Edge",
      description:
        "Starter skill. Deals melee STR-based cut damage to one enemy. Attempts to bind the target's legs.",
      levels: {
        total: 8,
        speedModifier: "80%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 9, colspan: 4 },
          { value: 12, colspan: 1 }
        ],
        baseLegBindChance: [
          { value: "30%", colspan: 3 },
          { value: "40%", colspan: 4 },
          { value: "50%", colspan: 1 }
        ],
        damage: ["160%", "167%", "174%", "199%", "206%", "213%", "220%", "265%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Blood Edge",
        level: 3
      }
    },
    {
      name: "Impulse Edge",
      description:
        "Combo skill; can only be used if a starter skill was used on the previous turn. Deals melee STR-based cut damage to one enemy. Restores the user's TP.",
      levels: {
        total: 10,
        speedModifier: "50%",
        accuracyModifier: "-5%",
        tpCost: 5,
        tpRestore: [
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
        ],
        damage: [10, 11, 12, 13, 18, 19, 20, 21, 22, 30]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Edge",
        skill: "Trip Edge",
        level: 2
      }
    },
    {
      name: "Intercooler",
      description:
        "Increases the damage of Drive skills. Reduces the duration of Overheat states.",
      levels: {
        total: 10,
        overheatDurationReduction: [
          { value: 0, colspan: 4 },
          { value: -1, colspan: 5 },
          { value: -2, colspan: 1 }
        ],
        damageIncrease: [
          { value: "3%", colspan: 1 },
          { value: "4%", colspan: 1 },
          { value: "5%", colspan: 1 },
          { value: "6%", colspan: 2 },
          { value: "7%", colspan: 1 },
          { value: "8%", colspan: 1 },
          { value: "9%", colspan: 1 },
          { value: "10%", colspan: 1 }
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Heat Sink", level: 1 },
          { name: "Heat Shield", level: 1 }
        ]
      }
    },
    {
      name: "Flame Drive",
      description:
        "Only usable if the user is not in the Overheat state. Deals melee STR-based cut + fire damage to one enemy. Causes the user to enter the Overheat state. Increases all damage taken by the user until activation.",
      levels: {
        total: 8,
        speedModifier: "25%",
        accuracyModifier: "0%",
        incomingDamageIncrease: "2x",
        overheatDuration: 9,
        tpCost: [
          { value: 25, colspan: 3 },
          { value: 37, colspan: 4 },
          { value: 50, colspan: 1 }
        ],
        damage: ["335%", "355%", "375%", "445%", "475%", "505%", "535%", "670%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Intercooler",
        level: 3
      }
    },
    {
      name: "Freeze Drive",
      description:
        "Only usable if the user is not in the Overheat state. Deals melee STR-based cut + ice damage to one enemy. Causes the user to enter the Overheat state. Increases all damage taken by the user until activation.",
      levels: {
        total: 8,
        speedModifier: "25%",
        accuracyModifier: "0%",
        incomingDamageIncrease: "2x",
        overheatDuration: 9,
        tpCost: [
          { value: 25, colspan: 3 },
          { value: 37, colspan: 4 },
          { value: 50, colspan: 1 }
        ],
        damage: ["335%", "355%", "375%", "445%", "475%", "505%", "535%", "670%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Intercooler",
        level: 3
      }
    },
    {
      name: "Shock Drive",
      description:
        "Only usable if the user is not in the Overheat state. Deals melee STR-based cut + volt damage to one enemy. Causes the user to enter the Overheat state. Increases all damage taken by the user until activation.",
      levels: {
        total: 8,
        speedModifier: "25%",
        accuracyModifier: "0%",
        incomingDamageIncrease: "2x",
        overheatDuration: 9,
        tpCost: [
          { value: 25, colspan: 3 },
          { value: 37, colspan: 4 },
          { value: 50, colspan: 1 }
        ],
        damage: ["335%", "355%", "375%", "445%", "475%", "505%", "535%", "670%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Intercooler",
        level: 3
      }
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
      name: "Charge Edge",
      description:
        "Final skill; only usable if a starter skill or combo skill was used last turn. Deals melee STR-based cut damage to one enemy. Until the end of the next turn, increases damage dealt by the user.",
      levels: {
        total: 6,
        speedModifier: "30%",
        accuracyModifier: "0%",
        tpCost: [{ value: 20, colspan: 5 }, { value: 40, colspan: 1 }],
        damageMultiplier: [
          { value: "1.5x", colspan: 5 },
          { value: "2x", colspan: 1 }
        ],
        damage: ["145%", "165%", "185%", "205%", "225%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Cool Edge",
        level: 2
      }
    },
    {
      name: "Force Edge",
      description:
        "Final skill; only usable if a starter skill or combo skill was used last turn. Deals melee STR-based cut damage to one enemy. Restores the user's Force.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 14, colspan: 5 }, { value: 21, colspan: 1 }],
        forceRestore: [
          { value: "+10%", colspan: 5 },
          { value: "+20%", colspan: 1 }
        ],
        damage: ["220%", "235%", "250%", "265%", "280%", "350%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: "Impulse Blade",
        level: 2
      }
    },
    {
      name: "Hp Up",
      description: "Increases the user's maximum HP.",
      levels: {
        total: 8,
        maximumHpIncrease: ["5%", "6%", "7%", "11%", "12%", "13%", "14%", "20%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Accel Drive",
      description:
        "Only usable if the user is not in the Overheat state. Deals melee STR-based cut + almighty damage to one enemy. Causes the user to enter the Overheat state. Increases all damage taken by the user until activation.",
      levels: {
        total: 10,
        speedModifier: "25%",
        incomingDamageIncrease: "2x",
        overheatDuration: 10,
        tpCost: [
          { value: 30, colspan: 4 },
          { value: 45, colspan: 5 },
          { value: 60, colspan: 1 }
        ],
        damage: [
          "600%",
          "630%",
          "660%",
          "690%",
          "820%",
          "855%",
          "890%",
          "925%",
          "960%",
          "1200%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Drive Blade",
        skill: [
          { name: "Flame Drive", level: 1 },
          { name: "Freeze Drive", level: 1 },
          { name: "Shock Drive", level: 1 }
        ]
      }
    },
    {
      name: "Absorvber",
      description: "Restores the user's TP when they hit an enemy's weakness.",
      levels: {
        total: 4,
        percentageMaxTpRestore: [
          { value: "0%", colspan: 3 },
          { value: "1%", colspan: 1 }
        ],
        staticTpRestore: [2, 3, 4, 5]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Elemental Attack Up",
      description: "Increases elemental damage dealt by the user.",
      levels: {
        total: 8,
        elementalDamageIncrease: [
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
    }
  ]
};
export default imperial;
