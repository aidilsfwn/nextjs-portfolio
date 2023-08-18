'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [currentMode, setCurrentMode] = useState<string>('light')

  useEffect(() => {
    if (theme) setCurrentMode(theme)
  }, [theme])

  return (
    <button onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} className='transition-all duration-100 rounded-full p-3 absolute bottom-4 right-4 bg-white dark:bg-slate-700 drop-shadow-lg'>
      {currentMode === 'dark' ? <MdDarkMode size={28} className='fill-white' /> : <MdLightMode size={28} className='fill-black' />}
    </button>
  )
}

export { DarkModeToggle }
