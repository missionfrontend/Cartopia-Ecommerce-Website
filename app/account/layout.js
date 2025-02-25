import SideNavigation from "../_components/SideNavigation"

function Layout({children}){
  return <div className="bg-purple-50 grid grid-cols-5 mt-8 min-h-screen mx-24">
         <SideNavigation/>
         <main className="col-span-4 px-4 my-2 mx-2 py-2">
            {children}
         </main>
  </div>
}

export default Layout