import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  const backToHomePageHandler = () => {
    navigate("/login");
  };

  return (
    <div className="container404">
      <h2 className="my-4">¡Oops! La página solicitada no fue encontrada</h2>
      <Button onClick={backToHomePageHandler} variant="primary">
        Volver a iniciar sesión
      </Button>
    </div>
  );
};

export default PageNotFound;
