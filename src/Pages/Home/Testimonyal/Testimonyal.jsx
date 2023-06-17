import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Testimonyal.css";
import { useEffect, useState } from "react";

const Testimonyal = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("testo.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log("testomini ", users);

  return (
    <>
      <p className="text-center text-[#6144FF] mt-16 ">TESTIMONY</p>
      <h1 className="text-4xl font-bold text-[#6144FF] text-center">
        Successful Stories
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {users.map((user) => (
          <SwiperSlide key={user._id}>
            <div className="px-4 shadow-lg ">
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
        {/* <SwiperSlide>
          <div>
            <h1>Mehedi</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Testimonyal;
