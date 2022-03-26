import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Button, Divider, Switch } from '@mui/material'

import { Verified, UnVerified, ArrowBack } from '../SVGIcons'

const BuyAirtimeDashboard = ({ title, children, infoState, confirmState }) => {
  return (
    <>
      <SectionsWrapper>
        {/* Section 1 */}
        <aside css={[tw`mt-4  w-full lg:(max-w-sm mt-8)`]}>
          <div>
            <Link href="/billPayment/airtime">
              <a tw="text-dark text-[13px] cursor-pointer ">
                {<ArrowBack />} Back
              </a>
            </Link>
            <Ttile className="font-bold">{title}</Ttile>
          </div>

          {/* Steps indicatior */}
          <div tw="mt-8 flex space-x-8 items-center justify-center lg:(block space-y-8 space-x-0)">
            <p tw="pr-3 text-[13px]">
              <i tw="mr-4">{infoState ? <Verified /> : <UnVerified />}</i>
              Enter Information
            </p>
            <p tw="pr-3 text-[13px]">
              <i tw="mr-4">{confirmState ? <Verified /> : <UnVerified />}</i>
              Confirm Transaction
            </p>
          </div>
        </aside>

        {/* Vertical Divider */}
        <Divider css={[tw`hidden lg:block`]} orientation="vertical" flexItem />

        {/* sections 2 */}
        <div css={[tw`w-full mt-16 lg:(flex justify-center) xl:mt-8`]}>
          {children}
        </div>

        <Divider css={[tw`hidden lg:block`]} orientation="vertical" flexItem />

        {/* Section 3 */}
        <aside
          css={[
            tw`mt-16 w-full lg:(max-w-[240px]) divide-y-2 divide-[#EBF2FA]`,
          ]}
        >
          <SponoredAd
            label="5GB no N2000 on Airel"
            btnLabel="Click to buy data now"
          />
          <SponoredAd
            label="Have you paid your Electricity bills this month"
            description="Pay now to avoid nepa wahala"
            btnLabel="Send money"
            btn
          />
          <SponoredAd
            label="5GB no N2000 on Airel"
            btnLabel="Click to buy data now"
          />
        </aside>
      </SectionsWrapper>
    </>
  )
}

const SponoredAd = ({ label, description, btnLabel, btn }) => {
  return (
    <div tw="flex flex-col items-center justify-center py-10 px-5 text-center">
      {/* Avatar */}
      <div tw="w-16 h-16 bg-[#E4ECF7] rounded-full"></div>

      {/* Text */}
      <div tw="mt-4">
        <p tw="text-light-dark tracking-[-0.025em]" className="font-500">
          {label}
        </p>
        {description && (
          <p tw="text-[13px] text-light-dark mt-3">{description}</p>
        )}
      </div>

      {/* buttons */}
      <div>
        {!btn && (
          <Button tw="text-[#A6B7D4] normal-case text-[13px] mt-1.5">
            {btnLabel}
          </Button>
        )}

        {btn && (
          <Button tw="bg-[#A6B7D4] text-white py-3 px-7 rounded-xl text-sm normal-case mt-7 hover:(bg-[#92a4c4])">
            {btnLabel}
          </Button>
        )}
      </div>
    </div>
  )
}

// Tailwind styles
const Ttile = tw.h1`text-light-dark tracking-[-0.05em] mt-5 text-center text-xl lg:(text-2xl text-left)`
const SectionsWrapper = tw.div`flex flex-col lg:flex-row`

export default BuyAirtimeDashboard
