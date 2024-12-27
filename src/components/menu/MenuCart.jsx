/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import img from "../../assets/res/2.jpeg";
import { FaPlus } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import img1 from "../../assets/offer/b.webp";
import img2 from "../../assets/offer/b2.jpeg";
import img3 from "../../assets/offer/b3.jpg";
import img4 from "../../assets/offer/d1.jpeg";
import img5 from "../../assets/offer/d2.jpg";
import img6 from "../../assets/offer/d3.jpeg";
import img7 from "../../assets/offer/dr1.jpg";
import img8 from "../../assets/offer/dr2.webp";
import img9 from "../../assets/offer/dr3.jpg";
import img10 from "../../assets/offer/p1.jpeg";
// import img1 from '../../assets/offer/b.webp'
const MenuCart = ({ item, index }) => {
  const { cart, setCart } = useAuth();

  const addItemToCart = (item) => {
    let updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex >= 0) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  let img;
  if (index === 0) {
    img = img1;
  } else if (index === 1) {
    img = img8;
  } else if (index === 2) {
    img = img9;
  } else if (index === 3) {
    img = img5;
  } else if (index % 4 === 0) {
    img = img6;
  } else if (index % 5 === 0) {
    img = img5;
  } else if (index % 6 === 0) {
    img = img6;
  } else if (index % 7 === 0) {
    img = img7;
  } else if (index % 8 === 0) {
    img = img8;
  } else if (index % 9 === 0) {
    img = img9;
  } else {
    img = img10;
  }
  return (
    <div className="bg-white p-3 rounded-2xl">
      <figure>
        <img
          className=" mix-blend-multiply bg-transparent h-[130px] w-full rounded-2xl"
          src={img}
          alt=""
        />
      </figure>
      <div className="">
        <h2 className=" text-xl font-semibold my-2">{item?.name}</h2>
        <p className=" line-clamp-1">{item?.description}</p>
        <p className=" text-xl mt-4 font-semibold text-stone-400">
          {item?.weight}
        </p>
        <button
          onClick={() => addItemToCart(item)}
          className=" btn w-full rounded-2xl bg-[#F5F4F2] mt-3"
        >
          <FaPlus size={18} className="inline-block text-lg" /> Add
        </button>
      </div>
    </div>
  );
};

export default MenuCart;
