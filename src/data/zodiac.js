// Skill requirements revisited

const zodiac = {
  name: "Zodiac",
  force: {
    boost: {
      name: "Divination",
      description:
        "For 3 skills, Zodiac skills have their damage increased, and will refund a percentage of their TP costs after use.",
      bodyPartsUsed: null,
      levels: {
        total: 3,
        damageIncrease: "40%",
        tpCostRefund: "50%"
      }
    },
    break: {
      name: "Atrosign",
      description:
        "Deals ranged INT-based fire + ice + volt damage to all enemies. On the turn of use, all party members' TP costs are reduced to 0.",
      bodyPartsUsed: "Head",
      levels: {
        total: 3,
        damage: ["300%", "550%", "800%"]
      }
    }
  },
  novice: [
    {
      name: "Etheric Gleam",
      description:
        "Increases one row of party members' elemental attack for a set amount of turns.",
      levels: {
        total: 8,
        speedModifier: "100%",
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 10, colspan: 4 },
          { value: 16, colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        attackIncrease: [
          { value: "15%", colspan: 1 },
          { value: "19%", colspan: 1 },
          { value: "23%", colspan: 2 },
          { value: "27%", colspan: 1 },
          { value: "31%", colspan: 1 },
          { value: "35%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Fire Star",
      description:
        "Deals ranged INT-based fire damage to one enemy, with splash damage.",
      levels: {
        total: 10,
        speedModifier: "80%",
        accuracyModifier: "+30%",
        splashDamage: "50%",
        tpCost: [
          { value: 8, colspan: 4 },
          { value: 13, colspan: 5 },
          { value: 18, colspan: 1 }
        ],
        damage: [
          "100%",
          "103%",
          "106%",
          "109%",
          "118%",
          "121%",
          "124%",
          "127%",
          "130%",
          "150%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Etheric Gleam",
        level: 1
      }
    },
    {
      name: "Ice Star",
      description:
        "Deals ranged INT-based ice damage to one enemy, with line-piercing effect.",
      levels: {
        total: 10,
        speedModifier: "100%",
        accuracyModifier: "+30%",
        tpCost: [
          { value: 8, colspan: 4 },
          { value: 13, colspan: 5 },
          { value: 18, colspan: 1 }
        ],
        damage: [
          "90%",
          "93%",
          "95%",
          "98%",
          "106%",
          "109%",
          "112%",
          "115%",
          "118%",
          "135%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Etheric Gleam",
        level: 1
      }
    },
    {
      name: "Volt Star",
      description: "Deals ranged INT-based volt damage to one row of enemies.",
      levels: {
        total: 10,
        speedModifier: "120%",
        accuracyModifier: "+30%",
        tpCost: [
          { value: 8, colspan: 4 },
          { value: 13, colspan: 5 },
          { value: 18, colspan: 1 }
        ],
        damage: [
          "80%",
          "82%",
          "84%",
          "86%",
          "92%",
          "95%",
          "98%",
          "101%",
          "104%",
          "120%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Etheric Gleam",
        level: 1
      }
    },
    {
      name: "Singularity",
      description: "Increases damage dealt when hitting an enemy's weakness.",
      levels: {
        total: 8,
        damageIncrease: ["6%", "7%", "9%", "10%", "12%", "13%", "15%", "20%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Etheric Charge",
      description:
        "Until the end of the next turn, Zodiac skills will only hit one enemy, but will deal increased damage.",
      levels: {
        total: 6,
        speedModifier: "30%",
        tpCost: [{ value: 3, colspan: 5 }, { value: 15, colspan: 1 }],
        damageMultiplier: ["1.8x", "1.9x", "2x", "2.15x", "2.3x", "3x"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Singularity",
        level: 3
      }
    },
    {
      name: "Etheric Return",
      description: "When the user kills an enemy, restores their TP.",
      levels: {
        total: 4,
        percentageMaxTpRestore: [
          { value: "1%", colspan: 3 },
          { value: "2%", colspan: 1 }
        ],
        staticTpRestore: [0, 1, 2, 3]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Singularity",
        level: 3
      }
    },
    {
      name: "Horoscope",
      description:
        "Only usable in the Labyrinth. Reduces the encounter rate for a set number of steps.",
      levels: {
        total: 6,
        tpCost: [{ value: 6, colspan: 5 }, { value: 10, colspan: 1 }],
        duration: [50, 75, 100, 125, 150, 255],
        dangerMultiplier: ["40%", "45%", "50%", "55%", "60%", "75%"]
      },
      bodyPartsUsed: null,
      type: "Field",
      requeriments: null
    },
    {
      name: "Mine",
      description: "Increases material yield from mining in the laberynth.",
      levels: null,
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Ether Mastery",
      description: "Increases the damage dealt by Zodiac skills.",
      levels: {
        total: 8,
        damageIncrease: ["5%", "6%", "7%", "8%", "9%", "10%", "11%", "15%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Binary Fire",
      description: "Deals ranged INT-based fire damage to all enemies.",
      levels: {
        total: 10,
        speedModifier: "70%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 20, colspan: 4 },
          { value: 27, colspan: 5 },
          { value: 35, colspan: 1 }
        ],
        damage: [
          "110%",
          "113%",
          "116%",
          "119%",
          "129%",
          "132%",
          "136%",
          "139%",
          "143%",
          "165%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Fire Star",
        level: 3
      }
    },
    {
      name: "Binary Ice",
      description: "Deals ranged INT-based ice damage to all enemies.",
      levels: {
        total: 10,
        speedModifier: "70%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 20, colspan: 4 },
          { value: 27, colspan: 5 },
          { value: 35, colspan: 1 }
        ],
        damage: [
          "110%",
          "113%",
          "116%",
          "119%",
          "129%",
          "132%",
          "136%",
          "139%",
          "143%",
          "165%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Ice Star",
        level: 3
      }
    },
    {
      name: "Binary Thunder",
      description: "Deals ranged INT-based volt damage to all enemies.",
      levels: {
        total: 10,
        speedModifier: "70%",
        accuracyModifier: "+10%",
        tpCost: [
          { value: 20, colspan: 4 },
          { value: 27, colspan: 5 },
          { value: 35, colspan: 1 }
        ],
        damage: [
          "110%",
          "113%",
          "116%",
          "119%",
          "129%",
          "132%",
          "136%",
          "139%",
          "143%",
          "165%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Volt Star",
        level: 3
      }
    },
    {
      name: "Etheric Boon",
      description:
        "Increases the user's damage dealt based on how much TP they spent last turn.",
      levels: {
        total: 6,
        damageIncrease: ["30%", "40%", "50%", "60%", "70%", "100%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Etheric Charge",
        level: 2
      }
    },
    {
      name: "Anti-Ether",
      description:
        "Gives the user a chance to nullify elemental attacks directed at party members in their row.",
      levels: {
        total: 6,
        chance: ["3%", "4%", "5%", "6%", "7%", "10%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Etheric Boon",
        level: 2
      }
    },
    {
      name: "Dark Ether",
      description:
        "Reduces TP costs for one row of party members for one turn.",
      levels: {
        total: 6,
        speedModifier: "300%",
        tpCost: [{ value: 20, colspan: 5 }, { value: 30, colspan: 1 }],
        tpCostMultiplier: ["0.7x", "0.67x", "0.64x", "0.61x", "0.58x", "0.4x"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Etheric Return",
        level: 2
      }
    },
    {
      name: "Ether Shot",
      description:
        "Deals ranged INT-based damage to one enemy. The damage type is determined by the user's equipped weapon.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "0%",
        tpCost: [
          { value: 2, colspan: 3 },
          { value: 4, colspan: 4 },
          { value: 7, colspan: 1 }
        ],
        damage: ["80%", "83%", "86%", "96%", "99%", "102%", "105%", "130%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Dark Ether",
        level: 2
      }
    },
    {
      name: "Tp Up",
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
      name: "Fire Prophecy",
      description:
        "Nullifies fire-elemental attacks from one enemy for one turn. If an attack was nullified, the user's damage dealt is increased until the end of the next turn.",
      levels: {
        total: 4,
        speedModifier: "200%",
        tpCost: 25,
        damageMultiplier: ["1.1x", "1.35x", "1.6x", "2.5x"]
      },
      bodyPartsUsed: "Head",
      type: "Defense",
      requeriments: {
        weapon: null,
        skill: "Binary Fire",
        level: 2
      }
    },
    {
      name: "Ice Prophecy",
      description:
        "Nullifies ice-elemental attacks from one enemy for one turn. If an attack was nullified, the user's damage dealt is increased until the end of the next turn.",
      levels: {
        total: 4,
        speedModifier: "200%",
        tpCost: 25,
        damageMultiplier: ["1.1x", "1.35x", "1.6x", "2.5x"]
      },
      bodyPartsUsed: "Head",
      type: "Defense",
      requeriments: {
        weapon: null,
        skill: "Binary Ice",
        level: 2
      }
    },
    {
      name: "Volt Prophecy",
      description:
        "Nullifies volt-elemental attacks from one enemy for one turn. If an attack was nullified, the user's damage dealt is increased until the end of the next turn",
      levels: {
        total: 4,
        speedModifier: "200%",
        tpCost: 25,
        damageMultiplier: ["1.1x", "1.35x", "1.6x", "2.5x"]
      },
      bodyPartsUsed: "Head",
      type: "Defense",
      requeriments: {
        weapon: null,
        skill: "Binary Thunder",
        level: 2
      }
    },
    {
      name: "Free Energy",
      description:
        "Gives the user a chance to reduce the TP cost of any skill they use to 0.",
      levels: {
        total: 6,
        chance: ["10%", "12%", "14%", "16%", "18%", "25%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Fire Prophecy", level: 1 },
          { name: "Ice Prophecy", level: 1 },
          { name: "Volt Prophecy", level: 1 }
        ]
      }
    },
    {
      name: "Multi-Strike Ether",
      description:
        "Until the end of the next turn, Zodiac skills will deal reduced damage, but become multi-hit targeting random enemies.",
      levels: {
        total: 6,
        speedModifier: "20%",
        minimumHits: 2,
        maximumHits: 5,
        meteorMinimumHits: 6,
        meteorMaximumHits: 15,
        tpCost: [{ value: 10, colspan: 5 }, { value: 35, colspan: 1 }],
        damageMultiplier: ["0.6x", "0.64x", "0.68x", "0.72x", "0.76x", "0.95x"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Anti-Ether",
        level: 2
      }
    },
    {
      name: "Meteor",
      description:
        "Deals multiple instances of ranged INT-based bash damage to random enemies.",
      levels: {
        total: 10,
        speedModifier: "50%",
        accuracyModifier: "-5%",
        minimumHits: 2,
        maximumHits: 5,
        tpCost: [
          { value: 27, colspan: 4 },
          { value: 35, colspan: 5 },
          { value: 45, colspan: 1 }
        ],
        damagePerHit: [
          "50%",
          "52%",
          "53%",
          "55%",
          "61%",
          "62%",
          "64%",
          "65%",
          "67%",
          "80%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Ether Shoot", level: 2 },
          { name: "Horoscope", level: 3 }
        ]
      }
    }
  ]
};

export default zodiac;
