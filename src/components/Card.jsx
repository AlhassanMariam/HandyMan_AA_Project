
import React from 'react'

const Card = ({mdata}) => {
    console.log(mdata)
  return (
    <>
    <section className='flex flex-col items-center justify-center'>
    <div className="card bg-base-100 shadow-xl w-[360px] h-[164px]">
  <div className="card-body text-center justify-center align-center p-6">
    <span className='flex align-center justify-center'>{mdata.icon}</span>
    <h1>{mdata.header}</h1>
    <p>{mdata.title}</p>
  </div>
</div>
    </section>
    
     </>
  )
}

export default Card
