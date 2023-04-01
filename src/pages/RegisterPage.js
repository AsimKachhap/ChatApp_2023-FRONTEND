import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-gradient-to-tr from-purple-500 to-pink-500 h-screen w-screen flex items-center justify-center">
      <div className="   flex flex-row justify-center  h-[500px] w-[900px]">
        <div className="flex-1 bg-white py-4 px-8 ">
          <form className="py-4 px-8">
            <h1 className="text-2xl font-semibold">Start your Journey</h1>
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
              </div>

              <div className="pb-4">
                <label className="block pb-2 text-sm" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="p-2 border-2 border-gray-500 rounded-md w-2/3 focus:border-rose-500 focus:ring-rose-500"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your Password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
              </div>
              <button
                className="block mt-4 text-white bg-rose-500 py-3 px-8 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <Link to="/login" className="text-blue-600 mx-auto underline ">
            Already have an account Login
          </Link>
        </div>
        <div className="flex-1 bg-rose-300 opacity-100 text-center p-8 ">
          <p className="text-3xl text-gray-700 font-bold">
            Start using <br />
            <span className="text-4xl font-extrabold text-emerald-500 ">
              chat
            </span>
            <span className="text-4xl font-thin text-teal-500 tracking-wider">
              book
            </span>
          </p>
          <p className="mt-24 text-2xl">
            Create an account to use the world's best chat app
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
