import React, { Component } from "react";
import "../assets/styles/_trand.scss";
import Button from "./button";


export default class Trand extends Component {
  render() {
    const { trandImg } = this.props;
    return (
      <div className="trand-wrapper">
        <h2 className="trand-title">Empire Waist Dress</h2>
        <p className="trand-paragraph">
          The dress gathers under the bust at the slimmest part of the torso
        </p>
        <b className="rate">4.9 50+ Reviews</b>
        <p className="price">
          $12.00 <span>$15.00</span>
        </p>
        <Button content="Buy now" />

        <img className="trand-img" src={trandImg} alt="" />
      </div>
    );
  }
}
