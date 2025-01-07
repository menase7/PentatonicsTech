import Image from 'next/image'
import React from 'react'

export default function ProjectCard({img, title, description}) {
  return (
    <div className="shadow-md flex flex-col gap-3 justify-center items-center m-4 p-[10px] md:p-[20px] rounded-md">
      <div className='h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]'>
        <Image width={60} height={60} src={img} alt='service' layout='responsive' />
      </div>
      <p className='text-[21px] font-bold'>{title}</p>
      <p className='text-center text-[#c3c3c4]'>
        {description}
      </p>
    </div>
  )
}
