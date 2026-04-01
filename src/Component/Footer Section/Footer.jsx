import React from "react";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0b1a2f] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

      
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold hover:text-purple-400 transition">
            DigiTools
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

     
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
              <li
                key={item}
                className="hover:text-white hover:underline cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {["About", "Blog", "Careers", "Press"].map((item) => (
              <li
                key={item}
                className="hover:text-white hover:underline cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white hover:underline cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

     
        <div>
          <h3 className="font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 
            hover:bg-blue-600 hover:scale-110 transition duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 
            hover:bg-sky-500 hover:scale-110 transition duration-300 cursor-pointer">
              <FaTwitter />
            </div>

            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 
            hover:bg-gray-800 hover:scale-110 transition duration-300 cursor-pointer">
              <FaGithub />
            </div>

          </div>
        </div>

      </div>

  
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">

        <p className="hover:text-white transition">
          © 2026 DigiTools. All rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
            <p
              key={item}
              className="hover:text-white hover:underline cursor-pointer transition"
            >
              {item}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Footer;