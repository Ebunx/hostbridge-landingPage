import Steps from "./Steps"

function StepsContainer() {

  const Steper = [
    {
      image: "/start-by.png",
      title: "Start By Integrating",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, iste?"
    },
    {
      image: "/get.png",
      title: "Get The Preview",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, iste?"
    },
    {
      image: "/share.png",
      title: "Share Your Work",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, iste?"
    },
  ];

  return (
    <div className='mt-5 py-10 w-full flex flex-col items-center bg-white '>
      <h3 className='text-2xl font-bold'>Three Easy Steps</h3>
      <div className="grid md:flex w-[80%] place-content-center  items-center gap-10">
        {Steper.map((st, idx) => (
          <Steps
            key={st.title + idx}
            image={st.image}
            title={st.title}
            description={st.description}
          />
        ))}
      </div>
    </div>
  );
}

export default StepsContainer