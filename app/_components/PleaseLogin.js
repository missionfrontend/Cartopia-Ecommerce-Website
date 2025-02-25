import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi2";

function PleaseLogin() {
  return (
    <div className="flex justify-center items-center m-0 p-4 bg-slate-800 text-gray-200">
      <span className="flex items-center gap-2">
      Please
      <Link
        href="/account"
        className=" text-amber-600 font-semibold text-lg flex items-center gap-1 underline hover:text-amber-400 tracking-wide"
        >
         Login
        <HiShoppingBag className="w-6 h-6" />
      </Link>
      before Purchase
          </span>
    </div>
  );
}

export default PleaseLogin;
