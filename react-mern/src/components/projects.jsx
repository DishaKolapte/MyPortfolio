import { useState, useEffect } from "react";
import axios from "axios";

// Projects component that fetches and displays a list of projects.
export default function Projects() {
  // State to hold the list of projects
  const [projects, setProjects] = useState([]);

  // useEffect hook to fetch projects data when the component mounts.
  useEffect(() => {
    const getProjects = async () => {
      try {
        // Fetch projects data from the API.
        const response = await axios.get("http://localhost:3000/api/projects");
        // Update the state with the fetched projects data.
        setProjects(response.data);
      } catch (error) {
        // Log any errors that occur during the data fetch.
        console.error("Error fetching the projects:", error);
      }
    };
    // Call the getProjects function to initiate the data fetch.
    getProjects();
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts.

  // Render the projects in a grid layout.
  return (
    <section id="projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          // Each project is displayed in a card with a unique key
          <div key={index} className="project-card">
            <img src={project.imgPath} alt={project.title} className="project-image" />
            <div className="project-details">
              <h4>{project.title}</h4>

              <p>
                <strong>Description :</strong>
                {project.description}
              </p>
              <div className="project-links">
                <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
                  Read more on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
