import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Article Detail - {id}</h1>
    </div>
  );
};

export default ArticleDetail;
