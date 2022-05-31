import UploadFile from "./UploadFile";
export default function ItemForm(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <input ref={props.nameRef} type="text" placeholder="Item name" required />
      <input
        ref={props.priceRef}
        type="text"
        placeholder="Item price"
        required
      />
      <textarea
        ref={props.descriptionRef}
        type="text"
        placeholder="Item description"
        required
      />
      <UploadFile
        uploadedFile={props.uploadedFile}
        setUploadedFile={props.setUploadedFile}
      />
      {props.error && "Picture required"}
      <button className="button">{props.btnText}</button>
    </form>
  );
}
