import React, { useContext } from 'react'
import { Bookcontext } from '../context/BookContext'
import Singlebook from '../components/Singlebook';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
  const { fav } = useContext(Bookcontext)

  const navigate = useNavigate()

  if (fav.length > 0) {
    return (
      <div className='w-full px-4 md:px-8 lg:px-16'>
        <h1 className="text-3xl md:text-5xl lg:text-6xl py-4 md:py-6 lg:py-8">
          Your <span className="text-[#e4c815]">Favourites</span>..
        </h1>
        <div className='flex gap-4 md:gap-8 lg:gap-12 flex-wrap'>
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
        <div className="mb-6 md:mb-8 relative">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-[#e4c815] to-[#d4b515] rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
            <div className="relative">
              {/* Heart shape */}
              <div className="w-12 h-12 md:w-16 md:h-16 relative">
                <div className="absolute top-0 left-0 w-6 h-9 md:w-8 md:h-12 bg-white rounded-t-full transform rotate-45 origin-bottom"></div>
                <div className="absolute top-0 right-0 w-6 h-9 md:w-8 md:h-12 bg-white rounded-t-full transform -rotate-45 origin-bottom"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-9 md:border-l-8 md:border-r-8 md:border-t-12 border-transparent border-t-white"></div>
              </div>
              {/* Sparkle effects */}
              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 md:-left-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          {/* Floating hearts */}
          <div className="absolute -top-2 md:-top-3 -left-3 md:-left-4 text-[#e4c815] text-xl md:text-2xl animate-bounce">♥</div>
          <div className="absolute -bottom-1 md:-bottom-2 -right-3 md:-right-5 text-[#d4b515] text-base md:text-lg animate-pulse opacity-60">♥</div>
          <div className="absolute top-1 right-6 md:right-8 text-[#c9b50f] text-xs md:text-sm animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}>♥</div>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
          No Favourites
          <span className="block text-[#e4c815] text-2xl md:text-4xl lg:text-5xl mt-1 md:mt-2">
            Yet
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2">
          You haven't marked any books as favourites.<br />
          <span className="text-[#c9b50f] font-medium">Discover books you'll love and add them here!</span>
        </p>

        {/* Call to Action Buttons */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <button onClick={()=>navigate('/books')} className="w-full sm:w-auto bg-gradient-to-r from-[#e4c815] to-[#d4b515] hover:from-[#d4b515] hover:to-[#c4a515] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-base md:text-lg">
              Browse Books
            </button>
            
            <button onClick={()=>navigate('/books')} className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#d4b515] font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-base md:text-lg border-2 border-[#e4c815]">
              View All Books
            </button>
          </div>
          
          {/* Helper text */}
          <div className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6 px-2">
            <span className="inline-flex items-center">
              <span className="text-red-500 mr-2">♥</span>
              Tip: Click the heart icon on any book to add it to favourites
            </span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 md:mt-12 flex justify-center space-x-4 md:space-x-6 opacity-30">
          <div className="text-[#e4c815] text-xl md:text-3xl animate-pulse">♥</div>
          <div className="text-[#d4b515] text-lg md:text-2xl animate-pulse" style={{ animationDelay: '0.3s' }}>♥</div>
          <div className="text-[#c9b50f] text-2xl md:text-4xl animate-pulse" style={{ animationDelay: '0.6s' }}>♥</div>
          <div className="text-[#d4b515] text-lg md:text-2xl animate-pulse" style={{ animationDelay: '0.9s' }}>♥</div>
          <div className="text-[#e4c815] text-xl md:text-3xl animate-pulse" style={{ animationDelay: '1.2s' }}>♥</div>
        </div>
      </div>
    </div>
  )
}

export default Favourites