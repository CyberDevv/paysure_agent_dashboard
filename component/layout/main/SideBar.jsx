import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Backdrop, Button } from '@mui/material'

import {
  Categories,
  Settlement,
  BillPayment,
  Transactions,
  Users,
  WalletSVG,
} from '../../SVGIcons'

const SideBar_main_layout = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const { asPath } = useRouter()

  // NavBar styles
  const Nav = styled.nav`
    ${tw`w-[245px] min-w-[245px] h-full bg-gray-light pl-8 py-7 fixed overflow-y-auto z-20 transition-transform transform lg:(transform-none)`}
    ${isSideBarOpen ? tw`translate-x-0` : tw` -translate-x-full`}
  `

  // NavItem Component
  const NavItem = ({ label, icon, link }) => {
    return (
      <li>
        <Link href={link || `/${label.toLowerCase()}`}>
          <a>
            <MUIButton
              fullWidth
              startIcon={icon}
              css={[
                asPath === (link || `/${label.toLowerCase()}`)
                  ? tw`text-paysure-primary-100`
                  : asPath.includes(`/${label.toLowerCase()}`)
                  ? tw`text-paysure-primary-100`
                  : tw`text-[#A6B7D4] hover:text-[#4A5568]`,
              ]}
            >
              <Span>{label}</Span>
            </MUIButton>
          </a>
        </Link>
      </li>
    )
  }

  // fuctions
  const handleBackdropClose = React.useCallback(() => {
    setIsSideBarOpen(!isSideBarOpen)
  })

  return (
    <>
      <Nav>
        <Link href="/">
          <a>
            <Image
              src="/images/logo_purple.png"
              alt="paysure"
              width="92px"
              height="24px"
            />
          </a>
        </Link>

        <Ul>
          <NavItem label="Home" icon={<Categories />} link="/" />
          <NavItem
            label="Bill Paymment"
            icon={<BillPayment />}
            link="/billPayment"
          />
          <NavItem label="Wallet" icon={<WalletSVG />} />
          <NavItem label="Settlements" icon={<Settlement />} />
          <NavItem label="Transactions" icon={<Transactions />} />
          <NavItem label="Profile" icon={<Users />} />
        </Ul>
      </Nav>

      {/* Backdrop */}
      <Backdrop
        open={isSideBarOpen}
        onClick={handleBackdropClose}
        sx={{ zIndex: '10' }}
      />
    </>
  )
}

// Tailwind Styles￼
const Ul = tw.ul`mt-6 space-y-4 lg:(mt-8) xl:(mt-14 space-y-6)`
const Span = tw.span`text-[13px] ml-4`
const MUIButton = tw(Button)`normal-case justify-start `

export default SideBar_main_layout
