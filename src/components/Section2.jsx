import React from "react";
import "./section2.css";

function Section2({ heading, text, image }) {
  return (
    <div>
      <div className="section2">
        <div className="section2__right">
          <img src={image} alt="" />
        </div>
        <div className="section2__left">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
