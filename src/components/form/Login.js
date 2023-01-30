import React, { useState } from "react";
import InputControl from "../ui/controls/InputControl";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const signInClicked = () => {
    alert(`El email ingresado es: ${email} y password ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h4>¡Bienvenidos a Book Champions!</h4>
        <div className="input-container">
          <InputControl
            onChange={emailChangeHandler}
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="input-container">
          <InputControl
            onChange={passwordChangeHandler}
            placeholder="Password"
            type="password"
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
