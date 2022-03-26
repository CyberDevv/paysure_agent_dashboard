import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { BuyElectricityDashboard } from '../../../component'

const BuyElectricityPage = () => (
  <div>
    <Head>
      <title>Buy Electricity | PaySure</title>
    </Head>

    <BuyElectricityDashboard />
  </div>
)

export default BuyElectricityPage
