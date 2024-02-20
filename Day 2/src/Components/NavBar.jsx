
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
      
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
       
          About</Link>
        </li>
       

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
   
          Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
          
       
          Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;