import { updateProfile } from "../_lib/action";
import { getUser } from "../_lib/apiProducts";
import { auth } from "../_lib/auth";

import SelectCountry from "./SelectCountry";
export const  revalidate = 0;
async function Profile(){

  const session = await auth()
  const user = await getUser(session?.user?.email)
  const {fullName,email,address,contact,shippingAddress,nationality} = user
  return  <form className="flex flex-col gap-3 mt-3 w-1/2 text-sm text-stone-600" action={updateProfile}>
         <div className="flex flex-col gap-2">
          <label>FullName</label>
          <input type="text" disabled={true} className="py-2 px-2 border border-gray-200" defaultValue={fullName}/>
         </div>
         <div className="flex flex-col gap-2">
            <label>Email Address</label>
            <input type="text" disabled={true} className="py-2 px-2 border border-gray-200" defaultValue={email}/>
         </div>
        <div className="flex flex-col gap-2">
         <label>Contact</label>
         <input type="number" className="py-2 px-2 border border-gray-200 outline-none" id="contact" name="contact" defaultValue={contact}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Address</label>
            <input type="text" className="py-2 px-2 border border-gray-200 outline-none" id="address" name="address" defaultValue={address}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Shipping Address</label>
            <textarea className="py-2 px-2 outline-none border border-gray-200" id="shippingAddress" name="shippingAddress" defaultValue={shippingAddress}/>
        </div>
        <div className="flex flex-col gap-2">
         <label>Nationality</label>
         <SelectCountry nationality={nationality}/>
        </div>
        <div className="flex justify-end mt-3">

        <button className="py-2 px-2 bg-slate-800 text-gray-200 hover:bg-slate-900">Update Profile</button>
        </div>
  </form>
}

export default Profile;