import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function DeleteButton(props) {
  return (
    <div
      onClick={() => {
        props.setStartEditing(true);
        props.setItemIndex((prev) => (prev = props.index));
      }}
    >
      <FontAwesomeIcon icon={faPenToSquare} />
    </div>
  );
}
