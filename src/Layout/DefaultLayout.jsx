import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavbarCom/Navbar";
// import Navbar from "../Components/Navbar";

const DefaultLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* <div className="flex justify-center h-72 text-3xl font-bold items-center"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default DefaultLayout;
