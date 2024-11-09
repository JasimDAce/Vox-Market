'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Package, PlusCircle, Menu, User, Settings, LogOut, X } from 'lucide-react'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const sidebarRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false)
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-[#a07255]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
            <Image src="/images/vox-logo.png" alt="Logo" width={80} height={40} />
              <span className="sr-only">VOX Market</span>
             
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  VOX Market
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href='/seller/add-product' className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Product
              </Link>
              <Link href="/seller/manage-product" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <Package className="mr-2 h-4 w-4" />
                Manage Products
              </Link>
              <Link href='/seller/manage-order' className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Manage Orders
              </Link>
              <div className="ml-3 relative">
                <div>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="max-w-xs bg-gray-300 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
                    id="user-menu" 
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="/placeholder.svg?height=32&width=32"
                      alt="User avatar"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
                {isDropdownOpen && (
                  <div 
                    ref={dropdownRef}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" 
                    role="menu" 
                    aria-orientation="vertical" 
                    aria-labelledby="user-menu"
                  >
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-gray-500">john@example.com</p>
                    </div>
                    <Link href="/seller/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <User className="mr-2 h-4 w-4" /> Profile
                    </Link>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <LogOut className="mr-2 h-4 w-4" /> Log out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div 
        className={`fixed inset-0 flex z-40 md:hidden ${isSidebarOpen ? '' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
      >
        <div 
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-in-out duration-300 ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        <div 
          ref={sidebarRef}
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-white transition ease-in-out duration-300 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="absolute top-0 right-0 pt-2 pr-2">
            <button
              className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-gray-600" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center px-4 pt-6">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">VOX Market</span>
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
          </div>
          <nav className="mt-5 px-2 space-y-1">
            <Link href="/" className="text-black hover:bg-gray-200 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              VOX Market
            </Link>
            <Link href="/seller/add-product" className="text-black hover:bg-gray-200 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <PlusCircle className="mr-4 h-6 w-6" />
              Add Product
            </Link>
            <Link href="/seller/manage-product" className="text-black hover:bg-gray-200 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <Package className="mr-4 h-6 w-6" />
              Manage Products
            </Link>
            <Link href="/seller/manage-order" className="text-black hover:bg-gray-200 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <ShoppingBag className="mr-4 h-6 w-6" />
              Manage Orders
            </Link>
          </nav>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <Image
                    className="inline-block h-10 w-10 rounded-full"
                    src="/placeholder.svg?height=40&width=40"
                    alt="User avatar"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">John Doe</p>
                  <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}