import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TerminalDashboard } from '../../../component'

const TerminalPage = () => (
  <div>
    <Head>
      <title>Terminal | PaySure</title>
    </Head>

    <TerminalDashboard />
  </div>
)

export default TerminalPage
