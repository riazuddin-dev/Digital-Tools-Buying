import React from "react";
import { toast } from "react-toastify";

const TotalCount = ({ cartData, setCartData }) => {

  const proceedCheckout = () => {
    setCartData([]);
    toast.success("payment successful");
  };

  const totalCount = cartData.reduce((sum, item) => sum + item.price, 0);
  const finalCount = totalCount.toFixed(2);

  return (
    <div className="mt-4">

   
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-200 p-4 rounded-xl gap-2">
        <p className="text-sm sm:text-base font-medium">
          Total Items: {cartData.length}
        </p>
        <p className="text-lg font-bold text-gray-800">
          ${finalCount}
        </p>
      </div>

   
      <button
        onClick={proceedCheckout}
        className="w-full mt-3 bg-blue-600 text-white py-2 rounded-xl text-sm sm:text-base font-semibold hover:bg-blue-700"
      >
        Proceed to Checkout
      </button>

    </div>
  );
};

export default TotalCount;