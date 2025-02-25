

import { HiMiniStar, HiMinusCircle, HiPlusCircle, HiStar } from "react-icons/hi2"
import { formatCurrency } from "../_lib/helper"

import Image from "next/image"
import ProductSummary from "./ProductSummary"
import PleaseLogin from "./PleaseLogin"
import { auth } from "../_lib/auth"
import ProductOrdering from "./ProductOrdering"
import { checkCart } from "../_lib/action"
export const  revalidate = 0;
async function ProductCard({product,settings}){
  const session = await auth()
    const {image,name,id} = product[0]
    const {minOrderLength,maxOrderLength,shippingPrice} = settings[0]
    const productcartStatus = await checkCart({user:session?.user?.userId,product:id})
    
    
  return <div className="grid grid-cols-3 mt-10 px-5 text-stone-600 h-[70vh] gap-3 rounded-lg border border-gray-300 shadow-lg ">
        <div className="relative">

        <Image src={image} alt={`Product-${name}`} className="w-1/2 h-full object-contain" fill sizes="fixed"/>
        </div>
        <ProductOrdering minOrderLength ={minOrderLength} maxOrderLength={maxOrderLength} product= {product} session ={session}/>
        {session ? 
        <ProductSummary product={product} session ={session} productcartStatus={productcartStatus} shippingPrice ={shippingPrice}/>
        :<PleaseLogin/>}
  </div>
}

export default ProductCard