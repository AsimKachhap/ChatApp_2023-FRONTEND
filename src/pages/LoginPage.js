import React from "react";
import { useFormik } from "formik";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-gradient-to-tr from-purple-500 to-pink-500 h-screen w-screen flex items-center justify-center">
      <div className="   flex flex-row justify-center  h-[500px] w-[900px]">
        <div className="flex-1 bg-white ">
          <form className="py-4 px-8">
            <h1 className="text-3xl text-black font-bold  ">
              hey, Hello <br /> Welcome back
            </h1>
            <p className="text-neutral-500 text-[20px]">
              Login in to use the World's{" "}
              <span className=" text-emerald-500 font-semibold ">best </span>
              chatApp.
            </p>

            <div className="mt-6">
              <div className="pb-4">
                <label className="block pb-2 text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-2 border-2 border-gray-500 rounded-md w-2/3 focus:border-rose-500 focus:ring-rose-500"
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>

              <div className="pb-4">
                <label className="block pb-2 text-sm" htmlFor="password">
                  Password
                </label>
                <input
                  className="p-2 border-2 border-gray-500 rounded-md w-2/3 focus:border-rose-500 focus:ring-rose-500"
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <button
                  className="block mt-4 text-white bg-rose-500 py-3 px-8 rounded-md"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-1 bg-rose-500 opacity-80  ">Hello</div>
      </div>
    </div>
  );
};

export default LoginPage;
