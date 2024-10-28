import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <h1>Guest</h1>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
