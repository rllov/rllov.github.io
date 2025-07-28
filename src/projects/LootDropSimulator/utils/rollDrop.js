// rollDrop.js
export function rollDrop(table) {
  return table
    .filter((item) => {
      if (item.rarity === "guaranteed") return true;
      return Math.random() < item.chance;
    })
    .map((item) => ({
      ...item,
      value: typeof item.value === "function" ? item.value() : item.value || 0,
    }));
}
