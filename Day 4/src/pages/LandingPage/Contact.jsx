
import '../../assets/css/Contact.css'
import Navbar from '../../Components/NavBar';
import Footer from '../../Components/Footer';



const Contact = () => {
  return (
    <>
 
      <Navbar/>
      <div className="contact-container">
        <h1 className='ch'>Contact Us</h1>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </div>
        <br></br>
    
      <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;

