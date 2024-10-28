import React from "react";
import { Outlet } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <h1>Article</h1>
      <Outlet />
    </div>
  );
};

export default Article;
