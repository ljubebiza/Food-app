import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../images/logo.png";
import "./styles.css";

import { allowedUsers } from "../../helpers/AllowedUsers";

import Footer from "../footer/Footer.js";
import Popup from "../Popup.js";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const isUserAuthenticated = allowedUsers.filter((user, index) => {
      return user.email === email && user.password === password;
    });

    if (isUserAuthenticated.length > 0) {
      localStorage.setItem("user", JSON.stringify(isUserAuthenticated[0]));
      const user = isUserAuthenticated[0];

      if (user.roles.includes("user") && user.roles.includes("admin")) {
        setIsSuperAdmin(true);
      } else {
        switch (user.roles[0]) {
          case "user":
            navigate("/home");
            break;
          case "admin":
            navigate("/admin");
            break;
          default:
            console.log("Error");
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong credentials",
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      {isSuperAdmin && <Popup />}

      <div className="login-wrapper">
        <img src={Logo} width={70} />
        <h4>Food Delivery Application</h4>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
