 
 type Planprop = {
    type:string,
    price:string,
    list: string[]

 }
function Plan({type, price, list}: Planprop) {

  
  return (
    <div className="border-1 border-[#F2F6FB]  hover:bg-[#F2F6FB] rounded-md md:w-[20%] place-slef-center space-y-4 p-4 px-auto p ">
        <p className="text-gray-200">{type}</p>
      <p className="text-xl "> <sup>$</sup>{price} <span className="text-sm">/ Month</span></p> 
      <button className="border hover:text-white p-2 rounded-lg font-semibold hover:bg-amber-600">SELECT</button>

      <ul>
        {list.map((li, idx) => (
             <li key={idx}>{li}</li> 
        ))}
      
      </ul>
    </div>
  )
}

export default Plan
