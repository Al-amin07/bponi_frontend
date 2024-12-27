/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [cart, setCart] = useState([]);
  const authInfo = {
    restaurant,
    setRestaurant,
    restaurants,
    setRestaurants,
    cart,
    setCart,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
