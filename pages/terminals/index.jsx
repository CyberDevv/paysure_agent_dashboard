import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TerminalsDashboard } from '../../component'

const TerminalsPage = () => (
  <div>
    <Head>
      <title>Terminals | PaySure</title>
    </Head>

    <TerminalsDashboard />
  </div>
)

export default TerminalsPage
