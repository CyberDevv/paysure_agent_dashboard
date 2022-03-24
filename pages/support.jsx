import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { SupportDashboard } from '../component'

const IndexPage = () => (
  <div>
    <Head>
      <title>Support | PaySure</title>
    </Head>

    <SupportDashboard />
  </div>
)

export default IndexPage
