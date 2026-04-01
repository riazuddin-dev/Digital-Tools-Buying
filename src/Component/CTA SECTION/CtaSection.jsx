import React from 'react';

const CtaSection = () => {
    return (
        <div>
            <div className="bg-linear-to-r from-purple-600 to-indigo-600 py-16 text-center text-white">
  
  <h2 className="text-2xl md:text-4xl font-bold">
    Ready To Transform Your Workflow?
  </h2>

  <p className="mt-3 text-sm md:text-base opacity-90">
    Join thousands of professionals who are already using DigiTools to work smarter.
    <br />
    Start your free trial today.
  </p>

  {/* Buttons */}
  <div className="mt-6 flex justify-center gap-4 flex-wrap ">
    
    <button className="bg-white text-purple-600 px-5 py-2 rounded-full font-medium btn hover:-translate-y-1 transition duration-700">
      Explore Products
    </button>

    <button className="border border-white px-5 py-2 rounded-full btn hover:-translate-y-1 transition duration-700">
      View Pricing
    </button>

  </div>

  {/* Bottom text */}
  <p className="mt-4 text-xs opacity-80">
    14-day free trial • No credit card required • Cancel anytime
  </p>

</div>
        </div>
    );
};

export default CtaSection;