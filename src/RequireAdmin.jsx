import { Navigate, Outlet } from "react-router";
import { jwtDecode } from "jwt-decode";

const RequireAdmin = () => {
  const token = localStorage.getItem("jwtToken");

  if (!token) {
    return <Navigate to="/register" replace />;
  }

    const decoded = jwtDecode(token);

    if (!decoded.roles.includes("admin")) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
    
    };

export default RequireAdmin;
