import * as React from "react";
import CollegeShuttles from "./CollegeShuttles/CollegeShuttles";

function Hero() {
  return (
    <>
    <header className="flex flex-col pl-7 w-full max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full text-base font-bold text-center text-gray-800 max-md:flex-wrap max-md:max-w-full">
        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d5d058e838244fe42a0345534a09acc812b72a9086257efb8489102eef4089e0?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5d058e838244fe42a0345534a09acc812b72a9086257efb8489102eef4089e0?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5d058e838244fe42a0345534a09acc812b72a9086257efb8489102eef4089e0?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5d058e838244fe42a0345534a09acc812b72a9086257efb8489102eef4089e0?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5d058e838244fe42a0345534a09acc812b72a9086257efb8489102eef4089e0?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5d058e838244fe42a0345534a09acc812b72a9086257efb8489102eef4089e0?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5d058e838244fe42a0345534a09acc812b72a9086257efb8489102eef4089e0?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5d058e838244fe42a0345534a09acc812b72a9086257efb8489102eef4089e0?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&"className="max-w-full aspect-[1.14] w-[118px]" />
        <div className="flex gap-5 justify-between items-end max-md:flex-wrap max-md:max-w-full">
          <div className="mt-16 max-md:mt-10">HOME</div>
          <div className="mt-16 max-md:mt-10">SERVICES</div>
          <div className="flex-auto mt-16 max-md:mt-10">COLLEGE SHUTTLES</div>
          <div className="mt-16 max-md:mt-10">OUR BUSES</div>
          <div className="flex-auto mt-16 max-md:mt-10">CONTACT US</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30dc10e4cdb1ca064c23d21a656c092c9ce68c63a824b8f9ba877b173aafca7c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&" className="self-stretch aspect-[0.83] w-[87px]" />
        </div>
      </div>
      <section className="mt-36 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:max-w-full">
              <h1 className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                <br /> Luxury & Reliable Coach Bus Services <br /> <br />
              </h1>
              <p className="mt-14 text-xl text-neutral-500 max-md:mt-10 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies at lectus at suscipit. In erat urna, varius
                eu orci sed, semper volutpat eros. <br />
              </p>
              <button
                className="justify-center self-start px-12 py-6 mt-9 text-2xl text-center whitespace-nowrap bg-amber-100 rounded-xl max-md:px-5"
                aria-label="Request a Quote"
                role="button"
              >
                Request a Quote
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-12 pl-14 mt-14 w-full bg-orange-200 bg-opacity-40 rounded-[1000px] max-md:mt-10 max-md:max-w-full">
              <div className="flex z-10 flex-col justify-center items-end pl-16 mt-0 bg-stone-500 rounded-[1000px] max-md:pl-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&"className="z-10 mt-0 mb-0 max-w-full aspect-[1.15] w-[554px] max-md:mb-2.5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
    <CollegeShuttles />
    </>
  );
}

export default Hero;