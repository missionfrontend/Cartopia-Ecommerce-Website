export function formatCurrency(currency){
   const formated = new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD",
   }).format(currency)

   return formated;
}