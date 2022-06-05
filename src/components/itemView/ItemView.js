import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styles.css";

import BuyButtons from "../parts/BuyButtons";
import DeleteButton from "../parts/DeleteButton";
import EditButton from "../parts/EditButton";

export default function ItemView(props) {
  const [quantity, setQuantity] = useState(0);
  const params = useParams();

  useEffect(() => {
    if (quantity < 0) {
      setQuantity(0);
    }
  }, [quantity]);

  return (
    <div className="company">
      {props.setStartEditing && (
        <div className="tools-container">
          <EditButton
            index={props.index}
            setItemIndex={props.setItemIndex}
            setStartEditing={props.setStartEditing}
          />
          <DeleteButton id={props.id} setStartEditing={props.setStartEditing} />
        </div>
      )}

      <img src={props.image} alt="food"></img>
      <div className="item-title">
        <span>{props.name}</span>
      </div>
      <div className="description">
        <span>{props.description}</span>
        <span className="price">{props.price}$</span>
        {!props.setStartEditing && (
          <BuyButtons
            id={props.id}
            quantity={quantity}
            setQuantity={setQuantity}
            name={props.name}
            price={props.price}
            companyName={params.comanyName}
          />
        )}
      </div>
    </div>
  );
}
