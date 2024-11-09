import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "./components/Navbar"

const categories = [
  { name: "Electronics", image: "/category-electronics.jpg" },
  { name: "Fashion", image: "/category-fashion.jpg" },
  { name: "Home", image: "/category-home.jpg" },
  { name: "Beauty", image: "/category-beauty.jpg" },
  { name: "Sports", image: "/category-sports.jpg" },
  { name: "Books", image: "/category-books.jpg" },
]

const products = [
  { id: 1, name: "Wireless Earbuds", price: 79.99, image: "/product-1.jpg", rating: 4.5 },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/product-2.jpg", rating: 4.2 },
  { id: 3, name: "Laptop", price: 999.99, image: "/product-3.jpg", rating: 4.8 },
  { id: 4, name: "Smartphone", price: 699.99, image: "/product-4.jpg", rating: 4.6 },
  { id: 5, name: "Bluetooth Speaker", price: 59.99, image: "/product-5.jpg", rating: 4.3 },
  { id: 6, name: "Tablet", price: 349.99, image: "/product-6.jpg", rating: 4.7 },
  { id: 7, name: "Headphones", price: 129.99, image: "/product-7.jpg", rating: 4.4 },
  { id: 8, name: "Camera", price: 549.99, image: "/product-8.jpg", rating: 4.9 },
]

const hotDeals = [
  { id: 1, name: "Summer Sale", discount: "50% OFF", image: "/deal-1.jpg" },
  { id: 2, name: "New Arrivals", discount: "30% OFF", image: "/deal-2.jpg" },
  { id: 3, name: "Clearance", discount: "Up to 70% OFF", image: "/deal-3.jpg" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
     <Navbar/>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <Image src={category.image} alt={category.name} width={64} height={64} className="object-cover" />
                </div>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/hero-image.jpg"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-4">Summer Sale</h2>
              <p className="text-xl mb-6">Up to 50% off on selected items</p>
              <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
                <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-32 object-cover mb-4 rounded" />
                <h3 className="font-semibold mb-1 text-sm">{product.name}</h3>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} fill-current`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                <p className="text-green-600 font-semibold text-sm mt-auto">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hot Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={deal.image} alt={deal.name} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{deal.name}</h3>
                  <p className="text-red-600 font-bold text-xl">{deal.discount}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Payments</Link></li>
                <li><Link href="#" className="hover:underline">Shipping</Link></li>
                <li><Link href="#" className="hover:underline">Cancellation & Returns</Link></li>
                <li><Link href="#" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Policy</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Return Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms Of Use</Link></li>
                <li><Link href="#" className="hover:underline">Security</Link></li>
                <li><Link href="#" className="hover:underline">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Facebook</Link></li>
                <li><Link href="#" className="hover:underline">Twitter</Link></li>
                <li><Link href="#" className="hover:underline">YouTube</Link></li>
                <li><Link href="#" className="hover:underline">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-4 sm:mb-0">&copy; 2023 E-commerce Store. All rights reserved.</p>
            <div className="flex space-x-4">
              <Image src="/payment-visa.png" alt="Visa" width={40} height={25} />
              <Image src="/payment-mastercard.png" alt="Mastercard" width={40} height={25} />
              <Image src="/payment-paypal.png" alt="PayPal" width={40} height={25} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}