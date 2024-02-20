import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Signup.css";

const Signup= () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (

        <div className="signup-container">
      <div id="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}required
          />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}required
          />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}pattern=".{8,}"   required title="8 characters minimum"
          />
        <input type="submit" value="Sign Up" />
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </div>

  );
};

export default Signup;
