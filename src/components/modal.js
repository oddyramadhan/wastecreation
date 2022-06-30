import React from "react";
import { useNavigate } from "react-router-dom";

function Popup({ setOpenModal }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center">
      <div className="p-6 animate-modal mb-0 bg-white space-y-4 w-full sm:w-3/4 md:w-1/3 rounded-3xl shadow-2xl">
        <div className="p-8 text-center sm:p-12">
          <svg
            className="w-20 h-20 m-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <h5 className="mt-6 text-3xl font-bold">Well Done!</h5>
          <p>Post uploaded successfully</p>
          <div className="flex justify-center mt-6">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              ></path>
            </svg>
            <p>1500 poin</p>
          </div>
          <button
            className="inline-block w-full py-4 mt-8 text-sm font-bold text-black bg-[#D3A968] rounded-full shadow-xl"
            onClick={() => {
              setOpenModal(false);
              navigate("/profile");
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
