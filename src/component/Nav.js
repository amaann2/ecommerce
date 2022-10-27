import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [menuicon, setmenuicon] = useState();
  const Navv = styled.nav`
    .navlist {
      display: flex;
      gap: 20px;
      align-items: center;

      .navlink {
        display: inline-block;
        text-decoration: none;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;

        &:hover,
        &:active {
          color: purple;
        }
      }
    }
    .cartlink {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 1.5rem;
      }
      .cart-item {
        position: absolute;
        font-size: 1.1rem;
        border: 1px solid white;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: grid;
        place-items: center;
        top: -63%;
        left: 75%;
        background-color: #5271ff;
        background-color:#bb84e8;
        color: white;
      }
    }

    .navbtn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .navicon {
      color: red;
    }
    .navicon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }

    @media (max-width: 768px) {
      .navbtn {
        display: inline-block;
        z-index: 9999;

        .navicon {
          color: black;
          font-size: 4rem;
        }
      }
      .active .navicon {
        display: none;
        position: absolute;
        right: 10%;
        font-size: 4rem;
        z-index: 9999;
        top: 30%;
      }
      .active .close-outline {
        display: inline-block;
      }

      .navlist {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 3s linear;
      }
      .active .navlist {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navlink {
          font-size: 3rem;
        }
      }

      .cartlink {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-item {
          width: 3.5rem;
          height: 3.5rem;
          font-size:1.7rem;
          top:-20%
        }
      }
    }
  `;

  return (
    <Navv>
      <div className={menuicon ? "navbar active" : "navbar"}>
        <ul className="navlist">
          <li>
            <NavLink
              className="navlink"
              to="/"
              onClick={() => setmenuicon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/about"
              onClick={() => setmenuicon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/product"
              onClick={() => setmenuicon(false)}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/contact"
              onClick={() => setmenuicon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink cartlink"
              to="/cart"
              onClick={() => setmenuicon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-item">10</span>
            </NavLink>
          </li>
        </ul>
        <div className="navbtn">
          <GiHamburgerMenu
            className="navicon "
            onClick={() => setmenuicon(true)}
          />
          <AiOutlineClose
            name="close-outline"
            className="navicon close-outline"
            onClick={() => setmenuicon(false)}
          />
        </div>

        {/* two button for open and close  */}
      </div>
    </Navv>
  );
};
export default Nav;
