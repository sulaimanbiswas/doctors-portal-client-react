import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat text-primary">
      <div className="footer p-10 ">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link to="" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="" className="link link-hover">
            Teeth Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link to="" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div className="footer footer-center p-4 pt-28  text-primary">
        <div>
          <p>Copyright 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
