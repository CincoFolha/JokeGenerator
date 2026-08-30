import React from "react";
import "./Button.css";

const Button = ({ callApi, disabled = false, children }) => {
  return (
    <button
      onClick={callApi}
      disabled={disabled}
    >
    {children || "Gerar Píada"}
    </button>
  );
};

export default Button;
