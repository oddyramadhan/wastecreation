import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data/data.json";

export default function CardsExplore() {
  const [selectedCategory, setSelectedCategory] = useState("populer");

  let filteredCategories = data;
  if (selectedCategory === "populer") {
    filteredCategories = data.data.sort((a, b) => b.popular - a.popular);
  } else {
    filteredCategories = data.data.filter(
      (data) => data.type.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  // const filteredCategories = data.data.filter(
  //   (data) => data.type.toLowerCase() === selectedCategory.toLowerCase()
  // );

  return (
    <div>
      <div className="relative max-w-5xl px-8 mx-auto text-[15px]">
        <select
          name="filter"
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="flex items-left w-[150px] px-3 py-2 text-black bg-[#D3A968] border rounded-md shadow-sm cursor-pointer outline-none"
        >
          <option value="populer" className="border rounded-md shadow-sm">
            Populer
          </option>
          <option value="blog">Blog</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className="grid max-w-5xl gap-2 mx-auto p-8 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {filteredCategories.map((item, index) => (
          <NavLink to={item.href}>
            <p
              className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm text-left"
              key={index}
            >
              <img
                className="object-cover w-full h-56"
                src={item.image}
                alt=""
              />

              <div className="p-4">
                <h5 className="text-base font-bold">{item.title}</h5>

                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke="pink"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <p>{item.popular}</p>
                </div>
              </div>
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
