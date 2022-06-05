import { useContext, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";

import { Alert } from "../../services/Alert";
import ShoppingChartContext from "../../store/shoppingChart-context";
import Layout from "../../components/Layout";
import CheckAuthentication from "../../components/CheckAuthentication";

import "./styles.css";

export default function BuyChart() {
  const ordersCtx = useContext(ShoppingChartContext);

  const handleBuy = (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, "purchases"), { order: ordersCtx.orders });
      Alert("top-end", "success", "Thank you for your purchase", 2000);
      ordersCtx.deleteAll();
    } catch (err) {
      alert(err);
    }
  };
  return (
    <CheckAuthentication>
      <Layout>
        <div className="buy-chart">
          <h4>Your chart</h4>
          <div className="buy-chart-heading">
            <span>Name</span>
            <span></span>
            <span>Quantity</span>
            <span>Price</span>
          </div>

          <hr></hr>
          {ordersCtx.orders.map((item, index) => (
            <div key={index}>
              <div className="buy-chart-content">
                <span>{item.name}</span>
                <span>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      ordersCtx.removeItem(item.id);
                    }}
                  >
                    remove
                  </button>
                </span>
                <span>{item.quantity}X</span>
                <span>{item.price}$</span>
              </div>
              <hr></hr>
            </div>
          ))}
          <h5>Total: {ordersCtx.totalSum()}$</h5>
          {ordersCtx.itemsTotal > 0 && (
            <>
              <button className="button buy-btn" onClick={handleBuy}>
                Buy
              </button>
              <button
                className=" cancel-btn"
                onClick={() => {
                  ordersCtx.deleteAll();
                }}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
