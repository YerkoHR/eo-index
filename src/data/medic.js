// Skill requirements revisited

const medic = {
  name: "Medic",
  force: {
    boost: {
      name: "Intensive Care",
      description:
        "Increases the healing power and action speed of skills and items, while also reducing their TP costs by half. The amount of TP restored by Hamaos and Amritas is also increased by Intensive Care.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        healingPowerMultiplier: "1.7x",
        speedMultiplier: "1.7x",
        tpCostReduction: "0.5x"
      }
    },
    break: {
      name: "Healing Touch",
      description:
        "Restores all party members' HP. Revives all dead party members at full HP. Removes any ailments, binds, and debuffs",
      bodyPartsUsed: "Head",
      levels: {
        total: 3,
        speedModifier: "300%",
        healingPower: ["300%", "600%", "900%"]
      }
    }
  },
  novice: [
    {
      name: "Healing",
      description: "Restores one party member's HP.",
      levels: {
        total: 10,
        speedModifier: "150%",
        tpCost: [
          { value: 3, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 8, colspan: 1 }
        ],
        healingPower: [
          "130%",
          "145%",
          "160%",
          "175%",
          "225%",
          "240%",
          "255%",
          "270%",
          "285%",
          "370%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    },
    {
      name: "Line Heal",
      description: "Restores one row of party members' HP.",
      levels: {
        total: 10,
        speedModifier: "125%",
        tpCost: [
          { value: 7, colspan: 4 },
          { value: 10, colspan: 5 },
          { value: 15, colspan: 1 }
        ],
        healingPower: [
          "110%",
          "120%",
          "130%",
          "140%",
          "170%",
          "180%",
          "190%",
          "200%",
          "210%",
          "270%"
        ]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Healing",
        level: 3
      }
    },
    {
      name: "Patch Up",
      description: "Restores all party members' HP at the end of battle.",
      levels: {
        total: 8,
        healingPower: ["45%", "55%", "65%", "75%", "85%", "95%", "105%", "150%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Antibodies",
      description:
        "Adds to the user's chance of recovering from ailments and binds at the end of the turn.",
      levels: {
        total: 6,
        recoveryChanceIncrease: ["15%", "20%", "25%", "30%", "35%", "50%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Scavenge",
      description: "Increases monster drop drop rates",
      levels: {
        total: 4,
        dropRateMultiplier: ["1.05x", "1.08x", "1.12x", "1.20x"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Refresh",
      description: "Removes ailments.",
      levels: {
        total: 4,
        speedModifier: "100%",
        TargetType: [
          { value: "Single", colspan: 2 },
          { value: "Row", colspan: 2 }
        ],
        tpCost: [5, 2, 12, 6]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    },
    {
      name: "Revive",
      description: "Revives one dead party member.",
      levels: {
        total: 8,
        speedModifier: "70%",
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 16, colspan: 1 }
        ],
        reviveHpRestore: [1, 20, 40, 120, 145, 170, 200, 400]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    },
    {
      name: "Head Bash",
      description:
        "Deals melee STR-based bash damage to one enemy. Attempts to bind the head of the target.",
      levels: {
        total: 8,
        speedModifier: "80%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 7, colspan: 4 },
          { value: 12, colspan: 1 }
        ],
        baseHeadBindChance: [
          { value: "35%", colspan: 3 },
          { value: "42%", colspan: 4 },
          { value: "50%", colspan: 1 }
        ],
        damage: ["200%", "210%", "220%", "255%", "265%", "275%", "285%", "330%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Staff",
        skill: null,
        level: null
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
      name: "Delayed Heal",
      description:
        "At the start of the next turn, restores all party members' HP. Cannot be used on the turn where a previous Delayed Heal would activate. If the user dies, becomes afflicted with panic, sleep, or has their head bound before Delayed Heal goes off, Delayed Heal will fail.",
      levels: {
        total: 8,
        tpCost: [
          { value: 10, colspan: 3 },
          { value: 14, colspan: 4 },
          { value: 18, colspan: 1 }
        ],
        healingPower: [
          "80%",
          "85%",
          "90%",
          "115%",
          "120%",
          "125%",
          "130%",
          "170%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Line Heal",
        level: 2
      }
    },
    {
      name: "Unbind",
      description: "Removes binds.",
      levels: {
        total: 4,
        speedModifier: "100%",
        TargetType: [
          { value: "Single", colspan: 2 },
          { value: "Row", colspan: 2 }
        ],
        tpCost: [5, 2, 12, 6]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Refresh",
        level: 2
      }
    },
    {
      name: "Group Therapy",
      description:
        "Increases the range of healing skills, but decreases healing power and action speed. Single-target skills become row-target, and row - target skills become party-target.Has no positive effect on skills that are innately party-target.",
      levels: {
        total: 8,
        speedModifier: "70%",
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        tpCost: [
          { value: 15, colspan: 3 },
          { value: 20, colspan: 4 },
          { value: 25, colspan: 1 }
        ]
      },
      bodyPartsUsed: "Heal",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Unbind",
        level: 1
      }
    },
    {
      name: "Final Gift",
      description: "When the user dies, they restore all party members' HP.",
      levels: {
        total: 4,
        healingPower: ["100%", "140%", "180%", "350%"]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Revive",
        level: 3
      }
    },
    {
      name: "Auto-Revive",
      description:
        "When a party member dies, the user has a chance to revive them.",
      levels: {
        total: 10,
        chance: [
          "4%",
          "5%",
          "6%",
          "7%",
          "8%",
          "9%",
          "10%",
          "11%",
          "12%",
          "16%"
        ],
        reviveHpRestore: [1, 20, 40, 60, 80, 110, 140, 170, 200, 300]
      },
      bodyPartsUsed: "Head",
      type: "Suport",
      requeriments: {
        weapon: null,
        skill: "Final Gift",
        level: 2
      }
    },
    {
      name: "Star Drop",
      description:
        "Deals melee STR-based bash damage to one enemy. Reduces the target's physical defense for 4 turns.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 7, colspan: 5 }, { value: 13, colspan: 1 }],
        defenseDecrease: ["240%", "255%", "270%", "285%", "300%", "370%"],
        damage: ["10%", "12%", "14%", "16%", "18%", "25%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Staff",
        skill: "Head Bash",
        level: 3
      }
    },
    {
      name: "Medical Rod",
      description:
        "Deals melee STR-based bash damage to one enemy. Reduces the target's elemental defense for 4 turns.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 7, colspan: 5 }, { value: 13, colspan: 1 }],
        defenseDecrease: ["240%", "255%", "270%", "285%", "300%", "370%"],
        damage: ["15%", "17%", "19%", "21%", "23%", "30%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Staff",
        skill: "Star Drop",
        level: 2
      }
    },
    {
      name: "Safe Passage",
      description:
        "For a set amount of steps in the Labyrinth, nullifies damage tiles and muddy tiles. Reduces damage taken from certain FOE field attacks.",
      levels: {
        total: 6,
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        duration: [50, 70, 80, 90, 100, 255]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: null
    },
    {
      name: "Elemental Defense Up",
      description: "Reduces elemental damage to the user.",
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
    }
  ],
  master: [
    {
      name: "Heal-All",
      description: "Restores all party members' HP.",
      levels: {
        total: 10,
        speedModifier: "70%",
        tpCost: [
          { value: 15, colspan: 4 },
          { value: 21, colspan: 5 },
          { value: 30, colspan: 1 }
        ],
        healingPower: [
          "90%",
          "96%",
          "102%",
          "108%",
          "132%",
          "138%",
          "144%",
          "150%",
          "156%",
          "200%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Delayed Heal",
        level: 3
      }
    },
    {
      name: "Chase Heal",
      description:
        "For one turn, when any party member is attacked, the user will automatically heal them after the enemy action that caused the damage ends. Each party member has a limit on how many times Chase Heal can activate on them per turn. Each time Chase Heal activates, its chance of activating again on that turn is decreased.",
      levels: {
        total: 8,
        tpCost: [
          { value: 10, colspan: 3 },
          { value: 14, colspan: 4 },
          { value: 20, colspan: 1 }
        ],
        limitPerPerson: [
          { value: 2, colspan: 3 },
          { value: 3, colspan: 4 },
          { value: 4, colspan: 1 }
        ],
        chanceDecrease: [
          { value: "-40%", colspan: 3 },
          { value: "-25%", colspan: 4 },
          { value: "-15%", colspan: 1 }
        ],
        healingPower: [
          { value: "60%", colspan: 1 },
          { value: "72%", colspan: 1 },
          { value: "84%", colspan: 2 },
          { value: "96%", colspan: 1 },
          { value: "108%", colspan: 1 },
          { value: "120%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Delayed Heal",
        level: 3
      }
    },
    {
      name: "Overheal",
      description:
        "Medic skills can increase party members' maximum HP for one turn, up to a certain percentage.",
      levels: {
        total: 6,
        maxOverhealedHp: ["10%", "13%", "16%", "19%", "22%", "34%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Deja Vu",
      description:
        "At the end of each turn, for a set amount of turns, each party member will have the most recent Medic skill from the userapplied to them during the duration of Deja Vu applied again. If it heals HP, the amount is reduced.",
      levels: {
        total: 8,
        speedModifier: "40%",
        tpCost: [
          { value: 9, colspan: 3 },
          { value: 12, colspan: 4 },
          { value: 15, colspan: 1 }
        ],
        duration: [
          { value: 6, colspan: 3 },
          { value: 8, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        healingPowerModifier: [
          { value: "20%", colspan: 1 },
          { value: "26%", colspan: 1 },
          { value: "32%", colspan: 2 },
          { value: "38%", colspan: 1 },
          { value: "44%", colspan: 1 },
          { value: "50%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Heavy Strike",
      description: "Deals melee STR-based bash damage to one enemy.",
      levels: {
        total: 10,
        speedModifier: "50%",
        accuracyModifier: "-5%",
        tpCost: [
          { value: 25, colspan: 4 },
          { value: 35, colspan: 5 },
          { value: 50, colspan: 1 }
        ],
        damage: [
          "350%",
          "365%",
          "380%",
          "395%",
          "455%",
          "480%",
          "505%",
          "530%",
          "555%",
          "700%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Staff",
        skill: "Medical Rod",
        level: 3
      }
    },
    {
      name: "Staff Mastery",
      description:
        "Increases the user's physical attack and maximum TP when a staff is equipped.",
      levels: {
        total: 8,
        physicalAttackAndMaxTpIncrease: [
          "5%",
          "6%",
          "7%",
          "8%",
          "9%",
          "10%",
          "11%",
          "15%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Heavy Strike",
        level: 1
      }
    }
  ]
};
export default medic;
