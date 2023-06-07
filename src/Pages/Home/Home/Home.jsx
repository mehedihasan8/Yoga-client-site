import { Helmet } from "react-helmet";
import HomeSwiper from "../Swiper/HomeSwiper";

const Home = () => {
  return (
    <div className="mt-2">
      <Helmet>
        <title>Sumer | Home</title>
      </Helmet>
      <HomeSwiper />
    </div>
  );
};

export default Home;
