import React from "react";

const Products = ({ cards }) => {
  return <div>{cards.map((card) => console.log(card.image))}</div>;
};

export default Products;
