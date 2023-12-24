import { Link } from "react-router-dom";
import "./Home.css";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <p className="container-header">
          Organize your work and life, finally.
        </p>
        <p className="container-content">
          Become focused, organized, and calm with ToDo List.
        </p>
        <Link
          to="/tasks"
          className="btn btn-container-footer"
          title="start to do"
        >
          Start
        </Link>
      </div>
      <div className="btn flower-link">
        <Link
          to="https://pngtree.com/freepng/watercolor-flower-wisteria-purple-flower-bunch_6409023.html"
          target="_blank"
          rel="noopener noreferrer"
          title="image link"
        >
          png image from pngtree.com
        </Link>
      </div>
    </React.Fragment>
  );
}
