import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TvSubscriptionTransactionListDashboard } from '../../../component'

const TvSubscriptionTransactionListPage = () => (
  <div>
    <Head>
      <title>Transaction Record | PaySure</title>
    </Head>

    <TvSubscriptionTransactionListDashboard />
  </div>
)

export default TvSubscriptionTransactionListPage
