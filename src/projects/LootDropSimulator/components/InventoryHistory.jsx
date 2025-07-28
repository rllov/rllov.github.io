// components/InventoryHistory.jsx

import React from "react";

export default function InventoryHistory({ history }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-6 text-left">
      <h2 className="text-xl font-bold mb-2">📜 Inventory History</h2>
      <ul className="space-y-4 max-h-64 overflow-y-auto border p-3 rounded bg-white shadow-inner">
        {history.map((drop, index) => (
          <li key={index} className="border-b pb-2">
            <p className="text-sm text-gray-500 mb-1">
              Drop #{history.length - index}
            </p>
            <ul className="pl-4 list-disc text-sm">
              {drop.map((item, idx) => (
                <li
                  key={idx}
                  className={`${
                    item.rarity === "rare"
                      ? "text-red-600"
                      : item.rarity === "uncommon"
                      ? "text-yellow-600"
                      : item.rarity === "guaranteed"
                      ? "text-gray-600"
                      : "text-black"
                  }`}
                >
                  {item.name} — {item.value.toLocaleString()} gp
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
