import React, { Component } from 'react'


import "../assets/styles/_deliver.scss";

export default class Deliver extends Component {
  render() {
    const {icon ,titleContent,subtitleContent} = this.props;

    return (
        <div className="deliver-wrap">
            <img src={icon} alt="" />
            <div className="deliver-text">
                <h3>{titleContent}</h3>
                <p>{subtitleContent}</p>
            </div>
        </div>
    )
  }
}
