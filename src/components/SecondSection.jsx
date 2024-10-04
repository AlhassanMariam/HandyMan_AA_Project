import React from 'react'
import { FiTool } from "react-icons/fi";
import Card from './Card';

const SecondSection = () => {

let data = [
    {
        id: 1,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
    },
    {
        id: 2,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
    }, {
        id: 2,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
    }
]
  return (
   <>
    <div className="top-[958px]">
      <h1 className="font-inter font-semibold text-[56px] leading-[68px] text-center text-[#0E3995]">
        Explore our range of professional services
      </h1>

      <div className='flex justify-center items-center py-8 space-x-10'>
        {
            data.map((item) => (
                <Card key={item.id} mdata={item} />
            ))
        }
    </div>
    <div className=" w-[1449px] h-[200px] top-[1656px] bg-gradient-to-r from-[#0E3995] to-[#AFCDE5] bg-[length:200%] bg-[92.19deg] justify-between">
    <ul class="flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto p-10 mt-10">
    <li
        class="w-full text-sm font-semibold text-[white] p-6  border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span class="mb-1  font-display text-5xl">45K+</span>
        Users
    </li>
    <li
        class="w-full text-sm font-semibold text-[white] p-6  border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span class="mb-1  font-display text-5xl">78K+</span>
        Downloads
    </li>
    <li
        class="w-full text-sm font-semibold text-[white] p-6  border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span class="mb-1  font-display text-5xl">50+</span>
        Products
    </li>
</ul>

    </div>
    </div>
    
   </>
  )
}

export default SecondSection
