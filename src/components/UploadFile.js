import { useRef, useState } from "react";

export default function UploadFile(props) {
  const hiddenInput = useRef(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [url, setUrl] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    hiddenInput.current.click();
  };

  const handleUpload = (event) => {
    props.setUploadedFile(event.target.files[0]);
    setUrl(URL.createObjectURL(event.target.files[0]));
    setIsFileSelected(true);
  };

  return (
    <div>
      {isFileSelected ? (
        <div>
          <img width={120} src={url} alt={props.uploadedFile.name}></img>
          <p>File name: {props.uploadedFile.name}</p>
          <p>File type: {props.uploadedFile.type}</p>
          <p>File size: {props.uploadedFile.size}</p>
          Last date modified:
          {props.uploadedFile.lastModifiedDate.toLocaleDateString()}
        </div>
      ) : (
        <p>
          <button onClick={handleClick}>+ Add a picture </button>
        </p>
      )}
      <input
        accept=".jpg"
        type="file"
        hidden={true}
        ref={hiddenInput}
        onChange={handleUpload}
      />
    </div>
  );
}
