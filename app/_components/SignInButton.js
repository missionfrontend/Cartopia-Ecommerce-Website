

import { FcGoogle } from "react-icons/fc";
import { signIn } from "../_lib/auth";
import { signInAction } from "../_lib/action";

function SignInButton() {
  return (
    <form className=" flex  p-8 flex-col gap-3" action={signInAction}>
      {/* <h1 className="text-lg  text-center">Sign In with Google Account</h1> */}
      <button className="py-3 px-7 bg-slate-800 text-white flex gap-2 items-center rounded-md hover:bg-slate-900">
        <FcGoogle className="w-7 h-7" />
        Sign In with Google
      </button>
    </form>
  );
}

export default SignInButton;
