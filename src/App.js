import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Login from "./components/form/Login";
import Dashboard from "./Dashboard";
import Protected from "./components/security/Protected";

import "./App.css";

import { useContext, useState } from "react";
import PageNotFound from "./components/errors/PageNotFound";
import { ThemeContext } from "./components/context/AuthenticationContext/theme.context";
import { APIContext } from "./components/context/AuthenticationContext/api.context";
import Spinner from "./components/ui/Spinner";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="login" /> },
    { path: "/login", element: <Login /> },
    {
      path: "/home",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
      <div
        className={`${theme === "dark" && "dark-theme"} ${
          isLoading && "opacity-80"
        }`}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
