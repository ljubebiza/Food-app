import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteItemFunction } from "../../services/deleteItemFunction";
export default function DeleteButton(props) {
  return (
    <div
      onClick={() => {
        deleteItemFunction(props.id, "items");
        props.setStartEditing(false);
      }}
    >
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
}
