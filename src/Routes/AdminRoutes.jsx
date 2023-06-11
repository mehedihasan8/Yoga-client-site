import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({ children }) => {
  const loaction = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return (
      <div>
        <p className="text-2xl font-bold text-center my-16">
          {" "}
          <span className="loading loading-dots loading-lg"></span>
        </p>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: loaction }} replace></Navigate>;
};

export default AdminRoutes;
