// Primium.jsx
import { useState } from "react";
import productData from "../../../public/Products.json";
import Card from "../All UI/Card";
import Cart from "./Cart/Cart";

const Primium = ({cartData, setCartData}) => {

  
  const products = productData.products;

  const [isClick, setClick] = useState("products");

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Premium Products
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan to accelerate your career growth
        </p>
      </div>
      <div className="flex justify-center gap-6 my-9">
        <button
          onClick={() => {
            setClick("products");
          }}
          className={`btn ${isClick === "products" ? "bg-blue-500" : "bg-gray-50"} rounded-2xl text-xl p-4`}
        >
          Products
        </button>
        <button
          onClick={() => {
            setClick("cart");
          }}
          className={`btn ${isClick === "cart" ? "bg-blue-500" : "bg-gray-50"} rounded-2xl text-xl px-13  `}
        >
            <p>Cart ({cartData.length})</p>
        </button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


      {isClick==="products" && products.map((product) => (
        
      <Card product={product} key={product.id} cartData={cartData} setCartData={setCartData} />
         
        
        ))}


        
      </div>
     
        {isClick==="cart" && <Cart cartData={cartData} setCartData={setCartData}></Cart>}
    </div>
  );
};

export default Primium;
