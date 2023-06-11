import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoues = ({ children }) => {
  const loaction = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <p className="text-3xl font-bold text-center my-24">
          <span className="loading loading-dots loading-lg"></span>
        </p>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: loaction }} replace></Navigate>;
};

export default PrivetRoues;
