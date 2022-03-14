import React from 'react'
import tw from 'twin.macro'

import NavBar from './NavBar.main_layout'
import SideBar from './SideBar.main_layout'

const Index_main_layout = ({ children, title, goBack }) => {
  // usestate hook
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)

  return (
    <Wrapper>
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />

      <Section>
        <NavBar
          setIsSideBarOpen={setIsSideBarOpen}
          title={title}
          goBack={goBack}
        />
        <Main>{children}</Main>
      </Section>
    </Wrapper>
  )
}

// Tailwind Styles
const Wrapper = tw.div`flex`
const Section = tw.section`w-full px-4 sm:(px-6) md:(px-10) lg:(px-6 ml-[245px]) xl:px-10`
const Main = tw.main`pb-8 xl:(py-6)`

export default Index_main_layout
