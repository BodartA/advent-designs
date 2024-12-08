import React from 'react';
import Navbar from '../components/Navbar';

const Day02 = () => {
  return (
    <div>
      <Navbar />

      <div className=' h-screen flex pt-12 sm:pt-16 justify-center items-center bg-gradient-to-b from-indigo-700 via-purple-700 to-pink-700'>

        <div className='flex h-fit font-roboto'>

          <div className='flex justify-end items-start w-1/2 text-white'>
            <div className=' flex-col'>
              <h1 className=' text-4xl pb-2'>Contact Us</h1>
              <p className=' w-3/4'>Get in touch with us ! Whatever you have questions, feedback, or just want to ay hello, we're here for you.</p>
            </div>

          </div>

          <div className=' w-1/2'>
            <div className='rounded-3xl h-[450px] w-[350px] bg-white px-4 py-6 drop-shadow-2xl'>
              <h3 className=' pb-4 text-base'>Send us a Message</h3>
              <div className=' grid gap-3'>
                <input placeholder='Name' className=' rounded-md px-2 border-2 border-stone-200'></input>
                <input placeholder='Email' className=' rounded-md px-2 border-2 border-stone-200'></input>
                <input placeholder='Phone' className=' rounded-md px-2 border-2 border-stone-200'></input>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Day02;