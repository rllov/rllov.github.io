import React from "react";
import { Link } from "react-router-dom";

const Projects = [
  {
    id: "submission-form",
    Name: "Submission Form",
    Description:
      "Form is a document that stores user information on a web server using interactive controls.",
    Tags: "HTML, CSS, JavaScript, DaisyUI",
    Date: "07/24/2025",
  },
  {
    id: "joke-generator",
    Name: "Joke Generator",
    Description: "A web application that generates random jokes.",
    Tags: "React, API, Fetch",
    Date: "07/24/2025",
  },
  {
    id: "pomodoro-timer",
    Name: "Pomodoro Timer",
    Description: "A productivity timer that uses the Pomodoro Technique.",
    Tags: "React, CSS, JavaScript, DaisyUI, Productivity",
    Date: "07/28/2025",
  },
  {
    id: "loot-drop-simulator",
    Name: "Loot Drop Simulator",
    Description:
      "A simulator that generates random loot drops based on a predefined loot table.",
    Tags: "React, JavaScript, CSS, Gaming",
    Date: "07/30/2025",
  },
  {
    id: "runescape-ge-tracker",
    Name: "Runescape GE Tracker",
    Description:
      "A web application that tracks the Grand Exchange prices in Runescape.",
    Tags: "React, JavaScript, CSS, DaisyUI, API, Gaming",
    Date: "07/30/2025",
  },
  {
    id: "coding-concepts",
    Name: "Coding Concepts",
    Description: "A collection of coding concepts and algorithms.",
    Tags: "React, JavaScript, CSS, Algorithms",
    Date: "08/05/2025",
  },
];

const AllProjectsHomePage = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-200 shadow-sm p-4">
        <div className="flex-1 text-2xl font-bold">Projects</div>
        <div className="flex-none">
          <Link to="/" className="btn btn-primary text-white font-semibold">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid card bg-base-300 shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow mb-6"
            >
              <h2 className="text-xl font-bold">{project.Name}</h2>
              <p>{project.Description}</p>
              <p className="text-sm text-gray-500 mt-2 mb-2">
                {project.Tags.split(", ").map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <p className="text-sm text-gray-500">{project.Date}</p>
              <Link
                to={`/projects/${project.id}`}
                className="text-blue-500 hover:underline mt-2"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProjectsHomePage;
