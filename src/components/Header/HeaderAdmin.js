import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const HeaderAdmin = () => {
  const { user, logOut, dark, setDark } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Sign Out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const darkHandler = () => {
    localStorage.setItem("dark", dark);
    setDark(!dark);
  };

  const menu = (
    <>
      {!user?.uid ? (
        <li className="">
          <NavLink to="/" className="rounded-lg">
            <ImHome /> Home
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/admin/dashboard" className="rounded-lg">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about" className="rounded-lg">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/appointment" className="rounded-lg">
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews" className="rounded-lg">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className="rounded-lg">
          Contact Us
        </NavLink>
      </li>

      {user?.uid ? (
        <>
          <li>
            <button
              onClick={logOutHandler}
              className="rounded-lg flex items-center justify-center"
            >
              Sign Out <FaSignOutAlt className="text-lg" />
            </button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/login" className="rounded-lg">
            Login <FaSignInAlt className="text-lg" />
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 md:px-10 lg:px-20">
      <div className="navbar">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="normal-case text-lg">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-2">{menu}</ul>
      </div>
      <label
        htmlFor="menu-toggle-btn"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <label className="swap swap-rotate">
        <input type="checkbox" onClick={darkHandler} />
        <svg
          className="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        <svg
          className="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
};

export default HeaderAdmin;
