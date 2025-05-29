import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Singlebook = ({book,renderStars}) => {

  
  return (
    <div key={book.id} className="w-[18rem] p-4 rounded-xl shadow-lg">
            <div className="w-full h-[19rem] mb-4">
              <img
                className="w-full h-full object-cover object-top rounded-lg hover:scale-105 duration-100 transition-all ease-in shadow-lg"
                src={book.url}
              />
            </div>
            <div className='mb-4'>
               <h1 className="text-[1.2rem] font-bold">{book.title}</h1>
            <p className="text-xl text-yellow-800">
              {renderStars(book.rating)}{" "}
              <span className="text-black text-sm">({book.rating}/5)</span>
            </p>
            </div>
           
            <Link to={`/books/book-details/${book.id}`} className="bg-amber-300 px-[2rem] py-1 rounded-lg w-fit">
              Show details
            </Link>
          </div>
  )
}

export default Singlebook
