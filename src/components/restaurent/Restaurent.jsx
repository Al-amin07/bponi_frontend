import { useEffect, useState } from "react";
import { categories } from "./shops/shop";
import Shops from "./shops/Shops";
import { IoShareSocialOutline } from "react-icons/io5";
import axios from "axios";
import Offer from "./offer/Offer";
import { useQuery } from "@tanstack/react-query";
import ReataurentCart from "./ReataurentCart";

const Restaurent = () => {
  const [category, setCategory] = useState("All");
  const { data: restaurents, isLoading } = useQuery({
    queryKey: ["restaurents", category],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}?search=${category}`
      );
      console.log({ data: data.data });
      return data.data;
    },
  });

  if (isLoading)
    return (
      <div className=" min-h-screen flex items-center justify-center">
        <p>Loading.....</p>
      </div>
    );
  return (
    <div className="bg-white">
      <div className=" container mx-auto mt-20  px-12 min-h-screen">
        <Shops />
        <div className=" my-10 py-2 px-4 rounded-2xl flex justify-between items-center bg-[#F5F4F2]">
          {categories.map((el) => (
            <button
              onClick={() => setCategory(el)}
              className={`font-semibold py-3 rounded-2xl px-4 hover:bg-white ${
                category === el && "bg-white"
              }  `}
              key={el}
            >
              {el}
            </button>
          ))}
          <button className="font-semibold py-3 rounded-2xl px-4 hover:bg-white">
            <IoShareSocialOutline size={24} className="inline-block" /> Sorting
          </button>
        </div>
        <Offer restaurents={restaurents?.slice(0, 10)} />

        <div className=" mt-12">
          <h2 className=" text-[42px] font-bold mb-2">Restaurent</h2>
          {restaurents?.length !== 0 ? (
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {restaurents.map((el) => (
                <ReataurentCart key={el?._id} restaurent={el} />
              ))}
            </div>
          ) : (
            <div className=" my-4">
              <h2 className=" text-xl font-medium text-center">
                No restaurent available
              </h2>
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Restaurent;
