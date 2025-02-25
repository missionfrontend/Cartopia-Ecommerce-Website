"use client";

import Image from "next/image";
import Link from "next/link";


function ProductList({ product }) {
  const { name, regularPrice, finalPrice, image, id } = product;

  return (
    <div className=" p-4 grid grid-cols-2 gap-5 text-sm h-[30vh] justify-evenly bg-purple-50 border border-purple-200 rounded-md">
      <div className="flex flex-1 relative">
        <Image
          src={image}
          alt={name}
          className="  border-r border-r-gray-300 p-2 "
          fill
          sizes="fixed"
        />
      </div>

      <div className="flex flex-col justify-between font-semibold items-center">
        <h1 className="text-xs">{name}</h1>
        {regularPrice !== finalPrice && (
          <h2 className="text-lg font-semibold line-through">
            ${regularPrice}
          </h2>
        )}
        <h2 className="text-2xl font-semibold text-red-800">${finalPrice}</h2>
        <Link
          href={`/products/${id}`}
          className="bg-purple-200 text-slate-900 rounded-md py-2 px-3 hover:bg-red-900 hover:text-white duration-150"
        >
          View & Order
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
