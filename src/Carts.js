import React from "react";
import CartFeed from "./components/CartFeed";

const Carts = () => {
  return (
    <div className="Carts">
      <h1 style={{ "margin-righ": "auto" }}>我的收藏表</h1>
      <CartFeed />
    </div>
  );
};

export default Carts;
