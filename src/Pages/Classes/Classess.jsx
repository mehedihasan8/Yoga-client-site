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
    <div className="mb-20 mt-10">
      <div>
        <h2 className="text-4xl font-bold text-center">Populer Classes</h2>
      </div>
      <div className="w-[95%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {approvedYoug.map((yoga, index) => (
          <ClassessCard key={index} yoga={yoga}></ClassessCard>
        ))}
      </div>
    </div>
  );
};

export default Classess;
