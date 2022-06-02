import { useEffect, useState } from "react";
import { formatDate } from "../services/formatDate";

import { db } from "../services/firebase";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

export default function ListOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    const ordersRef = collection(db, "purchases");
    const q = query(ordersRef);
    onSnapshot(q, (querySnapShot) => {
      setOrders(
        querySnapShot.docs.map((doc) => ({
          name: doc.data().name,
          quantity: parseFloat(doc.data().quantity),
          time: formatDate(doc.data().ordered.seconds * 1000),
          delevered: doc.data().delovered,
          price: parseFloat(doc.data().price),
        }))
      );
    });
  };

  useEffect(() => {
    getOrders();
  }, []);
  console.log(orders);

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Price sum</th>
          <th>Status</th>
          <th>Time of order</th>
        </tr>

        {orders.map((order, index) => (
          <tr>
            <td>{order.name}</td>
            <td>{order.quantity} x</td>
            <td>{order.price}$</td>
            <td>{order.price * order.quantity} $</td>
            <td>{order.delevered === false ? "Panding..." : "Delivered"}</td>
            <td>{order.time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
