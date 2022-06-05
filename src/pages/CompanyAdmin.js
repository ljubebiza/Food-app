import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import Sidebar from "../components/siderbar/Sidebar";
import ItemForm from "../components/ItemForm";
import { Alert } from "../services/Alert";

import { useParams, useNavigate } from "react-router-dom";
import { useRef, React, useState } from "react";

import { addDoc, collection, Timestamp } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../services/firebase";

export default function CompanyAdmin() {
  const params = useParams();
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const storage = getStorage();
  const [isLoading, setIsLoading] = useState(false);

  const createItem = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (uploadedFile !== null) {
      const imagePath = `${params.companyName}/${uploadedFile.name}`;
      const storageRef = ref(storage, imagePath);
      uploadBytesResumable(storageRef, uploadedFile).then((res) => {
        getDownloadURL(res.ref).then((url) => {
          try {
            addDoc(collection(db, "items"), {
              name: nameRef.current.value,
              price: priceRef.current.value,
              description: descriptionRef.current.value,
              image: url,
              created: Timestamp.now(),
              id: params.id,
            });
          } catch (err) {
            alert(err);
          }
          setIsLoading(false);
        });
      });
      Alert("top-end", "success", " created successfully", 2000);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <CheckAuthentication>
      <Layout title={`Admin panel - ${params.companyName}`}>
        <div>
          {isLoading ? (
            "Uploading..."
          ) : (
            <>
              <Sidebar />
              <a
                className="navigation-link"
                href="#"
                onClick={() =>
                  navigate(
                    `/admin/companies/companyProducts/${params.id}/${params.companyName}`
                  )
                }
              >
                See items &gt;
              </a>
            </>
          )}
        </div>
        <div className="create-company">
          <ItemForm
            submitHandler={createItem}
            nameRef={nameRef}
            priceRef={priceRef}
            descriptionRef={descriptionRef}
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
            error={error}
            setError={setError}
            btnText={"Create item"}
          />
        </div>
      </Layout>
    </CheckAuthentication>
  );
}
