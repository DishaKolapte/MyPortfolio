// Import necessary modules and components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header"; 
import Projects from "./components/projects"; 
import Skills from "./components/skills"; 
import Resume from "./components/Resume"; 
import Footer from "./components/common/Footer"; 
import "./App.css"; 

// Home component to display introductory section
function Home() {
  return (
    <section id="home">
      <div className="profile-picture">
        <img src="../src/assets/images/profileImg.JPG" alt="Disha Kolapate" />
        {/* Profile image with alt text for accessibility */}
      </div>
      <h3>Hi, I am Disha!</h3>
      <p>
        I'm a passionate web developer with a strong foundation in computer science and a keen
        interest in crafting intuitive and dynamic user experiences. I am currently pursuing a
        <strong> Postgraduate Certificate in Web Development</strong>
        at Humber College, Toronto.
      </p>
      <p>
        In addition to my technical skills, I have a strong background in{" "}
        <strong>project management and team collaboration</strong>, having led various projects that
        combine deep learning and web development.
      </p>
      <p>
        I am always eager to learn, grow, and contribute to projects that make a difference. Let's
        connect and build something amazing together!
      </p>
    </section>
  );
}

// Main App component that sets up routing and layout
function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Render the Header component */}
        <Routes>
          {/* Define routes for different sections of the app */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/projects" element={<Projects />} /> {/* Projects route */}
          <Route path="/skills" element={<Skills />} /> {/* Skills route */}
          <Route path="/resume" element={<Resume />} /> {/* Resume route */}
        </Routes>
        <Footer /> {/* Render the Footer component */}
      </div>
    </Router>
  );
}

// Export the App component as default
export default App;
