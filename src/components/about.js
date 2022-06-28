import React from "react";

export default function About() {
  return (
    <section>
      <div className="px-4 py-16 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 object-cover w-full h-full rounded-[50px]"
                src="/rsrcs/about.jpg"
                alt="About Us"
              />
            </div>
          </div>

          <div className="relative flex items-center text-left">
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">About Us</h2>

              <p className="mt-4 text-black">
                we encourage people to increase awareness of the environment by
                providing reliable recycling and waste solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
