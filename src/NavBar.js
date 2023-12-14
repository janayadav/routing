import { Link, NavLink } from "react-router-dom";
import "./index.css";
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/Course">Course</Link>
      <Link to="/Contact">Contact</Link>
      <NavLink to="/AboutUs" activeClassName="active">
        AboutUs
      </NavLink>
    </nav>
  );
}
export default NavBar;
