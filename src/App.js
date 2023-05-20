import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Login from "./components/form/Login";
import Dashboard from "./Dashboard";
import Protected from "./components/security/Protected";
import { useState } from "react";
import PageNotFound from "./components/errors/PageNotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="login" /> },
    { path: "/login", element: <Login onLogin={loginHandler} /> },
    {
      path: "/home",
      element: (
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard onSignOut={logoutHandler} />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
