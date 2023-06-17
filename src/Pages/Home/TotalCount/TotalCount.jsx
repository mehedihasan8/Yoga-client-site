import bgImag from "../../../assets/image/bg_3.jpg";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const TotalCount = () => {
  const [countOn, setCountOn] = useState(false);
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
          //   className="lg:flex justify-center gap-x-16 items-center lg:h-full   text-center  font-bold px-4"
        }}
        className="h-[80vh] md:h-[60vh] flex items-center justify-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 text-center  gap-16">
          <div>
            {countOn && (
              <>
                <CountUp
                  className=" text-3xl lg:text-5xl h-full   font-bold"
                  start={0}
                  end={996}
                  delay={0}
                  duration={2}
                />
                <p>Happy Customers</p>
              </>
            )}
          </div>
          <div>
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
          <div>
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
          <div>
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
