import React, { useState } from "react";
import Quotes from "../components/Quotes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([
    {
      name: "To Kill a Mockingbird",
      img: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "1984",
      img: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Pride and Prejudice",
      img: "https://images.unsplash.com/photo-1705721357357-ab87523248f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2tzfGVufDB8fDB8fHww",
    },
    {
      name: "The Great Gatsby",
      img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    },
  ]);

  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-20 py-6 md:py-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">Keep the story going...</h1>
          <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            necessitatibus! Possimus provident tenetur beatae mollitia ducimus
            architecto sapiente, ex odit.
          </p>
          <button onClick={()=>navigate('/books')} className="w-fit cursor-pointer bg-black px-6 md:px-8 lg:px-12 py-3 rounded-lg text-white text-sm md:text-base">
            Start reading
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            <span className="text-3xl md:text-4xl lg:text-6xl text-[#cebb3a]">Quotes</span> of the
            day....
          </h1>
          <Quotes />
        </div>
      </div>

      <div className="w-full flex gap-4 md:gap-6 lg:gap-12 px-4 md:px-8 lg:px-12 overflow-x-auto">
        {data.map((item, index) => (
          <div key={index} className="min-w-[16rem] md:min-w-[18rem] lg:min-w-[20rem] p-4 rounded-xl shadow-lg float-animation">
            <div className="w-full h-[16rem] md:h-[18rem] lg:h-[20rem] mb-4">
              <img
                className="w-full h-full object-cover object-top rounded-lg hover:scale-105 duration-100 transition-all ease-in shadow-lg"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className='mb-4'>
              <h1 className="text-lg md:text-xl font-bold">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;