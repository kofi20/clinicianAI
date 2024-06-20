"use client";

import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mt-16 max-container padding-container flex flex-col gap-10 py-5 pb-24 md:gap-18 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-64">
          Ambient AI Assistant for Clinicians
        </h1>
        <p className="regular-16 mt-6 text-gray-60 xl:max-w-[520px]">
          Experience the future of clinical documentation with our speech-driven
          AI tool. This innovative assistant streamlines your workflow, saving
          up to 2 hours of documentation time per encounter.
        </p>

        {/* <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
        </div> */}
        <div className="flex flex-col w-full gap-3 sm:flex-row mt-6">
          <Button
            type="button"
            title="Try for Free"
            variant="btn_gray_primary"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl  px-7 py-8">
          <Image src={"/hero_image.png"} alt={""} width={240} height={240} />
        </div>
      </div>

      {/* <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
