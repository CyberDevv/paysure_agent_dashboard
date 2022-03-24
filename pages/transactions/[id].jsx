import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TransactionInfoDashboard } from '../../component'

const TransactionInfoPage = () => (
  <div>
    <Head>
      <title>Transaction Info | PaySure</title>
    </Head>

    <TransactionInfoDashboard />
  </div>
)

export default TransactionInfoPage
