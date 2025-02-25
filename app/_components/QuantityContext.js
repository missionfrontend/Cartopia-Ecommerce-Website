"use client"

const { createContext, useState, useContext } = require("react")

const QuantityContext = createContext()

function QuantityProvider({children}){
    const [quantity, setquantity] = useState(1);
    
    const reset = ()=>setquantity(1)
    return <QuantityContext.Provider value={{setquantity,quantity,reset}}>
          {children}
    </QuantityContext.Provider> 
}
function useQuantity(){
    const context = useContext(QuantityContext)

    return context
}
export {QuantityProvider,useQuantity};