import { useState } from "react";
import PopularInstractorsCard from "./PopularInstractorsCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const PopularInstractors = () => {
  const [instractors, setInstractors] = useState([]);
  useEffect(() => {
    fetch(`https://summer-camping-server.vercel.app/instractor`)
      .then((res) => res.json())
      .then((data) => {
        setInstractors(data);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-4xl font-bold text-center text-[#6144FF] lg:mb-20"
      >
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
      <div data-aos="fade-down" className="flex justify-center my-4">
        <Link to="/instractor">
          {" "}
          <button className="btn btn-accent  border-0 text-white bg-[#6144FF]">
            See instractors
          </button>
        </Link>
      </div>
    </>
  );
};

export default PopularInstractors;
