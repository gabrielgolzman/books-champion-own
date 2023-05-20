import React, { useContext, useRef, useState } from "react";

import "./Login.css";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../context/AuthenticationContext/authentication.context";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../context/AuthenticationContext/theme.context";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthenticationContext);
  const { toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const emailChangeHandler = (e) => {
    emailRef.current.style.borderColor = "";
    emailRef.current.style.outline = "";
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    passwordRef.current.style.borderColor = "";
    passwordRef.current.style.outline = "";
    setPassword(e.target.value);
  };

  const signInClicked = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      return;
    }
    handleLogin(email);
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box login-box-dark">
        <h4>¡Bienvenidos a Book Champions!</h4>
        <div className="input-container">
          <input
            className="input-control"
            onChange={emailChangeHandler}
            placeholder="Email"
            type="email"
            ref={emailRef}
          />
        </div>
        <div className="input-container">
          <input
            className="input-control"
            onChange={passwordChangeHandler}
            placeholder="Password"
            type="password"
            ref={passwordRef}
          />
        </div>
        <button onClick={signInClicked} className="signin-button" type="button">
          Iniciar sesión
        </button>
        <Button onClick={toggleTheme}>Change theme</Button>
      </div>
    </div>
  );
};

export default Login;
