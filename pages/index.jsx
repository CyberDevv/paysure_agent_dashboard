import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { HomeDashboard } from '../component'

const IndexPage = () => (
  <div>
    <Head>
      <title>Home | PaySure</title>
    </Head>

    <HomeDashboard />
  </div>
)

export default IndexPage
