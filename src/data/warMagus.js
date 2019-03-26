const warMagus = {
  name: "War Magus",
  force: {
    boost: {
      name: "Ward Edge Power",
      description:
        "For 3 turns, the extra effects of War Edge skills will always activate.",
      bodyPartsUsed: null,
      levels: null
    },
    break: {
      name: "Fairy Robe",
      description:
        "Restores all party members' HP. Removes all ailments and binds. For one turn, nullifies all inflictions of ailments, binds, stuns, debuffs, and instant death.",
      bodyPartsUsed: "Head",
      levels: {
        total: 3,
        healingPower: ["160%", "230%", "300%"]
      }
    }
  },
  novice: [
    {
      name: "War Heal",
      description:
        "Restores one party member's HP at the start of the turn, then again at the end of the turn.",
      levels: {
        total: 10,
        tpCost: [
          { value: 3, colspan: 4 },
          { value: 5, colspan: 5 },
          { value: 8, colspan: 1 }
        ],
        healingPower: [
          "45%",
          "49%",
          "53%",
          "57%",
          "75%",
          "80%",
          "85%",
          "90%",
          "95%",
          "125%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: null
    },
    {
      name: "War Heal Line",
      description:
        "Restores one row of party members' HP at the start of the turn, then again at the end of the turn.",
      levels: {
        total: 10,
        tpCost: [
          { value: 7, colspan: 4 },
          { value: 10, colspan: 5 },
          { value: 15, colspan: 1 }
        ],
        healingPower: [
          "40%",
          "43%",
          "46%",
          "49%",
          "60%",
          "63%",
          "66%",
          "69%",
          "72%",
          "95%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "War Heal",
        level: 2
      }
    },
    {
      name: "Random Disease",
      description:
        "Attempts to inflict blind, poison, paralysis, sleep, or curse on one enemy. Random Disease will only attempt to inflict one of the ailments at a time.",
      levels: {
        total: 8,
        speedModifier: "80%",
        tpCost: [
          { value: 3, colspan: 3 },
          { value: 6, colspan: 4 },
          { value: 10, colspan: 1 }
        ],
        baseInflictionChance: [
          "45%",
          "46%",
          "48%",
          "53%",
          "54%",
          "56%",
          "57%",
          "65%"
        ],
        basePoisonFactor: [20, 23, 26, 35, 38, 41, 44, 55]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: null
    },
    {
      name: "Strength Slash",
      description:
        "Deals melee STR-based cut + almighty damage to one enemy. If the target is afflicted with an ailment, reduces their attack for a set amount of turns.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+15%",
        duration: 8,
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        attackReduction: ["10%", "11%", "12%", "13%", "14%", "20%"],
        damage: ["160%", "170%", "180%", "190%", "200%", "250%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword",
        skill: "Random Disease",
        level: 1
      }
    },
    {
      name: "Guard Slash",
      description:
        "Deals melee STR-based cut + almighty damage to one enemy. If the target is afflicted with an ailment, reduces their defense for a set amount of turns.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+15%",
        duration: 8,
        tpCost: [{ value: 5, colspan: 5 }, { value: 10, colspan: 1 }],
        defenseReduction: ["15%", "17%", "19%", "21%", "23%", "30%"],
        damage: ["160%", "170%", "180%", "190%", "200%", "250%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword",
        skill: "Random Disease",
        level: 1
      }
    },
    {
      name: "Displace",
      description:
        "Removes any ailments and binds from one party member. Attempts to inflict removed ailments and binds on one enemy.",
      levels: {
        total: 4,
        speedModifier: "80%",
        tpCost: [{ value: 8, colspan: 3 }, { value: 12, colspan: 1 }],
        baseInflictionChance: ["20%", "25%", "30%", "50%"]
      },
      bodyPartsUsed: "Head",
      type: "Support",
      requeriments: null
    },
    {
      name: "Vampire",
      description:
        "When the user deals damage to an enemy afflicted with an ailment, all party members in their row have their HP restored.",
      levels: {
        total: 6,
        staticHpRestore: [11, 14, 17, 20, 23, 34],
        healingPower: ["50%", "55%", "60%", "65%", "70%", "100%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: null
    },
    {
      name: "War Edge Master",
      description:
        "Enables sword-requiring skills for the user if they have a staff equipped. Increases maximum TP when a sword is equipped. Increases damage dealt when a staff is equipped.",
      levels: {
        total: 8,
        swordMaxTpIncrease: [
          "6%",
          "8%",
          "10%",
          "12%",
          "14%",
          "16%",
          "18%",
          "25%"
        ],
        staffDamageIncrease: ["4%", "5%", "6%", "7%", "8%", "9%", "10%", "15%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Take",
      description: "Increase material yield from taking in the labyrinth.",
      levels: null,
      bodyPartsUsed: null,
      type: "Gathering",
      requeriments: null
    }
  ],
  veteran: [
    {
      name: "War Revive",
      description:
        "Revives one dead party member at the start of the turn, then attempts to revive them again, at 1 HP, at the end of the turn.",
      levels: {
        total: 10,
        tpCost: [
          { value: 9, colspan: 4 },
          { value: 16, colspan: 5 },
          { value: 25, colspan: 1 }
        ],
        turnStartReviveAmnount: [1, 10, 20, 30, 70, 80, 90, 100, 110, 200],
        turnEndReviveChance: [
          "25%",
          "29%",
          "33%",
          "37%",
          "52%",
          "57%",
          "62%",
          "67%",
          "72%",
          "100%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "War Heal Line",
        level: 3
      }
    },
    {
      name: "Artery",
      description:
        "Restores all party members' HP whenever they perform an action for a set amount of turns.",
      levels: {
        total: 6,
        duration: 4,
        tpCost: [{ value: 8, colspan: 5 }, { value: 15, colspan: 1 }],
        speedModifier: ["40%", "60%", "80%", "100%", "120%", "200%"],
        healingPower: ["25%", "27%", "30%", "32%", "35%", "50%"]
      },
      bodyPartsUsed: "Heal",
      type: "Heal",
      requeriments: null
    },
    {
      name: "War Response",
      description:
        "Places a debuff on one enemy that causes all party members to recover HP when that enemy acts for a set amount of turns.",
      levels: {
        total: 6,
        duration: 4,
        tpCost: [{ value: 8, colspan: 5 }, { value: 15, colspan: 1 }],
        speedModifier: ["40%", "60%", "80%", "100%", "120%", "200%"],
        healingPower: ["20%", "22%", "24%", "26%", "28%", "40%"]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "War Revive",
        level: 2
      }
    },
    {
      name: "Headcut",
      description:
        "Deals melee STR-based cut + almighty damage to one enemy. If the target is afflicted with an ailment, attempts to bind the target's head.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "+15%",
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 16, colspan: 1 }
        ],
        baseHeadBindChance: [
          "55%",
          "57%",
          "59%",
          "66%",
          "69%",
          "72%",
          "75%",
          "85%"
        ],
        damage: ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword",
        skill: "Strength Slash",
        level: 2
      }
    },
    {
      name: "Armcut",
      description:
        "Deals melee STR-based cut + almighty damage to one enemy. If the target is afflicted with an ailment, attempts to bind the target's arms.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "+15%",
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 16, colspan: 1 }
        ],
        baseArmBindChance: [
          "55%",
          "57%",
          "59%",
          "66%",
          "69%",
          "72%",
          "75%",
          "85%"
        ],
        damage: ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword",
        skill: "Strength Slash",
        level: 2
      }
    },
    {
      name: "Legcut",
      description:
        "Deals melee STR-based cut + almighty damage to one enemy. If the target is afflicted with an ailment, attempts to bind the target's legs.",
      levels: {
        total: 8,
        speedModifier: "100%",
        accuracyModifier: "+15%",
        tpCost: [
          { value: 7, colspan: 3 },
          { value: 11, colspan: 4 },
          { value: 16, colspan: 1 }
        ],
        baseLegBindChance: [
          "55%",
          "57%",
          "59%",
          "66%",
          "69%",
          "72%",
          "75%",
          "85%"
        ],
        damage: ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword",
        skill: [{ name: "Headcut", level: 2 }, { name: "Armcut", level: 2 }]
      }
    },
    {
      name: "Rouse",
      description:
        "Increases the user's Force gain based on how many enemies have at least one body part bound.",
      levels: {
        total: 4,
        forceGainPerBoundEnemy: ["+2%", "+3%", "+4%", "+6%"]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: null
    },
    {
      name: "Hp Up",
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
    }
  ],
  master: [
    {
      name: "War Heal All",
      description:
        "Restores all party members' HP at the start of the turn, then again at the end of the turn.",
      levels: {
        total: 10,
        tpCost: [
          { value: 15, colspan: 4 },
          { value: 21, colspan: 5 },
          { value: 30, colspan: 1 }
        ],
        healingPower: [
          "35%",
          "37%",
          "39%",
          "41%",
          "48%",
          "50%",
          "52%",
          "54%",
          "56%",
          "70%"
        ]
      },
      bodyPartsUsed: "Head",
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: [
          { name: "Artery", level: 2 },
          { name: "War Response", level: 2 }
        ]
      }
    },
    {
      name: "Barrier",
      description:
        "For one turn, all party members have a chance to nullify ailments, binds, and debuffs inflicted on them. There is a limit on how many times Barrier can activate per turn.",
      levels: {
        total: 10,
        tpCost: [
          { value: 10, colspan: 4 },
          { value: 15, colspan: 5 },
          { value: 20, colspan: 1 }
        ],
        activationLimit: [
          { value: 1, colspan: 4 },
          { value: 2, colspan: 5 },
          { value: 3, colspan: 1 }
        ],
        nullifyChance: [
          "70%",
          "71%",
          "73%",
          "74%",
          "79%",
          "81%",
          "82%",
          "84%",
          "85%",
          "90%"
        ]
      },
      bodyPartsUsed: "Barrier",
      type: "Defense",
      requeriments: {
        weapon: null,
        skill: "War Heal All",
        level: 3
      }
    },
    {
      name: "Ailing Slash",
      description:
        "Deals melee STR-based cut + almighty damage to one enemy. If the target is afflicted with an ailment, Ailing Slash's damage is increased.",
      levels: {
        total: 6,
        speedModifier: "100%",
        accuracyModifier: "+15%",
        tpCost: [{ value: 15, colspan: 5 }, { value: 24, colspan: 1 }],
        baseDamage: ["170%", "180%", "190%", "200%", "210%", "260%"],
        ailmentDamage: ["425%", "450%", "475%", "500%", "525%", "650%"]
      },
      bodyPartsUsed: "Arms",
      type: "Attack",
      requeriments: {
        weapon: "Sword",
        skill: "Legcut",
        level: 3
      }
    },
    {
      name: "Mind Drain",
      description:
        "When the user deals damage to an enemy afflicted with an ailment and at least one bind, all party members in their row have their TP restored.",
      levels: {
        total: 6,
        staticHpRestore: [1, 2, 3, 4, 5, 6],
        healingPower: ["2%", "3%", "4%", "5%", "6%", "10%"]
      },
      bodyPartsUsed: null,
      type: "Heal",
      requeriments: {
        weapon: null,
        skill: "Rouse",
        level: 2
      }
    },
    {
      name: "Epidemic",
      description:
        "Normal attacks from the user attempt to inflict blind, poison, paralysis, sleep, and curse, all at once.",
      levels: {
        total: 4,
        baseInflictionChance: ["1%", "2%", "3%", "4%"],
        basePoisonFactor: [20, 25, 30, 45]
      },
      bodyPartsUsed: null,
      type: "Support",
      requeriments: {
        weapon: null,
        skill: "Mind Drain",
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
    }
  ]
};
export default warMagus;
