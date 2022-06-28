import React from "react";

export default function CardVideo() {
  return (
    <div className="py-4">
      <div className="h-[400px] w-[816px] border-2">
        <iframe
          className="h-[400px] w-[816px]"
          src="https://www.youtube.com/embed/hbTvihtUvBk"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
      <p className="p-2 text-left font-semibold">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
}
