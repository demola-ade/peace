import Image from "next/image";
import React from "react";
import sketch from "../../public/assets/sketch.png";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center" id="Hero">
      <div className="flex flex-col items-center gap-10  ">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p>Hi, I am</p>
            <h1 className="text-3xl md:text-7xl font-bold text-[#1F1F1F]">
              Aboluwade <br />
              Peace
            </h1>
          </div>
          <div className="relative">
            <Image
              src={sketch}
              className="z-100000000 xl:w-auto xl:h-auto h-100 w-80"
              alt="love"
              height={400}
              width={400}
            />

            <div className="absolute md:h-130 md:w-130 top-0 -z-1000000 left-1/2 -translate-x-1/2">
              <svg viewBox="0 0 100 100" className="md:h-auto h-100">
                <circle
                  r="33"
                  cy="50"
                  cx="50"
                  strokeWidth={1}
                  fill="#1F1F1F"
                  stroke="#1F1F1F"
                  strokeOpacity={1}
                  stroke-dasharray="528.4 628.4 "
                  strokeLinecap="round"
                />

                <circle
                  r="32"
                  cy="50"
                  cx="50"
                  strokeWidth={1}
                  fill="transparent"
                  stroke="#3A7D44"
                  strokeOpacity={0.5}
                  strokeDasharray="110"
                />

                <circle
                  r="30"
                  cy="50"
                  cx="50"
                  strokeWidth={1}
                  fill="transparent"
                  stroke="#D97706"
                  strokeOpacity={1}
                  strokeDasharray="220"
                />

                {/*<circle
            r="25"
            cy="50"
            cx="50"
            strokeWidth={1}
            fill="transparent"
            stroke="#4A5568"
            strokeOpacity={0.1}
            stroke-dasharray="65"
          /> */}

                {/* <line x1="0" y1="0" x2="90" y2="0" stroke="blue" stroke-width="4" /> */}
              </svg>
              <svg viewBox="0 0 100 100" className="md:absolute top-0 md:left-1/2 hidden ">
                <circle
                  r="13"
                  cy="50"
                  cx="50"
                  strokeWidth={1}
                  fill="transparent"
                  stroke="#4A5568"
                  strokeOpacity={1}
                  strokeDasharray="220"
                />
                <circle
                  r="10"
                  cy="50"
                  cx="50"
                  strokeWidth={1}
                  fill="transparent"
                  stroke="#D97706"
                  strokeOpacity={1}
                  strokeDasharray="220"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <p className="text-center">
            A performance driven professional with hands on experience in customer relations, adept
            at building rapport, resolving inquires, and driving customers satisfaction. Skilled in
            communication, problem solving and multi-tasking in a fast paced environment. Ability to
            leverage strong interpersonal skills and a service-driven mindset to foster client
            success in both remote and on-site capacities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
