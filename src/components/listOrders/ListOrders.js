import { useEffect, useState } from "react";
import { formatDate } from "../../services/formatDate";

import { db } from "../../services/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

import "./styles.css";
export default function ListOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    const ordersRef = collection(db, "purchases");
    const q = query(ordersRef);
    onSnapshot(q, (querySnapShot) => {
      setOrders(
        querySnapShot.docs.map((doc) => ({
          orderId: doc.id,
          items: doc.data().order,
        }))
      );
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="orders-container">
      <h1>Orders</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order code</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Price sum</th>
              <th>Status</th>
              <th>Time of order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) =>
              order.items.map((item, index) => (
                <tr key={index}>
                  <td>{order.orderId}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity} x</td>
                  <td>{item.price}$</td>
                  <td>{item.price * item.quantity} $</td>
                  <td>
                    {item.delevered === false ? "Panding..." : "Delivered"}
                  </td>
                  <td>{formatDate(item.time.seconds)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
