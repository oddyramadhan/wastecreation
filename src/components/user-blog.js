import React from "react";
import { NavLink } from "react-router-dom";

export default function UserBlog() {
  const check = localStorage.getItem("title");

  return (
    <div className="py-4">
      {!check ? (
        ""
      ) : (
        <article className="p-6 mb-4 bg-white sm:p-8 rounded-xl ring ring-indigo-50">
          <div className="flex items-start justify-between">
            <div className="sm:mr-8 text-left">
              <h2 className="mt-4 text-lg font-medium sm:text-xl">
                <NavLink to="detail">
                  <p className="hover:underline">
                    {localStorage.getItem("title")}
                  </p>
                </NavLink>
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                {localStorage.getItem("desc")}
              </p>
            </div>
            <div
              className="hidden sm:grid sm:h-40 sm:w-40 sm:shrink-0 sm:place-content-center sm:border-2 sm:border-gray"
              aria-hidden="true"
            >
              <img
                className="object-cover sm:h-40 sm:w-40"
                src={localStorage.getItem("fileBase64")}
                alt=""
              />
            </div>
          </div>
        </article>
      )}
    </div>
  );
}
