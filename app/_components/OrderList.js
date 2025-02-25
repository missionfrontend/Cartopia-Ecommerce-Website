import OrderCard from "./OrderCard";

function OrderList({orders}){
   return  <div className="flex flex-col gap-2 mt-5 ">
           <ul className="flex flex-col gap-2 overflow-y-auto h-[100vh]  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300">
            {orders.map((order)=> <OrderCard order={order} key={order.id}/>)}
           </ul>
   </div>
}

export default OrderList;