import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { InternetTransactionListDashboard } from '../../../component'

const InternetTransactionListPage = () => (
  <div>
    <Head>
      <title>Transaction Record | PaySure</title>
    </Head>

    <InternetTransactionListDashboard />
  </div>
)

export default InternetTransactionListPage
