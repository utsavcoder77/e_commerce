import { createBrowserRouter } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import ChangePassword from "./Pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-center text-8xl m-10">E-commerce</div>,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/reset-password",
    element: <ResetPassword />,
  },

  {
    path: "/change-password",
    element: <ChangePassword />,
  },
]);

export default router;
