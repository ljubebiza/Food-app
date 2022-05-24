import { React, useEffect, useState } from "react";

import {
  collection,
  addDoc,
  updateDoc,
  doc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../services/firebase";

import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import CompanyAdmin from "../components/Company";

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    try {
      const q = query(collection(db, "companies"), orderBy("id", "desc"));
      onSnapshot(q, (querySnapshot) => {
        setCompanies(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
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
        <div className="create-company">
          {companies.map((company, index) => {
            return (
              <CompanyAdmin id={company.id} key={index} name={company.name} />
            );
          })}
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
