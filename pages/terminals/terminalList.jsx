import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TerminalList } from '../../component'

const TransactionList = () => (
  <div>
    <Head>
      <title>Terminal List | PaySure</title>
    </Head>

    <TerminalList />
  </div>
)

export default TransactionList
