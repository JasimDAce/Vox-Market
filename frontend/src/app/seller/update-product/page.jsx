'use client'
import React, { useState } from 'react';

const UpdateProduct = ({ existingProduct }) => {
  const [formValues, setFormValues] = useState({
    name: existingProduct.name,
    price: existingProduct.price,
    stock: existingProduct.stock,
    category: existingProduct.category,
    imageUrl: existingProduct.imageUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update product with formValues
    alert('Product updated successfully');
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

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Name */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-md text-gray-900">Product Name</label>
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="text"
            name="name"
            placeholder="Product Name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>

        {/* Product Price */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-md text-gray-900">Product Price</label>
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="number"
            name="price"
            placeholder="Price"
            value={formValues.price}
            onChange={handleChange}
          />
        </div>

        {/* Product Stock */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-md text-gray-900">Stock</label>
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="number"
            name="stock"
            placeholder="Available Stock"
            value={formValues.stock}
            onChange={handleChange}
          />
        </div>

        {/* Product Category */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-md text-gray-900">Category</label>
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="text"
            name="category"
            placeholder="Product Category"
            value={formValues.category}
            onChange={handleChange}
          />
        </div>

        {/* Product Image URL */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-2 font-medium text-md text-gray-900">Product Image URL</label>
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formValues.imageUrl}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-[#2F6EB8] text-white p-2 rounded-md font-bold"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

// Sample data for existing product (you can replace it with actual data from API)
const existingProduct = {
  name: 'Wireless Headphones',
  price: 99.99,
  stock: 20,
  category: 'Electronics',
  imageUrl: 'https://th.bing.com/th/id/OIP.QJj4K-1ZrUY5O9C4MkIe0gHaHa?w=197&h=197&c=7&r=0&o=5&dpr=2&pid=1.7',
};

export default function App() {
  return <UpdateProduct existingProduct={existingProduct} />;
}
