import React from "react";
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm p-4">
      <div className="flex-1 text-2xl font-bold">Blogs</div>
      <div className="flex-none">
        <Link to="/blog" className="btn btn-primary text-white font-semibold">
          Back to Blog Page
        </Link>
      </div>
    </div>
  );
};

export default BackButton;
