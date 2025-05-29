import React, { useState } from "react";
import Quotes from "../components/Quotes";

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

  return (
    <div className="flex flex-col gap-[3rem]">
      <div className="w-full px-[3rem] flex gap-[5rem] py-[1.5rem]">
        <div className="w-[50%] flex flex-col gap-[2rem]">
          <h1 className="text-[4rem]">Keep the story going...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            necessitatibus! Possimus provident tenetur beatae mollitia ducimus
            architecto sapiente, ex odit.
          </p>
          <button className="w-fit bg-black px-[3rem] py-3 rounded-lg text-white">
            Start reading
          </button>
        </div>

        <div className="w-[50%] flex flex-col gap-4">
          <h1 className="text-[2rem]">
            <span className="text-[4rem] text-[#cebb3a]">Quotes</span> of the
            day....
          </h1>
          <Quotes />
        </div>
      </div>

      <div className="w-full flex gap-[3rem] px-[3rem] overflow-x-auto">
        {data.map((item, index) => (
          <div key={index} className="min-w-[18rem] p-4 rounded-xl shadow-lg float-animation">
            <div className="w-full h-[19rem] mb-4">
              <img
                className="w-full h-full object-cover object-top rounded-lg hover:scale-105 duration-100 transition-all ease-in shadow-lg"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className='mb-4'>
              <h1 className="text-[1.2rem] font-bold">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;