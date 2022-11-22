import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../../admin/AddDoctor/AddDoctor";
import AllUsers from "../../admin/AllUsers/AllUsers";
import Dashboard from "../../admin/Dashboard/Dashboard";
import ManegeDoctors from "../../admin/ManegeDoctors/ManegeDoctors";
import MyAppointments from "../../admin/MyAppointments/MyAppointments";
import Payment from "../../admin/Payment/Payment";
import Admin from "../../layouts/Admin";
import Main from "../../layouts/Main";
import Appointment from "../../pages/Appointment/Appointment";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
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
    errorElement: <ErrorPage />,
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
      {
        path: "/admin/add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/manege-doctors",
        element: (
          <AdminRoute>
            <ManegeDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`https://doctors-portal-server-coral.vercel.app/bookings/${params.id}`),
      },
    ],
  },
]);

export default router;
