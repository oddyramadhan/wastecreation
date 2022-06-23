import React from "react";
import Gallery1 from "../rsrcs/gallery1.jpg";
import Gallery2 from "../rsrcs/gallery2.jpg";
import Gallery3 from "../rsrcs/gallery3.png";
import Gallery4 from "../rsrcs/gallery4.jpg";

export default function Blogs() {
  const blogData = [
    {
      href: "#",
      image: Gallery1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      href: "#",
      image: Gallery2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      href: "#",
      image: Gallery3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      href: "#",
      image: Gallery4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div>
      <h2 className="text-2xl font-bold sm:text-3xl p-4">Blog</h2>
      <div className="grid max-w-5xl gap-2 mx-auto p-8 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {blogData.map((item, index) => (
          <a
            className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
            key={index}
            href={item.href}
          >
            <img className="object-cover w-full h-56" src={item.image} alt="" />

            <div className="p-6">
              <h5 className="text-xl font-bold">{item.title}</h5>

              <p className="mt-2 text-sm text-gray-500">{item.desc}</p>

              <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
                Read More
                <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
