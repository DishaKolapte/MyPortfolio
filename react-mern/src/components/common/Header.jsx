import Nav from "./Nav";

// Header component that includes the site name and navigation
export default function Header() {
  return (
    <header id="header">
      {/* Site name displayed as a heading, linking back to the home page */}
      <h2 id="site-name">
        <a href="/">disha.</a>
      </h2>

      {/* Navigation component for the main menu */}
      <Nav />
    </header>
  );
}
