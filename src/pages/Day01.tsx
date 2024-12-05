import React from 'react';
import Navbar from '../components/Navbar'
import SantaClaus from '../assets/SantaClaus.jpg'
import { Facebook, Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react';

const Day01 = () => {
  return (
    <>
      <Navbar />
      <div className='pt-16 h-screen flex-col'>

        <div className=' flex p-4 justify-start'>
          <h1>1. Santa Claus Card</h1>
        </div>

        <div className='justify-center p-4 flex'>

          <div className='rounded-3xl flex-col w-[300px] h-[450px] bg-green-700'>

            <div className='pattern-vertical-lines pattern-red-500 pattern-bg-white pattern-size-20 pattern-opacity-100 w-full h-2/6 rounded-t-3xl drop-shadow-2xl flex justify-center items-center'>
              <img src={SantaClaus} className='h-[96px] w-[96px] rounded-full object-cover object-right drop-shadow-2xl'></img>
            </div>

            <div className='h-3/6 text-pretty text-center bg-blue-500 px-4'>
              <div>
                <h2 className=''>Santa Claus</h2>
                <h3>@santaclaus</h3>
              </div>

              <div className=' flex justify-center gap-6'>
                <Facebook size={18} />
                <Linkedin size={18} />
                <Twitter size={18} />
                <Instagram size={18} />
                <Dribbble size={18} />
              </div>
              <div>
                <p>Santa Claus is the best of the best. He will give you a lot of presents of you were a very good boy during the year.</p>
              </div>

            </div>

          </div>
        </div>

      </div >
    </>
  );
};

export default Day01; <h1>Day One</h1>