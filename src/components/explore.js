import React from "react";
import { NavLink } from "react-router-dom";

export default function ExploreHome() {
  return (
    <section>
      <div className="px-4 py-20 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <p className="text-2xl font-bold ">
          Find Your Best Solutions to Save The World
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-5">
          <div className="relative z-10">
            <div className="relative flex justify-center items-center lg:h-96 sm:h-80 border-4">
              <NavLink to="blog">
                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">Blog</h2>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#D3A968] bg-opacity-[42%]">
            <NavLink to="video">
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Video Tutorial
                </h2>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
