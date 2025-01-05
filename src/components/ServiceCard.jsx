import React from 'react'

export default function ServiceCard({img, title, description}) {
  return (
    <div className="bg-green-600 mx-4 h-[100px]">
      <div>
        <img src={img} alt="img" />
      </div>
      <p>{title}</p>
      <p>
        {description}
      </p>
    </div>
  )
}
