"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image3 from '../../../public/character.png'

const Sidebar = (slug) => {

  return (
    <div className='w-1/3 flex flex-col'>
      <Image src={image3} />
      <h2>salve sono antonio, uno sviluppatore a tutto tondo, ho conoscenze e studio attivamente sia frontend che backend, però sono principalmente appassionato di frontend</h2>
    </div>
  )
}

export default Sidebar