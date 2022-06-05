import Layout from "../components/Layout";
import Sidebar from "../components/siderbar/Sidebar";
import ListOrders from "../components/listOrders/ListOrders";
export default function Orders() {
  return (
    <Layout title={"Admin panel - Orders"}>
      <Sidebar />

      <ListOrders />
    </Layout>
  );
}
