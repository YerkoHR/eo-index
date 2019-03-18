const harbinger = {
  name: "Harbinger",
  force: {
    boost: {
      name: "Endless Armor",
      description:
        "For 3 turns, Miasma Armor's duration will not decrease, and Miasma Armor cannot be removed.",
      bodyPartsUsed: null,
      levels: null
    },
    break: {
      name: "Miasma Tsunami",
      description:
        "For one turn, reduces all enemies' damage dealt, evasion, action speed, and increases the damage they take, and their chance of having ailments and binds inflicted on them.",
      bodyPartsUsed: "Head",
      levels: {
        total: 3,
        speedMultiplier: "0,4x",
        evasionDecrease: "-100%",
        inflictionChanceMultiplier: "1.4x",
        outGoingDamageDecrease: "35%",
        incomingDamageIncrease: "35%"
      }
    }
  },
  novice: [
    {
      name: "Eroding Miasma",
      description: "Reduces all enemies' defense for a set amount of turns.",
      levels: {
        total: 10,
        speedModifier: "60%",
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 15, colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 6, colspan: 1 }
        ],
        defenseDecrease: [
          { value: "11%", colspan: 1 },
          { value: "13%", colspan: 1 },
          { value: "15%", colspan: 1 },
          { value: "17%", colspan: 2 },
          { value: "19%", colspan: 1 },
          { value: "21%", colspan: 1 },
          { value: "23%", colspan: 1 },
          { value: "25%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Debuff",
      requeriments: null
    },
    {
      name: "Stifing Miasma",
      description: "Reduces all enemies' attack for a set amount of turns.",
      levels: {
        total: 10,
        speedModifier: "60%",
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 15, colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 6, colspan: 1 }
        ],
        attackDecrease: [
          { value: "8%", colspan: 1 },
          { value: "9%", colspan: 1 },
          { value: "10%", colspan: 1 },
          { value: "11%", colspan: 2 },
          { value: "12%", colspan: 1 },
          { value: "13%", colspan: 1 },
          { value: "14%", colspan: 1 },
          { value: "15%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Debuff",
      requeriments: null
    },
    {
      name: "Slugging Miasma",
      description:
        "Reduces all enemies' evasion and action speed for a set amount of turns.",
      levels: {
        total: 10,
        speedModifier: "60%",
        tpCost: [
          { value: 3, colspan: 4 },
          { value: 6, colspan: 5 },
          { value: 10, colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 6, colspan: 1 }
        ],
        evasionDecrease: [
          { value: "-9%", colspan: 1 },
          { value: "-12%", colspan: 1 },
          { value: "-15%", colspan: 1 },
          { value: "-18%", colspan: 2 },
          { value: "-21%", colspan: 1 },
          { value: "-24%", colspan: 1 },
          { value: "-27%", colspan: 1 },
          { value: "-30%", colspan: 2 }
        ],
        speedMultiplier: [
          { value: "0.85x", colspan: 1 },
          { value: "0.8x", colspan: 1 },
          { value: "0.75x", colspan: 1 },
          { value: "0.7x", colspan: 2 },
          { value: "0.65x", colspan: 1 },
          { value: "0.6x", colspan: 1 },
          { value: "0.55x", colspan: 1 },
          { value: "0.5x", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Debuff",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Eroding Miasma", level: 2 },
          { name: "Stifing Miasma", level: 2 }
        ]
      }
    },
    {
      name: "Paralyzing Reap",
      description:
        "Deals melee STR-based cut damage to one row of enemies. If the user is in the Miasma Armor state, attempts to inflict paralysis on hit targets.",
      levels: {
        total: 6,
        speedModifier: "50%",
        accuracyModifier: "0%",
        tpCost: [{ value: 5, colspan: 5 }, { value: 13, colspan: 1 }],
        baseParalysisChance: [
          { value: "30%", colspan: 5 },
          { value: "40%", colspan: 1 }
        ],
        damage: ["180%", "190%", "200%", "210%", "220%", "280%"]
      },
      bodyPartsUsed: "Arms",
      type: "Skill",
      requeriments: {
        weapon: "Scythe",
        skill: null,
        level: null
      }
    },
    {
      name: "Toxic Reap",
      description:
        "Deals melee STR-based cut damage to one row of enemies. If the user is in the Miasma Armor state, attempts to inflict poison on hit targets.",
      levels: {
        total: 6,
        speedModifier: "50%",
        accuracyModifier: "0%",
        tpCost: [{ value: 6, colspan: 5 }, { value: 13, colspan: 1 }],
        basePoisonChance: [
          { value: "35%", colspan: 5 },
          { value: "45%", colspan: 1 }
        ],
        basePoisonFactor: [25, 30, 35, 40, 45, 75],
        damage: ["180%", "190%", "200%", "210%", "220%", "280%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Scythe",
        skill: "Paralyzing Reap",
        level: 3
      }
    },
    {
      name: "Miasma Armor",
      description:
        "Places the user in the Miasma Armor state for a set amount of turns. Automatically places the user in the Miasma Armor state at the start of battle. The Miasma Armor state increases the user's speed and enables secondary effects of various skills.",
      levels: {
        total: 4,
        speedModifier: "50%",
        duration: 4,
        tpCost: [{ value: 3, colspan: 3 }, { value: 5, colspan: 1 }],
        speedMultiplier: ["1.2x", "1.35x", "1.5x", "2x"]
      },
      bodyPartsUsed: "Arms",
      type: "Support",
      requeriments: null
    },
    {
      name: "Endless Shroud",
      description:
        "When the user uses a debuff skill, they have a chance to enter the Miasma Armor state automatically.",
      levels: {
        total: 8,
        chance: ["26%", "34%", "42%", "50%", "58%", "66%", "74%", "100%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Miasma Armor",
        level: 2
      }
    },
    {
      name: "Atonement",
      description:
        "Requires the Miasma Armor state to use. Ends the Miasma Armor state, restores all party members' HP, and attempts to remove all ailments from all party members.",
      levels: {
        total: 8,
        speedModifier: "100%",
        tpCost: [
          { value: 9, colspan: 3 },
          { value: 15, colspan: 4 },
          { value: 24, colspan: 1 }
        ],
        healingPower: [
          "100%",
          "105%",
          "110%",
          "140%",
          "145%",
          "150%",
          "155%",
          "200%"
        ],
        ailmentCureChance: [
          "50%",
          "52%",
          "54%",
          "64%",
          "66%",
          "68%",
          "70%",
          "85%"
        ]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Miasma Armor",
        level: 2
      }
    },
    {
      name: "Take",
      description: "Increases material yield from taking in the labyrinth.",
      levels: null,
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Wilting Miasma",
      description:
        "Increases the chance of all enemies being inflicted with ailments, and reduces their chance of recovering from ailments at the end of the turn, for a set amount of turns.",
      levels: {
        total: 10,
        speedModifier: "60%",
        tpCost: [
          { value: 8, colspan: 4 },
          { value: 14, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 6, colspan: 1 }
        ],
        inflictionChanceMultiplier: [
          { value: "1.12x", colspan: 1 },
          { value: "1.14x", colspan: 1 },
          { value: "1.16x", colspan: 1 },
          { value: "1.18x", colspan: 2 },
          { value: "1.21x", colspan: 1 },
          { value: "1.24x", colspan: 1 },
          { value: "1.27x", colspan: 1 },
          { value: "1.30x", colspan: 2 }
        ],
        recoveryChanceDecrease: [
          { value: "-7%", colspan: 1 },
          { value: "-9%", colspan: 1 },
          { value: "-11%", colspan: 1 },
          { value: "-13%", colspan: 2 },
          { value: "-16%", colspan: 1 },
          { value: "-19%", colspan: 1 },
          { value: "-22%", colspan: 1 },
          { value: "-25%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Debuff",
      requeriments: {
        weapon: null,
        skill: "Sluggish Miasma",
        level: 3
      }
    },
    {
      name: "Binding Miasma",
      description:
        "Increases the chance of all enemies being inflicted with binds, and reduces their chance of recovering from binds at the end of the turn, for a set amount of turns.",
      levels: {
        total: 10,
        speedModifier: "60%",
        tpCost: [
          { value: 8, colspan: 4 },
          { value: 14, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 6, colspan: 1 }
        ],
        inflictionChanceMultiplier: [
          { value: "1.12x", colspan: 1 },
          { value: "1.14x", colspan: 1 },
          { value: "1.16x", colspan: 1 },
          { value: "1.18x", colspan: 2 },
          { value: "1.21x", colspan: 1 },
          { value: "1.24x", colspan: 1 },
          { value: "1.27x", colspan: 1 },
          { value: "1.30x", colspan: 2 }
        ],
        recoveryChanceDecrease: [
          { value: "-7%", colspan: 1 },
          { value: "-9%", colspan: 1 },
          { value: "-11%", colspan: 1 },
          { value: "-13%", colspan: 2 },
          { value: "-16%", colspan: 1 },
          { value: "-19%", colspan: 1 },
          { value: "-22%", colspan: 1 },
          { value: "-25%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Debuff",
      requeriments: {
        weapon: null,
        skill: "Wilting Miasma",
        level: 3
      }
    },
    {
      name: "Darkness Reap",
      description:
        "Deals melee STR-based cut damage to one row of enemies. If the user is in the Miasma Armor state, attempts to inflict blind on hit targets.",
      levels: {
        total: 6,
        speedModifier: "50%",
        accuracyModifier: "0%",
        tpCost: [{ value: 6, colspan: 5 }, { value: 13, colspan: 1 }],
        baseBindChance: [
          { value: "35%", colspan: 5 },
          { value: "45%", colspan: 1 }
        ],
        damage: ["180%", "190%", "200%", "210%", "220%", "280%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Scythe",
        skill: "Toxic Reap",
        level: 2
      }
    },
    {
      name: "Chaos Reap",
      description:
        "Deals melee STR-based cut damage to one row of enemies. If the user is in the Miasma Armor state, attempts to inflict panic on hit targets.",
      levels: {
        total: 6,
        speedModifier: "50%",
        accuracyModifier: "0%",
        tpCost: [{ value: 10, colspan: 5 }, { value: 18, colspan: 1 }],
        basePanicChance: [
          { value: "23%", colspan: 5 },
          { value: "30%", colspan: 1 }
        ],
        damage: ["200%", "215%", "230%", "245%", "260%", "340%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Scythe",
        skill: "Darkness Reap",
        level: 3
      }
    },
    {
      name: "Black Shroud",
      description:
        "When the user is in the Miasma Armor state, reduces the damage they take.",
      levels: {
        total: 8,
        damageReduction: [
          "10%",
          "11%",
          "13%",
          "14%",
          "16%",
          "17%",
          "19%",
          "25%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Endless Shroud",
        level: 1
      }
    },
    {
      name: "Soul Transfer",
      description:
        "Requires the Miasma Armor state to use. Ends the Miasma Armor state, and attempts to revive all dead party members.",
      levels: {
        total: 6,
        speedModifier: "20%",
        tpCost: [{ value: 10, colspan: 5 }, { value: 25, colspan: 1 }],
        reviveRestore: [1, 30, 60, 90, 120, 250],
        reviveChance: ["50%", "53%", "56%", "59%", "62%", "75%"]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Atonement",
        level: 3
      }
    },
    {
      name: "Black Wave",
      description:
        "If the user is in the Miasma Armor state, at the end of the turn, restores their TP.",
      levels: {
        total: 4,
        tpRestore: [1, 2, 3, 5]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Soul Transfer",
        level: 1
      }
    },
    {
      name: "Spirit Absorb",
      description:
        "When the user uses a debuff skill, restores their HP. The healing from Spirit Absorb can increase the user's HP beyond their normal maximum. This overheal is removed at the end of the turn.",
      levels: {
        total: 6,
        healingPower: ["80%", "95%", "110%", "125%", "140%", "220%"],
        maxOverhealedHp: ["15%", "18%", "21%", "24%", "27%", "40%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Status Attack Up",
      description:
        "Increases the user's chance of inflicting ailments and binds.",
      levels: {
        total: 8,
        inflictionChanceMultiplier: [
          "1.04x",
          "1.05x",
          "1.06x",
          "1.09x",
          "1.1x",
          "1.11x",
          "1.12x",
          "1.15x"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    }
  ],
  master: [
    {
      name: "Death Tolerance",
      description:
        "Gives the user a chance to nullify debuffs and ailments directed at them.",
      levels: {
        total: 8,
        chance: ["7%", "9%", "11%", "13%", "15%", "17%", "19%", "25%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Ephemeral Reap",
      description:
        "Deals multiple instances of melee STR-based cut damage to one enemy. The number of hits is equal to how many debuffs the target is afflicted with. If the target has no debuffs, Ephemeral Reap will do nothing.",
      levels: {
        total: 10,
        speedModifier: "30%",
        tpCost: [
          { value: 16, colspan: 4 },
          { value: 22, colspan: 5 },
          { value: 30, colspan: 1 }
        ],
        damagePerHit: [
          "170%",
          "177%",
          "184%",
          "191%",
          "212%",
          "219%",
          "226%",
          "233%",
          "240%",
          "280%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Scythe",
        skill: null,
        level: null
      }
    },
    {
      name: "Fatal Reap",
      description:
        "Deals melee STR-based cut damage to one enemy. Attempts to instantly kill the target.",
      levels: {
        total: 8,
        speedModifier: "30%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 13, colspan: 3 },
          { value: 17, colspan: 4 },
          { value: 23, colspan: 1 }
        ],
        baseInstantKillChance: [
          { value: "15%", colspan: 3 },
          { value: "20%", colspan: 4 },
          { value: "25%", colspan: 1 }
        ],
        damage: ["320%", "330%", "340%", "380%", "395%", "410%", "425%", "500%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Scythe",
        skill: "Chaos Reap",
        level: 2
      }
    },
    {
      name: "Miasma Wall",
      description:
        "Requires the Miasma Armor state to use. Ends the Miasma Armor state, and attempts to nullify ailments and binds inflicted on party members.",
      levels: {
        total: 6,
        tpCost: [{ value: 15, colspan: 5 }, { value: 30, colspan: 1 }],
        maxNullifies: [{ value: 4, colspan: 5 }, { value: 5, colspan: 1 }],
        nullifyChance: ["75%", "77%", "80%", "82%", "85%", "95%"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Black Wave",
        level: 1
      }
    },
    {
      name: "Spitit Barrier",
      description:
        "Requires the Miasma Armor state to use. Ends the Miasma Armor state, and attempts to nullify debuffs, stuns, and instant death inflicted on party members.",
      levels: {
        total: 6,
        tpCost: [{ value: 15, colspan: 5 }, { value: 30, colspan: 1 }],
        maxNullifies: [{ value: 4, colspan: 5 }, { value: 5, colspan: 1 }],
        nullifyChance: ["75%", "77%", "80%", "82%", "85%", "95%"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Black Wave",
        level: 1
      }
    },
    {
      name: "Enduring Armor",
      description:
        "Skills which end the Miasma Armor state will instead reduce its duration.",
      levels: {
        total: 4,
        durationReduction: [7, 6, 5, 3]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Miasma Wall", level: 2 },
          { name: "Spirit Barrier", level: 2 }
        ]
      }
    }
  ]
};

export default harbinger;
