import { async } from "@firebase/util";
import { deleteDoc, doc } from "firebase/firestore";

import Swal from "sweetalert2";
import { db } from "./firebase";

export const deleteItemFunction = (id, table) => {
  const deleteItem = async () => {
    const taskDocRef = doc(db, table, id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this file!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteItem();
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};
