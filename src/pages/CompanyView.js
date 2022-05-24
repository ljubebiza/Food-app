import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

export default function CompanyView(props) {
    const params = useParams();

    console.log(params);

    return (
        <CheckAuthentication>
            <Layout title={`Food Delivery - ${props.companyName}`}>
                <div className="container">
                    <h3>{params.companyName}</h3>
                    <hr />
                </div>
            </Layout>
        </CheckAuthentication>
    );
}