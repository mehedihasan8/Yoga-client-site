import { Helmet } from "react-helmet";
import HomeSwiper from "../Swiper/HomeSwiper";
import PopularSection from "../PopularSection/PopularSection";
import Experience from "../Experience/Experience";
import Instractor from "../../Instractor/Instractor";

const Home = () => {
  return (
    <div className="mt-2">
      <Helmet>
        <title>Sumer | Home</title>
      </Helmet>
      <HomeSwiper />
      <PopularSection />
      <Experience />
      <Instractor />
    </div>
  );
};

export default Home;
