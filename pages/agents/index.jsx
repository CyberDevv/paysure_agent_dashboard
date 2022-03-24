import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { AgentDashboard } from '../../component'

const AgentsPage = () => (
  <div>
    <Head>
      <title>Agents | PaySure</title>
    </Head>

    <AgentDashboard />
  </div>
)

export default AgentsPage
