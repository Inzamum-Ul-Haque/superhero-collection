import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Collection.css";

const Collection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("collection.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="container">
      <div className="collections-container">
        {cards.map((card) => (
          <Products key={card.id} card={card} />
        ))}
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
};

export default Collection;
