"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from "yup";
import useAppContext from "@/context/AppContext";


const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("email is required"),
  password: Yup.string()
    .required("password is required")
});

const Login = () => {
  const { setLoggedIn } = useAppContext();

  const router = useRouter();
  const signUp = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values, { resetForm, setSubmitting }) {
      console.log(values);
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/u/authenticate`, values,{withCredentials: true})
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("Loggedin successfully");
      
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("token", response.data.token);
          setLoggedIn(true);
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
    <div>
      <div className="w-screen h-48 md:h-64 flex flex-col justify-center items-center bg-black">
        <p className="text-white font-normal text-5xl font-poppins">Login</p>
        <div className="mt-4 flex flex-row gap-1 justify-center items-center">
          <p className="text-white text-lg font-medium font-poppins">Home</p>
          <button className="bg-white h-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"
                className="font-medium"
              />
            </svg>
          </button>
          <p className="text-white text-lg font-extralight font-poppins">
            Login
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg mt-6 md:mt-12 font-poppins">
        <h1 className="md:text-4xl text-2xl font-medium text-center">
          Login to Your Account
        </h1>
        <p className="text-center text-gray-400  mt-2 mb-8 md:mb-16">
          Enter your details to access your account and explore the benefits.
        </p>

        <form onSubmit={signUp.handleSubmit} className="flex flex-col gap-6 ">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-md text-gray-900">
              Email Address
            </label>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              onChange={signUp.handleChange}
              value={signUp.values.email}
            />
            {signUp.touched.email && (
              <p className="text-xs text-red-600 mt-2" id="email-error">
                {signUp.errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-md text-gray-900">
              Password
            </label>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="password"
              name="password"
              placeholder="********"
              onChange={signUp.handleChange}
              value={signUp.values.password}
            />
            {signUp.touched.password && (
              <p className="text-xs text-red-600 mt-2" id="password-error">
                {signUp.errors.password}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <button className="w-full bg-[#2F6EB8] text-white p-2 rounded-md font-bold">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
