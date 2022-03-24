import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { ElectricityDashboard } from '../../../component'

const ElectricityPage = () => (
  <div>
    <Head>
      <title>Electricity | PaySure</title>
    </Head>

    <ElectricityDashboard />
  </div>
)

export default ElectricityPage
