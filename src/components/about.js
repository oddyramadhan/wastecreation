import React from "react";
import Aboutimg from "../rsrcs/about.webp";

export default function About() {
  return (
    <section>
      <div className="px-4 py-16 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src={Aboutimg}
                alt="Indoors house"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">About Us</h2>

              <p className="mt-4 text-gray-600">
                we encourage people to increase awareness of the environment by
                providing reliable recycling and waste solutions
              </p>

              <a
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-teal-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                href="/contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
