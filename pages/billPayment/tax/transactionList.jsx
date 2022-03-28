import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TaxTransactionListDashboard } from '../../../component'

const TaxTransactionListPage = () => (
  <div>
    <Head>
      <title>Transaction Record | PaySure</title>
    </Head>

    <TaxTransactionListDashboard />
  </div>
)

export default TaxTransactionListPage
