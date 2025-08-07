export const calculateXPforLevel = (level) => {
  let xpRequired = 0;
  for (let i = 1; i < level; i++) {
    xpRequired += Math.floor(i + 300 * Math.pow(2, i / 7));
  }
  return Math.floor(xpRequired / 4);
};

export const calculateXpProgress = (xp, level) => {
  const currentLevelXp = calculateXPforLevel(level);
  const nextLevelXp = calculateXPforLevel(level + 1);
  return ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100;
};
