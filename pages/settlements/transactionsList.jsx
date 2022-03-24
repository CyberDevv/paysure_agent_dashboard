import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { SettlementTransactionLIst } from '../../component'

const TransactionList = () => (
  <div>
    <Head>
      <title>Transction List | PaySure</title>
    </Head>

    <SettlementTransactionLIst />
  </div>
)

export default TransactionList
