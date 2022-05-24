import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

import { useParams } from "react-router-dom";
import { useRef, React } from "react";

import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";

export default function CompanyView() {
  const params = useParams();
  const nameRef = useRef();
  const priceRef = useRef();

  const createItem = (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, "items"), {
        name: nameRef.current.value,
        price: priceRef.current.value,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <CheckAuthentication>
      <Layout title={`Admin panel - ${params.companyName}`}>
        <Sidebar />
        <div className="create-company">
          <form onSubmit={createItem}>
            <input ref={nameRef} type="text" placeholder="Item name" />
            <input ref={priceRef} type="text" placeholder="Item price" />
            <button className="button">Create</button>
          </form>
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
