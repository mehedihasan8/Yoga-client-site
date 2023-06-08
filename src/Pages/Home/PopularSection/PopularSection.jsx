import PopularSectionCard from "./PopularSectionCard";
import yougas from "../../../../public/Class.json";
const PopularSection = () => {
  const isLoggedIn = () => {};
  const isAdmin = () => {};

  return (
    <div className="mb-20">
      <div>
        <h2 className="text-4xl font-bold text-center">Populer Classes</h2>
      </div>
      <div className="w-[95%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {yougas.map((yoga, index) => (
          <PopularSectionCard
            key={index}
            yoga={yoga}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
          ></PopularSectionCard>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
