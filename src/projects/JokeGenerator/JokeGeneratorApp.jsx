import { useState } from "react";
import BackToProjectsButton from "../components/BackToProjectsButton";
const JokeGeneratorApp = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setJoke(data.joke);
      });
  };

  return (
    <>
      {/* BackButton */}
      <BackToProjectsButton />
      {/* Joke Generator Section */}
      <div className="container mx-auto h-screen p-4 flex flex-col justify-center items-center">
        <h1>Joke Generator</h1>
        <button onClick={fetchJoke}>Get a Joke</button>
        <p>{joke}</p>
      </div>
    </>
  );
};

export default JokeGeneratorApp;
