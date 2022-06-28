import React from "react";
import HeaderUpload from "./header-upload";
import { useState } from "react";
import Popup from "./modal";

export default function UploadVideo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  function handlePost(e) {
    e.preventDefault();

    if (!title || !desc || !url) {
      alert("Masukkan Title, Deskripsi & Link Youtube");
    } else {
      localStorage.setItem("titlevid", title);
      localStorage.setItem("descvid", desc);
      localStorage.setItem("urlyt", url);
      setModalOpen(true);
    }
  }

  return (
    <>
      <HeaderUpload />
      <div className="max-w-4xl mx-auto py-20">
        <div className="p-6 bg-white sm:p-8 rounded-xl ring ring-indigo-50">
          <h3 className="text-xl font-bold sm:text-2xl">Share Video</h3>
          <form
            action=""
            onSubmit={handlePost}
            className="mx-auto mt-8 mb-0 space-y-4"
          >
            <div>
              <div className="relative">
                <input
                  type="url"
                  className="w-full h-16 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Link Youtube"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <textarea
                  type="text"
                  className="w-full h-20 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <textarea
                  type="text"
                  className="w-full h-64 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Deskripsi"
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col-reverse p-4">
              <button
                type="submit"
                className="inline-block px-5 py-3 text-sm font-medium text-black bg-[#B66F04] bg-opacity-[53%] rounded-lg"
              >
                Post
              </button>
            </div>
          </form>
        </div>
        {modalOpen && <Popup setOpenModal={setModalOpen} />}
      </div>
    </>
  );
}
