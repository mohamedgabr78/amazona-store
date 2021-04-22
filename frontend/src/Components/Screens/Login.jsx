import { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login d-flex justify-content-center">
      <form
        onSubmit={submitLogin}
        className="login-form row d-flex flex-column justify-content-center"
      >
        <h1 className="col-12 mb-5 d-flex justify-content-center">Login</h1>
        <div className="login-input col-12 mb-3 d-flex flex-column justify-content-center">
          <label htmlFor="email"></label>
          <input
            id="email"
            placeholder="enter your email"
            type="text"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="login-input col-12 mb-3 d-flex flex-column justify-content-center">
          <label htmlFor="password"></label>
          <input
            id="password"
            placeholder="enter your password"
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="login-btn col-12 mb-3 d-flex flex-column justify-content-center">
          <button type="submit">LogIn</button>
        </div>
        <div className="col-12">
          Do not have an account?
          <Link to="/register">Create One</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
