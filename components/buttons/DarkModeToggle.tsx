'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const DarkModeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} className='hover:animate-pulse rounded-full p-3 absolute bottom-4 right-4 bg-white dark:bg-slate-700 shadow-xl'>
      {theme === 'dark' || theme === 'system' || resolvedTheme === 'dark' ? <MdDarkMode size={28} className='fill-white' /> : <MdLightMode size={28} className='fill-black' />}
    </button>
  )
}

export { DarkModeToggle }
