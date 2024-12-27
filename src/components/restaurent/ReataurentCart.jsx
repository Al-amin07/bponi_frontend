/* eslint-disable react/prop-types */
// import img1 from "../../assets/offer/b.webp";
import { IoStar } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router";

const ReataurentCart = ({ restaurent }) => {
  return (
    <Link to={`/restaurent/${restaurent?._id}`} className=" text-black">
      <img
        src={restaurent?.image}
        alt="Salam Bro"
        referrerPolicy="no-referrer"
        className="w-full hover:opacity-90 rounded-2xl h-32 object-cover"
      />

      <div className="p-2">
        <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
          <h3 className="text-lg font-bold text-black">{restaurent?.name}</h3>
          <span className="flex items-center gap-1">
            <IoStar size={14} />
            <span className="">{restaurent?.reviews?.rating}</span>
          </span>
        </div>
        <div className=" flex gap-2 items-center">
          <FaCar className="text-slate-700" size={18} />
          <span className=" text-slate-700">
            {restaurent?.deliveryTime} min
          </span>
        </div>
        {/* Delivery Info */}
        <div className="text-sm w-[100px] rounded-2xl bg-green-50 py-1 px-2 block text-green-600 font-medium mt-2">
          Free delivery
        </div>
      </div>
    </Link>
  );
};

export default ReataurentCart;
