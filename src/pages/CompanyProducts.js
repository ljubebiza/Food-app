import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import Sidebar from "../components/siderbar/Sidebar";
import EditItemForm from "../components/EditItemForm";
import ListCompanyItems from "../components/ListCompanyItems";
import { useParams, useNavigate } from "react-router-dom";
import { React, useState } from "react";

export default function CompanyProducts() {
  const params = useParams();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [startEditing, setStartEditing] = useState(false);
  const [itemIndex, setItemIndex] = useState("");

  return (
    <CheckAuthentication>
      <Layout title={`Admin panel - ${params.companyName} items`}>
        <Sidebar />
        <a
          className="navigation-link"
          href="#"
          onClick={() => {
            navigate(`/admin/companies/${params.id}/${params.companyName}`);
          }}
        >
          &lt; Back to Add items
        </a>
        <div className="products-holder">
          <h1>Companiy products</h1>
          <div className="items-container">
            {items.length < 1 && <h2>No items to show</h2>}
            <ListCompanyItems
              setItemIndex={setItemIndex}
              setStartEditing={setStartEditing}
              setItems={setItems}
              items={items}
            />
            {startEditing && (
              <EditItemForm
                item={items[itemIndex]}
                setStartEditing={setStartEditing}
              />
            )}
          </div>
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
