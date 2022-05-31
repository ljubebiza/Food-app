import React from "react";
import { useNavigate } from "react-router-dom";

export default function Company(props) {
  const navigate = useNavigate();
  console.log(props.image);
  return (
    <div
      className="company"
      onClick={() => {
        navigate(`/company/${props.id}/${props.name}`);
      }}
    >
      <img src={props.image} alt={props.name}></img>
      <h5>{props.name}</h5>
    </div>
  );
}
