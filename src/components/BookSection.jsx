import React from 'react'

const BookSection = () => {
  return (
    <>
    <section className='h-[618px] bg-[#AFCDE5] flex flex-col  items-center p-2'>
        <h1 className='font-semibold text-6xl text-center text-[#203C79] my-10'>
        Ready to get your home <br/>
        in shape ?
        </h1>
        <h3 className='text-2xl font-semibold text-center p-8 my-6'>At [ Handy man], we believe in making home improvement and repairs stress-free and reliable. Our team of experienced and certified handymen is dedicated to
        providing top-notch services that you can trust. 
        we’ve got the skills to get the job done right 
        the first time.</h3>

<button className='mt-4 text-[white] bg-[#0E3995] py-[19px] px-[21px] rounded-3xl w-[205px]'>Book now</button>
    </section>
    </>
  )
}

export default BookSection
