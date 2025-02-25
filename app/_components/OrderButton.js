"use client"

import Link from "next/link";

function OrderButton(){
  return  <Link href="/account/cart" className="bg-red-500 py-2 px-3 text-gray-50 rounded-md hover:ring-1 hover:ring-red-500">
          Order Now
        </Link>
}  

export default OrderButton;