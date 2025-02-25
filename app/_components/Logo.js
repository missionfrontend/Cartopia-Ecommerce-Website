import { Poppins, Titan_One } from "next/font/google";
import logo from "@/public/129.jpg"
import Image from "next/image";
import Link from "next/link";

const titanround = Poppins({
    weight:"800",
    subsets:["latin"]
})

function Logo(){
    return <div className={`text-slate-800 font-semibold text-xl ml-5 ${titanround.className} flex gap-2 items-center `}>
         {/* <Image src={logo} className="w-10 rounded-full ring-1 ring-slate-900" alt="logo"/> */}
         <Link href="/">CARTOPIA</Link>
    </div>
}
export default  Logo;