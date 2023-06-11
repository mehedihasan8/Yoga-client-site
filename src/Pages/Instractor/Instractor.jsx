import InstractorCard from "./InstractorCard";

import instractors from "../../../public/instactor.json";
const Instractor = () => {
  // const [instractors] = useInstractor();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center lg:mb-20">
        Our Professional Trainer
      </h1>
      <div className="w-[95%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
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
