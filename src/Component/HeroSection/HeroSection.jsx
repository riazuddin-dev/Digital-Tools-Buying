import React from "react";
import heroImg from "../../assets/banner.png"; // তোমার image path
import group from "../../assets/products/group-5.png";
const HeroSection = () => {
  return (
    <div className="bg-gray-100 pt-13">
      {/* Main Hero */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <span className="bg-purple-100 text-purple-600 px-3 w-2/3 py-2 rounded-full text-lg font-bold flex  items-center justify-center gap-3">
           
              <img  src={group} alt="" />
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-gray-800 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="mt-4 text-gray-600">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
              Explore Products
            </button>

            <button className="border border-purple-600 text-purple-600 px-5 py-2 rounded-full">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={heroImg}
            alt=""
            className="rounded-lg w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 bg-linear-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-around items-center text-center gap-6">
          <div>
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="text-lg">Active Users</p>
          </div>

          <div className="hidden md:block h-10 w-px bg-white"></div>

          <div>
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="text-lg">Premium Tools</p>
          </div>

          <div className="hidden md:block h-10 w-px bg-white"></div>

          <div>
            <h2 className="text-4xl font-bold">4.9</h2>
            <p className="text-lg">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
