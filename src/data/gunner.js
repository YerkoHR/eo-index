// Skill requirements revisited

const gunner = {
  name: "Gunner",
  force: {
    boost: {
      name: "Double Action",
      description:
        "For 3 turns, all gun skills will activate twice. The second activation will only deal 40% of the damage of the first",
      bodyPartsUsed: null,
      levels: null
    },
    break: {
      name: "Riot Gun",
      description:
        "Deals ranged STR-based stab damage to one enemy. Attempts to stun the target.",
      bodyPartsUsed: "Arms",
      levels: {
        total: 3,
        baseStunChance: "1000%",
        damage: ["400%", "800%", "1200%"]
      }
    }
  },
  novice: [
    {
      name: "Rapid Fire",
      description:
        "Deals 3 instances of ranged STR-based stab damage to one enemy.",
      levels: {
        total: 8,
        speedModifier: "200%",
        accuracyModifier: "-25%",
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 8, colspan: 4 },
          { value: 12, colspan: 1 }
        ],
        damagePerHit: [
          "75%",
          "79%",
          "83%",
          "95%",
          "99%",
          "103%",
          "107%",
          "130%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: null,
        level: null
      }
    },
    {
      name: "Splash Shot",
      description:
        "Deals ranged STR-based stab damage to one enemy, with splash damage.",
      levels: {
        total: 8,
        speedModifier: "80%",
        accuracyModifier: "-5%",
        splashDamage: "50%",
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 15, colspan: 1 }
        ],
        damage: ["180%", "188%", "196%", "226%", "234%", "242%", "250%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Rapid Fire",
        level: 3
      }
    },
    {
      name: "Leg Snipe",
      description:
        "Deals ranged STR-based stab damage to one enemy. Attempts to bind the target's legs. Cannot miss.",
      levels: {
        total: 10,
        speedModifier: "40%",
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 13, colspan: 1 }
        ],
        baseLegBindChance: [
          { value: "40%", colspan: 4 },
          { value: "50%", colspan: 5 },
          { value: "60%", colspan: 1 }
        ],
        damage: [
          "160%",
          "166%",
          "172%",
          "178%",
          "198%",
          "204%",
          "210%",
          "216%",
          "222%",
          "260%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: null,
        level: null
      }
    },
    {
      name: "Arm Snipe",
      description:
        "Deals ranged STR-based stab damage to one enemy. Attempts to bind the target's arms. Cannot miss.",
      levels: {
        total: 10,
        speedModifier: "40%",
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 13, colspan: 1 }
        ],
        baseArmBindChance: [
          { value: "40%", colspan: 4 },
          { value: "50%", colspan: 5 },
          { value: "60%", colspan: 1 }
        ],
        damage: [
          "160%",
          "166%",
          "172%",
          "178%",
          "198%",
          "204%",
          "210%",
          "216%",
          "222%",
          "260%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Leg Snipe",
        level: 2
      }
    },
    {
      name: "Cover Support",
      description:
        "When the user is in the back row, and uses the Defend command, party members in the front row have their HP restored.",
      levels: {
        total: 6,
        staticHpRestore: [8, 9, 10, 11, 12, 15],
        percentageMaxHpRestore: ["5%", "6%", "7%", "8%", "9%", "15%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Shell Shock",
      description:
        "For one turn, reduces the attack, defense, accuracy, and evasion for enemies in the back row. Attempts to inflict stun on enemies in the back row.",
      levels: {
        total: 4,
        speedModifier: "300%",
        tpCost: [{ value: 4, colspan: 3 }, { value: 7, colspan: 1 }],
        attackReduction: ["15%", "17%", "19%", "25%"],
        defenseReduction: ["15%", "17%", "19%", "25%"],
        accuracyAndEvasionReduction: ["-15%", "-18%", "-21%", "-30%"],
        baseStunChance: ["40%", "45%", "50%", "65%"]
      },
      bodyPartsUsed: "Arms",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Cover Support",
        level: 2
      }
    },
    {
      name: "Medic Bullet",
      description:
        "Restores the HP of and removes ailments from one party member.",
      levels: {
        total: 6,
        tpCost: [{ value: 6, colspan: 5 }, { value: 10, colspan: 1 }],
        speedModifier: [
          { value: "70%", colspan: 5 },
          { value: "250%", colspan: 1 }
        ],
        staticHpRestore: [15, 19, 23, 27, 31, 50],
        healingPower: ["10%", "14%", "18%", "22%", "26%", "40%"]
      },
      bodyPartsUsed: "Arms",
      type: "Heal",
      requeriments: {
        weapon: "Gun",
        skill: null,
        level: null
      }
    },
    {
      name: "Pop Flare",
      description:
        "Increases all party members' accuracy for a set amount of turns.",
      levels: {
        total: 6,
        duration: 4,
        tpCost: [{ value: 4, colspan: 5 }, { value: 7, colspan: 1 }],
        speedModifier: ["40%", "60%", "80%", "100%", "120%", "200%"],
        accuracyIncrease: ["+15%", "+16.5%", "+18%", "+19.5%", "+21%", "+30%"]
      },
      bodyPartsUsed: "Arms",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Mine",
      description: "Increases meterial yield from mining in hte labyrinth.",
      levels: null,
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Feint Shot",
      description:
        "Deals ranged STR-based stab damage to one row of enemies. Reduces hit targets' evasion for a set amount of turns.",
      levels: {
        total: 6,
        speedModifier: "150%",
        duration: 4,
        tpCost: [{ value: 10, colspan: 5 }, { value: 17, colspan: 1 }],
        accuracyModifier: ["0%", "+15%", "+30%", "+40%", "+50%", "+100%"],
        evasionReduction: ["150%", "158%", "166%", "174%", "182%", "220%"],
        damage: ["-10%", "-11.5%", "-13%", "-14.5%", "-16%", "-25%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Splash Shot",
        level: 2
      }
    },
    {
      name: "Scattershot",
      description: "Deals ranged STR-based stab damage to all enemies.",
      levels: {
        total: 8,
        speedModifier: "80%",
        accuracyModifier: "-10%",
        tpCost: [
          { value: 12, colspan: 3 },
          { value: 18, colspan: 4 },
          { value: 24, colspan: 1 }
        ],
        damage: ["170%", "178%", "186%", "211%", "219%", "227%", "235%", "275%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Feint Shot",
        level: 2
      }
    },
    {
      name: "Head Snipe",
      description:
        "Deals ranged STR-based stab damage to one enemy. Attempts to bind the target's head. Cannot miss.",
      levels: {
        total: 10,
        speedModifier: "40%",
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 13, colspan: 1 }
        ],
        baseHeadBindChance: [
          { value: "40%", colspan: 4 },
          { value: "50%", colspan: 5 },
          { value: "60%", colspan: 1 }
        ],
        damage: [
          "160%",
          "166%",
          "172%",
          "178%",
          "198%",
          "204%",
          "210%",
          "216%",
          "222%",
          "260%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Arm Snipe",
        level: 2
      }
    },
    {
      name: "Act Quick",
      description:
        "Until the end of the next turn, reduces the user's TP costs, and increases their action speed.",
      levels: {
        total: 4,
        tpCost: 2,
        speedModifier: "50%",
        speedMultiplier: "10x",
        tpCostMultiplier: ["0.9x", "0.6x", "0.45x", " 0.25x"]
      },
      bodyPartsUsed: "Arms",
      type: "Support",
      requeriments: null
    },
    {
      name: "Charged Shot",
      description:
        "Deals ranged STR-based stab damage to one enemy. Increases all damage the user takes until activation.",
      levels: {
        total: 10,
        speedModifier: "30%",
        accuracyModifier: "+10%",
        damageTakenMultiplier: "2x",
        damage: [
          "500%",
          "515%",
          "530%",
          "545%",
          "605%",
          "625%",
          "645%",
          "665%",
          "685%",
          "820%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Act Quick",
        level: 2
      }
    },
    {
      name: "Preemptive Flare",
      description:
        "If the user knows Pop Flare, gives them a chance to use it at the start of battle. If another party member activated Preemptive Flare, the user will be unable to activate it.",
      levels: {
        total: 6,
        chance: ["15%", "20%", "25%", "30%", "35%", "50%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Pop Flare",
        level: 2
      }
    },
    {
      name: "Preemptive Fire",
      description:
        "If the user knows Shell Shock, gives them a chance to use it at the start of battle. If another party member activated Preemptive Fire, the user will be unable to activate it.",
      levels: {
        total: 6,
        chance: ["20%", "26%", "32%", "38%", "44%", "67%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Shell Shock",
        level: 1
      }
    },
    {
      name: "Penetrator",
      description:
        "Gives a chance to, when performing an attack that targets one enemy, add a line-piercing effect. Does not activate on single-target, multi-hit skills.",
      levels: {
        total: 8,
        chance: ["18%", "23%", "28%", "33%", "38%", "43%", "48%", "66%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "TP Up",
      description: "Increases the user's maximum TP.",
      levels: {
        total: 8,
        maximumTpIncrease: [
          "7%",
          "9%",
          "11%",
          "17%",
          "19%",
          "21%",
          "23%",
          "30%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    }
  ],
  master: [
    {
      name: "Ricochet",
      description:
        "Deals multiple instances of ranged STR-based stab damage to random enemies.",
      levels: {
        total: 10,
        speedModifier: "80%",
        accuracyModifier: "-60%",
        tpCost: [
          { value: 20, colspan: 4 },
          { value: 27, colspan: 5 },
          { value: 35, colspan: 1 }
        ],
        maximumHits: [
          { value: 5, colspan: 4 },
          { value: 6, colspan: 5 },
          { value: 7, colspan: 1 }
        ],
        minimumHits: [{ value: 2, colspan: 9 }, { value: 3, colspan: 1 }],
        damagePerHit: [
          { value: "135%", colspan: 1 },
          { value: "140%", colspan: 1 },
          { value: "146%", colspan: 1 },
          { value: "152%", colspan: 2 },
          { value: "159%", colspan: 1 },
          { value: "166%", colspan: 1 },
          { value: "173%", colspan: 1 },
          { value: "180%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Scattershot",
        level: 2
      }
    },
    {
      name: "Charged Fire",
      description:
        "Deals ranged STR-based stab + fire damage to one enemy. Increases all damage the user takes until activation.Deals ranged STR-based stab + fire damage to one enemy. Increases all damage the user takes until activation.",
      levels: {
        total: 6,
        speedModifier: "30%",
        accuracyModifier: "+10%",
        damageTakenMultiplier: "2x",
        tpCost: [{ value: 18, colspan: 5 }, { value: 30, colspan: 1 }],
        damage: ["400%", "425%", "450%", "475%", "500%", "640%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Charged Shot",
        level: 3
      }
    },
    {
      name: "Charged Ice",
      description:
        "Deals ranged STR-based stab + ice damage to one enemy. Increases all damage the user takes until activation.",
      levels: {
        total: 6,
        speedModifier: "30%",
        accuracyModifier: "+10%",
        damageTakenMultiplier: "2x",
        tpCost: [{ value: 18, colspan: 5 }, { value: 30, colspan: 1 }],
        damage: ["400%", "425%", "450%", "475%", "500%", "640%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Charged Shot",
        level: 3
      }
    },
    {
      name: "Charged Volt",
      description:
        "Deals ranged STR-based stab + volt damage to one enemy. Increases all damage the user takes until activation.",
      levels: {
        total: 6,
        speedModifier: "30%",
        accuracyModifier: "+10%",
        damageTakenMultiplier: "2x",
        tpCost: [{ value: 18, colspan: 5 }, { value: 30, colspan: 1 }],
        damage: ["400%", "425%", "450%", "475%", "500%", "640%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Gun",
        skill: "Charged Shot",
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
    },
    {
      name: "Multi-Shot",
      description:
        "Gives attack skills a chance to activate twice. Double Action does not activate on Link skills, Chase skills, or counterattack skills.",
      levels: {
        total: 8,
        chance: ["4%", "5%", "6%", "7%", "8%", "9%", "10%", "15%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    }
  ]
};

export default gunner;
