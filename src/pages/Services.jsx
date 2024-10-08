import React from 'react'
import Navbar from '../components/NavBar';
import ServicesCard from '../components/ServicesCard';
import BookSection from '../components/BookSection';
import Footer from '../components/Footer';

const defaultBackground = require('../assets/services.png'); 


const Services = () => {
    let services = [
        {
            id: 1,
            name: 'Plumbing',
            image: require('../assets/plumbing.png'),
            },
            {
                id: 2,
                name: 'Painting',
                image: require('../assets/painting.png'),
         },
         {
            id: 3,
            name: 'Carpentry',
            image: require('../assets/carpentry.png'),
            },
            {
                id: 4,
                name: 'Tiling',
                image: require('../assets/tiling.png'),
                },
                {
                    id: 5,
                    name: 'Solar Panels',
                    image: require('../assets/solarpanel.png'),
             },
             {
                id: 6,
                name: 'Cable Setup',
                image: require('../assets/cablesetup.png'),
                },

                {
                    id: 7,
                    name: 'Electricals',
                    image: require('../assets/electricals.png'),
                    },
                    {
                        id: 8,
                        name: 'Brick Laying',
                        image: require('../assets/Bricklaying.png'),
                 },
                 {
                    id: 9,
                    name: 'Roofing',
                    image: require('../assets/roofing.png'),
                    }

        ]
  return (
   <>
   <section className='px-4 flex flex-col justify-center items-center w-full'>
   <div style={{backgroundImage: `url(${defaultBackground})`}}
    className='h-screen w-full p-2  bg-no-repeat bg-cover'>
       <Navbar />
        <div className='flex flex-col items-center justify-center text-4xl font-bold'>
            <h1 className='text=[#0a032f] text-center text-6xl font-bold mt-[100px]'>Services Available in your Area</h1>
        </div>

        <input type="search"  placeholder='Search for a service' className=' h-10 px-5 text-xl font-bold border-b-2 border-[#0E3995] focus:outline-none focus:border-blue-500'/>
    </div>
    <div className='grid grid-cols-3 gap-10 py-8 w-full'>
    {services.map((service) => (
      <ServicesCard key={service.id} service={service}/>
    ))}
    </div>
    <button className='py-4 px-8 text-[#0E3995] bg-white border-2 border-[#0E3995] rounded-3xl mt-10 align-center'>Load More.. </button>
    <BookSection/>
    <Footer/>
   </section>
   </>
  )
}

export default Services
