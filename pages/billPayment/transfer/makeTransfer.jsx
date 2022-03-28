import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { MakeTransferDashboard } from '../../../component'

const MakeTransferPage = () => (
  <div>
    <Head>
      <title>Make Transfer | PaySure</title>
    </Head>

    <MakeTransferDashboard />
  </div>
)

export default MakeTransferPage
