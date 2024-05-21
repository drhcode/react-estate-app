// src/pages/login/Login.jsx
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform your authentication logic here
    // For example, call an API to authenticate the user
    const isAuthenticated = true; // Replace with real authentication check

    if (isAuthenticated) {
      login();

      navigate("/dashboard"); // Navigate to the dashboard upon successful login
    } else {
      // Handle login failure (e.g., show error message)
    }
  };
  return (
    <div className="login-container">
      <div className="logo">
        <img src="./logodark2.png" alt="" />
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
};

export default Login;
