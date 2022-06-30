import React from "react";

export default function UserVideo() {
  const check = localStorage.getItem("urlyt");

  return (
    <div className="py-4">
      {!check ? (
        ""
      ) : (
        <div>
          <div className="h-[400px] w-[816px] border-2">
            <iframe
              className="h-[400px] w-[816px]"
              src={`https://www.youtube.com/embed/${
                localStorage.getItem("urlyt").split("=")[1]
              }`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
          <p className="p-2 text-left font-semibold">
            {localStorage.getItem("titlevid")}
          </p>
        </div>
      )}
    </div>
  );
}
