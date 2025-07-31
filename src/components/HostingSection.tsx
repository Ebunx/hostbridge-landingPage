import Plan from "./plan"

 

 

function HostingSection() {
      const Plans = [
        {
            type:"ESSENTIALS",
            price:"5",
            list: ["✓1 Website","✓10 GB Storage", "✓ Free SSL", "✓ Free Email", "✓ Daily Backup", "✓ Unlimited Resources ",  "✓ Dedicated IP Address"]
        },
        {
            type:"ESSENTIALS",
            price:"5",
            list: ["✓1 Website","✓10 GB Storage", "✓ Free SSL", "✓ Free Email", "✓ Daily Backup", "✓ Unlimited Resources ",  "✓ Dedicated IP Address"]
        },
        {
            type:"ESSENTIALS",
            price:"5",
            list: ["✓1 Website","✓10 GB Storage", "✓ Free SSL", "✓ Free Email", "✓ Daily Backup", "✓ Unlimited Resources ",  "✓ Dedicated IP Address"]
        },
        {
            type:"ESSENTIALS",
            price:"5",
            list: ["✓1 Website","✓10 GB Storage", "✓ Free SSL", "✓ Free Email", "✓ Daily Backup", "✓ Unlimited Resources ",  "✓ Dedicated IP Address"]
        },
        {
            type:"ESSENTIALS",
            price:"5",
            list: ["✓1 Website","✓10 GB Storage", "✓ Free SSL", "✓ Free Email", "✓ Daily Backup", "✓ Unlimited Resources ",  "✓ Dedicated IP Address"]
        },
    ]
  return (
    <div className="bg-white w-full pt-10 space-y-5">
        <h2 className="text-2xl font-bold text-center">Choose Your Hosting Plan</h2>
        <p className=" mx-auto text-center  w-[50%] pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eaque consequatur dicta fugiat quod vitae.</p>

<div className="mx-auto gap-2 flex flex-wrap  w-[80%] place-content-center">
    {Plans.map ((plan, idx)=>(
    <Plan key={idx} type = {plan.type} price={plan.price} list = {plan.list}/>
    ))}

    </div>
        

    </div>
  )
}

export default HostingSection