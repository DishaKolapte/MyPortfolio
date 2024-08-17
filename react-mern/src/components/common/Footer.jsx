import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="contact-info">
        <p>
          Contact Me: <a href="mailto:dishakolapate@gmail.com">dishakolapate@gmail.com</a>
        </p>
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/disha-kolapate"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/DishaKolapte" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Disha Kolapate. All rights reserved.</p>
      </div>
    </footer>
  );
}
