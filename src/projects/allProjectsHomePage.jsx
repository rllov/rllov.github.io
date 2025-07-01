import React from "react";
import { Link } from "react-router-dom";

const Projects = [
  {
    id: "submission-form",
    Name: "Submission Form",
    Description:
      "Form is a document that stores user information on a web server using interactive controls.",
    TechStack: "HTML, CSS, JavaScript, DaisyUI",
  },
  {
    id: "joke-generator",
    Name: "Joke Generator",
    Description: "A web application that generates random jokes.",
    TechStack: "React, API, Fetch",
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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 shadow-lg p-4 cursor-pointer"
            >
              <h2 className="text-xl font-bold">{project.Name}</h2>
              <p>{project.Description}</p>
              <p className="text-sm text-gray-500">{project.TechStack}</p>
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
