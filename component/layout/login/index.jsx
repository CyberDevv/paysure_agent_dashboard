import React from 'react'
import tw from 'twin.macro'

import Navbar from './Navbar'

const index = ({ children }) => {
  return (
    <div>
      <Navbar />

      <Main>{children}</Main>
    </div>
  )
}

// Tailwind styles
const Main = tw.main`flex items-center justify-center h-[calc(100vh - 83px)] lg:(items-start py-24)`

export default index
