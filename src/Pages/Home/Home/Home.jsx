import { Helmet } from "react-helmet";
import HomeSwiper from "../Swiper/HomeSwiper";
import Experience from "../Experience/Experience";
import PopularClesses from "../../Popular/PopularClesses";
import PopularInstractors from "../../Popular/PopularInstractors";
import { motion, useScroll } from "framer-motion";
import "./Home.css";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="max-w-6xl mx-auto">
        <Helmet>
          <title>YOGA | Home</title>
        </Helmet>
        <HomeSwiper />
        <PopularClesses />
        <Experience />
        <PopularInstractors />
      </div>
    </>
  );
};

export default Home;
