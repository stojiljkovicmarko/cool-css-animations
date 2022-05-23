import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="social-media-buttons">Social</Link>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
