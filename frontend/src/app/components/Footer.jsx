import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




const Footer = () => {
  return (
    <footer className="bg-[#a07255] text-white py-8">
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
  );
};

export default Footer;