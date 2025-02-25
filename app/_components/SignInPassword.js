"use client"


import { FaSignInAlt } from "react-icons/fa"
import { signInWithPassword } from "../_lib/action";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";

 function SignInPassword(){
    const {register,handleSubmit} = useForm()
    
    async function onSubmit({email,password}){
        
     if(!email || !password) return;

     signInWithPassword(email,password)
    }
  return <div className="flex flex-col justify-center p-8  mt-5 text-sm gap-5 border-t border-t-gray-200 ">
         <h1 className="text-lg font-semibold flex items-center gap-3">Sign In with Email <MdEmail className="w-6 h-6"/></h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col gap-2">
          <h1>Email Address</h1>
          <input type="email" id="email" placeholder="Enter Email Address" required className="py-2 px-2 outline-none border border-gray-200"  {...register("email")}/>    
        </div>
        <div className="flex flex-col gap-2">
          <h1>Password</h1>
          <input type="password" id="password" placeholder="Enter Your Password" required className="py-2 px-2 outline-none border border-gray-200" {...register("password")}/>
        
        </div>
        <button className="bg-slate-900 py-2 px-2 text-gray-200 mt-3 flex gap-2 items-center justify-center rounded-md hover:bg-slate-800" >Sign In<FaSignInAlt className="w-6 h-6"/></button>
        </form>
  </div>
}

export default SignInPassword