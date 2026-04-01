import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import image from "../../assets/digitools.png";

const Navbar = ({ cartData }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <div>
          <img className="w-32 md:w-40" src={image} alt="logo" />
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-bold text-gray-800 ">
          <li className="hover:underline cursor-pointer">
            <a href="#">Products</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="#">Features</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="#">Testimonials</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="#">FAQ</a>
          </li>
        </ul>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative">
            {cartData.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartData.length}
              </span>
            )}
            <CiShoppingCart className="text-2xl" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-bold">Login</button>
            <button className="btn bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-103">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 text-sm font-bold text-gray-800">
          <a href="#" className="block">
            Products
          </a>
          <a href="#" className="block">
            Features
          </a>
          <a href="#" className="block">
            Pricing
          </a>
          <a href="#" className="block">
            Testimonials
          </a>
          <a href="#" className="block">
            FAQ
          </a>

          <div className="flex flex-col gap-3 pt-2">
            <button className="text-left">Login</button>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
