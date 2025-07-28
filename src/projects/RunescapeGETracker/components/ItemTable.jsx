import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ItemTable = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow border">No items found</div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">High Price</th>
            <th className="px-4 py-2 border border-gray-300">Low Price</th>
            <th className="px-4 py-2 border border-gray-300">Margin</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {items.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Link to={`/items/${item.id}`} className="contents">
                <td className="px-4 py-2 flex items-center space-x-2">
                  <img
                    src={item.image || "/placeholder-icon.png"}
                    alt={item.name}
                    className="w-8 h-8 object-cover rounded"
                  />
                  {item.members ? (
                    <AiFillStar
                      className="text-yellow-500"
                      title="Members-only item"
                    />
                  ) : (
                    <AiFillStar
                      className="text-gray-400"
                      title="Free-to-play item"
                    />
                  )}
                  <span className="font-semibold">
                    {item.name || "Unknown Item"}
                  </span>
                </td>
                <td className="px-4 py-2 text-green-600 text-center">
                  {item.high ? item.high.toLocaleString() : "N/A"} gp
                </td>
                <td className="px-4 py-2 text-red-600 text-center">
                  {item.low ? item.low.toLocaleString() : "N/A"} gp
                </td>
                <td className="px-4 py-2 text-center">
                  {item.high && item.low ? (
                    item.high - item.low >= 0 ? (
                      <span className="text-green-600">
                        {(item.high - item.low).toLocaleString()} gp
                      </span>
                    ) : (
                      <span className="text-red-600">
                        {(item.high - item.low).toLocaleString()} gp
                      </span>
                    )
                  ) : (
                    <span className="text-gray-500">0 gp</span>
                  )}
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
