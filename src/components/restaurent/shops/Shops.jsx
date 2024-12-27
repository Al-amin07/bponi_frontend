import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { shops } from "./shop";

const Shops = () => {
  return (
    <div className=" ">
      <h2 className=" text-[42px] font-bold mb-2">Shops</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        hashNavigation={{
          watchState: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.25": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper  h-[130px]"
      >
        {shops.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`cursor-pointer rounded-2xl bg-base-200  h-[300px] select-none `}
          >
            <img
              src={item?.img}
              className="h-full w-full mix-blend-multiply"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Shops;
