import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { SetUpPasswordDashboard } from '../component'

const SetUpPasswordPage = () => (
  <div>
    <Head>
      <title>Password Setup | PaySure</title>
    </Head>

    <SetUpPasswordDashboard />
  </div>
)

export default SetUpPasswordPage
