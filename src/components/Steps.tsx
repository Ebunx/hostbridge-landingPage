
type StepProps ={
    image:string,
    title:string,
    description:string
} 
function Steps({image, title, description}: StepProps) {

    


  return (
    <div className=" w-full flex  mt-10" >
        
            <div className="   space-y-2  ">
        <img src={image} alt="" className="w-15 place-self-center"/>
        <h4 className="text-center  w-full font-semibold">{title}</h4>
        <p className="text-center w-[80%] place-self-center">{description}</p>
        </div>
  
    </div>
  )
}

export default Steps