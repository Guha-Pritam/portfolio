import "./Navbar.css";
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    
      <nav className="main-nav">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/service">services</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        </nav>
    
  );
};

export default Navbar;