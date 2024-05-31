import React from 'react'
import Header1 from '../components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Image from 'next/image'
import Head from 'next/head'
import Header4 from '@/components/Header4'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO : India`s best Online Hotel Booking Site.</title>
        <link rel='icon' href='/xx.png'></link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className='mx-20'>
        <div className='my-10'>
          <Image src={'/banner.avif'} alt='banner1' width={200} height={200} className='h-70 w-full' />
        </div>
        <div className='mb-14'>
          <Image src={'/banner2.avif'} alt='banner1' width={200} height={200} className='h-30 w-full' />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  )
}

export default Home
