import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../admin/AllUsers/AllUsers";
import Dashboard from "../../admin/Dashboard/Dashboard";
import MyAppointments from "../../admin/MyAppointments/MyAppointments";
import Admin from "../../layouts/Admin";
import Main from "../../layouts/Main";
import Appointment from "../../pages/Appointment/Appointment";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Signup/SignUp";
import AdminRoute from "../Private/AdminRoute";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/my-appointments",
        element: <MyAppointments />,
      },
      {
        path: "/admin/users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
