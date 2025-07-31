import CustomerCard from "./CustomerCard"

function CustomerSection() {

    const costumerData =[
         {
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi tempore
        ? Voluptates magni assumenda ipsa nemo, tempore maiores rem a, obcaecati dolorem aliquam nesciunt ducimus.  `,
        author: "Jacob Miller",
        date: "Feb 22, 2023",
        rating: 6
    },
         {
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi tempore
        ? Voluptates magni assumenda ipsa nemo, tempore maiores rem a, obcaecati dolorem aliquam nesciunt ducimus.  `,
        author: "Jacob Miller",
        date: "Feb 22, 2023",
        rating: 6
    },
         {
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi tempore
        ? Voluptates magni assumenda ipsa nemo, tempore maiores rem a, obcaecati dolorem aliquam nesciunt ducimus.  `,
        author: "Jacob Miller",
        date: "Feb 22, 2023",
        rating: 6
    },
]
return (
    <div className="bg-white grid p-10">
        <h3 className="text-2xl font-bold text-center p-4">Customer Reviews</h3>

        <div className="flex flex-wrap gap-5 mx-auto justify-center">    { costumerData.map((com,idx) => (
        <CustomerCard key={idx} comment={com.comment} author={com.author} date={Date.now()} rating={com.rating} /> 
        ))} </div>
       
    
    </div>
  )
}

export default CustomerSection