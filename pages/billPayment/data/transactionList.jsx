import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { DataTransactionListDashboard } from '../../../component'

const DataTransactionListPage = () => (
  <div>
    <Head>
      <title>Transaction Record | PaySure</title>
    </Head>

    <DataTransactionListDashboard />
  </div>
)

export default DataTransactionListPage
