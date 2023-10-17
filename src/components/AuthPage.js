import React from "react";
import { Link } from "react-router-dom";

export default function AuthPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#F8F8F8",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2
          style={{ color: "#007BFF", fontSize: "24px", marginBottom: "20px" }}
        >
          Login Form
        </h2>
        <form style={{ maxWidth: "400px", margin: "0 auto" }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "12px 30px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: "10px" }}>
          Don't have an account?{" "}
          <span style={style.span}>
            <Link to="Register">register here</Link>
          </span>
          {/* <a href="/registration">Sign up</a> */}
        </p>
      </div>
    </div>
  );
}

const style = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  inContainer: {
    textAlign: "center",
  },
  span: {
    color: "red",
  },
};
