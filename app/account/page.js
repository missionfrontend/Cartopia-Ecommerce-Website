



import { auth } from "../_lib/auth";

async function Page() {

  const session = await auth();
  
  return (
    <div className=" px-3  flex flex-col  ">
      <div>
        <h1 className="text-2xl font-semibold">Welcome {session?.user?.name || session?.name}</h1>
      </div>
      
    </div>
  );
}

export default Page;
