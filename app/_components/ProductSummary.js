"use client";

import Link from "next/link";
import { addToCart, createOrder } from "../_lib/action";
import { formatCurrency } from "../_lib/helper";

import { useQuantity } from "./QuantityContext";
import { act, useEffect, useState } from "react";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function ProductSummary({ product, session, productcartStatus }) {
  const [totalPrice,settotalPrice] = useState()
  const { quantity, reset } = useQuantity();
  const { finalPrice, id } = product[0];
  
  useEffect(function(){
    const totalPrice = (finalPrice * quantity);
     settotalPrice(totalPrice)
  },[quantity])

  const searchParams = useSearchParams();
  const router = useRouter()
  function handleProductSubmit(formData) {
    const action = formData.get("action");
    if (action === "addcart") {
      addToCart(formData);
      reset()
    }
    if (action === "orderproduct") {
      const orderItem = {
        user: session?.user?.userId,
        product: product[0].id,
        totalPrice: totalPrice,
        quantity: quantity,
      };
      const params = new URLSearchParams(searchParams);
      // params.set("user",orderItem.user);
      params.set("totalPrice", orderItem.totalPrice);
      params.set("quantity", orderItem.quantity);
      params.set("id",orderItem.product)
      router.replace(`/order?${params.toString()}`)
      redirect(`/order`);
    }
  }
  return (
    <form
      className="flex-col flex   m-5 px-7 border-l border-l-gray-300  font-semibold relative"
      // action={(formData) => {
      //   handleOrder(formData)
      //   addToCart(formData);

      //   reset();
      // }}
      action={handleProductSubmit}
    >
      <h1 className="text-2xl my-3">Product Summary</h1>
      <div className="flex flex-col gap-4 mt-7">
        <div className="flex justify-between">
          <span>Quantity</span>
          <span>x{quantity}</span>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="hidden"
            value={Number(quantity)}
            readOnly={true}
          />
        </div>
        <div className="flex justify-between">
          <span>Final Price</span>
          <span>{formatCurrency(finalPrice)}</span>
          <input
            type="number"
            name="product"
            id="product"
            defaultValue={id}
            className="hidden"
          />
        </div>
        <div className="flex justify-between text-red-500 text-lg">
          <span>Total Price</span>
          <span>{formatCurrency(totalPrice)}</span>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            defaultValue={totalPrice}
            className="hidden"
          />
        </div>
      </div>
      {/* <AddtoCart quantity ={quantity} totalPrice={totalPrice} session={session} product={product}/> */}
      <div className="flex justify-between bottom-0   w-full absolute px-3 font-medium text-sm">
        <button
          className="py-2 px-3 bg-slate-900 text-gray-200 rounded-md hover:bg-slate-800 hover:ring-1 hover:ring-slate-800"
          disabled={productcartStatus}
          value="addcart"
          name="action"
        >
          {productcartStatus ? "Already in Cart" : "Add to Cart"}
        </button>
        <button
          className="bg-red-500 py-2 px-3 text-gray-50 rounded-md hover:ring-1 hover:ring-red-500"
          value="orderproduct"
          name="action"
        >
          Order Now
        </button>
      </div>
    </form>
  );
}

export default ProductSummary;
