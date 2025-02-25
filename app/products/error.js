"use client"

function Error({error}){
   return <div className="flex justify-center mt-5">
         <h1>{error.message}</h1>
   </div>
}

export default Error