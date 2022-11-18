import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderAdmin from "../components/Header/HeaderAdmin";

const Admin = () => {
  return (
    <div>
      <HeaderAdmin />
      <div className="drawer drawer-mobile">
        <input id="menu-toggle-btn" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="menu-toggle-btn" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/admin/my-appointments">My Appointments</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
