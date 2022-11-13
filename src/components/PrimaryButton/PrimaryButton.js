import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-accent bg-gradient-to-r from-secondary to-accent text-base-100">
      {children}
    </button>
  );
};

export default PrimaryButton;
