import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
export const update = async (id, name, price, description, imageUrl) => {
  const taskDocRef = doc(db, "items", id);
  try {
    await updateDoc(taskDocRef, {
      name: name,
      price: price,
      description: description,
      image: imageUrl,
    });
  } catch (err) {
    alert(err);
  }
};
