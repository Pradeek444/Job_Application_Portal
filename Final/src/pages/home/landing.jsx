
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../../assets/css/landing.css";
import PricingTable from "../../components/Pricing";
import FeatureLayout from "../../components/Features";
import About from "../../components/About";


function Landing() {
  return (
    <div>
      <section id="one">
        <nav id="nav">
          <div className="nav-logo">
            <div className="nav-heading">
              <span href="#">
                <i className="fas fa-paw logo white"></i>
                JobSeek
              </span>
            </div>
            <div className="hamburger">
              <a href="#">
                <i className="far fa-moon white"></i>
              </a>
              <a href="#">
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
          <ul className="nav-links">
            <li  className="nav-list"><a>HOME</a></li>
            <li className="nav-list"><HashLink smooth to="/#about">ABOUT</HashLink></li>
            <li className="nav-list"><HashLink smooth to="/#features">SERVICES</HashLink></li>
            <li className="nav-list"><HashLink smooth to="/#pricing">PRICING</HashLink></li>
            <li className="nav-list"><HashLink smooth to="/#eight">CONTACT</HashLink></li>
            <li><Link to="/login"><button className="w-btn btn">Login</button></Link></li>
            <li><Link to="/signup"><button className="t-btn btn">Signup</button></Link></li>
          </ul>
        </nav>
        <div className="content">
          <div className="text-content">
            <h1 className="white">Find the Perfect Job of your Dreams</h1>
            <div className="two-button">
              <button className="w-btn btn">View Our Services</button>
              <button className="t-btn btn">Hire Us</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="sec">
        <About/>
      </section>
      <section id="feature" className="sec">
        <FeatureLayout/>
      </section>
      <section id="pricing" className="sec">
        <PricingTable/>
      </section>

      <footer id="eight">
        <div className="footer__container">
          <div className="Job__care">
            <span href="#"><i className="fas fa-paw"></i> JobSeek</span>
            <p>Get the perfect Job of your dreams</p>
          </div>
          <div className="Job__categories">
            <h3>CATEGORIES</h3>
            <div className="categories">
              <ul>
                <li>&gt; Job</li>
                <li>&gt; Job Seek</li>
                <li>&gt; Uncategorized</li>
              </ul>
              <ul>
                <li>&gt; Jan 2024</li>
                <li>&gt; Feb 2024</li>
              </ul>
            </div>
          </div>
          <div className="newsletter">
            <h3>NEWSLETTER</h3>
            <h3>SUBSCRIBE HERE NOW</h3>
            <span>
              <input type="text" placeholder="Email Address" />
              <button className="btn"><i className="far fa-paper-plane"></i></button>
            </span>
            <p>Subscribe to our mailing list and get updates to your email inbox.</p>
          </div>
        </div>
        <div className="copyright">
          <p>&#169; 2024 Jobs Care.</p>
          <div className="share">
            <div><i className="fab fa-facebook-f"></i></div>
            <div><i className="fab fa-linkedin-in"></i></div>
            <div><i className="fab fa-twitter"></i></div>
            <div><i className="fab fa-google-plus-g"></i></div>
            <div><i className="fab fa-github"></i></div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default Landing;
