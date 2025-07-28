import { AiFillStar } from "react-icons/ai";
export default function ItemCard({ item }) {
  if (!item) {
    return (
      <div className="bg-white p-4 rounded shadow border">
        No item data available
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded shadow border hover:shadow-lg hover:cursor-pointer transition-shadow break-inside-avoid mb-4">
      <div className="flex items-center space-x-4 mb-2">
        <img
          src={item.image || "/placeholder-icon.png"} // Use a placeholder if image is missing
          alt={item.name}
          className="w-6 h-6 object-cover rounded mb-2"
        />
        {item.members ? (
          <AiFillStar className="text-yellow-500" />
        ) : (
          <AiFillStar className="text-gray-400" />
        )}
        <h2 className="font-semibold text-lg mb-2">
          {item.name || "Unknown Item"}
        </h2>
      </div>

      <p className="text-green-600">
        High: {item.high?.toLocaleString() || "N/A"} gp
      </p>
      <p className="text-red-600">
        Low: {item.low?.toLocaleString() || "N/A"} gp
      </p>
      <p className="text-gray-600">Margin : {item.high - item.low} gp</p>
    </div>
  );
}
