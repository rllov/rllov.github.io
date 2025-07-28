// lootTable.js
//This is where all the items / drops should be
export const lootTable = [
  // Common items
  { name: "Rune Sword", rarity: "common", chance: 0.3, value: 15000 },
  { name: "Steel Platebody", rarity: "common", chance: 0.25, value: 10000 },
  { name: "Adamant Helmet", rarity: "common", chance: 0.2, value: 8000 },
  { name: "Coal", rarity: "common", chance: 0.4, value: 2000 },
  { name: "Iron Ore", rarity: "common", chance: 0.5, value: 1000 },

  // Uncommon items
  { name: "Mystic Robe Top", rarity: "uncommon", chance: 0.1, value: 70000 },
  { name: "Dragon Dagger", rarity: "uncommon", chance: 0.08, value: 50000 },
  { name: "Rune Platebody", rarity: "uncommon", chance: 0.07, value: 60000 },
  { name: "Magic Logs", rarity: "uncommon", chance: 0.12, value: 12000 },
  {
    name: "Nature Runes (x50)",
    rarity: "uncommon",
    chance: 0.15,
    value: 15000,
  },

  // Rare items
  { name: "Dragon Claws", rarity: "rare", chance: 0.01, value: 20000000 },
  { name: "Abyssal Whip", rarity: "rare", chance: 0.02, value: 2500000 },
  { name: "Bandos Chestplate", rarity: "rare", chance: 0.005, value: 15000000 },
  { name: "Armadyl Crossbow", rarity: "rare", chance: 0.003, value: 30000000 },
  {
    name: "Saradomin Godsword",
    rarity: "rare",
    chance: 0.002,
    value: 40000000,
  },

  // Guaranteed items
  {
    name: "Coins",
    rarity: "guaranteed",
    chance: 1,
    value: () => Math.floor(Math.random() * 1000 + 10),
  },
  {
    name: "Bones",
    rarity: "guaranteed",
    chance: 1,
    value: 100,
  },

  // Very rare items
  {
    name: "Third Age Platebody",
    rarity: "very rare",
    chance: 0.0001,
    value: 50000000,
  },
  {
    name: "Twisted Bow",
    rarity: "very rare",
    chance: 0.00005,
    value: 100000000,
  },
  {
    name: "Scythe of Vitur",
    rarity: "very rare",
    chance: 0.00002,
    value: 120000000,
  },
];
