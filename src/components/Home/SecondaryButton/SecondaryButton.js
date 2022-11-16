import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <button type="submit" className="btn btn-primary">
      {children}
    </button>
  );
};

export default SecondaryButton;
