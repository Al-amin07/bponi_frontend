/* eslint-disable react/prop-types */
import { Link, useNavigate, useSearchParams } from "react-router";
// import { menuLists } from "./menuLists";
import { FaArrowLeft } from "react-icons/fa6";

const MenuList = ({ restaurant }) => {
  const menuLists = restaurant?.menu?.map((el) => el.category);
  const navigate = useNavigate();
  const [searchQuery] = useSearchParams();
  const changeMenu = (el) => {
    const query = `?menuList=${el}`;
    navigate(query);
  };

  return (
    <div className="fixed w-64">
      <Link
        to={"/"}
        className=" py-3 px-4 text-lg font-medium mb-4 rounded-lg bg-white flex gap-2 items-center hover:bg-slate-200 w-full text-left"
        // className=" flex  w-full rounded-2xl items-center gap-2 py-2 px-4 bg-white mb-10 hover:bg-slate-100 font-semibold"
      >
        {" "}
        <FaArrowLeft size={20} /> All Restaurent
      </Link>
      <h2 className=" text-2xl pl-3 font-bold mb-2">Menu</h2>
      <ul className=" space-y-[2px]">
        {menuLists?.map((el, ind) => (
          <li key={ind}>
            <a
              onClick={() => changeMenu(el)}
              className={`list-none inline-block w-full font-medium   py-2 rounded-2xl px-3 hover:bg-white cursor-pointer
              ${el === searchQuery.get("menuList") && "bg-white"}
              `}
              href={`#${el}`}
            >
              {el}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
