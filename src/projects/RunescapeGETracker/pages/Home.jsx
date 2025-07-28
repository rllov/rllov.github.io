import React, { useState, useEffect } from "react";
import { fetchItemData } from "../service/GEApi";
import ItemTable from "../components/ItemTable.jsx";
import SearchBar from "../components/SearchBar.jsx";
import BackToProjectsButton from "../../components/BackToProjectsButton.jsx";

const Home = () => {
  const [itemData, setItemData] = useState([]); // Full item data
  const [loading, setLoading] = useState(true); // Loading state
  const [filteredData, setFilteredData] = useState([]); // Filtered data for search
  const [isSearching, setIsSearching] = useState(false); // Track if search is active

  const fetchTop10ExpensiveItems = (data) => {
    return [...data]
      .sort((a, b) => b.high - a.high) // Sort by 'high' price in descending order
      .slice(0, 12); // Take the first 12 items
  };

  // Handle search query from SearchBar
  const handleSearch = (query) => {
    if (query) {
      setIsSearching(true); // Set search state to true
      const results = itemData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setIsSearching(false); // Reset search state
      setFilteredData(itemData); // Reset to full data if query is empty
    }
  };

  // Fetch item data on component mount
  useEffect(() => {
    fetchItemData()
      .then((data) => {
        setItemData(data); // Set full item data
        setFilteredData(data); // Initialize filtered data with full data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/*NavBar*/}
      <BackToProjectsButton />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          🪙 RuneScape GE Price Tracker
        </h1>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Loading State */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ItemTable
            items={
              isSearching ? filteredData : fetchTop10ExpensiveItems(itemData)
            }
          />
        )}
      </div>
    </div>
  );
};

export default Home;
