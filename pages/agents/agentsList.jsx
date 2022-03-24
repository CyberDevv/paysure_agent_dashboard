import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { AgentsListDashboard } from '../../component'

const AgentsListsPage = () => (
  <div>
    <Head>
      <title>Agents List | PaySure</title>
    </Head>

    <AgentsListDashboard />
  </div>
)

export default AgentsListsPage
