import React from "react";

function Login() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Login Page</h2>
      <p>Multi-Tenant SaaS Authentication</p>

      <input
        type="email"
        placeholder="Email"
        style={{ padding: "10px", margin: "10px", width: "250px" }}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        style={{ padding: "10px", margin: "10px", width: "250px" }}
      />
      <br />

      <button style={{ padding: "10px 20px", marginTop: "10px" }}>
        Login
      </button>
    </div>
  );
}

export default Login;
