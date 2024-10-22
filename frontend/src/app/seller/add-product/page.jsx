"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct = () => {
  const router = useRouter();

  const initialValues = {
    productName: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    images: "", // You can use a file input for image upload
  };

  const validate = (values) => {
    const errors = {};
    if (!values.productName) {
      errors.productName = "Product Name is required";
    }
    if (!values.price) {
      errors.price = "Price is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.category) {
      errors.category = "Category is required";
    }
    if (!values.stock) {
      errors.stock = "Stock quantity is required";
    }
    return errors;
  };

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    const formData = {
      name: values.productName, // Mapping productName to name
      price: values.price,
      description: values.description,
      category: values.category,
      stock: values.stock,
      imageUrl: values.images, // Directly using the image URL from the form input
    };
  
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/p/addProduct`, formData)
      .then((response) => {
        console.log(response.status);
        resetForm();
        toast.success('Product Added Successfully');
        router.push('/'); // Redirect to homepage or desired page
      })
      .catch((err) => {
        console.error(err);
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="w-screen h-48 md:h-64 flex flex-col justify-center items-center bg-black">
        <p className="text-white font-normal text-5xl font-poppins">
          Add Product
        </p>
        <div className="mt-4 flex flex-row gap-1 justify-center items-center">
          <p className="text-white text-lg font-medium font-poppins">Seller</p>
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
            Add Product
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg mt-6 md:mt-12 font-poppins">
        <h1 className="md:text-4xl text-2xl font-medium text-center">
          Add Your Product
        </h1>
        <p className="text-center text-gray-400 mt-2 mb-8 md:mb-16">
          Fill the details to add your product to the store.
        </p>

        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-md text-gray-900">
                  Product Name
                </label>
                <Field
                  className="border border-gray-300 p-2 rounded-md"
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                />
                <ErrorMessage
                  name="productName"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              {/* Price */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-md text-gray-900">
                  Price
                </label>
                <Field
                  className="border border-gray-300 p-2 rounded-md"
                  type="number"
                  name="price"
                  placeholder="Product Price"
                />
                <ErrorMessage
                  name="price"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col md:col-span-2">
                <label className="mb-2 font-medium text-md text-gray-900">
                  Description
                </label>
                <Field
                  className="border border-gray-300 p-2 rounded-md"
                  as="textarea"
                  name="description"
                  placeholder="Product Description"
                />
                <ErrorMessage
                  name="description"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-md text-gray-900">
                  Category
                </label>
                <Field
                  className="border border-gray-300 p-2 rounded-md"
                  type="text"
                  name="category"
                  placeholder="Product Category"
                />
                <ErrorMessage
                  name="category"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              {/* Stock */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-md text-gray-900">
                  Stock Quantity
                </label>
                <Field
                  className="border border-gray-300 p-2 rounded-md"
                  type="number"
                  name="stock"
                  placeholder="Available Stock"
                />
                <ErrorMessage
                  name="stock"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              {/* Images */}
              {/* This is for upload image from computer */}
              {/* <div className="flex flex-col md:col-span-2">
                <label className="mb-2 font-medium text-md text-gray-900">
                  Upload Images
                </label>
                <Field
                  className="border border-gray-300 p-2 rounded-md"
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("images", event.currentTarget.files);
                  }}
                  multiple
                />
                <ErrorMessage
                  name="images"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div> */}

              <div className="flex flex-col md:col-span-2">
                <label className="mb-2 font-medium text-md text-gray-900">
                  Image URL
                </label>
                <Field
                  className="border border-gray-300 p-2 rounded-md"
                  type="text"
                  name="images" // This will hold the URL of the image
                  placeholder="Enter image URL"
                />
                <ErrorMessage
                  name="images"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  className="w-full bg-[#2F6EB8] text-white p-2 rounded-md font-bold"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Adding Product..." : "Add Product"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddProduct;
