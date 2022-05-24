import {useEffect, useState} from "react";

export default function CheckAuthentication(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false)
        }
    }, []);

    return isAuthenticated ? props.children : <h1>User is not logged</h1>
}