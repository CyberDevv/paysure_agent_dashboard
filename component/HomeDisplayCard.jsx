import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { Avatar } from '@mui/material'

import { HomeCardAvatar } from './SVGIcons'

const HomeDisplayCard = ({ data = [], hasIcon, title }) => {
  return (
    <div tw="mt-10">
      {title && <Title className="font-500">{title}</Title>}
      <div>
        <MainWrapper tw="mt-5">
          {data.map(({ amount, title, link }, index) => {
            // children component
            const Children = () => {
              return (
                <>
                  {hasIcon && (
                    <AvatarWrapper>
                      <Avatar
                        sx={{
                          height: {
                            xs: '30px',
                            sm: '40px',
                            lg: '50px',
                          },
                          width: {
                            xs: '30px',
                            sm: '40px',
                            lg: '50px',
                          },
                        }}
                      >
                        <HomeCardAvatar />
                      </Avatar>
                    </AvatarWrapper>
                  )}

                  <div css={[!hasIcon && tw`space-y-3`]}>
                    <H1 className="font-bold">{amount}</H1>
                    <P>{title}</P>
                  </div>
                </>
              )
            }

            return (
              <Wrapper
                key={index}
                css={[
                  !hasIcon ? tw`px-4 py-6 lg:(px-8)` : tw`p-4 lg:(p-5)`,
                  link && tw`hover:(border-gray-300 bg-blue-50)`,
                ]}
              >
                {link && (
                  <Link href={link}>
                    <a>
                      <Children />
                    </a>
                  </Link>
                )}

                {!link && <Children />}
              </Wrapper>
            )
          })}
        </MainWrapper>
      </div>
    </div>
  )
}

// Tailwind style
const MainWrapper = tw.div`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xl:(gap-5)`
const Wrapper = tw.div`bg-blue-light min-w-[130px] border border-border rounded-lg transition-colors lg:(min-w-[235px])`
const AvatarWrapper = tw.div`flex justify-end`
const H1 = tw.h1`text-2xl sm:text-3xl lg:text-3xl xl:text-[33px] text-[#191716]`
const P = tw.p`text-sm text-paysure-50 mt-1 mb-2 lg:(text-base mb-3)`
const Title = tw.h3`tracking-[-0.02em] text-gray-dark`

export default HomeDisplayCard

// FIXME: Make the 320 screen of orgaizaitons text fit into the card
