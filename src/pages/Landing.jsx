import React from "react";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import tvimage from "../assets/tv.png";
import phone_image from "../assets/mobile.png";
import device_pile from "../assets/device-pile.png";
import "./landing.css";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

function Landing() {
  return (
    <div className="landing_main">
      <Hero />
      <Section1
        heading="Enjoy on your TV"
        text="Watch on Smart TVs, Playstation, Xbox, 
Chromecast, Apple TV, Blu-ray players, and
more."
        image={tvimage}
      />
      <Section2
        heading="Download your shows to watch offline"
        text="Save your favorites easily and always have something to watch"
        image={phone_image}
      />
      <Section1
        heading="Watch Everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        image={device_pile}
      />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default Landing;
