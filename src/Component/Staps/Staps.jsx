import React from "react";
import fast from "../../assets/user.png"
import Package from "../../assets/package.png"
import roket from "../../assets/rocket.png"



const Steps = () => {
  return (
    <div className="bg-gray-100 py-16 mt-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm relative">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              01
            </span>

            <div className="w-16 h-16 mx-auto bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-2xl">
              <img src={fast} alt="" />
            </div>

            <h3 className="mt-4 font-semibold text-lg">Create Account</h3>
            <p className="text-gray-500 text-sm mt-2">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm relative">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              02
            </span>

            <div className="w-16 h-16 mx-auto bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-2xl">
               <img src={Package} alt="" />
            </div>

            <h3 className="mt-4 font-semibold text-lg">Choose Products</h3>
            <p className="text-gray-500 text-sm mt-2">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className=" relative  bg-white p-8 rounded-xl shadow-sm">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              03
            </span>

            <div className="w-16 h-16 mx-auto bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-2xl">
              <img src={roket} alt="" />
            </div>

            <h3 className="mt-4 font-semibold text-lg">Start Creating</h3>
            <p className="text-gray-500 text-sm mt-2">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Steps;