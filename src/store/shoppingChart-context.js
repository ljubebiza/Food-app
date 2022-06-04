import { createContext, useState } from "react";

const ShoppingChartContext = createContext({
  orders: [],
  addOrder: (item) => {},
  removeItem: (itemId) => {},
  isItemOrdered: (itemId) => {},
  setItemQuantity: (itemId, itemQuantity) => {},
  itemsTotal: 0,
  totalSum: () => {},
  deleteAll: () => {},
});

export function ShoppingChartContextProvider(props) {
  const [orders, setOrders] = useState([]);

  function addOrderHandler(item) {
    setOrders((prevOrders) => {
      return prevOrders.concat(item);
    });
  }

  function removeItemHandler(itemId) {
    setOrders((prevOrders) => {
      return prevOrders.filter((item) => item.id !== itemId);
    });
  }

  function isItemOrdered(itemId) {
    return orders.some((item) => item.id === itemId);
  }

  function setItemQuantity(itemId, itemQuantity) {
    let item = orders.filter((target) => target.id === itemId);
    const index = orders.indexOf(item[0]);
    orders[index].quantity += itemQuantity;
  }
  function totalSum() {
    let totalSum = 0;
    orders.map((item) => {
      totalSum += parseFloat(item.price * item.quantity);
    });
    return totalSum;
  }

  function deleteAll() {
    setOrders((prevOrders) => {
      return (prevOrders = []);
    });
  }

  const context = {
    orders: orders,
    addOrder: addOrderHandler,
    removeItem: removeItemHandler,
    isItemOrdered: isItemOrdered,
    setItemQuantity: setItemQuantity,
    itemsTotal: orders.length,
    totalSum: totalSum,
    deleteAll: deleteAll,
  };
  return (
    <ShoppingChartContext.Provider value={context}>
      {props.children}
    </ShoppingChartContext.Provider>
  );
}
export default ShoppingChartContext;
