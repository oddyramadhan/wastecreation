import React from "react";
import HeaderExplore from "../components/header-explore";

export default function UserBlogDetail() {
  return (
    <div>
      <HeaderExplore />
      <div className="max-w-4xl mx-auto py-20">
        <article className="p-6 bg-white sm:p-10 rounded-xl ring ring-indigo-50">
          <h2 className="text-2xl font-bold my-4 text-left">
            {localStorage.getItem("title")}
          </h2>
          <p className="py-4 text-left">{localStorage.getItem("desc")}</p>
          <div className="flex justify-center max-h-[400px] max-w-[816px]">
            <img
              className="object-fill max-h-[400px] max-w-[816px]"
              src={localStorage.getItem("fileBase64")}
              alt=""
            />
          </div>
        </article>
      </div>
    </div>
  );
}
