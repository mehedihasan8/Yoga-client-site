import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstrucor from "../Hooks/useInstrucor";

const InstractorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInsLoading] = useInstrucor();
  const location = useLocation();

  if (loading || isInsLoading) {
    return (
      <div>
        <p className="text-2xl font-bold text-center my-16">
          {" "}
          <span className="loading loading-dots loading-lg"></span>
        </p>
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstractorRoutes;
