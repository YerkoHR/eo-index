// Skill requirements revisited

const arcanist = {
  name: "Arcanist",
  force: {
    boost: {
      name: "Circle Paradise",
      description:
        "For 3 turns, increases the user's chance of inflicting ailments and binds. Pauses Circle duration. Prevents Circles from being dispelled.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        inflictionChanceMultiplier: "1.4x"
      }
    },
    break: {
      name: "Releasal Spell",
      description:
        "Removes all buffs and accumulative disable resistance from one enemy.",
      bodyPartsUsed: "Head",
      levels: null
    }
  },
  novice: [
    {
      name: "Circle Boon",
      description:
        "If a Circle is active, restores all party members' HP at the end of the turn.",
      levels: {
        total: 4,
        healingPower: ["15%", "20%", "25%", "40%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Dismiss Heal",
      description:
        "Requires an active Circle to use. Dismisses the current Circle to restore all party members' HP.",
      levels: {
        total: 10,
        speedModifier: "200%",
        tpCost: [
          { value: 4, colspan: 4 },
          { value: 12, colspan: 5 },
          { value: 24, colspan: 1 }
        ],
        healingPower: [
          "80%",
          "84%",
          "88%",
          "92%",
          "135%",
          "140%",
          "145%",
          "150%",
          "155%",
          "220%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Circle Boon",
        level: 1
      }
    },
    {
      name: "Chain Circle",
      description:
        "Creates a Circle that attempts to bind the arms of all enemies at the end of every turn for a set amount of turns. Overwrites any currently active Circles.",
      levels: {
        total: 8,
        speedModifier: "10%",
        duration: 4,
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 18, colspan: 1 }
        ],
        baseArmBindChance: [
          "20%",
          "21%",
          "22%",
          "26%",
          "27%",
          "28%",
          "29%",
          "35%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: null
    },
    {
      name: "Snare Circle",
      description:
        "Creates a Circle that attempts to bind the legs of all enemies at the end of every turn for a set amount of turns. Overwrites any currently active Circles.",
      levels: {
        total: 8,
        speedModifier: "10%",
        duration: 4,
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 18, colspan: 1 }
        ],
        baseLegBindChance: [
          "20%",
          "21%",
          "22%",
          "26%",
          "27%",
          "28%",
          "29%",
          "35%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Chain Circle",
        level: 2
      }
    },
    {
      name: "Nerve Circle",
      description:
        "Creates a Circle that attempts to inflict paralysis on all enemies at the end of every turn for a set amount of turns. Overwrites any currently active Circles.",
      levels: {
        total: 8,
        speedModifier: "10%",
        duration: 4,
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 10, colspan: 4 },
          { value: 15, colspan: 1 }
        ],
        baseParalysisChance: [
          "25%",
          "26%",
          "27%",
          "31%",
          "32%",
          "33%",
          "34%",
          "40%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: null
    },
    {
      name: "Curse Circle",
      description:
        "Creates a Circle that attempts to inflict curse on all enemies at the end of every turn for a set amount of turns. Overwrites any currently active Circles.",
      levels: {
        total: 8,
        speedModifier: "10%",
        duration: 4,
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 10, colspan: 4 },
          { value: 15, colspan: 1 }
        ],
        baseCurseChance: [
          "35%",
          "36%",
          "38%",
          "43%",
          "44%",
          "46%",
          "47%",
          "55%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Nerve Circle",
        level: 2
      }
    },
    {
      name: "Bracing Walk",
      description:
        "For every three steps taken in the Labyrinth, restores all party members' HP.",
      levels: {
        total: 4,
        hpPerThreeSteps: [2, 3, 5, 10]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Proficiency",
      description:
        "Restores the user's TP when a Circle is dismissed or runs out of duration.",
      levels: {
        total: 6,
        percentageMaxTpRestore: [
          { value: "1%", colspan: 5 },
          { value: "2%", colspan: 1 }
        ],
        staticTpRestore: [1, 2, 3, 4, 5, 6]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Chop",
      description: "Increases material yield fom chopping in the labyrinth.",
      levels: null,
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Dismiss Revive",
      description:
        "Requires an active Circle to use. Dismisses the current Circle to attempt to revive one row of party members",
      levels: {
        total: 10,
        speedModifier: "200%",
        tpCost: [
          { value: 10, colspan: 4 },
          { value: 20, colspan: 5 },
          { value: 35, colspan: 1 }
        ],
        reviveChance: [
          "65%",
          "67%",
          "68%",
          "70%",
          "76%",
          "77%",
          "79%",
          "80%",
          "82%",
          "92%"
        ],
        reviveRestore: [1, 10, 20, 30, 70, 80, 90, 100, 110, 200]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Dismiss Heal",
        level: 2
      }
    },
    {
      name: "Dismiss Blow",
      description:
        "Requires an active Circle to use. Dismisses the current Circle to deal ranged INT-based almighty damage to one enemy.",
      levels: {
        total: 10,
        speedModifier: "200%",
        accuracyModifier: "+50%",
        tpCost: [
          { value: 3, colspan: 4 },
          { value: 13, colspan: 5 },
          { value: 30, colspan: 1 }
        ],
        damage: [
          "250%",
          "260%",
          "270%",
          "280%",
          "350%",
          "360%",
          "370%",
          "380%",
          "390%",
          "500%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Dismiss Revive",
        level: 3
      }
    },
    {
      name: "Hood Circle",
      description:
        "Creates a Circle that attempts to bind the heads of all enemies at the end of every turn for a set amount of turns. Overwrites any currently active Circles.",
      levels: {
        total: 8,
        speedModifier: "10%",
        duration: 4,
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 18, colspan: 1 }
        ],
        baseHeadBindChance: [
          "20%",
          "21%",
          "22%",
          "26%",
          "27%",
          "28%",
          "29%",
          "35%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Snare Circle",
        level: 2
      }
    },
    {
      name: "Sleep Circle",
      description:
        "Creates a Circle that attempts to inflict sleep on all enemies at the end of every turn for a set amount of turns. Overwrites any currently active Circles.",
      levels: {
        total: 8,
        speedModifier: "10%",
        duration: 4,
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 10, colspan: 4 },
          { value: 15, colspan: 1 }
        ],
        baseSleepChance: [
          "30%",
          "31%",
          "33%",
          "38%",
          "39%",
          "41%",
          "42%",
          "50%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Curse Circle",
        level: 2
      }
    },
    {
      name: "Charm Eye",
      description: "Reduces all enemies' attack for a set amount of turns.",
      levels: {
        total: 6,
        duration: 4,
        tpCost: [{ value: 7, colspan: 5 }, { value: 12, colspan: 1 }],
        speedModifier: ["40%", "60%", "80%", "100%", "120%", "200%"],
        attackDecrease: ["8%", "9%", "10%", "11%", "12%", "15%"]
      },
      bodyPartsUsed: "Head",
      type: "Debuff",
      requeriments: null
    },
    {
      name: "Atrophic Eye",
      description: "Reduces all enemies' defense for a set amount of turns.",
      levels: {
        total: 6,
        duration: 4,
        tpCost: [{ value: 7, colspan: 5 }, { value: 12, colspan: 1 }],
        speedModifier: ["40%", "60%", "80%", "100%", "120%", "200%"],
        attackDecrease: ["10%", "12%", "14%", "16%", "18%", "25%"]
      },
      bodyPartsUsed: "Head",
      type: "Debuff",
      requeriments: {
        weapon: null,
        skill: "Charm Eye",
        level: 2
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
      name: "Tame Ground",
      description:
        "For a set amount of steps in the Labyrinth, nullifies damage tiles and muddy tiles. Reduces damage taken from certain FOE field attacks",
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
      name: "Warding Mist",
      description:
        "Gives the user a chance to nullify ailments, binds, and stuns directed at party members in their row.",
      levels: {
        total: 4,
        chance: ["4%", "5%", "6%", "10%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    }
  ],
  master: [
    {
      name: "Dismiss Blast",
      description:
        "Requires an active Circle to use. Dismisses the current Circle to deal ranged INT-based almighty damage to all enemies.",
      levels: {
        total: 10,
        speedModifier: "200%",
        accuracyModifier: "+50%",
        tpCost: [
          { value: 12, colspan: 4 },
          { value: 24, colspan: 5 },
          { value: 40, colspan: 1 }
        ],
        damage: [
          "160%",
          "167%",
          "174%",
          "181%",
          "231%",
          "241%",
          "251%",
          "261%",
          "271%",
          "360%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Dismiss Blow",
        level: 2
      }
    },
    {
      name: "Circle Mastery",
      description: "Increases the effect of Dismiss skills.",
      levels: {
        total: 6,
        dismissHealMultiplier: [
          "1.08x",
          "1.11x",
          "1.14x",
          "1.17x",
          "1.2x",
          "1.3x"
        ],
        dismissHealPercentageMaxHpHeal: [
          "10%",
          "15%",
          "20%",
          "25%",
          "30%",
          "50%"
        ],
        dismissBlowAndsBlastDamageModifier: [
          "1.08x",
          "1.11x",
          "1.14x",
          "1.17x",
          "1.2x",
          "1.3x"
        ],
        dismissReviveChanceIncrease: ["+2%", "+3%", "+4%", "+5%", "+6%", "+8%"],
        dismissQuakeStunChanceMultiplier: [
          "1.08x",
          "1.11x",
          "1.14x",
          "1.17x",
          "1.2x",
          "1.3x"
        ]
      },
      bodyPartsUsed: null,
      type: "support",
      requeriments: {
        weapon: null,
        skill: "Dismiss Blast",
        level: 3
      }
    },
    {
      name: "Poison Circle",
      description:
        "Creates a Circle that attempts to inflict poison on all enemies at the end of every turn for a set amount of turns. Overwrites any currently active Circles.",
      levels: {
        total: 8,
        speedModifier: "10%",
        duration: 4,
        tpCost: [
          { value: 10, colspan: 3 },
          { value: 15, colspan: 4 },
          { value: 21, colspan: 1 }
        ],
        basePoisonChance: [
          "30%",
          "31%",
          "32%",
          "36%",
          "37%",
          "38%",
          "39%",
          "45%"
        ],
        basePoisonFactor: [40, 43, 46, 58, 61, 64, 67, 90]
      },
      bodyPartsUsed: "Heal",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Sleep Circle",
        level: 2
      }
    },
    {
      name: "Chaos Circle",
      description:
        "Creates a Circle that attempts to inflict panic on all enemies at the end of every turn for a set amount of turns. Overwrites any currently active Circles.",
      levels: {
        total: 8,
        speedModifier: "10%",
        duration: 4,
        tpCost: [
          { value: 10, colspan: 3 },
          { value: 15, colspan: 4 },
          { value: 21, colspan: 1 }
        ],
        basePanicChance: [
          "14%",
          "15%",
          "16%",
          "18%",
          "19%",
          "20%",
          "21%",
          "25%"
        ]
      },
      bodyPartsUsed: "Heal",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Sleep Circle",
        level: 2
      }
    },
    {
      name: "Dismiss Quake",
      description:
        "Requires an active Circle to use. Dismisses the current Circle to attempt to stun all enemies.",
      levels: {
        total: 10,
        speedModifier: "500%",
        tpCost: [
          { value: 6, colspan: 4 },
          { value: 12, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        baseStunChance: [
          "40%",
          "41%",
          "42%",
          "43%",
          "47%",
          "48%",
          "49%",
          "50%",
          "51%",
          "60%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Poison Circle", level: 3 },
          { name: "Chaos Circle", level: 3 }
        ]
      }
    },
    {
      name: "Tp Return",
      description:
        "Restores the user's TP when they inflict an ailment, bind, or stun.",
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
    }
  ]
};

export default arcanist;
