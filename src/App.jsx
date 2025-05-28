import React from 'react'
import Navabar from './components/Navabar'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='w-full min-h-full py-[2rem] bg-[#f0ebcc] flex flex-col gap-[3rem]'>
    <Navabar/>
    <Mainroutes/>
    </div>
  )
}

export default App
