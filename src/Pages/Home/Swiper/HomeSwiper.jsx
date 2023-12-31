// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeSwiper.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeSwiper = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: -25 },
      }}
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <div className="h-[460px] lg:h-[650px] ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-1 h-[600px] flex items-center justify-center text-center text-white">
              <div>
                <h4 className=" text-3xl lg:text-5xl px-4 font-extrabold ">
                  Lighting <span className="text-[#6144FF]">Your Heart</span> &
                  Mind
                </h4>
                <h3 className="text-2xl lg:text-4xl font-bold px-10  my-5">
                  Your Health is Our Top Priority with Comprehensive, Affordable
                  medical.
                </h3>
                <Link to="/classes">
                  {" "}
                  <button className="btn btn-accent border-0 text-white bg-[#6144FF]">
                    view our Class
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-2 h-[600px] flex items-center justify-center text-center text-white border border-red-400">
              <div>
                <h4 className=" text-3xl lg:text-5xl px-4 font-extrabold ">
                  Lighting <span className="text-[#6144FF]">Your Heart</span> &
                  Mind
                </h4>
                <h3 className="text-2xl lg:text-4xl font-bold px-10  my-5">
                  Your Health is Our Top Priority with Comprehensive, Affordable
                  medical.
                </h3>
                <Link to="/classes">
                  {" "}
                  <button className="btn btn-accent border-0 text-white bg-[#6144FF]">
                    view our Class
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-1 h-[600px] flex items-center justify-center text-center text-white border border-red-400">
              <div>
                <h4 className=" text-3xl lg:text-5xl px-4 font-extrabold ">
                  Lighting <span className="text-[#6144FF]">Your Heart</span>t &
                  Mind
                </h4>
                <h3 className="text-2xl lg:text-4xl font-bold px-10  my-5">
                  Your Health is Our Top Priority with Comprehensive, Affordable
                  medical.
                </h3>
                <Link to="/classes">
                  {" "}
                  <button className="btn btn-accent border-0 text-white bg-[#6144FF]">
                    view our Class
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default HomeSwiper;
