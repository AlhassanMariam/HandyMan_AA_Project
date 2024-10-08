import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './NavBar';

const defaultBackground = require('../assets/hero.png'); 

const HeroSection = () => {
  return (
    <section style={{backgroundImage: `url(${defaultBackground})`}}
    className='h-screen p-2'>
       <Navbar />
        <div className='flex flex-col items-center justify-center text-4xl font-bold'>
            <h1 className='text=[#0a032f] text-center text-6xl font-bold mt-[100px]'>Connecting Cients With <br/> Proffessinal Handy Man Services</h1>
        </div>
        <div>
            <h2 className='text-2xl font-semibold mt-[50px] text-center'>From repairs to renovations, we get the job done on time  with the budget you set.</h2>
        </div>
       
        <div className='flex  items-center justify-center text-4xl font-bold  mt-[170px] '>
        <button className='bg-[#0E3995] px-4 py-2 text-[white] rounded-lg '>Register as a Client</button>
        <button className='bg-[#0E3995] px-4 py-2 text-[white] rounded-lg ml-4'>Register as a Handyman</button>
          </div>
    </section>
  )
}

export default HeroSection
