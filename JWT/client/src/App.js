import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      // Send a POST request to the login endpoint with the username and password
      const response = await axios.post("/login", { username, password });

      // Check the response status and handle accordingly
      if (response.status === 200) {
        // Login successful, redirect or perform any desired actions
        alert("Login successful!");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Login error:", error.response.data);
      setErrorMessage("Invalid username or password");
    }
  };

  const handleSignup = async () => {
    try {
      // Send a POST request to the signup endpoint with the username and password
      const response = await axios.post("/signup", { username, password });

      // Check the response status and handle accordingly
      if (response.status === 200 || response.status === 302) {
        // Signup successful, redirect or perform any desired actions
        alert("Signup successful!");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Signup error:", error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="button-container">
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
        <button className="btn" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default App;
