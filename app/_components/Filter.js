"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


function Filter({params}) {
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathName = usePathname()
  const search = searchParams.get("price")
  
  function handleFilter(filter){
    const params = new URLSearchParams(searchParams)
    params.set("price",filter)
    router.replace(`${pathName}?${params.toString()}`, {scroll:false})
  }
  return (
    <div className="max-w-fit bg-slate-950 text-gray-200 ring-1 ring-slate-800 p-1 rounded-md">
      <button
        className={`py-2 px-3 hover:bg-purple-200 hover:text-slate-800 ${search === "low" ? "bg-purple-200 text-slate-800":""}`}
        onClick={() => handleFilter("low")}
      >
        Lowest Price
      </button>
      <button
        className={`py-2 px-3 hover:bg-purple-200 hover:text-slate-800 ${search=== "mid" && "bg-purple-200 text-slate-800"}`}
        onClick={() => handleFilter("mid")}
      >
        Mid Price
      </button>
      <button
        className={`py-2 px-3 hover:bg-purple-200 hover:text-slate-800 ${search === "high" && "bg-purple-200 text-slate-800"}`}
        onClick={() => handleFilter("high")}
      >
        Highest Price
      </button>
    </div>
  );
}

export default Filter;
