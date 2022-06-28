import React from "react";
import HeaderExplore from "../components/header-explore";
import ProfileDesc from "../components/profile-desc";
import Tab from "../components/tab";

export default function Profile() {
  return (
    <>
      <HeaderExplore />
      <div className="max-w-4xl mx-auto py-20">
        <div className="p-6 bg-white sm:p-8 rounded-xl ring ring-indigo-50">
          <ProfileDesc />
          <Tab />
        </div>
      </div>
    </>
  );
}
