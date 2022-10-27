import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Hero = ({ data }) => {
  const {name} = data
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="data">
            <p className="intro-data">welcome to</p>
            <h1>{name}</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to="/product">
              <Button>know more</Button>
            </NavLink>
          </div>
          <div className="img">
            <figure>
              <img src="images/hero.jpg" alt="home img" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 10rem  0;

  img {
    min-width: 8rem;
    height: 18rem;
  }
  .data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .img{
    width:85%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 55%;
      height: 70%;
      background-color: #bb84e8;
      position: absolute;
      left: 60%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width:768px) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default Hero;
