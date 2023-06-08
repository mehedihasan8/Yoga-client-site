import { Helmet } from "react-helmet";
import HomeSwiper from "../Swiper/HomeSwiper";
import PopularSection from "../PopularSection/PopularSection";
import Experience from "../Experience/Experience";
import PopularInstractor from "../PopularInstractor/PopularInstractor";

const Home = () => {
  return (
    <div className="mt-2">
      <Helmet>
        <title>Sumer | Home</title>
      </Helmet>
      <HomeSwiper />
      <PopularSection />
      <Experience />
      <PopularInstractor />
    </div>
  );
};

export default Home;
