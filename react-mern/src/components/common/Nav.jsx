import { Link } from "react-router-dom"; // Assuming you're using React Router

export default function Nav() {
  return (
    <nav id="main-menu" aria-label="Main navigation">
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
