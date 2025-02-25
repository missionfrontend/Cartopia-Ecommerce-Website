"use client"

import { HiMiniStar } from "react-icons/hi2";
import { formatCurrency } from "../_lib/helper";
import { deleteCart } from "../_lib/action";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { act } from "react";

function CartItem({cartitem}){
    const {quantity,totalPrice,products} = cartitem
    const {name,image,rating,finalPrice,regularPrice,description,id} = products
     const searchParams =  useSearchParams()
     const router = useRouter()
     const pathName =  usePathname()

    function handleCart(formData){
      const action = formData.get("action")
      if(action === "placeorder"){

        const params = new URLSearchParams(searchParams)
        params.set("totalPrice",totalPrice)
        params.set("quantity",quantity)
        params.set("id",id)
        router.replace(`/order?${params.toString()}`)
      }
      if(action === "remove") deleteCart(id)
      
    }
  return <div className="grid grid-cols-6 border border-slate-400  my-2 items-center text-sm font-semibold tracking-wider shadow-md">
        <div>

         <img src={image} className="w-1/2 h-24 object-contain"/>
        </div>
        <div className="col-span-3 gap-2  py-3 flex-col flex">
         <h2 className="text-amber-800">{name}</h2>
         <span className="flex gap-2 items-center">Rating :<HiMiniStar className="fill-yellow-300"/>{rating}</span>
         <p className="text-xs w-1/2">{description.slice(0,39)}</p>
        </div>
        <div className="flex flex-col gap-1">
         <h2 className="font-semibold text-slate-800">{formatCurrency(finalPrice)}  x {quantity}</h2>
         <span className="text-md text-amber-700 font-semibold flex gap-1">{formatCurrency(totalPrice)}</span>
        </div>
         <form className="flex flex-col gap-1 mx-2" action={(formData)=>handleCart(formData)}>
            <button className="bg-red-500 py-2 px-3 text-white hover:bg-red-600" value="remove" name="action">Remove</button>
            <button className="bg-slate-700 py-2 px-3 text-white" name="action" value="placeorder">Place Order</button>
         </form>
    </div>
}
    


export default CartItem;