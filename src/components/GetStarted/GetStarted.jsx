import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with ProSpace</span>
          <span className="secondaryText">
            Begin your journey with ProSpace today. Explore hotels, book
            effortlessly, and experience a new level of hotel discovery.{" "}
            <br />
            Find your hotel soon.
          </span>
          <button className="button">
            <a href="mailto:tnmy57@gmail.com">GET STARTED</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
