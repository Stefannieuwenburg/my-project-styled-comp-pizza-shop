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

const Prices = () => {
  return (
      <div className="prices">
          <div className="container">
              <div className="row">
                  <div className="col-4">
                      <div className="price">
                          <div className="price__img">
                              <img src="/img/pizza1.png" alt="pizza" />
                          </div>
                          <h1 className="price__heading">Pizza Style</h1>
                          <p className="price__text">
                              Nullam nibh sem, imperdiet ultrices commodo a,
                              vulputate vel ligula. Duis venenatis at eros sed
                              egestas. Mauris rutrum quam risus, vel hendrerit
                              dui tempor in.
                          </p>
                          <p className="price_rs">$10.00</p>
                      </div>
                  </div>

                  <div className="col-4">
                      <div className="price">
                          <div className="price__img">
                              <img src="/img/pizza2.png" alt="pizza" />
                          </div>
                          <h1 className="price__heading">Pizza Style</h1>
                          <p className="price__text">
                              Nullam nibh sem, imperdiet ultrices commodo a,
                              vulputate vel ligula. Duis venenatis at eros sed
                              egestas. Mauris rutrum quam risus, vel hendrerit
                              dui tempor in.
                          </p>
                          <p className="price_rs">$12.00</p>
                      </div>
                  </div>

                  <div className="col-4">
                      <div className="price">
                          <div className="price__img">
                              <img src="/img/pizza3.png" alt="pizza" />
                          </div>
                          <h1 className="price__heading">Pizza Style</h1>
                          <p className="price__text">
                              Nullam nibh sem, imperdiet ultrices commodo a,
                              vulputate vel ligula. Duis venenatis at eros sed
                              egestas. Mauris rutrum quam risus, vel hendrerit
                              dui tempor in.
                          </p>
                          <p className="price_rs">$10.00</p>
                      </div>
                  </div>

                  <div className="col-4">
                      <div className="price">
                          <div className="price__img">
                              <img src="/img/pizza4.png" alt="pizza" />
                          </div>
                          <h1 className="price__heading">Pizza Style</h1>
                          <p className="price__text">
                              Nullam nibh sem, imperdiet ultrices commodo a,
                              vulputate vel ligula. Duis venenatis at eros sed
                              egestas. Mauris rutrum quam risus, vel hendrerit
                              dui tempor in.
                          </p>
                          <p className="price_rs">$12.00</p>
                      </div>
                  </div>

                  <div className="col-4">
                      <div className="price">
                          <div className="price__img">
                              <img src="/img/pizza5.png" alt="pizza" />
                          </div>
                          <h1 className="price__heading">Pizza Style</h1>
                          <p className="price__text">
                              Nullam nibh sem, imperdiet ultrices commodo a,
                              vulputate vel ligula. Duis venenatis at eros sed
                              egestas. Mauris rutrum quam risus, vel hendrerit
                              dui tempor in.
                          </p>
                          <p className="price_rs">$7.00</p>
                      </div>
                  </div>

                  <div className="col-4">
                      <div className="price">
                          <div className="price__img">
                              <img src="/img/pizza6.png" alt="pizza" />
                          </div>
                          <h1 className="price__heading">Pizza Style</h1>
                          <p className="price__text">
                              Nullam nibh sem, imperdiet ultrices commodo a,
                              vulputate vel ligula. Duis venenatis at eros sed
                              egestas. Mauris rutrum quam risus, vel hendrerit
                              dui tempor in.
                          </p>
                          <p className="price_rs">$8.00</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Prices;
