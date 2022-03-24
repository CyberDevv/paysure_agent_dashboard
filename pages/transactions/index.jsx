import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TransactionsDashboard } from '../../component'

const TransactionsPage = () => (
  <div>
    <Head>
      <title>Transactions | PaySure</title>
    </Head>

    <TransactionsDashboard />
  </div>
)

export default TransactionsPage
