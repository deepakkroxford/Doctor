import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left section */}
          <div className="space-y-4">
            <img src={assets.logo} alt="Company Logo" className="w-[150px] h-[50px]" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga, reiciendis velit dolorum distinctio tenetur reprehenderit adipisci alias explicabo error id ipsa voluptate cupiditate officia laboriosam, magnam delectus minima, eaque ad? Debitis, laudantium cum.
            </p>
          </div>

          {/* Center section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => window.scrollTo(0, 0)} href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+916207724981" className="hover:underline">
                  &#9742; +91 6207724981
                </a>
              </li>
              <li>
                <a href="mailto:deepakkr.oxford@gmail.com" className="hover:underline">
                  &#9993; deepakkr.oxford@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright text */}
      <div className="border-t border-gray-300 mt-8">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <p className="text-sm">
            &copy; 2024 Prescripto - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

