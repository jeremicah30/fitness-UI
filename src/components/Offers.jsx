import React from "react";
import Image from "next/image";
import YellowLine from "public/assets/yellow-line";

const Offers = () => {
  return (
    <div className="offers bg-slate-600">
      <div className="container flex tablet responsive">
        <div className="offers--title w-50 text-white">
          <h2 className="z-99 relative">Workout Program Made For You</h2>
          <svg
            className="z-2 "
            style={{ marginTop: "-100px" }}
            height="{50}"
            width="{50}"
          >
            <YellowLine />
          </svg>
        </div>
        <div className="offers--content text-white tablet:w-auto">
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
