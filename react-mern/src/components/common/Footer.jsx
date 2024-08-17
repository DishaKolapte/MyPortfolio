import React from "react";

// Footer component to display contact information, social links, and copyright notice
export default function Footer() {
  return (
    <footer id="footer">
      {/* Contact information section */}
      <div className="contact-info">
        <p>
          <strong>Contact Me:</strong> {/* Email link for contacting */}
          <a href="mailto:dishakolapate@gmail.com">dishakolapate@gmail.com</a>
        </p>
      </div>

      {/* Social links section */}
      <div className="social-links">
        {/* LinkedIn profile link, opens in a new tab */}
        <a
          href="https://www.linkedin.com/in/disha-kolapate"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* GitHub profile link, opens in a new tab */}
        <a href="https://github.com/DishaKolapte" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      {/* Copyright section */}
      <div className="copyright">
        {/* Dynamic year display for copyright */}
        <p>&copy; {new Date().getFullYear()} Disha Kolapate. All rights reserved.</p>
      </div>
    </footer>
  );
}
