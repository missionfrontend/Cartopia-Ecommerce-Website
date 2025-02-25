import CartList from "@/app/_components/CartList";
import { getCart } from "@/app/_lib/apiProducts";
import { FiShoppingCart } from "react-icons/fi";

async function Page(){
  const cart = await getCart()
  
  return <div className=" flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">Your Cart</h1>
        
        {cart.length ? <CartList cart ={cart}/> :<div className="flex justify-center text-3xl font-semibold mt-10 gap-2 items-center">You have 0 items in <FiShoppingCart/></div>}
  </div>
}

export default Page;