import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


 

function Nav() {

  const [className, setClassName] = useState("mobile-nav")

  function closeNav(){
    setClassName("mobile-nav slide-out")
    setTimeout(() => {
      
      setClassName("mobile-nav")
      setIssOpen(false)
    }, 500);

  }

  const [isOpen, setIssOpen] = useState(false)
  const NavContent = ["Home", "About", "Services", "Contact"]
  return (
    <div className="">
       <button className="flex md:hidden justify-end p-4 w-full text-white" onClick={()=> setIssOpen(true)}>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </button>
    <div className=' w-[80%] hidden md:block mx-auto  text-white '>
      <div className=" items-center gap-4 p-4 flex justify-between ">
 
        <div className="start flex logo text-2xl text-gradient from-blue-300 to-white font-bold">HOSTBRIDGE</div>
        <nav className="nav-links">
            <ul className=' flex justify-between items-center gap-4 ml-4'>
          {NavContent.map((li, idx)=>(

                <li key={idx}>{li}</li> 
                ))}
            </ul>
            </nav>
            

            <div className="auth flex justify-between items-center gap-4 p-4 ">
                <h4>LOGIN</h4>
                <button className='bg-amber-600 p-2 md:p-4 rounded-md'>GET STARTED</button>
            </div>
            </div>


           
            </div>

               {isOpen && 
             <div className={`${className}  mobile-nav grid place-self-end absolute top-0 h-screen bg-white w-[50%]`}>
              <button className= {`flex text-blue-500  justify-end p-4 w-full`}  onClick={()=> closeNav()}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
                 <ul className=' grid place-content-center   gap-20 ml-4'>
          {NavContent.map((li, idx)=>(

                <li className="font-semibold text-2xl hover:text-blue-500" key={idx}>{ li}</li> 
                ))}
            </ul>

            </div>
            }
    </div>
  )
}

export default Nav