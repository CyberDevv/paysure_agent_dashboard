import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { WalletHistoryDashboard } from '../../component'

const WalletHistoryPage = () => (
  <div>
    <Head>
      <title>Wallet History | PaySure</title>
    </Head>

    <WalletHistoryDashboard />
  </div>
)

export default WalletHistoryPage
