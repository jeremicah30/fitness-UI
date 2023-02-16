import React from "react";
import Image from "next/image";

import { Show1, Show2, Boy } from "public/assets";

const Showcase = () => {
  return (
    <div className="showcase bg-black ">
      <div className="container flex responsive">
        <div class="showcase--left w-50">
          <div id="item-0">
            <Image src={Show1} alt="Girl Concentrating" />
          </div>
          <div id="item-1">
            <Image src={Show2} alt="Girl Hands" />
          </div>
        </div>
        <div className="showcase--right w-50">
          <Image src={Boy} alt="Girl Hands" className="boy-stretch" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
