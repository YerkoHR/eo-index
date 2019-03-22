const highlander = {
  name: "Highlander",
  force: {
    boost: {
      name: "Hero Battle",
      description:
        "For 3 turns, spear skills have their damage increased, and restore all party members' HP, for a percentage of the damage dealt. If the Highlander inflicts instant death during Hero Battle, they will still restore HP based on the damage the attack would've dealt.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        damageIncrease: "40%",
        percentageDamageAsHpRestore: "15%"
      }
    },
    break: {
      name: "Gar Bolg",
      description:
        "Deals ranged STR-based stab damage to all enemies. Restores the user's TP, for a percentage of the damage dealt.",
      bodyPartsUsed: "Arms",
      levels: {
        total: 3,
        percentageDamageAsTpRestore: "3%",
        damage: ["450%", "900%", "1350%"]
      }
    }
  },
  novice: [
    {
      name: "Long Thrust",
      description: "Deals ranged STR-based stab damage to one enemy.",
      levels: {
        total: 8,
        speedModifier: "85%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 8, colspan: 1 }
        ],
        damage: ["160%", "168%", "176%", "211%", "219%", "227%", "235%", "280%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: null
    },
    {
      name: "Spear Assist",
      description:
        "Deals melee STR-based stab damage to one enemy at the end of the turn. If an elemental attack was used before Spear Assist, that attack's element is added to Spear Assist, and its damage is increased. If multiple elements were used before Spear Assist, the last element to be used is added.",
      levels: {
        total: 10,
        accuracyModifier: "+25%",
        elementDamageMultiplier: "2x",
        tpCost: [
          { value: 6, colspan: 4 },
          { value: 10, colspan: 5 },
          { value: 16, colspan: 1 }
        ],
        baseDamage: [
          "110%",
          "113%",
          "116%",
          "119%",
          "133%",
          "136%",
          "139%",
          "142%",
          "145%",
          "170%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: null,
        level: null
      }
    },
    {
      name: "Turning Tide",
      description:
        "When the user kills an enemy, restores all party members' HP.",
      levels: {
        total: 6,
        staticHpRestore: [10, 12, 14, 16, 18, 25],
        percentageMaxHpRestore: ["10%", "12%", "14%", "16%", "18%", "25%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Draining Thrust",
      description:
        "Consumes a percentage of the user's current HP to deal melee STR-based stab damage to the enemy front row.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+10%",
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        percentageCurrentHpCost: [
          { value: "25%", colspan: 5 },
          { value: "40%", colspan: 1 }
        ],
        damage: ["125%", "135%", "145%", "155%", "165%", "270%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: "Turning Tide",
        level: 2
      }
    },
    {
      name: "Legion Thrust",
      description:
        "Consumes a percentage of all party members' current HP to deal melee STR-based stab damage to the enemy front row.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+10%",
        tpCost: [{ value: 6, colspan: 5 }, { value: 12, colspan: 1 }],
        percentageCurrentHpCost: [
          { value: "15%", colspan: 5 },
          { value: "25%", colspan: 1 }
        ],
        damage: ["160%", "170%", "180%", "190%", "200%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: "Turning Tide",
        level: 2
      }
    },
    {
      name: "Spirit Shield",
      description:
        "Consumes a percentage of the user's current HP to increase one row of party members' elemental defense for a set amount of turns.",
      levels: {
        total: 4,
        speedModifier: "150%",
        duration: 4,
        tpCost: [{ value: 5, colspan: 3 }, { value: 9, colspan: 1 }],
        percentageCurrentHpCost: [
          { value: "20%", colspan: 3 },
          { value: "34%", colspan: 1 }
        ],
        defenseIncrease: ["20%", "22%", "24%", "30%"]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Blood Veil",
      description:
        "When the user first loses HP during a turn, they take reduced damage for the rest of the turn.",
      levels: {
        total: 6,
        damageReduction: ["20%", "22%", "24%", "26%", "28%", "34%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
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
      name: "Head Pierce",
      description:
        "Deals melee STR-based stab damage to one enemy. Attempts to instantly kill the target. If that fails, attempts to bind the head of the target.",
      levels: {
        total: 6,
        speedModifier: "75%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 7, colspan: 5 }, { value: 13, colspan: 1 }],
        baseHeadBindChance: ["25%", "27%", "29%", "31%", "33%", "40%"],
        baseInstantKillChance: ["6%", "7%", "8%", "9%", "10%", "13%"],
        damage: ["180%", "195%", "210%", "225%", "240%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: "Spear Assist",
        level: 3
      }
    },
    {
      name: "Draining Burst",
      description:
        "Consumes a percentage of the user's current HP to deal melee STR-based stab damage to all enemies.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 17, colspan: 1 }
        ],
        percentageCurrentHpCost: [
          { value: "35%", colspan: 3 },
          { value: "50%", colspan: 4 },
          { value: "65%", colspan: 1 }
        ],
        damage: ["120%", "130%", "140%", "200%", "210%", "220%", "230%", "320%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: "Draining Thrust",
        level: 2
      }
    },
    {
      name: "Legion Burst",
      description: "",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 10, colspan: 3 },
          { value: 14, colspan: 4 },
          { value: 20, colspan: 1 }
        ],
        percentageCurrentHpCost: [
          { value: "25%", colspan: 3 },
          { value: "30%", colspan: 4 },
          { value: "35%", colspan: 1 }
        ],
        damage: ["180%", "192%", "204%", "244%", "256%", "268%", "280%", "350%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: "Legion Thrust",
        level: 2
      }
    },
    {
      name: "Blood Fortune",
      description:
        "Consumes a percentage of all party members' current HP to increase all party members' chance of inflicting ailments and binds for a set amount of turns.",
      levels: {
        total: 8,
        speedModifier: "80%",
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 18, colspan: 1 }
        ],
        percentageCurrentHpCost: [
          { value: "15%", colspan: 3 },
          { value: "25%", colspan: 4 },
          { value: "35%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        inflictionChanceMultiplier: [
          { value: "1.1x", colspan: 1 },
          { value: "1.13x", colspan: 1 },
          { value: "1.16x", colspan: 2 },
          { value: "1.19x", colspan: 1 },
          { value: "1.22x", colspan: 1 },
          { value: "1.25x", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Spirit Shield",
        level: 1
      }
    },
    {
      name: "Battle Instinct",
      description:
        "Gives the user a chance to, at the start of battle, place a buff on all party members that nullifies one ailment.",
      levels: {
        total: 6,
        duration: 4,
        chance: ["15%", "20%", "25%", "30%", "35%", "50%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Blood Fortune",
        level: 2
      }
    },
    {
      name: "Bloody Offense",
      description:
        "Places a buff on one row of party members that increases their attack, at the cost of losing a percentage of their current HP whenever they act, for a set amount of turns.",
      levels: {
        total: 8,
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 9, colspan: 4 },
          { value: 14, colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        percentageCurrentHpLoss: [
          { value: "10%", colspan: 1 },
          { value: "12%", colspan: 1 },
          { value: "14%", colspan: 2 },
          { value: "16%", colspan: 1 },
          { value: "18%", colspan: 1 },
          { value: "20%", colspan: 2 }
        ],
        attackIncrease: [
          { value: "20%", colspan: 1 },
          { value: "25%", colspan: 1 },
          { value: "30%", colspan: 2 },
          { value: "35%", colspan: 1 },
          { value: "40%", colspan: 1 },
          { value: "45%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Blood Veil",
        level: 2
      }
    },
    {
      name: "Bloodlust",
      description:
        "Whenever the user loses HP, they have a chance to perform a normal attack on a random enemy.",
      levels: {
        total: 10,
        accuracyModifier: "+10%",
        damage: "100%",
        chance: [
          "10%",
          "13%",
          "16%",
          "19%",
          "28%",
          "31%",
          "34%",
          "37%",
          "40%",
          "50%"
        ]
      },
      bodyPartsUsed: null,
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Bloody Offense",
        level: 2
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
      name: "Delayed Charge",
      description:
        "Consumes a percentage of the user's current HP to, a set number of turns later, deal melee STR-based stab damage to one enemy.",
      levels: {
        total: 10,
        tpCost: [
          { value: 9, colspan: 4 },
          { value: 14, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        percentageCurrentHpCost: [
          { value: "15%", colspan: 4 },
          { value: "20%", colspan: 5 },
          { value: "25%", colspan: 1 }
        ],
        activationDelay: [
          { value: 2, colspan: 4 },
          { value: 3, colspan: 5 },
          { value: 4, colspan: 1 }
        ],
        damage: [
          "340%",
          "350%",
          "360%",
          "370%",
          "500%",
          "515%",
          "530%",
          "545%",
          "560%",
          "780%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: null,
        level: null
      }
    }
  ],
  master: [
    {
      name: "Spear Reversal",
      description:
        "Deals melee STR-based stab damage to one enemy. If the target has a higher percentage of HP remaining than the user, damage is increased.",
      levels: {
        total: 6,
        speedModifier: "150%",
        conditionDamageMultiplier: "3x",
        tpCost: [{ value: 9, colspan: 5 }, { value: 14, colspan: 1 }],
        baseDamage: ["170%", "180%", "190%", "200%", "210%", "270%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: "Head Pierce",
        level: 3
      }
    },
    {
      name: "Cross Charge",
      description:
        "Consumes a percentage of the user's current HP to deal melee STR-based stab damage to one enemy. If a Delayed Charge effect is queued, Cross Charge will activate it, and Cross Charge's damage and accuracy will increase",
      levels: {
        total: 6,
        speedModifier: "200%",
        aloneAccuracyModifier: "+10%",
        comboAccuracyModifier: "+20%",
        percentageCurrentHpCost: "20%",
        comboDamageModifier: "2.5x",
        baseDamage: ["200%", "210%", "220%", "230%", "240%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: "Delayed Charge",
        level: 2
      }
    },
    {
      name: "Legion Charge",
      description:
        "Consumes a percentage of all other party members' current HP to deal melee STR-based stab damage to one enemy.",
      levels: {
        total: 10,
        speedModifier: "50%",
        accuracyModifier: "+30%",
        tpCost: [
          { value: 10, colspan: 4 },
          { value: 14, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        percentageCurrentHpCost: [
          { value: "15%", colspan: 4 },
          { value: "30%", colspan: 5 },
          { value: "50%", colspan: 1 }
        ],
        damage: [
          "350%",
          "365%",
          "380%",
          "395%",
          "500%",
          "515%",
          "530%",
          "545%",
          "560%",
          "700%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Spear",
        skill: "Legion Burst",
        level: 3
      }
    },
    {
      name: "Allied Bonds",
      description:
        "At the end of a turn, if a party member's HP was drained by one of the user's skills, their TP is restored.",
      levels: {
        total: 4,
        percentageMaxtpRestore: [
          { value: "1%", colspan: 3 },
          { value: "2%", colspan: 1 }
        ],
        statictpRestore: [2, 3, 4, 6]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Legion Charge",
        level: 2
      }
    },
    {
      name: "Black Sabbath",
      description:
        "Deals ranged STR-based almighty damage to all enemies. Restores all party members' HP for a percentage of the damage dealt.",
      levels: {
        total: 8,
        speedModifier: "50%",
        accuracyModifier: "+50%",
        percentageDamageAsHpRestore: "15%",
        tpCost: [
          { value: 15, colspan: 3 },
          { value: 22, colspan: 4 },
          { value: 30, colspan: 1 }
        ],
        damage: ["150%", "155%", "160%", "185%", "190%", "195%", "200%", "250%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Bloodlust",
        level: 3
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
  ]
};

export default highlander;
