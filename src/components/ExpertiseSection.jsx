// ExpertiseSection component
import React from 'react';
const Expert = require("../assets/pexels-olly-3761508 1.png")

const ExpertiseSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-gradient-to-r from-[#0E3995] to-[#AFDCE5] p-6 rounded-lg'>
      <div className='md:w-1/2 p-4'>
        <h2 className='text-2xl font-semibold text-white'>Reasons to trust our Expertise</h2>
        <ul className='text-white mt-4'>
          <li>• Experienced Professionals</li>
          <p>Our handymen are skilled, certified, and have years of experience in handling a variety of home repairs and projects. We ensure that every job is done right the first time.</p>
          <li>• Fast and Reliable Service</li>
          <p>Once we understand your needs, we’ll provide you with a transparent, no-obligation quote. You’ll know exactly what to expect in terms of cost and time.</p>
          <li>• Schedule Your Appointment</li>
          <p>Choose a time that works best for you. Our handyman professionals are available at flexible times to fit into your schedule.</p>
          <li>• We Get to Work</li>
          <p>
          Our certified, experienced handymen will arrive at your location on time, fully equipped to tackle the job. We ensure high-quality workmanship and leave your space clean and functional
          </p>
        </ul>
        <button className='mt-4 bg-white text-[#0E3995] py-2 px-4 rounded'>Book now</button>
      </div>

      <div className='md:w-1/2 p-4'>
    <img src={Expert} alt='Expert' className='rounded-lg' />
      </div>
    </div>
  );
};

export default ExpertiseSection;