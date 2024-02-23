
import Footer from "../../Components/Footer";
import Navbar from "../../Components/NavBar";
import '../../assets/css/About.css'
const About = () => {
  return (
    <>
    <Navbar />
    <div className='outer-about' style={{display:'flex',justifyContent:'start'}}>
    <div className="about-page">
      <h1 className="Ah"><b>About Us</b></h1>
      
     
      <ul className="alist">
        <li className="llist">Comprehensive Job Search: Our platform offers a vast database of job listings across various industries, making it easy for you to find the right job that matches your skills and preferences.</li>

<li className="llist">Customizable Job Alerts: Set up personalized job alerts based on your desired job criteria, so you never miss out on new job opportunities.</li>

<li className="llist">User-Friendly Interface: Our intuitive and user-friendly interface ensures a seamless browsing experience, making it simple for you to navigate and explore job listings effortlessly.</li>

<li className="llist">Profile Creation: Create a professional profile showcasing your skills, experience, and qualifications to stand out to potential employers.</li>

<li className="llist">Application Tracking: Keep track of your job applications in one centralized location, making it easier to manage your job search process efficiently.</li>

<li className="llist">Company Reviews and Ratings: Gain insights into companies by reading reviews and ratings from current and former employees, helping you make informed decisions about potential employers.</li>

<li className="llist">Career Resources: Access valuable resources such as resume tips, interview preparation guides, and career advice to enhance your job search strategy and improve your chances of success</li>
      </ul>
   
      
      
    </div>
   
    </div>
   <Footer/>
    

    </>
  );
};


export default About;