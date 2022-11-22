import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <HeaderAdmin />
      <div className="drawer drawer-mobile">
        <input id="menu-toggle-btn" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col bg-neutral">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="menu-toggle-btn" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <NavLink to="/admin/my-appointments">My Appointments</NavLink>
              {isAdmin && <NavLink to="/admin/users">All Users</NavLink>}
              {isAdmin && (
                <NavLink to="/admin/add-doctor">Add A Doctor</NavLink>
              )}
              {isAdmin && (
                <NavLink to="/admin/manege-doctors">Manege Doctors</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
