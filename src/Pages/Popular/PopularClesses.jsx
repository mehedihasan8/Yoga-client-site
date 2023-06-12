import PopularClessesCard from "./PopularClessesCard";
import { useEffect } from "react";
import { useState } from "react";

const PopularClesses = () => {
  const [classes, setClasses] = useState([]);
  const approvedYoug = classes.filter((cles) => cles.status === "approved");

  useEffect(() => {
    fetch(`https://summer-camping-server.vercel.app/populerclasses`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-[#6144FF] lg:mb-20">
        Our Classe's
      </h1>
      <div className="w-[95%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {approvedYoug.map((singelClass) => (
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
