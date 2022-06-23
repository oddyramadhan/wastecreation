import React from "react";

export default function ExploreHome() {
  return (
    <section>
      <div className="px-4 py-16 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-5">
          <div className="relative z-10">
            <div className="relative flex justify-center items-center lg:h-96 sm:h-80 border-4">
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">Blog</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-gray-100">
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">Video Tutorial</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
