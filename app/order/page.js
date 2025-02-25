import OrderCheckout from "../_components/OrderCheckout";
import { getProduct, getUser } from "../_lib/apiProducts";
import { getSetting } from "../_lib/apiSettings";
import { auth } from "../_lib/auth";

async function Page({searchParams}){
    const search = await searchParams
    const productId = await search?.id
    const totalPrice = await search?.totalPrice;
    const quantity = await search?.quantity;
    const session = await auth()
    const product = await getProduct(productId)
    const User = await getUser(session?.user?.email)
    const settings = await getSetting()
    return <div className="mx-24 px-4 mt-5  py-2 flex flex-col gap-3">
           <h1 className="text-2xl font-semibold">Order Checkout</h1>
           <OrderCheckout totalPrice={totalPrice} quantity={quantity} product={product} session={session} User={User} settings={settings}/>
    </div>
}

export default Page;