import PopularClessesCard from "./PopularClessesCard";
import { useEffect } from "react";
import { useState } from "react";

const PopularClesses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/populerclasses`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center lg:mb-20">
        Our Professional Trainer
      </h1>
      <div className="w-[95%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((singelClass) => (
          <PopularClessesCard
            key={singelClass._id}
            singelClass={singelClass}
          ></PopularClessesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClesses;
