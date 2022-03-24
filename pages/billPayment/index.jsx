import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { BillPaymentDashboard } from '../../component'

const BillPaymentPage = () => (
  <div>
    <Head>
      <title>Bill Payment | PaySure</title>
    </Head>

    <BillPaymentDashboard />
  </div>
)

export default BillPaymentPage
