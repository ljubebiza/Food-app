import { useNavigate } from "react-router-dom";
import { React, useContext } from "react";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingChartContext from "../../store/shoppingChart-context";

import Logo from "../../images/logo.png";
import Logout from "../../images/logout.png";
import "./styles.css";

export default function Header(props) {
  const navigate = useNavigate();
  const OrdersCtx = useContext(ShoppingChartContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          if (user.roles[0] === "user") {
            navigate("/home");
          }
        }}
      >
        <img src={Logo} width={30} alt="logo" />
        <span>{props.title ? props.title : "Food Delivery"}</span>
      </div>

      {user.roles[0] === "user" ? (
        <div className="menu">
          <div className="chart-notification-holder">
            {OrdersCtx.itemsTotal > 0 && (
              <div className="chart-notification">{OrdersCtx.itemsTotal}</div>
            )}
          </div>

          <FontAwesomeIcon
            onClick={() => {
              navigate("/home/buyChart");
            }}
            icon={faShoppingBasket}
            className="shopping-chart-icon"
          />

          <div className=" tooltip">
            <span className=" tooltiptext"> Logout</span>
            <span className="cursor-pointer" onClick={logout}>
              <img width={30} src={Logout} alt="Logout" />
            </span>
          </div>
        </div>
      ) : (
        <div className="logout tooltip">
          <span className=" tooltiptext"> Logout</span>
          <span className="cursor-pointer" onClick={logout}>
            <img width={30} src={Logout} alt="Logout" />
          </span>
        </div>
      )}
    </div>
  );
}
