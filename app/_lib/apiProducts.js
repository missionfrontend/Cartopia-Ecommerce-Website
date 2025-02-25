import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { supabase } from "./supabase";

export async function getProducts() {
  let { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error("Products not found");

  return data;
}

export async function getProduct(id) {
  if(!id) return
  const { data, error } = await supabase
    .from("products")
    .select("*").eq("id",id)

  if (error) throw new Error(`Product with ${id} not found `);

  return data;
}
export async function getUser(email) {
  const {data,error} = await supabase.from("users").select("*").eq("email",email).single()

  

    return data
}



export async function createUser(newUser) {
  const {data,error} = await supabase.from("users").insert([newUser]).select()

  if(error) throw new Error("User not Created")

    return data
}

export async function getUserWithEmail({email,password}) {
  
  const {data,error} = await supabase.from("users").select("*").match({"email":email,"password":password}).single()
  if(error) throw new Error("Invalid Email or Password")
  return data
}
export async function getCart() {
  const session = await auth()

  

    const {data,error} = await supabase.from("cart").select("*,products(*)").eq("user",session?.user?.userId);

    return data;
}

// export async function getAvatar(first,last) {
//   const res =  `https://avatar.iran.liara.run/username?username=${first}+${last}`
//       // const avatar = await res.body()
      
//     return res
// }
export async function getOrders() {
  const session = await auth()

  const {data,error} = await supabase.from("orders").select("*,products(*)").eq("users",session?.user?.userId)

  if(error) throw new Error("No Orders for this User")
    
    return data;
}