import { Timestamp } from "firebase/firestore";
import { Alert } from "../../services/Alert";
import { useContext } from "react";
import ShoppingChartContext from "../../store/shoppingChart-context";

export default function BuyButtons(props) {
  const ordersCtx = useContext(ShoppingChartContext);

  const handleChart = (e) => {
    if (props.quantity > 0) {
      const orderedItem = {
        name: props.name,
        price: parseFloat(props.price),
        delevered: false,
        time: Timestamp.now(),
        quantity: parseFloat(props.quantity),
        id: props.id,
      };
      console.log(ordersCtx.orders);
      console.log(orderedItem.quantity);
      if (ordersCtx.isItemOrdered(orderedItem.id)) {
        ordersCtx.setItemQuantity(props.id, orderedItem.quantity);
      } else {
        ordersCtx.addOrder(orderedItem);
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
        <button className="action-button" onClick={handleChart}>
          Add to chart +
        </button>
      </div>
    </>
  );
}
