import React from 'react'
import { Phone, Mail, Home, Info, Contact, FileText, Copyright } from 'lucide-react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <footer className="">
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
                <a onClick={scrollTo(0,0)} href="/" className="flex items-cente">
                  <Home className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/about" className="flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center">
                  <Contact className="w-4 h-4 mr-2" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+916207724981">+91 6207724981</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:deepakkr.oxford@gmail.com">deepakkr.oxford@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright text */}
      <div className="border-t border-gray-800 mt-8">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <Copyright className="w-4 h-4 mr-2" />
          <p className="text-sm">
            Copyright 2024 © Prescripto - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

