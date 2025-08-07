import React from "react";
import gptCalculator from "../assets/GPT-Calculator.png";
import { ImgCarousel } from "./ImgCarousel.jsx";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-4xl space-y-8 px-4 ">
      <h1 className="text-3xl font-bold mb-4 underline text-success">
        Featured Projects
      </h1>

      <ul className="space-y-10 ">
        <li>
          <div className="collapse collapse-arrow shadow-lg text-base-content bg-base-300">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-bold">
              Blog App – Full Stack Project
            </div>
            <div className="collapse-content rounded-b-lg">
              <ImgCarousel />

              <b className="text-base-content">Description:</b>
              <p className="text-base-content mb-4">
                A full stack blog application where users can sign up, log in,
                create posts (with optional images), comment, and like/unlike
                posts. Built with a <strong class="text-accent">React</strong>{" "}
                frontend, <strong class="text-accent">FastAPI</strong> backend,
                and <strong class="text-accent">PostgreSQL</strong> database.
              </p>
              <div>
                <span className="font-semibold">Features:</span>
                <ul className="list-disc pl-6 mb-4 text-base-content">
                  <li className="text-base-content">
                    User Authentication (JWT)
                  </li>
                  <li className="text-base-content">
                    Create/view posts with optional images
                  </li>
                  <li className="text-base-content">
                    Commenting and like system
                  </li>
                  <li className="text-base-content">
                    Responsive UI (React + Tailwind CSS)
                  </li>
                  <li className="text-base-content">
                    Image uploads served from backend
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-semibold ">Tech Stack:</span>
                <ul className="list-disc pl-6">
                  <li className="text-base-content">
                    Frontend: React, React Router, Axios, Tailwind CSS, React
                    Icons
                  </li>
                  <li className="text-base-content">
                    Backend: FastAPI, SQLAlchemy, Pydantic, bcrypt, python-jose,
                    python-dotenv, Uvicorn
                  </li>
                  <li className="text-base-content">Database: PostgreSQL</li>
                  <li className="text-base-content">
                    DevOps: Docker, Docker Compose, Nginx, Render
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="collapse collapse-arrow shadow-lg text-base-content bg-base-300">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-bold">
              Pokémon Info App – Full Stack Project
            </div>
            <div className="collapse-content">
              <b className="">Description:</b>
              <p className="mb-4 text-base-content">
                A full-stack web application for browsing, searching, and
                exploring Pokémon data and Pokémon TCG cards.
              </p>
              <div>
                <span className="font-semibold">Features:</span>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-base-content">
                    Browse a paginated list of all Pokémon with images, names,
                    IDs, and types
                  </li>
                  <li className="text-base-content">
                    View detailed stats, abilities, sprites, and evolution
                    chains
                  </li>
                  <li className="text-base-content">
                    Search and view Pokémon Trading Card Game (TCG) cards
                  </li>
                  <li className="text-base-content">
                    Fast image loading with backend caching
                  </li>
                  <li className="text-base-content">
                    Responsive, mobile-friendly design
                  </li>
                  <li className="text-base-content">
                    Smooth skeleton loading transitions
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">Tech Stack:</span>
                <ul className="list-disc pl-6">
                  <li className="text-base-content">
                    Frontend: React, Vite, Tailwind CSS, React Router, Axios,
                    ESLint, Prettier
                  </li>
                  <li className="text-base-content">
                    Backend: FastAPI (Python), Requests, httpx, static file
                    serving
                  </li>
                  <li className="text-base-content">Other: Docker, Render </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="collapse collapse-arrow shadow-lg text-base-content bg-base-300">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-bold">
              Portfolio Website – Frontend Project
            </div>
            <div className="collapse-content">
              <b className="">Description:</b>
              <p className="mb-4 text-base-content">
                A personal portfolio website showcasing my projects, skills, and
                experience.
              </p>
              <div>
                <span className="font-semibold">Features:</span>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-base-content">
                    Responsive design with mobile-first approach
                  </li>
                  <li className="text-base-content">
                    Smooth scrolling and navigation
                  </li>
                  <li className="text-base-content">
                    Dark mode toggle for better accessibility
                  </li>
                  <li className="text-base-content">
                    Interactive project showcase with collapsible sections
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">Tech Stack:</span>
                <ul className="list-disc pl-6">
                  <li className="text-base-content">
                    Frontend: React, Tailwind CSS, DaisyUI, React Icons
                  </li>
                  <li className="text-base-content">Hosting: Github Pages</li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="collapse collapse-arrow shadow-lg text-base-content bg-base-300">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-bold">
              GPT-Calculator
            </div>
            <div className="collapse-content">
              <figure className="w-full max-w-md mx-auto mb-4">
                <img src={gptCalculator} alt="GPT Calculator Screenshot" />
              </figure>
              <b className="">Description:</b>
              <p className="mb-4 text-base-content">
                A simple calculator application powered by GPT-3.
              </p>
              <div>
                <span className="font-semibold">Features:</span>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-base-content">
                    Natural language processing for math queries
                  </li>
                  <li className="text-base-content">
                    Supports basic arithmetic operations
                  </li>
                  <li className="text-base-content">User-friendly interface</li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">Tech Stack:</span>
                <ul className="list-disc pl-6">
                  <li className="text-base-content">
                    Frontend: React, Tailwind CSS
                  </li>
                  <li className="text-base-content">Backend: OpenAI API</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
