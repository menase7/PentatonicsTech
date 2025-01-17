"use client";

import Image from 'next/image'
import React from 'react'

export default function ServiceCard({img, title, description}) {
  return (
    <div className="shadow-md hover:bg-[#051242] text-[#051242] hover:text-white flex flex-col gap-3 justify-center items-center m-4 p-[20px] md:p-[30px] rounded-md">
      <div className='h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]'>
        <Image width={60} height={60} src={img} alt='service' layout='responsive' />
      </div>
      <p className='text-[21px] font-bold'>{title}</p>
      <p className='text-center text-[#80839d] hover:text-[#c3c3c4]'>
        {description}
      </p>
      <button className='text-[14px] font-semibold'>Read more</button>
    </div>
  )
}
