 
import IMG1 from "../../public/Illustration.png"

function Hero() {
  return (
    <div className="flex flex-wrap m  md:flex-nowrap justify-between w-[80%] items-center  place-self-center px-10 p-6 md:h-[60vh] bg-blue-500 text-white">
        <section className="w-100 space-y-4">
            <h1 className="   text-sm text-gray-300">HOSTBRIDGE HOSTING</h1>
            <h1 className='capitalize text-4xl font-bold '> <div className="typewriter flex " > </div> & secure hosting for any websites </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptatum recusandae hic totam atque tempore placeat vero minus nisi quasi! Quibusdam facere perferendis a molestiae incidunt ex voluptate odio repellendus?</p>
            
        </section>
        <section>
            <img src={IMG1} alt="" width={400} />
        </section>
    </div>
  )
}

export default Hero