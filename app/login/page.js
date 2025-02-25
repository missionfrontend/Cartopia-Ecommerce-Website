import SignInButton from "../_components/SignInButton";
import SignInPassword from "../_components/SignInPassword";

function Page(){
    return <div className="flex flex-col mt-10 justify-center items-center mx-24  py-8">
          <div className="bg-purple-50 px-2 py-3">

          <SignInButton/>
          <SignInPassword/>
          </div>
        </div> 
}

export default Page;