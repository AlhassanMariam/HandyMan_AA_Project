
import React from 'react'

const Card = ({mdata}) => {
    console.log(mdata)
  return (
    <>
    <section className='flex flex-col items-center justify-center'>
    <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title align-center">{mdata.icon}</h2>
    <p>{mdata.title}</p>
  </div>
</div>
    </section>
    
     </>
  )
}

export default Card
