import React, { useContext } from 'react'
import { Bookcontext } from '../context/BookContext'
import Singlebook from '../components/Singlebook';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
  const { fav } = useContext(Bookcontext)

  const navigate = useNavigate()

  if (fav.length > 0) {
    return (
      <div className='w-full px-[4rem]'>
        <h1 className="text-[4rem] py-[1rem]">
          Your <span className="text-[#e4c815]">Favourites</span>..
        </h1>
        <div className='flex gap-[3rem] flex-wrap'>
          {
            fav.map((book) => (
              <Singlebook book={book} key={book.id} />
            ))
          }
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0ebcc] via-[#f5f1d8] to-[#ede6b8] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated Heart Icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#e4c815] to-[#d4b515] rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
            <div className="relative">
              {/* Heart shape */}
              <div className="w-16 h-16 relative">
                <div className="absolute top-0 left-0 w-8 h-12 bg-white rounded-t-full transform rotate-45 origin-bottom"></div>
                <div className="absolute top-0 right-0 w-8 h-12 bg-white rounded-t-full transform -rotate-45 origin-bottom"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-12 border-transparent border-t-white"></div>
              </div>
              {/* Sparkle effects */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          {/* Floating hearts */}
          <div className="absolute -top-3 -left-4 text-[#e4c815] text-2xl animate-bounce">♥</div>
          <div className="absolute -bottom-2 -right-5 text-[#d4b515] text-lg animate-pulse opacity-60">♥</div>
          <div className="absolute top-1 right-8 text-[#c9b50f] text-sm animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}>♥</div>
        </div>

        {/* Main Message */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          No Favourites
          <span className="block text-[#e4c815] text-4xl md:text-5xl mt-2">
            Yet
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          You haven't marked any books as favourites.<br />
          <span className="text-[#c9b50f] font-medium">Discover books you'll love and add them here!</span>
        </p>

        {/* Call to Action Buttons */}
        <div className="space-y-4">
          <button onClick={()=>navigate('/books')} className="bg-gradient-to-r from-[#e4c815] to-[#d4b515] hover:from-[#d4b515] hover:to-[#c4a515] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg mr-4">
            Browse Books
          </button>
          
          <button onClick={()=>navigate('/books')} className="bg-white hover:bg-gray-50 text-[#d4b515] font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg border-2 border-[#e4c815]">
            View All Books
          </button>
          
          {/* Helper text */}
          <div className="text-gray-500 text-sm mt-6">
            <span className="inline-flex items-center">
              <span className="text-red-500 mr-2">♥</span>
              Tip: Click the heart icon on any book to add it to favourites
            </span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-6 opacity-30">
          <div className="text-[#e4c815] text-3xl animate-pulse">♥</div>
          <div className="text-[#d4b515] text-2xl animate-pulse" style={{ animationDelay: '0.3s' }}>♥</div>
          <div className="text-[#c9b50f] text-4xl animate-pulse" style={{ animationDelay: '0.6s' }}>♥</div>
          <div className="text-[#d4b515] text-2xl animate-pulse" style={{ animationDelay: '0.9s' }}>♥</div>
          <div className="text-[#e4c815] text-3xl animate-pulse" style={{ animationDelay: '1.2s' }}>♥</div>
        </div>
      </div>
    </div>
  )
}

export default Favourites