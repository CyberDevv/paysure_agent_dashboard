import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { IndividualAgentDashboard } from '../../../component'

const AgentPage = () => (
  <div>
    <Head>
      <title>Agent | PaySure</title>
    </Head>

    <IndividualAgentDashboard />
  </div>
)

export default AgentPage
