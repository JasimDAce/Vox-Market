'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Package, PlusCircle, Menu, User, Settings, LogOut } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">VOX Market</span>
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
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
              <button className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Product
              </button>
              <button className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <Package className="mr-2 h-4 w-4" />
                Manage Products
              </button>
              <button className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Manage Orders
              </button>
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
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" 
                    role="menu" 
                    aria-orientation="vertical" 
                    aria-labelledby="user-menu"
                  >
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-gray-500">john@example.com</p>
                    </div>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <User className="mr-2 h-4 w-4" /> Profile
                    </a>
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              VOX Market
            </Link>
            <a href="#" className="text-black hover:bg-gray-200 flex items-center px-3 py-2 rounded-md text-base font-medium">
              <PlusCircle className="mr-2 h-5 w-5" /> Add Product
            </a>
            <a href="#" className="text-black hover:bg-gray-200 flex items-center px-3 py-2 rounded-md text-base font-medium">
              <Package className="mr-2 h-5 w-5" /> Manage Products
            </a>
            <a href="#" className="text-black hover:bg-gray-200 flex items-center px-3 py-2 rounded-md text-base font-medium">
              <ShoppingBag className="mr-2 h-5 w-5" /> Manage Orders
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Image
                  className="h-10 w-10 rounded-full"
                  src="/placeholder.svg?height=40&width=40"
                  alt="User avatar"
                  width={40}
                  height={40}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-black">John Doe</div>
                <div className="text-sm font-medium leading-none text-gray-600">john@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">
                <User className="mr-2 h-5 w-5" /> Profile
              </a>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">
                <Settings className="mr-2 h-5 w-5" /> Settings
              </a>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">
                <LogOut className="mr-2 h-5 w-5" /> Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}