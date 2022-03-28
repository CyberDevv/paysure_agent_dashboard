import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { AirtimeTransactionListDashboard } from '../../../component'

const AirtimeTransactionListPage = () => (
  <div>
    <Head>
      <title>Transaction Record | PaySure</title>
    </Head>

    <AirtimeTransactionListDashboard />
  </div>
)

export default AirtimeTransactionListPage
