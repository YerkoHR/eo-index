const ronin = {
  name: "Ronin",
  force: {
    boost: {
      name: "Musou",
      description:
        "For 3 turns, stance durations cannot be decreased, and stances cannot be ended. The user also gains the effect of the level 1 versions of Upper Stance, Clear Stance, and Swift Stance. These effects stack with the effect of the user's current stance.",
      bodyPartsUsed: null,
      levels: null
    },
    break: {
      name: "Issen",
      description:
        "Deals ranged STR-based cut damage to all enemies. Cannot miss. Attempts to instantly kill hit targets. If the target is below an unknown percentage of their max HP, the instant death chance is increased.",
      bodyPartsUsed: "Arms",
      levels: {
        total: 3,
        baseInstantDeathChance: "65%",
        boostedInstantDeathChance: "999%",
        damage: ["4505", "900%", "1300%"]
      }
    }
  },
  novice: [
    {
      name: "Upper Stance",
      description:
        "Increases the user's attack when the Upper Stance state is active. The level of Upper Stance determines the duration of the Upper Stance state. Enables Upper Stance to be automatically activated at the start of battle, if it is the highest-level Stance, and if the user has a katana equipped. If the automatic activation occurs, Upper Stance's duration is increased by 1 turn. If two or more of the Stances fulfill the condition for automatic activation, one of them is randomly selected to be used at the start of battle. The automatic Stance activation will not occur if the party is blindsided.",
      levels: {
        total: 8,
        duration: [
          { value: 3, colspan: 3 },
          { value: 4, colpan: 4 },
          { value: 5, colspan: 1 }
        ],
        attackIncrease: [
          { value: "10%", colspan: 1 },
          { value: "12%", colspan: 1 },
          { value: "14%", colspan: 2 },
          { value: "16%", colspan: 1 },
          { value: "18%", colspan: 1 },
          { value: "20%", colspan: 2 }
        ]
      },
      bodyPartsUsed: null,
      type: "Stance",
      requeriments: null
    },
    {
      name: "Upward Slash",
      description:
        "Deals melee STR-based cut damage to one enemy. Becomes a critical hit if used when the user is in the Upper Stance state. Activates the Upper Stance state after use.",
      levels: {
        total: 4,
        speedModifier: "50%",
        accuracyModifier: "0%",
        tpCost: [{ value: 5, colspan: 3 }, { value: 7, colspan: 1 }],
        damage: ["105%", "108%", "111%", "125%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Upper Stance",
        level: 1
      }
    },
    {
      name: "Clear Stance",
      description:
        "Increases the user's defense, and disable infliction chance when the Clear Stance state is active. The level of Clear Stance determines the duration of the Clear Stance state. Enables Clear Stance to be automatically activated at the start of battle, if it is the highest-level Stance, and if the user has a katana equipped. If the automatic activation occurs, Clear Stance's duration is increased by 1 turn. If two or more of the Stances fulfill the condition for automatic activation, one of them is randomly selected to be used at the start of battle. The automatic Stance activation will not occur if the party is blindsided.",
      levels: {
        total: 8,
        duration: [
          { value: 3, colspan: 3 },
          { value: 4, colpan: 4 },
          { value: 5, colspan: 1 }
        ],
        defenseIncrease: [
          { value: "10%", colspan: 1 },
          { value: "13%", colspan: 1 },
          { value: "16%", colspan: 2 },
          { value: "19%", colspan: 1 },
          { value: "22%", colspan: 1 },
          { value: "25%", colspan: 2 }
        ],
        inflictionChanceMultiplier: [
          { value: "1.25x", colspan: 1 },
          { value: "1.3x", colspan: 1 },
          { value: "1.35x", colspan: 2 },
          { value: "1.4x", colspan: 1 },
          { value: "1.45x", colspan: 1 },
          { value: "1.5x", colspan: 2 }
        ]
      },
      bodyPartsUsed: null,
      type: "Stance",
      requeriments: null
    },
    {
      name: "Charging Trust",
      description:
        "Deals melee STR-based stab damage to one enemy. Becomes a critical hit if used when the user is in the Clear Stance state. Activates the Clear Stance state after use.",
      levels: {
        total: 4,
        speedModifier: "50%",
        accuracyModifier: "0%",
        tpCost: [{ value: 5, colspan: 3 }, { value: 7, colspan: 1 }],
        damage: ["105%", "108%", "111%", "125%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Clear Stance",
        level: 1
      }
    },
    {
      name: "Swift Stance",
      description:
        "Increases the user's accuracy, evasion, and action speed when the Swift Stance state is active. The level of Swift Stance determines the duration of the Swift Stance state. Enables Swift Stance to be automatically activated at the start of battle, if it is the highest-level Stance, and if the user has a katana equipped. If the automatic activation occurs, Swift Stance's duration is increased by 1 turn. If two or more of the Stances fulfill the condition for automatic activation, one of them is randomly selected to be used at the start of battle. The automatic Stance activation will not occur if the party is blindsided.",
      levels: {
        total: 8,
        duration: [
          { value: 3, colspan: 3 },
          { value: 4, colpan: 4 },
          { value: 5, colspan: 1 }
        ],
        speedMultiplier: [
          { value: "1.35x", colspan: 1 },
          { value: "1.43x%", colspan: 1 },
          { value: "1.51x%", colspan: 2 },
          { value: "1.59x%", colspan: 1 },
          { value: "1.67x%", colspan: 1 },
          { value: "1.75x%", colspan: 2 }
        ],
        accuracyAndEvasionIncrease: [
          { value: "10%", colspan: 1 },
          { value: "12%", colspan: 1 },
          { value: "14%", colspan: 2 },
          { value: "16%", colspan: 1 },
          { value: "18%", colspan: 1 },
          { value: "20%", colspan: 2 }
        ]
      },
      bodyPartsUsed: null,
      type: "Stance",
      requeriments: null
    },
    {
      name: "Sheath Strike",
      description:
        "Deals melee STR-based bash damage to one enemy. Becomes a critical hit if used when the user is in the Swift Stance state. Activates the Swift Stance state after use.",
      levels: {
        total: 4,
        speedModifier: "50%",
        accuracyModifier: "0%",
        tpCost: [{ value: 5, colspan: 3 }, { value: 7, colspan: 1 }],
        damage: ["105%", "108%", "111%", "125%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Swift Stance",
        level: 1
      }
    },
    {
      name: "Air Blade",
      description: "",
      levels: {
        total: 10,
        speedModifier: "70%",
        accuracyModifier: "-8%",
        tpCost: [
          { value: 3, colspan: 4 },
          { value: 6, coslpan: 5 },
          { value: 10, colspan: 1 }
        ],
        damage: [
          "140%",
          "145%",
          "150%",
          "155%",
          "170%",
          "176%",
          "182%",
          "188%",
          "194%",
          "230%"
        ]
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
      name: "Arm Strike",
      description:
        "Deals melee STR-based stab damage to one enemy. Attempts to bind the arms of the target. Becomes a critical hit if used when the user is in any Stance state.",
      levels: {
        total: 8,
        speedModifier: "60%",
        accuracyModifier: "-4%",
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 8, colspan: 4 },
          { value: 12, colspan: 1 }
        ],
        baseArmBindChance: [
          { value: "25%", colspan: 3 },
          { value: "30%", colspan: 4 },
          { value: "35%", colspan: 1 }
        ],
        damage: ["120%", "124%", "128%", "143%", "147%", "151%", "155%", "180%"]
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
      name: "Breath",
      description:
        "Restores the HP of the user and any party members adjacent to them.",
      levels: {
        total: 6,
        speedModifier: "75%",
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        staticHpRestore: [20, 25, 30, 35, 40, 60],
        percentageMaxHpRestore: ["12%", "14%", "16%", "18%", "20%", "25%"]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    },
    {
      name: "Mine",
      description: "Increases material yield from mining in the labyritnth",
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
      name: "Helm Splitter",
      description:
        "Only usable when the user is in a Stance state. Deals melee STR-based cut damage to one enemy. Ignores the enemy's cut vulnerability. Becomes a critical hit if used when the user is in the Upper Stance state. Reduces the current stance's duration by 3 turns after use.",
      levels: {
        total: 10,
        speedModifier: "60%",
        accuracyModifier: "-50%",
        tpCost: [
          { value: 12, colspan: 4 },
          { value: 15, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        damage: [
          "270%",
          "278%",
          "286%",
          "294%",
          "319%",
          "327%",
          "335%",
          "343%",
          "351%",
          "400%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Upward Slash",
        level: 1
      }
    },
    {
      name: "Flame Grater",
      description:
        "Deals melee STR-based cut + fire damage to one enemy. Becomes a critical hit if used when the user is in the Upper Stance state.",
      levels: {
        total: 8,
        speedModifier: "65%",
        accuracyModifier: "-4%",
        tpCost: [
          { value: 5, colspan: 3 },
          { value: 9, colspan: 4 },
          { value: 13, colspan: 1 }
        ],
        damage: ["110%", "114%", "118%", "133%", "137%", "141%", "145%", "175%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Helm Splitter",
        level: 3
      }
    },
    {
      name: "Haze Slash",
      description:
        "Only usable when the user is in a Stance state. Deals melee STR-based cut damage to one enemy. Attempts to inflict sleep on the target. Becomes a critical hit if used when the user is in the Clear Stance state. Reduces the current stance's duration by 3 turns after use.",
      levels: {
        total: 10,
        speedModifier: "20%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 9, colspan: 4 },
          { value: 13, colspan: 5 },
          { value: 18, colspan: 1 }
        ],
        baseSleepChance: [
          { value: "30%", colspan: 4 },
          { value: "40%", colspan: 5 },
          { value: "50%", colspan: 1 }
        ],
        damage: [
          "200%",
          "206%",
          "212%",
          "218%",
          "238%",
          "245%",
          "252%",
          "259%",
          "266%",
          "310%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Charging Thrust",
        level: 1
      }
    },
    {
      name: "Lightning Stab",
      description:
        "Deals melee STR-based stab + volt damage to one enemy. Becomes a critical hit if used when the user is in the Clear Stance state.",
      levels: {
        total: 8,
        speedModifier: "65%",
        accuracyModifier: "-4%",
        tpCost: [
          { value: 5, colspan: 3 },
          { value: 9, colspan: 4 },
          { value: 13, colspan: 1 }
        ],
        damage: ["110%", "114%", "118%", "133%", "137%", "141%", "145%", "175%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Haze Slash",
        level: 3
      }
    },
    {
      name: "Horizontal Slash",
      description:
        "Only usable when the user is in a Stance state. Deals melee STR-based cut damage to one row of enemies. Becomes a critical hit if used when the user is in the Swift Stance state. Reduces the current stance's duration by 3 turns after use.",
      levels: {
        total: 10,
        speedModifier: "65%",
        accuracyModifier: "-15%",
        toCost: [
          { value: 15, colspan: 4 },
          { value: 20, colspan: 5 },
          { value: 27, colspan: 1 }
        ],
        damage: [
          "150%",
          "155%",
          "160%",
          "165%",
          "180%",
          "185%",
          "190%",
          "195%",
          "200%",
          "230%"
        ]
      },
      bodyPartsUsed: "Arams",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Sheath Strike",
        level: 1
      }
    },
    {
      name: "Frigid Slash",
      description:
        "Deals melee STR-based cut + ice damage to one enemy. Becomes a critical hit if used when the user is in the Swift Stance state.",
      levels: {
        total: 8,
        speedModifier: "65%",
        accuracyModifier: "-4%",
        tpCost: [
          { value: 5, colspan: 3 },
          { value: 9, colspan: 4 },
          { value: 13, colspan: 1 }
        ],
        damage: ["110%", "114%", "118%", "133%", "137%", "141%", "145%", "175%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Horizontal Slash",
        level: 3
      }
    },
    {
      name: "Duel",
      description:
        "Increases the damage the user deals to enemies they attacked on the last turn.",
      levels: {
        total: 6,
        damageIncrease: ["8%", "10%", "12%", "14%", "16%", "25%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Air Blade", level: 2 },
          { name: "Arm Strike", level: 2 }
        ]
      }
    },
    {
      name: "Physical Attack Up",
      description: "Increases physical damage dealt by the user.",
      levels: {
        total: 8,
        physicalDamageIncrease: [
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
  ],
  master: [
    {
      name: "Swallow Strike",
      description:
        "Only usable when the user is in a Stance state. Deals multiple instances of melee STR-based cut damage to one enemy. Becomes a critical hit if used when the user is in the Upper Stance state. Ends the user's current Stance after use. On the next turn, all of the user's skills will be disabled.",
      levels: {
        total: 6,
        speedModifier: "75%",
        accuracyModifier: "0%",
        tpCost: [{ value: 20, colspan: 5 }, { value: 28, colspan: 1 }],
        numberOfHits: [{ value: 2, colspan: 5 }, { value: 3, colspan: 1 }],
        damagePerHit: ["180%", "195%", "210%", "225%", "240%", "180%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Flame Grater",
        level: 3
      }
    },
    {
      name: "Stone Thrust",
      description:
        "Only usable when the user is in a Stance state. Deals melee STR-based stab damage to one enemy. Attempts to inflict petrification on the target. Becomes a critical hit if used when the user is in the Clear Stance state. Ends the user's current Stance after use. On the next turn, all of the user's skills will be disabled.",
      levels: {
        total: 6,
        speedModifier: "25%",
        accuracyModifier: "0%",
        tpCost: [{ value: 17, colspan: 5 }, { value: 24, colspan: 1 }],
        basePetrifyChance: ["25%", "28%", "31%", "34%", "37%", "50%"],
        damage: ["330%", "345%", "360%", "375%", "390%", "480%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Lightning Stab",
        level: 3
      }
    },
    {
      name: "Petal Scatter",
      description:
        "Only usable when the user is in a Stance state. Deals melee STR-based cut damage to all enemies. Becomes a critical hit if used when the user is in the Swift Stance state. For each enemy in the battle, Petal Scatter's damage is reduced by 10%. Ends the user's current Stance after use. On the next turn, all of the user's skills will be disabled.",
      levels: {
        total: 6,
        speedModifier: "40%",
        accuracyModifier: "-10%",
        tpCost: [{ value: 25, colspan: 5 }, { value: 34, colspan: 1 }],
        damage: ["270%", "285%", "300%", "315%", "330%", "410%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Katana",
        skill: "Frigid Slash",
        level: 3
      }
    },
    {
      name: "Full Proficiency",
      description: "Increases the effect of all three stances.",
      levels: {
        total: 10,
        upperStanceAttackIncrease: [
          "+2%",
          "+3%",
          "+4%",
          "+5%",
          "+6%",
          "+7%",
          "+8%",
          "+9%",
          "+10%",
          "+12%"
        ],
        clearStanceDefenseIncrease: [
          "+2%",
          "+3%",
          "+4%",
          "+5%",
          "+6%",
          "+7%",
          "+8%",
          "+9%",
          "+10%",
          "+12%"
        ],
        clearStanceInflictIncrease: [
          "+4%",
          "+5%",
          "+7%",
          "+8%",
          "+10%",
          "+11%",
          "+13%",
          "+14%",
          "+16%",
          "+20%"
        ],
        swiftStanceAccuracyAndEvasionIncrease: [
          "+2%",
          "+2.4%",
          "+2.8%",
          "+3.2%",
          "+3.6%",
          "+4%",
          "+4.4%",
          "+4.8%",
          "+5.2%",
          "+7%"
        ],
        swiftStanceSpeedMultiplier: [
          "+0.04x",
          "+0.05x",
          "+0.07x",
          "+0.08x",
          "+0.1x",
          "+0.11x",
          "+0.13x",
          "+0.14x",
          "+0.16x",
          "+0.2x"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Rouse Spirits",
      description:
        "If the user is in a Stance state at the end of a turn, restores TP to them.",
      levels: {
        total: 4,
        tpRestore: [1, 2, 3, 5]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Full Proficiency",
        level: 2
      }
    },
    {
      name: "Speed Up",
      description:
        "Increases the user's accuracy, evasion, and action speed. Unlike most other action speed increases, Speed Up applies its speed boost by adding to the user's equipment speed total.",
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
    }
  ]
};
export default ronin;
