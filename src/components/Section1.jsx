import React from "react";
import tv__image from "../assets/tv.png";
import "./section1.css";

function Section1({ heading, text, image }) {
  return (
    <div className="section1">
      <div className="section1__left">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="section1__right">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Section1;
