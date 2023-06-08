// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeSwiper.css";

const HomeSwiper = () => {
  return (
    <div className="h-[460px] lg:h-[650px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={
          {
            // clickable: true,
          }
        }
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-1 h-[600px] flex items-center justify-center text-center text-white border border-red-400">
            <div>
              <h4 className=" text-3xl lg:text-5xl px-4 font-extrabold ">
                Lighting Your Heart & Mind
              </h4>
              <h3 className="text-2xl lg:text-4xl font-bold px-10  my-5">
                Your Health is Our Top Priority with Comprehensive, Affordable
                medical.
              </h3>
              <button className="btn">Viewo our work</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-2 h-[600px] flex items-center justify-center text-center text-white border border-red-400">
            <div>
              <h4 className=" text-3xl lg:text-5xl px-4 font-extrabold ">
                Lighting Your Heart & Mind
              </h4>
              <h3 className="text-2xl lg:text-4xl font-bold px-10  my-5">
                Your Health is Our Top Priority with Comprehensive, Affordable
                medical.
              </h3>
              <button className="btn">Viewo our work</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-1 h-[600px] flex items-center justify-center text-center text-white border border-red-400">
            <div>
              <h4 className=" text-3xl lg:text-5xl px-4 font-extrabold ">
                Lighting Your Heart & Mind
              </h4>
              <h3 className="text-2xl lg:text-4xl font-bold px-10  my-5">
                Your Health is Our Top Priority with Comprehensive, Affordable
                medical.
              </h3>
              <button className="btn">Viewo our work</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
