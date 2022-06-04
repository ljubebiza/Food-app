import ItemView from "./ItemView";

import { useParams } from "react-router-dom";
import { useState, useEffect, React } from "react";

import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../services/firebase";

export default function ListCompanyItems(props) {
  const params = useParams();
  const getItems = async () => {
    try {
      const itemsRef = collection(db, "items");
      const q = query(itemsRef, where("id", "==", params.id));

      onSnapshot(q, (querySnapshot) => {
        props.setItems(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            description: doc.data().description,
            image: doc.data().image,
          }))
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {props.items.map((item, index) => (
        <ItemView
          key={index}
          index={index}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
          setItemIndex={props.setItemIndex}
          setStartEditing={props.setStartEditing}
        />
      ))}
    </>
  );
}
