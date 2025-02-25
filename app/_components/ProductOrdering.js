"use client";


import { HiMiniStar, HiMinusCircle, HiPlusCircle } from "react-icons/hi2";
import { formatCurrency } from "../_lib/helper";
import { useQuantity } from "./QuantityContext";

export default function ProductOrdering({
    product,
    minOrderLength,
    maxOrderLength,
    session
}) {
    const {quantity,setquantity} = useQuantity()
  const {
    image,
    regularPrice,
    finalPrice,
    description,
    discount,
    name,
    rating,
  } = product[0];
  return (
      
    <div className="m-4 flex flex-col  justify-evenly  px-4 w-full ">
      <h1 className="text-4xl font-semibold tracking-wider">{name}</h1>
      <span className="flex gap-2 items-center text-lg">
        <HiMiniStar className="fill-yellow-300 w-7 h-7 " />
        {rating}
      </span>
      <p className="">{description}</p>
      <span className="font-semibold text-lg tracking-wide">
        Regular Price: {formatCurrency(regularPrice)}
      </span>
      <span className="font-semibold tracking-wide text-red-500">
        Discount: {formatCurrency(discount)}
      </span>
      <p className="font-semibold text-xl tracking-wide text-amber-800">
        Final Price: {formatCurrency(finalPrice)}
      </p>
      
      {session && <div className="flex gap-4 items-center">
        <h1 className="text-slate-950">Quantity:</h1>
        <button
          onClick={() =>
            quantity > minOrderLength && setquantity((quantity) => (quantity - 1))
        }
        >
          <HiMinusCircle className="w-8 h-8" />
        </button>
        <span className="max-w-fit">{quantity}</span>
        <button
          onClick={() =>
            quantity < maxOrderLength && setquantity((quantity) => (quantity + 1))
        }
        >
          <HiPlusCircle className="w-8 h-8" />
        </button>
      </div>}
    </div>
    
  );
}
