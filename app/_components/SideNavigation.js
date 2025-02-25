import Link from "next/link";
import { AiFillProfile } from "react-icons/ai";
import { HiHomeModern, HiShoppingBag, HiShoppingCart } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import {FaSignOutAlt} from "react-icons/fa"
import { signOut } from "../_lib/action";
import SignOutButton from "./SignOutButton";
const accountlink = [
    {
      path: "/account",
      label: "Home",
      icon: <HiHomeModern className="w-6 h-6" />,
    },
    {
      path: "/account/orders",
      label: "Manage Orders",
      icon: <HiShoppingBag className="w-6 h-6" />,
    },
    {
      path: "/account/profile",
      label: "Manage Profile",
      icon: <AiFillProfile className="w-6 h-6" />,
    },
    {
        path:"/account/cart",
        label:"Cart",
        icon: <HiShoppingCart className="w-6 h-6"/>
    }
  ];

function SideNavigation(){
   return <div className="flex flex-col bg-purple-50  p-3 my-2 justify-between border-r border-r-gray-300">
         <ul className="flex flex-col gap-5">
         {accountlink.map((link)=><li key={link.label} className="flex gap-2 items-center">

             <Link href={link.path} key={link.label} className="flex items-center gap-2 hover:bg-slate-800 w-full py-2 px-2 hover:text-white">
             {link.icon}
             {link.label}
             </Link>
            </li>)}
         </ul>
         <SignOutButton/>
   </div>
}

export default SideNavigation;