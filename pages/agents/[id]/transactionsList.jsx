import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { AgentTransactionLIst } from '../../../component'

const TransactionList = () => (
  <div>
    <Head>
      <title>Agent Transaction List | PaySure</title>
    </Head>

    <AgentTransactionLIst />
  </div>
)

export default TransactionList
