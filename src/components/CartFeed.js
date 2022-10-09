import React from "react";
import data from "../Data.json";
import arrow from "../Design/arrow.png";

const CartFeed = () => {
  return (
    <div className="CartFeed">
      {data.map((data) => {
        return (
          <>
            <div className="cart-feed-header">
              <h3> {data.header}</h3> <p>删除收藏夹</p>
            </div>
            <div className="cart-feed-items-container">
              <div className="cart-feed-items">
                {data.items.map((item, idx) => {
                  const link = "/images/" + item + ".png";

                  if (idx < 3) {
                    return (
                      <>
                        <div>
                          <img src={link} alt="logo" />
                        </div>
                      </>
                    );
                  }
                })}

                {data.items.length - 3 > 0 ? (
                  <div style={{ color: "gray" }}>
                    + {data.items.length - 3} more{" "}
                  </div>
                ) : null}
              </div>
              <div>
                <img src={arrow} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CartFeed;
