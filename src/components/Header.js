import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid greenyellow;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Master Pizza Shop</h3>
            <h1>PIZZA MASTER</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DELIVER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
