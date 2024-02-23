
import LoginComponent from "./Components/Login"

import Signup from "./Components/SignUp"
import { BrowserRouter, Route, Routes  } from 'react-router-dom'; 
import Home from "./pages/LandingPage/HomePage";
import About from "./pages/LandingPage/About";
import Footer from "./Components/Footer";
import Profile from "./pages/AdminDashBoard/Profile";
import AdminNav from "./Components/AdminNav";
import AdminHome from "./pages/AdminDashBoard/AdminHome";
import ViewJobs from "./pages/AdminDashBoard/Job";
import Feedback from "./pages/AdminDashBoard/Feedback";
import Contact from "./pages/LandingPage/Contact";
import CreateJob from "./pages/AdminDashBoard/CreateJob";
import ApplyJob from "./pages/UserDashBoard/Apply";
import Payment from "./pages/UserDashBoard/Payment";
import UserDetails from "./pages/AdminDashBoard/UserDetails";



function App() {
  

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin" element={<AdminNav/>}/>
        <Route path="/dash" element={<AdminHome/>}/>
        <Route path="/job" element={<ViewJobs/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/createjob" element={<CreateJob/>}/>
        <Route path="/applyjob" element={<ApplyJob/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/userdetails" element={<UserDetails/>}/>
   
        
      
        <Route path="/login" element={<LoginComponent/>}/> 
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
