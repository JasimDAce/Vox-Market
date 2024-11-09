'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react"
import useAppContext from '@/context/AppContext'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { logout, loggedIn } = useAppContext();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className="bg-[#a07255] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden" onClick={toggleSidebar} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button><Link href='/'>
          <Image src="/images/vox-logo.png" alt="Logo" width={80} height={40} /></Link>
          <div className="relative hidden lg:block">
            <input
              type="text"
              className="w-96 pl-10 pr-4 py-2 rounded-sm text-black"
              placeholder="Search for products, brands and more"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          <button
            href="/login"
          className="bg-transparent hover:bg-[#8a6246] text-white font-semibold py-2 px-4 rounded transition duration-300">
          {!loggedIn ? (
                        <Link href="/login">Login Now</Link>
                      ) : (
                        <button onClick={logout} className="border p-4">
                          Logout
                        </button>
                      )}
          </button>
          <Link href="/seller-login" className="flex items-center hover:underline">
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
        <button className="lg:hidden" aria-label="Cart">
          <ShoppingCart className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#a07255] transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex justify-between items-center p-4 border-b border-[#8a6246]">
          <Image src="/logo.png" alt="Logo" width={80} height={40} />
          <button onClick={toggleSidebar} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-sm text-black mb-4"
            placeholder="Search for products, brands and more"
          />
          <nav className="space-y-4">
            <button className="w-full bg-[#8a6246] hover:bg-[#75533b] text-white font-semibold py-2 px-4 rounded transition duration-300">
              Login
            </button>
            <Link href="#" className="block hover:underline">
              Become a Seller
            </Link>
            <div className="space-y-2">
              <button className="flex items-center justify-between w-full hover:underline">
                More <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 space-y-2">
                <Link href="#" className="block text-sm hover:underline">
                  Notification Preferences
                </Link>
                <Link href="#" className="block text-sm hover:underline">
                  24x7 Customer Care
                </Link>
                <Link href="#" className="block text-sm hover:underline">
                  Advertise
                </Link>
                <Link href="#" className="block text-sm hover:underline">
                  Download App
                </Link>
              </div>
            </div>
            <Link href="#" className="flex items-center hover:underline">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </header>
  )
}