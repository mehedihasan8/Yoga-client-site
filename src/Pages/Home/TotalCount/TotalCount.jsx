import bgImag from "../../../assets/image/bg_3.jpg";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);

const TotalCount = () => {
  const [countOn, setCountOn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div
        style={{
          backgroundImage: `url(${bgImag})`,
          borderRadius: "10px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          marginTop: "70px",
          backgroundSize: "cover",
        }}
        className="h-[80vh] md:h-[60vh] flex items-center justify-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 text-center  gap-16">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {countOn && (
              <>
                <CountUp
                  className=" text-3xl lg:text-5xl h-full   font-bold"
                  start={0}
                  end={2796}
                  delay={0}
                  duration={2}
                />
                <p>Happy Customers</p>
              </>
            )}
          </div>
          <div data-aos="fade-down">
            {countOn && (
              <>
                <CountUp
                  className=" text-3xl lg:text-5xl h-full   font-bold"
                  start={0}
                  end={67}
                  delay={0}
                  duration={2}
                />
                <p>Yoga Classes</p>
              </>
            )}
          </div>
          <div data-aos="fade-up">
            {countOn && (
              <>
                <CountUp
                  className=" text-3xl lg:text-5xl h-full   font-bold"
                  start={0}
                  end={50}
                  delay={0}
                  duration={2}
                />
                <p>Years of Experience</p>
              </>
            )}
          </div>
          <div data-aos="fade-left">
            {countOn && (
              <>
                <CountUp
                  className=" text-3xl lg:text-5xl h-full   font-bold"
                  start={0}
                  end={100}
                  delay={0}
                  duration={2}
                />
                <p>Yoga Conducted</p>
              </>
            )}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default TotalCount;
