import { CiSearch } from "react-icons/ci";
import { GiFlowerTwirl } from "react-icons/gi";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const { cart } = useAuth();
  console.log({ cart });
  const totalPrice = cart?.reduce(
    (sum, item) => sum + item?.price * item?.quantity,
    0
  );
  return (
    <div className="navbar fixed top-0 z-30 bg-[#F5F4F2] shadow-lg py-3 px-5 md:px-8">
      <div className="flex-1">
        <Link
          to={"/"}
          className="hover:scale-105 transition-transform duration-500"
        >
          <GiFlowerTwirl size={48} />
        </Link>
        <div className="flex ml-2 items-center bg-white border-2 rounded-2xl px-3 py-[6px] w-72">
          <CiSearch size={24} />

          <input
            type="text"
            placeholder="Search..."
            className="outline-none rounded-lg 
             bg-transparent flex-1 ml-2 text-gray-700"
          />
        </div>
      </div>
      <div className="flex-none gap-4">
        {cart.length !== 0 && (
          <button className=" btn hidden  md:flex gap-2 bg-[#FCE000] text-xl font-medium">
            <BsFillCartFill /> ${totalPrice}
          </button>
        )}
        <button className=" btn bg-orange-600 text-white text-lg font-medium">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
