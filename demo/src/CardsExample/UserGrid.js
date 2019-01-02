import React, { Component } from "react";
import Card from "./Card";
import anime from "animejs";

class UserGrid extends Component {
  hideElements = (el, startId) => {
    if (startId !== "focusedUser") return;
    const elements = [].slice.apply(el.querySelectorAll("*[data-fade-in]"));
    elements.forEach(el => (el.style.opacity = "0"));
    el.style.zIndex = 2;
  };
  animateIn = (el, startId) => {
    if (startId !== "focusedUser") return;
    anime({
      targets: el.querySelectorAll("*[data-fade-in]"),
      translateY: [-30, 0],
      opacity: [0, 1],
      duration: 250,
      easing: "easeOutSine",
      delay: (d, i) => i * 75
    });
    el.style.zIndex = 1;
  };
  render() {
    return (
      <ul className="cardGrid">
        {this.props.data.map((d, i) => {
          const parentFlipId = `card-${i}`;
          if (i === this.props.focusedIndex) return null;
          return (
            <Card
              parentFlipId={parentFlipId}
              d={d}
              i={i}
              setFocusedIndex={this.props.setFocusedIndex}
            />
          );
        })}
      </ul>
    );
  }
}

export default UserGrid;
