import React from "react";

export default function Container() {
  return (
    <section className="bg-white max-w-3xl mx-auto my-10">
      <div className="bg-[#573503] bg-opacity-[42%] px-6 py-20 max-w-5xl mx-auto lg:items-center lg:flex">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Recycling is one of
            <strong className="font-extrabold text-red-700 sm:block">
              The wise actions.
            </strong>
          </h1>

          <p className="mt-4 sm:leading-relaxed sm:text-xl">
            Let's save the earth by starting to take advantage of the existing
            waste
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-black bg-[#D3A968] rounded shadow sm:w-auto focus:outline-none focus:ring"
              href="/explore"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
