'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Search, Edit, Trash2, Plus, AlertCircle, ChevronUp, ChevronDown, ChevronRight, X } from 'lucide-react'

export default function ManageProducts() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
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

  const handleProductClick = (product, event) => {
    // Prevent click when clicking on action buttons
    if (event.target.closest('button')) return
    
    setSelectedProduct(product)
    setIsDetailsModalOpen(true)
  }

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
      <div className="w-full h-[150px] md:h-[320px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-top" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-normal text-black font-poppins mb-4">
            Manage Product
          </h1>
          <div className="flex items-center gap-2">
            <Link href="/seller" className="text-black text-lg font-medium font-poppins hover:underline">
              Seller
            </Link>
            <ChevronRight className="h-5 w-5 text-black flex items-center" />
            <p className="text-black text-lg font-extralight font-poppins">
              Manage Product
            </p>
          </div>
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
                <tr 
                  key={product._id} 
                  className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => handleProductClick(product, e)}
                >
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

      {/* Delete Confirmation Modal */}
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

      {/* Product Details Modal */}
      {isDetailsModalOpen && selectedProduct && (
  <div className="fixed inset-0 z-50">
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/60" onClick={() => setIsDetailsModalOpen(false)} />
    
    {/* Modal Container */}
    <div className="relative h-full w-full overflow-y-auto pb-6 sm:pb-0">
      <div className="min-h-full w-full bg-white sm:min-h-0 sm:w-auto sm:max-w-4xl sm:mx-auto sm:my-8 sm:rounded-xl relative">
        {/* Mobile Header - Sticky */}
        <div className="sticky top-0 z-[60] bg-white border-b sm:hidden">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold text-gray-900">Product Details</h2>
            <button
              onClick={() => setIsDetailsModalOpen(false)}
              className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Desktop Close Button */}
        <button
          onClick={() => setIsDetailsModalOpen(false)}
          className="hidden sm:block absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-[60]"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column - Image */}
            <div className="space-y-4 sm:space-y-6">
              <div className="w-full bg-gray-100 rounded-xl overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Stock Status</p>
                  <span className={`
                    inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium
                    ${selectedProduct.stock > 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'}
                  `}>
                    {selectedProduct.stock > 0 
                      ? `${selectedProduct.stock} in stock` 
                      : 'Out of stock'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h2>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {selectedProduct.category}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Actions</h3>
                <div className="flex flex-col gap-3">
                  <Link 
                    href={`./update-product/${selectedProduct._id}`}
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg
                      bg-[#2F6EB8] text-white font-medium hover:bg-[#2F6EB8]/90 
                      transition-colors duration-200 w-full"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Product
                  </Link>
                  <button
                    onClick={() => {
                      setIsDetailsModalOpen(false)
                      setProductToDelete(selectedProduct)
                      setIsDeleteModalOpen(true)
                    }}
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg
                      bg-white text-red-600 font-medium border-2 border-red-600
                      hover:bg-red-50 transition-colors duration-200 w-full"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Product
                  </button>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Product ID</p>
                    <p className="text-xs sm:text-sm font-mono text-gray-700 break-all">
                      {selectedProduct._id}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      {new Date(selectedProduct.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  )
}