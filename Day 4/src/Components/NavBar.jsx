
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navba">
      <ul className="navbar-na">
        <li className="nav-ite">
          <Link to="/" className="nav-lin">
      
            Home
          </Link>
        </li>
        <li className="nav-ite">
          <Link to="/about" className="nav-lin">
       
          About</Link>
        </li>
       

        <li className="nav-ite">
          <Link to="/contact" className="nav-lin">
   
          Contact</Link>
        </li>
        <li className="nav-ite">
          <Link to="/login" className="nav-lin">
          
       
          Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;