import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TerminalTransactionLIst } from '../../../component'

const TransactionList = () => (
  <div>
    <Head>
      <title>Terminal | PaySure</title>
    </Head>

    <TerminalTransactionLIst />
  </div>
)

export default TransactionList
