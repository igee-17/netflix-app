import React, { useState } from "react";
import "./Hero.css";
import myImage from "../assets/logo.png";

function Hero() {
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <div className="hero__main">
      <div className="hero__top">
        <img src={myImage} alt="check source" />
        <button>Sign in</button>
      </div>

      <div className="hero__bottom">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h4>Watch anywhere, Cancel anytime.</h4>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="hero__form">
          <input
            type="text"
            className="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="submit"> GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
