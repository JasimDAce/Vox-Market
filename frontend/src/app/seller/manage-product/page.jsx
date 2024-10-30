'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Search, Edit, Trash2, Plus, AlertCircle, ChevronUp, ChevronDown } from 'lucide-react'
import Navbar from '../Navbar'


export default function ManageProducts() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' })

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/p/getall`)
      setProducts(res.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
      toast.error('Failed to load products')
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/p/deletebyid/${id}`)
      toast.success('Product deleted successfully')
      fetchProducts()
      setIsDeleteModalOpen(false)
    } catch (error) {
      console.error('Failed to delete product:', error)
      toast.error('Failed to delete product')
    }
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortConfig.key === null) return 0
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]
    if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1
    if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1
    return 0
  })

  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return (
    <>
   
      <div className="w-screen h-48 md:h-64 flex flex-col justify-center items-center bg-[#E0FBE2]">
        <p className="text-black font-normal text-5xl font-poppins">Manage Products</p>
        <div className="mt-4 flex flex-row gap-1 justify-center items-center">
          <p className="text-black text-lg font-medium font-poppins">Seller</p>
          <button className="bg-[#E0FBE2] h-[18px]">
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
          <p className="text-black text-lg font-extralight font-poppins">
            Manage Product
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E0FBE2] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link href="./add-product">
            <button className="bg-[#2F6EB8] text-white py-2 px-4 rounded-md font-bold flex items-center">
              <Plus className="mr-2 h-5 w-5" /> Add New Product
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('name')}>
                  Product Name
                  {sortConfig.key === 'name' && (
                    sortConfig.direction === 'ascending' ? <ChevronUp className="inline ml-1" /> : <ChevronDown className="inline ml-1" />
                  )}
                </th>
                <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('category')}>
                  Category
                  {sortConfig.key === 'category' && (
                    sortConfig.direction === 'ascending' ? <ChevronUp className="inline ml-1" /> : <ChevronDown className="inline ml-1" />
                  )}
                </th>
                <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('price')}>
                  Price
                  {sortConfig.key === 'price' && (
                    sortConfig.direction === 'ascending' ? <ChevronUp className="inline ml-1" /> : <ChevronDown className="inline ml-1" />
                  )}
                </th>
                <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('stock')}>
                  Stock
                  {sortConfig.key === 'stock' && (
                    sortConfig.direction === 'ascending' ? <ChevronUp className="inline ml-1" /> : <ChevronDown className="inline ml-1" />
                  )}
                </th>
                <th className="py-3 px-6 text-left">Description</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {sortedProducts.map((product) => (
                <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img className="w-6 h-6 rounded-full" src={product.imageUrl} alt={product.name} />
                      </div>
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">{product.category}</td>
                  <td className="py-3 px-6 text-left">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <span className={`${
                      product.stock > 0 ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'
                    } py-1 px-3 rounded-full text-xs`}>
                      {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <p className="truncate max-w-xs" title={product.description}>
                      {product.description}
                    </p>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <Link href={`./update-product/${product._id}`}>
                        <button className="w-4 mr-2 transform hover:text-[#2F6EB8] hover:scale-110">
                          <Edit />
                        </button>
                      </Link>
                      <button
                        className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                        onClick={() => {
                          setProductToDelete(product)
                          setIsDeleteModalOpen(true)
                        }}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or add a new product.</p>
          </div>
        )}
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete {productToDelete.name}?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-md"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={() => deleteProduct(productToDelete._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}