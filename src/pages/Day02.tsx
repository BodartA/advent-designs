import React from 'react';
import Navbar from '../components/Navbar';

const Day02 = () => {



  return (
    <div className=' flex flex-col min-h-screen h-screen'>
      <Navbar />

      <div className=' min-h-screen h-fit flex pt-12 sm:pt-16 justify-center w-fit min-w-full items-center bg-gradient-to-b from-indigo-700 via-purple-700 to-pink-700'>

        <div className=' md:flex md:flex-row md:items-start font-roboto flex flex-col items-center gap-5 py-4'>

          <div className='flex justify-end items-start md:w-1/2 text-white sm:w-[350px] md:pl-4 w-[300px]'>
            <div className=' flex-col'>
              <h1 className=' text-2xl sm:text-4xl pb-2 text-center md:text-start'>Contact Us</h1>
              <p className=' text-sm sm:text-base md:w-3/4 text-center md:text-start'>Get in touch with us ! Whatever you have questions, feedback, or just want to ay hello, we're here for you.</p>
            </div>
          </div>

          <div className=' md:w-1/2'>
            <div className='rounded-3xl md:h-[450px] sm:w-[350px] h-[450px] bg-white px-4 py-6 drop-shadow-2xl flex-col flex max-w-[300px]'>
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