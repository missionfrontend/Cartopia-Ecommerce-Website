"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import ProductCard from "../_components/ProductCard";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signInWithPassword(email, password) {
  await signIn("credentials", { email, password, redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData) {
  console.log(formData);
  const contact = formData.get("contact");
  const address = formData.get("address");
  const shippingAddress = formData.get("shippingAddress");
  const nationality = formData.get("nationality");
  let updataData = { contact, address, shippingAddress, nationality };
  const session = await auth();
  if (!session) throw new Error("Please Login");

  const { data, error } = await supabase
    .from("users")
    .update(updataData)
    .eq("id", session.user.userId);

  revalidatePath("/account/profile");
  return data;
}

export async function addToCart(formData) {
  console.log(formData);
  const session = await auth();
  const productId = Number(formData.get("product"));
  const totalPrice = Number(formData.get("totalPrice"));
  const quantity = Number(formData.get("quantity"));
  const cart = {
    user: session?.user?.userId,
    product: productId,
    totalPrice: totalPrice,
    quantity: quantity,
  };

  const { data: checkcart, error: carterror } = await supabase
    .from("cart")
    .select("*")
    .match({ user: session?.user?.userId, product: productId })
    .single();

  if (!carterror) throw new Error("Product already in your cart");
  // const session = await auth()
  if (!session) throw new Error("Please Login to continue");
  const { data, error } = await supabase.from("cart").insert([cart]).select();

  if (error) throw new Error("Product Not Added to Cart");
  redirect("/account/cart");
}
export async function checkCart({ product, user }) {
  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .match({ user: user, product: product })
    .single();
  if (error) return false;
  if (data) {
    return true;
  } else {
    return false;
  }
}
export async function deleteCart(product) {
  const session = await auth();
  const { data, error } = await supabase
    .from("cart")
    .delete()
    .match({ user: session?.user?.userId, product: product });
  revalidatePath("account/cart");
  return data;
}

export async function createOrder(orderItem, formData) {
  const session = await auth();
  const newOrder = {
    ...orderItem,
    shippingAddress: formData.get("shippingAddress"),
    contact: Number(formData.get("contact")),
    users: session?.user?.userId,
    status:"Unconfirmed"
  };
  const {data,error} = await supabase.from("orders").insert(newOrder).select()
  const cartcheck = await checkCart({product:orderItem.products,user:session?.user?.userId});
  if(cartcheck){
      const {error:removecarterror} = await supabase.from("cart").delete().match({user:session?.user?.userId,product:orderItem.products})

  }
  if(error) throw new Error("Order not Completed")

    redirect("/thankyou");
   
    
}
export async function  cancelOrder({status,id}) {
  console.log(status,id)
  const session =  await auth()
  
  const {data,error} = await supabase.from("orders").update({"status":status}).match({users:session?.user?.userId,id:id})

  if(error) throw new Error("Product not Updated");

  revalidatePath("/account/orders")
}
// export async function name(params) {

// }
