import React from "react";
import { Link } from "react-router-dom";
const BackToProjectsButton = () => {
  return (
    <div className="top-4 right-4 fixed z-50">
      <Link to="/projects" className="btn btn-primary text-white font-semibold">
        Back to Projects
      </Link>
    </div>
  );
};

export default BackToProjectsButton;
