import React from "react";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0b1a2f] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo + desc */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">DigiTools</h2>
          <p className="text-sm text-gray-400 mt-3">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700">
              <FaFacebookF />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700">
              <FaTwitter />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700">
              <FaGithub />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        
        <p>© 2026 DigiTools. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;