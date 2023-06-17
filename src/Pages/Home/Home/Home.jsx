import { Helmet } from "react-helmet";
import HomeSwiper from "../Swiper/HomeSwiper";
import Experience from "../Experience/Experience";
import PopularClesses from "../../Popular/PopularClesses";
import PopularInstractors from "../../Popular/PopularInstractors";
import { motion, useScroll, useSpring } from "framer-motion";
import "./Home.css";
import TotalCount from "../TotalCount/TotalCount";
import Testimonyal from "../Testimonyal/Testimonyal";

const Home = () => {
  // const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="max-w-6xl mx-auto">
        <Helmet>
          <title>YOGA | Home</title>
        </Helmet>
        <HomeSwiper />
        <PopularClesses />
        <Experience />
        <PopularInstractors />
        <Testimonyal />
        <TotalCount />
      </div>
    </>
  );
};

export default Home;
