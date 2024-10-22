'use client'
import React, { useState } from 'react';

const ManageProducts = () => {
  // Sample data to simulate products list
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      stock: 20,
      category: 'Electronics',
      imageUrl: 'https://th.bing.com/th/id/OIP.QJj4K-1ZrUY5O9C4MkIe0gHaHa?w=197&h=197&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 2,
      name: 'Stylish Jacket',
      price: 149.99,
      stock: 10,
      category: 'Clothing',
      imageUrl: 'https://th.bing.com/th/id/OIP.MPImESPJQDzXO_yKE21FXgHaJ4?w=155&h=207&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 199.99,
      stock: 5,
      category: 'Accessories',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSimFo9UJvXBHAG5OePx51XatFzMKMDxcLg&s',
    },
  ]);

  // Function to delete a product
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
    <div className="w-screen h-48 md:h-64 flex flex-col justify-center items-center bg-black">
    <p className="text-white font-normal text-5xl font-poppins">Manage Products</p>
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
        Manage Product
      </p>
    </div>
  </div>
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg mt-6 md:mt-12 font-poppins">
      <h1 className="md:text-4xl text-2xl font-medium text-center">Manage Your Products</h1>
      <p className="text-center text-gray-400 mt-2 mb-8 md:mb-16">
        Here you can view, edit, or delete the products you have added.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 font-bold text-gray-700 text-md border-b pb-3">
          <span>Image</span>
          <span>Name</span>
          <span>Price</span>
          <span>Stock</span>
          <span>Actions</span>
        </div>

        {/* Product Rows */}
        {products.map((product) => (
          <div key={product.id} className="grid grid-cols-5 gap-4 items-center border-b py-3">
            {/* Product Image */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-md"
            />

            {/* Product Name */}
            <span className="font-medium text-gray-900">{product.name}</span>

            {/* Product Price */}
            <span className="text-gray-600">${product.price.toFixed(2)}</span>

            {/* Product Stock */}
            <span className={`text-gray-600 ${product.stock === 0 ? 'text-red-600' : ''}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>

            {/* Actions: Edit & Delete */}
            <div className="flex space-x-4">
              <button className="text-[#2F6EB8] font-bold" onClick={() => alert('Edit Product')}>
                Edit
              </button>
              <button
                className="text-red-600 font-bold"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Add New Product Button */}
        <div className="text-right mt-8">
          <button className="bg-[#2F6EB8] text-white py-2 px-4 rounded-md font-bold">
            Add New Product
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ManageProducts;
