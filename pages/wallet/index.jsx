import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { WalletDashboard } from '../../component'

const WalletPage = () => (
  <div>
    <Head>
      <title>Wallet | PaySure</title>
    </Head>

    <WalletDashboard />
  </div>
)

export default WalletPage
