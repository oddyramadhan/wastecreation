import React from "react";
import { NavLink } from "react-router-dom";
import HeaderUpload from "../components/header-upload";

export default function Upload() {
  return (
    <div>
      <HeaderUpload />
      <section>
        <div className="px-4 py-20 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <p className="text-2xl font-bold ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-5">
            <div className="relative z-10">
              <div className="relative flex justify-center items-center lg:h-96 sm:h-80 border-4">
                <NavLink to="blog">
                  <div className="p-8 sm:p-16 lg:p-24">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <h2 className="text-2xl font-bold sm:text-3xl">Blog</h2>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#D3A968] bg-opacity-[42%]">
              <NavLink to="video">
                <div className="p-8 sm:p-16 lg:p-24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Video Tutorial
                  </h2>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
