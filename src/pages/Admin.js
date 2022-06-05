import React from "react";

import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import Sidebar from "../components/siderbar/Sidebar";

export default function Admin() {
  return (
    <CheckAuthentication>
      <Layout title="Admin Panel">
        <Sidebar />
      </Layout>
    </CheckAuthentication>
  );
}
