import "./SocialButton.css";
import React from "react";

const SocialButton = () => {
  return (
    <div className="d-flex justify-content-center gap-3 pb-3">
      <button className="btn btn-outline-dark btn-lg">
        <i className="fa-brands fa-facebook"></i>
      </button>
      <button className="btn btn-outline-dark btn-lg">
        <i className="fa-brands fa-github"></i>
      </button>
      <button className="btn btn-outline-dark btn-lg">
        <i className="fa-brands fa-linkedin-in"></i>
      </button>
    </div>
  );
};

export default SocialButton;
