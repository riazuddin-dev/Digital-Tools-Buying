import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ product, cartData, setCartData }) => {
  const [isBuy, setIsBuy] = useState(false);

  const clickBuy = () => {



    const findCart= cartData.find(f=> f.id === product.id)
    
    if(findCart){
      toast.error( "Alredy Add This Cart")
      return
      

    }
    if(!findCart){
      toast.success("Cart Add Success")
      
    }
    
    setIsBuy(!isBuy)
  setCartData([...cartData , product])

};

  if (!product) return null;
  const { name, description, price, tag, features, period, image } = product;

  return (
    <>
      <div>
        <div className="card w-80 bg-base-100 shadow-xl relative p-6 rounded-2xl">
          <div className="badge badge-warning absolute right-4 top-4 text-xs font-semibold">
            {tag}
          </div>

          <div className="w-14 h-14 rounded-full bg-base-200 flex items-center justify-center text-xl mb-4">
            <img src={image} alt="" />
          </div>

          <h2 className="text-xl font-bold">{name}</h2>

          <p className="text-sm text-gray-500 mt-2">{description}</p>

          <div className="mt-4">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-gray-400 text-sm">/{period}</span>
          </div>

          <ul className="mt-4 space-y-2 text-sm">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button
            onClick={clickBuy}
              className={`btn w-full text-white border-none rounded-full  ${isBuy? "bg-linear-to-r from-green-400 to-green-600 hover:opacity-90": "bg-linear-to-r from-purple-600 to-pink-500 hover:opacity-90"}`}
            >
              {`${isBuy ? "Proceed to Checkout" : "Buy Now"}`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
