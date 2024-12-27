import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-20 bg-[#F5F4F2] shadow-lg py-4 px-8">
      <div className="flex-1">
        <a className=" text-xl">daisyUI</a>
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
      <div className="flex-none gap-2">
        <button className=" py-2 px-4 rounded-md bg-slate-400">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
