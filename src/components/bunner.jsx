import React, { Component } from "react";
import img1 from "../assets/images/right-arrow.svg";
import img2 from "../assets/images/left-arrow.svg";
import Trand from "./trand";
import img3 from "../assets/images/trand1.png";
import img4 from "../assets/images/trand2.png";

export default class Bunner extends Component {
  render() {
    return (
      <div className="section-container">
        <section className="bunner-section">
          <div className="bunner-title__wrap">
            <h2>Trending This Month</h2>
            <div className="icon-box">
              <p>Trending This Month</p>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="trand-container">
          <Trand trandImg = {img3}/>
          <Trand trandImg = {img4}/>
          </div>
        </section>
      </div>
    );
  }
}
