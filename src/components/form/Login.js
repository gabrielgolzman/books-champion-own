import React, { useRef, useState } from "react";

import "./Login.css";
import { useNavigate } from "react-router";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    alert(`El email ingresado es: ${email} y password ${password}`);

    onLogin();
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
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
      </div>
    </div>
  );
};

export default Login;
