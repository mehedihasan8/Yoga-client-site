import { useState } from "react";
import PopularInstractorsCard from "./PopularInstractorsCard";
import { useEffect } from "react";

const PopularInstractors = () => {
  const [instractors, setInstractors] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/populerclasses`)
      .then((res) => res.json())
      .then((data) => {
        setInstractors(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center lg:mb-20">
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
