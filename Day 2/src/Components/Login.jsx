import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/Login.css'


const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
  };

  return (
    
    
     <div className="login-container">
    
      <div id="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)
            }pattern=".{8,}"   required title="8 characters minimum"
          />
          <input type="submit" value="Enter" />
          <p>
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
      </div>
   
  
 
  );
};

export default LoginComponent;
