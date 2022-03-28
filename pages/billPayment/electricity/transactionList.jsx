import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { ElectricityTransactionListDashboard } from '../../../component'

const ElectricityTransactionListPage = () => (
  <div>
    <Head>
      <title>Transaction Record | PaySure</title>
    </Head>

    <ElectricityTransactionListDashboard />
  </div>
)

export default ElectricityTransactionListPage
