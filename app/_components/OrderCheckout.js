"use client";

import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "../_lib/helper";
import { useState } from "react";
import { createOrder } from "../_lib/action";
import { useRouter } from "next/navigation";

function OrderCheckout({ product, quantity, totalPrice, User, settings }) {
  const [isPaid, setisPaid] = useState(false);
  const router = useRouter();
  const { name, finalPrice, description, image, id } = product[0];
  const { shippingAddress, email, contact, fullName } = User;
  const { shippingPrice } = settings[0];
  const orderItem = {
    extraPrice: shippingPrice,
    products: id,
    totalPrice: Number(totalPrice) + shippingPrice,
    quantity: Number(quantity),
    isPaid: false,
  };
  const createNewOrder = createOrder.bind(null, orderItem);

  return (
    <form
      className="grid grid-cols-2 border border-gray-200 mt-5 rounded-md text-sm font-semibold bg-purple-50 tracking-wider text-slate-800 py-3"
      action={(formData) => {createNewOrder(formData);
        
      }}
    >
      <div className="p-2 border-r border-r-gray-200 grid grid-cols-2 gap-2  ">
        <div className="relative">
          <Image
            src={image}
            className=" object-contain "
            fill
            sizes="fixed"
            alt={name}
          />
        </div>
        <div className="flex-col flex  justify-evenly">
          <span className="text-amber-700">{name}</span>
          <span>{description}</span>
          <span>FinalPrice: {formatCurrency(finalPrice)}</span>
          <span>Quantity: x{quantity}</span>
          <span className="text-red-500">
            TotalPrice: {formatCurrency(Number(totalPrice)+ shippingPrice)}
          </span>
          <span>Shipping Charges : {formatCurrency(shippingPrice)}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mx-4 my-4">
        <label>FullName</label>
        <input
          type="text"
          defaultValue={fullName}
          disabled={true}
          className="py-2 outline-none px-2 border border-gray-200"
        />
        <label>Email</label>
        <input
          type="text"
          defaultValue={email}
          disabled={true}
          className="py-2 px-2 outline-none border border-gray-200"
        />
        <label>Shipping Address</label>
        <input
          type="textarea"
          defaultValue={shippingAddress}
          name="shippingAddress"
          id="shippingAddress"
          className="py-2 px-2 outline-none border border-gray-200"
        />
        <label>Contact</label>
        <input
          type="number"
          defaultValue={contact}
          name="contact"
          id="contact"
          className="py-2 px-2 outline-none border-gray-200 border"
        />
        <h2 className="text-red-500">Payment Option</h2>
        <div className="flex gap-2 border border-gray-300 py-2 px-2 items-center">
          <input
            type="radio"
            id="cashondelivery"
            className="w-4 h-4"
            value={isPaid}
            name="isPaid"
            onChange={() => setisPaid(true)}
          />
          <label htmlFor="cashondelivery" className="font-medium">
            Cash on Delivery
          </label>
        </div>
        <button
          className="bg-slate-800 text-white py-2 px-2 mt-5 rounded-md hover:bg-slate-700"
          disabled={!isPaid}
        >
          Place Order
        </button>
      </div>
    </form>
  );
}

export default OrderCheckout;
