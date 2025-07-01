import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full max-w-4xl space-y-6 mt-5 px-4">
      <h1 className="text-2xl font-semibold mb-4">Hello! I am</h1>
      <h2 className="text-3xl font-bold mb-4 text-error">Ryan Lov</h2>
      <p className="text-lg text-base-content">
        I'm a Computer Science graduate from Cal Poly Pomona. I’m passionate
        about building scalable and efficient web applications, with a strong
        focus on front-end development. My main tools are{" "}
        <span className="font-semibold text-accent">React</span>,{" "}
        <span className="font-semibold text-accent">Node.js</span>, and cloud
        technologies. I enjoy creating seamless user experiences and robust
        backend systems, and I’m always eager to learn new technologies and
        tackle challenging problems.
      </p>
    </section>
  );
};

export default About;
