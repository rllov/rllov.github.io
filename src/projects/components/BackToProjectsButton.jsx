import React from "react";
import { Link } from "react-router-dom";
const BackToProjectsButton = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm p-4">
      <div className="flex-1 text-2xl font-bold">Projects</div>
      <div className="flex-none">
        <Link to="/" className="btn btn-primary text-white font-semibold">
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default BackToProjectsButton;
