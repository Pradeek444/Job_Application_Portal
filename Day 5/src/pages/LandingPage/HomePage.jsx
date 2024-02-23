
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavBar';
import '../../assets/css/HomePage.css'
import Footer from '../../Components/Footer';



const Home = () => {

    const navigate = useNavigate();

    const handleClick= () => {
     navigate('/login');
    };
  return (
    <>
      <Navbar />
      <div className="display">
        <div className="display-content">
        
          <h1 className="display-heading animate__animated animate__rotateIn">Apply Now</h1>
          <p className="display-description">
          <button onClick={handleClick} className="order-now-button">View Jobs</button>
          </p>
        </div>
      </div>
      <Footer/> 
   
    </>
  );
};

export default Home;




