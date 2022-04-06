import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'

import Navbbar from '../login/Navbar'

const index = ({ children }) => {
  return (
    <MainWrapper>
      <Aside>
        <Image src="/images/paysureLogoVertical.png" width={173} height={653} />
      </Aside>

      <div tw="w-full lg:(hidden)">
        <Navbbar />
      </div>

      <Main>{children}</Main>
    </MainWrapper>
  )
}

// Tailwind styles
const MainWrapper = tw.div`h-screen lg:flex`
const Aside = tw.div`w-1/4 h-screen bg-paysure-primary-100 hidden lg:(block min-w-[415px] w-[415px] py-[105px] pl-[193px] fixed)`
const Main = tw.main`flex items-center justify-center py-10 min-h-screen lg:(w-full ml-[415px] h-full items-start mt-0 py-36)`

export default index
