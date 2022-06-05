import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import ListCompanyItems from "../components/ListCompanyItems";

export default function CompanyView(props) {
  const params = useParams();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

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
