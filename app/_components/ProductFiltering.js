
import { getProducts } from "../_lib/apiProducts";
import ProductList from "./ProductList";

async function ProductFiltering({filter}){
    const products = await getProducts()
    let filteredproduct;

    if(filter === "all") filteredproduct = products;
    if(filter === "low") filteredproduct = products?.filter((product)=> product.finalPrice <  20);
    if(filter === "mid") filteredproduct = products?.filter((product)=> product.finalPrice > 20 && product.finalPrice < 500)
    if(filter == "high") filteredproduct = products?.filter((product)=> product.finalPrice >= 500);

   return <div className="grid grid-cols-3 gap-8 mt-16 ">

   {filteredproduct?.map((product)=> <ProductList product={product} key={product.id}/>)}
    </div>


}


export default ProductFiltering;