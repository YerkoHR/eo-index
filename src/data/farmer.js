const farmer = {
  name: "Farmer",
  force: {
    boost: {
      name: "Item Echo",
      description:
        "For 3 turns, any items the user uses will take effect twice. The second activation does not consume an item.",
      bodyPartsUsed: null,
      levels: null
    },
    break: {
      name: "Final Secret",
      description:
        "Fully restores all party members' Force. Party members who have broken their Force have a chance to have them repaired.",
      bodyPartsUsed: "Head",
      levels: {
        total: 3,
        chance: "33%"
      }
    }
  },
  novice: [
    {
      name: "Sympathy Pain",
      description:
        "Attempts to inflict any ailments and binds inflicted on the user on all enemies. Does not remove the ailments and binds from the user.",
      levels: {
        total: 6,
        speedModifier: "60%",
        tpCost: [{ value: 5, colspan: 5 }, { value: 9, colspan: 1 }],
        baseInflictChance: ["40%", "42%", "45%", "47%", "50%", "60%"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: null
    },
    {
      name: "Strange Seeds",
      description:
        "At the end of the turn, attempts to inflict one of the bind types on all enemies.",
      levels: {
        total: 10,
        tpCost: [
          { value: 5, colspan: 4 },
          { value: 9, colspan: 5 },
          { value: 14, colspan: 1 }
        ],
        baseBindChance: [
          "25%",
          "27%",
          "28%",
          "30%",
          "35%",
          "36%",
          "38%",
          "39%",
          "41%",
          "50%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Sympathy Pain",
        level: 1
      }
    },
    {
      name: "Play Possum",
      description:
        "Reduces one party member's chance of being targeted (enmity) for a set amount of turns.",
      levels: {
        total: 6,
        speedModifier: "300%",
        duration: 4,
        tpCost: [{ value: 3, colspan: 5 }, { value: 5, colspan: 1 }],
        enmityDecrease: ["-60%", "-65%", "-70%", "-75%", "-80%", "-95%"]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Sympathy Pain",
        level: 1
      }
    },
    {
      name: "Keen Eye",
      description:
        "For a set number of steps in the Labyrinth, shows all treasure chests, hidden passages, staircases, FOEs, and gather points on the minimap.",
      levels: {
        total: 6,
        tpCost: [{ value: 4, colspan: 5 }, { value: 8, colspan: 1 }],
        duration: [1, 5, 15, 30, 50, 255]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: null
    },
    {
      name: "Excavation",
      description:
        "When walking in the Labyrinth, the user has a chance to find gatherable items. Specific data is unknown.",
      levels: {
        total: 8,
        materialsGained: ["up", "up", "up", "up", "up", "up", "up", "up"]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: {
        weapon: null,
        skill: "Keen Eye",
        level: 2
      }
    },
    {
      name: "Flee",
      description:
        "Attempts to escape from the current battle, and return to the last-used stairs, or Geomagnetic Pole. If successful, consumes a percentage of all party members' current HP.",
      levels: {
        total: 4,
        tpCost: [{ value: 3, colspan: 3 }, { value: 7, colspan: 1 }],
        chance: ["65%", "70%", "80%", "100%"],
        percentageCurrentHpCost: ["75%", "60%", "40%", "5%"]
      },
      bodyPartsUsed: "Legs",
      type: "Support",
      requeriments: null
    },
    {
      name: "Earth's Bounty",
      description: "Increases experience gain while the user is alive.",
      levels: {
        total: 10,
        experienceIncrease: [
          "9%",
          "10%",
          "12%",
          "13%",
          "15%",
          "16%",
          "18%",
          "19%",
          "21%",
          "30%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Slap Awake",
      description:
        "Only usable while in the Labyrinth. Revives one dead party member.",
      levels: {
        total: 4,
        tpCost: [{ value: 7, colspan: 3 }, { value: 10, colspan: 1 }],
        reviveRestore: [1, 20, 50, 300]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Harvestry",
      description:
        "Find additional materials when taking, chopping, or mining.",
      levels: null,
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Rotten Egg",
      description:
        "Reduces all enemies' attack for a set number of turns. Enemies who are afflicted with an ailment at cast time have the debuff increased",
      levels: {
        total: 6,
        duration: 4,
        tpCost: [{ value: 6, colspan: 5 }, { value: 10, colspan: 1 }],
        speedModifier: ["40%", "60%", "80%", "100%", "120%", "200%"],
        attackReduction: ["4%", "5%", "6%", "7%", "8%", "10%"],
        ailmentAttackReduction: ["11%", "13%", "15%", "17%", "19%", "25%"]
      },
      bodyPartsUsed: "Arms",
      type: "Debuff",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Strange Seeds", level: 2 },
          { name: "Play Possum", level: 1 }
        ]
      }
    },
    {
      name: "Persistence",
      description:
        "At the end of any turn where the user is dead, they have a chance to revive.",
      levels: {
        total: 10,
        reviveRestore: 1,
        chance: ["3%", "4%", "5%", "6%", "8%", "9%", "10%", "11%", "12%", "15%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Rotten Egg",
        level: 2
      }
    },
    {
      name: "Godsend",
      description:
        "When walking in the Labyrinth, the user has a chance to find consumable items.",
      levels: {
        total: 8,
        itemsObtained: ["up", "up", "up", "up", "up", "up", "up", "up"]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: {
        weapon: null,
        skill: "Excavation",
        level: 3
      }
    },
    {
      name: "Rain or Shine",
      description:
        "For a set amount of steps in the Labyrinth, nullifies damage tiles and muddy tiles. Reduces damage taken from certain FOE field attacks.",
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
      name: "Safe Stroll",
      description:
        "Only usable in the Labyrinth. Reduces the encounter rate for a set number of steps.",
      levels: {
        total: 6,
        tpCost: [{ value: 8, colspan: 5 }, { value: 14, colspan: 1 }],
        duration: [80, 100, 120, 140, 160, 255],
        dangerMultiplier: ["0.5x", "0.45x", "0.4x", "0.35x", "0.3x", "0.15x"]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: {
        weapon: null,
        skill: "Rain or Shine",
        level: 2
      }
    },
    {
      name: "Share the Wealth",
      description: "Restores TP to other party members in the user's row.",
      levels: {
        total: 8,
        speedModifier: "100%",
        tpCost: [10, 14, 18, 22, 26, 30, 34, 50],
        tpRestore: [5, 7, 9, 11, 13, 15, 17, 25]
      },
      bodyPartsUsed: "Arms",
      type: "Heal",
      requeriments: null
    },
    {
      name: "Survival Wisdom",
      description: "Restores all party members' HP and TP when gathering.",
      levels: {
        total: 6,
        staticHpRestore: [10, 15, 20, 25, 30, 50],
        percentageMaxHpRestore: ["25%", "27%", "29%", "31%", "33%", "50%"],
        staticTpRestore: [3, 4, 5, 6, 7, 10],
        percentageMaxtpRestore: ["3%", "4%", "%5", "6%", "7%", "10%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Earth's Bounty",
        level: 3
      }
    },
    {
      name: "Waste Not",
      description: "Increases monster drop drop rates.",
      levels: {
        total: 4,
        dropRateMultiplier: ["1.05x", "1.08x", "1.12x", "1.20x"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Fearless",
      description:
        "When the user is in the front row, and is at full HP, restores their TP at the end of the turn.",
      levels: {
        total: 4,
        staticTpRestore: [1, 2, 3, 4],
        percentageMaxtpRestore: [
          { value: "1%", colspan: 3 },
          { value: "2%", colspan: 1 }
        ]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    }
  ],
  master: [
    {
      name: "Lullaby",
      description:
        "Inflicts sleep on the user. Attempts to inflict sleep on all enemies.",
      levels: {
        total: 6,
        tpCost: [{ value: 9, colspan: 5 }, { value: 14, colspan: 1 }],
        speedModifier: [
          { value: "20%", colspan: 5 },
          { value: "200%", colspan: 1 }
        ],
        baseSleepChance: ["50%", "52%", "55%", "57%", "60%", "75%"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Persistence",
        level: 2
      }
    },
    {
      name: "Fruitful Song",
      description:
        "Restores all party members' TP every time they take a set number of steps.",
      levels: {
        total: 8,
        staticTpRestore: 1,
        percentageMaxtpRestore: "1%",
        stepsToRestore: [12, 11, 10, 9, 8, 7, 6, 3]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Lullaby",
        level: 3
      }
    },
    {
      name: "Blessed Remains",
      description:
        "When the user kills an enemy, all party members have their Force restored.",
      levels: {
        total: 6,
        forceRestore: ["+3%", "+4%", "+5%", "+6%", "+7%", "+10%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Waste Not",
        level: 2
      }
    },
    {
      name: "Harvest Festival",
      description:
        "Deals melee STR-based cut damage to all enemies. Increases damage dealt and attempts to inflict instant death when attacking enemies with binds.",
      levels: {
        total: 10,
        speedModifier: "50%",
        accuracyModifier: "-10%",
        blindDamageMultiplier: "3.5x",
        tpCost: [
          { value: 12, colspan: 4 },
          { value: 18, colspan: 5 },
          { value: 28, colspan: 1 }
        ],
        baseDamage: [
          "125%",
          "129%",
          "133%",
          "137%",
          "152%",
          "160%",
          "168%",
          "176%",
          "184%",
          "250%"
        ],
        blindBaseInstantDeathChance: [
          "25%",
          "26%",
          "27%",
          "28%",
          "32%",
          "34%",
          "36%",
          "38%",
          "40%",
          "50%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: null
    },
    {
      name: "Nature's Blessing",
      description:
        "Gives the user a chance to find additional rare gather materials when gathering.",
      levels: {
        total: 4,
        rareMaterials: ["up", "up", "up", "up"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Survival Wisdoms",
        level: 2
      }
    },
    {
      name: "Double Crop",
      description:
        "When gathering, the user has a chance to start another gathering session on the same point. Can only activate once per gather point.",
      levels: {
        total: 8,
        chance: ["16%", "19%", "22%", "25%", "28%", "31%", "34%", "50%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Nature's Blessing",
        level: 2
      }
    }
  ]
};

export default farmer;
