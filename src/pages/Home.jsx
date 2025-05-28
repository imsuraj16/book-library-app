import React from "react";
import Quotes from "../components/Quotes";

const Home = () => {
  return (
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
        <h1 className="text-[2rem]"><span className="text-[4rem] text-[#cebb3a]">Quotes</span> of the day....</h1>
        <Quotes/>
      </div>
    </div>
  );
};

export default Home;
