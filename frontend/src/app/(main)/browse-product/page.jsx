import Image from 'next/image'
import React from 'react'

const BrowseProduct = () => {
  return (
    <div>
    <div className="w-screen h-48 md:h-64 flex flex-col justify-center items-center bg-black">
      <p className="text-white font-normal text-5xl font-poppins">Browse Products</p>
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
          Browse Products
        </p>
      </div>
    </div>
  
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg mt-6 md:mt-12 font-poppins">
      <h1 className="md:text-4xl text-2xl font-medium text-center">
        Discover Our Products
      </h1>
      <p className="text-center text-gray-400 mt-2 mb-8 md:mb-16">
        Explore a wide range of products tailored for you. Enjoy the best offers and stay connected with our latest updates.
      </p>
  
      {/* Here you can add product cards or other relevant content for browsing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins ">
        {/* Example product card */}
        <div className=" bg-[#F4F5F7]">
          <Image src="/images/img1.svg" alt="Product Name" 
          height={250}
          width={500} 
          quality={100}/>
          <h2 className="text-2xl font-medium pt-4 text-[#3A3A3A] pl-4">Syltherine</h2>
          <p className="text-md font-medium text-[#898989] pl-4 mt-2">Stylish cafe chair</p>
          <p className=" mt-2 text-[#3A3A3A] pl-4 text-xl mb-7 font-medium">₹25,000</p>
         
        </div>
        {/* Add more product cards here */}
        <div className=" bg-[#F4F5F7]">
          <Image src="/images/img1.svg" alt="Product Name" 
          height={250}
          width={500} 
          quality={100}/>
         <h2 className="text-2xl font-medium pt-4 text-[#3A3A3A] pl-4">Syltherine</h2>
          <p className="text-md font-medium text-[#898989] pl-4 mt-2">Stylish cafe chair</p>
          <p className=" mt-2 text-[#3A3A3A] pl-4 text-xl mb-7 font-medium">₹25,000</p>
         
        </div>
        <div className=" bg-[#F4F5F7]">
          <Image src="/images/img1.svg" alt="Product Name" 
          height={250}
          width={500} 
          quality={100}/>
         <h2 className="text-2xl font-medium pt-4 text-[#3A3A3A] pl-4">Syltherine</h2>
          <p className="text-md font-medium text-[#898989] pl-4 mt-2">Stylish cafe chair</p>
          <p className=" mt-2 text-[#3A3A3A] pl-4 text-xl mb-7 font-medium">₹25,000</p>
         
        </div>
        <div className=" bg-[#F4F5F7]">
          <Image src="/images/img1.svg" alt="Product Name" 
          height={250}
          width={500} 
          quality={100}/>
          <h2 className="text-2xl font-medium pt-4 text-[#3A3A3A] pl-4">Syltherine</h2>
          <p className="text-md font-medium text-[#898989] pl-4 mt-2">Stylish cafe chair</p>
          <p className=" mt-2 text-[#3A3A3A] pl-4 text-xl mb-7 font-medium">₹25,000</p>
         
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default BrowseProduct