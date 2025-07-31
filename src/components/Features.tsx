
type FeatureProps = {
    icon: string;
    title: string;
    description: string;
}

function Features({icon, title, description}: FeatureProps) {


  
  return (
    <div className="container md:w-1/4 flex flex-wrap">
    
    <div className="space-y-4 ">
        <img src={icon}alt="" className="icon md:w-[15%]" />
        <h3 className="font-bold">{title}</h3>
        <p className=" ">{description}</p>
    </div>
    </div>
  )
}

export default Features