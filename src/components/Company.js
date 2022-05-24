import { useNavigate } from "react-router-dom";

export default function Company(props) {
    const navigate = useNavigate();

    return (
        <div 
            className="company" 
            onClick={() => {navigate(`/company/${props.id}/${props.name}`)}}
        >
            <h5>{props.name}</h5>
        </div>
    );
}
