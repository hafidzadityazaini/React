import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState("");
  const handleLogin = () => {
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", { email, password })
      .then((response) => {
        const token = response.data.access_token;
        if (token) {
          const decoded = jwtDecode(token);
          setUserProfile(decoded);
          // Get profile with token
          axios
            .get("https://api.escuelajs.co/api/v1/auth/profile", {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((profileResponse) => {
              setUserProfile(profileResponse.data);
            })
            .catch(() => {
              setError("Unable to fetch profile.");
            });
        }
      })
      .catch(() => {
        setError("Login failed.");
      });
  };
  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
      {userProfile && (
        <div>
          <h3>User Profile</h3>
          <ul>
            <li>ID: {userProfile.id}</li>
            <li>Name: {userProfile.name}</li>
            <li>Email: {userProfile.email}</li>
            <li>Role: {userProfile.role}</li>
            <li>
              <img src={userProfile.avatar} alt="avatar" width="100" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Login;