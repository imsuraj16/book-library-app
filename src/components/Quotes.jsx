import React from 'react'

const Quotes = () => {
  return (
    <div className="flex flex-col gap-4 w-fit">
          <div className="flex items-center gap-3">
            <div className="w-[3rem] h-[3rem]">
              <img className="w-full h-full obkect-cover rounded-full"
                src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="flex flex-col text-gray-400">
              <p>name</p>
              <p>author</p>
            </div>
          </div>
          <p className="w-[35rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            officia modi pariatur veritatis commodi nihil laudantium debitis?
            Quisquam, optio suscipit.
          </p>
        </div>
  )
}

export default Quotes
