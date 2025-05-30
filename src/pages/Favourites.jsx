import React, { useContext } from 'react'
import { Bookcontext } from '../context/BookContext'

const Favourites = () => {

    const[fav] = useContext(Bookcontext)
  

    console.log(fav,"favourites");
    
  return (
    <div>
    
    </div>
  )
}

export default Favourites
