import React from "react";
import HeaderExplore from "../components/header-explore";
import { useParams } from "react-router";
import data from "../data/data.json";

export default function BlogDetail() {
  const { id } = useParams();

  return (
    <div>
      <HeaderExplore />
      <div className="max-w-4xl mx-auto py-20">
        {data.data
          .filter((filter) => filter.id === Number(id))
          .map((item, index) => (
            <article
              className="p-6 bg-white sm:p-10 rounded-xl ring ring-indigo-50"
              key={index}
            >
              <div className="flex items-start mb-8">
                <div className="sm:mr-8 text-left">
                  <div className="sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center text-gray-500">
                      <svg
                        className="w-10 h-10"
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
                    </div>
                    <div>
                      <p className="ml-1 text-base font-medium">{item.user}</p>
                      <p className="ml-1 text-xs font-medium text-gray-500 sm:mt-0">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold my-4 text-left">
                {item.title}
              </h2>
              <p className="py-4 text-left">{item.desc}</p>
              <p className="py-4 text-left">{item.desc1}</p>{" "}
              <p className="py-4 text-left">{item.desc2}</p>
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover max-h-[400px] max-w-[816px]"
                />
              </div>
              <p className="py-4 text-left">{item.desc3}</p>
            </article>
          ))}
      </div>
    </div>
  );
}
