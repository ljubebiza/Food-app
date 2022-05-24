import { useNavigate } from "react-router-dom";
import CheckAuthentication from "../components/CheckAuthentication";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export default function Admin() {
    const navigate = useNavigate();

    return (
        <CheckAuthentication>
            <Layout title="Admin Panel">
                <Sidebar />
            </Layout>
        </CheckAuthentication>
    );
}