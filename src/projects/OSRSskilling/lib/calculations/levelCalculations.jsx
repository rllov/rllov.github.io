import { calculateXPforLevel } from "./xpCalculations";
/**
 * This function should calculate the level based on xp using osrs * * level format
 * -- Takes in the player's XP
 * -- returns the calculated level
 */

export const calculateLevel = (xp) => {
  let level = 1;
  for (let i = 1; i <= 99; i++) {
    const xpRequired = calculateXPforLevel(i + 1);
    if (xp >= xpRequired) {
      level = i + 1;
    } else {
      break;
    }
  }
  return level;
};

/*
 *Checks if the player can chop a tree based on their level
 * -- Takes in the player's level and the tree's level
 * -- returns true if the player can chop the tree, false otherwise
 */

export const canChopTree = (playerLevel, treeLevel) => {
  return playerLevel >= treeLevel;
};
