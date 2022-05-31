import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  uploadBytesResumable,
  getDownloadURL,
  ref,
  getStorage,
} from "firebase/storage";

import UploadFile from "./UploadFile";
import { Alert } from "../services/Alert";
import { update } from "../services/update";

export default function EditItemForm(props) {
  const params = useParams();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [name, setName] = useState(props.item.name);
  const [price, setPrice] = useState(props.item.price);
  const [description, setDescription] = useState(props.item.description);
  const image = props.item.image;
  const storage = getStorage();

  function editFormHnadler(e) {
    e.preventDefault();
    if (uploadedFile !== null) {
      const imagePath = `${params.companyName}/${uploadedFile.name}`;
      const storageRef = ref(storage, imagePath);
      uploadBytesResumable(storageRef, uploadedFile).then((res) => {
        getDownloadURL(res.ref).then((url) => {
          update(props.item.id, name, price, description, url);
          props.setStartEditing(false);
        });
      });
      Alert("top-end", "success", "Item edited successfully", 2000);
    } else {
      update(props.item.id, name, price, description, image);
      Alert("top-end", "success", "Item edited successfully", 2000);
      props.setStartEditing(false);
    }
  }

  return (
    <div className="overlay">
      <form onSubmit={editFormHnadler} className="create-company">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Item name"
          required
        />
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
          placeholder="Item price"
          required
        />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Item description"
          required
        />
        <img width={60} src={image}></img>
        <UploadFile
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
        />
        <button className="button">Edit</button>
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            props.setStartEditing(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
