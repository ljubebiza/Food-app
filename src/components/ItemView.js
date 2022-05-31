import BuyButtons from "./parts/BuyButtons";
import DeleteButton from "./parts/DeleteButton";
import EditButton from "./parts/EditButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="tools-container">
        {props.setStartEditing && (
          <>
            <EditButton
              index={props.index}
              setItemIndex={props.setItemIndex}
              setStartEditing={props.setStartEditing}
            />
            <DeleteButton
              id={props.id}
              setStartEditing={props.setStartEditing}
            />
          </>
        )}
      </div>
      <img src={props.image} alt="food"></img>
      <div className="item-title">
        <span>{props.name}</span>
      </div>
      <div className="description">
        <span>{props.description}</span>
        <span className="price">{props.price}$</span>
        {!props.setStartEditing && (
          <BuyButtons
            quantity={quantity}
            setQuantity={setQuantity}
            name={props.name}
            price={props.price}
            companyId={params.id}
          />
        )}
      </div>
    </div>
  );
}
