import React from 'react';
import Navbar from '../components/Navbar'
import SantaClaus from '../assets/SantaClaus.jpg'
import { Facebook, Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react';

const Day01 = () => {
  return (
    <>
      <Navbar />
      <div className=' pt-12 sm:pt-16 h-screen flex-col content-center'>

        <div className='justify-center p-4 flex'>

          <div className='rounded-3xl flex-col w-[300px] h-[450px] bg-lime-900'>

            <div className='pattern-vertical-lines pattern-red-500 pattern-bg-white pattern-size-20 pattern-opacity-100 w-full h-2/6 rounded-t-3xl drop-shadow-2xl flex justify-center items-center'>
              <img src={SantaClaus} className='h-[96px] w-[96px] rounded-full object-cover object-right drop-shadow-2xl'></img>
            </div>

            <div className='h-3/6 text-pretty font-roboto text-center text-white px-4 grid content-around'>
              <div>
                <h2 className=' text-2xl'>Santa Claus</h2>
                <h3 className='text-xs text-slate-300'>@santaclaus</h3>
              </div>

              <div className=' flex justify-center gap-6'>
                <Facebook size={18} />
                <Linkedin size={18} />
                <Twitter size={18} />
                <Instagram size={18} />
                <Dribbble size={18} />
              </div>
              <div>
                <p className=' text-sm'>Santa Claus is the best of the best. He will give you a lot of presents of you were a very good boy during the year.</p>
              </div>

            </div>

            <div className='flex h-1/6 justify-around font-roboto text-xs text-white text-center mx-5 gap-5 items-center'>
              <button className=' bg-red-500 border-2 border-red-500 rounded-full h-9 w-full'>Follow</button>
              <button className=' border-2 border-white rounded-full h-9 w-full'>Message</button>
            </div>

          </div>
        </div>

      </div >
    </>
  );
};

export default Day01; <h1>Day One</h1>