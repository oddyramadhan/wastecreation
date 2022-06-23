import React from "react";
import Bannerimg from "../rsrcs/banner3.jpg";

export default function Banner() {
  return (
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={Bannerimg}
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative max-w-5xl px-4 py-32 mx-auto lg:h-screen  lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us give your
            <strong className="font-extrabold text-rose-700 sm:block">
              Waste Solutions.
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-teal-600 sm:w-auto focus:outline-none focus:ring"
              href="/explore"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
