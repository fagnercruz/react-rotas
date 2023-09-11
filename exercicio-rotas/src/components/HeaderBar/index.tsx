import { Link } from "react-router-dom";
import "./style.css";

const HeaderBar = () => {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <Link to="/">
          <h1 className="h1link">LOGO</h1>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderBar;
