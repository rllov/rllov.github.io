import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import Projects from "./projects/allProjectsHomePage";

import SubmissionForm from "./projects/SubmissionForm/SubmissionForm";
import JokeGeneratorApp from "./projects/JokeGenerator/JokeGeneratorApp";

const ProjectRoutes = {
  "submission-form": SubmissionForm,
  "joke-generator": JokeGeneratorApp,
};

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get projectId from the URL
  const ProjectComponent = ProjectRoutes[projectId];
  if (!ProjectComponent) {
    return <h1>Project Not Found</h1>;
  }
  return <ProjectComponent />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
