/* eslint-disable react/prop-types */
import img from "../../../assets/res/2.jpeg";
import useAuth from "../../../hooks/useAuth";

const CartItem = ({ item }) => {
  const { cart, setCart } = useAuth();
  const cartAddOrDelete = (isAdd) => {
    let updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (isAdd) {
      updatedCart[existingItemIndex].quantity += 1;
    } else if (updatedCart[existingItemIndex].quantity !== 1) {
      updatedCart[existingItemIndex].quantity -= 1;
    } else {
      updatedCart = updatedCart.filter((el) => el.id !== item?.id);
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className=" flex items-center justify-between gap-2">
      <div className=" flex gap-2 items-center">
        <img className="h-10 w-10 rounded-md" src={img} alt="" />
        <div>
          <h2 className=" text-sm font-medium leading-tight">{item?.name}</h2>
          <p className=" text-base text-slate-500">${item?.price}</p>
        </div>
      </div>
      <div className="flex items-center bg-base-200 justify-center gap-2    py-0 px-5 rounded-2xl ">
        <button
          onClick={() => cartAddOrDelete(false)}
          className=" text-lg font-medium"
        >
          -
        </button>
        <span className="text-lg font-semibold">{item?.quantity || 1}</span>
        <button
          onClick={() => cartAddOrDelete(true)}
          className="text-lg font-medium"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
