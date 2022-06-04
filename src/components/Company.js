import React from "react";
import { useNavigate } from "react-router-dom";

export default function Company(props) {
  const navigate = useNavigate();
  return (
    <div
      className="company"
      onClick={() => {
        navigate(`/company/${props.id}/${props.name}`);
      }}
    >
      <img src={props.image} alt={props.name}></img>
      <div className="item-title">
        <span>{props.name}</span>
      </div>
    </div>
  );
}
