import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#f3f3f3] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">VOX Market</span>
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
              <button className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Add Product
              </button>
              <button className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Manage Products
              </button>
              <button className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Manage Orders
              </button>
              <div className="ml-3 relative">
                <div>
                  <button 
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
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
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
            <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Add Product
            </a>
            <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Manage Products
            </a>
            <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Manage Orders
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-300">
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
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">
                Profile
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">
                Settings
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}