import Image from 'next/image'
import React from 'react'

export default function TeamCard({img, name, role}) {
  return (
    <div className='bg-[#F5FAFF] my-3 w-fit flex flex-col pb-3 items-center justify-center'>
      <Image src={img} width={300} height={300} />
      <h1 className='py-2 text-[21px] font-bold'>{name}</h1>
      <p className=' text-[14px]'>{role}</p>
    </div>
  )
}
