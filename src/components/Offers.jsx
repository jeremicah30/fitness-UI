import React from "react";
import Image from "next/image";
import YellowLine from "public/assets/yellow-line";

const Offers = () => {
  return (
    <div className="offers bg-slate-600">
      <div className="container flex">
        <div className="offers--title w-50 text-white">
          <h2>Workout Program Made For You</h2>
          <svg style={{ marginTop: "-100px" }} height="{100}" width="{100} ">
            <YellowLine />
          </svg>
        </div>
        <div className="offers--content text-white">
          <p className="pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            consectetur adipiscing.
          </p>
          <button className="offers-btn bg-button1 mr-7">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
