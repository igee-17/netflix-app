import React, { useState } from "react";
import "./section3.css";

function Section3() {
  const [open, setOpen] = useState(false);
  const [openA2, setOpenA2] = useState(false);
  const [openA3, setOpenA3] = useState(false);
  const [openA4, setOpenA4] = useState(false);
  const [openA5, setOpenA5] = useState(false);

  // const toggle = () => {
  //   setOpen(!open);
  //   if (openA2 === true) {
  //     setOpenA2(!openA2);
  //   }
  //   if (openA3 === true) {
  //     setOpenA3(!openA3);
  //   }
  //   if (openA4 === true) {
  //     setOpenA4(!openA4);
  //   }
  //   if (openA5 === true) {
  //     setOpenA5(!openA5);
  //   }

  //   console.log(open);
  // };

  const toggle = () => {
    setOpen(!open);
    if (openA2 || openA3 || openA4 || openA5 === true) {
      setOpenA2(!openA2);
      setOpenA3(!openA3);
      setOpenA4(!openA4);
      setOpenA5(!openA5);
    }
  };

  const toggleA2 = () => {
    setOpenA2(!openA2);
    if (open || openA3 || openA4 || openA5 === true) {
      setOpen(false);
      setOpenA3(false);
      setOpenA4(false);
      setOpenA5(false);
    }
  };

  const toggleA3 = () => {
    setOpenA3(!openA3);
    console.log(openA3);
    if (open || openA2 || openA4 || openA5 === true) {
      setOpen(false);
      setOpenA2(false);
      setOpenA4(false);
      setOpenA5(false);
    }
  };
  const toggleA4 = () => {
    setOpenA4(!openA4);
    console.log(openA4);
    if (open || openA2 || openA3 || openA5 === true) {
      setOpen(false);
      setOpenA2(false);
      setOpenA3(false);
      setOpenA5(false);
    }
  };
  const toggleA5 = () => {
    setOpenA5(!openA5);
    console.log(openA5);
    if (open || openA2 || openA3 || openA4 === true) {
      setOpen(false);
      setOpenA2(false);
      setOpenA3(false);
      setOpenA4(false);
    }
  };

  return (
    <div className="section4">
      <div className="header">
        <h2>Frequently asked questions</h2>
      </div>
      <div className="dropdown_menu">
        <div className="accordion-container">
          <div className="accordion1 accordion">
            <div className="accordion-item" onClick={toggle}>
              <p>What is Netflix</p>
              {open ? <span>x</span> : <span>+</span>}
            </div>

            <div
              className={
                open
                  ? "content__open" && "accordion__content"
                  : "content__close"
              }
            >
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. <br /> You can watch
                as much as you want, whenever you want without a single
                commercial – all for one low monthly price. There's always
                something new to discover and new TV shows and movies are added
                every week!
              </p>
            </div>
          </div>
          <div className="accordion2 accordion">
            <div className="accordion-item" onClick={toggleA2}>
              <p>How much does Netflix cost</p>
              <span>+</span>
            </div>

            <div
              className={
                openA2
                  ? "content__open" && "accordion__content"
                  : "content__close"
              }
            >
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
              </p>
            </div>
          </div>

          <div className="accordion3 accordion">
            <div className="accordion-item" onClick={toggleA3}>
              <p>Where can I watch</p>
              <span>+</span>
            </div>

            <div
              className={
                openA3
                  ? "content__open" && "accordion__content"
                  : "content__close"
              }
            >
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. <br /> You can also
                download your favorite shows with the iOS, Android, or Windows
                10 app. Use downloads to watch while you're on the go and
                without an internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          </div>
          <div className="accordion4 accordion">
            <div className="accordion-item" onClick={toggleA4}>
              <p>How do I cancel</p>
              <span>+</span>
            </div>

            <div
              className={
                openA4
                  ? "content__open" && "accordion__content"
                  : "content__close"
              }
            >
              <p>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </div>
          <div className="accordion5 accordion">
            <div className="accordion-item" onClick={toggleA5}>
              <p>What can I watch on Netflix</p>
              <span>+</span>
            </div>

            <div
              className={
                openA5
                  ? "content__open" && "accordion__content"
                  : "content__close"
              }
            >
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
