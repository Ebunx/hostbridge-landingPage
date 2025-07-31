import Faq from "./Faq"

 

function FaqSection() {

  const Faqs = [
    {
      question: "What Is Web Hosting And Server Exactly",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, architecto",
    },
    {
      question: "What Is Web Hosting And Server Exactly",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, architecto",
    },
    {
      question: "What Is Web Hosting And Server Exactly",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, architecto",
    },
    {
      question: "What Is Web Hosting And Server Exactly",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, architecto",
    },
  ]
  return (
    <div className="grid place-content-center py-25 bg-white">
        <h2 className='mb-5 capitalize text-2xl font-semibold'>FREQUENTLY ASKED QUESTION</h2>
       {Faqs.map ((fq)=>(<Faq question={fq.question} answer={fq.answer} />))} 
    </div>
  )
}

export default FaqSection