 
import Features from "./Features"

function Hosthub() {
      const feat = [
        {
            icon: "/icons/1.png",
            title: "Easy To Setup",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, libero!"
        },
        {
            icon: "/icons/2.png",
            title: "Secure & Reliable",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, libero!"
        },
        {
            icon: "/icons/3.png",
            title: "Fast Performance",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, libero!"
        },
        {
            icon: "/icons/4.png",
            title: "Unlimited Database",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, libero!"
        },
        {
            icon: "/icons/5.png",
            title: "Cloud Server & VPS",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, libero!"
        },
        {
            icon: "/icons/6.png",
            title: "Customer Support",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, libero!"
        },

          ]
  return (
    <div className="bg-[#F2F6FB] grid place-content-center py-15 ">
       
        <h3 className=" font-bold text-2xl text-center">HostBridge Core Features</h3>
        
<div className="flex flex-wrap justify-center items-center gap-10 w-[80%] mt-10 mx-auto">
        {feat.map((f,idx) => (
            <Features key={idx} icon ={f.icon} title={f.title} description={f.description} />
        ))}
       </div>
       
    </div>
  )
}

export default Hosthub