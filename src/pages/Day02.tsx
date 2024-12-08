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
            <div className='rounded-3xl h-[450px] w-[350px] bg-white px-4 py-6 drop-shadow-2xl flex-col flex'>
              <div className=' h-8'>
                <h3 className=' text-base'>Send us a Message</h3>
              </div>
              <div className=' grid gap-3 items-center'>
                <div className=' grid gap-2 text-slate-600'>
                  <input placeholder='Name' className=' rounded-md px-2 border-2 border-stone-200'></input>
                  <input placeholder='Email' className=' rounded-md px-2 border-2 border-stone-200'></input>
                  <input placeholder='Phone' className=' rounded-md px-2 border-2 border-stone-200'></input>
                </div>
                <div>
                  <p className=' text-xs'>Preferred contact method of communication</p>
                </div>
                <div className=' flex gap-4 text-xs'>
                  <label className=''>
                    <input className=' mr-2' type='radio' name='radio' value="email" defaultChecked={true} />
                    Email
                  </label>
                  <label className=''>
                    <input className=' mr-2' type='radio' name='radio' value='phone' />
                    Phone
                  </label>
                </div>
              </div>
              <div className=' h-24 my-4'>
                <textarea id='d2TA' className=' border-2 rounded-md px-2 border-stone-200 h-full w-full' placeholder='Message' />
              </div>

              <div className='flex-1 content-end'>
                <button className='bg-pink-600 w-full p-2 rounded-full text-sm text-white'>Submit</button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div >
  );
};

export default Day02;