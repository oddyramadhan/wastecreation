import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setLogin } from "../redux/slicer";

export default function Register() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!email || !fname || !number || !password) {
      alert("Data harus diisi semua");
    } else {
      dispatch(setLogin({ email: email, password: password }));
      alert("Register Berhasil");
    }
  }

  return (
    <div className="max-w-4xl m-auto">
      <section className="flex sm:flex flex-col md:grid grid-cols-2 lg:grid items-center border-4 my-5">
        <div className="w-full lg:h-full p-8 bg-[#573503] bg-opacity-40">
          <img
            className="inset-0 object-cover relative w-full h-64 sm:h-96"
            src="https://s3-alpha-sig.figma.com/img/c584/3ba2/c9de944172fb9d17cc50a9d398970cce?Expires=1656288000&Signature=hj2MUE1YS37koGl8HdL2czRLPfJNXQCruniTfDkU3Pj0gJwTdA84bX9bABRXclIaOcjEz6Sswa1RoPeMOkVaZqr5r8FbPLHjJp7Wf3AIOLM52S~L523lduQNCTDnWhDZiYNfYi6UMK228ycUyzXQMrFCz1loh84swQwhYvMqq4muHUy6Y957SFQuAQHS3mUoXuU8uVhQww-LoDmDNZUGKIN0kga1WYNZ9F6h81gFaOOhn9T1e5uy~~S0Jmib~pW9qltvbFvIenyzsrPmKxx~~oYSc980IaUsSvJx5MhRkyxbpzlI3zwCbIlmzmMKLxjEpSH~wLOePlIHrhgUSgvrwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <p className="text-center">
            According to a Study by the University of Georgia, Indonesia is the
            second country after China that dumping plastic waste into the
            world’s oceans, as estimated 3.22 million metric tons of plastic
            waste is tossed annually into the ocean.
          </p>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 sm:py-20">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Create an Account
            </h1>
          </div>

          <form
            action=""
            onSubmit={handleFormSubmit}
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
          >
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter full name"
                  onChange={(event) => setFname(event.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={13}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter phone number"
                  onChange={(event) => setNumber(event.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col-reverse p-4">
              <p className="text-sm text-gray-500 my-1">
                Have an account?
                <NavLink to="/login" className="underline">
                  Login
                </NavLink>
              </p>

              <button
                type="submit"
                className="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
