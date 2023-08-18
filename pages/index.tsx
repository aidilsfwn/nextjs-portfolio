import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { DarkModeToggle, ProfileCard } from '../components'

const Home: NextPage = () => {
  return (
    <main className='flex min-h-screen flex-col bg-white dark:bg-slate-800 py-8'>
      <Head>
        <title>Aidil Safwan</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DarkModeToggle />
      <ProfileCard />
    </main>
  )
}

export default Home
