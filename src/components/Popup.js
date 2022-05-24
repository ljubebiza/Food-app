import React from "react";
import { useNavigate } from "react-router-dom";

export default function Popup() {
  const navigate = useNavigate();

  const redirectUser = (path) => {
    if (path === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h5>You are super admin</h5>
        <button
          onClick={() => {
            redirectUser("admin");
          }}
        >
          Go to admin panel
        </button>
        <button
          onClick={() => {
            redirectUser("app");
          }}
        >
          Go to Application
        </button>
      </div>
    </div>
  );
}
