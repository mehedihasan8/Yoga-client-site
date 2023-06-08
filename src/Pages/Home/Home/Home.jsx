import { Helmet } from "react-helmet";
import HomeSwiper from "../Swiper/HomeSwiper";
import PopularSection from "../PopularSection/PopularSection";

const Home = () => {
  return (
    <div className="mt-2">
      <Helmet>
        <title>Sumer | Home</title>
      </Helmet>
      <HomeSwiper />
      <PopularSection />
    </div>
  );
};

export default Home;
