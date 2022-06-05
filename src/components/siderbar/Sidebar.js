import React from "react";

import "./styles.css";

import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <ul>
        <li
          onClick={() => {
            navigate("/admin/company/create");
          }}
        >
          Create company
        </li>
        <li
          onClick={() => {
            navigate("/admin/companies");
          }}
        >
          Companies
        </li>
        <li
          onClick={() => {
            navigate("/admin/companies/orders");
          }}
        >
          Orders
        </li>
      </ul>
    </div>
  );
}
