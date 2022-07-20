import React, { Component } from "react";

import brand from "../assets/images/brand.svg";
import account from "../assets/images/Account.svg";
import cart from "../assets/images/cart.svg";
import downArrow from "../assets/images/down-Arrow.svg";
import heard from "../assets/images/heard.svg";
import search from "../assets/images/Searchsvg.svg";
import "../assets/styles/_navbar.scss";


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={brand} alt="" />
        <ul className="list-items">
          <li className="list-item">
            <a href="#1">
              Products <img src={downArrow} alt="" />
            </a>
          </li>

          <li className="list-item">
            <a href="#1">Shop</a> <img src={downArrow} alt="" />
          </li>

          <li className="list-item">
            <a href="#1">
              Collecti <img src={downArrow} alt="" />
              on
            </a>
          </li>

          <li className="list-item">
            <a href="#1">
              About Us <img src={downArrow} alt="" />
            </a>
          </li>
          <li className="list-item">
            <a href="#1">
              Contact <img src={downArrow} alt="" />
            </a>
          </li>
        </ul>

        <div className="icons">
          <img src={search} alt="" />
          <img src={account} alt="" />
          <img src={heard} alt="" />
          <img src={cart} alt="" />
        </div>
      </nav>
    );
  }
}
