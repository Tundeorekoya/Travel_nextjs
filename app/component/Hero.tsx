import Image from "next/image";
import React from "react";
import Button from "./button";

const Hero = () => {
  return (
    <section className=" max-container flex flex-col padding-container  gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="z-20 relative flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 l:bold-88 my-4">Cherry Bay Camp Area</h1>
        <p className="regular-16 font-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. we can help you on an
          adventure around the world in just one app.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Review
            </span>
          </p>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button variant="btn_green" title="DownloadApp" type="button" />
            <Button
              variant="btn_white_text"
              title="How We work?"
              type="button"
              icon="/play.svg"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[258px] flex-col gap-8 rounded-3xl bg-green-90 py-8 px-7">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-500 mb-2">Location</p>
              <Image
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
                className="mb-2"
              />
            </div>

            <div className="flexBetween  mb-2">
              <p className="text-[14px] text-gray-500">Distance:</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>

            <div className="flexBetween">
              <p className="text-[14px] text-gray-500">Elevation:</p>
              <p className="bold-20 text-white">2.040km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
