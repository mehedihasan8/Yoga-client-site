import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstrucor from "../Hooks/useInstrucor";
import Loading from "../Pages/Sharied/Loading/Loading";

const InstractorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInsLoading] = useInstrucor();
  const location = useLocation();

  if (loading || isInsLoading) {
    return <Loading />;
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstractorRoutes;
