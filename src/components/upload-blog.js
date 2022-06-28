import React from "react";
import HeaderUpload from "./header-upload";
import { useState } from "react";
import Popup from "./modal";

export default function UploadBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRemoveimg = () => {
    setFile("");
  };
  function handlePost(e) {
    e.preventDefault();

    if (!title || !desc) {
      alert("Masukkan Title & Deskripsi");
    } else {
      localStorage.setItem("title", title);
      localStorage.setItem("desc", desc);
      setModalOpen(true);
    }
  }

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFile(base64);
    convertBase64(file).then((base64) => {
      localStorage["fileBase64"] = base64;
      console.debug("file stored", base64);
    });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <HeaderUpload />
      <div className="max-w-4xl mx-auto py-20">
        <div className="p-6 bg-white sm:p-8 rounded-xl ring ring-indigo-50">
          <h3 className="text-xl font-bold sm:text-2xl">Share Article</h3>
          <form
            action=""
            onSubmit={handlePost}
            className="mx-auto mt-8 mb-0 space-y-4"
          >
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
            {!file ? (
              <div className="flex justify-center items-center w-full">
                <label className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      className="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                  />
                </label>
              </div>
            ) : (
              <div className="relative flex justify-center mx-auto">
                <img src={file} alt="" className="h-80" />
                <button
                  className="absolute top-0 right-0"
                  onClick={handleRemoveimg}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            )}
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
