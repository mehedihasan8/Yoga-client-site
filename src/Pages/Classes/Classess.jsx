import { Helmet } from "react-helmet";
import useClesses from "../../Hooks/useClesses";
import Loading from "../Sharied/Loading/Loading";
import ClassessCard from "./ClassessCard";
const Classess = () => {
  const [clesses, loading] = useClesses();
  const approvedYoug = clesses.filter((cles) => cles.status === "approved");
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mb-20 ">
      <Helmet>
        <title>YOGA | Classes</title>
      </Helmet>
      <div>
        <h2 className="text-4xl font-bold  my-16 text-[#6144FF] text-center">
          {" "}
          Classes
        </h2>
      </div>
      <div className="w-[95%] mx-auto grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {approvedYoug.map((yoga, index) => (
          <ClassessCard key={index} yoga={yoga}></ClassessCard>
        ))}
      </div>
    </div>
  );
};

export default Classess;
