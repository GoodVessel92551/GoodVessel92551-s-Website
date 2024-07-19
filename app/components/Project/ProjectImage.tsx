import React from 'react'
import Image from 'next/image'

interface props {
  image: string
  alt: string
}

export default function ProjectImage({ image, alt }: props) {
  return (
    <div>
      <Image className='projectImage' alt={alt} src={image} width={350} height={225}></Image>
    </div>
  )
}
