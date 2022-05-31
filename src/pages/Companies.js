import { React, useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import NavigateToCompanyAdmin from "../components/NavigateToCompanyAdmin";

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    try {
      const q = query(collection(db, "companies"));
      onSnapshot(q, (querySnapshot) => {
        setCompanies(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            image: doc.data().image,
          }))
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <CheckAuthentication>
      <Layout title="Admin Panel - companies">
        <Sidebar />
        <div className="items-container">
          {companies.map((company, index) => {
            return (
              <NavigateToCompanyAdmin
                key={index}
                id={company.id}
                name={company.name}
                image={company.image}
              />
            );
          })}
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
