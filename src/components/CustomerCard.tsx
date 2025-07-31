type customerCardProps = {
    comment: string;
    author: string;
    date:  number;
    rating: number;
}
function CustomerCard({comment, author, date, rating}: customerCardProps) {
  return (
    <div className="border md:w-[20%] border-gray-300 p-4 rounded-lg  ">
        <p>{comment}</p>

        <p className="author">{author} - {date} <span>{rating}</span></p>
    </div>
  )
}

export default CustomerCard