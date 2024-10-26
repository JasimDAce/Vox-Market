 'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ChevronRight } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'


const ProductDetails = () => {
  const { id } = useParams();
  
  const [quantity, setQuantity] = useState(1)
  const [isFloating, setIsFloating] = useState(false)
  const [productData, setProductData] = useState(null)

  const router = useRouter();
  
    // Function to fetch the product data
    const getProductData = async () => {
      if (!id) return; // Check if `id` exists before fetching
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/p/getbyid/${id}`)
        console.log(res.data)
        setProductData(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error)
        toast.error("Failed to load product data")
      }
    }
  
    useEffect(() => {
      getProductData()
    }, [id]) 
  
 

  useEffect(() => {
    const floatInterval = setInterval(() => {
      setIsFloating((prev) => !prev)
    }, 1500)

    return () => clearInterval(floatInterval)
  }, [])

  if (!productData) {
    return <div>Loading...</div>;
  }

  const reviews = [
    { id: 1, author: 'Stella N.', rating: 5, comment: 'This watch is out of this world! Literally!' },
    { id: 2, author: 'Orion M.', rating: 4, comment: 'Great features, but the time-warp can be a bit disorienting.' },
    { id: 3, author: 'Luna K.', rating: 5, comment: 'The holographic display is simply mesmerizing.' },
  ]

  const similarProducts = [
    { id: 1, name: 'Nebula Smartwatch', price: 279.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 2, name: 'Galaxy Fitness Tracker', price: 199.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 3, name: 'Astro Smart Ring', price: 159.99, image: '/placeholder.svg?height=200&width=200' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-8">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className={`relative transition-transform duration-1000 ease-in-out ${isFloating ? 'transform translate-y-4' : ''}`}>
                <Image
                  src={productData.imageUrl}
                  alt={productData.name}
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {productData.name}
            </h1>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
              ))}
              <span className="text-gray-400">(42 reviews)</span>
            </div>
            <p className="text-xl text-gray-300">
              Experience the future on your wrist with our Cosmic Smartwatch. Navigate through time and space with unparalleled style and functionality.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-indigo-300">$299.99</span>
              <span className="text-lg text-gray-500 line-through">₹{productData.price}</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">25% OFF</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-indigo-300">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Holographic display</li>
                <li>Quantum processor</li>
                <li>Interstellar communication</li>
                <li>Time-warp resistant</li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-2xl font-bold">{quantity}</span>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Add to Cart
              </button>
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-indigo-300">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 space-y-2 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-indigo-300">{review.author}</span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-indigo-300">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProducts.map((product) => (
              <div key={product.id} className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 backdrop-blur-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold text-indigo-300">{product.name}</h3>
                  <p className="text-gray-300">${product.price.toFixed(2)}</p>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
 

export default ProductDetails