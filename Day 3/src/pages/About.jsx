
import Navbar from "../Components/NavBar";
import '../assets/css/About.css'
const About = () => {
  return (
    <>
    <Navbar />
    <div className='outer-about' style={{display:'flex',justifyContent:'start'}}>
    <div className="about-page">
      <h1><b>About Us</b></h1>
      
      <h2>Features</h2>
      <ul>
        <li>Comprehensive Job Search: Our platform offers a vast database of job listings across various industries, making it easy for you to find the right job that matches your skills and preferences.

Customizable Job Alerts: Set up personalized job alerts based on your desired job criteria, so you never miss out on new job opportunities.

User-Friendly Interface: Our intuitive and user-friendly interface ensures a seamless browsing experience, making it simple for you to navigate and explore job listings effortlessly.

Profile Creation: Create a professional profile showcasing your skills, experience, and qualifications to stand out to potential employers.

Application Tracking: Keep track of your job applications in one centralized location, making it easier to manage your job search process efficiently.

Company Reviews and Ratings: Gain insights into companies by reading reviews and ratings from current and former employees, helping you make informed decisions about potential employers.

Career Resources: Access valuable resources such as resume tips, interview preparation guides, and career advice to enhance your job search strategy and improve your chances of success</li>
      </ul>
      <h2>Benefits</h2>
      <ul>
        <li></li>
      </ul>
      
    </div>
    </div>
    

    </>
  );
};


export default About;