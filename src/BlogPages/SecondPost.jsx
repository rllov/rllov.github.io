import React from "react";
import BackButton from "./components/BackButton";

const SecondPost = () => {
  return (
    <>
      {/* <meta
        name="description"
        content="Why I stopped obsessing over portfolio polish and focused on real developer value"
      />
      <meta
        name="keywords"
        content="web development, portfolio tips, developer productivity"
      /> */}
      <BackButton
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
        aria-label="Go back to blog list"
      />
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">
          What should a company pay you to produce work?
        </h1>
        <p className="text-sm text-base-100 mt-2">
          📅 Posted July 31, 2025 · ☕️ 3 min read
        </p>
      </div>
      <article className="container mx-auto max-w-3xl px-4 py-8 ">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-800">What I Saw</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            I saw a comment on a post on r/WebDev that said...
          </p>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic my-4 text-gray-700 bg-blue-50 p-4 rounded">
            “A portfolio site should be clean and organized. But consider what
            you're worth as a developer. What should a company pay you to
            produce work? Let's say it's $100/hr. You have to realize every hour
            you're spending making a site beautiful, you're not making money.”
          </blockquote>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-800">
            My Take-away{" "}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            This comment made me stop and think about how I spend my time
            building portfolio projects. I realized that while visuals are
            important, companies pay us for the value we, the developers, bring
            to the table. Things like how well we solve problems, structure
            logic, and build features are what really matter.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-800">
            🛠️How I’m Applying This Insight
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Moving forward, I’m shifting my focus from pixel-perfect portfolios
            to <strong>tangible problem-solving</strong>. Here’s my plan:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>
              <strong>Start with user needs, not UI:</strong>
              <span className="block text-gray-600 mt-1">
                Sketch workflows and API contracts first—only *then* design
                interfaces.
              </span>
            </li>
            <li>
              <strong>Build "minimum viable tools":</strong>
              <span className="block text-gray-600 mt-1">
                Create functional prototypes (e.g., a CLI tool or API wrapper)
                before adding aesthetics.
              </span>
            </li>
            <li>
              <strong>Practice resilience:</strong>
              <span className="block text-gray-600 mt-1">
                Harden projects with error states, loading spinners, and mock
                network delays.
              </span>
            </li>
            <li>
              <strong>Write to clarify thinking:</strong>
              <span className="block text-gray-600 mt-1">
                Publish short post-mortems for each project—what broke, and how
                I fixed it.
              </span>
            </li>
            <li>
              <strong>Limit design time:</strong>
              <span className="block text-gray-600 mt-1">
                Use a timer (e.g., 2 hours max for styling) to avoid rabbit
                holes.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            The goal? To <strong>ship faster</strong> and{" "}
            <strong>learn deeper</strong>—because that’s what companies pay for.
          </p>
        </section>
      </article>
      <footer className="mt-8 bg-gray-100 py-4 text-center text-gray-500">
        © 2025 Ryan Lov. All rights reserved (maybe?).
      </footer>
    </>
  );
};

export default SecondPost;
