import React from 'react'
import './App.css'
import { avatar, imgCard, ethereum, clock } from './assets'
const Cart = () => {
  return (
    <div className='relative max-w-full  h-screen bg-blue-950 (main BG) '>
      <div className=' max-w-[300px]  rounded-2xl p-5 
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[400px]  bg-blue-900 (card BG)  items-center'>
        <div className='flex-col max-w-full    '>
          <img src={imgCard} alt="imageCard" className='mb-3 w-full h-1/2 object-cover rounded-md  ' />
          <span className='absolute top-[20px] w-[260px] h-[260px] rounded-md hover:bg-cyan-400/25 transition duration-300'></span>
          <h1 className='text-white  font-outfit text-xl pb-2  hover:text-cyan-400 transition duration-300 '>Equilibrium #3429</h1>
          <p className='text-blue-500 text-[13px] text-base'>Our Equilibrium Collection Promotes balance and colm </p>
          <div className="flex justify-between pt-3 pb-1">
            <div className="flex items-center space-x-1">
              <img src={ethereum} alt="icons-ethereum" className='w-[10px] h-[16px]' srcset="" />
              <p className='text-cyan-400 (icons) font-bold text-[13px]'>0.041ETH</p>
            </div>
            <div className="flex items-center space-x-1 text-blue-500 (line)">
              <img src={clock} alt="icons-clock" className='w-[14px] h-[14px] text-blue-500' srcset="" />
              <p className='font-bold text-[13px] text-Blue-500 (lines)'>3 days left</p>
            </div>
          </div>
          {/* الجزء السفلي */}
          {/* <span className='block my-2 h-[2px] bg-blue-500'></span>
              <div>
                <div className="flex space-x-2">
                  <img src={avatar} className='w-[30px] border border-white rounded-full' alt="image-avatar" srcset="" />
                  <p className='text-blue-500 font-outfit text-[13px] ' > Creation of  <span className='font-outfit text-white'>Jules Wyvern</span></p>
                </div>
              </div> */}
          <div className="border-t border-blue-800/80 mt-4 pt-4 flex items-center gap-3">
            <img src={avatar}
              alt="Creator"
              className="w-8 h-8 rounded-full border border-white object-cover" />
            <p className="text-blue-500 text-sm">
              Creation of
              <span className="text-white font-semibold ml-1 hover:text-cyan-400 (icons) transition duration-300 cursor-pointer">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
