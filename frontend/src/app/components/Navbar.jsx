'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingCart, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={80} height={40} />
        <div className="relative">
          <input
            type="text"
            className="w-96 pl-10 pr-4 py-2 rounded-sm text-black"
            placeholder="Search for products, brands and more"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>
      </div>
      <nav className="flex items-center space-x-6">
        <button className="bg-transparent hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Login
        </button>
        <Link href="#" className="flex items-center hover:underline">
          Become a Seller
        </Link>
        <div className="relative group">
          <button className="flex items-center hover:underline">
            More <ChevronDown className="h-4 w-4 ml-1" />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Notification Preferences
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              24x7 Customer Care
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Advertise
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Download App
            </Link>
          </div>
        </div>
        <Link href="#" className="flex items-center hover:underline">
          <ShoppingCart className="h-5 w-5 mr-1" />
          Cart
        </Link>
      </nav>
    </div>
  </header>
  )
}