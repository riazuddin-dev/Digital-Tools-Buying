import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import image from "../../assets/digitools.png"

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-10/11 mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
     <div>  <img src={image} alt="" /></div>

        {/* Menu */}
        <ul className="flex gap-8 text-lg font-bold  text-gray-500">
          <li><a href="#">Products</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <CiShoppingCart className="text-3xl" />
          <button className="text-lg font-bold">Login</button>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-lg font-bold">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;