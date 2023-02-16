import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Grid1, Grid2, Grid3, Grid4, Grid5, Grid6 } from "../../public/assets";

const Exercises = () => {
  return (
    <div className="exercises">
      <div className="container">
        <div className="exercises--title text-white flex justify-between items-center">
          <h2>Popular Exercises</h2>
          <Link
            href="https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday#start-here"
            className="underline"
          >
            SEE MORE EXERCISES
          </Link>
        </div>
        <div className="exercises--grid text-white grid grid-rows-2 desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-2 gap-x-3 gap-y-10 justify-items-center ">
          <div className="grid">
            <Image className="image" src={Grid1} alt="Girl in Treadmill" />
            <h3>Treadmill</h3>
            <p>250 est calories </p>
          </div>
          <div className="grid">
            <Image className="image" src={Grid2} alt="Boy Stretching" />
            <h3>Streching</h3>
            <p>250 est calories </p>
          </div>
          <div className="grid">
            <Image className="image" src={Grid3} alt="Girl doing yoga" />
            <h3>Yoga</h3>
            <p>250 est calories </p>
          </div>
          <div className="grid">
            <Image className="image" src={Grid4} alt="Boy running" />
            <h3>Running</h3>
            <p>250 est calories </p>
          </div>
          <div className="grid">
            <Image className="image" src={Grid5} alt="Boy lifting a dumbell" />
            <h3>Lifting</h3>
            <p>250 est calories </p>
          </div>
          <div className="grid">
            <Image className="image" src={Grid6} alt="Boy doing a pushup" />
            <h3>PushUp</h3>
            <p>250 est calories </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
