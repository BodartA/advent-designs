import React from 'react';
import Navbar from '../components/Navbar';
import newsletter from '../assets/newsletter.png'
import { Mail } from 'lucide-react'

const Day03 = () => {
  return (
    <div>
      <Navbar />

      <div className=' bg-yellow-200 h-screen pt-12 sm:pt-16'>
        <div className=' h-full p-16'>

          <div className='bg-white rounded-3xl h-full drop-shadow-2xl lg:flex'>

            <div className=' h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center px-4'>
              <div className=' h-full lg:h-1/2 w-full flex justify-center items-center'>
                <img className=' h-full object-contain' src={newsletter}></img>
              </div>
            </div>

            <div className=' lg:w-1/2 font-roboto flex items-center lg:justify-start justify-center h-1/2 lg:h-full'>
              <div className=' lg:h-1/2 max-w-full px-8 h-full'>
                <div className=' grid gap-6 h-full content-center'>
                  <div>
                    <h2 className='text-2xl font-bold text-zinc-800'>Sign up to our</h2>
                    <h1 className='text-6xl font-extrabold text-zinc-800'>Newsletter</h1>
                  </div>
                  <p className=' text-base font-light'>Subscribe to our newsletter and stay udpated.</p>
                  <div className=' flex outline outline-2 outline-zinc-300 rounded-lg w-full h-10 items-center has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-amber-400'>
                    <Mail className=' stroke-zinc-400 size-5 mx-2' />
                    <input className=' size-full rounded-lg focus:outline focus:outline-0 text-zinc-800' type='' placeholder="Your email">
                    </input >
                  </div>
                  <button className=' bg-amber-400 h-10 rounded-lg'>Sign Up</button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div >
  );
};

export default Day03;