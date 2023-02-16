import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";

const Banner = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = moment().format("h:mm ");
      setTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner bg-black flex">
      <div className="container flex justify-center items-center">
        <div className="banner--left">
          <div className="offer-b bg-button2 flex items-center px-1.5">
            <p className="text-white">
              <span className="bg-button1 text-center mr-2">NEW</span>High
              Intensity workout to burn calories
            </p>
          </div>
          <h1 className="text-white desktop">Cardio Exercise</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="banner--left-btn">
            <button className="banner-btn banner-btn-1 bg-button1 mr-7 mobile:mr-3">
              Get Started
            </button>
            <button className="banner-btn banner-btn-2 bg-button2">
              Preview
            </button>
          </div>
        </div>
        <div className="banner--right tablet:hidden desktop:block">
          <Image src="/assets/girl.png" alt="me" width="600" height="500" />
          <div className="numbers">
            <div className="time bg-button2 flex justify-center items-center mb-5">
              <div>
                <h3>{time}</h3>
                <p>TIME</p>
              </div>
            </div>
            <div className="calories bg-button2 flex justify-center items-center">
              <div>
                <h3>165</h3>
                <span>EST CALORIES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
