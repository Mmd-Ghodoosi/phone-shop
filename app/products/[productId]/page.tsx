import React from "react";

const SingleProduct = ({ params }: { params: string }) => {
  return <div>{params.productId}</div>;
};

export default SingleProduct;
