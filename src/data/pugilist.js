const pugilist = {
  name: "Pugilist",
  force: {
    boost: {
      name: "Bind Rush",
      description:
        "For 3 turns, increases the user's chance of inflicting binds. Adds a chaser attack when the user attacks any enemy that is afflicted with any ailments, binds, or is stunned. If the user performs multiple attacks in one action, that action will only be chased once.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        chaseDamage: "50%",
        inflictionChanceMultiplier: "1.3x"
      }
    },
    break: {
      name: "Final Blow",
      description:
        "Deals melee STR-based bash damage to one enemy. Attempts to bind the target's head, arms, and legs.",
      bodyPartsUsed: "Arms",
      levels: {
        total: 3,
        baseBindChance: "60%",
        damage: ["400%", "800%", "1200%"]
      }
    }
  },
  novice: [
    {
      name: "Concussion",
      description:
        "Deals melee STR-based bash damage to one enemy. Attempts to bind the head of the target.",
      levels: {
        total: 8,
        speedModifier: "65%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 6, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        baseHeadBindChance: [
          { value: "30%", colspan: 3 },
          { value: "37%", colspan: 4 },
          { value: "45%", colspan: 1 }
        ],
        damage: ["115%", "120%", "125%", "140%", "145%", "150%", "155%", "180%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: null,
        level: null
      }
    },
    {
      name: "Arm Breaker",
      description:
        "Deals melee STR-based bash damage to one enemy. Attempts to bind the arms of the target.",
      levels: {
        total: 8,
        speedModifier: "65%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 6, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        baseArmBindChance: [
          { value: "30%", colspan: 3 },
          { value: "37%", colspan: 4 },
          { value: "45%", colspan: 1 }
        ],
        damage: ["115%", "120%", "125%", "140%", "145%", "150%", "155%", "180%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: null,
        level: null
      }
    },
    {
      name: "Low Blow",
      description:
        "Deals melee STR-based bash damage to one enemy. Attempts to bind the legs of the target.",
      levels: {
        total: 8,
        speedModifier: "65%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 6, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        baseLegBindChance: [
          { value: "30%", colspan: 3 },
          { value: "37%", colspan: 4 },
          { value: "45%", colspan: 1 }
        ],
        damage: ["115%", "120%", "125%", "140%", "145%", "150%", "155%", "180%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: null,
        level: null
      }
    },
    {
      name: "One-Two Punch",
      description:
        "Deals melee STR-based bash damage to one enemy. May follow up with Concussion, Arm Breaker, and/or Low Blow, if the target is not afflicted with each skill's respective bind. Follow-up skills deal reduced damage. Each of the binding skills is rolled for individually.",
      levels: {
        total: 10,
        speedModifier: "50%",
        accuracyModifier: "+5%",
        followUpDamageMultiplier: "0.5x",
        tpCost: [
          { value: 6, colspan: 4 },
          { value: 10, colspan: 5 },
          { value: 16, colspan: 1 }
        ],
        followUpChance: [
          "40%",
          "42%",
          "44%",
          "46%",
          "54%",
          "56%",
          "58%",
          "60%",
          "62%",
          "75%"
        ],
        damage: [
          "100%",
          "103%",
          "106%",
          "109%",
          "121%",
          "124%",
          "127%",
          "130%",
          "133%",
          "150%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: [
          { name: "Concussion", level: 2 },
          { name: "Arm Breaker", level: 2 },
          { name: "Low Blow", level: 2 }
        ]
      }
    },
    {
      name: "Corkscrew",
      description:
        "Deals melee STR-based bash damage to one enemy. Attempts to inflict paralysis on the target.",
      levels: {
        total: 8,
        speedModifier: "65%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 6, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        baseParalysisChance: [
          { value: "30%", colspan: 3 },
          { value: "37%", colspan: 4 },
          { value: "45%", colspan: 1 }
        ],
        damage: ["115%", "120%", "125%", "140%", "145%", "150%", "155%", "180%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: null,
        level: null
      }
    },
    {
      name: "Adrenaline",
      description:
        "Restores the user's TP when they inflict an ailment, bind, or stun. Does not scale based on how many enemies have disables inflicted.",
      levels: {
        total: 4,
        percentageMaxTpRestore: [
          { value: "1%", colspan: 3 },
          { value: "2%", colspan: 1 }
        ],
        staticTpRestore: [1, 2, 3, 4]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Double Punch",
      description:
        "When using any single-hit cestus skill that inflicts a disable on their own, or when Corkscrew activates from Following Strike, or if Cross Counter activates, if they fail to inflict their associated disable, the user has a chance to repeat that skill.",
      levels: {
        total: 10,
        chance: [
          "13%",
          "16%",
          "19%",
          "22%",
          "25%",
          "28%",
          "31%",
          "34%",
          "37%",
          "50%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "HP Up",
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
      name: "Chop",
      description: "Increases material yield from chopping in the labyrinth.",
      levels: null,
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Devil's Fist",
      description:
        "Consumes a percentage of the user's current HP to deal melee STR-based bash damage to one enemy, with splash damage.",
      levels: {
        speedModifier: "40%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 12, colspan: 3 },
          { value: 16, colspan: 4 },
          { value: 20, colspan: 1 }
        ],
        percentageCurrentHpCost: [
          { value: "10%", colspan: 3 },
          { value: "20%", colspan: 4 },
          { value: "30%", colspan: 1 }
        ],
        damage: ["200%", "206%", "212%", "257%", "263%", "269%", "275%", "350%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: null,
        level: null
      }
    },
    {
      name: "Fighting Spirit",
      description:
        "If the user lost HP on the last turn, increases their damage dealt on this turn.",
      levels: {
        total: 6,
        damageIncrease: ["10%", "12%", "14%", "16%", "18%", "30%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Devil's Fist",
        level: 3
      }
    },
    {
      name: "Following Strike",
      description:
        "When the user inflicts a bind on an enemy, they have a chance to follow up with Corkscrew.",
      levels: {
        total: 10,
        chance: [
          "13%",
          "16%",
          "19%",
          "22%",
          "25%",
          "28%",
          "31%",
          "34%",
          "37%",
          "50%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: [
          { name: "One-Two Punch", level: 2 },
          { name: "Corkcrew", level: 2 }
        ]
      }
    },
    {
      name: "Leading Blow",
      description:
        "Deals melee STR-based bash damage to one enemy. If the target has any binds, follow-up with Concussion (head), Arm Breaker (arms), and/or Low Blow (legs). If the target has any ailment, follow-up with Corkscrew. All follow-ups have a damage multiplier applied to their original damage.",
      levels: {
        total: 10,
        speedModifier: "80%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 14, colspan: 4 },
          { value: 19, colspan: 5 },
          { value: 25, colspan: 1 }
        ],
        followUpDamageMultiplier: [
          "0.65x",
          "0.67x",
          "0.69x",
          "0.71x",
          "0.79x",
          "0.81x",
          "0.83x",
          "0.85x",
          "0.87x",
          "1x"
        ],
        damage: [
          "100%",
          "103%",
          "106%",
          "109%",
          "121%",
          "124%",
          "127%",
          "130%",
          "133%",
          "150%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: "Following Strike",
        level: 2
      }
    },
    {
      name: "Breather",
      description:
        "Only usable if the user is afflicted with any ailment or bind. Removes any ailment and a set number of binds the user is inflicted with. If any disables are removed, the user's damage is increased until the end of the next turn.",
      levels: {
        total: 4,
        speedModifier: "30%",
        tpCost: [{ value: 3, colspan: 3 }, { value: 8, colspan: 1 }],
        bindsRemoved: [{ value: 1, colspan: 3 }, { value: 3, colspan: 1 }],
        damageMultiplier: ["1.2x", "1.25x", "1.3x", "1.5x"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Fault Blocker",
      description:
        "Reduces the chance of party members in the user's row having ailments or binds inflicted on them for a set amount of turns.",
      levels: {
        total: 4,
        duration: 4,
        tpCost: [{ value: 8, colspan: 3 }, { value: 14, colspan: 1 }],
        speedModifier: ["50%", "70%", "90%", "150%"],
        inflictionChanceMultiplier: ["0.75x", "0.71x", "0.67x", "0.5x"]
      },
      bodyPartsUsed: "Arms",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Clinch",
      description:
        "Attempts to bind the head, arms, and legs of both the user and one enemy.",
      levels: {
        total: 6,
        speedModifier: "50%",
        tpCost: [{ value: 9, colspan: 5 }, { value: 15, colspan: 1 }],
        baseBindChance: ["20%", "22%", "24%", "26%", "28%", "35%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Breather", level: 1 },
          { name: "Fault Blocker", level: 1 }
        ]
      }
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
    },
    {
      name: "Cross Counter",
      description:
        "For one turn, when any party member in the user's row is attacked with physical damage, the user will counterattack with melee STR-based bash damage that attempts to bind the body part used for the damage source. If the source of damage was a normal attack, Cross Counter will attempt to bind the arms.",
      levels: {
        total: 6,
        accuracyModifier: "+50%",
        tpCost: [{ value: 5, colspan: 5 }, { value: 9, colspan: 1 }],
        baseBindChance: ["40%", "43%", "46%", "49%", "52%", "65%"],
        damage: ["300%", "325%", "350%", "375%", "400%", "500%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: null,
        level: null
      }
    }
  ],
  master: [
    {
      name: "Thunder Fist",
      description:
        "Deals melee STR-based bash + volt damage to one enemy. If the target does not die to Thunder Fist, the user takes backlash damage.",
      levels: {
        total: 8,
        speedModifier: "120%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 10, colspan: 4 },
          { value: 14, colspan: 1 }
        ],
        percentageCurrentHpBacklash: [
          { value: "20%", colspan: 3 },
          { value: "35%", colspan: 4 },
          { value: "50%", colspan: 1 }
        ],
        damage: ["200%", "210%", "220%", "270%", "280%", "290%", "300%", "400%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: "Fighting Spirit",
        level: 2
      }
    },
    {
      name: "Lash Out",
      description:
        "Deals multiple instances of melee STR-based bash damage to one enemy. The number of hits is equal to how many times the user attacked enemies on the last turn. Lash Out always counts as 1 hit for the purpose of its own calculation of number of hits.",
      levels: {
        total: 6,
        speedModifier: "80%",
        accuracyModifier: "0%",
        maximumHits: 9,
        tpCost: [{ value: 4, colspan: 5 }, { value: 9, colspan: 1 }],
        damagePerHit: ["50%", "54%", "58%", "62%", "66%", "85%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: "Leading Blow",
        level: 3
      }
    },
    {
      name: "Meditation",
      description:
        "Increases the user's damage dealt based on the number of ailments and binds the target has.",
      levels: {
        total: 4,
        speedModifier: "30%",
        tpCost: [{ value: 5, colspan: 3 }, { value: 10, colspan: 1 }],
        inflictionChanceMultiplier: ["1.35x", "1.4x", "1.45x", "1.7x"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Clinch",
        level: 3
      }
    },
    {
      name: "Raging Billows",
      description:
        "Increases the user's damage dealt based on the number of ailments and binds the target has.",
      levels: {
        total: 10,
        oneDisableIncrease: [
          "6%",
          "7%",
          "8%",
          "9%",
          "10%",
          "11%",
          "12%",
          "13%",
          "14%",
          "20%"
        ],
        twoDisableIncrease: [
          "12%",
          "14%",
          "16%",
          "18%",
          "20%",
          "22%",
          "24%",
          "26%",
          "28%",
          "40%"
        ],
        threeDisableIncrease: [
          "18%",
          "21%",
          "24%",
          "27%",
          "30%",
          "33%",
          "36%",
          "39%",
          "42%",
          "60%"
        ],
        fourDisableIncrease: [
          "30%",
          "35%",
          "40%",
          "45%",
          "50%",
          "55%",
          "60%",
          "65%",
          "70%",
          "100%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Meditation",
        level: 2
      }
    },
    {
      name: "Million Rush",
      description:
        "Normal attacks may hit multiple times if the user has a subweapon equipped. Enables the equipping of subweapons. The chance is rolled for independently of the number of hits.",
      levels: {
        total: 8,
        minimumHits: 2,
        maximumHits: 4,
        chance: ["11%", "13%", "15%", "17%", "19%", "21%", "23%", "34%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Resonance Blow",
      description:
        "Deals multiple instances of melee STR-based bash damage to one enemy. The number of hits is increased based on the number of turns since Resonance Blow was last used.",
      levels: {
        total: 6,
        speedModifier: "60%",
        accuracyModifier: "+5%",
        maximumHits: 9,
        tpCost: [{ value: 25, colspan: 5 }, { value: 35, colspan: 1 }],
        damagePerHit: ["60%", "64%", "68%", "72%", "76%", "100%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Cestus",
        skill: "Million Lash",
        level: 3
      }
    }
  ]
};


export default pugilist;
