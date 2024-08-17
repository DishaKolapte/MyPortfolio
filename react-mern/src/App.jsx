import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Resume from "./components/Resume";
import Footer from "./components/common/Footer"; // Import the footer component
import "./App.css";

function Home() {
  return (
    <section id="home">
      <h3>About Me</h3>
      <p>
        Welcome to my portfolio! I am a [Your Profession], passionate about [Your Interests]. With
        experience in [Your Experience], I strive to create impactful projects and grow my skillset.
        Explore my projects and skills, and feel free to connect with me.
      </p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
}

export default App;
