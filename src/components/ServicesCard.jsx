import React from 'react';

const ServicesCard = ({service}) => {
  return (
    <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500">
      <div className="block overflow-hidden">
        <img src={service.image} alt="Card image" />
      </div>
      <div className="p-4">
        <h4 className="text-4xl font-semibold text-[#AFCDE5] mb-2 capitalize transition-all duration-500">
        {service.name}
        </h4>
      </div>
    </div>
  );
};

export default ServicesCard;
