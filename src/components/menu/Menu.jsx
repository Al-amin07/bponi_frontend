/* eslint-disable react/prop-types */
import Cart from "./cart/Cart";
import MenuItems from "./MenuItems";
import MenuList from "./MenuList";

const Menu = ({ restaurant }) => {
  return (
    <div id="hello" className="  h-full   flex mt-24 gap-7 ">
      <div className="w-64   relative">
        <MenuList restaurant={restaurant} />
      </div>
      <div className=" flex-1">
        <MenuItems restaurant={restaurant} />
      </div>
      <div className=" w-[300px] relative ">
        <Cart />
      </div>
    </div>
  );
};

export default Menu;
