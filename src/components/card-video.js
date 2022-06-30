import React from "react";
import data from "../data/data.json";

export default function CardVideo() {
  return (
    <div className="py-4">
      {data.data
        .filter((filter) => filter.type === "video")
        .map((item, index) => (
          <div key={index}>
            <div className="max-h-[400px] max-w-[816px] border-2">
              <iframe
                className="h-[400px] w-[816px]"
                src={item.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
            <p className="p-2 mb-10 text-left font-semibold">{item.title}</p>
          </div>
        ))}
    </div>
  );
}
