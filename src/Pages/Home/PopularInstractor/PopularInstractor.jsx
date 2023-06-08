import React from "react";
import instructors from "../../../../public/instactor.json";
import PopularInistractorCard from "./PopularInistractorCard";

const PopularInstractor = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center lg:mb-20">
        Our Professional Trainer
      </h1>
      <div className="w-[95%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor) => (
          <PopularInistractorCard
            instructor={instructor}
          ></PopularInistractorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstractor;
