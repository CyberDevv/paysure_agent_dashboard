import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TvSubscriptionDashboard } from '../../../component'

const TvSubscriptionPage = () => (
  <div>
    <Head>
      <title>TV Subscription | PaySure</title>
    </Head>

    <TvSubscriptionDashboard />
  </div>
)

export default TvSubscriptionPage
