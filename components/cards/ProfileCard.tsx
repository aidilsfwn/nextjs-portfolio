import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { PrimaryButton } from '..'

const ProfileCard = () => {
  const handleDownload = () => {
    const fileUrl = '/Aidil-Safwan-0193607015-CV.pdf'
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = 'Aidil-Safwan-0193607015-CV.pdf'
    link.click()
  }

  return (
    <div className='flex max-w-screen-md flex-col md:w-full md:self-center justify-center items-center rounded-lg bg-white dark:bg-slate-700 mx-6 px-6 py-8 shadow-md'>
      <div className='bg-white dark:bg-slate-500 shadow-lg px-4 py-2 rounded-lg'>
        <Image src={'/aidil-memoji.png'} width={80} height={80} className='rounded-lg' alt={'aidil-memoji'} />
      </div>
      <div>
        <div className='flex flex-row mt-5 md:mt-2 justify-center items-center'>
          <p className='text-slate-900 dark:text-white text-2xl text-center mr-2 font-semibold'>Aidil Safwan</p>
          <a href='https://www.linkedin.com/in/aidilsafwan/' target='_blank'>
            <FaLinkedin size={18} className='fill-black dark:fill-white' />
          </a>
        </div>
        <p className='text-slate-700 dark:text-gray-400 text-xs italic text-center mt-1 font-medium'>React Native Developer @ Aleph-Labs</p>
        <p className='text-slate-700 dark:text-gray-400 text-xs italic text-center mt-2 font-light'>
          aidilsafwan.aas@gmail.com
          <br />
          +60193607015
        </p>
      </div>
      <div className='mt-4'>
        <PrimaryButton title='Download CV' onClick={handleDownload} />
      </div>
    </div>
  )
}

export { ProfileCard }
