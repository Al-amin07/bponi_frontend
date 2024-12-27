/* eslint-disable react/prop-types */

import { FaPersonBreastfeeding } from "react-icons/fa6";
import { GiInfo } from "react-icons/gi";

import { IoIosStar } from "react-icons/io";
import MenuCategory from "./MenuCategory";

const MenuItems = ({ restaurant }) => {
  console.log({ restaurant });

  return (
    <div className=" px-6 md:px-2 lg:px-0">
      <div
        style={{
          backgroundImage: `url(${restaurant?.image})`,
        }}
        className="bg-no-repeat relative object-fill mb-16 bg-gradient-to-r opacity-100 from-[#000000cc] to-[#4a4a4a99]  bg-center  bg-cover h-[300px] rounded-2xl w-full"
      >
        <div className="absolute w-full bg-black opacity-20 h-[300px] rounded-2xl "></div>
        <div className="absolute bottom-8 left-6">
          <h2 className="text-4xl font-medium text-white mb-6 ">
            {restaurant?.name}
          </h2>
          <div className=" flex items-center gap-2">
            <div className="py-1 px-5 flex items-center gap-3 rounded-xl w-auto bg-slate-50  bg-opacity-85 ">
              <FaPersonBreastfeeding size={28} />
              <div>
                <h2 className=" text-black font-semibold">
                  {restaurant?.deliveryTime}
                </h2>
                <p className=" text-sm mt-0">min</p>
              </div>
            </div>

            <div className="py-1 px-5 flex items-center gap-2 rounded-xl w-auto bg-slate-50  bg-opacity-85 ">
              <IoIosStar size={28} />
              <div className=" flex flex-col gap-0">
                <h2 className="  font-semibold text-black ">
                  {restaurant?.reviews?.rating}
                </h2>
                <p className=" text-sm">{restaurant?.reviews?.count}+</p>
              </div>
            </div>
            <div className="py-[10px] px-5 flex items-center gap-2 rounded-xl w-auto bg-slate-50  bg-opacity-85 ">
              <GiInfo size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className=" space-y-16  ">
        {restaurant?.menu?.map((cat) => (
          <MenuCategory key={cat?.category} menu={cat} />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
