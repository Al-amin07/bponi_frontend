import RestaurentCart from "../ReataurentCart";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  Autoplay,
  HashNavigation,
  Navigation,
  Pagination,
} from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const Offer = ({ restaurents }) => {
  return (
    <div className=" relative ">
      <h2 className=" text-4xl lg:text-[42px] font-bold mb-2">Offers</h2>
      {restaurents?.length !== 0 ? (
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            hashNavigation={{
              watchState: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
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
                spaceBetween: 30,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Pagination, HashNavigation, Autoplay]}
            className="mySwiper  "
          >
            {restaurents?.map((menu, index) => (
              <SwiperSlide key={index} className="  select-none  bg-white">
                <RestaurentCart restaurent={menu} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className=" absolute top-[115px]  z-20 flex justify-between w-full  ">
            <button className="custom-prev cursor-pointer relative -left-7  p-3 bg-white rounded-full hover:text-red-700 hover:bg-base-200 font-bold shadow-md">
              <FaArrowLeftLong size={20} />
            </button>
            <button className="custom-next relative -right-7  p-3 cursor-pointer bg-white rounded-full hover:text-red-700 hover:bg-base-200 font-bold shadow-xl">
              <FaArrowRightLong size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className=" my-4">
          <h2 className=" text-xl font-medium text-center">
            No offered Food available
          </h2>
        </div>
      )}
    </div>
  );
};

export default Offer;
