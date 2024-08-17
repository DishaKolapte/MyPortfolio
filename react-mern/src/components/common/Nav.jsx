import { Link } from "react-router-dom";

// Nav component renders the main navigation menu for the site
export default function Nav() {
  return (
    <nav id="main-menu" aria-label="Main navigation">
      {/* Unordered list containing the navigation links */}
      <ul>
        {/* Navigation link to the Home page */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Navigation link to the Projects page */}
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        {/* Navigation link to the Skills page */}
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        {/* Navigation link to the Resume page */}
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
