import { useState, useEffect } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching the projects:", error);
      }
    };
    getProjects();
  }, []);

  return (
    <section id="projects">
      <h3>My Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <img src={project.imgPath} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
