import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Pages/Sharied/Loading/Loading";

const PrivetRoues = ({ children }) => {
  const loaction = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: loaction }} replace></Navigate>;
};

export default PrivetRoues;
