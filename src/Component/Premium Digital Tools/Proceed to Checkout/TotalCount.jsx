import React from "react";
import { toast } from "react-toastify";
const TotalCount = ({ cartData, setCartData }) => {
 const proceedCheckout=()=>{

setCartData([])

 }

const totalCount= cartData.reduce((sum , cartData)=> sum + cartData.price ,0)

const finalCount= totalCount.toFixed(2);
  return (
    <div>
     
       {/* total count */}
      <div className="flex justify-between items-center bg-gray-200 p-4 px-9 rounded-xl mb-3">
        <p>  Total - {`${cartData.length}`}</p>
        <p> ${finalCount}</p>
      </div>
      <button onClick={()=>{proceedCheckout (), toast.success("payment successful")}} className="btn btn-primary px-90 rounded-2xl">
        Proceed to Checkout
      </button>

     
    </div>


  );
};

export default TotalCount;
