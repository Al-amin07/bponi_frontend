import useAuth from "../../../hooks/useAuth";
import { PiSmileySad } from "react-icons/pi";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, setCart } = useAuth();
  console.log({ cart });
  function clearCart() {
    localStorage.removeItem("cart");
    setCart([]);
  }

  const totalAmount = cart.reduce(
    (sum, item) => sum + item?.price * item?.quantity,
    0
  );

  return (
    <div className="fixed flex flex-col justify-between min-h-screen overflow-y-auto bg-white w-[300px] p-3 rounded-xl">
      <div>
        <div className=" flex items-center justify-between">
          <h2 className=" text-2xl font-medium ">Cart</h2>

          <button className=" btn" onClick={clearCart}>
            clear
          </button>
        </div>
        {cart?.length === 0 ? (
          <div className="  h-full flex flex-col items-center  mt-32">
            <PiSmileySad size={70} className=" " />
            <h2 className=" text-2xl font-medium text-center">
              Your cart is currently empty
            </h2>
          </div>
        ) : (
          <div className=" mt-6 border-b-2 pb-4 space-y-4">
            {cart?.map((item) => (
              <CartItem item={item} key={item?.id} />
            ))}
          </div>
        )}
      </div>
      {cart?.length && (
        <button className="btn bg-[#FCE000] mb-32 hover:bg-[#FCE000] flex justify-between items-center w-full border-t-2">
          <span className=" text-xl font-medium">Pay</span>
          <span className=" text-2xl font-semibold">
            ${totalAmount.toFixed(2)}
          </span>
        </button>
      )}
    </div>
  );
};

export default Cart;
