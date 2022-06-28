import React from "react";

export default function ProfileDesc() {
  return (
    <div>
      <div className="flex items-start">
        <div className="sm:mr-8 text-left">
          <div className="sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center text-gray-500">
              <svg
                className="w-16 h-16"
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
              <p className="ml-1 text-xl font-medium">
                {localStorage.getItem("fname")}
              </p>
              <p className="ml-1 text-xs font-medium text-gray-500 sm:mt-0">
                7000 Points{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-left">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
        minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
        mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim
        mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
        officia consequat duis enim velit mollit. Exercitation veniam consequat
        sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
}
