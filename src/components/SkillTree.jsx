import { useState } from "react";

const quests = [
  {
    branch: "Core Front-End Knowledge",
    color: "bg-blue-200",
    skills: [
      { name: "Semantic HTML5", done: true },
      { name: "CSS Flexbox & Grid", done: true },
      { name: "JavaScript ES6+", done: true },
      { name: "DOM Manipulation", done: true },
      { name: "ARIA & Accessibility", done: false },
      { name: "CSS Animations", done: false },
      { name: "JS: debounce/throttle", done: false },
    ],
  },
  {
    branch: "React & UI Architecture",
    color: "bg-purple-200",
    skills: [
      { name: "Functional Components", done: true },
      { name: "Hooks: useState/useEffect", done: true },
      { name: "React Router", done: true },
      { name: "Tailwind CSS", done: true },
      { name: "Global State (Context/Zustand)", done: false },
      { name: "Lazy Loading", done: false },
      { name: "Component Testing", done: false },
    ],
  },
  {
    branch: "Real-World App Logic",
    color: "bg-green-200",
    skills: [
      { name: "API Fetching", done: true },
      { name: "Loading/Error States", done: true },
      { name: "Responsive UI", done: true },
      { name: "FastAPI + PostgreSQL", done: true },
      { name: "Form Validation", done: false },
      { name: "Authentication (Firebase)", done: false },
      { name: "React Query / SWR", done: false },
    ],
  },
  {
    branch: "Dev Workflow & Tooling",
    color: "bg-yellow-200",
    skills: [
      { name: "Git & GitHub", done: true },
      { name: "Clean README", done: true },
      { name: "Chrome DevTools", done: true },
      { name: "ESLint / Prettier", done: false },
      { name: "CI/CD Basics", done: false },
      { name: "Unit Testing", done: false },
    ],
  },
  {
    branch: "Communication & Visibility",
    color: "bg-pink-200",
    skills: [
      { name: "Team Collaboration", done: true },
      { name: "Debugging Live Projects", done: true },
      { name: "Teaching Experience", done: true },
      { name: "Dev Blog / Storytelling", done: false },
      { name: "LinkedIn Updates", done: false },
      { name: "User-Focused Portfolio", done: false },
    ],
  },
];

export default function SkillTree() {
  const [tree, setTree] = useState(quests);

  const toggleSkill = (branchIndex, skillIndex) => {
    const updated = [...tree];
    updated[branchIndex].skills[skillIndex].done =
      !updated[branchIndex].skills[skillIndex].done;
    setTree(updated);
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        🌳 Developer Quest Skill Tree
      </h1>
      {tree.map((branch, branchIdx) => (
        <div
          key={branch.branch}
          className={`p-4 rounded-lg shadow ${branch.color}`}
        >
          <h2 className="text-xl font-semibold mb-2">{branch.branch}</h2>
          <ul className="space-y-2">
            {branch.skills.map((skill, skillIdx) => (
              <li
                key={skill.name}
                className={`cursor-pointer px-3 py-2 rounded transition ${
                  skill.done
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700 border"
                }`}
                onClick={() => toggleSkill(branchIdx, skillIdx)}
              >
                {skill.done ? "✅" : "⬜"} {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
