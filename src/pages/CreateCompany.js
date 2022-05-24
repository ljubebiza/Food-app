import { useRef } from "react";
import React from "react";

import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";

import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export default function CreateCompany() {
  const companyNameRef = useRef();

  const createCompany = (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, "companies"), {
        name: companyNameRef.current.value,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <CheckAuthentication>
      <Layout title="Admin Panel - company create">
        <Sidebar />
        <div className="create-company">
          <form onSubmit={createCompany}>
            <input
              ref={companyNameRef}
              type="text"
              placeholder="Enter company name"
            />
            <button className="button">Create</button>
          </form>
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
