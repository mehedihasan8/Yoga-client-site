import { Helmet } from "react-helmet";
import HomeSwiper from "../Swiper/HomeSwiper";
import Experience from "../Experience/Experience";
import Instractor from "../../Instractor/Instractor";
import PopularClesses from "../../Popular/PopularClesses";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>YOGA | Home</title>
      </Helmet>
      <HomeSwiper />
      <PopularClesses />
      <Experience />
      <Instractor />
    </div>
  );
};

export default Home;
