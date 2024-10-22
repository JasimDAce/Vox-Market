'use client'
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const UpdateProduct = ({ existingProduct }) => {
    const { id } = useParams(); // Extracts the product ID from the URL
    const [initialValues, setInitialValues] = useState({
      productName: '',
      price: '',
      description: '',
      category: '',
      stock: '',
      images: '',
    });
    const router = useRouter();
  
    // Function to fetch the product data
    const getUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/p/getbyid/${id}`);
        console.log(res.data);
        setInitialValues(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        toast.error("Failed to load product data");
      }
    };
  
    useEffect(() => {
      getUserData();
    }, [id]);
  
    const submitForm = async (values, { setSubmitting }) => {
      try {
        const result = await axios.put(`http://localhost:5000/p/updatebyid/${id}`, values);
        console.log(result.status);
        toast.success("Updated Successfully");
        router.back(); // Redirects back to the previous page
      } catch (error) {
        console.error("Update failed:", error);
        toast.error("Not Updated");
        setSubmitting(false);
      }
    };
  
  return (
    <>
    <div className="w-screen h-48 md:h-64 flex flex-col justify-center items-center bg-black">
        <p className="text-white font-normal text-5xl font-poppins">Update Product</p>
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
            Update Product
          </p>
        </div>
      </div>
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg mt-6 md:mt-12 font-poppins">
      <h1 className="md:text-4xl text-2xl font-medium text-center">Update Product</h1>
      <p className="text-center text-gray-400 mt-2 mb-8 md:mb-16">
        Update your product details below.
      </p>

      <Formik
        initialValues={initialValues}
        enableReinitialize // Allows reinitializing the form when initialValues change
        onSubmit={submitForm}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-md text-gray-900">Product Name</label>
              <Field
                className="border border-gray-300 p-2 rounded-md"
                type="text"
                name="productName"
                placeholder="Product Name"
              />
              <ErrorMessage name="productName" component="div" className="text-red-500" />
            </div>

            {/* Product Price */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-md text-gray-900">Product Price</label>
              <Field
                className="border border-gray-300 p-2 rounded-md"
                type="number"
                name="price"
                placeholder="Price"
              />
              <ErrorMessage name="price" component="div" className="text-red-500" />
            </div>

            {/* Product Stock */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-md text-gray-900">Stock</label>
              <Field
                className="border border-gray-300 p-2 rounded-md"
                type="number"
                name="stock"
                placeholder="Available Stock"
              />
              <ErrorMessage name="stock" component="div" className="text-red-500" />
            </div>

            {/* Product Category */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-md text-gray-900">Category</label>
              <Field
                className="border border-gray-300 p-2 rounded-md"
                type="text"
                name="category"
                placeholder="Product Category"
              />
              <ErrorMessage name="category" component="div" className="text-red-500" />
            </div>

            {/* Product Image URL */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 font-medium text-md text-gray-900">Product Image URL</label>
              <Field
                className="border border-gray-300 p-2 rounded-md"
                type="text"
                name="images"
                placeholder="Image URL"
              />
              <ErrorMessage name="images" component="div" className="text-red-500" />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2F6EB8] text-white p-2 rounded-md font-bold"
              >
                Update Product
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </>
  );
};

// Sample data for existing product (you can replace it with actual data from API)
// const existingProduct = {
//   name: 'Wireless Headphones',
//   price: 99.99,
//   stock: 20,
//   category: 'Electronics',
//   imageUrl: 'https://th.bing.com/th/id/OIP.QJj4K-1ZrUY5O9C4MkIe0gHaHa?w=197&h=197&c=7&r=0&o=5&dpr=2&pid=1.7',
// };

export default function App() {
  return <UpdateProduct  />;
}

//existingProduct={existingProduct}
