import Navbar from '../components/Navbar';
import Terrible from '../assets/emojis/dead.png'
import Bad from '../assets/emojis/sad-face.png'
import OK from '../assets/emojis/smiling-face.png'
import Good from '../assets/emojis/winking-face.png'
import Great from '../assets/emojis/happy-face.png'


const Day04 = () => {


  return (
    <div className=' flex flex-col min-h-screen h-screen'>
      <Navbar />

      <div className=' bg-orange-300 flex-1 flex justify-center items-center font-roboto'>

        <div className=' bg-white rounded-2xl flex flex-col p-4 text-center gap-6 drop-shadow-2xl'>
          <h1 className='font-bold text-2xl text-zinc-800'>Rate Us !</h1>
          <h2 className='font-normal text-sm text-zinc-500'>Tell us about your experience</h2>

          <div className='flex sm:gap-10 gap-2 font-light text-zinc-500'>

            <button className=' object-scale-down flex flex-col items-center justify-between saturate-0 hover:saturate-100 hover:text-zinc-800 focus:saturate-100 focus:text-zinc-800'>
              <img className='' src={Terrible} width={48} height={48}></img>
              <label className=''>Terrible</label>
            </button>

            <button className='  flex flex-col items-center justify-between saturate-0 hover:saturate-100 hover:text-zinc-800 focus:saturate-100 focus:text-zinc-800'>
              <img className=' object-scale-down' src={Bad} width={48} height={48}></img>
              <label className=''>Bad</label>
            </button>

            <button className=' object-scale-down flex flex-col items-center justify-between saturate-0 hover:saturate-100 hover:text-zinc-800 focus:saturate-100 focus:text-zinc-800'>
              <img className='' src={OK} width={48} height={48}></img>
              <label className=''>OK</label>
            </button>

            <button className=' object-scale-down flex-col flex gap-4 items-center justify-between saturate-0 hover:saturate-100 hover:text-zinc-800 focus:saturate-100 focus:text-zinc-800'>
              <img className='' src={Good} width={48} height={48}></img>
              <label className=''>Good</label>
            </button>

            <button className=' object-scale-down flex flex-col items-center justify-between saturate-0 hover:saturate-100 hover:text-zinc-800 focus:saturate-100 focus:text-zinc-800'>
              <img className='' src={Great} width={48} height={48}></img>
              <label className=''>Great</label>
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Day04;