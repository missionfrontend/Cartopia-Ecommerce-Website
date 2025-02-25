import Link from "next/link";
import {GiCheckMark} from "react-icons/gi"

function Page(){
  return  <div className="mx-24 px-4 mt-5 font-semibold flex flex-col justify-center items-center  h-[50vh]">
        <h1 className="flex-col-reverse text-center flex items-center gap-2 text-3xl text-slate-800 md:flex-row">Thank You For Purchasing <GiCheckMark className="w-16 h-16 bg-green-500 text-white  rounded-full p-4 "/></h1>
        <Link href ="account/orders" className="mt-5 bg-slate-800 text-white py-2 px-3">Check Your Order Status</Link>
  </div>
}

export default Page;