import React from 'react'
import { FiTool } from "react-icons/fi";
import Card from './Card';

const SecondSection = () => {

let data = [
    {
        id: 1,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
        header: "Plumbing Repairs",
    },
    {
        id: 2,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
        header: "Plumbing Repairs",
    }, {
        id: 3,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
        header: "Plumbing Repairs",
    },
    {
        id: 4,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
        header: "Plumbing Repairs",
    },
    {
        id: 5,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
        header: "Plumbing Repairs",
    }, {
        id: 6,
        title: "Our expert plumbers can handle all your household plumbing needs quickly and efficiently.",
        icon: <FiTool />,
        header: "Plumbing Repairs",
    }
]
  return (
   <>
    <div className="top-[958px] bg-[#AFCDE57D]">
      <h1 className="font-inter font-semibold text-[56px] leading-[68px] text-center text-[#0E3995]">
        Explore our range of <br/> professional services
      </h1>

      <div className="grid grid-cols-3 gap-10 py-8">
    {data.map((item) => (
        <Card key={item.id} mdata={item} />
    ))}
</div>

<div className=" h-[150px] bg-gradient-to-r from-[#0E3995] to-[#AFCDE5] bg-[length:200%] bg-[92.19deg] flex justify-center items-center py-10">
    <ul className="flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto">
        <li className="w-full text-sm font-semibold text-white p-6 border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center items-center text-center">
            <span className="mb-1 font-display text-5xl">200+</span>
            Clients
        </li>
        <li className="w-full text-sm font-semibold text-white p-6 border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center items-center text-center">
            <span className="mb-1 font-display text-5xl">2 y+</span>
            Experience
        </li>
        <li className="w-full text-sm font-semibold text-white p-6 border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center items-center text-center">
            <span className="mb-1 font-display text-5xl">250+</span>
            Projects
        </li>
    </ul>
</div>

</div>
    
   </>
  )
}

export default SecondSection
