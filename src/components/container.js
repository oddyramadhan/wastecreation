import React from "react";

export default function Container() {
  return (
    <section className="bg-white m-[100px]">
      <div className="bg-gray-100 px-4 py-24 max-w-5xl mx-auto lg:items-center lg:flex">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-red-700 sm:block">
              Increase Conversion.
            </strong>
          </h1>

          <p className="mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white bg-teal-600 rounded shadow sm:w-auto focus:outline-none focus:ring"
              href="/get-started"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
