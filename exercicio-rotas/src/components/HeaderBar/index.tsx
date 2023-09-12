import { Link } from "react-router-dom";
import "./style.css";
import { NavLink } from "react-router-dom";

const HeaderBar = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <h1 className="h1link">LOGO</h1>
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : "normalLink")}
        >
          Início
        </NavLink>
        <NavLink
          to="/promo"
          className={({ isActive }) => (isActive ? "activeLink" : "normalLink")}
        >
          {" "}
          Promoção
        </NavLink>
        <NavLink
          to="/inscricao"
          className={({ isActive }) => (isActive ? "activeLink" : "normalLink")}
        >
          {" "}
          Participar
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderBar;
