import CartItem from "./CartItem"

function CartList({cart}){
   return  <div>
          <ul className="[&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-slate-700 overflow-y-auto h-[100vh]">
            {cart.map((cartitem)=> <CartItem cartitem = {cartitem} key={cartitem.id}/>)}
          </ul>
   </div>
}

export default CartList