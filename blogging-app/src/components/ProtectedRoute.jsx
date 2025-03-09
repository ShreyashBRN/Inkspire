import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token"); // checks if user loged in

    return token ? <Outlet /> : <Navigate to="/login" replace />;

};

export default ProtectedRoute;