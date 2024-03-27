import React from "react";
import "animate.css";
import { IoLogoApple } from "react-icons/io";
const Steps = () => {
  return (
    <div>
      <div className="md:my-10">
        <div className="animate__animated  animate__fadeInLeft animate__delay-4s">
          <div className="flex items-center gap-x-2 text-[20px]  lg:text-[40px] font-bold text-yellow-500">
            STEPS TO SELL AN iPHONE
            <div className="animate__animated animate__rotateInDownLeft animate__delay-5s">
              <IoLogoApple className="text-white " />
            </div>
          </div>
          <ol className="text-[13px] md:text-[16px] lg:text-[25px] text-white">
            <li>
              1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt ipsam repellat repudiandae soluta voluptatum assumenda
              quidem, officia reiciendis architecto quia eius ab quis odio esse.
              Ex, suscipit! Vitae harum quos omnis recusandae rem sunt?{" "}
            </li>
            <li>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt ipsam repellat repudiandae soluta voluptatum assumenda
              quidem, officia reiciendis architecto quia eius ab quis odio esse.
              Ex, suscipit! Vitae harum quos omnis recusandae rem sunt?{" "}
            </li>
            <li>
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt ipsam repellat repudiandae soluta voluptatum assumenda
              quidem, officia reiciendis architecto quia eius ab quis odio esse.
              Ex, suscipit! Vitae harum quos omnis recusandae rem sunt?{" "}
            </li>
            <li>
              4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt ipsam repellat repudiandae soluta voluptatum assumenda
              quidem, officia reiciendis architecto quia eius ab quis odio esse.
              Ex, suscipit! Vitae harum quos omnis recusandae rem sunt?{" "}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Steps;
