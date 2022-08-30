import React, { Fragment } from "react";
import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid greenyellow;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const About = () => {
  return (
      <Fragment>
          <div className="about">
              <div className="container">
                  <div className="row">
                      <div className="col-6 p-25">
                          <h3>About Us</h3>
                          <h1>WELCOME TO PIZZA MASTER </h1>
                          <p>
                              Investigationes demonstraverunt lectores legere me
                              lius quod ii legunt saepius. Claritas est etiam
                              processus dynaus, quise sequitur mutationem
                              consuetudium lectorum.
                          </p>
                          <div className="about__btn">
                              <a href="" className="btn btn-smart">
                                  READ MORE
                              </a>
                          </div>
                      </div>
                      <div className="col-6">
                          <div className="about__img">
                              <img src="/img/pizza.jpg" alt="Pizza" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
  );
};

export default About;
