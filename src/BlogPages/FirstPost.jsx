import React from "react";
import BackButton from "./components/BackButton";
const FirstPost = () => {
  return (
    <>
      {/* Navbar */}
      <BackButton aria-label="Go back to blog list" />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">
            👋 Hi, I’m Ryan — and I’m Building Forward
          </h1>

          <p className="text-gray-700 mb-4">
            I’m a recent Computer Science grad from Cal Poly Pomona with a minor
            in Mathematics, and I’ve been on a mission to build thoughtful,
            user-focused software ever since.
          </p>

          <p className="text-gray-700 mb-4">
            My journey into web development started with curiosity. I started
            with HTML and CSS, then dove into JavaScript and React. I’ve built
            everything from simple static sites to full-stack applications, but
            what really excites me is creating software that solves real
            problems for real people.
          </p>
        </section>
        <section className="mt-8 flex flex-col items-center">
          <p className="text-gray-700 mb-4">
            I WANT TO <b>LEARN</b>
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            🎯 What I’m Working Toward
          </h2>
          <p className="text-gray-700 mb-4">
            I’m currently leveling up as a front-end developer and working on
            projects that focus on <b>usability</b>, <b>accessibility</b>, and{" "}
            <b>real-world problem solving</b>. One of my most meaningful
            projects so far was a full-stack blog application using React,
            FastAPI, and PostgreSQL — it taught me how powerful small design
            decisions can be when users are involved.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mt-6 mb-2">🧠 What I Value</h2>
          <p className="text-gray-700 mb-4">
            I believe good software should respect people’s time. Whether I’m
            building a meal planner, debugging an API call, or refining a user
            flow, I try to keep things clean, intuitive, and purposeful.
          </p>

          <p className="text-gray-700 mb-4">
            I'm not chasing flashy tech for the sake of it. I'm learning how to
            think like a user, write like a teammate, and build like a
            problem-solver.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mt-6 mb-2">📍 What’s Next?</h2>
          <p className="text-gray-700 mb-4">
            Right now, I’m actively applying to front-end roles while continuing
            to build and learn in public. My goal is to join a team where I can
            grow, contribute, and keep sharpening my craft. Until then, you’ll
            find me experimenting with new features, writing about what I learn,
            and helping others along the way.
          </p>
          <p className="text-gray-600 italic mt-6">
            Thanks for stopping by — I’m just getting started.
          </p>{" "}
        </section>

        <footer>
          <p className="text-gray-600 mt-2">
            Feel free to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/ryanlov/"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>{" "}
            or check out my projects on{" "}
            <a
              href="https://github.com/rllov"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default FirstPost;
