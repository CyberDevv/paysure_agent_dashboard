import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'

import { Layout } from '..'
import { Airtime, Data, TvSubscription, Electricity, Transfer, Tax, Internet } from '../SVGIcons'

const BillPaymentDashboard = () => {
  return (
    <Layout title="Bills">
      <section>
        <div css={[tw`flex justify-between items-center`]}>
          <Ttile className="font-bold">Bills</Ttile>
        </div>

        <div tw="grid grid-cols-2 gap-4 mt-4 lg:(grid-cols-4 mt-5) xl:(grid-cols-5)">
          <Compcard
            icon={<Airtime />}
            link="/billPayment/airtime"
            label="Airtime"
          />
          <Compcard icon={<Data />} link="/billPayment/data" label="Data" />
          <Compcard
            icon={<TvSubscription />}
            link="/billPayment/tvSubscription"
            label="TV Subscription"
          />
          <Compcard
            icon={<Electricity />}
            link="/billPayment/electricity"
            label="Electricity"
          />
          <Compcard
            icon={<Transfer />}
            link="/billPayment/transfer"
            label="Transfer"
          />
          <Compcard
            icon={<Tax />}
            link="/billPayment/tax"
            label="Tax"
          />
          <Compcard
            icon={<Internet />}
            link="/billPayment/internet"
            label="Internet"
          />
        </div>
      </section>
    </Layout>
  )
}

const Compcard = ({ icon, link, label }) => {
  return (
    <div tw="border rounded-[20px] border-[#E2E8F0] transition duration-300 hover:(bg-[#E2E8F0])">
      <Link href={link}>
        <a tw="cursor-pointer block p-6 pt-[60px] w-full h-full">
          {icon}
          <span tw="block mt-6 text-dark">{label}</span>
        </a>
      </Link>
    </div>
  )
}

// Tailwind Styles
const Ttile = tw.h1`text-gray-dark tracking-[-0.05em] text-2xl lg:text-[28px] xl:(text-[32px])`

export default BillPaymentDashboard
