import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { PayTaxDashboard } from '../../../component'

const PayTaxPage = () => (
  <div>
    <Head>
      <title>Pay Tax | PaySure</title>
    </Head>

    <PayTaxDashboard />
  </div>
)

export default PayTaxPage
