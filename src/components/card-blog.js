import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data/data.json";

export default function CardBlog() {
  return (
    <div className="py-4">
      {data.data
        .filter((filter) => filter.type === "blog")
        .map((item, index) => (
          <article
            className="p-6 mb-4 bg-white sm:p-8 rounded-xl ring ring-indigo-50"
            key={index}
          >
            <div className="flex items-start">
              <div className="sm:mr-8 text-left">
                <div className="sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center text-gray-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p className="ml-1 text-xs font-medium">{item.user}</p>
                  </div>
                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>

                  <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    {item.date}
                  </p>
                </div>
                <h2 className="mt-4 text-lg font-medium sm:text-xl">
                  <NavLink to={`detail/${item.id}`}>
                    <p className="hover:underline">{item.title}</p>
                  </NavLink>
                </h2>

                <p className="mt-1 text-sm text-gray-700">{item.desc}</p>
              </div>
              <div
                className="hidden sm:grid sm:h-40 sm:w-40 sm:shrink-0 sm:place-content-center sm:border-2 sm:border-gray"
                aria-hidden="true"
              >
                <img className="sm:h-40 sm:w-40" src={item.image} alt="" />
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}
