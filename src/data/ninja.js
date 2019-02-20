const ninja = {
  name: "Ninja",
  force: {
    boost: {
      name: "Diversion Gambit",
      description:
        "For 3 turns, increases the user's evasion and chance of being targeted (enmity).",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        evasionIncrease: +65,
        enmityIncrease: +40
      }
    },
    break: {
      name: "Toxic Mist",
      description: "Attempts to inflict poison on all enemies.",
      bodyPartsUsed: "Head",
      levels: {
        total: 3,
        basePoisonChance: 1000,
        BasePoisonFactor: [100, 200, 300]
      }
    }
  },
  novice: [
    {
      name: "Ninpo: Daggers",
      description:
        "Deals ranged STR-based stab damage to random enemies. Attempts to inflict sleep on hit targets.",
      levels: {
        total: 10,
        speedModifier: 100,
        accuracyModifier: -6,
        damage: [60, 65, 70, 75, 95, 100, 105, 110, 115, 150],
        tpCost: { "4": 3, "9": 6, "10": 10 },
        baseSleepChance: { "4": "35%", "9": "45%", "10": "55%" },
        numberOfEnemiesHit: { "4": 3, "9": 4, "10": 5 }
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: null
    },
    {
      name: "Ninpo: Caltrops",
      description:
        "Targets one row of party members. For one turn, when that row is attacked, the user will counterattack with ranged STR-based cut damage. Attempts to inflict poison.",
      levels: {
        total: 6,
        speedModifier: 500,
        damage: 35,
        maxCounterattacks: 9,
        basePoisonChance: [60, 65, 70, 75, 80, 100],
        BasePoisonFactor: [25, 33, 41, 49, 57, 90],
        tpCost: {
          "5": 4,
          "6": 9
        }
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Ninpo: Daggers",
        level: 3
      }
    },
    {
      name: "Shadow Bind",
      description:
        "Deals melee STR-based cut damage to one enemy. Attempts to bind the legs of the target.",
      levels: {
        speedModifier: 100,
        accuracyModifier: 0,
        damage: [150, 155, 160, 185, 190, 195, 200, 230],
        baseLegBindChance: {
          "3": "45%",
          "7": "55%",
          "8": "70"
        },
        tpCost: {
          "3": 4,
          "7": 7,
          "8": 12
        }
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapong: "Knife",
        skill: null,
        level: null
      }
    },
    {
      name: "Bone Crusher",
      description:
        "Deals melee STR-based bash damage to one enemy. Reduces the target's physical defense for a set amount of turns.",
      levels: {
        total: 8,
        speedModifier: 75,
        accuracyModifier: -3,
        duration: 4,
        damage: [200, 210, 220, 250, 260, 270, 280, 340],
        defenseDecrease: {
          "3": "10%",
          "7": "17%",
          "8": "25%"
        },
        tpCost: {
          "3": 5,
          "7": 8,
          "8": 13
        }
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Knife",
        skill: "Shadow Bind",
        level: 3
      }
    },
    {
      name: "Reflexes",
      description: "When the user evades an attack, their TP is restored.",
      levels: {
        total: 4,
        staticTpRestore: [2, 3, 4, 5],
        percentageMaxTpRestore: {
          "3": "1%",
          "4": "2%"
        }
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Concealment",
      description: "Increases the user's evasion.",
      levels: {
        total: 10,
        evasionIncrease: [5, 6, 7, 8, 11, 12, 13, 14, 15, 20]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Reflexes",
        level: 2
      }
    },
    {
      name: "Ninpo: Mirage",
      description:
        "Creates a decoy in an empty party slot. The decoy has added evasion, and added chance to be targeted (enmity)",
      levels: {
        speedModifier: 75,
        decoyAddedEnmity: +50,
        percentageUserCurrentHpAsDecoyHp: [30, 40, 50, 60, 70, 100],
        decoyAddedEvasion: [+1, +4, +7, +10, +13, +25],
        tpCost: {
          "5": 4,
          "6": 10
        }
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: null
    },
    {
      name: "Proficiency",
      description:
        "Increases the user's damage dealt. At max level, removes the penalty for using a melee attack from the back row.",
      levels: {
        total: 4,
        damageIncrease: [4, 6, 8, 10]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Chop",
      description: "Increases material yield from chopping in the laberinth.",
      levels: {
        total: 1
      },
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Ninpo: Mirror",
      description:
        "Attempts to inflict any ailments and binds one enemy is afflicted with on all enemies.",
      levels: {
        total: 6,
        speedModifier: 70,
        baseInflictChance: [40, 44, 48, 52, 56, 70],
        tpCost: {
          "5": 6,
          "6": 10
        }
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Ninpo: Caltrops",
        level: 2
      }
    },
    {
      name: "Izuna",
      description:
        "Deals melee STR-based cut damage to one enemy. Attempts to inflict petrification on the target.",
      levels: {
        total: 8,
        speedModifier: 70,
        accuracyModifier: -5,
        damage: [170, 178, 186, 211, 219, 227, 235, 280],
        basePetrifyChance: {
          "3": "25%",
          "7": "32%",
          "8": "40%"
        },
        tpCost: {
          "3": 7,
          "7": 11,
          "8": 16
        }
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Knife",
        skill: "Bone Crusher",
        level: 2
      }
    },
    {
      name: "Hawk Strike",
      description:
        "Deals multiple instances of melee STR-based cut damage to random enemies.",
      levels: {
        total: 8,
        speedModifier: 80,
        accuracyModifier: -5,
        damagePerHit: {
          "1": "120%",
          "2": "126%",
          "4": "132%",
          "5": "138%",
          "6": "144%",
          "8": "150%"
        },
        minimumHits: {
          "7": 2,
          "8": 3
        },
        maximumHits: {
          "3": 3,
          "7": 4,
          "8": 5
        },
        tpCost: {
          "3": 8,
          "7": 13,
          "8": 20
        }
      },
      bodyPartsUsed: null,
      type: "Attack",
      requeriments: {
        weapon: "Knife",
        skill: "Izuna",
        level: 3
      }
    },
    {
      name: "Revenge Bomb",
      description:
        "When the user first dies, deals ranged STR-based fire damage to one enemy.",
      levels: {
        total: 6,
        accuracyModifier: +50,
        damage: [500, 560, 620, 680, 740, 1000]
      },
      bodyPartsUsed: null,
      type: "Attack",
      requeriments: null
    },
    {
      name: "Ninpo: Double",
      description:
        "Consumes a percentage of the user's current HP and TP to create a clone of themselves in an empty party slot. The user and their clone cannot use their Force Boost or Force Break while the clone is active.",
      levels: {
        total: 10,
        speedModifier: 300,
        percentageCurrentHpTpCost: [70, 69, 68, 67, 63, 62, 61, 60, 59, 55]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Revenge Bomb",
        level: 2
      }
    },
    {
      name: "Beheading",
      description:
        "Gives the user's normal attacks a chance to instantly kill their target.",
      levels: {
        total: 8,
        baseInstantKillChance: [2, 3, 4, 5, 6, 7, 8, 10]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Concealment",
        level: 3
      }
    },
    {
      name: "Auto-Mirage",
      description:
        "If the user knows Ninpo: Mirage, gives them a chance to use it at the start of battle. If another party member activated Auto - Mirage, the user will be unable to activate it.",
      levels: {
        total: 6,
        chance: [25, 30, 35, 40, 45, 67]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Ninpo: Mirage",
        level: 2
      }
    },
    {
      name: "Status ATK Up",
      description:
        "Increases the user's chance of inflicting ailments and binds.",
      levels: {
        total: 8,
        inflictionChanceMultiplier: [
          1.04,
          1.05,
          1.06,
          1.09,
          1.1,
          1.11,
          1.12,
          1.15
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Ninpo: Flight",
      description:
        "For one turn, the user's evasion against physical attacks is increased. Each time the user evades an attack while under the effect of Ninpo: Flight, the evasion boost is reduced.",
      levels: {
        total: 10,
        speedModifier: 500,
        baseEvasionIncrease: [
          +50,
          +55,
          +60,
          +65,
          +84,
          +90,
          +96,
          +102,
          +108,
          +140
        ],
        evasionDecreasePerDodge: [
          -10,
          -11,
          -12,
          -13,
          -17,
          -18,
          -19,
          -20,
          -22,
          -28
        ],
        tpCost: {
          "4": 3,
          "9": 7,
          "10": 13
        }
      },
      bodyPartsUsed: "Legs",
      type: "Support",
      requeriments: null
    }
  ],
  master: [
    {
      name: "Ninpo: Panic",
      description: "Attempts to inflict panic on all enemies.",
      levels: {
        total: 6,
        speedModifier: 70,
        basePanicChance: [28, 30, 32, 34, 36, 45],
        tpCost: {
          "5": 13,
          "6": 20
        }
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Ninpo: Mirror",
        level: 2
      }
    },
    {
      name: "Return Malice",
      description:
        "If the user evaded an attack on the previous turn, their chance of inflicting ailments is increased.",
      levels: {
        total: 6,
        inflictionChanceMultiplier: [1.1, 1.13, 1.16, 1.19, 1.22, 1.35]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Ninpo: Panic",
        level: 2
      }
    },
    {
      name: "Dominance",
      description:
        "Deals melee STR-based cut damage to one enemy. Cannot miss. If the target is afflicted with an ailment, restores the user's Force.",
      levels: {
        speedModifier: 80,
        damage: [220, 230, 240, 275, 285, 295, 305, 360],
        ailmentForceRestore: [+10, +11, +12, +15, +16, +17, +18, +25],
        tpCost: {
          "3": 12,
          "7": 17,
          "8": 24
        }
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Knife",
        skill: "Hawk Strike",
        level: 2
      }
    },
    {
      name: "Drawing Slice",
      description:
        "Deals multiple instances of melee STR-based cut damage to random enemies. If the user has any clones active, the damage is increased. Clones will disappear after use.",
      levels: {
        total: 8,
        speedModifier: 500,
        accuracyModifier: -5,
        addedDamagePerClone: +100,
        baseDamage: {
          "1": "60%",
          "2": "63%",
          "4": "66%",
          "5": "69%",
          "6": "72%",
          "8": "75%"
        },
        minimumHits: {
          "7": 2,
          "8": 3
        },
        maximumHits: {
          "2": 3,
          "7": 4,
          "8": 5
        }
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Knife",
        skill: [
          { name: "Dominance", level: 2 },
          { name: "Ninpo: Double", level: 2 }
        ]
      }
    },
    {
      name: "Ninpo: Smoke",
      description:
        "Consumes a percentage of the user's current HP to increase their evasion for a set amount of turns.",
      levels: {
        total: 10,
        speedModifier: 100,
        duration: 4,
        evasionIncrease: [+20, +21, +22, +22, +26, +27, +28, +29, +30, +40],
        percentageCurrentHpCost: {
          "4": "10%",
          "9": "30%",
          "10": "50%"
        },
        tpCost: {
          "4": 10,
          "9": 15,
          "10": 20
        }
      },
      bodyPartsUsed: "Legs",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Ninpo: Flight",
        level: 2
      }
    },
    {
      name: "Mystic Calm",
      description:
        "Reduces TP costs of skills. Cannot reduce a skill's TP cost to 0.",
      levels: {
        total: 4,
        tpCostReduction: [-1, -2, -3, -4]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    }
  ]
};

export default ninja;
