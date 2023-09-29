import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings flexCenter innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
            <div className="orange-circle"></div>
              Unlock Your <br />
              Dream with <br />
              <span>ProSpace</span>
            </motion.h1>
          </div>

          <div className="flexColStart secondaryText hero-des">
            <span>Your ultimate destination for hassle-free hotel</span>
            <span>discovery and booking.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={15800} end={16000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Positive Reviews</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={80} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Hotels</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={950} end={1000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Beds</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container"
          >
            <img src="./hero-image3.jpg" alt="heroImage" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
