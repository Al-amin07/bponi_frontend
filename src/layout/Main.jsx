import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";

const Main = () => {
  return (
    <div className="bg-[#F5F4F2]">
      <Navbar />
      <div className=" ">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
