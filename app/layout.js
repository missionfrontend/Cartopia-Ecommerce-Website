
import Header from "./_components/Header";
import { QuantityProvider } from "./_components/QuantityContext";
import "./styles/globals.css"
import {Poppins, Varela_Round} from "next/font/google"


const verela_round = Poppins({
  display:"swap",
  subsets:["latin"],
  weight:"500"
})
export const metadata = {
  title:"Cartopia"
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`bg-purple-100 ${verela_round.className}`}
      >
        <Header/>

        <main>
        <QuantityProvider>
      
        {children}
        </QuantityProvider>
        </main>
      
      </body>
    </html>
  );
}
