const sovereign = {
  name: "Sovereign",
  force: {
    boost: {
      name: "Victory Vow",
      description:
        "For 3 turns, all Order skills will affect all party members, and will have their TP costs reduced by 50%.",
      bodyPartsUsed: null,
      levels: null
    },
    break: {
      name: "Proof of Nobility",
      description:
        "For one turn, makes all party members' buffs unpurgeable, and doubles the effect of buffs that increase attack, defense, disable infliction chance, disable resistance, healing power, accuracy, and evasion.",
      bodyPartsUsed: "Head",
      levels: null
    }
  },
  novice: [
    {
      name: "Attack Order",
      description:
        "Increases one row of party members' attack for a set amount of turns.",
      levels: {
        total: 8,
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 8, colspan: 4 },
          { value: 13, colspan: 1 }
        ],
        speedModifier: [
          { value: "125%", colspan: 3 },
          { value: "175%", colspan: 4 },
          { value: "250%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        attackIncrease: [
          { value: "17%", colspan: 1 },
          { value: "20%", colspan: 1 },
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
      name: "Fire Arms",
      description:
        "Increases one row of party members' damage dealt when they use fire-elemental skills (either entirely fire or a composite type that includes fire). Adds fire to that party member's normal attacks.",
      levels: {
        total: 8,
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 17, colspan: 1 }
        ],
        speedModifier: [
          { value: "125%", colspan: 3 },
          { value: "175%", colspan: 4 },
          { value: "250%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        fireDamageIncrease: [
          { value: "5%", colspan: 1 },
          { value: "10%", colspan: 1 },
          { value: "15%", colspan: 2 },
          { value: "20%", colspan: 1 },
          { value: "25%", colspan: 1 },
          { value: "30%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Freeze Arms",
      description:
        "Increases one row of party members' damage dealt when they use ice-elemental skills (either entirely ice or a composite type that includes ice). Adds ice to that party member's normal attacks.",
      levels: {
        total: 8,
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 17, colspan: 1 }
        ],
        speedModifier: [
          { value: "125%", colspan: 3 },
          { value: "175%", colspan: 4 },
          { value: "250%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        iceDamageIncrease: [
          { value: "5%", colspan: 1 },
          { value: "10%", colspan: 1 },
          { value: "15%", colspan: 2 },
          { value: "20%", colspan: 1 },
          { value: "25%", colspan: 1 },
          { value: "30%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Shock Arms",
      description:
        "Increases one row of party members' damage dealt when they use volt-elemental skills (either entirely volt or a composite type that includes volt). Adds volt to that party member's normal attacks",
      levels: {
        total: 8,
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 17, colspan: 1 }
        ],
        speedModifier: [
          { value: "125%", colspan: 3 },
          { value: "175%", colspan: 4 },
          { value: "250%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        fireDamageIncrease: [
          { value: "5%", colspan: 1 },
          { value: "10%", colspan: 1 },
          { value: "15%", colspan: 2 },
          { value: "20%", colspan: 1 },
          { value: "25%", colspan: 1 },
          { value: "30%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Guard Order",
      description:
        "Increases one row of party members' defense for a set amount of turns.",
      levels: {
        total: 8,
        tpCost: [
          { value: 4, colspan: 3 },
          { value: 8, colspan: 4 },
          { value: 13, colspan: 1 }
        ],
        speedModifier: [
          { value: "125%", colspan: 3 },
          { value: "175%", colspan: 4 },
          { value: "250%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        fireDamageIncrease: [
          { value: "15%", colspan: 1 },
          { value: "17%", colspan: 1 },
          { value: "19%", colspan: 2 },
          { value: "21%", colspan: 1 },
          { value: "23%", colspan: 1 },
          { value: "35%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: null
    },
    {
      name: "Reinforce",
      description:
        "Increases one row of party members' defense for a set amount of turns.",
      levels: {
        total: 10,
        healingPower: [
          "40%",
          "44%",
          "48%",
          "52%",
          "64%",
          "68%",
          "72%",
          "76%",
          "80%",
          "100%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Guard Order",
        level: 2
      }
    },
    {
      name: "Royal Veil",
      description:
        "At the end of the turn, if the user's HP is full, restores all party members' HP. Only one instance of Royal Veil can activate per turn.",
      levels: {
        total: 4,
        staticHpRestore: [5, 6, 7, 10],
        percentageMaxHpRestore: ["6%", "8%", "10%", "15%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Monarch March",
      description:
        "For every three steps taken in the Labyrinth, restores all party members' HP.",
      levels: {
        total: 4,
        HpPerThreeSteps: [2, 3, 5, 10]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Royal Veil",
        level: 2
      }
    },
    {
      name: "Negotiation",
      description:
        "Removes the oldest buff and debuff from one party member, and restores their HP and TP. Restoration is increased if both a buff and debuff are removed.",
      levels: {
        total: 6,
        tpCost: 2,
        speedModifier: "300%",
        bothTypesRestoreIncrease: "1.5x",
        percentageMaxTpRestore: [
          { value: "1%", colspan: 5 },
          { value: "3%", colspan: 1 }
        ],
        staticTpRestore: [1, 2, 3, 4, 5, 8],
        percentageMaxHpRestore: ["15%", "20%", "25%", "30%", "35%", "60%"],
        staticHpRestore: [30, 35, 40, 45, 50, 75]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    },
    {
      name: "Take",
      description: "Increases material yield from taking in the labyrinth.",
      levels: {
        total: 1
      },
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "Royal Dignity",
      description:
        "Each turn, the first time the user is damaged, if they have at least one buff, restores the user's HP",
      levels: {
        total: 6,
        healingPower: ["40%", "50%", "60%", "70%", "80%", "120%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Royal Lineage",
      description:
        "When the user is buffed, their TP is restored. Royal Lineage will not activate if an applied buff dispels a debuff",
      levels: {
        total: 6,
        tpRestore: [2, 3, 4, 5, 6, 8]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "Element Bomb I",
      description:
        "Removes one of the Arms skills from one party member. Deals ranged INT-based damage to all enemies. The element is determined by the Arms skill that was removed.",
      levels: {
        total: 10,
        speedModifier: "75%",
        accuracyModifier: "+50%",
        tpCost: [
          { value: 10, colspan: 4 },
          { value: 16, colspan: 5 },
          { value: 23, colspan: 1 }
        ],
        damage: [
          "150%",
          "155%",
          "160%",
          "165%",
          "180%",
          "186%",
          "192%",
          "198%",
          "204%",
          "235%"
        ]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Fire Arms", level: 1 },
          { name: "Freeze Arms", level: 1 },
          { name: "Shock Arms", level: 1 }
        ]
      }
    },
    {
      name: "Rally Order",
      description:
        "Increases one row of party members' maximum HP for a set amount of turns.",
      levels: {
        total: 8,
        tpCost: [
          { value: 6, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 17, colspan: 1 }
        ],
        speedModifier: [
          { value: "125%", colspan: 3 },
          { value: "175%", colspan: 4 },
          { value: "250%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        maximumHpIncrease: [
          { value: "20%", colspan: 1 },
          { value: "25%", colspan: 1 },
          { value: "30%", colspan: 2 },
          { value: "35%", colspan: 1 },
          { value: "40%", colspan: 1 },
          { value: "45%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Reinforce",
        level: 2
      }
    },
    {
      name: "Protect Order",
      description:
        "Restores one row of party members' HP at the end of the turn for a set amount of turns.",
      levels: {
        total: 8,
        speedModifier: "100%",
        tpCost: [
          { value: 8, colspan: 3 },
          { value: 13, colspan: 4 },
          { value: 20, colspan: 1 }
        ],

        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        healingPower: [
          { value: "35%", colspan: 1 },
          { value: "44%", colspan: 1 },
          { value: "53%", colspan: 2 },
          { value: "62%", colspan: 1 },
          { value: "71%", colspan: 1 },
          { value: "80%", colspan: 2 }
        ]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Reinforce",
        level: 2
      }
    },
    {
      name: "Prevent Order",
      description:
        "Gives one row of party members a chance to negate one ailment or bind infliction for a set amount of turns.",
      levels: {
        total: 8,
        tpCost: [
          { value: 10, colspan: 3 },
          { value: 17, colspan: 4 },
          { value: 24, colspan: 1 }
        ],
        speedModifier: [
          { value: "125%", colspan: 3 },
          { value: "175%", colspan: 4 },
          { value: "250%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        negateChance: ["60%", "62%", "64%", "71%", "73%", "75%", "77%", "85%"]
      },
      bodyPartsUsed: "Head",
      type: "buff",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Rally Order", level: 2 },
          { name: "Protect Order", level: 2 }
        ]
      }
    },
    {
      name: "Tactical Decree",
      description:
        "For one turn, when any party members with buffs are attacked, they will recover TP, based on a percentage of the damage they received. Activates on negated damage, and heals based on the amount of damage the user would've taken. Does not activate on absorbed damage.",
      levels: {
        total: 6,
        tpCost: [{ value: 4, colspan: 5 }, { value: 6, colspan: 1 }],
        percentageDamageAsTpRestore: ["6%", "7%", "8%", "9%", "10%", "15%"]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    },
    {
      name: "Healing Decree",
      description:
        "For one turn, when any party members with buffs deal damage, they will recover HP based on the damage they deal. If a party member under the effect of Healing Decree inflicts instant death with a damaging attack, they will still recover HP based on the damage the attack would've dealt.",
      levels: {
        total: 6,
        tpCost: [{ value: 3, colspan: 5 }, { value: 5, colspan: 1 }],
        percentageDamageAsHpRestore: ["20%", "22%", "24%", "26%", "28%", "40%"]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    }
  ],
  master: [
    {
      name: "Status Defense Up",
      description: "Increases the user's resistance to all ailments and binds.",
      levels: {
        total: 8,
        resistanceIncrease: [
          "8%",
          "9%",
          "10%",
          "15%",
          "16%",
          "17%",
          "18%",
          "25%"
        ]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Element Bomb II",
      description:
        "Removes one of the Arms skills from one party member. Deals multiple instances of ranged INT-based damage to random enemies. The element is determined by the Arms skill that was removed.",
      levels: {
        total: 10,
        speedModifier: "75%",
        accuracyModifier: "+50%",
        numberOfHits: 3,
        tpCost: [
          { value: 10, colspan: 4 },
          { value: 16, colspan: 5 },
          { value: 23, colspan: 1 }
        ],
        damagePerHit: [
          "70%",
          "72%",
          "75%",
          "77%",
          "85%",
          "88%",
          "90%",
          "93%",
          "95%",
          "110%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Attack",
      requeriments: {
        weapon: null,
        skill: "Element Bomb I",
        level: 3
      }
    },
    {
      name: "Clearance",
      description:
        "Removes all buffs and debuffs from all party members and enemies, and restores HP and TP to all party members.",
      levels: {
        total: 4,
        tpCost: 20,
        speedModifier: "80%",
        baseHpRestore: [75, 100, 125, 200],
        baseTpRestore: [3, 5, 6, 10]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    },
    {
      name: "Dauntless Order",
      description:
        "For a set amount of turns, one row of party members may endure an attack that would've killed them, and have their HP restored.",
      levels: {
        total: 8,
        tpCost: [
          { value: 15, colspan: 3 },
          { value: 22, colspan: 4 },
          { value: 30, colspan: 1 }
        ],
        speedModifier: [
          { value: "125%", colspan: 3 },
          { value: "175%", colspan: 4 },
          { value: "250%", colspan: 1 }
        ],
        duration: [
          { value: 4, colspan: 3 },
          { value: 5, colspan: 4 },
          { value: 6, colspan: 1 }
        ],
        endureChance: ["40%", "43%", "46%", "53%", "56%", "59%", "62%", "70%"],
        endureRestore: [1, 20, 40, 100, 120, 140, 160, 250]
      },
      bodyPartsUsed: "Head",
      type: "Buff",
      requeriments: {
        weapon: null,
        skill: "Prevent Order",
        level: 1
      }
    },
    {
      name: "Final Decree",
      description:
        "Only usable if the user has 3 buffs. Removes all buffs from the user to increase damage dealt by, and reduce damage taken by, all party members for one turn. Does not work if another party member used Proof of Nobility before Final Decree.",
      levels: {
        total: 6,
        tpCost: [{ value: 20, colspan: 5 }, { value: 35, colspan: 1 }],
        damageDealtIncrease: ["22%", "24%", "26%", "28%", "30%", "40%"],
        damageReceivedDecrease: ["22%", "24%", "26%", "28%", "30%", "40%"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Tactical Decree", level: 2 },
          { name: "Healing Decree", level: 2 }
        ]
      }
    },
    {
      name: "Renew",
      description:
        "When the user dispels buffs from themself, they have a chance for the buff they removed to be re-applied.",
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
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Final Decree",
        level: 3
      }
    }
  ]
};

export default sovereign;
