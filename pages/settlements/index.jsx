import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { SettlementsDashboard } from '../../component'

const SettlementsPage = () => (
  <div>
    <Head>
      <title>Settlements | PaySure</title>
    </Head>

    <SettlementsDashboard />
  </div>
)

export default SettlementsPage
