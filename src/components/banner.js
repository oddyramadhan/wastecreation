import React from "react";
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-50"
        src="/rsrcs/banner.jpg"
        alt="Banner"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative max-w-5xl px-4 py-32 mx-auto lg:h-screen  lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us give your
            <strong className="font-extrabold text-[#B66F04] sm:block">
              Waste Solutions.
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Reuse, Reduce, Recycle the best part about recycling is that it
            saves the earth
          </p>

          <div className="flex justify-center sm:justify-start flex-wrap gap-4 mt-8 text-center">
            <NavLink to="/explore">
              <p className="block w-full px-10 py-3 text-sm font-medium text-black rounded-[50px] shadow bg-[#D3A968] sm:w-auto focus:outline-none focus:ring">
                Explore Now
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
