const { FaSignOutAlt } = require("react-icons/fa");
const { signOutAction } = require("../_lib/action");

function SignOutButton(){
    return <form action={signOutAction}>
          <button className=" py-2 px-2 flex gap-2 items-center hover:text-red-500"><FaSignOutAlt className="w-6 h-6"/>Sign Out</button>
    </form>
}

export default SignOutButton;