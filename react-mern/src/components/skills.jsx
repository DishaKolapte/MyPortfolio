// Import necessary hooks from React and axios for making HTTP requests.
import { useState, useEffect } from "react";
import axios from "axios";

// Define and export the Skills component.
export default function Skills() {
  // useState hook to store the list of skills fetched from the API.
  const [skills, setSkills] = useState([]);

  // useEffect hook to perform side effects (i.e., fetching skills) when the component is mounted.
  useEffect(() => {
    // Define an asynchronous function to fetch skills from the API.
    const getSkills = async () => {
      try {
        // Make a GET request to the API endpoint to retrieve skills data.
        const response = await axios.get("http://localhost:3000/api/skills");
        // Update the state with the fetched data.
        setSkills(response.data);
      } catch (error) {
        // Log any errors encountered during the request to the console.
        console.error("Error fetching the skills:", error);
      }
    };
    // Call the function to fetch the skills.
    getSkills();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts.

  // Render the skills section.
  return (
    <section id="skills">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          // Each skill card contains an icon and a name.
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
