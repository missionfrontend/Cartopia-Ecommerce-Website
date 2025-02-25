import { Suspense } from "react";
import Filter from "../_components/Filter";

import Spinner from "../_components/Spinner";

import ProductFiltering from "../_components/ProductFiltering";

export const metadata = {
  title: "Products",
};

async function Page({ searchParams }) {
  const searchparams = await searchParams;
  const filter = searchparams?.price ? searchparams?.price : "all";

  return (
    <div className="mx-20 my-9  px-7  py-4">
      <h1 className="text-3xl font-semibold text">Our Branded Products</h1>

      <p className="text-left mt-5  text-sm tracking-wider">
        Crafted from high-quality materials, it offers both durability and
        style, making it a perfect accessory for any occasion. The meticulous
        attention to detail and the renowned craftsmanship Illuminate your space
        with this unique lamp featuring a beautifully designed palm tree motif.
        Nourish your body with the best nature has to offer. Our carefully
        curated Groceries selection provides everything you need to fuel your
        active lifestyle and feel your absolute best.
      </p>
      <div className="flex flex-1 justify-end mt-8 gap-4 text-sm ">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <ProductFiltering filter={filter} />
      </Suspense>
    </div>
  );
}

export default Page;
