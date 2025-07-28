import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemData } from "../service/GEApi";
import "../components/jumpingText.css";
const JumpingText = ({ text }) => {
  return (
    <div className="jumping-text-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="jumping-char"
          style={{ animationDelay: `${index * 0.1}s`, letterSpacing: "0.1em" }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

const ItemInformation = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details using the ID
    fetchItemData()
      .then((data) => {
        const selectedItem = data.find((item) => item.id === parseInt(id));
        setItem(selectedItem);
      })
      .catch((error) => console.error("Error fetching item details:", error));
  }, [id]);

  if (!item) {
    return <p>Loading item details...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <section className="w-full bg-base-200 p-6 rounded-lg shadow-lg text-center">
        <div className="mr-4 flex flex-row items-center justify-center">
          <img
            src={item.image || "/placeholder-icon.png"}
            alt={item.name}
            className="w-8 h-8 object-cover rounded mb-4"
          />
          <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
        </div>

        <p>High Price: {item.high?.toLocaleString() || "N/A"} gp</p>
        <p>Low Price: {item.low?.toLocaleString() || "N/A"} gp</p>
        <p>
          Margin:{" "}
          {item.high && item.low
            ? `${(item.high - item.low).toLocaleString()} gp`
            : "0 gp"}
        </p>
        <p>{item.description || "No description available."}</p>
      </section>
      <section className="mt-8 flex flex-col sm:flex-row sm:justify-evenly items-center">
        <img
          src="https://media.tenor.com/PbbHDS_y66QAAAAM/happy-birthday.gif"
          alt="cat dancing gif"
          className="w-40 h-60 sm:w-48 sm:h-80 rounded-lg shadow-lg mb-4"
        />
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYms0dW4yN2s2bWJwZnNhN2hjZW1vNXEyZHA3ZmZ6OXp0eG0ydHd2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gVsmn4qdyBn1Bra2tN/giphy.gif"
          alt="cat headbanging to the music gif"
          className="w-40 h-40 sm:w-80 sm:h-80 rounded-lg shadow-lg mb-4"
        />
        <img
          src="https://media1.tenor.com/m/-qBsG1HwR4oAAAAd/cat-dance-dancing-cat.gif"
          alt="cat dancing gif"
          className="w-40 h-60 sm:w-48 sm:h-80 rounded-lg shadow-lg mb-4"
        />
      </section>

      <section className="mt-8">
        <h2 className="text-center text-error mb-4 text-2xl">
          <JumpingText text="Time to pack it up" />
        </h2>
      </section>
    </div>
  );
};

export default ItemInformation;
