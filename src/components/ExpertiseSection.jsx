// ExpertiseSection component
import React from 'react';
const Expert = require("../assets/pexels-olly-3761508 1.png")

const ExpertiseSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center  p-6 rounded-lg'>
      <div className='md:w-1/2 p-4'>
        <h2 className='text-[56px] font-semibold text-[#0E3995]'>Reasons to trust our Expertise</h2>
        <ul className=' mt-4'>
          <li className='text-2xl text-[#0E3995] font-semibold my-2'>• Professional Handyman</li>
          <p className='text-xl font-medium'>Our handymen are skilled, certified, and have years of experience in handling a variety of home repairs and projects. We ensure that every job is done right the first time.</p>
          <li className='text-2xl text-[#0E3995] font-semibold my-2'>• Fast and Reliable Service</li>
          <p className='text-xl font-medium'>Once we understand your needs, we’ll provide you with a transparent, no-obligation quote. You’ll know exactly what to expect in terms of cost and time.</p>
          <li className='text-2xl text-[#0E3995] font-semibold my-2'>• Schedule Your Appointment</li>
          <p className='text-xl font-medium'>Choose a time that works best for you. Our handyman professionals are available at flexible times to fit into your schedule.</p>
          <li className='text-2xl text-[#0E3995] font-semibold my-2'>• We Get to Work</li>
          <p className='text-xl font-medium'>
          Our certified, experienced handymen will arrive at your location on time, fully equipped to tackle the job. We ensure high-quality workmanship and leave your space clean and functional
          </p>
        </ul>
        <button className='mt-4 text-[white] bg-[#0E3995] py-[19px] px-[21px] rounded-3xl w-[205px]'>Book now</button>
      </div>

      <div className='md:w-1/2 p-4'>
    <img src={Expert} alt='Expert' className='rounded-lg' />
      </div>
    </div>
  );
};

export default ExpertiseSection;