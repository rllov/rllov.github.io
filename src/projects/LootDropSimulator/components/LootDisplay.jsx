// LootDisplay.jsx
//This component displays the loot received from the last kill.

export default function LootDisplay({ loot }) {
  if (!loot) return <p>No loot yet!</p>;

  return (
    <div className="border p-4 rounded mt-4 bg-gray-100">
      <h2 className="font-semibold">You received:</h2>
      <ul className="space-y-1 mt-2">
        {loot.map((item, idx) => (
          <li
            key={idx}
            className={`text-${
              item.rarity === "rare"
                ? "red"
                : item.rarity === "uncommon"
                ? "yellow"
                : "black"
            }-600`}
          >
            {item.name} – {item.value.toLocaleString()} gp
          </li>
        ))}
      </ul>
    </div>
  );
}
