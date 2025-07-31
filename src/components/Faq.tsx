import { useState } from "react"

type FaqProps = {
    question: string;
    answer: string;
}

function Faq({question, answer}:  FaqProps) {

    const [isSeen, setIsSeen] = useState(false)
  return (
    <div className="border-1 border-gray-200 p-4 rounded-md w-[300px] md:w-[500px]">
        <h3 className="flex justify-between   place-items-center font-semibold ">{question} <span className="text-4xl  font-bold items-center justify-end   " onClick={()=> setIsSeen(!isSeen)}>{isSeen? "-" : "+"} </span></h3>
        {isSeen && 
        <p className="w-[80%]">{answer}</p>
        }

    </div>
  )
}

export default Faq