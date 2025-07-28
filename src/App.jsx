import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./projects/allProjectsHomePage";
import Blog from "./Pages/Blog";

import SubmissionForm from "./projects/SubmissionForm/SubmissionForm";
import JokeGeneratorApp from "./projects/JokeGenerator/JokeGeneratorApp";
import PomodoroTimer from "./projects/PomodoroTimer/PomodoroTimer";
import LootDropSimulator from "./projects/LootDropSimulator/App.jsx";
import RunescapeGETracker from "./projects/RunescapeGETracker/App.jsx";
// Importing the blog post Pages
import FirstPost from "./BlogPages/FirstPost";
import ExploringReactHooks from "./BlogPages/ExploringReactHooks";
import SecondPost from "./BlogPages/SecondPost";
const ProjectRoutes = {
  "submission-form": SubmissionForm,
  "joke-generator": JokeGeneratorApp,
  "pomodoro-timer": PomodoroTimer,
  "loot-drop-simulator": LootDropSimulator,
  "runescape-ge-tracker": RunescapeGETracker,
};

const blogRoutes = {
  "first-post": FirstPost,
  "exploring-react-hooks": ExploringReactHooks,
  "second-post": SecondPost,
};

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get projectId from the URL
  const ProjectComponent = ProjectRoutes[projectId];
  if (!ProjectComponent) {
    return <h1>Project Not Found</h1>;
  }
  return <ProjectComponent />;
};
const BlogPostDetails = () => {
  const { articleId } = useParams(); // Get articleId from the URL
  const BlogPostComponent = blogRoutes[articleId];
  if (!BlogPostComponent) {
    return <h1>Blog Post Not Found</h1>;
  }
  return <BlogPostComponent />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:articleId" element={<BlogPostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
