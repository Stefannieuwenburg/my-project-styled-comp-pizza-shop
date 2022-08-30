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

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
