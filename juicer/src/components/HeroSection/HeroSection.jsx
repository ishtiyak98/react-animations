import React from "react";
import "./HeroSection.css";
import Chef from "../../assets/asset 4.png";
import HeroImg from "../../assets/asset 8.png";
import Leaf1 from "./../../assets/asset 6.png";
import Leaf2 from "./../../assets/asset 7.png";
import BeerCan from "./../../assets/asset 5.png";

const HeroSection = () => {
  return (
    <section className="hero-section relative">
      <div className="main-grid">
        <div className="space-y-[35px]">
          <div className="chef-area">
            <div>
              <img src={Chef} alt="" className="w-[80px]" />
            </div>
            <div>
              <p className="caveat-font text-green text-lg">
                Chef Recommendation
              </p>
              <h4 className="poppins text-2xl font-extrabold">
                Serve Drink Passion
              </h4>
            </div>
          </div>
          <div>
            <h2 className="hero-title">Snack Time</h2>
            <h2 className="hero-title">
              Heals <span className="text-green">All Wounds</span>
            </h2>
          </div>
          <div className="hero-btn-wrapper poppins">
            <button className="hero-btn">Order Now</button>
            <p className="hero-btn-side-text">Price : $10.50</p>
          </div>
        </div>
        <div className="hero-img-wrapper">
          <img src={HeroImg} alt="" className="hero-img" />
        </div>
      </div>
      <div className="leaves-wrapper">
        <div className="leaf-wrapper leaf-1">
          <img src={Leaf1} alt="" />
        </div>
        <div className="leaf-wrapper leaf-2">
          <img src={Leaf2} alt="" />
        </div>
        <div className="leaf-wrapper beerCan">
          <img src={BeerCan} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
