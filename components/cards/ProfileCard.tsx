import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'

const ProfileCard = () => {
  return (
    <div className='flex flex-wrap flex-col md:flex-row justify-center md:justify-start items-center md:items-start rounded-lg bg-white dark:bg-slate-700 mx-6 px-6 py-8 drop-shadow-xl'>
      <div className='bg-white dark:bg-slate-500 drop-shadow-lg px-4 py-2 rounded-lg'>
        <Image src={'/aidil-memoji.png'} width={80} height={80} className='rounded-lg' alt={'aidil-memoji'} />
      </div>
      <div className='md:ml-6'>
        <div className='flex flex-row mt-5 md:mt-2 justify-center md:justify-start items-center'>
          <p className='text-slate-900 dark:text-white text-2xl text-center md:text-left mr-2'>Aidil Safwan</p>
          <a href='https://www.linkedin.com/in/aidilsafwan/' target='_blank'>
            <FaLinkedin size={18} className='fill-black dark:fill-white' />
          </a>
        </div>
        <p className='text-slate-700 dark:text-gray-400 text-xs italic text-center md:text-left mt-1'>React Native Developer @ Aleph-Labs</p>
        <p className='text-slate-700 dark:text-gray-400 text-xs italic text-center md:text-left mt-1'>
          aidilsafwan.aas@gmail.com
          <br />
          +60193607015
        </p>
      </div>
    </div>
  )
}

export { ProfileCard }
