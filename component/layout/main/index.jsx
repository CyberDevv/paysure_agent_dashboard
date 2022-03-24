import React from 'react'
import tw from 'twin.macro'
import Router from 'next/router'

import NavBar from './NavBar.'
import SideBar from './SideBar'

const Index_main_layout = ({ children, title, goBack }) => {
  // usestate hook
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)

  // useEffect hook
  // React.useEffect(() => {
  //   // check if user is logged in
  //   if (!user.isLoggedIn && localStorage.getItem('user')) {
  //     dispatch(login(JSON.parse(localStorage.getItem('user'))))
  //   }
  // }, [user])

  // React.useEffect(() => {
  //   if (!localStorage.getItem('user')) {
  //     Router.push('/login')
  //   }
  // }, [user])

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
const Main = tw.main`pb-8`

export default Index_main_layout
