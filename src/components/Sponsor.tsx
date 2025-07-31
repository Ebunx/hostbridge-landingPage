
const sponsors = [
    {
        name:"Zokotec",
    },
    {
        name:"Landises",
    },
    {
        name:"HostMate",
    },
    {
        name:"mazec",
    }
]
function Sponsor() {
  return (
    <div className="hidden  rounded-xl bg-gray-300 text-white  justify-between p-4 px-8 mx-auto w-[60%] -mb-5 ">
    {sponsors.map((sp:any)=>
        (
       <div className="font-bold text-xl ">
        {sp.name}
       
    </div>  
   ) )}
    </div>
   
  )
}

export default Sponsor