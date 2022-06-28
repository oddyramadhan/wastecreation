import React from "react";
import CardBlog from "../components/card-blog";
import HeaderExplore from "../components/header-explore";

export default function Blog() {
  return (
    <>
      <HeaderExplore />
      <div className="max-w-4xl mx-auto py-16">
        <CardBlog />
      </div>
    </>
  );
}
