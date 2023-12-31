import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Testimonyal.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonyal = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("testo.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <p data-aos="fade-up" className="text-center text-[#6144FF] mt-16 ">
        TESTIMONY
      </p>
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-4xl font-bold text-[#6144FF] text-center"
      >
        Successful Stories
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 4,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={3}
      >
        {users.map((user) => (
          <SwiperSlide key={user._id}>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="px-4 shadow-lg "
            >
              <p className="py-4">{user.testimonial}</p>
              <div>
                <img className="rounded-md" src={user.image} alt="" />
                <div className="mb-4">
                  <h3 className=" text-[#6144FF] my-2 text-2xl font-semibold">
                    {user.name}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonyal;
