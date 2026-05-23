import React from 'react'
import HeroSection from '../components/HeroSection'
import BookingSection from '../components/BookingSection'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <BookingSection/>

        <div className='w-350 m-auto flex justify-between py-10'>
        <p className='text-slate-500 '>Popular Car</p>
        <Link className='text-blue-500 ' to='/category'>View All</Link>
        </div>

    </div>
  )
}

export default Home