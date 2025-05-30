import React, { useContext } from 'react'
import { Bookcontext } from '../context/BookContext'
import Singlebook from '../components/Singlebook';

const Favourites = () => {

    const {fav} = useContext(Bookcontext)
  

    
  return (
    <div className='flex gap-[3rem] px-[3rem]'>
    {
      fav.map((book)=>(
        <Singlebook book = {book}/>
      ))
    }
    </div>
  )
}

export default Favourites
