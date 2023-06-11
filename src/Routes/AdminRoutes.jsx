import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Loading from "../Pages/Sharied/Loading/Loading";

const AdminRoutes = ({ children }) => {
  const loaction = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: loaction }} replace></Navigate>;
};

export default AdminRoutes;
