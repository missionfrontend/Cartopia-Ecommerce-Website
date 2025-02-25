import ProductCard from "@/app/_components/ProductCard";
import { getProduct } from "@/app/_lib/apiProducts";
import { getSetting } from "@/app/_lib/apiSettings";

async function Page({ params }) {
  const param = await params;
  const product = await getProduct(param.productId);
  const settings = await getSetting()
  return (
    <div className="mx-24 px-3 mt-10">
      <h1 className="text-3xl font-semibold text-center">
        Buy Now and Grab <span className="text-red-500">Big Discount</span>
      </h1>
      <h1 className="text-center  text-lg text-amber-700 font-semibold">(Order Now And Pay Later)</h1>
      <ProductCard product={product} settings={settings}/>
    </div>
  );
}

export default Page;
