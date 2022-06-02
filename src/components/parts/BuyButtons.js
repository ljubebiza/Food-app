import { db } from "../../services/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

import { Alert } from "../../services/Alert";

export default function BuyButtons(props) {
  const handleBuy = (e) => {
    e.preventDefault();
    if (props.quantity > 0) {
      try {
        addDoc(collection(db, "purchases"), {
          name: props.name,
          ordered: Timestamp.now(),
          quantity: props.quantity,
          delevered: false,
          price: props.price,
          companyId: props.companyId,
        });
        Alert("top-end", "success", "Thank you for your purchase", 2000);
      } catch (err) {
        alert(err);
      }
    } else {
      Alert("top-end", "warning", "You need at least one item", 3000);
    }
  };

  return (
    <>
      <div className="quantity">
        <button
          onClick={() => {
            props.setQuantity((prev) => prev + 1);
          }}
        >
          +
        </button>
        <div>{props.quantity}</div>
        <button
          onClick={() => {
            props.setQuantity((prev) => prev - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        <button className="action-button" onClick={handleBuy}>
          Buy
        </button>
      </div>
    </>
  );
}
