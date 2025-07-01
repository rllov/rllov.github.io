import React from "react";

const Education = () => {
  return (
    <section id="education" className="w-full max-w-4xl space-y-8 px-4">
      <h2 className="text-3xl font-bold mb-4 underline text-success">
        Education
      </h2>
      <div className="text-base-content">
        <p className="text-lg text-base-content">2025 - Cal Poly Pomona</p>
        <p className="text-base-content">
          B.Sc, Computer Science
          <br />
          Minor in Mathematics
        </p>
      </div>
      <div>
        <p className="text-lg text-base-content">
          2022 - Rio Hondo Community College
        </p>
        <p className="text-base-content">
          A.S, General Studies with Emphasis in Math and Science
        </p>
        <p className="text-base-content">
          A.A General Studies with an Emphasis in Social Behavior and
          Self-Development
        </p>
      </div>
    </section>
  );
};

export default Education;
