"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "make it longer")
    .max(50, "too long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
  password: Yup.string()
    .required("password is required")
    .matches(/[a-z]/, "must include a lower case")
    .matches(/[A-Z]/, "must include an upper case")
    .matches(/[0-9]/, "must include a number")
    .matches(/\w/, "must include a special character"),
  confirmPassword: Yup.string()
    .label("confirm password")
    .required("confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const signUp = () => {
  const router = useRouter();
  const signUp = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit(values, { resetForm, setSubmitting }) {
      console.log(values);
      axios
        .post("http://localhost:5001/user/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("user added successfully");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.code === 11000) {
            toast.error("Email already exists");
          }
          setSubmitting(false);
        });
    },
    validationSchema: signUpSchema,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center bg-blue-950"
    >
      <div className="mt-4 w-[70vh] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <img
          className="rounded-xl"
          src="https://media.istockphoto.com/id/1390831094/photo/hand-press-the-virtual-screen-enter-the-username-and-password-to-log-in-online-security-system.jpg?s=612x612&w=0&k=20&c=X-ZN1yK4-GtZM9cTNNGV5rkW8tFx_2XB2EOV9_6L-uE="
          alt=""
        />
        <div className="p-4 sm:p-7">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="/sign-in"
              >
                Sign in here
              </a>
            </p>
          </motion.div>
          <div className="mt-5">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <svg
                className="w-4 h-auto"
                width={46}
                height={47}
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign up with Google
            </motion.button>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>
            <form onSubmit={signUp.handleSubmit}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="grid gap-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="name"
                      id="name"
                      onChange={signUp.handleChange}
                      value={signUp.values.name}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pe-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4c-.535 0-1 .465-1 1v4c0 .535.465 1 1 1s1-.465 1-1V5c0-.535-.465-1-1-1zm0 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </div>
                  </div>
                  {signUp.touched.name && signUp.errors.name ? (
                    <p className="text-xs text-red-600 mt-2" id="email-error">
                      {signUp.errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      onChange={signUp.handleChange}
                      value={signUp.values.email}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pe-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4c-.535 0-1 .465-1 1v4c0 .535.465 1 1 1s1-.465 1-1V5c0-.535-.465-1-1-1zm0 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </div>
                  </div>
                  {signUp.touched.email && signUp.errors.email ? (
                    <p className="text-xs text-red-600 mt-2" id="email-error">
                      {signUp.errors.email}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      onChange={signUp.handleChange}
                      value={signUp.values.password}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="password-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pe-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4c-.535 0-1 .465-1 1v4c0 .535.465 1 1 1s1-.465 1-1V5c0-.535-.465-1-1-1zm0 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </div>
                  </div>
                  {signUp.touched.password && signUp.errors.password ? (
                    <p className="text-xs text-red-600 mt-2" id="password-error">
                      {signUp.errors.password}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      onChange={signUp.handleChange}
                      value={signUp.values.confirmPassword}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="confirmPassword-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pe-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4c-.535 0-1 .465-1 1v4c0 .535.465 1 1 1s1-.465 1-1V5c0-.535-.465-1-1-1zm0 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </div>
                  </div>
                  {signUp.touched.confirmPassword &&
                  signUp.errors.confirmPassword ? (
                    <p
                      className="text-xs text-red-600 mt-2"
                      id="confirmPassword-error"
                    >
                      {signUp.errors.confirmPassword}
                    </p>
                  ) : null}
                </div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 rounded-md border border-transparent text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:focus:ring-offset-neutral-900"
                >
                  Sign Up
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default signUp;
