import React from "react";
import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid greenyellow;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery With PIZZA OF THE DAY Only 8.99 USD</h1>
            <div className="shop__btn">
              <a href="" className="btn btn-smart">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
