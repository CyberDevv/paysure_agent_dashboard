import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TransactionLIst } from '../../component'

const TransactionList = () => (
  <div>
    <Head>
      <title>Transaction List | PaySure</title>
    </Head>

    <TransactionLIst />
  </div>
)

export default TransactionList
