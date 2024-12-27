import axios from "axios";
import Menu from "./components/menu/Menu";
import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { resId } = useParams();
  const { setCart, setRestaurant } = useAuth();
  const { data: restaurant, isLoading } = useQuery({
    queryKey: ["restaurent"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/${resId}`
      );
      setRestaurant(data?.data);
      return data.data;
    },
  });
  // console.log({ data });
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // console.log({ cart });
    if (cart?.length) {
      setCart(cart);
    }
  }, []);

  if (isLoading)
    return (
      <div className=" h-[400px] flex items-center justify-center">
        <p>Loading.....</p>
      </div>
    );

  return (
    <div className="container mx-auto  pt-5    ">
      <Menu restaurant={restaurant} />
    </div>
  );
};

export default App;
