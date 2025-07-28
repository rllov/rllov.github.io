// App.jsx
import { useState, useEffect } from "react";
import { lootTable } from "./data/lootTable";
import { rollDrop } from "./utils/rollDrop.js";
import LootDisplay from "./components/LootDisplay";
import InventoryHistory from "./components/InventoryHistory";
import BackToProjectsButton from "../components/BackToProjectsButton.jsx";
export default function App() {
  const [lootHistory, setLootHistory] = useState([]);
  const [totalKills, setTotalKills] = useState(0);
  const [totalCoins, setTotalCoins] = useState(() => {
    return parseInt(localStorage.getItem("totalCoins")) || 0; // Initialize from localStorage
  });

  useEffect(() => {
    localStorage.setItem("totalCoins", totalCoins);
  }, [totalCoins]);

  const handleKill = () => {
    const drop = rollDrop(lootTable);
    const totalDropValue = drop.reduce((sum, item) => sum + item.value, 0);

    setLootHistory([drop, ...lootHistory]);
    setTotalKills((prev) => prev + 1);
    setTotalCoins((prev) => prev + totalDropValue);
  };

  return (
    <>
      <BackToProjectsButton />
      {/* Main Content */}
      <div className="max-w-xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">🗡️ Loot Drop Simulator</h1>
        <button
          onClick={handleKill}
          className="bg-green-600 text-white px-4 py-2 rounded shadow mb-4 hover:bg-green-700"
        >
          Kill Boss
        </button>
        <p>Kills: {totalKills}</p>
        <p className="text-lg font-medium">
          🪙 Total GP Earned: {totalCoins.toLocaleString()} gp
        </p>
        <LootDisplay loot={lootHistory[0]} />
        <InventoryHistory history={lootHistory} />
      </div>
    </>
  );
}
