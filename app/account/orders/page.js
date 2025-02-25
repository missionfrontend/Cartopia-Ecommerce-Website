import OrderList from "@/app/_components/OrderList";
import { getOrders } from "@/app/_lib/apiProducts";
export const revalidate = 0;
async function Page(){
    const orders = await getOrders()
    
    return <div>
          <h1 className="text-2xl font-semibold">Manage Your Order</h1>
          <OrderList orders={orders}/>
    </div>
}


export default Page;