// The Resume component displays the user's resume information, including contact details,
// education, work experience, extracurricular activities, technical skills, and projects.

export default function Resume() {
  return (
    <section id="resume">
      {/* Header section with name */}
      <h1>Disha Kolapate</h1>

      {/* Contact Information */}
      <p>
        <strong>Email:</strong>
        {/* Email address with a mailto link */}
        <a href="mailto:DishaKolapate@gmail.com">DishaKolapate@gmail.com</a>
      </p>
      <p>
        <strong>LinkedIn:</strong>
        {/* LinkedIn profile link, opens in a new tab */}
        <a href="https://www.linkedin.com/in/disha-kolapate" target="_blank">
          www.linkedin.com/in/disha-kolapate
        </a>
      </p>

      {/* Education Section */}
      <h2>Education</h2>
      <p>
        <strong>Humber College | North Etobicoke, ON, CA</strong>
        PG Certificate (Web Development) | January 2024 - Present
      </p>

      <p>
        <strong>Universal College of Engineering | Mumbai University, IN</strong>
        Bachelor of Engineering (Computer Science) | August 2019 - July 2023
      </p>

      {/* Work Experience Section */}
      <h2>Work Experience</h2>
      <p>
        <strong>CHAMPHUNT | Mumbai, IN | Intern / Front End Developer/Engineer</strong>
        June 2022 – August 2022
      </p>
      <ul>
        <li>
          Contributed to developing a virtual platform for cricket fans to interact, discuss, and
          analyze matches.
        </li>
        <li>
          Assisted in building the front-end components using React.js, HTML5, CSS3, and Bootstrap.
        </li>
        <li>
          Participated in code reviews and proposed improvements for better performance and user
          experience.
        </li>
      </ul>

      {/* Extracurricular Activities Section */}
      <h2>Extra Curricular</h2>
      <p>
        <strong>CODECHEF UCOE | Mumbai, IN | Outreach and Media Lead</strong>
        August 2021 – July 2022
      </p>
      <ul>
        <li>
          Managed the chapter's social media presence, curating engaging content, and sharing
          updates, events, and resources.
        </li>
        <li>
          Collaborated with the leadership team to conceptualize and execute campaigns, workshops,
          and initiatives.
        </li>
      </ul>

      {/* Technical Skills Section */}
      <h2>Technical Skills</h2>
      <ul>
        {/* List of programming languages, frameworks, and tools */}
        <li>
          Programming Languages & Frameworks: Python, Java, JavaScript, jQuery, C#, React, HTML/CSS,
          PHP, ASP.NET
        </li>
        <li>Database: MySQL and MongoDB</li>
        <li>Other Technology: Node.js, Express.js, PUG, Git, PowerBI, MSOffice</li>
      </ul>

      {/* Software Projects Section */}
      <h2>Software Projects</h2>

      <p>
        <strong>MuseNet: A Deep Learning-based Music Generation System</strong>
      </p>
      <ul>
        <li>
          Developed innovative generative models for music creation, integrating MLPs and LSTMs with
          compression techniques and attention mechanisms.
        </li>
        <li>
          Spearheaded project documentation and conducted thorough research on music generation and
          machine learning techniques.
        </li>
        <li>
          Curated datasets, ensuring data quality, and facilitated project coordination among team
          members.
        </li>
        <li>
          Provided essential non-technical support including user interface design and ensuring
          project relevance and usability.
        </li>
      </ul>

      <p>
        <strong>PlantHub: Plant Pathology and Crop Recommendation System</strong>
      </p>
      <ul>
        <li>
          Developed an integrated agricultural decision support system utilizing machine learning
          and deep learning techniques.
        </li>
        <li>Designed and developed a user-friendly web application using HTML, CSS, JS.</li>
        <li>
          Curated and preprocessed datasets of soil properties, weather data, and plant disease
          images for model training.
        </li>
      </ul>

      {/* Link to download the resume as a PDF, opens in a new tab */}
      <a
        href="https://drive.google.com/file/d/1Jnz1VpsCX6WRKrnmCRKzAddjUD0PQQrs/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer">
        Download Resume
      </a>
    </section>
  );
}
