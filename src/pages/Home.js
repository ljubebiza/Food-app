import { useNavigate } from "react-router-dom";
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
import Company from "../components/Company";

export default function Home() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

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
      <Layout>
        <div className="container">
          {companies.map((company, index) => {
            return <Company id={company.id} key={index} name={company.name} />;
          })}
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
