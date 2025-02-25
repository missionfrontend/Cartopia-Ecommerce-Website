"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { formatCurrency } from "../_lib/helper";
import Modal, { Button, Window } from "./ModalContext";
import { cancelOrder } from "../_lib/action";
export const revalidate = 0
function OrderCard({ order }) {
  const [showid, setshowid] = useState();
  const {
    status,
    isPaid,
    products,
    shippingAddress,
    quantity,
    totalPrice,
    contact,
    id,
    extraPrice
  } = order;
  const { image, description, name } = products;
  const progress = {
    Unconfirmed: 33,
    Packed: 66,
    Delivered: 100,
    Canceled:100,
  };
  const statuscolor = {
    Unconfirmed: "bg-blue-200",
    Packed: "bg-green-400",
    Delivered: "bg-red-500 text-white",
    Canceled: "bg-yellow-500",
  };
  const paidcolor = {
    true: "text-green-500",
    false: "text-red-500 ",
  };
  useEffect(
    function () {
      if (showid !== id) setshowid("");
      function handleClose() {
        setshowid("");
      }
      document.addEventListener("click", handleClose);
      return () => document.removeEventListener("click", handleClose);
    },
    [showid]
  );

  return (
    <>
      <div className="grid grid-cols-5 border border-slate-500 font-semibold text-sm py-2 items-center shadow-md text-slate-800">
        <div className="relative">
          <img src={image} className=" object-contain w-1/2 h-24" alt={name} />
        </div>
        <div className="flex flex-col gap-2 col-span-2 text-xs">
          <h2 className="text-amber-700">{name}</h2>
          <h2 className={`${statuscolor[status]} max-w-fit px-2`}>{status}</h2>
          <span
            className={` ${paidcolor[isPaid]} max-w-fit px-2  font-semibold border border-slate-800  tracking-wider`}
          >
            {isPaid ? "Paid" : "UnPaid"}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Quantity: x{quantity}</span>
          <span className="text-amber-700">
            TotalPrice: {formatCurrency(totalPrice)}
          </span>
        </div>

        <div className="flex gap-2 flex-col mx-3 max-w-fit text-xs">
          <button
            className="bg-slate-800 text-white py-2 px-2"
            onClick={() => setshowid(id)}
          >
            View Details
          </button>
          {status !== "Delivered" && status !== "Canceled" ? <button className="bg-red-500 py-2 px-2  text-white" onClick={()=> cancelOrder({status:"Canceled",id:id})}>
            Cancel Order
          </button> :""}
        </div>

        <div
          className={` ${
            showid == id ? "flex" : "hidden"
          }  gap-2 tracking-widest text-xs border-t border-t-gray-300 p-3  border-t-transparent mx-2 col-span-5
            `}
        >
          <div className="flex flex-col gap-3 w-1/2">
            <h2 className="  gap-3 grid grid-cols-2">
              Description:<span className="font-medium">{description}</span>{" "}
            </h2>
            <h2 className=" gap-3 grid grid-cols-2">
              ShippingAddress:{" "}
              <span className="font-medium">{shippingAddress}</span>
            </h2>
            <span className="grid grid-cols-2 gap-3">
              Contact: <span className="font-medium">{contact}</span>
            </span>
            <span className="grid grid-cols-2 gap-2 text-red-500">
              Payment Option:
              <span>Cash on Delivery</span>
            </span>
            <span className="grid grid-cols-2 gap-2">
              Shipping Charge:
              <span>{formatCurrency(extraPrice)}</span>
            </span>
          </div>

          <div className="flex justify-center ml-20 ">
            <div className="w-1 h-40 bg-gray-300 rounded-lg relative flex flex-col justify-between items-center">
              <div
                className={`w-1  ${status === "Canceled" ? "bg-red-500":"bg-green-500"} rounded-lg absolute top-0 left-0 transition-all duration-300 ease-in`}
                style={{ height: `${progress[status]}%` }}
              ></div>
              <div className="rounded-full h-4 w-4 bg-green-500 items-center justify-center gap-3 flex relative">
                1<span className="absolute left-8">Unconfirmed</span>
              </div>
              {status !== "Canceled" && <div
                className={`rounded-full h-4 w-4  items-center justify-center flex border border-slate-800 z-10 relative ${
                  status === "Delivered" || status === "Packed"
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                2
                {status === "Delivered" || status === "Packed" ? (
                  <span className="absolute left-8">Packed</span>
                ) : (
                  ""
                )}
              </div>}
              {status !== "Canceled"  ? <div
                className={`rounded-full h-4 w-4 border border-slate-800 ${
                  status === "Delivered" ? "bg-green-500" : "bg-gray-300"
                }  items-center justify-center flex z-10 relative`}
              >
                3 {status === "Delivered" && <span className="absolute left-8">Delivered</span>}
              </div>

               :<div className="rounded-full h-4 w-4  flex justify-center items-center z-10 bg-red-500 relative">
                <span className="absolute left-8">Canceled</span>
               </div>}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
