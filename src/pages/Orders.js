import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import ListOrders from "../components/ListOrders";
export default function () {
  return (
    <Layout title={"Admin panel - Orders"}>
      <Sidebar />
      <div className="orders-container">
        <h1>Orders</h1>
        <ListOrders />
      </div>
    </Layout>
  );
}
