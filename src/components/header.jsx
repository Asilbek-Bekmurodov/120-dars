import React, { Component } from "react";
import Deliver from "./deliver";
import "../assets/styles/_header.scss";
import Button from "./button";

import bgImg from "../assets/images/header-bg.png";
import icon1 from "../assets/images/truck.svg";
import icon2 from "../assets/images/ocklock.svg";
import icon3 from "../assets/images/ticked.svg";

export default class Header extends Component {
  render() {
    return (
      <section className="header-section">
        <div className="wrapper">
          <div className="text-wrapper">
            <p className="header-subtitle">New Arrival</p>
            <h1 className="header-title">
              New Fashion Collection Trends in 2022
            </h1>
            <p className="header-paragraph">
              Whether you're in the mood for fashion tricks, outfit ideas,
              industry news, celebrity street style, simply want to know latest
              styles.
            </p>
            <Button content="Shop Now" />
          </div>

          <img className="bg-img" src={bgImg} alt="" />
        </div>

        <div className="fast-deliver">
          <div className="deliver-container">
            <Deliver
              icon={icon1}
              titleContent="Fast & Free Delivery"
              subtitleContent="Free delivery for all orders over $140"
            />
            <Deliver
              icon={icon2}
              titleContent="24/7 Customer Support"
              subtitleContent="friendly 24/7 customer support"
            />
            <Deliver
              icon={icon3}
              titleContent="Money Back Guarantee"
              subtitleContent="We return money within 30 days"
            />
          </div>
        </div>
      </section>
    );
  }
}
