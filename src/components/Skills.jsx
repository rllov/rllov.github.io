import React from "react";
import {
  SiMui,
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiDaisyui,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiPython,
  SiGit,
  SiDocker,
  SiAxios,
} from "react-icons/si";
const frontendTechnologies = [
  { name: "JavaScript", icon: <SiJavascript size={"1.25em"} /> },
  { name: "TypeScript", icon: <SiTypescript size={"1.25em"} /> },
  { name: "HTML", icon: <SiHtml5 size={"1.25em"} /> },
  { name: "React", icon: <SiReact size={"1.25em"} /> },
];
const stylingDesigns = [
  { name: "CSS", icon: <SiCss3 size={"1.25em"} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={"1.25em"} /> },
  { name: "MaterialUI", icon: <SiMui size={"1.25em"} /> },
  { name: "DaisyUI", icon: <SiDaisyui size={"1.25em"} /> },
];
const backendTechnologies = [
  { name: "Node.js", icon: <SiNodedotjs size={"1.25em"} /> },
  { name: "FastAPI", icon: <SiFastapi size={"1.25em"} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={"1.25em"} /> },
  { name: "Python", icon: <SiPython size={"1.25em"} /> },
];
const toolsUtilities = [
  { name: "Git", icon: <SiGit size={"1.25em"} /> },
  { name: "Axios", icon: <SiAxios size={"1.25em"} /> },
  { name: "Docker", icon: <SiDocker size={"1.25em"} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full max-w-4xl space-y-8 px-4">
      <h1 className="text-3xl font-bold mb-4 underline text-success">Skills</h1>
      <p className="text-base-content">
        Here are some of the technologies and tools I work with:
      </p>
      <div id="frontend-technologies">
        <h2 className="text-2xl font-bold mb-4">Frontend Technologies</h2>
        <div className="flex flex-wrap gap-4 list-none">
          {frontendTechnologies.map((tech) => (
            <span
              key={tech.name}
              className="badge badge-xl p-4 rounded shadow transition w-fit hover:shadow-lg hover:scale-110"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      <div id="styling-designs">
        <h2 className="text-2xl font-bold mb-4">Styling & Designs</h2>
        <div className="flex flex-wrap gap-4 list-none">
          {stylingDesigns.map((tech) => (
            <span
              key={tech.name}
              className="badge badge-xl p-4 rounded shadow transition w-fit hover:shadow-lg hover:scale-110"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      <div id="backend-technologies">
        <h2 className="text-2xl font-bold mb-4">Backend Technologies</h2>
        <div className="flex flex-wrap gap-4 list-none">
          {backendTechnologies.map((tech) => (
            <span
              key={tech.name}
              className="badge badge-xl p-4 rounded shadow transition w-fit hover:shadow-lg hover:scale-110"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      <div id="tools-utilities">
        <h2 className="text-2xl font-bold mb-4">Tools & Utilities</h2>
        <div className="flex flex-wrap gap-4 list-none">
          {toolsUtilities.map((tech) => (
            <span
              key={tech.name}
              className="badge badge-xl  p-4 rounded shadow transition w-fit hover:shadow-lg hover:scale-110"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
