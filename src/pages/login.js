import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIslogin } from "../redux/slicer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Email = useSelector((state) => state.login.email);
  const Password = useSelector((state) => state.login.password);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Masukkan email dan password");
    } else if (password !== Password || email !== Email) {
      alert("Email dan password salah");
      setEmail("");
      setPassword("");
    } else {
      dispatch(setIslogin());
    }
  }

  return (
    <div>
      {!token ? (
        <div className="max-w-4xl m-auto">
          <section className="flex sm:flex flex-col md:grid grid-cols-2 lg:grid items-center border-4 my-8">
            <div className="w-full lg:h-full p-8 bg-[#573503] bg-opacity-[42%]">
              <img
                className="inset-0 object-cover relative w-full h-64 sm:h-96"
                src="/rsrcs/bannerauth.jpg"
                alt=""
              />
              <p className="text-center">
                According to a Study by the University of Georgia, Indonesia is
                the second country after China that dumping plastic waste into
                the world’s oceans, as estimated 3.22 million metric tons of
                plastic waste is tossed annually into the ocean.
              </p>
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8 sm:py-20">
              <div className="max-w-lg mx-auto text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Get started today!
                </h1>
              </div>

              <form
                action=""
                onSubmit={handleLogin}
                className="max-w-md mx-auto mt-8 mb-0 space-y-4"
              >
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col-reverse p-4">
                  <p className="text-sm text-gray-500 my-1">
                    Don’t have an account?
                    <NavLink to="/register" className="underline">
                      Register
                    </NavLink>
                  </p>

                  <button
                    type="submit"
                    className="inline-block px-5 py-3 text-sm font-medium text-black bg-[#B66F04] bg-opacity-[53%] rounded-lg"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}
