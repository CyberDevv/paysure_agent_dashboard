import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { AccountVerificationDashboard } from '../component'

const AccountVerificationPage = () => (
  <div>
    <Head>
      <title>Account Verification | PaySure</title>
    </Head>

    <AccountVerificationDashboard />
  </div>
)

export default AccountVerificationPage
