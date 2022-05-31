import { useNavigate } from "react-router-dom";

export default function NavigateToCompanyAdmin(props) {
  const navigate = useNavigate();

  return (
    <div className="company">
      <div
        onClick={() =>
          navigate(`/admin/companies/companyProducts/${props.id}/${props.name}`)
        }
      >
        <img width={60} src={props.image} alt="food"></img>
        <strong>
          <span>{props.name}</span>
        </strong>
      </div>

      <button
        className="action-button"
        onClick={() => {
          navigate(`/admin/companies/${props.id}/${props.name}`);
        }}
      >
        Add items
      </button>
    </div>
  );
}
