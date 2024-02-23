// import { Link } from 'react-router-dom'
import '../assets/css/Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          {/* <Link to="/terms" className="footer-link">Terms and Conditions</Link> */}
        </div>
      </div>
      {/* <Link to="/terms" className="footer-bottom1">Terms and Conditions</Link> */}
      <p className="footer-bottom">&copy; TalentTrac.All rights reserved.</p>
      
    </footer>
  )
}

export default Footer