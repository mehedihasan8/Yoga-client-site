import InstractorCard from "./InstractorCard";
import { useState } from "react";
import { useEffect } from "react";

const Instractor = () => {
  const [instractors, setInstractors] = useState([]);
  // const [loading , setLoading] = useState(false)
  useEffect(() => {
    fetch(`https://summer-camping-server.vercel.app/instractorall`)
      .then((res) => res.json())
      .then((data) => {
        setInstractors(data);
      });
  }, []);

  return (
    <div className="mb-20 ">
      <h1 className="text-4xl font-bold text-center my-16 text-[#6144FF] ">
        Our Professional Trainer
      </h1>
      <div className="w-[95%] mx-auto  grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {instractors.map((instructor) => (
          <InstractorCard
            key={instructor._id}
            instructor={instructor}
          ></InstractorCard>
        ))}
      </div>
    </div>
  );
};

export default Instractor;
