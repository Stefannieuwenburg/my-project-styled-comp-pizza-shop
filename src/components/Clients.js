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

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>120</h1>
              <p>Awesome Employees</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>58</h1>
              <p>Pizza Types</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>14868</h1>
              <p>atisfied Clients</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>2031</h1>
              <p>Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
