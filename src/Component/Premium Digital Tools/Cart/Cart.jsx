// import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import TotalCount from "../Proceed to Checkout/TotalCount";
import { toast } from "react-toastify";



const Cart = ({ cartData ,setCartData }) => {

  
  const removeClick=(cartItem)=>{
  

const filterArry= cartData.filter(i=> cartItem.id !== i.id )

setCartData(filterArry)

}

  return (
    <div className="p-6 bg-gray-100 rounded-2xl text-center">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
          <FiShoppingCart className="text-5xl mb-3" />
          <p>No items in cart</p>
        </div>
      ) : (
        <>
          {/*  Cart Items */}
          {cartData.map((item) => (
 <div
        key={cartData.id}
        className="flex justify-between items-cente  bg-gray-200 p-3 rounded-xl mb-3"
      >
      <div
  key={item.id}
  className="flex justify-center items-center bg-gray-200  rounded-xl"
>
  {/* LEFT SIDE */}
  <div className="flex items-center gap-4">
    <img
      src={item.image}
      alt={item.name}
      className=" w-[15%] bg-white p-1 rounded-lg"
    />

    <h3 className="font-medium text-left">{item.name}</h3>
  </div>

  {/* RIGHT SIDE */}
  <p className="text-lg font-bold text-gray-800">
    ${item.price}
  </p>
</div>

      <button onClick={()=>{removeClick(item) , toast.error("Cart Remove successful")}} className=" btn text-red-500 text-sm">Remove</button>
      </div>



          ))}

          {/*  Total (ONLY ONCE) */}
          <TotalCount cartData={cartData} setCartData={setCartData}/>
        </>
      )}
    </div>
  );
};

export default Cart;