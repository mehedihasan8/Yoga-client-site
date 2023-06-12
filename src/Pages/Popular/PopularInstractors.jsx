import { useState } from "react";
import PopularInstractorsCard from "./PopularInstractorsCard";
import { useEffect } from "react";
// import instractors from "../../../public/instactor.json";
const PopularInstractors = () => {
  const [instractors, setInstractors] = useState([]);
  useEffect(() => {
    fetch(`https://summer-camping-server.vercel.app/instractor`)
      .then((res) => res.json())
      .then((data) => {
        setInstractors(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-[#6144FF] lg:mb-20">
        Our Professional Trainer
      </h1>
      <div className="w-[95%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {instractors.map((instructor) => (
          <PopularInstractorsCard
            key={instructor._id}
            instructor={instructor}
          ></PopularInstractorsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstractors;
