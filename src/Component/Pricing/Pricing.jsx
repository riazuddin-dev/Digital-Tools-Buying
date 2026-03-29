import React from "react";

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
          
          {/* Starter */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Starter</h3>
            <p className="text-sm text-gray-500">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-4">$0<span className="text-sm">/Month</span></h2>

            <ul className="text-sm text-gray-600 mt-4 space-y-2 ">
              <li>✔ Access to free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
              Get Started Free
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="relative p-8 rounded-xl text-white bg-linear-to-r from-purple-600 to-indigo-600 shadow-lg text-start">
            
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
              Most Popular
            </span>

            <h3 className="font-semibold text-lg">Pro</h3>
            <p className="text-sm opacity-80">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-4">$29<span className="text-sm">/Month</span></h2>

            <ul className="text-sm mt-4 space-y-2">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full font-medium">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-start">
            <h3 className="font-semibold text-lg">Enterprise</h3>
            <p className="text-sm text-gray-500">For teams and businesses</p>

            <h2 className="text-3xl font-bold mt-4">$99<span className="text-sm">/Month</span></h2>

            <ul className="text-sm text-gray-600 mt-4 space-y-2">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;