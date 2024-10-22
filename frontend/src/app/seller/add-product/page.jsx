'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const AddProduct = () => {
  const validationSchema = Yup.object({
    productName: Yup.string().required('Product Name is required'),
    price: Yup.number().positive('Price must be positive').required('Price is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    stock: Yup.number().integer('Stock must be an integer').required('Stock is required'),
    imageUrl: Yup.string().url('Invalid URL format').required('Product Image URL is required'),
  });

  const initialValues = {
    productName: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    imageUrl: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
    alert('Product added successfully!');
  };
  return (
    <>
    <div className="w-screen h-48 md:h-64 flex flex-col justify-center items-center bg-black">
        <p className="text-white font-normal text-5xl font-poppins">Add Product</p>
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
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg mt-6 md:mt-10 font-poppins">
      <h1 className="md:text-4xl text-2xl font-medium text-center">Add Your Product</h1>
      <p className="text-center text-gray-400 mt-2 mb-8 md:mb-16">
        Fill the details to add your product to the store.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values, touched, errors, isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-md text-gray-900">Product Name</label>
              <input
                className="border border-gray-300 p-2 rounded-md"
                type="text"
                name="productName"
                placeholder="Enter product name"
                onChange={handleChange}
                value={values.productName}
              />
              {touched.productName && errors.productName && (
                <p className="text-xs text-red-600 mt-2">{errors.productName}</p>
              )}
            </div>

            {/* Price */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-md text-gray-900">Price</label>
              <input
                className="border border-gray-300 p-2 rounded-md"
                type="number"
                name="price"
                placeholder="Enter price"
                onChange={handleChange}
                value={values.price}
              />
              {touched.price && errors.price && (
                <p className="text-xs text-red-600 mt-2">{errors.price}</p>
              )}
            </div>

            {/* Description */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 font-medium text-md text-gray-900">Description</label>
              <textarea
                className="border border-gray-300 p-2 rounded-md"
                name="description"
                placeholder="Enter product description"
                rows="4"
                onChange={handleChange}
                value={values.description}
              />
              {touched.description && errors.description && (
                <p className="text-xs text-red-600 mt-2">{errors.description}</p>
              )}
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-md text-gray-900">Category</label>
              <Field
                name="category"
                as="select"
                className="border border-gray-300 p-2 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
              </Field>
              <ErrorMessage name="category" component="p" className="text-xs text-red-600 mt-2" />
            </div>

            {/* Stock */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-md text-gray-900">Stock</label>
              <input
                className="border border-gray-300 p-2 rounded-md"
                type="number"
                name="stock"
                placeholder="Enter stock quantity"
                onChange={handleChange}
                value={values.stock}
              />
              {touched.stock && errors.stock && (
                <p className="text-xs text-red-600 mt-2">{errors.stock}</p>
              )}
            </div>

            {/* Product Image URL */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 font-medium text-md text-gray-900">Product Image URL</label>
              <input
                className="border border-gray-300 p-2 rounded-md"
                type="url"
                name="imageUrl"
                placeholder="Enter product image URL"
                onChange={handleChange}
                value={values.imageUrl}
              />
              {touched.imageUrl && errors.imageUrl && (
                <p className="text-xs text-red-600 mt-2">{errors.imageUrl}</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center md:col-span-2">
              <input type="checkbox" className="mr-2" />
              <span>
                I agree to the{' '}
                <a href="#" className="text-[#2F6EB8]">
                  terms and conditions
                </a>
              </span>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#2F6EB8] text-white p-2 rounded-md font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Adding Product...' : 'Add Product'}
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
