import {Navigate, Outlet } from "react-router-dom";
import {useAccessToken} from "../store/auth";
const RequireAuth = () => {
    const accessToken = useAccessToken();

    return (
         accessToken ? <Outlet /> : <Navigate to="/login"/>
     
    );
}

export default RequireAuth;