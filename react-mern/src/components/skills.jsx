import { useState, useEffect } from "react";
import axios from "axios";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/skills");
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching the skills:", error);
      }
    };
    getSkills();
  }, []);

  return (
    <section id="skills">
      <h3>My Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
