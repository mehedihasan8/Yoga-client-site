import useClesses from "../../Hooks/useClesses";
import ClassessCard from "./ClassessCard";
const Classess = () => {
  const isLoggedIn = () => {};
  const isAdmin = () => {};
  const [clesses] = useClesses();
  return (
    <div className="mb-20">
      <div>
        <h2 className="text-4xl font-bold text-center">Populer Classes</h2>
      </div>
      <div className="w-[95%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {clesses.map((yoga, index) => (
          <ClassessCard
            key={index}
            yoga={yoga}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
          ></ClassessCard>
        ))}
      </div>
    </div>
  );
};

export default Classess;
