import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menu = (
    <>
      <li className="">
        <NavLink to="/" className="rounded-lg">
          Home
        </NavLink>
      </li>
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
      <li>
        <NavLink to="/login" className="rounded-lg">
          Login
        </NavLink>
      </li>
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
