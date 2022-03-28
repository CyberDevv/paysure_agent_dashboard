import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TransferTransactionListDashboard } from '../../../component'

const TransferTransactionListPage = () => (
  <div>
    <Head>
      <title>Transaction Record | PaySure</title>
    </Head>

    <TransferTransactionListDashboard />
  </div>
)

export default TransferTransactionListPage
