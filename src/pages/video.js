import React from "react";
import CardVideo from "../components/card-video";
import HeaderExplore from "../components/header-explore";

export default function Video() {
  return (
    <>
      <HeaderExplore />
      <div className="max-w-4xl mx-auto py-16">
        <div className="p-6 bg-white sm:p-10 rounded-xl ring ring-indigo-50">
          <CardVideo />
        </div>
      </div>
    </>
  );
}
