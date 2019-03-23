const nightseeker = {
  name: "Nightseeker",
  force: {
    boost: {
      name: "Killing Intent",
      description:
        "For 3 turns, increases the user's damage dealt and ailment infliction chance.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        damageIncrease: "40%",
        inflictionIncrease: "1.4x"
      }
    },
    break: {
      name: "Disaster",
      description:
        "Deals melee STR-based cut damage to one enemy. If the target has an ailment, that ailment is forced to last longer",
      bodyPartsUsed: "Arms",
      levels: {
        total: 3,
        durationIncrease: 1,
        damage: ["500%", "950%", "1400%"]
      }
    }
  },
  novice: [
    {
      name: "Sand Throw",
      description:
        "Deals ranged STR-based cut damage to one enemy. Attempts to inflict blind on the target.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 3, colspan: 5 }, { value: 5, colspan: 1 }],
        damage: [{ value: "125%", colspan: 5 }, { value: "150%", colspan: 1 }],
        baseBlindChance: ["35%", "38%", "41%", "44%", "47%", "60%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: null
    },
    {
      name: "Sleep Throw",
      description:
        "Deals ranged STR-based cut damage to one enemy. Attempts to inflict sleep on the target.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 3, colspan: 5 }, { value: 5, colspan: 1 }],
        damage: [{ value: "125%", colspan: 5 }, { value: "150%", colspan: 1 }],
        baseSleepChance: ["40%", "43%", "46%", "49%", "52%", "65%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Sand Throw",
        level: 2
      }
    },
    {
      name: "Shadow Cloak",
      description:
        "For a set amount of turns, nullifies one physical attack against the user.",
      levels: {
        total: 4,
        tpCost: 4,
        duration: 4,
        speedModifier: ["20%", "50%", "80%", "200%"]
      },
      bodyPartsUsed: "Legs",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Biding Slice",
      description:
        "Deals melee STR-based cut damage to one enemy. If the user is not damaged for the rest of the turn, deals melee STR-based cut damage to the same enemy again at the end of the turn.",
      levels: {
        total: 8,
        speedModifier: "120%",
        accuracyModifier: "+15%",
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 7, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        damagePerHit: [
          "165%",
          "171%",
          "177%",
          "197%",
          "203%",
          "209%",
          "215%",
          "250%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Knife",
        skill: "Shadow Cloak",
        level: 1
      }
    },
    {
      name: "Ice Knife",
      description: "Deals melee STR-based cut + ice damage to one enemy.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 5, colspan: 3 },
          { value: 8, colspan: 4 },
          { value: 12, colspan: 1 }
        ],
        damage: ["160%", "167%", "174%", "199%", "206%", "213", "220%", "260%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Knife",
        skill: null,
        level: null
      }
    },
    {
      name: "Decoy Sign",
      description:
        "Increases one party member's chance of being targeted (enmity) for a set amount of turns.",
      levels: {
        total: 4,
        speedModifier: "150%",
        duration: 4,
        tpCost: [{ value: 4, colspan: 3 }, { value: 6, colspan: 1 }],
        enmityIncreade: ["+20%", "+25%", "+30%", "+50%"]
      },
      bodyPartsUsed: null,
      type: "Buff",
      requeriments: null
    },
    {
      name: "Proficiency",
      description:
        "Increases damage the user deals to enemies that are afflicted with ailments.",
      levels: {
        total: 10,
        damageIncrease: [
          "12%",
          "14%",
          "16%",
          "18%",
          "20%",
          "23%",
          "26%",
          "29%",
          "32%",
          "50%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Blade Flurry",
      description:
        "If the user has a subweapon equipped, lets them attack with both weapons when performing normal attacks. The second hit's damage is based on the level of Blade Flurry. Enables the equipping of subweapons.",
      levels: {
        total: 8,
        subweaponDamage: [
          "30%",
          "33%",
          "36%",
          "39%",
          "42%",
          "45%",
          "48%",
          "60%"
        ]
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
      name: "Curse Throw",
      description:
        "Deals ranged STR-based cut damage to one enemy. Attempts to inflict curse on the target.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 3, colspan: 5 }, { value: 5, colspan: 1 }],
        damage: [{ value: "125%", colspan: 5 }, { value: "150%", colspan: 1 }],
        baseCurseChance: ["40%", "44%", "48%", "52%", "56%", "70%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Sleep Throw",
        level: 3
      }
    },
    {
      name: "Nerve Throw",
      description:
        "Deals ranged STR-based cut damage to one enemy. Attempts to inflict paralysis on the target.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 3, colspan: 5 }, { value: 5, colspan: 1 }],
        damage: [{ value: "125%", colspan: 5 }, { value: "150%", colspan: 1 }],
        baseParalyzeChance: ["35%", "38%", "41%", "44%", "47%", "60%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Curse Throw",
        level: 2
      }
    },
    {
      name: "Shadow Bite",
      description:
        "Deals melee STR-based cut damage to one enemy. Damage is increased if the target has an ailment.",
      levels: {
        total: 10,
        speedModifier: "70%",
        accuracyModifier: "+5%",
        ailmentDamageMultiplier: "2x",
        tpCost: [
          { value: 7, colspan: 4 },
          { value: 11, colspan: 5 },
          { value: 16, colspan: 1 }
        ],
        baseDamage: [
          "200%",
          "207%",
          "214%",
          "221%",
          "246%",
          "253%",
          "260%",
          "267%",
          "274%",
          "315%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Knife",
        skill: "Sleep Throw",
        level: 3
      }
    },
    {
      name: "Auto-Cloak",
      description:
        "If the user knows Shadow Cloak, gives them a chance to use it at the start of battle. If another party member activated Auto - Cloak, the user will be unable to activate it.",
      levels: {
        total: 6,
        chance: ["25%", "30%", "35%", "40%", "45%", "67%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Biding Slice",
        level: 2
      }
    },
    {
      name: "Backstab",
      description:
        "Deals melee STR-based cut damage to one enemy. Attempts to bind the head of the target. If the user has Shadow Cloak active, the damage type becomes cut + almighty, and the damage is increased.",
      levels: {
        total: 10,
        speedModifier: "80%",
        accuracyModifier: "+5%",
        cloakDamageMultiplier: "2x",
        tpCost: [
          { value: 7, colspan: 4 },
          { value: 11, colspan: 5 },
          { value: 15, colspan: 1 }
        ],
        baseHeadBindChance: [
          { value: "25%", colspan: 4 },
          { value: "25%", colspan: 5 },
          { value: "45%", colspan: 1 }
        ],
        baseDamage: [
          "160%",
          "168%",
          "176%",
          "184%",
          "209%",
          "217%",
          "225%",
          "233%",
          "241%",
          "285%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Knife",
        skill: "Auto-Cloak",
        level: 2
      }
    },
    {
      name: "Sneak Attack",
      description:
        "For a set amount of steps in the Labyrinth, increases the chance of preemptive attacks.",
      levels: {
        total: 6,
        tpCost: [{ value: 10, colspan: 5 }, { value: 15, colspan: 1 }],
        duration: [60, 70, 80, 90, 100, 255],
        chanceIncrease: ["+6%", "+7%", "+8%", "+9%", "+10%", "+20%"]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: {
        weapon: null,
        skill: "Proficiency",
        level: 2
      }
    },
    {
      name: "Foul Mastery",
      description:
        "Increases the user's damage dealt when they inflict an ailment, up to a certain limit.",
      levels: {
        total: 10,
        maxStacks: 3,
        damagePerStack: [
          "4%",
          "5%",
          "6%",
          "7%",
          "8%",
          "10%",
          "11%",
          "13%",
          "14%",
          "20%"
        ],
        maxDamageIncrease: [
          "10%",
          "12%",
          "15%",
          "17%",
          "20%",
          "25%",
          "27%",
          "32%",
          "35%",
          "50%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Sneak Attack",
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
    },
    {
      name: "Spread Throw",
      description:
        "Until the end of the next turn, Throw skills will target all enemies, and have their infliction rate increased.",
      levels: {
        total: 4,
        tpCost: [{ value: 5, colspan: 3 }, { value: 7, colspan: 1 }],
        inflictionChanceMultiplier: ["1.05x", "1.1x", "1.15x", "1.35x"]
      },
      bodyPartsUsed: "Arms",
      type: "Support",
      requeriments: null
    }
  ],
  master: [
    {
      name: "Venom Throw",
      description:
        "Deals ranged STR-based cut damage to one enemy. Attempts to inflict poison on the target.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+5%",
        tpCost: [{ value: 3, colspan: 5 }, { value: 5, colspan: 1 }],
        damage: [{ value: "125%", colspan: 5 }, { value: "150%", colspan: 1 }],
        basePoisonChance: ["35%", "38%", "41%", "44%", "47%", "60%"],
        basePoisonFactor: [50, 60, 70, 80, 90, 130]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Nerve Throw",
        level: 2
      }
    },
    {
      name: "Swift Edge",
      description:
        "Deals multiple instances of melee STR-based cut damage to one enemy. If the target is afflicted with an ailment, the number of maximum hits is increased.",
      levels: {
        total: 10,
        speedModifier: "80%",
        accuracyModifier: "-20%",
        minimumHits: 3,
        maximumHits: 5,
        ailmentMaximumHits: 9,
        tpCost: [
          { value: 14, colspan: 4 },
          { value: 19, colspan: 5 },
          { value: 25, colspan: 1 }
        ],
        damagePerHit: [
          "80%",
          "82%",
          "84%",
          "86%",
          "94%",
          "96%",
          "99%",
          "101%",
          "104%",
          "120%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Knife",
        skill: "Shadow Bite",
        level: 3
      }
    },
    {
      name: "Assassinate",
      description:
        "Deals melee STR-based cut damage to one enemy. If the user has Shadow Cloak active, attempts to instantly kill the target.",
      levels: {
        total: 8,
        speedModifier: "50%",
        accuracyModifier: "+5%",
        tpCost: [
          { value: 10, colspan: 3 },
          { value: 15, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        cloakBaseInstantKillChance: [
          { value: "25%", colspan: 3 },
          { value: "32%", colspan: 4 },
          { value: "40%", colspan: 1 }
        ],
        damage: ["310%", "320%", "330%", "380%", "390%", "400%", "410%", "500%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword or Knife",
        skill: "Backstab",
        level: 3
      }
    },
    {
      name: "Enduring Cloak",
      description:
        "When Shadow Cloak negates an attack, the user has a chance to immediately re-cast it on themselves.",
      levels: {
        total: 8,
        chance: ["8%", "11%", "14%", "17%", "20%", "23%", "26%", "34%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Assassinate",
        level: 3
      }
    },
    {
      name: "Follow Trace",
      description:
        "After using an attack skill on one target, if the target is afflicted with an ailment, the user has a chance to repeat the attack skill, for full damage.",
      levels: {
        total: 10,
        chance: [
          "6%",
          "8%",
          "10%",
          "12%",
          "14%",
          "17%",
          "20%",
          "23%",
          "26%",
          "35%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Blade Flurry",
        level: 4
      }
    },
    {
      name: "Auto-Spread",
      description:
        "If the user knows Spread Throw, gives them a chance to use it at the start of battle. If another party member activated Auto - Spread, the user will be unable to activate it",
      levels: {
        total: 6,
        chance: ["20%", "26%", "33%", "39%", "46%", "66%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Spread Throw",
        level: 2
      }
    }
  ]
};

export default nightseeker;
