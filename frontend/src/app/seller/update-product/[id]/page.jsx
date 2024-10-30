'use client'

import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ChevronRight, Package, DollarSign, Tag, ImageIcon, Save } from 'lucide-react'
import Link from 'next/link'

export default function UpdateProduct() {
  const { id } = useParams()
  const router = useRouter()
  const [imagePreview, setImagePreview] = useState(null)
  const [initialValues, setInitialValues] = useState({
    productName: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    image: null,
    imageUrl: ''
  })

  // Fetch product data
  const getProductData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/p/getbyid/${id}`)
      const product = res.data
      setInitialValues({
        productName: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        stock: product.stock,
        image: null,
        imageUrl: product.imageUrl
      })
      setImagePreview(product.imageUrl)
    } catch (error) {
      console.error("Error fetching product data:", error)
      toast.error("Failed to load product data")
    }
  }

  useEffect(() => {
    if (id) {
      getProductData()
    }
  }, [id])

  const validate = (values) => {
    const errors = {}
    if (!values.productName) errors.productName = 'Product Name is required'
    if (!values.price) errors.price = 'Price is required'
    if (!values.description) errors.description = 'Description is required'
    if (!values.category) errors.category = 'Category is required'
    if (!values.stock) errors.stock = 'Stock quantity is required'
    return errors
  }

  const uploadImageToCloudinary = async (imageFile) => {
    if (!imageFile) return null
    try {
      const fd = new FormData()
      fd.append('file', imageFile)
      fd.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET)
      fd.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        fd
      )
      return response.data.secure_url
    } catch (error) {
      console.error('Error uploading image:', error)
      throw error
    }
  }

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0]
    setFieldValue('image', file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let imageUrl = values.imageUrl
      if (values.image) {
        imageUrl = await uploadImageToCloudinary(values.image)
      }

      const updatedProduct = {
        name: values.productName,
        price: values.price,
        description: values.description,
        category: values.category,
        stock: values.stock,
        imageUrl: imageUrl
      }

      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/p/updatebyid/${id}`, updatedProduct)
      toast.success("Product Updated Successfully")
      router.push('/seller/manage-product')
    } catch (error) {
      console.error("Update failed:", error)
      toast.error("Failed to update product")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="w-full h-48 md:h-64 flex flex-col justify-center items-center bg-[#E0FBE2]">
        <h1 className="text-black font-normal text-5xl font-poppins">Update Product</h1>
        <div className="mt-4 flex flex-row gap-1 justify-center items-center">
          <Link href="/seller" className="text-black text-lg font-medium font-poppins hover:underline">
            Seller
          </Link>
          <ChevronRight className="h-5 w-5 text-black" />
          <p className="text-black text-lg font-extralight font-poppins">Update Product</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-6 md:mt-4 font-poppins">
     
        <p className="text-center text-gray-800 mb-10 text-xl font-normal">Update your product details below.</p>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="productName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2F6EB8] focus:ring focus:ring-[#2F6EB8] focus:ring-opacity-50 pl-10"
                      placeholder="Enter product name"
                    />
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <ErrorMessage name="productName" component="p" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>
                  <div className="relative">
                    <Field
                      type="number"
                      name="price"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2F6EB8] focus:ring focus:ring-[#2F6EB8] focus:ring-opacity-50 pl-10"
                      placeholder="Enter price"
                    />
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <ErrorMessage name="price" component="p" className="mt-1 text-sm text-red-600" />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2F6EB8] focus:ring focus:ring-[#2F6EB8] focus:ring-opacity-50"
                  placeholder="Enter product description"
                />
                <ErrorMessage name="description" component="p" className="mt-1 text-sm text-red-600" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="category"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2F6EB8] focus:ring focus:ring-[#2F6EB8] focus:ring-opacity-50 pl-10"
                      placeholder="Enter category"
                    />
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <ErrorMessage name="category" component="p" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                    Stock Quantity
                  </label>
                  <div className="relative">
                    <Field
                      type="number"
                      name="stock"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2F6EB8] focus:ring focus:ring-[#2F6EB8] focus:ring-opacity-50 pl-10"
                      placeholder="Enter stock quantity"
                    />
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <ErrorMessage name="stock" component="p" className="mt-1 text-sm text-red-600" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#2F6EB8] hover:text-[#265a94] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#2F6EB8]"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          className="sr-only"
                          onChange={(event) => handleImageChange(event, setFieldValue)}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              {imagePreview && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Image</label>
                  <img src={imagePreview} alt="Preview" className="max-w-full h-auto max-h-64 rounded-lg" />
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2F6EB8] hover:bg-[#265a94] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F6EB8]"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    <Save className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting ? 'Updating Product...' : 'Update Product'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}