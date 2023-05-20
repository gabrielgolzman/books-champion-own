import React, { useContext } from "react";

import "./Spinner.css";
import { ThemeContext } from "../context/AuthenticationContext/theme.context";

const Spinner = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`spinner ${theme === "dark" && "dark-theme-spinner"} `} />
  );
};

export default Spinner;
