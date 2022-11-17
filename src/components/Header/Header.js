import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Sign Out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
          <NavLink to="/dashboard" className="rounded-lg">
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
            tabIndex={0}
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
    </div>
  );
};

export default Header;
