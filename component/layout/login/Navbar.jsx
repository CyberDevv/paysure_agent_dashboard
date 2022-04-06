import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'

const Navbar = () => {
  return (
    <Nav>
      <Image src="/images/logo_purple.png" width={91.2} height={24} />
    </Nav>
  )
}

// Tailwind styles
const Nav = tw.nav`border-b-4 border-[#F1F1F5] py-4 px-6 sm:px-12 lg:(px-16 py-6) xl:px-[120px]`

export default Navbar
