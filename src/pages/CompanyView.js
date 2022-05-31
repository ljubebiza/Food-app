import { React, useState } from "react";
import { useParams } from "react-router-dom";

import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import ListCompanyItems from "../components/ListCompanyItems";

export default function CompanyView(props) {
  const params = useParams();
  const [items, setItems] = useState([]);

  return (
    <CheckAuthentication>
      <Layout title={`Food Delivery - ${params.companyName}`}>
        <div className="container">
          <h3>{params.companyName}</h3>
          <ListCompanyItems setItems={setItems} items={items} />
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
