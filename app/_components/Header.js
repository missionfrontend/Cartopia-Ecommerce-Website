import Link from "next/link";
import Logo from "./Logo";
import { AiFillProduct } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi2";
import { MdAccountCircle, MdShoppingCart } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { auth } from "../_lib/auth";
import { getCart } from "../_lib/apiProducts";
import { GoSignOut } from "react-icons/go";
import { signOutAction } from "../_lib/action";
async function Header() {
  const session = await auth();
  const cart = await getCart();
  return (
    <div className=" py-4 px-3 text-md flex justify-between  items-center mx-20 ">
      <Logo />

      <div className=" gap-10 text-slate-800 list-none  tracking-wider  items-center hidden md:flex ">
        <li>
          <Link
            href="/products"
            className="flex gap-1 items-center hover:text-red-500"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="flex gap-1 items-center hover:text-red-500"
          >
            Account
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="flex gap-1 items-center hover:text-red-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="flex gap-1 items-center p-1 rounded-lg group"
          >
            <FiShoppingCart className="w-5 h-5 text-red-500 fill-red-500 group-hover:fill-slate-800 group-hover:text-slate-800" />
            <sup className="font-semibold text-slate-950">{cart?.length}</sup>
          </Link>
        </li>
        {!session && <li>
          <form className="text-xs font-semibold">
            <Link href = "/login" className=" border border-gray-300 py-2 px-2 rounded-md hover:bg-purple-50">
              Sign In
            </Link>
          </form>
        </li>}
        {session && (
          <li className="flex items-center gap-1">
            <h2>Hi!</h2>
            <img
              src={session?.avatar || session?.user?.image}
              className="w-8 h-8 rounded-full bg-purple-200"
            />
          </li>
        )}
        <li>
          {session && (
            <form className="text-xs font-semibold" action={signOutAction}>
              <button className="border border-gray-300 p-2 rounded-md flex gap-1 items-center hover:bg-purple-50">
                Sign Out
                <GoSignOut className="w-4 h-4" />
              </button>
            </form>
          )}
        </li>


      </div>
    </div>
  );
}

export default Header;
