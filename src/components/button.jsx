import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { content, bgColor } = this.props;
    return (
      <button style={{ backgroundColor: bgColor }} className="btn">
        {content}
      </button>
    );
  }
}
