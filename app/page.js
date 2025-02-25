import Image from "next/image";
import bg from "@/public/bg.png"
import Link from "next/link";
import { Imperial_Script } from "next/font/google";
const imperial = Imperial_Script({
  weight:"400",
  subsets:["latin"]
})
export default function Home() {
  return (
    <div className=" flex flex-col justify-between  items-center bg-purple-100 p-4 md:flex-row  mt-8 md:mt-0 text-center h-full">
      <div className="text-stone-800 ml-10  flex flex-col items-center p-3 gap-6 mt-10">
        <h2 className={`${imperial.className} text-6xl text-red-500`}>Fashion Sale</h2>
        <p className="text-sm">Groceries | Watches | Mens-Wear | Decoration | Electronics</p>
        <h1 className="text-4xl">Explore the Most Popular Brands</h1>
        <h4 className="font-semibold bg-stone-900 text-gray-200 tracking-wider p-2 rounded-s-full">Take Your Shopping to Next Level</h4>
        <Link href="/products" className="bg-slate-950 text-white py-2 px-4 hover:bg-slate-800">Explore the Products</Link>
        {/* <h1 className={` absolute left-0 top-24 py-6 px-6  text-stone-700 ${imperial.className} ring-1 ring-slate-500 rounded-e-full text-sm shadow-md z-10 tracking-wider md:text-4xl`}>Welcome to DreamHouse of Shopping</h1> */}
       
      
      </div>
      
      <main className="">
        <Image src={bg} alt="Brand Image" className="bg-purple-100 mt-5 md:mt-0"/>
      </main>
   
    </div>
  );
}
