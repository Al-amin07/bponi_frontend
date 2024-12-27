import MenuCart from "./MenuCart";

/* eslint-disable react/prop-types */
const MenuCategory = ({ menu }) => {
  return (
    <div id={menu?.category}>
      <h2 className="mb-3 text-3xl font-semibold ">{menu?.category}</h2>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-x-2 gap-y-12 lg:gap-y-5">
        {menu?.items?.map((item, index) => (
          <MenuCart key={item?.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
