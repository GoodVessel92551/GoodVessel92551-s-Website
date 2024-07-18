import React from 'react'
import Link from 'next/link'

interface Props {
    title: string
}

function Page_Nav ({ title }: Props){
  return (
    <nav className='navBar'>
      <Link href="/" className='navTitle'>{title} <span>| GoodVessel92551</span></Link>
    </nav>
  )
}

export default Page_Nav
