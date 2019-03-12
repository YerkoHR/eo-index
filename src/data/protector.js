const protector = {
  name: "Protector",
  force: {
    boost: {
      name: "Shield Protect",
      description: "For 3 turns, increases the effectiveness of shield skills.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        damageReductionMultiplier: "1.5x"
      }
    },
    break: {
      name: "Painless",
      description:
        "Nullifies all damaging attacks to the party for one turn.      ",
      bodyPartsUsed: "Arms",
      levels: null
    }
  },
  novice: [
    {
      name: "Front Guard",
      description:
        "Reduces physical damage to the front row for one turn. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Front Guard's effect will end.",
      levels: {
        total: 6,
        tpCost: [{ value: 4, colspan: 5 }, { value: 9, colspan: 1 }],
        incomingDamageReduction: ["30%", "33%", "36%", "39%", "42%", "55%"]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: {
        weapon: "Shield",
        skill: null,
        level: null
      }
    },
    {
      name: "Rear Guard",
      description: "Reduces physical damage to the back row for one turn. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Rear Guard's effect will end.",
      levels: {
        total: 4,
        toCost: [{ value: 3, colspan: 3 }, { value: 6, colspan: 1 }],
        incomingDamageReduction: ["35%", "42%", "49%", "65%"]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: {
        weapon: "Shield",
        skill: "Front Guard",
        level: 2
      }
    },
    {
      name: "Ally Shield",
      description:
        "Targets one party member. All damage directed at that party member will instead be dealt to the user for one turn. Redirected damage is reduced. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Ally Shield's effect will end.",
      levels: {
        total: 8,
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 7, colspan: 1 }
        ],
        redirectedDamageReduction: [
          "5%",
          "8%",
          "11%",
          "19%",
          "22%",
          "25%",
          "28%",
          "35%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: null
    },
    {
      name: "Fortify",
      description: "Increases the user's defense for a set amount of turns.",
      levels: {
        total: 8,
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 7, colspan: 4 },
          { value: 12, colspan: 1 }
        ],
        speedModifier: [
          { value: "100%", colspan: 3 },
          { value: "130%", colspan: 4 },
          { value: "160%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        defenseIncrease: [
          { value: "21%", colspan: 1 },
          { value: "24%", colspan: 1 },
          { value: "27%", colspan: 2 },
          { value: "29%", colspan: 1 },
          { value: "31%", colspan: 1 },
          { value: "33%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Ally Shield",
        level: 2
      }
    },
    {
      name: "Shield Smite",
      description:
        "Deals melee STR-based bash damage to one enemy. Uses triple the user's equipped shield's DEF value as a replacement for ATK. Attempts to bind the target's arms.",
      levels: {
        total: 10,
        speedModifier: "90%",
        baseAccuracy: "96%",
        baseArmBindChance: [
          { value: "35%", colspan: 4 },
          { value: "42%", colspan: 5 },
          { value: "50%", colspan: 1 }
        ],
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 10, colspan: 5 },
          { value: 16, colspan: 1 }
        ],
        damage: [
          "230%",
          "240%",
          "250%",
          "260%",
          "295%",
          "305%",
          "315%",
          "325%",
          "335%",
          "400%"
        ]
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
      name: "Taunt",
      description:
        "Increases the user's defense and chance of being targeted (enmity) for a set amount of turns.",
      levels: {
        total: 8,
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 9, colspan: 1 }
        ],
        speedModifier: [
          { value: "120%", colspan: 3 },
          { value: "150%", colspan: 4 },
          { value: "200%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        defenseIncrease: [
          { value: "3%", colspan: 1 },
          { value: "4%", colspan: 2 },
          { value: "6%", colspan: 2 },
          { value: "7%", cols: 1 },
          { value: "9%", colspan: 1 },
          { value: "10%", colspan: 2 }
        ],
        enmityIncrease: [
          { value: "+25%", colspan: 1 },
          { value: "+30%", colspan: 2 },
          { value: "+35%", colspan: 2 },
          { value: "+40%", colspan: 1 },
          { value: "+45%", colspan: 1 },
          { value: "+50%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Preemptive Taunt",
      description:
        "If the user knows Taunt, gives them a chance to use it at the start of battle. If another party member activated Preemptive Taunt, the user will be unable to activate it.",
      levels: {
        total: 6,
        chance: ["25%", "30%", "35%", "42%", "49%", "65%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Taunt",
        level: 2
      }
    },
    {
      name: "Healing Wall",
      description:
        "When the user uses the Defend command, all party members in their row recover HP.",
      levels: {
        total: 6,
        staticHpRestore: [7, 8, 9, 10, 11, 15],
        percentageMaxHpRestore: ["4%", "5%", "6%", "7%", "8%", "12%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Chop",
      description: "Increases material yield from chopping in the laberinth.",
      levels: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Recovery Guard",
      description:
        "Targets one row of party members. Removes binds from that row at the start of the turn, and reduces physical damage to that row for one turn. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Recovery Guard's effect will end.",
      levels: {
        total: 4,
        tpCost: [{ value: 15, colspan: 3 }, { value: 20, colspan: 1 }],
        damageReduction: ["25%", "30%", "35%", "50%"]
      },
      bodyPartsUsed: "Arms",
      type: "Heal",
      requeriments: {
        weapon: "Shield",
        skill: "Rear Guard",
        level: 1
      }
    },
    {
      name: "Aegis",
      description:
        "Gives the user a chance to survive an attack that would've killed them, leaving them at 1 HP. Can only activate once per battle.",
      levels: {
        total: 10,
        chance: [
          "10%",
          "11%",
          "12%",
          "13%",
          "18%",
          "19%",
          "20%",
          "21%",
          "22%",
          "30%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Fortify",
        level: 1
      }
    },
    {
      name: "Shield Bash",
      description:
        "Deals melee STR-based bash damage to all enemies. Uses triple the user's equipped shield's DEF value as a replacement for ATK. Reduces hit targets' physical attack for a set amount of turns.",
      levels: {
        total: 10,
        speedModifier: "60%",
        baseAccuracy: "90%",
        duration: 4,
        tpCost: [
          { value: 12, colspan: 4 },
          { value: 15, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        attackReduction: [
          { value: "8%", colspan: 4 },
          { value: "11%", colspan: 5 },
          { value: "15%", colspan: 1 }
        ],
        damage: [
          "180%",
          "187%",
          "194%",
          "201%",
          "226%",
          "233%",
          "240%",
          "247%",
          "254%",
          "300%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Shield",
        skill: "Shield Smite",
        level: 3
      }
    },
    {
      name: "Keep Guard",
      description:
        "Reduces all damage to one party member until the end of the next turn. The user cannot use Guard skills on the next turn. If, during the duration of Keep Guard's effect, the user is inflicted with panic, sleep, or their arms are bound, Keep Guard's effect will end.",
      levels: {
        total: 6,
        tpCost: [{ value: 3, colspan: 5 }, { value: 7, colspan: 1 }],
        incomingDamageReduction: ["25%", "28%", "31%", "34%", "37%", "50%"]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: {
        weapon: "Shield",
        skill: null,
        level: null
      }
    },
    {
      name: "Physical Def Up",
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
      name: "Elemental Def Up",
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
    },
    {
      name: "Fire Wall",
      description:
        "Reduces one instance of fire damage to each party member for one turn. High levels restore the targeted party member's HP, for an amount based on the damage they would've received. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Ice Wall's effect will end.",
      levels: {
        total: 6,
        tpCost: [{ value: 6, colspan: 3 }, { value: 13, colspan: 3 }],
        incomingDamageReduction: [
          { value: "50%", colspan: 1 },
          { value: "65%", colspan: 1 },
          { value: "80%", colspan: 1 },
          { value: "100%", colspan: 3 }
        ],
        percentageDamageAsHpRestoration: [
          { value: "0%", colspan: 4 },
          { value: "40%", colspan: 1 },
          { value: "150%", colspan: 1 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: {
        weapon: "Shield",
        skill: null,
        level: null
      }
    },
    {
      name: "Ice Wall",
      description:
        "Reduces one instance of ice damage to each party member for one turn. High levels restore the targeted party member's HP, for an amount based on the damage they would've received. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Ice Wall's effect will end.",
      levels: {
        total: 6,
        tpCost: [{ value: 6, colspan: 3 }, { value: 13, colspan: 3 }],
        incomingDamageReduction: [
          { value: "50%", colspan: 1 },
          { value: "65%", colspan: 1 },
          { value: "80%", colspan: 1 },
          { value: "100%", colspan: 3 }
        ],
        percentageDamageAsHpRestoration: [
          { value: "0%", colspan: 4 },
          { value: "40%", colspan: 1 },
          { value: "150%", colspan: 1 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: {
        weapon: "Shield",
        skill: null,
        level: null
      }
    },
    {
      name: "Volt Wall",
      description:
        "Reduces one instance of volt damage to each party member for one turn. High levels restore the targeted party member's HP, for an amount based on the damage they would've received. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Ice Wall's effect will end.",
      levels: {
        total: 6,
        tpCost: [{ value: 6, colspan: 3 }, { value: 13, colspan: 3 }],
        incomingDamageReduction: [
          { value: "50%", colspan: 1 },
          { value: "65%", colspan: 1 },
          { value: "80%", colspan: 1 },
          { value: "100%", colspan: 3 }
        ],
        percentageDamageAsHpRestoration: [
          { value: "0%", colspan: 4 },
          { value: "40%", colspan: 1 },
          { value: "150%", colspan: 1 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: {
        weapon: "Shield",
        skill: null,
        level: null
      }
    }
  ],
  master: [
    {
      name: "Hp Up",
      description: "Increases the user's maximum HP.",
      levels: {
        total: 8,
        maximumHpincrease: ["5%", "6%", "7%", "11%", "12%", "13%", "14%", "20%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Heal Guard",
      description:
        "Targets one row of party members. Restores that row's HP at the start of the turn, and reduces physical damage to that row for one turn. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Heal Guard's effect will end.",
      levels: {
        total: 6,
        tpCost: [{ value: 20, colspan: 5 }, { value: 25, colspan: 1 }],
        healingPower: ["90%", "100%", "110%", "120%", "130%", "180%"],
        incomingDamageReduction: ["25%", "28%", "31%", "34%", "37%", "50%"]
      },
      bodyPartsUsed: "Arms",
      type: "Heal",
      requeriments: {
        weapon: "Shield",
        skill: "Recovery Guard",
        level: 2
      }
    },
    {
      name: "Line Shield",
      description:
        "Targets one row of party members. All damage directed at that any party member in that row will instead be dealt to the user for one turn. Redirected damage is reduced. If, during the turn, the user is inflicted with panic, sleep, or their arms are bound, Line Shield's effect will end.",
      levels: {
        total: 8,
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 15, colspan: 1 }
        ],
        redirectedDamageReduction: [
          "5%",
          "8%",
          "11%",
          "19%",
          "22%",
          "25%",
          "28%",
          "35%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: {
        weapon: "Shield",
        skill: "Aegis",
        level: 3
      }
    },
    {
      name: "En Garde",
      description: "Gives the user a chance to halve any damage they receive.",
      levels: {
        total: 10,
        chance: [
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
        ]
      },
      bodyPartsUsed: null,
      type: "Defense",
      requeriments: {
        weapon: null,
        skill: "Line Shield",
        level: 3
      }
    },
    {
      name: "Shield Flare",
      description:
        "Until the end of the next turn, when the user takes damage, they will counter the source of the damage with a ranged STR-based fire attack. Uses triple the user's equipped shield's DEF value as a replacement for ATK. The user will be unable to counter if they become inflicted with sleep, or if their arms become bound.If the user is inflicted with panic, counterattacks will still happen, but will be normal attacks instead.",
      levels: {
        total: 6,
        counterAttackBaseAccuracy: "120%",
        toCost: [{ value: 10, colspan: 5 }, { value: 16, colspan: 1 }],
        counterattackDamage: ["250%", "265%", "280%", "295%", "310%", "400%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Shield",
        skill: "Shield Bash",
        level: 3
      }
    },
    {
      name: "Full Guard",
      description:
        "Reduces all damage to all party members for one turn. Has a cooldown.",
      levels: {
        total: 10,
        tpCost: [
          { value: 20, colspan: 4 },
          { value: 26, colspan: 5 },
          { value: 35, colspan: 1 }
        ],
        cooldown: [
          { value: 6, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 3, colspan: 1 }
        ],
        incomingDamageReduction: [
          { value: "25%", colspan: 1 },
          { value: "29%", colspan: 1 },
          { value: "33%", colspan: 1 },
          { value: "37%", colspan: 2 },
          { value: "41%", colspan: 1 },
          { value: "46%", colspan: 1 },
          { value: "50%", colspan: 1 },
          { value: "55%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Defense",
      requeriments: {
        weapon: "Shield",
        skill: [
          { name: "Fire Wall", level: 2 },
          { name: "Ice Wall", level: 2 },
          { name: "Volt Wall", level: 2 }
        ]
      }
    }
  ]
};

export default protector;
